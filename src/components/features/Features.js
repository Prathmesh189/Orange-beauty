// src/components/features/Features.js
import React from 'react';
import bookImage from '../../images/book.png'; // Replace with your actual image path

const features = [
  {
    id: 1,
    title: 'Professional Styling',
    description: 'Get your hair styled by our expert professionals who are up-to-date with the latest trends.',
    icon: '💇‍♀️',
  },
  {
    id: 2,
    title: 'Quality Products',
    description: 'We use only the highest quality products that are safe and effective for your hair and skin.',
    icon: '🧴',
  },
  {
    id: 3,
    title: 'Relaxing Atmosphere',
    description: 'Enjoy a serene and relaxing environment designed to make your visit enjoyable.',
    icon: '🕯️',
  },
  {
    id: 4,
    title: 'Custom Treatments',
    description: 'We offer personalized treatments tailored to your individual needs and preferences.',
    icon: '🌿',
  },
];

const additionalFeatures = [
  {
    id: 1,
    title: 'All-in-one Calendar',
    description: 'Book 1:1s or group classes in just a few clicks, on desktop, tablet, or mobile.',
    icon: '📅',
  },
  {
    id: 2,
    title: 'Your Booking Page',
    description: 'Empower your customers to self-book their appointments 24/7.',
    icon: '📄',
  },
  {
    id: 3,
    title: 'Reviews',
    description: 'Display shoutouts from happy customers to encourage new bookings.',
    icon: '⭐',
  },
  {
    id: 4,
    title: 'Secure Online Payments',
    description: 'Take digital, credit, and debit card payments ahead of appointments.',
    icon: '💳',
  },
];

const Features = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 lg:px-0">
        {/* Heading and Image Row */}
        <div className="flex flex-col lg:flex-row items-center lg:justify-between mb-12">
          {/* Text Content */}
          <div className="lg:w-1/2 text-left mb-8 lg:mb-0">
            <h2 className="text-4xl font-extrabold mb-4 text-gray-800">Features to make bookings amazing.</h2>
            <p className="text-lg text-gray-600 mb-8">
              A meaningful and memorable experience starts with a connection. Explore how our features help you reach a wider audience, share what you do best, and keep customers coming back.
            </p>
            <button className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-blue-500 transition-colors">
              Get your FREE account
            </button>
          </div>

          {/* Image */}
          <div className="lg:w-1/2 flex justify-center">
            <img
              src={bookImage}
              alt="Mobile App Preview"
              className="w-full max-w-md lg:max-w-full lg:h-auto object-cover "
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center transform transition-transform hover:scale-105"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <button className="bg-yellow-500 text-white font-semibold py-2 px-4 rounded hover:bg-yellow-400 transition-colors">
                Learn More
              </button>
            </div>
          ))}
        </div>

        {/* Additional Features Section */}
        <div className="bg-gray-50 py-10 rounded-lg shadow-md">
          <h2 className="text-center text-3xl font-bold text-gray-800 mb-6">Time to get seen.</h2>
          <p className="text-center text-lg text-gray-600 mb-10">
            Customize your online Booking Page with a service menu, your availability, and top-notch reviews, then get paid in a snap.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalFeatures.map((feature) => (
              <div
                key={feature.id}
                className="bg-white rounded-xl shadow-md p-6 text-center transform transition-transform hover:scale-105"
              >
                <div className="text-blue-500 text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-blue-600">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
