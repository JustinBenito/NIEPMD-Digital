import React, { useState, useEffect } from 'react'
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore'

const History = ({ onSave }) => {
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
                    if (data.history) {
                        setFormData(data.history);
                        
                        // Populate Antenatal section
                        if (data.history.antenatal) {
                            const antenatal = data.history.antenatal;
                            if (antenatal.checkup) {
                                document.querySelector(`input[name="list-radio1"][value="${antenatal.checkup}"]`).checked = true;
                            }
                            if (antenatal.hypertension) {
                                document.querySelector(`input[name="list-radio2"][value="${antenatal.hypertension}"]`).checked = true;
                            }
                            if (antenatal.diabetes) {
                                document.querySelector(`input[name="list-radio3"][value="${antenatal.diabetes}"]`).checked = true;
                            }
                            document.getElementById('fatherBloodGroup').value = antenatal.fatherBloodGroup || '';
                            document.getElementById('motherBloodGroup').value = antenatal.motherBloodGroup || '';
                            document.getElementById('complications').value = antenatal.complications || '';
                            document.getElementById('provisionalDiagnosis').value = antenatal.provisionalDiagnosis || '';
                            document.getElementById('managementPlan').value = antenatal.managementPlan || '';
                            document.getElementById('referrals').value = antenatal.referrals || '';
                        }

                        // Populate Intranatal section
                        if (data.history.intranatal) {
                            const intranatal = data.history.intranatal;
                            if (intranatal.labour) {
                                document.querySelector(`input[name="list-radio4"][value="${intranatal.labour}"]`).checked = true;
                            }
                            if (intranatal.delivery) {
                                document.querySelector(`input[name="list-radio5"][value="${intranatal.delivery}"]`).checked = true;
                            }
                            if (intranatal.deliveryType) {
                                document.querySelector(`input[name="list-radio6"][value="${intranatal.deliveryType}"]`).checked = true;
                            }
                            if (intranatal.birthCry) {
                                document.querySelector(`input[name="birthCry"][value="${intranatal.birthCry}"]`).checked = true;
                            }
                            document.getElementById('birthWeight').value = intranatal.birthWeight || '';
                            document.getElementById('babyActivity').value = intranatal.babyActivity || '';
                            document.getElementById('congenitalAnomalies').value = intranatal.congenitalAnomalies || '';
                        }

                        // Populate Postnatal section
                        if (data.history.postnatal) {
                            const postnatal = data.history.postnatal;
                            if (postnatal.condition) {
                                document.querySelector(`input[name="postnatalCondition"][value="${postnatal.condition}"]`).checked = true;
                            }
                            if (postnatal.physicalDeformity) {
                                document.querySelector(`input[name="list-radio9"][value="${postnatal.physicalDeformity}"]`).checked = true;
                            }
                            if (postnatal.sensoryImpairment) {
                                document.querySelector(`input[name="list-radio10"][value="${postnatal.sensoryImpairment}"]`).checked = true;
                            }
                            
                            // Set immunization checkboxes
                            if (postnatal.immunization) {
                                Object.entries(postnatal.immunization).forEach(([key, value]) => {
                                    const checkbox = document.querySelector(`input[value="${key}"]`);
                                    if (checkbox) checkbox.checked = value;
                                });
                            }
                            
                            document.getElementById('previousConsultation').value = postnatal.previousConsultation || '';
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
                antenatal: {
                    checkup: document.querySelector('input[name="list-radio1"]:checked')?.value || '',
                    hypertension: document.querySelector('input[name="list-radio2"]:checked')?.value || '',
                    diabetes: document.querySelector('input[name="list-radio3"]:checked')?.value || '',
                    fatherBloodGroup: document.getElementById('fatherBloodGroup').value,
                    motherBloodGroup: document.getElementById('motherBloodGroup').value,
                    complications: document.getElementById('complications').value,
                    provisionalDiagnosis: document.getElementById('provisionalDiagnosis').value,
                    managementPlan: document.getElementById('managementPlan').value,
                    referrals: document.getElementById('referrals').value
                },
                intranatal: {
                    labour: document.querySelector('input[name="list-radio4"]:checked')?.value || '',
                    delivery: document.querySelector('input[name="list-radio5"]:checked')?.value || '',
                    deliveryType: document.querySelector('input[name="list-radio6"]:checked')?.value || '',
                    birthCry: document.querySelector('input[name="birthCry"]:checked')?.value || '',
                    birthWeight: document.getElementById('birthWeight').value,
                    babyActivity: document.getElementById('babyActivity').value,
                    congenitalAnomalies: document.getElementById('congenitalAnomalies').value
                },
                postnatal: {
                    condition: document.querySelector('input[name="postnatalCondition"]:checked')?.value || '',
                    previousConsultation: document.getElementById('previousConsultation').value
                }
            };
    
            const db = getFirestore();
            const docRef = doc(db, 'patients', id);
            await setDoc(docRef, { history: formData }, { merge: true });
            
            onSave();
        } catch (error) {
            console.error('Error saving data:', error);
            alert('Error saving data. Please try again.');
        }
    };

  return (
    <div className='mt-5 border-gray-100 max-w-5xl mx-auto gap-2'>
        <h1 className='text-5xl font-bold'>Case History</h1>
        <p className='mt-4'>History (Antenatal, Intranatal, Postnatal)</p>
        
        <form onSubmit={handleSave}> 
            <div>
                <h3 className="mb-4 mt-8 font-semibold text-gray-900">Antenatal</h3>
                <div>
                    <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:border-gray-600">
                        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                            <div className="flex items-center pl-3">
                                <input id="horizontal-list-radio-license" type="radio" value="antenatalCheckup" name="list-radio1" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:border-gray-500"/>
                                <label htmlFor="horizontal-list-radio-license" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Antenatal Checkup</label>
                            </div>
                        </li>
                        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                            <div className="flex items-center pl-3">
                                <input id="horizontal-list-radio-id" type="radio" value="illness" name="list-radio1" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:border-gray-500"/>
                                <label htmlFor="horizontal-list-radio-id" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Illness</label>
                            </div>
                        </li>
                        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                            <div className="flex items-center pl-3">
                                <input id="horizontal-list-radio-millitary" type="radio" value="bleeding" name="list-radio1" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:border-gray-500"/>
                                <label htmlFor="horizontal-list-radio-millitary" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Bleeding</label>
                            </div>
                        </li>
                    </ul>
                </div>

                <div>
                    <ul className="items-center mt-4 w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:border-gray-600">
                        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                            <div className="flex items-center pl-3">
                                <input id="horizontal-list-radio-license2" type="radio" value="hypertension" name="list-radio2" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:border-gray-500"/>
                                <label htmlFor="horizontal-list-radio-license2" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Hypertension</label>
                            </div>
                        </li>
                        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                            <div className="flex items-center pl-3">
                                <input id="horizontal-list-radio-id2" type="radio" value="irradiation" name="list-radio2" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:border-gray-500"/>
                                <label htmlFor="horizontal-list-radio-id2" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Irradiation</label>
                            </div>
                        </li>
                        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                            <div className="flex items-center pl-3">
                                <input id="horizontal-list-radio-millitary2" type="radio" value="medications" name="list-radio2" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:border-gray-500"/>
                                <label htmlFor="horizontal-list-radio-millitary2" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Medications</label>
                            </div>
                        </li>
                    </ul>
                </div>

                <div>
                    <ul className="items-center w-full mt-4 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:border-gray-600">
                        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                            <div className="flex items-center pl-3">
                                <input id="horizontal-list-radio-license3" type="radio" value="diabetes" name="list-radio3" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:border-gray-500"/>
                                <label htmlFor="horizontal-list-radio-license3" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Diabetes</label>
                            </div>
                        </li>
                        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                            <div className="flex items-center pl-3">
                                <input id="horizontal-list-radio-id3" type="radio" value="trauma" name="list-radio3" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:border-gray-500"/>
                                <label htmlFor="horizontal-list-radio-id3" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Trauma</label>
                            </div>
                        </li>
                        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                            <div className="flex items-center pl-3">
                                <input id="horizontal-list-radio-millitary3" type="radio" value="abortion" name="list-radio3" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:border-gray-500"/>
                                <label htmlFor="horizontal-list-radio-millitary3" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Abortion</label>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="grid gap-6 mb-6 md:grid-cols-2 mt-8">
                    <div>
                        <label htmlFor="fatherBloodGroup" className="block mb-2 text-sm font-medium text-gray-900">Blood Group of Father</label>
                        <input type="text" id="fatherBloodGroup" name="fatherBloodGroup" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="O +ve" required />
                    </div>
                    <div>
                        <label htmlFor="motherBloodGroup" className="block mb-2 text-sm font-medium text-gray-900">Blood Group of Mother</label>
                        <input type="text" id="motherBloodGroup" name="motherBloodGroup" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="A +ve" required />
                    </div>
                </div>

                <div className="mb-6">
                    <label htmlFor="complications" className="block mb-2 text-sm font-medium text-gray-900">Any other significant complications being reported?</label>
                    <textarea id="complications" name="complications" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Any Complaints?' required />
                </div> 
            </div>

            <div>
                <h3 className="mb-4 mt-8 font-semibold text-gray-900">Intranatal</h3>
                <div>
                    <h2>Labour</h2>
                    <ul className="items-center mt-2 w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:border-gray-600">
                        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                            <div className="flex items-center pl-3">
                                <input id="horizontal-list-radio-license4" type="radio" value="normal" name="list-radio4" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:border-gray-500"/>
                                <label htmlFor="horizontal-list-radio-license4" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Normal</label>
                            </div>
                        </li>
                        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                            <div className="flex items-center pl-3">
                                <input id="horizontal-list-radio-id4" type="radio" value="prolonged" name="list-radio4" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:border-gray-500"/>
                                <label htmlFor="horizontal-list-radio-id4" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Prolonged</label>
                            </div>
                        </li>
                    </ul>
                </div>

                <div>
                    <h2 className='mt-8'>Delivery</h2>
                    <ul className="items-center mt-2 w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:border-gray-600">
                        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                            <div className="flex items-center pl-3">
                                <input id="horizontal-list-radio-license5" type="radio" value="hospital" name="list-radio5" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:border-gray-500"/>
                                <label htmlFor="horizontal-list-radio-license5" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Hospital</label>
                            </div>
                        </li>
                        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                            <div className="flex items-center pl-3">
                                <input id="horizontal-list-radio-id5" type="radio" value="home" name="list-radio5" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:border-gray-500"/>
                                <label htmlFor="horizontal-list-radio-id5" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Home</label>
                            </div>
                        </li>
                    </ul>
                </div>

                <div>
                    <h2 className='mt-8'>Type of Delivery</h2>
                    <ul className="items-center w-full mt-4 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:border-gray-600">
                        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                            <div className="flex items-center pl-3">
                                <input id="deliveryType-normal" type="radio" value="normal" name="list-radio6" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:border-gray-500"/>
                                <label htmlFor="deliveryType-normal" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Normal</label>
                            </div>
                        </li>
                        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                            <div className="flex items-center pl-3">
                                <input id="deliveryType-caeserian" type="radio" value="caeserian" name="list-radio6" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:border-gray-500"/>
                                <label htmlFor="deliveryType-caeserian" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Caeserian</label>
                            </div>
                        </li>
                        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                            <div className="flex items-center pl-3">
                                <input id="deliveryType-forceps" type="radio" value="forceps" name="list-radio6" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:border-gray-500"/>
                                <label htmlFor="deliveryType-forceps" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Forceps</label>
                            </div>
                        </li>
                        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                            <div className="flex items-center pl-3">
                                <input id="deliveryType-precipitate" type="radio" value="precipitate" name="list-radio6" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:border-gray-500"/>
                                <label htmlFor="deliveryType-precipitate" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Precipitate</label>
                            </div>
                        </li>
                        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                            <div className="flex items-center pl-3">
                                <input id="deliveryType-prolonged" type="radio" value="prolonged" name="list-radio6" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:border-gray-500"/>
                                <label htmlFor="deliveryType-prolonged" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Prolonged</label>
                            </div>
                        </li>
                        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                            <div className="flex items-center pl-3">
                                <input id="deliveryType-induced" type="radio" value="induced" name="list-radio6" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:border-gray-500"/>
                                <label htmlFor="deliveryType-induced" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Induced</label>
                            </div>
                        </li>
                    </ul>
                </div>

                <div>
                    <h2 className='mt-8'>Birth Cry</h2>
                    <ul className="items-center w-full mt-4 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:border-gray-600">
                        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                            <div className="flex items-center pl-3">
                                <input id="birthCry-normal" type="radio" value="normal" name="birthCry" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:border-gray-500"/>
                                <label htmlFor="birthCry-normal" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Normal</label>
                            </div>
                        </li>
                        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                            <div className="flex items-center pl-3">
                                <input id="birthCry-delayed" type="radio" value="delayed" name="birthCry" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:border-gray-500"/>
                                <label htmlFor="birthCry-delayed" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Delayed</label>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="grid gap-6 mb-6 md:grid-cols-2 mt-8">
                    <div>
                        <label htmlFor="birthWeight" className="block mb-2 text-sm font-medium text-gray-900">Birth Weight</label>
                        <input type="text" id="birthWeight" name="birthWeight" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="23" required />
                    </div>
                    <div>
                        <label htmlFor="babyActivity" className="block mb-2 text-sm font-medium text-gray-900">Activity of the Baby</label>
                        <input type="text" id="babyActivity" name="babyActivity" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Good" required />
                    </div>
                </div>

                <div className="mb-6">
                    <label htmlFor="congenitalAnomalies" className="block mb-2 text-sm font-medium text-gray-900">Congenital Anomalies (if any)</label>
                    <textarea id="congenitalAnomalies" name="congenitalAnomalies" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Any Complaints?' required />
                </div>
            </div>

            <div>
                <h3 className="mb-4 mt-8 font-semibold text-gray-900">Postnatal</h3>
                <div>
                    <h2>Condition</h2>
                    <ul className="items-center mt-2 w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:border-gray-600">
                        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                            <div className="flex items-center pl-3">
                                <input id="postnatalCondition-nicu" type="radio" value="nicu" name="postnatalCondition" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:border-gray-500"/>
                                <label htmlFor="postnatalCondition-nicu" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">NICU</label>
                            </div>
                        </li>
                        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                            <div className="flex items-center pl-3">
                                <input id="postnatalCondition-convulsions" type="radio" value="convulsions" name="postnatalCondition" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:border-gray-500"/>
                                <label htmlFor="postnatalCondition-convulsions" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Convulsions</label>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="mb-6">
                    <label htmlFor="previousConsultation" className="block mb-2 text-sm font-medium text-gray-900">Previous Consultation or treatment</label>
                    <textarea id="previousConsultation" name="previousConsultation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Any Undertaken?' required />
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium mb-1">Provisional Diagnosis:</label>
                <textarea
                    id="provisionalDiagnosis"
                    className="bg-gray-50 w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    rows="4"
                    required
                />
            </div>

            <div>
                <label className="block text-sm font-medium mb-1">Management Plan:</label>
                <textarea
                    id="managementPlan"
                    className="bg-gray-50 w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    rows="4"
                    required
                />
            </div>

            <div>
                <label className="block text-sm font-medium mb-1">Referrals:</label>
                <textarea
                    id="referrals"
                    className="bg-gray-50 w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    rows="4"
                    required
                />
            </div>

            <button type="submit" className="text-white bg-green-500 transition-colors ease-in-out hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:bg-green-800">Save</button>
        </form> 
    </div>
  )
}

export default History