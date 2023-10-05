import React from 'react';
import { FaFacebook, FaMailBulk, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const SocialIcons = () => {
  return (
    <div className="fixed bottom-4 right-4 flex space-x-4">
      <a
        href="https://whatsapp.com/channel/0029Va62ghDKmCPY0r3XlA1K"
        className="text-green-700"
        target="_blank" // Open in a new tab
        rel="noopener noreferrer" // Recommended for security
      >
        <FaWhatsapp className="text-3xl" />
      </a>
      <a
        href="https://www.facebook.com/prasaadaapakedvaar?mibextid=9R9pXO"
        className="text-blue-500"
        target="_blank" // Open in a new tab
        rel="noopener noreferrer" // Recommended for security
      >
        <FaFacebook className="text-3xl" />
      </a>
      <a
        href="mailto:prasaadaapakedvaar@gmail.com"
        className="text-blue-600"
        target="_blank" // Open in a new tab
        rel="noopener noreferrer" // Recommended for security
      >
        <FaMailBulk className="text-3xl" />
      </a>
      <a
        href="https://instagram.com/prasadaapkedwaar?igshid=NzZlODBkYWE4Ng=="
        className="text-pink-600"
        target="_blank" // Open in a new tab
        rel="noopener noreferrer" // Recommended for security
      >
        <FaInstagram className="text-3xl" />
      </a>
    </div>
  );
};

export default SocialIcons;
