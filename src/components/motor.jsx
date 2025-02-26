import React, { useState, useEffect } from 'react'
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore'

const Motor = ({ onSave }) => {
  const [formData, setFormData] = useState({});

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
            setFormData(data.motorAssessment);
            // Populate form fields
            Object.keys(data.motorAssessment).forEach(key => {
              const element = document.getElementById(key);
              if (element) {
                element.value = data.motorAssessment[key];
              }
            });
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
        // Get all input values from the table
        RUL_tone: e.target.querySelector('tr:nth-child(1) input:nth-child(1)').value,
        RUL_power: e.target.querySelector('tr:nth-child(1) input:nth-child(2)').value,
        RUL_wasting: e.target.querySelector('tr:nth-child(1) input:nth-child(3)').value,
        RUL_coordination: e.target.querySelector('tr:nth-child(1) input:nth-child(4)').value,
        RUL_movement: e.target.querySelector('tr:nth-child(1) input:nth-child(5)').value,
        
        LUL_tone: e.target.querySelector('tr:nth-child(2) input:nth-child(1)').value,
        LUL_power: e.target.querySelector('tr:nth-child(2) input:nth-child(2)').value,
        LUL_wasting: e.target.querySelector('tr:nth-child(2) input:nth-child(3)').value,
        LUL_coordination: e.target.querySelector('tr:nth-child(2) input:nth-child(4)').value,
        LUL_movement: e.target.querySelector('tr:nth-child(2) input:nth-child(5)').value,
        
        RLL_tone: e.target.querySelector('tr:nth-child(3) input:nth-child(1)').value,
        RLL_power: e.target.querySelector('tr:nth-child(3) input:nth-child(2)').value,
        RLL_wasting: e.target.querySelector('tr:nth-child(3) input:nth-child(3)').value,
        RLL_coordination: e.target.querySelector('tr:nth-child(3) input:nth-child(4)').value,
        RLL_movement: e.target.querySelector('tr:nth-child(3) input:nth-child(5)').value,
        
        LLL_tone: e.target.querySelector('tr:nth-child(4) input:nth-child(1)').value,
        LLL_power: e.target.querySelector('tr:nth-child(4) input:nth-child(2)').value,
        LLL_wasting: e.target.querySelector('tr:nth-child(4) input:nth-child(3)').value,
        LLL_coordination: e.target.querySelector('tr:nth-child(4) input:nth-child(4)').value,
        LLL_movement: e.target.querySelector('tr:nth-child(4) input:nth-child(5)').value
      };

      const db = getFirestore();
      const docRef = doc(db, 'patients', id);
      await setDoc(docRef, { motorAssessment: formData }, { merge: true });
      
      onSave();
    } catch (error) {
      console.error('Error saving data:', error);
      alert('Error saving data. Please try again.');
    }
  };
  return (
    <div>

<h1 className='text-5xl font-bold mt-4'>Motor</h1>

        <table className="w-full mt-8 rounded-xl border  text-sm text-left text-gray-500 dark:text-gray-400 border-collapse">
  <thead className="text-xs text-gray-700 uppercase bg-gray-50   dark:text-gray-400">
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
        <tr className="bg-white border-b   dark:border-gray-700">
          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap   border-r">
            RUL
          </th>
          <td className="px-6 py-4 border-r">
          <input type="number" placeholder="Enter here" />
          </td>
          <td className="px-6 py-4 border-r">
          <input type="number" placeholder="Enter here" />
          </td>
          <td className="px-6 py-4 border-r">
          <input type="number" placeholder="Enter here" />
          </td>
          <td className="px-6 py-4 border-r">
          <input type="number" placeholder="Enter here" />
          </td>
        </tr>
        <tr className="bg-white border-b   dark:border-gray-700">
          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap   border-r">
            LUL
          </th>
          <td className="px-6 py-4 border-r">
          <input type="number" placeholder="Enter here" />
          </td>
          <td className="px-6 py-4 border-r">
          <input type="number" placeholder="Enter here" />
          </td>
          <td className="px-6 py-4 border-r">
          <input type="number" placeholder="Enter here" />
          </td>
          <td className="px-6 py-4 border-r">
          <input type="number" placeholder="Enter here" />
          </td>
        </tr>
        <tr className="bg-white border-b   dark:border-gray-700">
          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap   border-r">
            RLL
          </th>
          <td className="px-6 py-4 border-r">
          <input type="number" placeholder="Enter here" />
          </td>
          <td className="px-6 py-4 border-r">
          <input type="number" placeholder="Enter here" />
          </td>
          <td className="px-6 py-4 border-r">
          <input type="number" placeholder="Enter here" />
          </td>
          <td className="px-6 py-4 border-r">
          <input type="number" placeholder="Enter here" />
          </td>
        </tr>
        <tr className="bg-white border-b   dark:border-gray-700">
          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap   border-r">
            LLL
          </th>
          <td className="px-6 py-4 border-r">
          <input type="number" placeholder="Enter here" />
          </td>
          <td className="px-6 py-4 border-r">
          <input type="number" placeholder="Enter here" />
          </td>
          <td className="px-6 py-4 border-r">
          <input type="number" placeholder="Enter here" />
          </td>
          <td className="px-6 py-4 border-r">
          <input type="number" placeholder="Enter here" />
          </td>
        </tr>
      </tbody>
</table>

<div className="mb-6">
        <label for="password" className="block mb-2 text-sm font-medium text-gray-900 mt-8  ">GAIT</label>
        <textarea type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
</div> 

<div className="mb-6">
        <label for="password" className="block mb-2 text-sm font-medium text-gray-900 mt-8  ">Investigations Available</label>
        <textarea type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
</div> 


<div className="mb-6">
        <label for="password" className="block mb-2 text-sm font-medium text-gray-900 mt-8  ">On Medications</label>
        <textarea type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
</div> 


<div className="mb-6">
        <label for="password" className="block mb-2 text-sm font-medium text-gray-900 mt-8  ">Any other Information</label>
        <textarea type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
</div> 

<div className="mb-6">
        <label for="password" className="block mb-2 text-sm font-medium text-gray-900 mt-8  ">Medical Diagnosis</label>
        <textarea type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
</div> 


<div className="mb-6">
        <label for="password" className="block mb-2 text-sm font-medium text-gray-900 mt-8  ">Disability</label>
        <textarea type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
</div> 


<div className="mb-6">
        <label for="password" className="block mb-2 text-sm font-medium text-gray-900 mt-8  ">Treament Plan</label>
        <textarea type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
</div> 

<div className="mb-6">
        <label for="password" className="block mb-2 text-sm font-medium text-gray-900 mt-8  ">Referral</label>
        <textarea type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
</div> 

<button type="submit" className="text-white mb-8 bg-green-500 transition-colors ease-in-out hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:bg-green-800">Save</button>
    </div>
  )
}

export default Motor