import React, { useState } from 'react';

const Signature = () => {
  const [inputValue, setInputValue] = useState('');
  const [filledBoxes, setFilledBoxes] = useState([false, false, false, false]); // Initially all boxes are empty
  
  // Your lists of values
  const lists = [
    ['justin', 'benito', 'b'],
    ['jayden', 'bennet', 'j'],
    ['s', 'a', 'josephine'],
    ['baskar', 'joseph', 'r']
  ];
  
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    
    // Check if input value exists in any of the lists
    const index = lists.findIndex(list => list.includes(e.target.value));
    
    if (index !== -1) {
      // If value exists, update corresponding box to be filled
      const updatedFilledBoxes = [...filledBoxes];
      updatedFilledBoxes[index] = true;
      setFilledBoxes(updatedFilledBoxes);
    }
  };
  
  return (
    <div className="flex items-center justify-center">
      {/* Boxes */}
      {filledBoxes.map((filled, index) => (
        <div
          key={index}
          className={`w-8 h-8 mt-8 border border-gray-400 bg-gray-50 rounded-lg ${filled ? 'bg-blue-500' : ''}`}
          style={{ marginRight: '0.5rem' }}
        />
      ))}
      {/* Input field */}
      <input 
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter Unique Id"
        className="mr-4 p-1 border mt-8 border-gray-400 rounded-md bg-gray-100"
      />
      
    </div>
  );
};

export default Signature;
