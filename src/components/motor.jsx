import React, { useState, useEffect } from 'react';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';

const Motor = ({ onSave }) => {
  const [formData, setFormData] = useState({
    RUL_tone: '', RUL_power: '', RUL_wasting: '', RUL_coordination: '', RUL_movement: '',
    LUL_tone: '', LUL_power: '', LUL_wasting: '', LUL_coordination: '', LUL_movement: '',
    RLL_tone: '', RLL_power: '', RLL_wasting: '', RLL_coordination: '', RLL_movement: '',
    LLL_tone: '', LLL_power: '', LLL_wasting: '', LLL_coordination: '', LLL_movement: '',
    gait: '', investigations: '', medications: '', otherInfo: '',
    medicalDiagnosis: '', disability: '', treatmentPlan: '', referrals: ''
  });

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
          if (data.motorAssessment) {
            setFormData(prev => ({ ...prev, ...data.motorAssessment }));
          }
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const id = urlParams.get('id');
      if (!id) throw new Error('No ID provided');

      const db = getFirestore();
      const docRef = doc(db, 'patients', id);
      await setDoc(docRef, { motorAssessment: formData }, { merge: true });

      if (onSave) onSave();
    } catch (error) {
      console.error('Error saving data:', error);
      alert('Error saving data. Please try again.');
    }
  };

  return (
    <div>
      <h1 className="text-5xl font-bold mt-4">Motor</h1>

      <form onSubmit={handleSubmit}>
        <table className="w-full mt-8 rounded-xl border text-sm text-left text-gray-500 dark:text-gray-400 border-collapse">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:text-gray-400">
          <tr>
      <th scope="col" className="px-6 py-3 border-r border-b">
        Tone
      </th>
      <th scope="col" className="px-6 py-3 border-r border-b">
        Power
      </th>
      <th scope="col" className="px-6 py-3 border-b">
        Muscle Wasting
      </th>
      <th scope="col" className="px-6 py-3 border-b">
        Coordination
      </th>
      <th scope="col" className="px-6 py-3 border-b">
       Abnormal involuntary Movement
      </th>
    </tr>
          </thead>
          <tbody>
            {['RUL', 'LUL', 'RLL', 'LLL'].map((limb, index) => (
              <tr key={index} className="bg-white border-b dark:border-gray-700">
                <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap border-r">{limb}</th>
                {['power', 'wasting', 'coordination', 'movement'].map((aspect, idx) => (
                  <td key={idx} className="px-6 py-4 border-r">
                    <input
                      type="number"
                      name={`${limb}_${aspect}`}
                      placeholder="Enter here"
                      value={formData[`${limb}_${aspect}`] || ''}
                      onChange={handleChange}
                      className="border rounded p-2 w-full"
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        {/* Text Areas */}
        {[
          { label: 'GAIT', name: 'gait' },
          { label: 'Investigations Available', name: 'investigations' },
          { label: 'On Medications', name: 'medications' },
          { label: 'Any other Information', name: 'otherInfo' },
          { label: 'Medical Diagnosis', name: 'medicalDiagnosis' },
          { label: 'Disability', name: 'disability' },
          { label: 'Treatment Plan', name: 'treatmentPlan' },
          { label: 'Referral', name: 'referrals' },
        ].map((field, idx) => (
          <div key={idx} className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 mt-8">{field.label}</label>
            <textarea
              name={field.name}
              value={formData[field.name] || ''}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder=""
            />
          </div>
        ))}

        <button
          type="submit"
          className="text-white mb-8 bg-green-500 transition-colors ease-in-out hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:bg-green-800"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default Motor;
