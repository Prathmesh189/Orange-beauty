// src/components/features/Features.jsx
import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCut, faSpa, faTshirt, faPaintBrush } from '@fortawesome/free-solid-svg-icons';
import { motion, useInView } from 'framer-motion';

const features = [
  {
    id: 1,
    title: 'Professional Styling',
    description: 'Get your hair styled by our expert professionals who are up-to-date with the latest trends.',
    icon: faCut,
  },
  {
    id: 2,
    title: 'Quality Products',
    description: 'We use only the highest quality products that are safe and effective for your hair and skin.',
    icon: faSpa,
  },
  {
    id: 3,
    title: 'Relaxing Atmosphere',
    description: 'Enjoy a serene and relaxing environment designed to make your visit enjoyable.',
    icon: faTshirt,
  },
  {
    id: 4,
    title: 'Custom Treatments',
    description: 'We offer personalized treatments tailored to your individual needs and preferences.',
    icon: faPaintBrush,
  },
];

const industries = [
  {
    title: 'Hair Care',
    description: 'Expert stylists offering the latest trends in hair cutting, coloring, and styling to bring out your best look.',
    icon: faCut,
  },
  {
    title: 'Skin Care',
    description: 'Premium facials, treatments, and products for radiant, glowing skin that feels as good as it looks.',
    icon: faSpa,
  },
  {
    title: 'Nail Care',
    description: 'Enjoy relaxing manicure and pedicure services with a range of styles and finishes.',
    icon: faPaintBrush,
  },
  {
    title: 'Makeup Services',
    description: 'Makeup artists for any occasion, ensuring a flawless and customized look every time.',
    icon: faTshirt,
  },
];

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Check if the section is in view

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-orange-50 to-white">
      <div className="container mx-auto px-6 lg:px-0">
        
        {/* Features Section */}
        <motion.h1 
          className="text-5xl font-bold text-center mb-6 text-orange-700" 
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'} // Animate based on inView
          transition={{ duration: 0.5 }}
        >
          Our Features
        </motion.h1>
        <br />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center transition-transform transform hover:scale-105"
              variants={fadeInUp}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'} // Animate based on inView
              transition={{ duration: 0.5, delay: feature.id * 0.1 }}
            >
              <div className="text-6xl mb-4">
                <FontAwesomeIcon icon={feature.icon} />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-orange-600">{feature.title}</h3>
              <p className="text-gray-600 mb-6">{feature.description}</p>
              <button className="bg-orange-500 text-white font-semibold py-2 px-5 rounded-full hover:bg-orange-400 transition-colors">
                Learn More
              </button>
            </motion.div>
          ))}
        </div>
        <br />
        {/* Industries Section */}
        <motion.h2 
          className="text-5xl font-bold text-center mb-6 text-orange-700" 
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'} // Animate based on inView
          transition={{ duration: 0.5 }}
        >
          Our Specialties
        </motion.h2>
        <br />
        <div className="grid gap-10 md:gap-12 md:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300"
              variants={fadeInUp}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'} // Animate based on inView
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <span className="text-6xl mb-4">
                <FontAwesomeIcon icon={industry.icon} />
              </span>
              <h3 className="text-2xl font-semibold mb-3 text-orange-600">{industry.title}</h3>
              <p className="text-gray-600 mb-6">{industry.description}</p>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Features;
