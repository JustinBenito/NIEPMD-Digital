import React from 'react'

const MedExam = ({ onSave }) => {



    const handleSave = (e) => {
        e.preventDefault();
        // TODO: Add your logic to save data to the database
    
        // Call the onSave callback to switch to the next tab
        onSave();
      };


  return (
    <div className='mt-5 max-w-5xl mx-auto gap-2'>
    <h1 className='text-5xl font-bold'>Medical Examination</h1>

    <div>
    <h1 className=' font-semibold mt-4'>Home Environment</h1>


    <form onSubmit={handleSave}>
    <div className="grid gap-6 mb-6 md:grid-cols-3 mt-4">
        <div>
            <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900  ">Height</label>
            <input type="number" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1" required />
        </div>
        <div>
            <label for="last_name" className="block mb-2 text-sm font-medium text-gray-900  ">Weight</label>
            <input type="number" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1" required />
        </div>
        <div>
            <label for="last_name" className="block mb-2 text-sm font-medium text-gray-900  ">Head Circumference</label>
            <input type="number" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1" required />
        </div>
        <div>
            <label for="last_name" className="block mb-2 text-sm font-medium text-gray-900  ">BMI</label>
            <input type="number" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1" required />
        </div>
    </div>
    <div className="mb-6">
        <label for="password" className="block mb-2 text-sm font-medium text-gray-900  ">History of Presenting Illness</label>
        <textarea type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
    </div> 
    <div className="mb-6">
        <label for="password" className="block mb-2 text-sm font-medium text-gray-900  ">History of Treatment Undertaken</label>
        <textarea type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
    </div> 

    <div className="mb-6">
        <label for="password" className="block mb-2 text-sm font-medium text-gray-900  ">Health of the family members</label>
        <textarea type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
    </div> 

    <h1 className=' font-semibold mt-4'>General Appearance</h1>

    <div className="flex justify-between w-full mt-4">
      <div className="w-1/2 mr-4">
        <InputField label="CVS" value="" onChange={() => {}} />
        <InputField label="R.S" value="" onChange={() => {}} />
        <InputField label="Abdomen" value="" onChange={() => {}} />
      </div>
      <div className="w-1/2">
        <InputField label="CNS" value="" onChange={() => {}} />
        <InputField label="Visual" value="" onChange={() => {}} />
        <InputField label="Auditory" value="" onChange={() => {}} />
      </div>
    </div>

    <button type="submit" className="text-white mt-8 mb-8 bg-green-500 transition-colors ease-in-out hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:bg-green-800">Save</button>
    </form>
</div>

    </div>
    
  )
}

export default MedExam

const InputField = ({ label, value, onChange }) => {
    return (
      <div className="flex flex-col">
        <label className="block mb-2 text-sm font-medium text-gray-900  ">{label}</label>
        <input
          type="text"
          className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={value}
          onChange={onChange}
        />
      </div>
    );
  };