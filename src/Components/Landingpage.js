import React, { useState, useEffect } from 'react';
import left from '../Assets/icon-angle-left.svg';
import right from '../Assets/icon-angle-right.svg';
import { image1 as ayodhyadesktopImage1, image2 as ayodhyadesktopImage2, image3 as ayodhyadesktopImage3, image4 as ayodhyadesktopImage4 } from '../Assets/ayodhya/desktopImages'; 
import { image1 as ayodhyamobileImage1, image2 as ayodhyamobileImage2, image3 as ayodhyamobileImage3, image4 as ayodhyamobileImage4 } from '../Assets/ayodhya/mobileImages'; 
import { image1 as mathuradesktopImage1, image2 as mathuradesktopImage2, image3 as mathuradesktopImage3, image4 as mathuradesktopImage4 } from '../Assets/mathura/desktopImages'; 
import { image1 as mathuramobileImage1, image2 as mathuramobileImage2, image3 as mathuramobileImage3, image4 as mathuramobileImage4 } from '../Assets/mathura/mobileImages'; 
import { image1 as varanasidesktopImage1, image2 as varanasidesktopImage2, image3 as varanasidesktopImage3, image4 as varanasidesktopImage4 } from '../Assets/varanasi/desktopImages'; 
import { image1 as varanasimobileImage1, image2 as varanasimobileImage2, image3 as varanasimobileImage3, image4 as varanasimobileImage4 } from '../Assets/varanasi/mobileImages';

//temples
const ayodhyaTemples = [
  { id: 'RamJanamBhumi', label: 'Ram JanamBhumi (राम जन्मभूमि)' },
  { id: 'HanumanGadhi', label: 'Hanuman Gadhi (हनुमान गढ़ी)' },
  { id: 'KanakBhawan', label: 'Kanak Bhawan (कनक भवन)' },
  { id: 'ShriNageshwarNathMandir', label: 'Shri Nageshwar Nath Mandir (श्री नागेश्वर नाथ मंदिर)' },
];

const mathuraTemples = [
  { id: 'BankeBihari', label: 'Banke Bihari Temple ( बांके बिहारी मंदिर )' },
  { id: 'ShriRadhaVallabh', label: 'Shri Radha Vallabh Temple ( श्री राधा वल्लभ मंदिर )' },
  { id: 'RadhaRaman', label: 'Radha Raman Temple ji ( राधा रमण मंदिर जी )' },
  { id: 'Premmandir', label: 'Prem mandir ( प्रेम मंदिर )' },
];

const varanasiTemples = [
  { id: 'KashiVishwanath', label: 'Kashi Vishwanath Temple ( काशी विश्वनाथ मन्दिर )' },
  { id: 'SankatMochanHanuman', label: 'Sankat Mochan Hanuman Mandir ( संकट मोचन हनुमान मंदिर )' },
  { id: 'Durga', label: 'Durga Temple ( दुर्गा मंदिर )' },
];

const ayodhyaPrasad = [
  { id: 251, label: '250 ग्राम लड्डू , फूल की माला , हनुमान चालीसा की किताब', price: 251 },
  { id: 551, label: '500 ग्राम लड्डू , फूल की माला , हनुमान चालीसा की किताब', price: 551 },
  { id: 1051, label: '750 ग्राम लड्डू , फूल की माला , हनुमान चालीसा की किताब , वस्त्र', price: 1051 },
  { id: 1111, label: '1 kg  लड्डू , फूल की माला , हनुमान चालीसा की किताब , वस्त्र', price: 1111 }
];


const mathuraPrasaad = [
  { id: 351, label: '250 ग्राम पेड़ा , फूल की माला , राधा चालीसा की किताब', price: 351 },
  { id: 551, label: '500 ग्राम पेड़ा , फूल की माला , राधा चालीसा की किताब', price: 551 },
  { id: 1051, label: '750 ग्राम पेड़ा , फूल की माला , राधा चालीसा की किताब , वस्त्र', price: 1051 },
  { id: 1111, label: '1 kg पेड़ा , फूल की माला , राधा चालीसा की किताब , वस्त्र', price: 1111 }
];

const varanasiPrasad = [
  { id: 351, label: '250 ग्राम लड्डू , फूल की माला', price: 351 },
  { id: 551, label: '500 ग्राम लड्डू , फूल की माला', price: 551 },
  { id: 1051, label: '750 ग्राम लड्डू , फूल की माला , वस्त्र', price: 1051 },
  { id: 1111, label: '1 kg लड्डू , फूल की माला , वस्त्र', price: 1111 },
];





function Carousel({ selectedTemple }) {
  // Create an object that maps temple names to their image arrays
  const templeImages = {
    Ayodhya: {
      desktop: [ayodhyadesktopImage1, ayodhyadesktopImage2, ayodhyadesktopImage3, ayodhyadesktopImage4],
      mobile: [ayodhyamobileImage1, ayodhyamobileImage2, ayodhyamobileImage3, ayodhyamobileImage4],
    },
    Mathura: {
      desktop: [mathuradesktopImage1, mathuradesktopImage2, mathuradesktopImage3, mathuradesktopImage4],
      mobile: [mathuramobileImage1, mathuramobileImage2, mathuramobileImage3, mathuramobileImage4],
    },
    Varanasi: {
      desktop: [varanasidesktopImage1, varanasidesktopImage2, varanasidesktopImage3, varanasidesktopImage4],
      mobile: [varanasimobileImage1, varanasimobileImage2, varanasimobileImage3, varanasimobileImage4],
    },
  };

  // Get the images for the selected temple
  const selectedImages = templeImages[selectedTemple];

  const desktopImages = selectedImages.desktop;
  const mobileImages = selectedImages.mobile;

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

  const getTempleList = () => {
    if (selectedTemple === 'Ayodhya') {
      return ayodhyaTemples;
    } else if (selectedTemple === 'Mathura') {
      return mathuraTemples;
    } else if (selectedTemple === 'Varanasi') {
      return varanasiTemples;
    }

    return ayodhyaTemples;
  };

  const getPrasad = () => {
    if (selectedTemple === 'Ayodhya') {
      return ayodhyaPrasad;
    } else if (selectedTemple === 'Mathura') {
      return mathuraPrasaad;
    } else if (selectedTemple === 'Varanasi') {
      return varanasiPrasad;
    }

    return ayodhyaPrasad;
  };

  return (
    <>
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
      <div className='p-12 text-center text-2xl lg:text-4xl'>
          <h1 className=' font-semibold'>Prasad online in {selectedTemple} (प्रसाद ऑनलाइन चढ़ाएं)  </h1>
          <h1 className='text-orange-400 font-extrabold mt-4'>🚩जयश्री राम🚩</h1>
      </div>
      <div className='p-2 lg:p-8 text-center w-full md:w-1/2  mx-auto text-lg font-medium'>
          <ol>
              <li className='p-2 lg:p-4 shadow-md shadow-orange-500 mb-8'>
                <h1 className='text-xl font-semibold text-orange-500'>Place of offering prasad (प्रसाद चढ़ाने का स्थान)</h1>
                <ul className='mt-8 text-left ml-5 '>
                  {getTempleList().map((temple, index) => (
                    <li key={index}>
                      <p className='mt-2 font-semibold'>{temple.label}</p>
                    </li>
                  ))}
                </ul>
              </li>
              <li className='mt-4 p-2 lg:p-4 shadow-md shadow-orange-500 '>
                  <h1 className='font-bold text-black bg-red-500 p-2 w-24 mx-auto '>Note:</h1>
                  <p className='mt-4 font-semibold'>While offering your Prasad in the temple, you will be shown through video call and then your Prasad will be delivered to your home. (मंदिर में प्रसाद चढ़ाते समय आपको वीडियो कॉल के जरिए दर्शन कराया जाएगा और फिर आपका प्रसाद आपके घर पहुंचा दिया जाएगा.)</p>
              </li>
              <li className='mt-4 p-2 lg:p-4 shadow-md shadow-orange-500 '>
  <ul>
    <h1 className='font-bold text-black p-2 w-24 mx-auto '>Note:</h1>
    {getPrasad().map((item) => (
      <>
      
      <li className='flex gap-2 mb-4 lg:ml-4' key={item.id}>
        <h1 className=' font-semibold text-red-500'>₹{item.price}:</h1>
        <p className='text-xl font-semibold '>{item.label}</p>
        
      </li>
      </>
    ))}
  </ul>
</li>

          </ol>
      </div>
    </>
  );
}

export default Carousel;
