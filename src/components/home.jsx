import { useEffect, useState } from 'react';
import Nav from './nav';
import add from '../assets/add-circle-svgrepo-com.svg';
import { collection, getDocs, doc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase';

const Home = () => {
    const [reg, setReg] = useState('');
    const [patientsArray, setPatients] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [hasUBID, setHasUBID] = useState(null);
    const [ubidInput, setUbidInput] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const patients = collection(db, "patients");
            const patientsData = await getDocs(patients);

            const updatedPatientsArray = [];
            patientsData.forEach((e) => {
                let s = e.id;
                if (s.startsWith(reg)) {
                    updatedPatientsArray.push(e);
                }
            });
            setPatients(updatedPatientsArray);
        };

        fetchData();
    }, [reg]);

    const addNew = () => {
        setShowModal(true);
    };

    const generateUniqueUBID = async () => {
        let isUnique = false;
        let newUBID = '';
    
        const patients = collection(db, "patients");
        const patientsData = await getDocs(patients);
    
        while (!isUnique) {
            newUBID = Math.floor(1000 + Math.random() * 9000).toString();
            const exists = patientsData.docs.some(doc => doc.id === newUBID);
            if (!exists) {
                isUnique = true;
            }
        }
    
        return newUBID;
    };
    

    const handleUBIDSubmit = async () => {
        if (ubidInput.trim()) {
            setLoading(true);
            try {
                const patients = collection(db, "patients");
                const patientsData = await getDocs(patients);
                const exists = patientsData.docs.some(doc => doc.id === ubidInput);
                
                if (exists) {
                    alert("This UBID already exists!");
                } else {
                    await setDoc(doc(db, "patients", ubidInput), {
                        name: "",
                        createdAt: new Date().toISOString()
                    });
                    window.location.href = `/add?id=${ubidInput}`;
                }
            } catch (error) {
                console.error("Error:", error);
                alert("An error occurred while processing your request.");
            }
            setLoading(false);
        }
    };

    const handleNoUBID = async () => {
        setLoading(true);
        try {
            const newUBID = await generateUniqueUBID();
            await setDoc(doc(db, "patients", newUBID), {
                name: "",
                createdAt: new Date().toISOString()
            });
            window.location.href = `/add?id=${newUBID}`;
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred while generating a new UBID.");
            setLoading(false);
        }
    };

    const visitId = (id) => {
        window.location.href = `/add?id=${id}`;
    };

    return (
        <div>
            <Nav />

            <div className="flex items-center max-w-lg mx-auto mt-8">
                <label htmlFor="voice-search" className="sr-only">Search</label>
                <div className="relative w-full">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input value={reg} onChange={(e) => setReg(e.target.value)} type="text" id="voice-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5    dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search People with UBID" required />
                    <button type="button" className="absolute inset-y-0 end-0 flex items-center pe-3"></button>
                </div>
                <button onClick={() => addNew()} className="inline-flex gap-2 items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-green-600 hover:bg-green-700 rounded-lg ">
                    <img src={add} width={20} alt="Add Icon" />
                    <p className='mr-4'>Add</p>
                </button>
            </div>

            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-lg p-6 max-w-sm w-full">
                        {hasUBID === null ? (
                            <div>
                                <h2 className="text-xl font-bold mb-4">Do you have a UBID?</h2>
                                <div className="flex justify-end gap-4">
                                    <button
                                        onClick={() => setHasUBID(false)}
                                        className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                                        disabled={loading}
                                    >
                                        No
                                    </button>
                                    <button
                                        onClick={() => setHasUBID(true)}
                                        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                                        disabled={loading}
                                    >
                                        Yes
                                    </button>
                                </div>
                            </div>
                        ) : hasUBID ? (
                            <div>
                                <h2 className="text-xl font-bold mb-4">Enter your UBID</h2>
                                <input
                                    type="text"
                                    value={ubidInput}
                                    onChange={(e) => setUbidInput(e.target.value)}
                                    className="w-full p-2 border rounded mb-4"
                                    placeholder="Enter UBID"
                                    disabled={loading}
                                />
                                <div className="flex justify-end gap-4">
                                    <button
                                        onClick={() => setShowModal(false)}
                                        className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                                        disabled={loading}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        onClick={handleUBIDSubmit}
                                        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                                        disabled={loading}
                                    >
                                        {loading ? 'Processing...' : 'Submit'}
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div>
                                <h2 className="text-xl font-bold mb-4">Create New UBID</h2>
                                <p className="mb-4">A new unique UBID will be generated for you.</p>
                                <div className="flex justify-end gap-4">
                                    <button
                                        onClick={() => setShowModal(false)}
                                        className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                                        disabled={loading}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        onClick={handleNoUBID}
                                        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                                        disabled={loading}
                                    >
                                        {loading ? 'Generating...' : 'Continue'}
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}

            <div className='mt-4'>
                {patientsArray.map((patient, index) => (
                    <div key={index} className=' border border-gray-200 m-2 flex flex-col p-2 rounded-lg bg-gray-50 mx-auto max-w-lg'>
                        <p className='text-sm text-gray-400 '>UBID:{patient.id}</p>
                        <div className='flex flex-row justify-between mt-2'>
                            <h1 className=' text-2xl font-bold'>{patient.data().name}</h1>
                            <button onClick={() => visitId(patient.id)} className="text-white bg-green-500 transition-colors ease-in-out hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm w-full sm:w-auto px-4 py-1.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:bg-green-800">Visit</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
