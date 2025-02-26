import React, { useState, useEffect } from 'react'
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore'

const SchoolHist = ({ onSave }) => {
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
                    if (data.schoolHistory) {
                        setFormData(data.schoolHistory);
                        Object.keys(data.schoolHistory).forEach(key => {
                            const element = document.getElementById(key);
                            if (element) {
                                if (element.type === 'radio') {
                                    const radio = document.querySelector(`input[name="${key}"][value="${data.schoolHistory[key]}"]`);
                                    if (radio) radio.checked = true;
                                } else {
                                    element.value = data.schoolHistory[key];
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
                attendingStatus: document.querySelector('input[name="list-radio2"]:checked')?.value || '',
                schoolType: document.querySelector('input[name="list-radio3"]:checked')?.value || '',
                passFailStatus: document.querySelector('input[name="list-radio4"]:checked')?.value || '',
                schoolProblems: document.getElementById('schoolProblems').value,
                scholasticBackwardness: document.getElementById('scholasticBackwardness').value,
                teacherRemarks: document.getElementById('teacherRemarks').value
            };

            const db = getFirestore();
            const docRef = doc(db, 'patients', id);
            await setDoc(docRef, { schoolHistory: formData }, { merge: true });
            
            onSave();
        } catch (error) {
            console.error('Error saving data:', error);
            alert('Error saving data. Please try again.');
        }
    };



  return (
    <div className='mt-5 border-gray-100 max-w-5xl mx-auto gap-2'> 
    <h2 className='text-5xl font-bold'>School History</h2>


<form>
<div>        
<h3 className="block mb-2 font-semibold text-sm mt-4">Whether</h3>
<ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex   dark:border-gray-600  ">
    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div className="flex items-center pl-3">
            <input id="horizontal-list-radio-license" type="radio" value="" name="list-radio2" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700    dark:border-gray-500"/>
            <label for="horizontal-list-radio-license" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Attending</label>
        </div>
    </li> 
    <>
    
    </>
     <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div className="flex items-center pl-3">
            <input id="horizontal-list-radio-id" type="radio" value="" name="list-radio2" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700    dark:border-gray-500"/>
            <label for="horizontal-list-radio-id" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Not Attending</label>
        </div>
    </li>
</ul>

<ul className="items-center mt-2 w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex   dark:border-gray-600  ">
    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div className="flex items-center pl-3">
            <input id="horizontal-list-radio-license" type="radio" value="" name="list-radio3" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700    dark:border-gray-500"/>
            <label for="horizontal-list-radio-license" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Normal School </label>
        </div>
    </li>
    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div className="flex items-center pl-3">
            <input id="horizontal-list-radio-id" type="radio" value="" name="list-radio3" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700    dark:border-gray-500"/>
            <label for="horizontal-list-radio-id" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Special School </label>
        </div>
    </li>
    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div className="flex items-center pl-3">
            <input id="horizontal-list-radio-id" type="radio" value="" name="list-radio3" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700    dark:border-gray-500"/>
            <label for="horizontal-list-radio-id" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Integrated School </label>
        </div>
    </li>
    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div className="flex items-center pl-3">
            <input id="horizontal-list-radio-id" type="radio" value="" name="list-radio3" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700    dark:border-gray-500"/>
            <label for="horizontal-list-radio-id" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Inclsuive School </label>
        </div>
    </li>
</ul>


<div>        
<h3 className="block mb-2 font-semibold text-sm mt-4">Whether Passed/Failed the present class</h3>
<ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex   dark:border-gray-600  ">
    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div className="flex items-center pl-3">
            <input id="horizontal-list-radio-license" type="radio" value="" name="list-radio4" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700    dark:border-gray-500"/>
            <label for="horizontal-list-radio-license" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Passed</label>
        </div>
    </li>
    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div className="flex items-center pl-3">
            <input id="horizontal-list-radio-id" type="radio" value="" name="list-radio4" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700    dark:border-gray-500"/>
            <label for="horizontal-list-radio-id" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Failed</label>
        </div>
    </li>
</ul>
</div>


</div> 

<div className="mb-6">
        <label for="email" className="block mb-2 font-semibold text-sm mt-4 text-gray-900  ">Problems in School</label>
        <textarea type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Any Problems?' required />
</div> 
    
<div className="mb-6">
        <label for="email" className="block mb-2 text-sm font-medium text-gray-900  ">Scholastic Backwardness</label>
        <textarea type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Any Scholastic Issues?' required />
</div> 
    
<div className="mb-6">
        <label for="email" className="block mb-2 text-sm font-medium text-gray-900  ">History of Aids and appliances used (If any)</label>
        <textarea type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Any?' required />
</div> 
    
</form>
<button type="submit" className="text-white bg-green-500 transition-colors ease-in-out hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:bg-green-800">Save</button>

    </div>
  )
}

export default SchoolHist