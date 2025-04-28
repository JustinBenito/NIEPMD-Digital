import React, { useState, useEffect } from 'react'
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore'

const Present = ({ onSave }) => {
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
                    if (data.complaints) {
                        setFormData(data.complaints);
                        // Populate form fields
                        Object.keys(data.complaints).forEach(key => {
                            const element = document.getElementById(key);
                            if (element) {
                                element.value = data.complaints[key];
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
                presentComplaints: e.target.presentComplaints.value,
                provisionalDiagnosis: e.target.provisionalDiagnosis.value,
                managementPlan: e.target.managementPlan.value,
                referrals: e.target.referrals.value
            };

            const db = getFirestore();
            const docRef = doc(db, 'patients', id);
            await setDoc(docRef, { complaints: formData }, { merge: true });
            
            onSave();
        } catch (error) {
            console.error('Error saving data:', error);
            alert('Error saving data. Please try again.');
        }
    };

    return (
        <div className='mt-5 border-gray-100 max-w-5xl mx-auto gap-2'>
            <h1 className='text-5xl font-bold'>Complaints</h1>
            <form onSubmit={handleSave}>
                <div className="mb-6 mt-8">
                    <label htmlFor="presentComplaints" className="block mb-2 text-sm font-medium text-gray-900">Present Complaints</label>
                    <textarea id="presentComplaints" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder='Any Complaints?' required />
                </div>

                <div className="mb-6">
                    <label htmlFor="provisionalDiagnosis" className="block mb-2 text-sm font-medium text-gray-900">Provisional Diagnosis</label>
                    <textarea id="provisionalDiagnosis" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder='Enter provisional diagnosis' required />
                </div>

                <div className="mb-6">
                    <label htmlFor="managementPlan" className="block mb-2 text-sm font-medium text-gray-900">Management Plan</label>
                    <textarea id="managementPlan" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder='Enter management plan' required />
                </div>

                <div className="mb-6">
                    <label htmlFor="referrals" className="block mb-2 text-sm font-medium text-gray-900">Referrals</label>
                    <textarea id="referrals" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder='Enter referrals' required />
                </div>

                <button type="submit" className="text-white bg-green-500 transition-colors ease-in-out hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:bg-green-800">Save</button>
            </form>
        </div>
    )
}

export default Present