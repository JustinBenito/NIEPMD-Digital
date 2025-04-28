import React, { useState, useEffect } from 'react';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';

const Audiology = ({ onSave }) => {
  const [patientComplaint, setPatientComplaint] = useState('');
  const [earlierTherapies, setEarlierTherapies] = useState('');
  const [assessmentPoints, setAssessmentPoints] = useState('');
  const [testsAdministered, setTestsAdministered] = useState('');
  const [provisionalDiagnosis, setProvisionalDiagnosis] = useState('');
  const [managementPlan, setManagementPlan] = useState('');
  const [referrals, setReferrals] = useState('');

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
          if (data.audiology) {
            setPatientComplaint(data.audiology.patientComplaint || '');
            setEarlierTherapies(data.audiology.earlierTherapies || '');
            setAssessmentPoints(data.audiology.assessmentPoints || '');
            setTestsAdministered(data.audiology.testsAdministered || '');
            setProvisionalDiagnosis(data.audiology.provisionalDiagnosis || '');
            setManagementPlan(data.audiology.managementPlan || '');
            setReferrals(data.audiology.referrals || '');
          }
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const id = urlParams.get('id');
      if (!id) throw new Error('No ID provided');

      const db = getFirestore();
      const docRef = doc(db, 'patients', id);
      await setDoc(docRef, {
        audiology: {
          patientComplaint,
          earlierTherapies,
          assessmentPoints,
          testsAdministered,
          provisionalDiagnosis,
          managementPlan,
          referrals,
          timestamp: new Date().toISOString()
        }
      }, { merge: true });

      if (onSave) onSave();
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-1">Patient Complaint:</label>
          <textarea
            value={patientComplaint}
            onChange={(e) => setPatientComplaint(e.target.value)}
            className="bg-gray-50 w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            rows="4"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Earlier Therapies:</label>
          <textarea
            value={earlierTherapies}
            onChange={(e) => setEarlierTherapies(e.target.value)}
            className="bg-gray-50 w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            rows="4"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Specific Assessment Points:</label>
          <textarea
            value={assessmentPoints}
            onChange={(e) => setAssessmentPoints(e.target.value)}
            className="bg-gray-50 w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            rows="4"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Tests Administered:</label>
          <textarea
            value={testsAdministered}
            onChange={(e) => setTestsAdministered(e.target.value)}
            className="bg-gray-50 w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            rows="4"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Provisional Diagnosis:</label>
          <textarea
            value={provisionalDiagnosis}
            onChange={(e) => setProvisionalDiagnosis(e.target.value)}
            className="bg-gray-50 w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            rows="4"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Management Plan:</label>
          <textarea
            value={managementPlan}
            onChange={(e) => setManagementPlan(e.target.value)}
            className="bg-gray-50 w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            rows="4"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Referrals:</label>
          <textarea
            value={referrals}
            onChange={(e) => setReferrals(e.target.value)}
            className="bg-gray-50 w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            rows="4"
            required
          />
        </div>

        <button
          type="submit"
          className="text-white bg-blue-500 transition-colors ease-in-out hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:bg-blue-800"
        >
          Save & Continue
        </button>
      </form>
    </div>
  );
};

export default Audiology;
