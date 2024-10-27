// src/components/features/Features.js
import React from 'react';

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

const Features = () => {
  return (
    <section className="py-16 bg-gray-200">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-8">Our Features</h2>
        <p className="mb-12 text-gray-700">Discover the outstanding services we offer to enhance your beauty and wellness.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <button className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-400 transition-colors">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
