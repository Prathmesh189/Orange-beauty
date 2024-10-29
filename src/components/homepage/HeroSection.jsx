// src/components/homepage/HeroSection.jsx
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion'; // Import useInView from framer-motion

// Import the image directly if you encounter issues with the relative path
import heroImage from '../../images/hero.jpg';

const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Check if the component is in view

  // Define animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      className="hero-section h-[80vh] flex items-center justify-center bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${heroImage})` }} // Use the imported image
      ref={ref} // Attach ref to the section
    >
      <motion.div
        className="text-center max-w-md p-4 bg-black bg-opacity-50 rounded-lg"
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'} // Trigger animation based on inView
        variants={fadeIn}
        transition={{ duration: 0.5 }} // Animation duration
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4"
          variants={fadeIn}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'} // Trigger animation based on inView
          transition={{ duration: 0.5, delay: 0.2 }} // Delay for the heading
        >
          Unleash Your Inner Beauty
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl mb-6"
          variants={fadeIn}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'} // Trigger animation based on inView
          transition={{ duration: 0.5, delay: 0.4 }} // Delay for the paragraph
        >
          Experience luxurious pampering with our expert beauty services. From stunning hair transformations to rejuvenating skincare treatments, we’ve got everything you need to look and feel your best!
        </motion.p>
        <motion.button
          className="px-6 py-3 bg-white text-black font-semibold rounded shadow hover:bg-green-800 hover:text-white transition duration-300"
          variants={fadeIn}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'} // Trigger animation based on inView
          transition={{ duration: 0.5, delay: 0.6 }} // Delay for the button
        >
          Explore More
        </motion.button>
      </motion.div>
    </section>
  );
};

export default HeroSection;
