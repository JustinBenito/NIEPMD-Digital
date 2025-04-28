import React, { useState, useEffect } from 'react';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';

const initialFormData = {
    grossMotor: '',
    fineMotor: '',
    sensorySkills: '',
    eatingSkills: '',
    drinkingSkills: '',
    dressingSkills: '',
    bathingSkills: '',
    toiletingSkills: '',
    brushingSkills: '',
    groomingSkills: '',
    communicationSkills: '',
    conceptSkills: '',
    academicSkills: '',
    socializationSkills: '',
    vocationalSkills: '',
    functionalLevel: '',
    provisionalDiagnosis: '',
    managementPlan: '',
    referrals: ''
};

const Special = ({ onSave }) => {
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
                    if (data.specialEducation) {
                        setFormData(prev => ({
                            ...prev,
                            ...data.specialEducation
                        }));
                    }
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
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
            await setDoc(docRef, { specialEducation: formData }, { merge: true });

            onSave();
        } catch (error) {
            console.error('Error saving data:', error);
            alert('Error saving data. Please try again.');
        }
    };

    return (
        <div className="mt-5 max-w-5xl mx-auto gap-2">
            <h1 className="text-5xl font-bold">Special Education Assessment</h1>

            <form onSubmit={handleSave}>
                <h3 className="block mb-2 mt-8 text-md font-medium text-gray-900">Motor Skills</h3>

                {/* Motor Skills */}
                {['grossMotor', 'fineMotor', 'sensorySkills'].map(field => (
                    <div key={field} className="mb-6 mt-4">
                        <label htmlFor={field} className="block mb-2 text-sm font-medium text-gray-900">
                            {field.replace(/([A-Z])/g, ' $1')}
                        </label>
                        <textarea
                            id={field}
                            value={formData[field]}
                            onChange={handleChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Any complaints?"
                            required
                        />
                    </div>
                ))}

                {/* Self Help Skills */}
                <h3 className="block mb-2 text-md font-medium text-gray-900">Self Help Skills</h3>
                <div className="grid gap-6 mb-6 md:grid-cols-2 mt-4">
                    {['eatingSkills', 'drinkingSkills', 'dressingSkills', 'bathingSkills', 'toiletingSkills', 'brushingSkills', 'groomingSkills'].map(field => (
                        <div key={field}>
                            <label htmlFor={field} className="block mb-2 text-sm font-medium text-gray-900">
                                {field.replace(/([A-Z])/g, ' $1')}
                            </label>
                            <input
                                type="text"
                                id={field}
                                value={formData[field]}
                                onChange={handleChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                required
                            />
                        </div>
                    ))}
                </div>

                {/* Other Skills */}
                {['communicationSkills', 'conceptSkills', 'academicSkills', 'socializationSkills', 'vocationalSkills', 'functionalLevel'].map(field => (
                    <div key={field} className="mb-6">
                        <label htmlFor={field} className="block mb-2 text-sm font-medium text-gray-900">
                            {field.replace(/([A-Z])/g, ' $1')}
                        </label>
                        <textarea
                            id={field}
                            value={formData[field]}
                            onChange={handleChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required
                        />
                    </div>
                ))}

                {/* Diagnosis and Plan */}
                {['provisionalDiagnosis', 'managementPlan', 'referrals'].map(field => (
                    <div key={field} className="mb-6">
                        <label htmlFor={field} className="block mb-2 text-sm font-medium text-gray-900">
                            {field.replace(/([A-Z])/g, ' $1')}
                        </label>
                        <textarea
                            id={field}
                            value={formData[field]}
                            onChange={handleChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder={`Enter ${field.replace(/([A-Z])/g, ' $1').toLowerCase()}`}
                            required
                        />
                    </div>
                ))}

                <button
                    type="submit"
                    className="text-white bg-green-500 transition-colors ease-in-out hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                >
                    Save
                </button>
            </form>
        </div>
    );
};

export default Special;
