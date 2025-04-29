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
    const boxPadding = 8;
    const boxSpacing = 10;
    const boxBackground = "#f8f8f8";
    const lineHeight = 8; // slightly increased
    const keyValueSpacing = 5; // space between key and value
  
    const orderedSections = [
      'name','identification', 'demographic', 'complaints', 'history', 'familyHistory', 'developmentalHistory',
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
      let contentLines = [];
      const specialFields = ['provisionalDiagnosis', 'managementPlan', 'referrals'];
      const specialData = {};
    
      // Extract and temporarily remove special fields
      specialFields.forEach(field => {
        if (contentObj[field]) {
          specialData[field] = contentObj[field];
          delete contentObj[field];
        }
      });
    
      if (title === 'name') {
        contentLines.push({ type: 'onlyValue', text: contentObj });
      } else if (title === 'identification') {
        const order = ['photoUrl', 'ubidNo', 'dob', 'ageSex', 'refBy', 'informant', 'aadharNo'];
        order.forEach(key => {
          if (key === 'photoUrl' && contentObj[key]) {
            contentLines.push({ type: 'image', url: contentObj[key] });
          } else if (contentObj[key]) {
            contentLines.push({ type: 'keyValue', key: key, value: contentObj[key] });
          }
        });
      } else if (title === 'motorAssessment') {
        const limbs = ['RUL', 'LUL', 'RLL', 'LLL'];
        const fields = ['power', 'wasting', 'coordination', 'movement'];
    
        const tableHeaders = ['Tone', 'Power', 'Muscle Wasting', 'Coordination', 'AIM'];
        const cellWidth = (pageWidth - 2 * margin) / tableHeaders.length;
        const cellHeight = 10;
        let tableHeight = (limbs.length + 1) * cellHeight + 2 * boxPadding;
    
        if (y + tableHeight > pageHeight - margin) {
          docPdf.addPage();
          y = margin;
        }
    
        drawRoundedBox(margin, y, pageWidth - 2 * margin, tableHeight);
        let innerY = y + boxPadding + 5;
    
        docPdf.setFont("Helvetica", "bold");
        docPdf.setFontSize(14);
        docPdf.text(title, margin + boxPadding, innerY);
        innerY += 10;
    
        docPdf.setFontSize(12);
        tableHeaders.forEach((header, i) => {
          const splitHeader = docPdf.splitTextToSize(header, cellWidth - 4);
          docPdf.text(splitHeader, margin + i * cellWidth + 2, innerY);
        });
    
        innerY += cellHeight;
    
        limbs.forEach(limb => {
          docPdf.setFont("Helvetica", "bold");
          docPdf.text(limb, margin + 2, innerY);
          docPdf.setFont("Helvetica", "normal");
          fields.forEach((field, j) => {
            const key = `${limb}_${field}`;
            const value = contentObj[key] !== undefined ? String(contentObj[key]) : '';
            docPdf.text(value, margin + (j + 1) * cellWidth + 2, innerY);
          });
          innerY += cellHeight;
        });
    
        y += tableHeight + boxSpacing;
    
        // Append red special fields if available
        renderSpecialRedFields(specialData);
        return;
      } else {
        for (const key in contentObj) {
          if (Object.prototype.hasOwnProperty.call(contentObj, key)) {
            const value = contentObj[key];
            if (typeof value === 'object' && value !== null) {
              contentLines.push({ type: 'key', text: `${key}:` });
              for (const nestedKey in value) {
                if (Object.prototype.hasOwnProperty.call(value, nestedKey)) {
                  const nestedValue = value[nestedKey];
                  if (typeof nestedValue === 'object' && nestedValue !== null) {
                    contentLines.push({ type: 'key', text: `${nestedKey}:` });
                    for (const subKey in nestedValue) {
                      if (Object.prototype.hasOwnProperty.call(nestedValue, subKey)) {
                        contentLines.push({
                          type: 'keyValue',
                          key: subKey,
                          value: nestedValue[subKey]
                        });
                      }
                    }
                  } else {
                    contentLines.push({
                      type: 'keyValue',
                      key: nestedKey,
                      value: nestedValue
                    });
                  }
                }
              }
            } else {
              let parsed;
              try {
                parsed = JSON.parse(value);
              } catch (_) {
                parsed = null;
              }
    
              if (parsed && typeof parsed === 'object') {
                contentLines.push({ type: 'key', text: `${key}:` });
                for (const nestedKey in parsed) {
                  if (Object.prototype.hasOwnProperty.call(parsed, nestedKey)) {
                    contentLines.push({
                      type: 'keyValue',
                      key: nestedKey,
                      value: parsed[nestedKey]
                    });
                  }
                }
              } else {
                contentLines.push({ type: 'keyValue', key: key, value: value });
              }
            }
          }
        }
      }
    
      let boxHeight = 10 + 2 * boxPadding;
      contentLines.forEach(line => {
        if (line.type === 'keyValue') {
          const keyWidth = docPdf.getTextWidth(line.key + ": ");
          const availableWidth = boxWidth - 2 * boxPadding - keyWidth - keyValueSpacing;
          const wrappedText = docPdf.splitTextToSize(String(line.value), availableWidth);
          boxHeight += wrappedText.length * lineHeight;
        } else if (line.type === 'onlyValue' || line.type === 'key') {
          const wrappedText = docPdf.splitTextToSize(line.text, boxWidth - 2 * boxPadding);
          boxHeight += wrappedText.length * lineHeight;
        } else if (line.type === 'image') {
          boxHeight += 50;
        }
      });
    
      if (y + boxHeight > pageHeight - margin) {
        docPdf.addPage();
        y = margin;
      }
    
      drawRoundedBox(margin, y, boxWidth, boxHeight);
      let innerY = y + boxPadding + 5;
    
      docPdf.setFont("Helvetica", "bold");
      docPdf.setFontSize(14);
      docPdf.text(title, margin + boxPadding, innerY);
      innerY += 10;
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
        } else if (line.type === 'image') {
          const imageWidth = 30;
          const imageHeight = 30;
          try {
            docPdf.addImage(line.url, "JPEG", margin + boxPadding, innerY, imageWidth, imageHeight);
          } catch (e) {
            console.error("Failed to load image: ", e);
          }
          innerY += imageHeight + lineHeight;
        }
      });
    
      y += boxHeight + boxSpacing;
    
      // Append red special fields if available
      renderSpecialRedFields(specialData);
    };
    
    const renderSpecialRedFields = (fields) => {
      const boxWidth = pageWidth - 2 * margin;
    
      Object.entries(fields).forEach(([key, value]) => {
        const wrappedText = docPdf.splitTextToSize(String(value), boxWidth - 2 * boxPadding);
        let boxHeight = wrappedText.length * lineHeight + 2 * boxPadding + 10;
    
        if (y + boxHeight > pageHeight - margin) {
          docPdf.addPage();
          y = margin;
        }
    
        drawRoundedBox(margin, y, boxWidth, boxHeight);
    
        let innerY = y + boxPadding + 5;
    
        docPdf.setFont("Helvetica", "bold");
        docPdf.setTextColor(255, 0, 0); // red
        docPdf.setFontSize(14);
        docPdf.text(formatTitle(key), margin + boxPadding, innerY);
        innerY += 10;
    
        docPdf.setFont("Helvetica", "normal");
        docPdf.setTextColor(0, 0, 0); // reset to black
        docPdf.setFontSize(12);
    
        wrappedText.forEach(line => {
          docPdf.text(line, margin + boxPadding, innerY);
          innerY += lineHeight;
        });
    
        y += boxHeight + boxSpacing;
      });
    };
    
    const formatTitle = (key) => {
      return {
        provisionalDiagnosis: "Provisional Diagnosis",
        managementPlan: "Management Plan",
        referrals: "Referrals"
      }[key] || key;
    };
    
  
    // Title
    const img = new Image();
    img.src = '/niepmdlogo.png'; 
    docPdf.addImage(img, 'PNG', pageWidth - 40, 10, 25, 25); // adjust position/size as needed

    // Header text
    docPdf.setFont("Helvetica", "bold");
    docPdf.setFontSize(16);
    docPdf.text("National Institute For Empowerement", 10, y);
    y += 8;
    docPdf.text("of Persons with Multiple Disabilities", 10, y);
    y += 8;
  
    docPdf.setFont("Helvetica", "normal");
    docPdf.setFontSize(11);
    docPdf.text("State Highway 49, Post, Muthukadu, Tamil Nadu", 10, y);
    y += 10;
  
    // Divider line
    docPdf.setLineWidth(0.5);
    docPdf.line(10, y, pageWidth - 10, y);
    y += 10;
  
    // Report title
    docPdf.setFontSize(20);
    docPdf.setFont("Helvetica", "bold");
    docPdf.text("Patient Comprehensive Report", pageWidth / 2, y, { align: 'center' });
    y += 20;



    // docPdf.setFontSize(20);
    // docPdf.setFont("Helvetica", "bold");
    // docPdf.text("Patient Comprehensive Report", pageWidth / 2, y, { align: 'center' });
    // y += 20;
  
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
