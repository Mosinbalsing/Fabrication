import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import Masonry from 'react-masonry-css'; // Import Masonry package
import { Gates, Doors, Furnitures, Grils, Shades, Shatars, Steps } from '@/constants'; // Assuming Gates and Doors are arrays

// Create an object for images
const images = {
  Gates: Gates,
  Doors: Doors,
  Furnitures: Furnitures,
  Grils: Grils,
  Shades: Shades,
  Shatars: Shatars,
  Steps: Steps,
};

const tabs = [
  { name: 'Doors', content: 'This is the Doors section.' },
  { name: 'Furnitures', content: 'This is the Furnitures section.' },
  { name: 'Gates', content: 'This is the Gates section.' },
  { name: 'Grils', content: 'This is the Grils section.' },
  { name: 'Shades', content: 'This is the Shades section.' },
  { name: 'Shatars', content: 'This is the Shatar section.' },
  { name: 'Steps', content: 'This is the Steps section.' },
];

export const Gallery = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].name);
  const [showAll, setShowAll] = useState(false); // State to control "Show More"

  // Media queries for responsiveness
  const isMobile = useMediaQuery({ maxWidth: 640 });
  const isTablet = useMediaQuery({ minWidth: 641, maxWidth: 1024 });

  // Dynamic button styles based on screen size
  const buttonStyles = `
    ${isMobile ? 'px-3 py-2 text-xs w-full' : ''}
    ${isTablet ? 'px-4 py-2 text-sm' : ''}
    ${!isMobile && !isTablet ? 'px-6 py-3 text-base' : ''}
    rounded-md font-medium transition-all duration-300
  `;

  // Get the images for the active tab
  const activeImages = images[activeTab] || [];

  // Show only the first 4 images or all based on 'showAll' state
  const imagesToShow = showAll ? activeImages : activeImages.slice(0, 4);

  // Conditional styles to center images if there are 1, 2, or 3 images
  const imageContainerStyle = imagesToShow.length <= 3 ? 'flex justify-center' : 'my-masonry-grid';

  return (
    <div className="flex flex-col items-center p-5 rounded-lg shadow-lg xl:max-w-7xl mx-auto">
      {/* Tab Buttons Container */}
      <div className={`flex ${isMobile ? 'grid grid-cols-2 gap-2' : 'flex-wrap gap-4'} justify-center p-4 bg-[#1C1C21] rounded-lg mb-6`}>
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
        className="w-full p-6 bg-[#1C1C21] text-center text-lg text-gray-300 rounded-lg flex justify-center"
      >
        {tabs.find((tab) => tab.name === activeTab).content}
      </motion.div>

      {/* Masonry Layout for Images */}
      <div className={imageContainerStyle}>
        <Masonry
          breakpointCols={isMobile ? 1 : isTablet ? 2 : 4}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {imagesToShow.map((image, index) => (
            <div key={index} className="masonry-image">
              <img src={image.path} alt={`${activeTab} ${index}`} className="w-full h-auto rounded-lg shadow-md mb-4" />
            </div>
          ))}
        </Masonry>
      </div>

      {/* Show More Button */}
      {activeImages.length > 4 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-4 px-6 py-3 bg-[#3A3A49] text-white rounded-md font-medium transition-all duration-300"
        >
          {showAll ? 'Show Less' : 'Show More'}
        </button>
      )}
    </div>
  );
};