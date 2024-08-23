// components/Dropdown.js
import React, { useState } from 'react';

const options = [
  { value: '1', label: '1 ay' },
  { value: '2', label: '2 ay' },
  { value: '3', label: '3 ay' },
  { value: '6', label: '6 ay' },
  { value: '12', label: '12 ay' },
  { value: 'unlimited', label: 'Sınırsız' }
];

const Dropdown = ({ selected, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (value) => {
    onSelect(value);
    setIsOpen(false); // Close the dropdown after selecting an option
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="bg-[#232334] border border-white/10 rounded-lg p-2 text-base-heading flex items-center justify-between w-full text-sm"
      >
        <span>{options.find(opt => opt.value === selected)?.label || 'Seçiniz'}</span>
        <svg
          className={`w-4 h-4 ml-2 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <ul className="absolute bg-[#232334] border border-white/10 rounded-lg mt-1 w-full z-10 text-sm">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleSelect(option.value)}
              className={`cursor-pointer px-4 py-2 hover:bg-gray-700 ${
                option.value === selected ? 'bg-gray-600' : ''
              }`}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
