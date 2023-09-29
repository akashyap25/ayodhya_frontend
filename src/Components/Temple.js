import React from 'react';
import ram from '../Assets/ramjanambhumi.jpg';
import hanuman from '../Assets/hanuman.jpg';
import kanak from '../Assets/kanak.jpg';
import ramkipauri from '../Assets/ramkipauri.jpg';

const Temple = () => {
  return (
    <>
      <div className='flex flex-col lg:flex-row lg:space-x-4 justify-center items-center text-center lg:w-2/3 mx-auto p-8 mt-24'>
        <div className='lg:w-1/4 bg-white rounded-lg shadow-lg shadow-orange-500 p-4'>
          <img src={ram} alt='Ram Janam Bhumi' className='w-full h-auto' />
          <h2 className='text-xl font-semibold mt-2'>Ram Janam Bhumi</h2>
          <p className='text-sm font-semibold my-8'>
            Ram Janam Bhumi is the place where Lord Ram was born. It is located in Ayodhya, Uttar Pradesh, India.
          </p>
        </div>
        <div className='lg:w-1/4 bg-white rounded-lg shadow-lg shadow-orange-500 p-4 mt-4 lg:mt-0'>
          <img src={hanuman} alt='Hanuman Garhi' className='w-full h-auto' />
          <h2 className='text-xl font-semibold mt-2'>Hanuman Garhi</h2>
          <p className='text-sm font-semibold my-8'>
            Hanuman Garhi is a temple of Hanuman in Ayodhya, Uttar Pradesh, India. It is located on the banks of the Sarayu river and is the most visited temple in Ayodhya.
          </p>
        </div>
        <div className='lg:w-1/4 bg-white rounded-lg shadow-lg shadow-orange-500 p-4 mt-4 lg:mt-0'>
          <img src={kanak} alt='Kanak Bhawan' className='w-full h-auto' />
          <h2 className='text-xl font-semibold mt-2'>Kanak Bhawan</h2>
          <p className='text-sm font-semibold my-8'>
            Kanak Bhawan is a temple in Ayodhya, Uttar Pradesh, India. It is an important temple in Ayodhya and is situated in the Ramkot area.
          </p>
        </div>
        <div className='lg:w-1/4 bg-white rounded-lg shadow-lg shadow-orange-500 p-4 mt-4 lg:mt-0'>
          <img src={ramkipauri} alt='Kanak Bhawan' className='w-full h-auto' />
          <h2 className='text-xl font-semibold mt-2'>Ram ki paidi</h2>
          <p className='text-sm font-semibold my-8'>
          Ram ki Paidi comprises a series of ghats located on the bank of the river Sarayu and is widely used as a bathing ghat by the devotees of Lord Ram. This ghat was built in the year 1984 for the devotees of Lord Ram.
          </p>
        </div>
      </div>
    </>
  );
};

export default Temple;
