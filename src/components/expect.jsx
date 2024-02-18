import React from 'react'

const Expect = ({ onSave }) => {

  const handleSave = (e) => {
    e.preventDefault();
    // TODO: Add your logic to save data to the database

    // Call the onSave callback to switch to the next tab
    onSave();
  };




  return (
    <div className='mt-5 border-gray-100 max-w-5xl mx-auto gap-2'>

<form onSubmit={handleSave}>
        
<div class="mb-6">
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Expectations</label>
        <textarea type="text" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Any Expectations?' required />
        </div> 
    
        <button type="submit" class="text-white bg-green-500 transition-colors ease-in-out hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:bg-green-800">Save</button>
</form>

    </div>
  )
}

export default Expect