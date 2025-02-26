import React, { useState, useEffect } from 'react'
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore'

const Expect = ({ onSave }) => {
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
          if (data.expectations) {
            setFormData(data.expectations);
            const element = document.getElementById('expectations');
            if (element) {
              element.value = data.expectations.expectations;
            }
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
        expectations: e.target.expectations.value
      };

      const db = getFirestore();
      const docRef = doc(db, 'patients', id);
      await setDoc(docRef, { expectations: formData }, { merge: true });
      
      onSave();
    } catch (error) {
      console.error('Error saving data:', error);
      alert('Error saving data. Please try again.');
    }
  };




  return (
    <div className='mt-5 border-gray-100 max-w-5xl mx-auto gap-2'>

<form onSubmit={handleSave}>
        
<div className="mb-6">
        <label htmlFor="email" className="block mb-2 text-5xl font-bold text-gray-900  ">Expectations</label>
        <textarea type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Any Expectations?' required />
        </div> 
    
        <button type="submit" className="text-white bg-green-500 transition-colors ease-in-out hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:bg-green-800">Save</button>
</form>

    </div>
  )
}

export default Expect