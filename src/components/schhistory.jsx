import React, { useState, useEffect } from 'react';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';

const initialFormData = {
  familyType: '',
  familyStatus: '',
  consanguinity: '',
  accommodation: '',
  rooms: '',
  ownership: '',
  neighbourAttitude: '',
  familyDynamics: '',
  health: '',
  SES: '',
  provisionalDiagnosis: '',
  managementPlan: '',
  referrals: ''
};

const School = ({ onSave }) => {
  const [formData, setFormData] = useState(initialFormData);

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
          if (data.familyHistory) {
            setFormData(prev => ({ ...prev, ...data.familyHistory }));
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
    setFormData(prev => ({
      ...prev,
      [name]: value
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
      await setDoc(docRef, { familyHistory: formData }, { merge: true });

      onSave();
    } catch (error) {
      console.error('Error saving data:', error);
      alert('Error saving data. Please try again.');
    }
  };

  return (
    <div className="mt-5 border-gray-100 max-w-5xl mx-auto gap-2">
      <h1 className="text-5xl font-bold">Family History</h1>

      <form onSubmit={handleSave} className="mt-6">
        {/* Type of Family */}
        <div>
          <h3 className="mb-4 font-semibold text-gray-900">Type of Family</h3>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="familyType"
                value="Driver License"
                checked={formData.familyType === 'Driver License'}
                onChange={handleChange}
                className="mr-2"
              />
              Driver License
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="familyType"
                value="State ID"
                checked={formData.familyType === 'State ID'}
                onChange={handleChange}
                className="mr-2"
              />
              State ID
            </label>
          </div>
        </div>

        {/* Status of Family */}
        <div className="mt-6">
          <h3 className="mb-4 font-semibold text-gray-900">Status of Family</h3>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="familyStatus"
                value="Intact"
                checked={formData.familyStatus === 'Intact'}
                onChange={handleChange}
                className="mr-2"
              />
              Intact
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="familyStatus"
                value="Broken"
                checked={formData.familyStatus === 'Broken'}
                onChange={handleChange}
                className="mr-2"
              />
              Broken
            </label>
          </div>
        </div>

        {/* Consanguinity */}
        <div className="mt-6">
          <h3 className="mb-4 font-semibold text-gray-900">Consanguinity</h3>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="consanguinity"
                value="Yes"
                checked={formData.consanguinity === 'Yes'}
                onChange={handleChange}
                className="mr-2"
              />
              Yes
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="consanguinity"
                value="No"
                checked={formData.consanguinity === 'No'}
                onChange={handleChange}
                className="mr-2"
              />
              No
            </label>
          </div>
        </div>

        {/* Home Environment Fields */}
        <div className="grid gap-6 mb-6 md:grid-cols-3 mt-8">
          <div>
            <label className="block mb-2 text-sm font-medium">Accommodation</label>
            <input
              type="text"
              name="accommodation"
              value={formData.accommodation}
              onChange={handleChange}
              className="input"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">No. of Rooms</label>
            <input
              type="number"
              name="rooms"
              value={formData.rooms}
              onChange={handleChange}
              className="input"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Ownership</label>
            <input
              type="text"
              name="ownership"
              value={formData.ownership}
              onChange={handleChange}
              className="input"
              required
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium">Attitude of Neighbours</label>
          <input
            type="text"
            name="neighbourAttitude"
            value={formData.neighbourAttitude}
            onChange={handleChange}
            className="input"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium">Family Dynamics</label>
          <input
            type="text"
            name="familyDynamics"
            value={formData.familyDynamics}
            onChange={handleChange}
            className="input"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium">Health of Family Members</label>
          <input
            type="text"
            name="health"
            value={formData.health}
            onChange={handleChange}
            className="input"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium">Socio-Economic Status</label>
          <input
            type="text"
            name="SES"
            value={formData.SES}
            onChange={handleChange}
            className="input"
            required
          />
        </div>

        {/* Textareas */}
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium">Provisional Diagnosis</label>
          <textarea
            name="provisionalDiagnosis"
            value={formData.provisionalDiagnosis}
            onChange={handleChange}
            className="textarea"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium">Management Plan</label>
          <textarea
            name="managementPlan"
            value={formData.managementPlan}
            onChange={handleChange}
            className="textarea"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium">Referrals</label>
          <textarea
            name="referrals"
            value={formData.referrals}
            onChange={handleChange}
            className="textarea"
            required
          />
        </div>

        <button
          type="submit"
          className="text-white bg-green-500 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default School;
