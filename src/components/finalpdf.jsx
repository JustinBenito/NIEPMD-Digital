// NewInputPage.js
import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import { useNavigate } from 'react-router-dom';
import Nav from './nav';
import back from '../assets/back.svg'
import data from '../assets/data.jpeg'

const NewInputPage = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [ubid, setUbid] = useState('');
// Hook for navigation

  const handleGeneratePDF = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();

    // Add the image first to cover the full page
    doc.addImage(data, 'PNG', 0, 0, pageWidth, pageHeight);

    // Add the text on top of the image with white background for better visibility
    doc.text(`${name}`, pageWidth/2, (pageHeight/4)+25);
    doc.text(`${ubid}`, pageWidth/2, (pageHeight/4)+35)
    doc.text(`${age}`, (pageWidth/2)+60, (pageHeight/4)+25);

    // Save the PDF
    doc.save('user-info.pdf');
  };

  const goBack = ()=>{
    window.location.href='/'
  }

  return (
    <>
    <div className="container mx-auto p-4">
    

      <h2 className="text-5xl font-bold mb-8">Enter Your Information</h2>

      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          Name:
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-gray-50 w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="age" className="block text-sm font-medium mb-1">
          Age:
        </label>
        <input
          id="age"
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="bg-gray-50 w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="ubid" className="block text-sm font-medium mb-1">
          UBID:
        </label>
        <input
          id="ubid"
          type="text"
          value={ubid}
          onChange={(e) => setUbid(e.target.value)}
          className="bg-gray-50 w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>

      <button
        onClick={handleGeneratePDF}
        className="text-white bg-blue-500 transition-colors ease-in-out hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:bg-blue-800"
      >
        Generate PDF
      </button>
    </div>
    </>
  );
};

export default NewInputPage;
