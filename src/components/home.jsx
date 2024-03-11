import React, { useEffect, useState } from 'react';
import Nav from './nav';
import add from '../assets/add-circle-svgrepo-com.svg';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';

const Home = () => {
    const [reg, setReg] = useState('');
    const [patientsArray, setPatients] = useState([]);

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
        window.location.href = "/add";
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
                    <input value={reg} onChange={(e) => setReg(e.target.value)} type="text" id="voice-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search People with Reg.no" required />
                    <button type="button" className="absolute inset-y-0 end-0 flex items-center pe-3"></button>
                </div>
                <button onClick={() => addNew()} className="inline-flex gap-2 items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-green-600 hover:bg-green-700 rounded-lg ">
                    <img src={add} width={20} alt="Add Icon" />
                    <p className='mr-4'>Add</p>
                </button>
            </div>

<div className='mt-4'>
            {patientsArray.map((patient, index) => (
                // <p key={index}>{patient}</p>
                <div className=' border border-gray-200 m-2 flex flex-col p-2 rounded-lg bg-gray-50 mx-auto max-w-lg'>
                    <p className='text-sm text-gray-400 '>ID:{patient.id}</p>
                    <div className='flex flex-row justify-between mt-2'>
                        <h1 className=' text-2xl font-bold'>{patient.data().name}</h1>
                        <button onClick={() => visitId(patient.id)} class="text-white bg-green-500 transition-colors ease-in-out hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm w-full sm:w-auto px-4 py-1.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:bg-green-800">Visit</button>
                    </div>
                </div>

            ))}
</div>
        </div>
    );
}

export default Home;
