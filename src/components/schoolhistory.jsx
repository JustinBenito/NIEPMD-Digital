import React, { useState, useEffect } from 'react';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';

const SchoolHist = ({ onSave }) => {
  const [formData, setFormData] = useState({
    attendingStatus: '',
    schoolType: '',
    passFailStatus: '',
    schoolProblems: '',
    scholasticBackwardness: '',
    aidsHistory: '',
    provisionalDiagnosis: '',
    managementPlan: '',
    referrals: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');
        if (!id) return;

        const db = getFirestore();
        const docRef = doc(db, 'patients', id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          if (data.schoolHistory) {
            setFormData(data.schoolHistory);
          }
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const id = urlParams.get('id');
      if (!id) throw new Error('No ID provided');

      const db = getFirestore();
      const docRef = doc(db, 'patients', id);
      await setDoc(docRef, { schoolHistory: formData }, { merge: true });
      alert('Data saved successfully!');
      onSave();
    } catch (error) {
      console.error('Error saving data:', error);
      alert('Error saving data. Please try again.');
    }
  };

  return (
    <div className="mt-5 border-gray-100 max-w-5xl mx-auto gap-2">
      <h2 className="text-5xl font-bold">School History</h2>

      <form onSubmit={handleSave}>
        {/* Attending Status */}
        <div>
          <h3 className="block mb-2 font-semibold text-sm mt-4">Whether</h3>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="attendingStatus"
                value="Attending"
                checked={formData.attendingStatus === 'Attending'}
                onChange={handleChange}
                className="mr-2"
              />
              Attending
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="attendingStatus"
                value="Not Attending"
                checked={formData.attendingStatus === 'Not Attending'}
                onChange={handleChange}
                className="mr-2"
              />
              Not Attending
            </label>
          </div>
        </div>

        {/* School Type */}
        <div className="mt-4">
          <h3 className="block mb-2 font-semibold text-sm">School Type</h3>
          <div className="flex gap-4 flex-wrap">
            {['Normal School', 'Special School', 'Integrated School', 'Inclusive School'].map(type => (
              <label key={type} className="flex items-center">
                <input
                  type="radio"
                  name="schoolType"
                  value={type}
                  checked={formData.schoolType === type}
                  onChange={handleChange}
                  className="mr-2"
                />
                {type}
              </label>
            ))}
          </div>
        </div>

        {/* Pass/Fail Status */}
        <div className="mt-4">
          <h3 className="block mb-2 font-semibold text-sm">Whether Passed/Failed</h3>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="passFailStatus"
                value="Passed"
                checked={formData.passFailStatus === 'Passed'}
                onChange={handleChange}
                className="mr-2"
              />
              Passed
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="passFailStatus"
                value="Failed"
                checked={formData.passFailStatus === 'Failed'}
                onChange={handleChange}
                className="mr-2"
              />
              Failed
            </label>
          </div>
        </div>

        {/* Textareas */}
        {[
          { id: 'schoolProblems', label: 'Problems in School', placeholder: 'Any problems?' },
          { id: 'scholasticBackwardness', label: 'Scholastic Backwardness', placeholder: 'Any scholastic issues?' },
          { id: 'aidsHistory', label: 'History of Aids and Appliances', placeholder: 'Any?' },
          { id: 'provisionalDiagnosis', label: 'Provisional Diagnosis', placeholder: 'Enter provisional diagnosis' },
          { id: 'managementPlan', label: 'Management Plan', placeholder: 'Enter management plan' },
          { id: 'referrals', label: 'Referrals', placeholder: 'Enter referrals' }
        ].map(field => (
          <div key={field.id} className="mb-6">
            <label htmlFor={field.id} className="block mb-2 text-sm font-medium text-gray-900">
              {field.label}
            </label>
            <textarea
              id={field.id}
              name={field.id}
              value={formData[field.id]}
              onChange={handleChange}
              placeholder={field.placeholder}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
        ))}

        <button
          type="submit"
          className="text-white bg-green-500 transition-colors ease-in-out hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default SchoolHist;
