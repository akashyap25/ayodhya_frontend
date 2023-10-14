import React from 'react';
import ram from '../Assets/ayodhya/Temple/ramjanambhumi.jpg';
import hanuman from '../Assets/ayodhya/Temple/hanuman.jpg';
import kanak from '../Assets/ayodhya/Temple/kanak.jpg';
import ramkipauri from '../Assets/ayodhya/Temple/ramkipauri.jpg';
import nageshwarnath from '../Assets/ayodhya/Temple/nageshwarnath.jpg';
import bankeBihari from '../Assets/mathura/Temple/bankeBihari.jpg';
import radhavallabh from '../Assets/mathura/Temple/radhaVallabh.jpeg';
import radharaman from '../Assets/mathura/Temple/radhaRaman.jpeg';
import premmandir from '../Assets/mathura/Temple/premMandir.jpeg';
import kashivishwanath from '../Assets/varanasi/Temple/kashiVishwanath.jpg';
import sankatmochan from '../Assets/varanasi/Temple/hanumanVaranasi.jpg';
import durga from '../Assets/varanasi/Temple/durga.jpeg';

const ayodhyatempleData = [
  {
    title: 'Ram Janam Bhumi (राम जन्मभूमि)',
    image: ram,
    description: 'Ram Janam Bhumi is the place where Lord Ram was born. It is located in Ayodhya, Uttar Pradesh, India.',
  },
  {
    title: 'Hanuman Garhi (हनुमान गढ़ी)',
    image: hanuman,
    description: 'Hanuman Garhi is a temple of Hanuman in Ayodhya, Uttar Pradesh, India. It is located on the banks of the Sarayu river and is the most visited temple in Ayodhya.',
  },
  {
    title: 'Kanak Bhawan (कनक भवन)',
    image: kanak,
    description: 'Kanak Bhawan is a temple in Ayodhya, Uttar Pradesh, India. It is an important temple in Ayodhya and is situated in the Ramkot area.',
  },
  {
    title: 'Ram ki Paidi (राम की पैड़ी)',
    image: ramkipauri,
    description: 'Ram ki Paidi comprises a series of ghats located on the bank of the river Sarayu and is widely used as a bathing ghat by the devotees of Lord Ram. This ghat was built in the year 1984 for the devotees of Lord Ram.',
  },
  {
    title: 'Shri Nageshwar Nath Mandir (श्री नागेश्वर नाथ मंदिर)',
    image: nageshwarnath,
    description: 'The temple of Nageshwarnath is said to have been established by Kush, the son of Rama. Legend is that Kush lost his armlet while bathing in the Saryu, which was picked up by a Nag-Kanya who fell in love more...',
  },
];

const mathuratempleData = [
  {
    title: 'Banke Bihari Temple ( बांके बिहारी मंदिर )',
    image: bankeBihari,
    description: 'Banke Bihari Temple is a Hindu temple situated in the town of Vrindavan, Mathura district of Uttar Pradesh, India. The temple is dedicated to Banke Bihari who is believed to be the combined form of Radha and Krishna.',
  },
  {
    title: 'Shri Radha Vallabh Temple ( श्री राधा वल्लभ मंदिर )',
    image: radhavallabh,
    description: 'Shri Radha Vallabh Temple, also called Shri Radha Vallabhlal ji Temple is a historic temple in the city of Vrindavan, Mathura district, Uttar Pradesh, India. The temple is dedicated to Hindu deities Radha Krishna.',
  },
  {
    title: 'Radha Raman Temple ji ( राधा रमण मंदिर जी )',
    image: radharaman,
    description: 'Sri Radha Raman Temple, is a Hindu temple situated in Vrindavan, India. It is dedicated to Krishna who is worshiped as Radha Ramana.',
  },
  {
    title: 'Prem mandir ( प्रेम मंदिर )',
    image: premmandir,
    description: 'Prem Mandir (lit. The Temple of Divine Love) is a Hindu temple in Vrindavan, Mathura district, Uttar Pradesh, India. The temple was established by Jagadguru Shri Kripalu Ji Maharaj (the fifth Original Jagadguru)..',
  },
];

const varanasitempleData = [
  {
    title: 'Kashi Vishwanath Temple ( काशी विश्वनाथ मन्दिर )',
    image: kashivishwanath,
    description: 'The Kashi Vishwanath Temple is a famous Hindu temple dedicated to Shiva. It is located in Vishwanath Gali, near Varanasi, Uttar Pradesh, India. The temple is one of the most sacred Hindu pilgrimage sites and is among the twelve Jyotirlinga.',
  },
  {
    title: 'Sankat Mochan Hanuman Mandir ( संकट मोचन हनुमान मंदिर )',
    image: sankatmochan,
    description: 'Sankat Mochan Hanuman Temple is a Hindu temple in Varanasi, Uttar Pradesh, India and is dedicated to the Hindu God Hanuman.',
  },
  {
    title: 'Durga Temple ( दुर्गा मंदिर )',
    image: durga,
    description: 'Durga Mandir (Hindi: दुर्गा मंदिर), also known as Durga Kund Mandir and Durga Temple, is one of the most famous temples in the holy city of Varanasi. This temple has great religious importance in Hinduism and is dedicated to the Maa Durga.',
  },
];



const Temple = ({selectedTemple}) => {

  const getTempleData = () => {
    if (selectedTemple === 'Ayodhya') {
      return ayodhyatempleData;
    } else if (selectedTemple === 'Mathura') {
      return mathuratempleData;
    } else if (selectedTemple === 'Varanasi') {
      return varanasitempleData;
    }
  
    return ayodhyatempleData;
  };

  const cardStyle = {
    height: '450px', // Fixed card height
  };

  const cardContainerStyle = {
    marginBottom: '20px', // Margin between rows
    marginRight: '8px', // Margin between columns
  };

  return (
    <div className="flex flex-wrap justify-center items-center text-center mx-auto p-8 mt-24">
      {getTempleData().map((temple, index) => (
        <div
          key={index}
          className="w-full lg:w-1/3 bg-white rounded-lg shadow-lg shadow-orange-500 p-4 mb-4 lg:mb-0"
          style={{ ...cardStyle, ...cardContainerStyle }}
        >
          <img src={temple.image} alt={temple.title} className="w-full h-auto" style={{ height: '50%' }} />
          <h2 className="text-xl font-semibold mt-2">{temple.title}</h2>
          <p className="text-sm font-semibold my-8" style={{ height: '150px' }}>
            {temple.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Temple;
