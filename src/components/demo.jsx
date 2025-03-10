import React, {useState} from 'react'


const Demo = ({ onSave }) => {

    const handleSave = (e) => {
        e.preventDefault();
        // TODO: Add your logic to save data to the database
    
        // Call the onSave callback to switch to the next tab
        onSave();
      };



  return (
    <div className='mt-5 border-gray-100 max-w-5xl mx-auto gap-2'>
        <h1 className='text-5xl font-bold'>Demographic Data</h1>

<form onSubmit={handleSave}>
    <div className="grid gap-6 mb-6 md:grid-cols-2 mt-8">
        <div>
            <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900  ">Father</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
        </div>
        <div>
            <label for="last_name" className="block mb-2 text-sm font-medium text-gray-900  ">Education/Occupation</label>
            <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="06/11/2023" required />
        </div>
        <div>
            <label for="company" className="block mb-2 text-sm font-medium text-gray-900  ">Mother</label>
            <input type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="21/05/2005" required/>
        </div>  
        <div>
            <label for="phone" className="block mb-2 text-sm font-medium text-gray-900  ">Education/Occupation</label>
            <input type="number" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/>
        </div>
        <div>
            <label for="website" className="block mb-2 text-sm font-medium text-gray-900  ">Age of the Father</label>
            <input type="text" id="website" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="14" required/>
        </div>
        <div>
            <label for="visitors" className="block mb-2 text-sm font-medium text-gray-900  ">Age of the Mother</label>
            <input type="text" id="visitors" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required/>
        </div>
</div>

        <div className="mb-6">
        <label for="email" className="block mb-2 text-sm font-medium text-gray-900  ">Mailing address</label>
        <textarea type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={`Tamil Street,\nChennai -94`} required />
        </div> 

    <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
            <label for="website" className="block mb-2 text-sm font-medium text-gray-900  ">Pin</label>
            <input type="number" id="website" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="600 012" required />
        </div>
        <div>
            <label for="visitors" className="block mb-2 text-sm font-medium text-gray-900  ">State</label>
            <input type="text" id="visitors" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tamil Nadu" required />
        </div>

        <div>
            <label for="website" className="block mb-2 text-sm font-medium text-gray-900  ">Mobile Number</label>
            <input type="number" id="website" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="9100009190" required />
        </div>
        <div>
            <label for="visitors" className="block mb-2 text-sm font-medium text-gray-900  ">Phone Number</label>
            <input type="text" id="visitors" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="+044 92098180" required />
        </div>


        <div>
            <label for="website" className="block mb-2 text-sm font-medium text-gray-900  ">Email Id</label>
            <input type="email" id="website" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@email.com" required />
        </div>
        <div>
            <label for="visitors" className="block mb-2 text-sm font-medium text-gray-900  ">Religion/Language of Communication</label>
            <input type="text" id="visitors" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Christian/Tamil" required />
        </div>


        <div>
            <label for="website" className="block mb-2 text-sm font-medium text-gray-900  ">Monthly Income</label>
            <input type="text" id="website" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="10,000" required />
        </div>
        <div>
            <label for="visitors" className="block mb-2 text-sm font-medium text-gray-900  ">Locality</label>
            <input type="text" id="visitors" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Choolai" required />
        </div>
    </div>

    <button type="submit" className="text-white bg-green-500 transition-colors ease-in-out hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:bg-green-800">Save</button>
</form>
    </div>
  )
}

export default Demo