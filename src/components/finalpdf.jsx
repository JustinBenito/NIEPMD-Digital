import { useState, useEffect } from 'react';
import { jsPDF } from 'jspdf';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const NewInputPage = () => {
  const [patientData, setPatientData] = useState(null);
  const [loading, setLoading] = useState(true);
  const db = getFirestore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');
        if (!id) return;

        const docRef = doc(db, 'patients', id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          console.log(docSnap.data())
          setPatientData(docSnap.data());
        } else {
          alert('No patient found with this ID.');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleGeneratePDF = () => {
    if (!patientData) {
      alert("No patient data loaded!");
      return;
    }
  
    const docPdf = new jsPDF();
    const pageWidth = docPdf.internal.pageSize.getWidth();
    const pageHeight = docPdf.internal.pageSize.getHeight();
  
    let y = 20;
    const margin = 15;
    const boxPadding = 5;
    const boxSpacing = 10;
    const boxBackground = "#f8f8f8";
    const lineHeight = 8; // slightly increased
    const keyValueSpacing = 5; // space between key and value
  
    const orderedSections = [
      'name', 'identification', 'demographic', 'complaints', 'history', 'familyHistory', 'developmentalHistory',
      'expectations', 'schoolHistory', 'specialEducation', 'medicalExam', 'motorAssessment',
      'intellectualAssessment', 'speech', 'audiology', 'physiotherapy',
      'occupational', 'prosthetic'
    ];
  
    const drawRoundedBox = (x, y, width, height, radius = 5) => {
      docPdf.setFillColor(boxBackground);
      docPdf.roundedRect(x, y, width, height, radius, radius, 'F');
    };
  
    const renderSection = (title, contentObj) => {
      const boxWidth = pageWidth - 2 * margin;
      let tempY = y + boxPadding + 10; // after title
      let contentLines = [];
  
      if (title === 'name') {
        // Special case: just print name without looping
        contentLines.push({ type: 'onlyValue', text: contentObj });
      } else {
        for (const key in contentObj) {
          if (Object.prototype.hasOwnProperty.call(contentObj, key)) {
            const value = contentObj[key];
            if (typeof value === 'object' && value !== null) {
              contentLines.push({ type: 'key', text: `${key}:` });
              for (const nestedKey in value) {
                if (Object.prototype.hasOwnProperty.call(value, nestedKey)) {
                  const nestedValue = value[nestedKey];
                  contentLines.push({
                    type: 'keyValue',
                    key: nestedKey,
                    value: typeof nestedValue === 'object' ? JSON.stringify(nestedValue) : nestedValue
                  });
                }
              }
            } else {
              contentLines.push({ type: 'keyValue', key: key, value: value });
            }
          }
        }
      }
  
      // Calculate box height dynamically
      let boxHeight = 10 + 2 * boxPadding; // for title
      contentLines.forEach(line => {
        if (line.type === 'keyValue') {
          const keyWidth = docPdf.getTextWidth(line.key + ": ");
          const availableWidth = boxWidth - 2 * boxPadding - keyWidth - keyValueSpacing;
          const wrappedText = docPdf.splitTextToSize(String(line.value), availableWidth);
          boxHeight += wrappedText.length * lineHeight;
        } else {
          const wrappedText = docPdf.splitTextToSize(line.text, boxWidth - 2 * boxPadding);
          boxHeight += wrappedText.length * lineHeight;
        }
      });
  
      // Page break if needed
      if (y + boxHeight > pageHeight - margin) {
        docPdf.addPage();
        y = margin;
      }
  
      drawRoundedBox(margin, y, boxWidth, boxHeight);
  
      let innerY = y + boxPadding + 5;
  
      // Title
      docPdf.setFont("Helvetica", "bold");
      docPdf.setFontSize(14);
      docPdf.text(title, margin + boxPadding, innerY);
      innerY += 10;
  
      // Content rendering
      docPdf.setFontSize(12);
  
      contentLines.forEach(line => {
        if (line.type === 'onlyValue') {
          docPdf.setFont("Helvetica", "normal");
          const wrappedText = docPdf.splitTextToSize(line.text, boxWidth - 2 * boxPadding);
          wrappedText.forEach(txt => {
            docPdf.text(txt, margin + boxPadding, innerY);
            innerY += lineHeight;
          });
        } else if (line.type === 'keyValue') {
          const keyWidth = docPdf.getTextWidth(line.key + ": ");
          let xStart = margin + boxPadding;
          let availableWidth = boxWidth - 2 * boxPadding - keyWidth - keyValueSpacing;
  
          docPdf.setFont("Helvetica", "bold");
          docPdf.text(`${line.key}: `, xStart, innerY);
  
          docPdf.setFont("Helvetica", "normal");
          const wrappedText = docPdf.splitTextToSize(String(line.value), availableWidth);
  
          if (wrappedText.length > 0) {
            docPdf.text(wrappedText[0], xStart + keyWidth + keyValueSpacing, innerY);
          }
  
          for (let i = 1; i < wrappedText.length; i++) {
            innerY += lineHeight;
            docPdf.text(wrappedText[i], xStart + keyWidth + keyValueSpacing, innerY);
          }
  
          innerY += lineHeight;
        } else if (line.type === 'key') {
          docPdf.setFont("Helvetica", "bold");
          const wrappedText = docPdf.splitTextToSize(line.text, boxWidth - 2 * boxPadding);
          wrappedText.forEach(txt => {
            docPdf.text(txt, margin + boxPadding, innerY);
            innerY += lineHeight;
          });
        }
      });
  
      y += boxHeight + boxSpacing;
    };
  
    // Title
    docPdf.setFontSize(20);
    docPdf.setFont("Helvetica", "bold");
    docPdf.text("Patient Comprehensive Report", pageWidth / 2, y, { align: 'center' });
    y += 20;
  
    // Render sections
    orderedSections.forEach(section => {
      if (patientData[section]) {
        renderSection(section, patientData[section]);
      }
    });
  
    // Render leftover fields
    for (const key in patientData) {
      if (!orderedSections.includes(key) && Object.prototype.hasOwnProperty.call(patientData, key)) {
        renderSection(key, patientData[key]);
      }
    }
  
    docPdf.save(`${patientData.name || 'patient'}-medical-report.pdf`);
  };
  
  
  
  
  
  
  


  if (loading) return <div className="text-center mt-10">Loading patient data...</div>;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-5xl font-bold mb-8">Patient Information</h2>

      {patientData ? (
        <div className="mb-8">
          <p><strong>Name:</strong> {patientData.name}</p>
          <p><strong>Age:</strong> {patientData.age}</p>
          <p><strong>UBID:</strong> {patientData.ubidNo}</p>
        </div>
      ) : (
        <p>No patient data available.</p>
      )}

      <button
        onClick={handleGeneratePDF}
        className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
      >
        Generate PDF
      </button>
    </div>
  );
};

export default NewInputPage;
