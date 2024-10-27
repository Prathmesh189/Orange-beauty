import React from 'react';

// Import the image directly to avoid issues with the relative path
import bannerImage from '../../images/hero2.jpeg';

const BannerSection = () => {
  return (
    <section
      className="banner-section h-[50vh] flex items-center justify-center bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${bannerImage})` }} // Use the imported image
    >
      <div className="text-center max-w-md p-4 bg-black bg-opacity-50 rounded-lg">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">🌟 Exclusive Offer for New Clients! 🌟</h1>
        <p className="text-lg md:text-xl mb-4">Enjoy UP TO 50% OFF on Your First Visit!</p>
        <button className="px-6 py-2 bg-white text-black font-semibold rounded shadow hover:bg-green-800 hover:text-white transition duration-300">
          Claim Your Discount
        </button>
      </div>
    </section>
  );
};

export default BannerSection;
