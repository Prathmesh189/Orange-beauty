// src/components/homepage/BannerSection.jsx
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion'; // Import useInView from framer-motion

// Import the image directly to avoid issues with the relative path
import bannerImage from '../../images/hero2.jpeg';

const BannerSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Check if the component is in view

  // Define animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      className="banner-section h-[70vh] flex items-center justify-center bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${bannerImage})` }} // Use the imported image
      ref={ref} // Attach ref to the section
    >
      <motion.div
        className="text-center max-w-md p-4 bg-black bg-opacity-0 rounded-lg"
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'} // Trigger animation based on inView
        variants={fadeIn}
        transition={{ duration: 0.5 }} // Animation duration
      >
        <motion.h1
          className="text-3xl md:text-4xl font-bold mb-2"
          variants={fadeIn}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'} // Trigger animation based on inView
          transition={{ duration: 0.5, delay: 0.2 }} // Delay for the heading
        >
        Exclusive Offer for 
        </motion.h1>
        <motion.h1
          className="text-3xl md:text-4xl font-bold mb-2"
          variants={fadeIn}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'} // Trigger animation based on inView
          transition={{ duration: 0.5, delay: 0.2 }} // Delay for the heading
        >
        New Clients!
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl mb-4"
          variants={fadeIn}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'} // Trigger animation based on inView
          transition={{ duration: 0.5, delay: 0.4 }} // Delay for the paragraph
        >
          Enjoy UP TO 50% OFF on Your First Visit!
        </motion.p>
        <motion.button
          className="px-6 py-2 text-white font-semibold rounded shadow bg-orange-600 hover:text-black transition duration-300"
          variants={fadeIn}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'} // Trigger animation based on inView
          transition={{ duration: 0.5, delay: 0.6 }} // Delay for the button
        >
          Claim Your Discount
        </motion.button>
      </motion.div>
    </section>
  );
};

export default BannerSection;
