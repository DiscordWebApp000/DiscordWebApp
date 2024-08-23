import React, { useState } from 'react';
import { data1, data2, data3, data4, data5 } from '../../public/data/commands.json'; // Verileri import ettik

// Sol Panel Bileşeni
const LeftPanel = ({ onLinkClick }) => {
  const [activeLink, setActiveLink] = useState(1);

  const handleClick = (linkNumber) => {
    setActiveLink(linkNumber);
    onLinkClick(linkNumber);
  };

  return (
    <div className="w-1/5 sticky top-10">
      <div className="flex flex-col space-y-3 sticky top-10">
        {[
          { number: 1, label: 'Eğlence' },
          { number: 2, label: 'Kullanici' },
          { number: 3, label: 'Puan Market' },
          { number: 4, label: 'Yetkili' },
          { number: 5, label: 'Bot' },
        ].map(({ number, label }) => (
          <div
            key={number}
            className={`cursor-pointer p-3 rounded-lg text-white text-center text-sm ${
              activeLink === number ? 'bg-[#6E5FCE]' : 'bg-[#313244] hover:bg-[#3a3b4d]'
            } transition-colors`}
            onClick={() => handleClick(number)}
          >
            {label}
          </div>
        ))}
      </div>
    </div>
  );
};

// Sağ Panel Bileşeni
const RightPanel = ({ data, searchTerm, onSearchChange }) => {
  const filteredData = data.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-3/4 mx-auto">
      <div className="p-4 rounded-t-lg">
        <input
          type="text"
          placeholder="Komutları ara..."
          className="w-full p-3 rounded-lg bg-[#313244] text-white space-y-4 mt-[-30px]"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      <div className="flex flex-col space-y-4 p-4">
        {filteredData.map((item, index) => (
          <div key={index} className="p-4 bg-[#232334] rounded-lg">
            <div className="text-white text-sm font-semibold">{item.title}</div>
            <div className="text-[#94B9CB] text-xs mt-1">{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Ana Bileşen (CommandsSection)
const CommandsSection = () => {
  const [currentData, setCurrentData] = useState(data1);
  const [searchTerm, setSearchTerm] = useState('');

  const handleLinkClick = (linkNumber) => {
    switch (linkNumber) {
      case 1:
        setCurrentData(data1);
        break;
      case 2:
        setCurrentData(data2);
        break;
      case 3:
        setCurrentData(data3);
        break;
      case 4:
        setCurrentData(data4);
        break;
      case 5:
        setCurrentData(data5);
        break;
      default:
        setCurrentData(data1);
    }
  };

  const handleSearchChange = (value) => {
    setSearchTerm(value);
  };

  return (
    <div className="flex p-4 mt-[150px]">
      <LeftPanel onLinkClick={handleLinkClick} />
      <RightPanel data={currentData} searchTerm={searchTerm} onSearchChange={handleSearchChange} />
    </div>
  );
};

export default CommandsSection;
