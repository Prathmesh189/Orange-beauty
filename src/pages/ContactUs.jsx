// src/components/contact/ContactUs.jsx
import React, { useState, useRef } from 'react'; // Removed useEffect import
import { motion, useInView } from 'framer-motion';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false }); // Allow re-triggering of animation

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('YOUR_FORMSPREE_ENDPOINT', {  // Replace with your Formspree endpoint
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    });

    if (response.ok) {
      setSuccess(true);
      setError(false);
      setName('');
      setEmail('');
      setMessage('');
    } else {
      setError(true);
      setSuccess(false);
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-orange-50 to-white">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          className="text-5xl font-bold text-center text-orange-400 mb-6"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'} // Animate based on inView state
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
        >
          Contact Us
        </motion.h2>
        <p className="text-xl text-center text-gray-600 mb-6">
          At Orange Ladies Beauty Parlour, we are here to make your beauty journey smooth and memorable. Whether you have
          questions about our services, we’d love to hear from you!
        </p>
         <br></br>
        {/* Form Section */}
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">Message</label>
              <textarea
                id="message"
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="How can we assist you?"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-400 transition duration-300"
            >
              Send Message
            </button>
            {success && <p className="text-green-500">Message sent successfully!</p>}
            {error && <p className="text-red-500">Failed to send message. Please try again.</p>}
          </form>
        </div>
        <br></br>
        {/* Contact Information */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-8 md:space-y-0">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-2xl text-orange-500 font-bold">📞</span>
            <p className="text-xl text-gray-800 mt-2">+1 234 567 890</p>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <span className="text-2xl text-orange-500 font-bold">📧</span>
            <p className="text-xl text-gray-800 mt-2">contact@orangeladies.com</p>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <span className="text-2xl text-orange-500 font-bold">📍</span>
            <p className="text-xl text-gray-800 mt-2">123 Glam Avenue, Beauty City</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
