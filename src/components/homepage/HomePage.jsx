import React from 'react';
import HeroSection from './HeroSection';
import ServicesCarousel from './ServicesCarousel';
import BannerSection from './BannerSection';
//import FixedIcons from './FixedIcons';
import Features from '../../pages/Features';

// Import the background image
//import hero2 from '../../images/hero2.jpg'; // Adjust the path as necessary

const HomePage = () => {
  return (
    <div
      className="homepage font-sans text-gray-900 bg-cover bg-center"
    // Set the background image
    >
      <HeroSection />
      <ServicesCarousel />
      <BannerSection />
      {/*<IndustriesSection />*/}
      <Features />
      {/*<FixedIcons />*/}
    </div>
  );
};

export default HomePage;
