import React from 'react'
import { useEffect, useState, useRef } from 'react'
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore'

const Identi = ({ onSave }) => {
    const [currentDate, setCurrentDate] = useState(null);
    const [imageUrl, setImageUrl] = useState('');
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
                    setFormData(data);
                    if (data.identification) {
                        const identData = data.identification;
                        document.getElementById('first_name').value = identData.name || '';
                        document.getElementById('company').value = identData.dob || '';
                        document.getElementById('phone').value = identData.ubidNo || '';
                        document.getElementById('website').value = identData.ageSex || '';
                        document.getElementById('refBy').value = identData.refBy || '';
                        document.getElementById('informant').value = identData.informant || '';
                        document.getElementById('visitors').value = identData.aadharNo || '';
                        setImageUrl(identData.photoUrl || '');
                    }
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        const today = new Date();
        const formattedDate = today.toLocaleDateString(undefined, {
            year: '2-digit',
            month: '2-digit',
            day: '2-digit',
        });
        setCurrentDate(formattedDate);
    }, []);

    const handleImageUrlChange = (e) => {
        setImageUrl(e.target.value);
    };

    const handleSave = async (e) => {
        e.preventDefault();
        
        try {
            const urlParams = new URLSearchParams(window.location.search);
            const id = urlParams.get('id');
            if (!id) throw new Error('No ID provided');


            
            const formData = {
                name: e.target.first_name.value,
                dateCreated: currentDate,
                photoUrl: imageUrl,
                dob: e.target.company.value,
                ubidNo: e.target.phone.value,
                ageSex: e.target.website.value,
                refBy: e.target.refBy.value,
                informant: e.target.informant.value,
                aadharNo: document.querySelector('input[placeholder="3123 XXXX XXXX"]').value
            };

            const db = getFirestore();
            const docRef = doc(db, 'patients', id);
            await setDoc(docRef, { identification: formData }, { merge: true });
            
            onSave();
        } catch (error) {
            console.error('Error saving data:', error);
            alert('Error saving data. Please try again.');
        }
    };


  return (
    <div className='mt-5 border-gray-100 max-w-5xl mx-auto gap-2'>
        <h1 className='text-5xl font-bold'>Identification Data</h1>

<form onSubmit={handleSave}>
    <div className="grid gap-6 mb-6 md:grid-cols-2 mt-8">
        <div>
            <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900  ">Name</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
        </div>
        <div>
            <label for="last_name" className="block mb-2 text-sm font-medium text-gray-900  ">Date</label>
            <input value={currentDate || "06/11/23"} readOnly={true} type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="06/11/2023" required />
        </div>
        <div>
            <label for="company" className="block mb-2 text-sm font-medium text-gray-900  ">DOB</label>
            <input type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="21/05/2005" required/>
        </div>  
        <div>
            <label for="phone" className="block mb-2 text-sm font-medium text-gray-900  ">UDID No.</label>
            <input type="number" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/>
        </div>
        <div>
            <label for="website" className="block mb-2 text-sm font-medium text-gray-900  ">Age/Sex</label>
            <input type="text" id="website" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="14" required/>
        </div>
        <div>
            <label for="refBy" className="block mb-2 text-sm font-medium text-gray-900  ">Ref. by</label>
            <input type="text" id="refBy" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required/>
        </div>
        <div>
            <label for="informant" className="block mb-2 text-sm font-medium text-gray-900  ">Informant</label>
            <input type="text" id="informant" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Dilli" required/>
        </div>
        <div>
            <label for="visitors" className="block mb-2 text-sm font-medium text-gray-900  ">Aadhar No.</label>
            <input type="text" id="visitors" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="3123 XXXX XXXX" required/>
        </div>
    </div>
    <div className="mt-6 mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900">User Photo URL</label>
        <input
            type="url"
            value={imageUrl}
            onChange={handleImageUrlChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Enter image URL"
        />
        {imageUrl && (
            <div className="mt-4 relative w-24 h-24">
                <img
                    src={imageUrl}
                    alt="Preview"
                    className="w-full h-full object-cover rounded-lg"
                />
            </div>
        )}
    </div>
    <button type="submit" className="text-white bg-green-500 transition-colors ease-in-out hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:bg-green-800">Save</button>
</form>
    </div>
  )
}

export default Identi