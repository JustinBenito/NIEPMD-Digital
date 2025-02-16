import React from 'react'

const Intellectual = () => {
  return (
    <div>
        <div className="container mx-auto p-4">
      <h2 className="text-5xl font-bold mb-8">Psychological Assessment</h2>

      <div className="mb-4">
        <label htmlFor="generalBehavior" className="block text-sm font-medium mb-1">
          General Behaviour during the assessment:
        </label>
        <input id="generalBehavior" type="text" className=" bg-gray-50  w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="mb-4">
          <label htmlFor="attentionConcentration" className="block text-sm font-medium mb-1">
            Attention & Concentration:
          </label>
          <input id="attentionConcentration" type="text" className=" bg-gray-50 w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="activityLevel" className="block text-sm font-medium mb-1">
            Activity Level:
          </label>
          <input id="activityLevel" type="text" className=" bg-gray-50 w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500" />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="comprehension" className="block text-sm font-medium mb-1">
          Comprehension:
        </label>
        <input id="comprehension" type="text" className=" bg-gray-50 w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500" />
      </div>

      <div className="mb-4">
        <label htmlFor="emotionalityBehaviour" className="block text-sm font-medium mb-1">
          Emotionality & Behaviour:
        </label>
        <input id="emotionalityBehaviour" type="text" className=" bg-gray-50 w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500" />
      </div>

      <div className="mb-4">
        <label htmlFor="relationship" className="block text-sm font-medium mb-1">
          Relationship within/outside family (significant stressors):
        </label>
        <input id="relationship" type="text" className="w-full bg-gray-50  px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500" />
      </div>


     

        <div className="mb-4 w-full items-start">
          <label htmlFor="psychologicalTests" className="block text-sm font-medium mb-1">
            Psychological tests used (Please tick):
          </label>

    <div className='flex flex-row  w-full justify-between items-start'>
        <div className='flex flex-col'>
          <div className="flex items-center">
            <input id="gds" type="checkbox" value="GDS" className="mr-2 bg-gray-50  rounded" />
            <label htmlFor="gds">DST</label>
          </div>
          <div className="flex items-center">
            <input id="gdt" type="checkbox" value="GDT" className="mr-2 bg-gray-50  rounded" />
            <label htmlFor="gdt">SFB</label>
          </div>
        </div>

        <div className='flex flex-col'>
          <div className="flex items-center">
            <input id="gds" type="checkbox" value="GDS" className="mr-2 bg-gray-50  rounded" />
            <label htmlFor="gds">VSMS</label>
          </div>
          <div className="flex items-center">
            <input id="gdt" type="checkbox" value="GDT" className="mr-2 bg-gray-50  rounded" />
            <label htmlFor="gdt">MISIC</label>
          </div>
        </div>

        <div className='flex flex-col'>
          <div className="flex items-center">
            <input id="gds" type="checkbox" value="GDS" className="mr-2 bg-gray-50  rounded" />
            <label htmlFor="gds">GDS</label>
          </div>
          <div className="flex items-center">
            <input id="gdt" type="checkbox" value="GDT" className="mr-2 bg-gray-50  rounded" />
            <label htmlFor="gdt">BKT</label>
          </div>
        </div>

        <div className='flex flex-col'>
          <div className="flex items-center">
            <input id="gds" type="checkbox" value="GDS" className="mr-2 bg-gray-50  rounded" />
            <label htmlFor="gds">GDT</label>
          </div>
          <div className="flex items-center">
            <input id="gdt" type="checkbox" value="GDT" className="mr-2 bg-gray-50  rounded" />
            <label htmlFor="gdt">Any other</label>
          </div>
        </div>

    </div>

        </div>
       
       
        <div className="mb-4 w-full items-start">
          <label htmlFor="psychologicalTests" className="block text-sm font-medium mb-1">
            Results:
          </label>

    <div className='flex flex-row  w-full justify-between items-start'>
        <div className='flex flex-col gap-4'>
          <div className="flex items-center">
            <label htmlFor="gds"  className="mr-4">DA</label>
            <input id="gds" type="input" value="" className="mr-2 bg-gray-50 border border-1 rounded" />
          </div>
          <div className="flex items-center">
            <label htmlFor="gdt" className="mr-4">DQ</label>
            <input id="gdt" type="input" value="" className="mr-2 bg-gray-50 border border-1 rounded" />
          </div>
        </div>

        <div className='flex flex-col gap-4'>
          <div className="flex items-center">
            <label htmlFor="gds" className="mr-4">SA</label>
            <input id="gds" type="input" value="" className="mr-2 bg-gray-50 border border-1 rounded" />
          </div>
          <div className="flex items-center">
            <label htmlFor="gdt" className="mr-4">SQ</label>
            <input id="gdt" type="input" value="" className="mr-2 bg-gray-50 border border-1 rounded" />
          </div>
        </div>

        <div className='flex flex-col gap-4'>
          <div className="flex items-center">
            <label htmlFor="gds" className="mr-4">MA</label>
            <input id="gds" type="input" value="" className="mr-2 bg-gray-50 border border-1 rounded" />
          </div>
          <div className="flex items-center">
            <label htmlFor="gdt" className="mr-4">IQ</label>
            <input id="gdt" type="input" value="" className="mr-2 bg-gray-50 border border-1 rounded" />
          </div>
        </div>

    

    </div>

        </div>
       
       <div>
       <label htmlFor="relationship" className="block text-sm mt-8 font-medium mb-1">
          Any Other Information:
        </label>

        <div className="flex items-center">
            <label htmlFor="gds"  className="mr-4 text-sm">Further testing (if required):</label>
            <input id="gds" type="input" value="" className="mr-2 bg-gray-50 border border-1 rounded text-sm" />
        </div>

        <div className="flex items-center mt-4">
            <label htmlFor="gds"  className="mr-4 text-sm">Intellectual level:</label>
            <input id="gds" type="input" value="" className="mr-2 bg-gray-50 border border-1 rounded text-sm" />
        </div>

        <div className="mb-6">
        <label for="password" className="block mb-2 text-sm font-medium mt-4 text-gray-900  ">Provisional Diagnosis:</label>
        <textarea type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
        </div> 

        <div className="mb-6">
        <label for="password" className="block mb-2 text-sm font-medium mt-4 text-gray-900  ">Management Plan:</label>
        <textarea type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
        </div> 

        <div className="mb-6">
        <label for="password" className="block mb-2 text-sm font-medium mt-4 text-gray-900  ">Referrals:</label>
        <textarea type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
        </div> 

        <button type="submit" className="text-white bg-green-500 transition-colors ease-in-out hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:bg-green-800">Save</button>


       </div>
      </div>
    </div>

  )
}

export default Intellectual