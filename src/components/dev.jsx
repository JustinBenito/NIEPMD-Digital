import React from 'react'
import EditableTable from './table'

const Development = ({ onSave }) => {


  const handleSave = (e) => {
    e.preventDefault();
    // TODO: Add your logic to save data to the database

    // Call the onSave callback to switch to the next tab
    onSave();
  };




  return (
    <div>
    <h1 className='text-5xl font-bold'>Developmental History</h1>

    <form onSubmit={handleSave}>

<div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-8">
<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 border-collapse">
  <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
    <tr>
      <th scope="col" class="px-6 py-3 border-r border-b">
        Milestones
      </th>
      <th scope="col" class="px-6 py-3 border-r border-b">
        Normal Age Rating
      </th>
      <th scope="col" class="px-6 py-3 border-b">
        Age at which attained
      </th>
    </tr>
  </thead>
  <tbody>
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r">
            Smiles at others
          </th>
          <td className="px-6 py-4 border-r">
            (1 - 4 months)
          </td>
          <td className="px-6 py-4 border-r">
            <input type="number" placeholder="Enter here" />
          </td>
        </tr>
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r">
            Head Control
          </th>
          <td className="px-6 py-4 border-r">
            (2 - 4 months)
          </td>
          <td className="px-6 py-4 border-r">
            <input type="number" placeholder="Enter here" />
          </td>
        </tr>
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r">
            Sitting
          </th>
          <td className="px-6 py-4 border-r">
            (5 - 10 months)
          </td>
          <td className="px-6 py-4 border-r">
            <input type="number" placeholder="Enter here" />
          </td>
        </tr>
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r">
            Walking
          </th>
          <td className="px-6 py-4 border-r">
            (9 - 14 months)
          </td>
          <td className="px-6 py-4 border-r">
            <input type="number" placeholder="Enter here" />
          </td>
        </tr>
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r">
            First Words
          </th>
          <td className="px-6 py-4 border-r">
            (7 - 12 months)
          </td>
          <td className="px-6 py-4 border-r">
            <input type="number" placeholder="Enter here" />
          </td>
        </tr>
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r">
            Two word phrases
          </th>
          <td className="px-6 py-4 border-r">
            (16 - 30 months)
          </td>
          <td className="px-6 py-4 border-r">
            <input type="number" placeholder="Enter here" />
          </td>
        </tr>
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r">
            Toilet control
          </th>
          <td className="px-6 py-4 border-r">
            (3 - 4 years)
          </td>
          <td className="px-6 py-4">
            <input type="number" placeholder="Enter here" />
          </td>
        </tr>
      </tbody>
</table>

</div>

<div className='mt-8'>
<h2 className='mt-8'>Does the client have any seizure</h2>
<ul class="items-center mt-2 w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input id="horizontal-list-radio-license" type="radio" value="" name="list-radio1" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-600 dark:border-gray-500"/>
            <label for="horizontal-list-radio-license" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yes</label>
        </div>
    </li>
    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input id="horizontal-list-radio-id" type="radio" value="" name="list-radio1" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-600 dark:border-gray-500"/>
            <label for="horizontal-list-radio-id" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">No</label>
        </div>
    </li>
   
</ul>
</div>

<div className='mt-8'>
<h2 className='mt-8'>If yes, then whether on medications</h2>
<ul class="items-center mt-2 w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input id="horizontal-list-radio-license" type="radio" value="" name="list-radio2" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-600 dark:border-gray-500"/>
            <label for="horizontal-list-radio-license" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yes</label>
        </div>
    </li>
    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input id="horizontal-list-radio-id" type="radio" value="" name="list-radio2" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-600 dark:border-gray-500"/>
            <label for="horizontal-list-radio-id" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">No</label>
        </div>
    </li>
   
</ul>
</div>


        
<div class="mb-6 mt-4">
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">REASON FOR THE CONDITION OF THE CLIENT AS PERCEIVED BY THE INFORMANT:</label>
        <textarea type="text" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Any Reason?' required />
        </div> 
    
        <button type="submit" class="text-white bg-green-500 transition-colors ease-in-out hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:bg-green-800">Save</button>
</form>


    </div>
  )
}

export default Development