import React, { useState, useEffect } from 'react'
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore'

const Special = ({ onSave }) => {
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
                    if (data.specialEducation) {
                        setFormData(data.specialEducation);
                        Object.keys(data.specialEducation).forEach(key => {
                            const element = document.getElementById(key);
                            if (element) {
                                element.value = data.specialEducation[key];
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
                grossMotor: document.getElementById('grossMotor').value,
                fineMotor: document.getElementById('fineMotor').value,
                sensorySkills: document.getElementById('sensorySkills').value,
                eatingSkills: document.getElementById('eatingSkills').value,
                drinkingSkills: document.getElementById('drinkingSkills').value,
                dressingSkills: document.getElementById('dressingSkills').value,
                bathingSkills: document.getElementById('bathingSkills').value,
                toiletingSkills: document.getElementById('toiletingSkills').value,
                brushingSkills: document.getElementById('brushingSkills').value,
                groomingSkills: document.getElementById('groomingSkills').value,
                communicationSkills: document.getElementById('communicationSkills').value,
                conceptSkills: document.getElementById('conceptSkills').value,
                academicSkills: document.getElementById('academicSkills').value,
                socializationSkills: document.getElementById('socializationSkills').value
            };

            const db = getFirestore();
            const docRef = doc(db, 'patients', id);
            await setDoc(docRef, { specialEducation: formData }, { merge: true });
            
            onSave();
        } catch (error) {
            console.error('Error saving data:', error);
            alert('Error saving data. Please try again.');
        }
    };



  return (
    <div className='mt-5 max-w-5xl mx-auto gap-2'>
        <h1 className='text-5xl font-bold'>Special Education Assesment</h1>

        <form onSubmit={handleSave}>
        <h3 className='block mb-2 mt-8 text-md font-medium text-gray-900'>Motor Skills</h3>



        <div className="mb-6 mt-4">
        <label for="email" className="block mb-2 text-sm font-medium text-gray-900  ">Gross Motor</label>
        <textarea type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Any Complaints?' required />
        </div> 


        <div className="mb-6 mt-8">
        <label for="email" className="block mb-2 text-sm font-medium text-gray-900  ">Fine Motor</label>
        <textarea type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Any Complaints?' required />
        </div> 

        <div className="mb-6 mt-4">
        <label for="email" className="block mb-2 text-sm font-medium text-gray-900  ">Sensory Skills</label>
        <textarea type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Any Complaints?' required />
        </div> 


        <h3 className='block mb-2 text-md font-medium text-gray-900'>Self Help Skills</h3>

        <div className="grid gap-6 mb-6 md:grid-cols-2 mt-4">
        <div>
            <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900  ">Eating Skills</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
        </div>
        <div>
            <label for="last_name" className="block mb-2 text-sm font-medium text-gray-900  ">Drinking Skills</label>
            <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
        </div>


        <div>
            <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900  ">Dressing Skills</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
        </div>
        <div>
            <label for="last_name" className="block mb-2 text-sm font-medium text-gray-900  ">Bathing Skills</label>
            <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
        </div>


        <div>
            <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900  ">Toileting Skills</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
        </div>
        <div>
            <label for="last_name" className="block mb-2 text-sm font-medium text-gray-900  ">Brushing Skills</label>
            <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
        </div>
       
        <div>
            <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900  ">Grooming Skills</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
        </div>
        

    </div>

    <div className="mb-6">
        <label for="email" className="block mb-2 text-sm font-medium text-gray-900  ">Communication Skills</label>
        <textarea type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='' required />
    </div> 

    <div className="mb-6">
        <label for="email" className="block mb-2 text-sm font-medium text-gray-900  ">Concept Skills</label>
        <textarea type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='' required />
    </div> 

    <div className="mb-6">
        <label for="email" className="block mb-2 text-sm font-medium text-gray-900  ">Academic Skills</label>
        <textarea type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='' required />
    </div> 

    <div className="mb-6">
        <label for="email" className="block mb-2 text-sm font-medium text-gray-900  ">Socialization Skills</label>
        <textarea type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='' required />
    </div>

        <div className="mb-6">
        <label for="email" className="block mb-2 text-sm font-medium text-gray-900  ">Vocational Skills</label>
        <textarea type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='' required />
    </div>  


    <div className="mb-6">
        <label for="email" className="block mb-2 text-sm font-medium text-gray-900  ">Functional Level</label>
        <textarea type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='' required />
    </div> 

    <button type="submit" className="text-white bg-green-500 transition-colors ease-in-out hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:bg-green-800">Save</button>
</form>
    

    </div>
  )
}

export default Special