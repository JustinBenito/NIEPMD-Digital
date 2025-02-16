import React from 'react'

const Present = ({ onSave }) => {

  
  const handleSave = (e) => {
    e.preventDefault();
    // TODO: Add your logic to save data to the database

    // Call the onSave callback to switch to the next tab
    onSave();
  };

  return (
    <div className='mt-5 border-gray-100 max-w-5xl mx-auto gap-2'>
        <h1 className='text-5xl font-bold'>Complaints</h1>
<form onSubmit={handleSave}>
        
<div className="mb-6 mt-8">
        <label for="email" className="block mb-2 text-sm font-medium text-gray-900  ">Present Complaints</label>
        <textarea type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Any Complaints?' required />
        </div> 
    
        <button type="submit" className="text-white bg-green-500 transition-colors ease-in-out hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:bg-green-800">Save</button>
</form>

    </div>
  )
}

export default Present