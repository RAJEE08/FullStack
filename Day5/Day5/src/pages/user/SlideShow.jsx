// SlideShow.jsx

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/SlideShow.css'; // Import the CSS file for styling

const SlideShow = ({ image }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle changing to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 1 ? 0 : 1));
  };

  // Automatically advance to the next slide every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(nextSlide, 3000);
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className="slideshow">
      <img
        src={image}
        alt="Slide"
        className={currentIndex === 0 ? 'active' : ''}
      />
    </div>
  );
};

SlideShow.propTypes = {
  image: PropTypes.string.isRequired,
};

export default SlideShow;