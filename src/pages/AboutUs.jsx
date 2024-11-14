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
        <br></br>
        <br></br>
        {/* Title and Introduction */}
        <motion.h1 
          className="text-5xl font-bold text-center mb-6 text-orange-400" 
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
        >
          Welcome to Orange Ladies Beauty Parlour!
        </motion.h1>
        <motion.p 
          className="text-2xl text-gray-700 text-center mb-12" 
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7 }}
        >
          Discover a sanctuary of beauty and relaxation where our expert team brings out your best self with dedicated, personalized service.
        </motion.p>
        <br></br>
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
              <h2 className="text-3xl font-semibold text-orange-400 mb-4">{item.title}</h2>
              <p className="text-xl text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
        <br></br>
        {/* Meet Our Team Section */}
        <motion.h2 
          className="text-5xl font-bold text-center mb-6 text-orange-400" 
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
        >
          Meet Our Team
        </motion.h2>
        <motion.p 
          className="text-2xl text-gray-700 text-center mb-8" 
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7 }}
        >
          Our team of seasoned professionals is dedicated to delivering the highest standard of beauty services.
        </motion.p>
        <br></br>
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {[
            { name: "Jane Doe", role: "Lead Stylist", img: "https://img.freepik.com/premium-photo/photo-25-year-old-german-business-man-smiling-brown-hair-full-body-standing-office_935552-10515.jpg?w=2000" },
            { name: "Asaf Sah", role: "Makeup Artist", img: "https://sc-events.s3.amazonaws.com/31053/8395895/95412a81036feee2080e7c6802a5f50b831e6dbd4a5a1671e8f41dceed22d0ee/ee405d3f-332a-43c2-9256-0c37713476fb.jpg" },
            { name: "Tina John", role: "Nail Technician", img: "https://i.pinimg.com/originals/60/e0/3b/60e03b25d0829ec560b3f472e84cd23a.jpg" },
            { name: "Sarah Lee", role: "Skincare Specialist", img: "https://uploads.concordia.net/2022/08/31115105/HRH-Queen-Rania-scaled.jpeg" },
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
              <h3 className="text-3xl font-semibold text-orange-400 text-center">{member.name}</h3>
              <p className="text-xl text-gray-600 text-center">{member.role}</p>
            </motion.div>
          ))}
        </div>
        <br></br>
        {/* Location Section */}
        <motion.h2 
          className="text-5xl font-bold text-center mb-6 text-orange-400" 
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
        >
          Visit Us
        </motion.h2>
        <motion.p 
          className="text-2xl text-gray-700 text-center mb-6" 
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7 }}
        >
          Conveniently located in the heart of Pune, experience the best in beauty at Orange Ladies Beauty Parlour.
        </motion.p>
        <br></br>
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
      <br></br><br></br>
    </section>
    
  );
};

export default AboutUs;
