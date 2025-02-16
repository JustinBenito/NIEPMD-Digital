import React from 'react'

const History = ({ onSave }) => {

    const handleSave = (e) => {
        e.preventDefault();
        // TODO: Add your logic to save data to the database
    
        // Call the onSave callback to switch to the next tab
        onSave();
      };





  return (
    <div className='mt-5 border-gray-100 max-w-5xl mx-auto gap-2'>
        <h1 className='text-5xl font-bold'>Case History</h1>
        <p className='mt-4'>History (Antenatal, Intranatal, Postnatal)</p>
        
        
        <form onSubmit={handleSave}> 
<div>
<h3 className="mb-4 mt-8 font-semibold text-gray-900  ">Antenatal</h3>
<div>
<ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex   dark:border-gray-600  ">
    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div className="flex items-center pl-3">
            <input id="horizontal-list-radio-license" type="radio" value="" name="list-radio1" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300   dark:border-gray-500"/>
            <label for="horizontal-list-radio-license" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Antenatal Chechkup</label>
        </div>
    </li>
    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div className="flex items-center pl-3">
            <input id="horizontal-list-radio-id" type="radio" value="" name="list-radio1" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300    dark:border-gray-500"/>
            <label for="horizontal-list-radio-id" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Illness</label>
        </div>
    </li>
    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div className="flex items-center pl-3">
            <input id="horizontal-list-radio-millitary" type="radio" value="" name="list-radio1" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300     dark:border-gray-500"/>
            <label for="horizontal-list-radio-millitary" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Bleeding</label>
        </div>
    </li>
  
</ul>
</div>

<div>
<ul className="items-center mt-4 w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex   dark:border-gray-600  ">
    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div className="flex items-center pl-3">
            <input id="horizontal-list-radio-license" type="radio" value="" name="list-radio2" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300   dark:border-gray-500"/>
            <label for="horizontal-list-radio-license" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Hypertension</label>
        </div>
    </li>
    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div className="flex items-center pl-3">
            <input id="horizontal-list-radio-id" type="radio" value="" name="list-radio2" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300    dark:border-gray-500"/>
            <label for="horizontal-list-radio-id" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Irradiation</label>
        </div>
    </li>
    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div className="flex items-center pl-3">
            <input id="horizontal-list-radio-millitary" type="radio" value="" name="list-radio2" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300     dark:border-gray-500"/>
            <label for="horizontal-list-radio-millitary" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Medications</label>
        </div>
    </li>
  
</ul>
</div>


<div>
<ul className="items-center w-full  mt-4 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex   dark:border-gray-600  ">
    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div className="flex items-center pl-3">
            <input id="horizontal-list-radio-license" type="radio" value="" name="list-radio3" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300   dark:border-gray-500"/>
            <label for="horizontal-list-radio-license" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Diabetes</label>
        </div>
    </li>
    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div className="flex items-center pl-3">
            <input id="horizontal-list-radio-id" type="radio" value="" name="list-radio3" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300    dark:border-gray-500"/>
            <label for="horizontal-list-radio-id" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Trauma</label>
        </div>
    </li>
    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div className="flex items-center pl-3">
            <input id="horizontal-list-radio-millitary" type="radio" value="" name="list-radio3" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300     dark:border-gray-500"/>
            <label for="horizontal-list-radio-millitary" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Abortion</label>
        </div>
    </li>
  
</ul>

</div>
    

    <div className="grid gap-6 mb-6 md:grid-cols-2 mt-8">
        <div>
            <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900  ">Blood Group of Father</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="O +ve" required />
        </div>
        <div>
            <label for="last_name" className="block mb-2 text-sm font-medium text-gray-900  ">Blood Group of Mother</label>
            <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="A +ve" required />
        </div>
       
    </div>




        
<div className="mb-6">
        <label for="email" className="block mb-2 text-sm font-medium text-gray-900  ">Any other significant complications being reported ?</label>
        <textarea type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Any Complaints?' required />
        </div> 
    

</div>


<div>
<h3 className="mb-4 mt-8 font-semibold text-gray-900  ">Intranatal</h3>
<div>
    <h2>Labour</h2>
<ul className="items-center mt-2 w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex   dark:border-gray-600  ">
    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div className="flex items-center pl-3">
            <input id="horizontal-list-radio-license" type="radio" value="" name="list-radio1" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300   dark:border-gray-500"/>
            <label for="horizontal-list-radio-license" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Normal</label>
        </div>
    </li>
    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div className="flex items-center pl-3">
            <input id="horizontal-list-radio-id" type="radio" value="" name="list-radio1" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300    dark:border-gray-500"/>
            <label for="horizontal-list-radio-id" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Prolonged</label>
        </div>
    </li>
   
</ul>

</div>



<div>
<h2 className='mt-8'>Delivery</h2>
<ul className="items-center mt-2 w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex   dark:border-gray-600  ">
    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div className="flex items-center pl-3">
            <input id="horizontal-list-radio-license" type="radio" value="" name="list-radio2" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300   dark:border-gray-500"/>
            <label for="horizontal-list-radio-license" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Hospital</label>
        </div>
    </li>
    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div className="flex items-center pl-3">
            <input id="horizontal-list-radio-id" type="radio" value="" name="list-radio2" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300    dark:border-gray-500"/>
            <label for="horizontal-list-radio-id" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Home</label>
        </div>
    </li>
   
</ul>
</div>



<div>
<h2 className='mt-8'>Type of Delivery</h2>
<ul className="items-center w-full  mt-4 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex   dark:border-gray-600  ">
    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div className="flex items-center pl-3">
            <input id="horizontal-list-radio-license" type="radio" value="" name="list-radio3" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300   dark:border-gray-500"/>
            <label for="horizontal-list-radio-license" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Normal</label>
        </div>
    </li>
    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div className="flex items-center pl-3">
            <input id="horizontal-list-radio-id" type="radio" value="" name="list-radio3" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300    dark:border-gray-500"/>
            <label for="horizontal-list-radio-id" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Caeserian</label>
        </div>
    </li>
    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div className="flex items-center pl-3">
            <input id="horizontal-list-radio-millitary" type="radio" value="" name="list-radio3" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300     dark:border-gray-500"/>
            <label for="horizontal-list-radio-millitary" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Forceps</label>
        </div>
    </li>

    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div className="flex items-center pl-3">
            <input id="horizontal-list-radio-millitary" type="radio" value="" name="list-radio3" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300     dark:border-gray-500"/>
            <label for="horizontal-list-radio-millitary" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Precipitate</label>
        </div>
    </li>

    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div className="flex items-center pl-3">
            <input id="horizontal-list-radio-millitary" type="radio" value="" name="list-radio3" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300     dark:border-gray-500"/>
            <label for="horizontal-list-radio-millitary" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Prolonged</label>
        </div>
    </li>

    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div className="flex items-center pl-3">
            <input id="horizontal-list-radio-millitary" type="radio" value="" name="list-radio3" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300     dark:border-gray-500"/>
            <label for="horizontal-list-radio-millitary" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Induced</label>
        </div>
    </li>
  
</ul>

</div>

<div>
<h2 className='mt-8'>Birth Cry</h2>
<ul className="items-center w-full  mt-4 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex   dark:border-gray-600  ">
    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div className="flex items-center pl-3">
            <input id="horizontal-list-radio-license" type="radio" value="" name="list-radio3" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300   dark:border-gray-500"/>
            <label for="horizontal-list-radio-license" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Normal</label>
        </div>
    </li>
    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div className="flex items-center pl-3">
            <input id="horizontal-list-radio-id" type="radio" value="" name="list-radio3" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300    dark:border-gray-500"/>
            <label for="horizontal-list-radio-id" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Delayed</label>
        </div>
    </li>
   

    

  
   
  
</ul>

</div>

    

    <div className="grid gap-6 mb-6 md:grid-cols-2 mt-8">
        <div>
            <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900  ">Birth Weight</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="O +ve" required />
        </div>
        <div>
            <label for="last_name" className="block mb-2 text-sm font-medium text-gray-900  ">Activity of the Baby</label>
            <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="A +ve" required />
        </div>
       
    </div>




        
<div className="mb-6">
        <label for="email" className="block mb-2 text-sm font-medium text-gray-900  ">Congenital Anomalies (if any)</label>
        <textarea type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Any Complaints?' required />
        </div> 
    

</div>





<div>
<h3 className="mb-4 mt-8 font-semibold text-gray-900  ">Postnatal</h3>
<div>
    <h2>Labour</h2>
<ul className="items-center mt-2 w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex   dark:border-gray-600  ">
    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div className="flex items-center pl-3">
            <input id="horizontal-list-radio-license" type="radio" value="" name="list-radio1" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300   dark:border-gray-500"/>
            <label for="horizontal-list-radio-license" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">NICU</label>
        </div>
    </li>
    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div className="flex items-center pl-3">
            <input id="horizontal-list-radio-id" type="radio" value="" name="list-radio1" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300    dark:border-gray-500"/>
            <label for="horizontal-list-radio-id" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Convolusions</label>
        </div>
    </li>
    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div className="flex items-center pl-3">
            <input id="horizontal-list-radio-id" type="radio" value="" name="list-radio1" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300    dark:border-gray-500"/>
            <label for="horizontal-list-radio-id" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Jaundice</label>
        </div>
    </li>
    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div className="flex items-center pl-3">
            <input id="horizontal-list-radio-id" type="radio" value="" name="list-radio1" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300    dark:border-gray-500"/>
            <label for="horizontal-list-radio-id" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Infection</label>
        </div>
    </li>
    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div className="flex items-center pl-3">
            <input id="horizontal-list-radio-id" type="radio" value="" name="list-radio1" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300    dark:border-gray-500"/>
            <label for="horizontal-list-radio-id" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Trauma</label>
        </div>
    </li>
</ul>

</div>



<div>
<h2 className='mt-8'>Physical Deformity</h2>
<ul className="items-center mt-2 w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex   dark:border-gray-600  ">
    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div className="flex items-center pl-3">
            <input id="horizontal-list-radio-license" type="radio" value="" name="list-radio2" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300   dark:border-gray-500"/>
            <label for="horizontal-list-radio-license" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yes</label>
        </div>
    </li>
    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div className="flex items-center pl-3">
            <input id="horizontal-list-radio-id" type="radio" value="" name="list-radio2" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300    dark:border-gray-500"/>
            <label for="horizontal-list-radio-id" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">No</label>
        </div>
    </li>
   
</ul>
</div>



<div>
<h2 className='mt-8'>Sensory Impairment</h2>
<ul className="items-center w-full  mt-4 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex   dark:border-gray-600  ">
    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div className="flex items-center pl-3">
            <input id="horizontal-list-radio-license" type="radio" value="" name="list-radio3" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300   dark:border-gray-500"/>
            <label for="horizontal-list-radio-license" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Hearing</label>
        </div>
    </li>
    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div className="flex items-center pl-3">
            <input id="horizontal-list-radio-id" type="radio" value="" name="list-radio3" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300    dark:border-gray-500"/>
            <label for="horizontal-list-radio-id" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Vision</label>
        </div>
    </li>
    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div className="flex items-center pl-3">
            <input id="horizontal-list-radio-millitary" type="radio" value="" name="list-radio3" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300     dark:border-gray-500"/>
            <label for="horizontal-list-radio-millitary" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Others</label>
        </div>
    </li>

  
</ul>

</div>

<div>
    <h2 className='mt-8'>Immunization History</h2>
    <ul className="items-center w-full mt-4 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex   dark:border-gray-600  ">
        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div className="flex items-center pl-3">
                <input id="horizontal-list-checkbox-license" type="checkbox" value="" name="list-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300   dark:border-gray-500"/>
                <label for="horizontal-list-checkbox-license" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">BCG</label>
            </div>
        </li>
        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div className="flex items-center pl-3">
                <input id="horizontal-list-checkbox-id" type="checkbox" value="" name="list-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300   dark:border-gray-500"/>
                <label for="horizontal-list-checkbox-id" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Polio</label>
            </div>
        </li>

        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div className="flex items-center pl-3">
                <input id="horizontal-list-checkbox-id" type="checkbox" value="" name="list-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300   dark:border-gray-500"/>
                <label for="horizontal-list-checkbox-id" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">DPT</label>
            </div>
        </li>

        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div className="flex items-center pl-3">
                <input id="horizontal-list-checkbox-id" type="checkbox" value="" name="list-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300   dark:border-gray-500"/>
                <label for="horizontal-list-checkbox-id" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Measles</label>
            </div>
        </li>

        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div className="flex items-center pl-3">
                <input id="horizontal-list-checkbox-id" type="checkbox" value="" name="list-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300   dark:border-gray-500"/>
                <label for="horizontal-list-checkbox-id" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Pentavalent vaccine</label>
            </div>
        </li>
        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div className="flex items-center pl-3">
                <input id="horizontal-list-checkbox-id" type="checkbox" value="" name="list-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300   dark:border-gray-500"/>
                <label for="horizontal-list-checkbox-id" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">MMR</label>
            </div>
        </li>
    </ul>
</div>


    


        
<div className="mb-6 mt-4">
        <label for="email" className="block mb-2 text-sm font-medium text-gray-900  ">Previous Consultation or treatment</label>
        <textarea type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Any Undertaken?' required />
        </div> 

</div>



<button type="submit" className="text-white bg-green-500 transition-colors ease-in-out hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:bg-green-800">Save</button>
   
 </form> 
    </div>
  )
}

export default History