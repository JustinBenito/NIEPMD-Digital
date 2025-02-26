import React, { useState, useEffect } from 'react'
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore'

const MedExam = ({ onSave }) => {
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
                    if (data.medicalExam) {
                        setFormData(data.medicalExam);
                        // Populate form fields
                        Object.keys(data.medicalExam).forEach(key => {
                            const element = document.getElementById(key);
                            if (element) {
                                element.value = data.medicalExam[key];
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
                height: e.target.height.value,
                weight: e.target.weight.value,
                headCircumference: e.target.headCircumference.value,
                bmi: e.target.bmi.value,
                presentingIllness: e.target.presentingIllness.value,
                treatmentHistory: e.target.treatmentHistory.value,
                familyHealth: e.target.familyHealth.value,
                cvs: e.target.cvs.value,
                rs: e.target.rs.value,
                abdomen: e.target.abdomen.value,
                cns: e.target.cns.value,
                visual: e.target.visual.value,
                auditory: e.target.auditory.value
            };

            const db = getFirestore();
            const docRef = doc(db, 'patients', id);
            await setDoc(docRef, { medicalExam: formData }, { merge: true });
            
            onSave();
        } catch (error) {
            console.error('Error saving data:', error);
            alert('Error saving data. Please try again.');
        }
    };

    return (
        <div className='mt-5 max-w-5xl mx-auto gap-2'>
            <h1 className='text-5xl font-bold'>Medical Examination</h1>

            <div>
                <h1 className='font-semibold mt-4'>Physical Measurements</h1>

                <form onSubmit={handleSave}>
                    <div className="grid gap-6 mb-6 md:grid-cols-3 mt-4">
                        <div>
                            <label htmlFor="height" className="block mb-2 text-sm font-medium text-gray-900">Height</label>
                            <input type="number" id="height" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="1" required />
                        </div>
                        <div>
                            <label htmlFor="weight" className="block mb-2 text-sm font-medium text-gray-900">Weight</label>
                            <input type="number" id="weight" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="1" required />
                        </div>
                        <div>
                            <label htmlFor="headCircumference" className="block mb-2 text-sm font-medium text-gray-900">Head Circumference</label>
                            <input type="number" id="headCircumference" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="1" required />
                        </div>
                        <div>
                            <label htmlFor="bmi" className="block mb-2 text-sm font-medium text-gray-900">BMI</label>
                            <input type="number" id="bmi" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="1" required />
                        </div>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="presentingIllness" className="block mb-2 text-sm font-medium text-gray-900">History of Presenting Illness</label>
                        <textarea id="presentingIllness" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                    </div> 
                    <div className="mb-6">
                        <label htmlFor="treatmentHistory" className="block mb-2 text-sm font-medium text-gray-900">History of Treatment Undertaken</label>
                        <textarea id="treatmentHistory" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                    </div> 

                    <div className="mb-6">
                        <label htmlFor="familyHealth" className="block mb-2 text-sm font-medium text-gray-900">Health of the family members</label>
                        <textarea id="familyHealth" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                    </div> 

                    <h1 className='font-semibold mt-4'>General Appearance</h1>

                    <div className="flex justify-between w-full mt-4">
                        <div className="w-1/2 mr-4">
                            <div className="flex flex-col mb-4">
                                <label htmlFor="cvs" className="block mb-2 text-sm font-medium text-gray-900">CVS</label>
                                <input type="text" id="cvs" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                            </div>
                            <div className="flex flex-col mb-4">
                                <label htmlFor="rs" className="block mb-2 text-sm font-medium text-gray-900">R.S</label>
                                <input type="text" id="rs" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                            </div>
                            <div className="flex flex-col mb-4">
                                <label htmlFor="abdomen" className="block mb-2 text-sm font-medium text-gray-900">Abdomen</label>
                                <input type="text" id="abdomen" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                            </div>
                        </div>
                        <div className="w-1/2">
                            <div className="flex flex-col mb-4">
                                <label htmlFor="cns" className="block mb-2 text-sm font-medium text-gray-900">CNS</label>
                                <input type="text" id="cns" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                            </div>
                            <div className="flex flex-col mb-4">
                                <label htmlFor="visual" className="block mb-2 text-sm font-medium text-gray-900">Visual</label>
                                <input type="text" id="visual" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                            </div>
                            <div className="flex flex-col mb-4">
                                <label htmlFor="auditory" className="block mb-2 text-sm font-medium text-gray-900">Auditory</label>
                                <input type="text" id="auditory" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                            </div>
                        </div>
                    </div>

                    <button type="submit" className="text-white mt-8 mb-8 bg-green-500 transition-colors ease-in-out hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:bg-green-800">Save</button>
                </form>
            </div>
        </div>
    )
}

export default MedExam