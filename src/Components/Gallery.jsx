import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

const tabs = [
  { name: 'Doors', content: 'This is the Doors section.' },
  { name: 'Furnitures', content: 'This is the Furnitures section.' },
  { name: 'Gates', content: 'This is the Gates section.' },
  { name: 'Grils', content: 'This is the Grils section.' },
  { name: 'Shades', content: 'This is the Shades section.' },
  { name: 'Shatar', content: 'This is the Shatar section.' },
  { name: 'Steps', content: 'This is the Steps section.' },
];

export const Gallery = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].name);

  // Media queries for responsiveness
  const isMobile = useMediaQuery({ maxWidth: 640 });
  const isTablet = useMediaQuery({ minWidth: 641, maxWidth: 1024 });
  const isLaptop = useMediaQuery({ minWidth: 1025 });

  // Dynamic button styles based on screen size
  const buttonStyles = `
    ${isMobile ? 'px-3 py-2 text-xs w-full' : ''}
    ${isTablet ? 'px-4 py-2 text-sm' : ''}
    ${isLaptop ? 'px-6 py-3 text-base' : ''}
    rounded-md font-medium transition-all duration-300
  `;

  return (
    <div className="flex flex-col items-center p-5  rounded-lg shadow-lg">
      {/* Tab Buttons Container */}
      <div className={`flex ${isMobile ? 'grid grid-cols-2 gap-7' : 'flex-wrap space-x-4'} justify-center p-4 bg-[#1C1C21] rounded-lg mb-6`}>
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`${buttonStyles} ${
              activeTab === tab.name
                ? 'bg-[#3A3A49] text-white shadow transform scale-105'
                : 'bg-[#2A2A35] text-gray-400 hover:bg-[#3A3A49] hover:text-white'
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Tab Content Container */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="w-full p-6 bg-[#1C1C21] text-center text-lg text-gray-300 rounded-lg"
      >
        {tabs.find((tab) => tab.name === activeTab).content}
      </motion.div>
    </div>
  );
};

