import React, { useState, useEffect } from 'react';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';

const Intellectual = ({ onSave }) => {
  const [formData, setFormData] = useState({
    generalBehavior: '',
    attentionConcentration: '',
    activityLevel: '',
    comprehension: '',
    emotionalityBehaviour: '',
    relationship: '',
    dst: false,
    sfb: false,
    vsms: false,
    misic: false,
    gds: false,
    bkt: false,
    da: '',
    dq: '',
    sa: '',
    sq: '',
    ma: '',
    iq: '',
    furtherTesting: '',
    intellectualLevel: '',
    provisionalDiagnosis: '',
    managementPlan: '',
    referrals: ''
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
          if (data.intellectualAssessment) {
            setFormData(data.intellectualAssessment);
          }
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const id = urlParams.get('id');
      if (!id) throw new Error('No ID provided');

      const db = getFirestore();
      const docRef = doc(db, 'patients', id);
      await setDoc(docRef, { intellectualAssessment: formData }, { merge: true });

      onSave();
    } catch (error) {
      console.error('Error saving data:', error);
      alert('Error saving data. Please try again.');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-5xl font-bold mb-8">Psychological Assessment</h2>

      <div className="mb-4">
        <label htmlFor="generalBehavior" className="block text-sm font-medium mb-1">
          General Behaviour during the assessment:
        </label>
        <input
          id="generalBehavior"
          type="text"
          className="bg-gray-50 w-full px-3 py-2 rounded-md border border-gray-300 focus:ring-1 focus:ring-blue-500"
          value={formData.generalBehavior}
          onChange={handleChange}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="attentionConcentration" className="block text-sm font-medium mb-1">Attention & Concentration:</label>
          <input
            id="attentionConcentration"
            type="text"
            className="bg-gray-50 w-full px-3 py-2 rounded-md border border-gray-300"
            value={formData.attentionConcentration}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="activityLevel" className="block text-sm font-medium mb-1">Activity Level:</label>
          <input
            id="activityLevel"
            type="text"
            className="bg-gray-50 w-full px-3 py-2 rounded-md border border-gray-300"
            value={formData.activityLevel}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="mb-4 mt-4">
        <label htmlFor="comprehension" className="block text-sm font-medium mb-1">Comprehension:</label>
        <input
          id="comprehension"
          type="text"
          className="bg-gray-50 w-full px-3 py-2 rounded-md border border-gray-300"
          value={formData.comprehension}
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="emotionalityBehaviour" className="block text-sm font-medium mb-1">Emotionality & Behaviour:</label>
        <input
          id="emotionalityBehaviour"
          type="text"
          className="bg-gray-50 w-full px-3 py-2 rounded-md border border-gray-300"
          value={formData.emotionalityBehaviour}
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="relationship" className="block text-sm font-medium mb-1">Relationship within/outside family:</label>
        <input
          id="relationship"
          type="text"
          className="bg-gray-50 w-full px-3 py-2 rounded-md border border-gray-300"
          value={formData.relationship}
          onChange={handleChange}
        />
      </div>

      {/* Psychological Tests */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Psychological tests used (tick):</label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {['dst', 'sfb', 'vsms', 'misic', 'gds', 'bkt'].map((test) => (
            <label key={test} className="flex items-center">
              <input
                id={test}
                type="checkbox"
                className="mr-2"
                checked={formData[test]}
                onChange={handleChange}
              />
              {test.toUpperCase()}
            </label>
          ))}
        </div>
      </div>

      {/* Results */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Results:</label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {['da', 'dq', 'sa', 'sq', 'ma', 'iq'].map((field) => (
            <div key={field}>
              <label className="block text-xs mb-1">{field.toUpperCase()}</label>
              <input
                id={field}
                type="text"
                className="bg-gray-50 w-full border rounded"
                value={formData[field]}
                onChange={handleChange}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Additional Information */}
      <div className="mb-6">
        <label htmlFor="furtherTesting" className="block text-sm mb-2">Further testing (if required):</label>
        <input
          id="furtherTesting"
          type="text"
          className="bg-gray-50 w-full border rounded mb-4"
          value={formData.furtherTesting}
          onChange={handleChange}
        />
        
        <label htmlFor="intellectualLevel" className="block text-sm mb-2">Intellectual level:</label>
        <input
          id="intellectualLevel"
          type="text"
          className="bg-gray-50 w-full border rounded"
          value={formData.intellectualLevel}
          onChange={handleChange}
        />
      </div>

      {/* Diagnosis, Management and Referrals */}
      <div className="mb-6">
        <label htmlFor="provisionalDiagnosis" className="block mb-2 text-sm font-medium text-gray-900">Provisional Diagnosis</label>
        <textarea
          id="provisionalDiagnosis"
          className="bg-gray-50 border rounded-lg w-full p-2.5"
          placeholder="Enter provisional diagnosis"
          value={formData.provisionalDiagnosis}
          onChange={handleChange}
        />
      </div>

      <div className="mb-6">
        <label htmlFor="managementPlan" className="block mb-2 text-sm font-medium text-gray-900">Management Plan</label>
        <textarea
          id="managementPlan"
          className="bg-gray-50 border rounded-lg w-full p-2.5"
          placeholder="Enter management plan"
          value={formData.managementPlan}
          onChange={handleChange}
        />
      </div>

      <div className="mb-6">
        <label htmlFor="referrals" className="block mb-2 text-sm font-medium text-gray-900">Referrals</label>
        <textarea
          id="referrals"
          className="bg-gray-50 border rounded-lg w-full p-2.5"
          placeholder="Enter referrals"
          value={formData.referrals}
          onChange={handleChange}
        />
      </div>

      <button
        onClick={handleSave}
        type="submit"
        className="text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Save
      </button>
    </div>
  );
};

export default Intellectual;
