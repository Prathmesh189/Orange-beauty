// src/components/about/AboutUs.jsx
import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-gradient-to-b from-orange-50 to-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Title and Introduction */}
        <motion.h1 
          className="text-5xl font-bold text-center mb-6 text-orange-600" 
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
        >
          Welcome to Orange Ladies Beauty Parlour!
        </motion.h1>
        <motion.p 
          className="text-xl text-gray-700 text-center mb-12" 
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7 }}
        >
          Discover a sanctuary of beauty and relaxation where our expert team brings out your best self with dedicated, personalized service.
        </motion.p>

        {/* Mission, Values, Why Choose Us */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {[
            {
              title: "Our Mission",
              description: "To provide a transformative experience that leaves our clients feeling beautiful and confident.",
            },
            {
              title: "Our Values",
              description: "Quality, integrity, and passion in everything we do, ensuring our clients receive exceptional care.",
            },
            {
              title: "Why Choose Us?",
              description: "With years of experience and a commitment to quality, we deliver services that empower you to shine.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h2 className="text-2xl font-semibold text-orange-600 mb-4">{item.title}</h2>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Meet Our Team Section */}
        <motion.h2 
          className="text-4xl font-bold text-center mb-6 text-orange-600" 
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
        >
          Meet Our Team
        </motion.h2>
        <motion.p 
          className="text-lg text-gray-700 text-center mb-8" 
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7 }}
        >
          Our team of seasoned professionals is dedicated to delivering the highest standard of beauty services.
        </motion.p>
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {[
            { name: "Jane Doe", role: "Lead Stylist", img: "https://via.placeholder.com/150" },
            { name: "John Smith", role: "Makeup Artist", img: "https://via.placeholder.com/150" },
            { name: "Emily Johnson", role: "Nail Technician", img: "https://via.placeholder.com/150" },
            { name: "Sarah Lee", role: "Skincare Specialist", img: "https://via.placeholder.com/150" },
          ].map((member, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg w-48 hover:shadow-xl transition-shadow duration-300"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img src={member.img} alt={member.name} className="rounded-full w-32 h-32 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-orange-600 text-center">{member.name}</h3>
              <p className="text-gray-600 text-center">{member.role}</p>
            </motion.div>
          ))}
        </div>

        {/* Location Section */}
        <motion.h2 
          className="text-4xl font-bold text-center mb-6 text-orange-700" 
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
        >
          Visit Us
        </motion.h2>
        <motion.p 
          className="text-lg text-gray-700 text-center mb-6" 
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7 }}
        >
          Conveniently located in the heart of Pune, experience the best in beauty at Orange Ladies Beauty Parlour.
        </motion.p>
        <div className="h-96 w-full rounded-lg overflow-hidden relative flex justify-center items-center">
          <iframe
            title="Google Map"
            width="70%" // Set width to 100% for better responsiveness
            height="100%"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://maps.google.com/maps?width=50%25&amp;height=400&amp;hl=en&amp;q=Nowrosjee%20Wadia%20College,pune,maharashtra,india+(Orange%20Ladies%20Beauty%20Parlour)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
