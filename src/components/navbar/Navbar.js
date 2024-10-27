import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between border-b border-gray-600">
      <div className="flex items-center">
        <img src="/logo.png" alt="Company Logo" className="h-10 mr-4" />
        <button
          className="lg:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          &#9776;
        </button>
      </div>
      <ul
        className={`flex-col lg:flex-row lg:flex lg:items-center lg:space-x-8 w-full lg:w-auto lg:static transition-all duration-300 ease-in ${
          isOpen ? 'flex' : 'hidden'
        }`}
      >
        <li>
          <Link to="/" className="block py-2 lg:py-0 hover:text-gray-400">
            Home
          </Link>
        </li>
        <li>
          <Link to="/aboutus" className="block py-2 lg:py-0 hover:text-gray-400">
            About Us
          </Link>
        </li>
        <li>
          <Link to="/features" className="block py-2 lg:py-0 hover:text-gray-400">
            Features
          </Link>
        </li>
        <li>
          <Link to="/industries" className="block py-2 lg:py-0 hover:text-gray-400">
            Industries
          </Link>
        </li>
        <li>
          <Link to="/pricing" className="block py-2 lg:py-0 hover:text-gray-400">
            Pricing
          </Link>
        </li>
        {/* Buttons displayed in mobile view */}
        <div className="flex flex-col lg:hidden mt-4 space-y-2">
          <a href="#login" className="text-white hover:text-gray-400">
            Login
          </a>
          <a
            href="#start"
            className="bg-white text-black py-2 px-4 rounded hover:bg-blue-500 hover:text-white transition-colors text-center"
          >
            Start FREE
          </a>
        </div>
      </ul>
      {/* Buttons displayed in desktop view */}
      <div className="hidden lg:flex items-center space-x-4">
        <a href="#login" className="text-white hover:text-gray-400">
          Login
        </a>
        <a
          href="#start"
          className="bg-white text-black py-2 px-4 rounded hover:bg-blue-500 hover:text-white transition-colors"
        >
          Start FREE
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
