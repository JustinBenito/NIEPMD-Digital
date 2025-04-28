import { useState, useEffect } from 'react';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';

const Development = ({ onSave }) => {
  const [formData, setFormData] = useState({});
  const [smilesAtOthers, setSmilesAtOthers] = useState('');
  const [headControl, setHeadControl] = useState('');
  const [sitting, setSitting] = useState('');
  const [walking, setWalking] = useState(formData.walking || '');
  const [firstWords, setFirstWords] = useState(formData.firstWords || '');
  const [twoWordPhrases, setTwoWordPhrases] = useState(formData.twoWordPhrases || '');
  const [toiletControl, setToiletControl] = useState('');
  const [hasSeizure, setHasSeizure] = useState('');
  const [onMedication, setOnMedication] = useState('');
  const [reason, setReason] = useState('');
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
          if (data.developmentalHistory) {
            setFormData(data.developmentalHistory);

            setSmilesAtOthers(data.developmentalHistory.smilesAtOthers || '');
            setHeadControl(data.developmentalHistory.headControl || '');
            setSitting(data.developmentalHistory.sitting || '');
            setWalking(data.developmentalHistory.walking || '');
            setFirstWords(data.developmentalHistory.firstWords || '');
            setTwoWordPhrases(data.developmentalHistory.twoWordPhrases || '');
            setToiletControl(data.developmentalHistory.toiletControl || '');
            setHasSeizure(data.developmentalHistory.hasSeizure || '');
            setOnMedication(data.developmentalHistory.onMedication || '');
            setReason(data.developmentalHistory.reason || '');
            setProvisionalDiagnosis(data.developmentalHistory.provisionalDiagnosis || '');
            setManagementPlan(data.developmentalHistory.managementPlan || '');
            setReferrals(data.developmentalHistory.referrals || '');
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

      const formData = {
        smilesAtOthers,
        headControl,
        sitting,
        walking,
        firstWords,
        twoWordPhrases,
        toiletControl,
        hasSeizure,
        onMedication,
        reason,
        provisionalDiagnosis,
        managementPlan,
        referrals
      };

      const db = getFirestore();
      const docRef = doc(db, 'patients', id);
      await setDoc(docRef, { developmentalHistory: formData }, { merge: true });

      onSave();
    } catch (error) {
      console.error('Error saving data:', error);
      alert('Error saving data. Please try again.');
    }
  };

  return (
    <div>
      <h1 className="text-5xl font-bold">Developmental History</h1>

      <form onSubmit={handleSave}>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-8">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 border-collapse">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3 border-r border-b">Milestones</th>
                <th scope="col" className="px-6 py-3 border-r border-b">Normal Age Rating</th>
                <th scope="col" className="px-6 py-3 border-b">Age at which attained</th>
              </tr>
            </thead>
            <tbody>
              {[
                { label: 'Smiles at others', id: 'smilesAtOthers', ageRange: '(1 - 4 months)' },
                { label: 'Head Control', id: 'headControl', ageRange: '(2 - 4 months)' },
                { label: 'Sitting', id: 'sitting', ageRange: '(5 - 10 months)' },
                { label: 'Walking', id: 'walking', ageRange: '(9 - 14 months)' },
                { label: 'First Words', id: 'firstWords', ageRange: '(7 - 12 months)' },
                { label: 'Two word phrases', id: 'twoWordPhrases', ageRange: '(16 - 30 months)' },
                { label: 'Toilet control', id: 'toiletControl', ageRange: '(3 - 4 years)' },
              ].map(({ label, id, ageRange }) => (
                <tr key={id} className="bg-white border-b dark:border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap border-r">{label}</th>
                  <td className="px-6 py-4 border-r">{ageRange}</td>
                  <td className="px-6 py-4 border-r">
                    <input
                      type="number"
                      id={id}
                      placeholder="Enter here"
                      value={formData[id] || ''}
                      onChange={(e) => setFormData({ ...formData, [id]: e.target.value })}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8">
          <h2>Does the client have any seizure?</h2>
          <ul className="items-center mt-2 w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:border-gray-600">
            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
              <div className="flex items-center pl-3">
                <input
                  id="seizureYes"
                  type="radio"
                  value="yes"
                  name="list-radio1"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:border-gray-500"
                  checked={hasSeizure === 'yes'}
                  onChange={() => setHasSeizure('yes')}
                />
                <label htmlFor="seizureYes" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yes</label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
              <div className="flex items-center pl-3">
                <input
                  id="seizureNo"
                  type="radio"
                  value="no"
                  name="list-radio1"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:border-gray-500"
                  checked={hasSeizure === 'no'}
                  onChange={() => setHasSeizure('no')}
                />
                <label htmlFor="seizureNo" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">No</label>
              </div>
            </li>
          </ul>
        </div>

        <div className="mt-8">
          <h2>If yes, then whether on medications</h2>
          <ul className="items-center mt-2 w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:border-gray-600">
            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
              <div className="flex items-center pl-3">
                <input
                  id="medicationYes"
                  type="radio"
                  value="yes"
                  name="list-radio2"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:border-gray-500"
                  checked={onMedication === 'yes'}
                  onChange={() => setOnMedication('yes')}
                />
                <label htmlFor="medicationYes" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yes</label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
              <div className="flex items-center pl-3">
                <input
                  id="medicationNo"
                  type="radio"
                  value="no"
                  name="list-radio2"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:border-gray-500"
                  checked={onMedication === 'no'}
                  onChange={() => setOnMedication('no')}
                />
                <label htmlFor="medicationNo" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">No</label>
              </div>
            </li>
          </ul>
        </div>

        <div className="mb-6 mt-4">
          <label htmlFor="reason" className="block mb-2 text-sm font-medium text-gray-900">Reason for the condition:</label>
          <textarea
            id="reason"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Any reason?"
          />
        </div>

        <div className="mb-6 mt-4">
          <label htmlFor="provisionalDiagnosis" className="block mb-2 text-sm font-medium text-gray-900">Provisional Diagnosis</label>
          <textarea
            id="provisionalDiagnosis"
            value={provisionalDiagnosis}
            onChange={(e) => setProvisionalDiagnosis(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Enter provisional diagnosis"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="managementPlan" className="block mb-2 text-sm font-medium text-gray-900">Management Plan</label>
          <textarea
            id="managementPlan"
            value={managementPlan}
            onChange={(e) => setManagementPlan(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Enter management plan"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="referrals" className="block mb-2 text-sm font-medium text-gray-900">Referrals</label>
          <textarea
            id="referrals"
            value={referrals}
            onChange={(e) => setReferrals(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Enter referrals"
          />
        </div>

        <button type="submit" className="text-white bg-green-500 transition-colors ease-in-out hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:bg-green-800">
          Save
        </button>
      </form>
    </div>
  );
};

export default Development;
