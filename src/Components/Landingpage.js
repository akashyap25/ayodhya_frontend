import React, { useState, useEffect } from 'react';
import left from '../Assets/icon-angle-left.svg';
import right from '../Assets/icon-angle-right.svg';
import { image1 as desktopImage1, image2 as desktopImage2, image3 as desktopImage3, image4 as desktopImage4, image5 as desktopImage5, image6 as desktopImage6, image7 as desktopImage7, image8 as desktopImage8, image9 as desktopImage9 } from '../Assets/desktopImages'; // Import desktop images
import { image1 as mobileImage1, image2 as mobileImage2, image3 as mobileImage3, image4 as mobileImage4, image5 as mobileImage5, image6 as mobileImage6, image7 as mobileImage7, image8 as mobileImage8, image9 as mobileImage9 } from '../Assets/mobileImages'; // Import mobile images

function Carousel() {
  const desktopImages = [desktopImage1, desktopImage2, desktopImage3, desktopImage4, desktopImage5, desktopImage6, desktopImage7, desktopImage8, desktopImage9];
  const mobileImages = [mobileImage1, mobileImage2, mobileImage3, mobileImage4, mobileImage5, mobileImage6, mobileImage7, mobileImage8, mobileImage9];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % desktopImages.length);
    }, 3000); // Change image every 3 seconds

    return () => {
      clearTimeout(timer);
    };
  }, [currentSlide]);

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? desktopImages.length - 1 : prevSlide - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === desktopImages.length - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <div className="relative w-full h-[calc(100vh-5rem)] overflow-hidden rounded-lg md:h-[calc(100vh-5rem)]">
      {desktopImages.map((desktopImage, index) => (
        <div
          key={index}
          className={`absolute w-full h-[calc(100vh-5rem)] ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-700 ease-in-out`}
        >
          <img
            src={window.innerWidth >= 768 ? desktopImage : mobileImages[index]}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
       
       {/* Slider indicators */}
      <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        {desktopImages.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? 'bg-orange-400' : 'bg-gray-300'
            }`}
            aria-current={index === currentSlide ? 'true' : 'false'}
            aria-label={`Slide ${index + 1}`}
            data-carousel-slide-to={index}
          ></button>
        ))}
      </div>

      <button
        type="button"
        className="absolute top-1/2 left-0 z-30 flex items-center justify-center h-4 px-4 cursor-pointer group focus:outline-none"
        onClick={goToPreviousSlide}
      >
        <span>
          <img src={left} alt="previous" />
        </span>
      </button>
      <button
        type="button"
        className="absolute top-1/2 right-0 z-30 flex items-center justify-center h-4 px-4 cursor-pointer group focus:outline-none"
        onClick={goToNextSlide}
      >
        <span>
          <img src={right} alt="next" />
        </span>
      </button>
    </div>
  );
}

export default Carousel;
