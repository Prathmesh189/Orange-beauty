// src/components/FixedIcons.jsx
import React from 'react';
import { FaWhatsappSquare, FaRegEnvelope } from 'react-icons/fa';

const FixedIcons = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col space-y-5">
      {/* WhatsApp Icon */}
      <a
        href="https://wa.me/9370791583" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="text-white bg-gradient-to-br from-green-500 to-green-700 p-4 rounded-full shadow-lg hover:scale-105 transition-all duration-300 ease-in-out transform hover:shadow-xl hover:ring-2 hover:ring-green-300 animate-fadeIn"
      >
        <FaWhatsappSquare size={30} />
      </a>

      {/* Gmail Icon */}
      <a
        href="mailto:swapnjakhopade01@gmail.com" // Replace with your Gmail address
        className="text-white bg-gradient-to-br from-red-500 to-red-700 p-4 rounded-full shadow-lg hover:scale-105 transition-all duration-300 ease-in-out transform hover:shadow-xl hover:ring-2 hover:ring-red-300 animate-fadeIn"
      >
        <FaRegEnvelope size={30} />
      </a>
    </div>
  );
};

export default FixedIcons;
