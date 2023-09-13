import React, { useState } from 'react';

const getRandomTailwindClass = () => {
  const classes = [
    'bg-blue-500',
    'bg-red-500',
    'bg-green-500',
    'bg-yellow-500',
    'bg-purple-500',
    'bg-pink-500',
    'bg-indigo-500',
    'bg-gray-500',
  ];

  const randomIndex = Math.floor(Math.random() * classes.length);
  return classes[randomIndex];
};

const Setting = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="p-4">
      <label className="block font-bold mb-2">Dropdown</label>
      <select
        className={`w-full p-2 border rounded ${getRandomTailwindClass()}`}
        value={selectedOption}
        onChange={handleSelectChange}
      >
        <option value="">Select an option</option>
        {options.map((option, index) => (
          <option key={index} value={option} className={getRandomTailwindClass()}>
            {option}
          </option>
        ))}
      </select>
      {selectedOption && (
        <p className="mt-2">Selected Option: {selectedOption}</p>
      )}
    </div>
  );
};

export default Setting
