import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../../images/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/aboutus', label: 'About Us' },
    { path: '/features', label: 'Features' },
    { path: '/contactus', label: 'Contact Us' }
  ];

  return (
    <nav className="bg-orange-400 text-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <img 
            src={logo}
            alt="Company Logo" 
            className="max-h-16 w-auto object-contain"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map(({ path, label }) => (
            <a
              key={path}
              href={path}
              className="text-xl hover:text-gray-200 transition-colors duration-200 font-medium"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-md hover:bg-orange-500 transition-colors duration-200"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Mobile Navigation */}
        <div
          className={`
            lg:hidden fixed inset-y-0 right-0 w-64 bg-orange-400 shadow-lg
            transform transition-transform duration-300 ease-in-out
            ${isOpen ? 'translate-x-0' : 'translate-x-full'}
            z-50
          `}
        >
          <div className="flex flex-col p-4">
            <button
              onClick={() => setIsOpen(false)}
              className="self-end p-2 hover:bg-orange-500 rounded-md mb-8"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="flex flex-col space-y-4">
              {navLinks.map(({ path, label }) => (
                <a
                  key={path}
                  href={path}
                  className="text-xl hover:text-gray-200 transition-colors duration-200 p-2 rounded-md hover:bg-orange-500"
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;