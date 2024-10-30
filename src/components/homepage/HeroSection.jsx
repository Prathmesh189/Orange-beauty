import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import heroImage from '../../images/hero.png';

const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      className="hero-section h-[70vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] flex items-center justify-center lg:justify-end bg-cover bg-center sm:bg-right lg:bg-center text-white px-4 sm:px-8 md:px-20"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover', // Ensures image covers the section
        backgroundPosition: 'center', // Centered for larger screens
      }}
      ref={ref}
    >
      <motion.div
        className="text-center lg:text-right max-w-full lg:max-w-lg p-4 sm:p-6 bg-black bg-opacity-60 rounded-lg"
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={fadeIn}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-2 leading-tight"
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Embrace Your
        </motion.h1>
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-orange-600 mb-4 leading-tight"
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          True Beauty
        </motion.h1>
        <motion.p
          className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 font-light"
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Indulge in a world of luxurious beauty treatments designed to reveal the best version of you. Let our expert team pamper you with transformative care and rejuvenating experiences.
        </motion.p>
        <motion.button
          className="px-6 py-2 sm:px-8 sm:py-3 bg-orange-600 text-white font-semibold rounded-full shadow-lg hover:bg-white hover:text-orange-600 transition duration-300"
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Discover Now
        </motion.button>
      </motion.div>
    </section>
  );
};

export default HeroSection;
