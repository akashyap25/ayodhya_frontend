import React from 'react';
import { FaFacebook, FaMailBulk, FaInstagram } from 'react-icons/fa';

const SocialIcons = () => {
  return (
    <div className="fixed bottom-4 right-4 flex space-x-4">
      <a href="https://www.facebook.com/prasaadaapakedvaar?mibextid=9R9pXO" className="text-blue-500">
        <FaFacebook className="text-3xl" />
      </a>
      <a href="mailto:prasaadaapakedvaar@gmail.com" className="text-blue-400">
        <FaMailBulk className="text-3xl" />
      </a>
      <a href="https://www.instagram.com/prasaadaapakedvaar/" className="text-pink-500">
        <FaInstagram className="text-3xl" />
      </a>
    </div>
  );
};

export default SocialIcons;
