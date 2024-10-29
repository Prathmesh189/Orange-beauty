import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'; // Adjust the path as needed

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between border-b border-gray-600">
      <div className="flex items-center">
        <img src={logo} alt="Company Logo" className="h-12 mr-6" /> {/* Use the imported logo */}
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
          <Link to="/" className="block py-2 lg:py-0 hover:text-orange-600">
            Home
          </Link>
        </li>
        <li>
          <Link to="/aboutus" className="block py-2 lg:py-0 hover:text-orange-600">
            About Us
          </Link>
        </li>
        <li>
          <Link to="/features" className="block py-2 lg:py-0 hover:text-orange-600">
            Features
          </Link>
        </li>
        <li>
          <Link to="/contactus" className="block py-2 lg:py-0 hover:text-orange-600">
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
