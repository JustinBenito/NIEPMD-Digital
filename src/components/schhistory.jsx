import React, { useState, useEffect } from 'react'
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore'

const School = ({ onSave }) => {
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
                    if (data.familyHistory) {
                        setFormData(data.familyHistory);
                        Object.keys(data.familyHistory).forEach(key => {
                            const element = document.getElementById(key);
                            if (element) {
                                if (element.type === 'radio') {
                                    const radio = document.querySelector(`input[name="${key}"][value="${data.familyHistory[key]}"]`);
                                    if (radio) radio.checked = true;
                                } else {
                                    element.value = data.familyHistory[key];
                                }
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
                familyType: document.querySelector('input[name="list-radio1"]:checked')?.value || '',
                familyStatus: document.querySelector('input[name="list-radio2"]:checked')?.value || '',
                consanguinity: document.querySelector('input[name="list-radio3"]:checked')?.value || '',
                accommodation: document.getElementById('accommodation').value,
                rooms: document.getElementById('rooms').value,
                ownership: document.getElementById('ownership').value,
                neighbourAttitude: document.getElementById('neighbourAttitude').value,
                familyDynamics: document.getElementById('familyDynamics').value
            };

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
    <div className='mt-5 border-gray-100 max-w-5xl mx-auto gap-2'> 
            <h1 className='text-5xl font-bold'>Family History</h1>

<form onSubmit={handleSave}>
<div>        
<h3 className="mb-4  mt-4 font-semibold text-gray-900  ">Type of Family</h3>
<ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex   dark:border-gray-600  ">
    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div className="flex items-center pl-3">
            <input id="horizontal-list-radio-license" type="radio" value="" name="list-radio1" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700    dark:border-gray-500"/>
            <label htmlFor="horizontal-list-radio-license" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Driver License </label>
        </div>
    </li>
    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div className="flex items-center pl-3">
            <input id="horizontal-list-radio-id" type="radio" value="" name="list-radio1" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700    dark:border-gray-500"/>
            <label htmlFor="horizontal-list-radio-id" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">State ID</label>
        </div>
    </li>
   
</ul>
</div>  

<div>        
<h3 className="mb-4 mt-4 font-semibold text-gray-900  ">Status of Family</h3>
<ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex   dark:border-gray-600  ">
    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div className="flex items-center pl-3">
            <input id="horizontal-list-radio-license" type="radio" value="" name="list-radio2" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700    dark:border-gray-500"/>
            <label htmlFor="horizontal-list-radio-license" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Intact</label>
        </div>
    </li>
    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div className="flex items-center pl-3">
            <input id="horizontal-list-radio-id" type="radio" value="" name="list-radio2" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700    dark:border-gray-500"/>
            <label htmlFor="horizontal-list-radio-id" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Broken</label>
        </div>
    </li>
   
</ul>
</div>  

<div>        
<h3 className="mb-4 mt-4 font-semibold text-gray-900  ">Consanguinity</h3>
<ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex   dark:border-gray-600  ">
    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div className="flex items-center pl-3">
            <input id="horizontal-list-radio-license" type="radio" value="" name="list-radio3" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700    dark:border-gray-500"/>
            <label htmlFor="horizontal-list-radio-license" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yes</label>
        </div>
    </li>
    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div className="flex items-center pl-3">
            <input id="horizontal-list-radio-id" type="radio" value="" name="list-radio3" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700    dark:border-gray-500"/>
            <label htmlFor="horizontal-list-radio-id" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">No</label>
        </div>
    </li>
   
</ul>
</div>  


<div>
    <h1 className=' font-semibold mt-4'>Home Environment</h1>
    <div className="grid gap-6 mb-6 md:grid-cols-3 mt-4">
        <div>
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900  ">Accomodation</label>
            <input type="text" id="accommodation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
        </div>
        <div>
            <label htmlFor="rooms" className="block mb-2 text-sm font-medium text-gray-900  ">No.of rooms</label>
            <input type="number" id="rooms" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="2" required />
        </div>
        <div>
            <label htmlFor="ownership" className="block mb-2 text-sm font-medium text-gray-900  ">Ownership</label>
            <input type="text" id="ownership" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Own/Rental" required />
        </div>
    </div>
    <div className="mb-6">
        <label htmlFor="attitute" className="block mb-2 text-sm font-medium text-gray-900  ">Attitude of the Neighbours</label>
        <input type="text" id="attitute" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
    </div> 
    <div className="mb-6">
        <label htmlFor="family" className="block mb-2 text-sm font-medium text-gray-900  ">Family dynamics, ways of coping & problem solving capacities</label>
        <input type="text" id="family" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
    </div> 

    <div className="mb-6">
        <label htmlFor="health" className="block mb-2 text-sm font-medium text-gray-900  ">Health of the family members</label>
        <input type="text" id="health" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
    </div> 

    <div className="mb-6">
        <label htmlFor="SES" className="block mb-2 text-sm font-medium text-gray-900  ">Socio - Economic status</label>
        <input type="text" id="SES" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
    </div> 
</div>
<button type="submit" className="text-white bg-green-500 transition-colors ease-in-out hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:bg-green-800">Save</button>
</form>
    </div>
  )
}

export default School