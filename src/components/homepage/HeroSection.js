import React from 'react';

// Import the image directly if you encounter issues with the relative path
import heroImage from '../../images/hero.jpg';

const HeroSection = () => {
  return (
    <section
      className="hero-section h-[80vh] flex items-center justify-center bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${heroImage})` }} // Use the imported image
    >
      <div className="text-center max-w-md p-4 bg-black bg-opacity-50 rounded-lg">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Unleash Your Inner Beauty</h1>
        <p className="text-lg md:text-xl mb-6">
          Experience luxurious pampering with our expert beauty services. From stunning hair transformations to rejuvenating skincare treatments, we’ve got everything you need to look and feel your best!
        </p>
        <button className="px-6 py-3 bg-white text-black font-semibold rounded shadow hover:bg-green-800 hover:text-white transition duration-300">
          Book Your Appointment
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
