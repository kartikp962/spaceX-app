import React, { useState } from 'react';
import left from "../../assets/left.png";
import right from "../../assets/right.png";
import './Photos.css'; // Import the CSS file

const Photos = ({ photos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className='photos-container'>
      <button
        onClick={() => {
          setCurrentIndex((prevIndex) => prevIndex === 0 ? photos.length - 1 : prevIndex - 1);
        }}
        className='nav-button nav-button-left'
      >
        <img src={left} alt="leftArrow" />
      </button>
      <div className='image-container'>
        <img
          src={photos[currentIndex]}
          alt={`rocket-img-${currentIndex}`}
          className='image'
        />
      </div>
      <button
        onClick={() => {
          setCurrentIndex((prevIndex) => prevIndex === photos.length - 1 ? 0 : prevIndex + 1);
        }}
        className='nav-button nav-button-right'
      >
        <img src={right} alt="right" />
      </button>
    </div>
  );
};

export default Photos;
