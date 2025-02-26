import React, {useState, useEffect} from 'react'
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore'

const Demo = ({ onSave }) => {
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
                    if (data.demographic) {
                        setFormData(data.demographic);
                        // Populate form fields
                        Object.keys(data.demographic).forEach(key => {
                            const element = document.getElementById(key);
                            if (element) {
                                element.value = data.demographic[key];
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
                father: e.target.father.value,
                fatherEducation: e.target.fatherEducation.value,
                mother: e.target.mother.value,
                motherEducation: e.target.motherEducation.value,
                fatherAge: e.target.fatherAge.value,
                motherAge: e.target.motherAge.value,
                mailingAddress: e.target.mailingAddress.value,
                pin: e.target.pin.value,
                state: e.target.state.value,
                mobileNumber: e.target.mobileNumber.value,
                phoneNumber: e.target.phoneNumber.value,
                email: e.target.email.value,
                religionLanguage: e.target.religionLanguage.value,
                monthlyIncome: e.target.monthlyIncome.value,
                locality: e.target.locality.value
            };

            const db = getFirestore();
            const docRef = doc(db, 'patients', id);
            await setDoc(docRef, { demographic: formData }, { merge: true });
            
            onSave();
        } catch (error) {
            console.error('Error saving data:', error);
            alert('Error saving data. Please try again.');
        }
    };

  return (
    <div className='mt-5 border-gray-100 max-w-5xl mx-auto gap-2'>
        <h1 className='text-5xl font-bold'>Demographic Data</h1>

        <form onSubmit={handleSave}>
            <div className="grid gap-6 mb-6 md:grid-cols-2 mt-8">
                <div>
                    <label htmlFor="father" className="block mb-2 text-sm font-medium text-gray-900">Father</label>
                    <input type="text" id="father" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="John" required />
                </div>
                <div>
                    <label htmlFor="fatherEducation" className="block mb-2 text-sm font-medium text-gray-900">Education/Occupation</label>
                    <input type="text" id="fatherEducation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                </div>
                <div>
                    <label htmlFor="mother" className="block mb-2 text-sm font-medium text-gray-900">Mother</label>
                    <input type="text" id="mother" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required/>
                </div>  
                <div>
                    <label htmlFor="motherEducation" className="block mb-2 text-sm font-medium text-gray-900">Education/Occupation</label>
                    <input type="text" id="motherEducation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required/>
                </div>
                <div>
                    <label htmlFor="fatherAge" className="block mb-2 text-sm font-medium text-gray-900">Age of the Father</label>
                    <input type="text" id="fatherAge" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required/>
                </div>
                <div>
                    <label htmlFor="motherAge" className="block mb-2 text-sm font-medium text-gray-900">Age of the Mother</label>
                    <input type="text" id="motherAge" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required/>
                </div>
            </div>

            <div className="mb-6">
                <label htmlFor="mailingAddress" className="block mb-2 text-sm font-medium text-gray-900">Mailing address</label>
                <textarea id="mailingAddress" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={`Tamil Street,\nChennai -94`} required />
            </div> 

            <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                    <label htmlFor="pin" className="block mb-2 text-sm font-medium text-gray-900">Pin</label>
                    <input type="number" id="pin" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="600 012" required />
                </div>
                <div>
                    <label htmlFor="state" className="block mb-2 text-sm font-medium text-gray-900">State</label>
                    <input type="text" id="state" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Tamil Nadu" required />
                </div>

                <div>
                    <label htmlFor="mobileNumber" className="block mb-2 text-sm font-medium text-gray-900">Mobile Number</label>
                    <input type="number" id="mobileNumber" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="9100009190" required />
                </div>
                <div>
                    <label htmlFor="phoneNumber" className="block mb-2 text-sm font-medium text-gray-900">Phone Number</label>
                    <input type="text" id="phoneNumber" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="+044 92098180" required />
                </div>

                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email Id</label>
                    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@email.com" required />
                </div>
                <div>
                    <label htmlFor="religionLanguage" className="block mb-2 text-sm font-medium text-gray-900">Religion/Language of Communication</label>
                    <input type="text" id="religionLanguage" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Christian/Tamil" required />
                </div>

                <div>
                    <label htmlFor="monthlyIncome" className="block mb-2 text-sm font-medium text-gray-900">Monthly Income</label>
                    <input type="text" id="monthlyIncome" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="10,000" required />
                </div>
                <div>
                    <label htmlFor="locality" className="block mb-2 text-sm font-medium text-gray-900">Locality</label>
                    <input type="text" id="locality" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Choolai" required />
                </div>
            </div>

            <button type="submit" className="text-white bg-green-500 transition-colors ease-in-out hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:bg-green-800">Save</button>
        </form>
    </div>
  )
}

export default Demo