import React from 'react';

const AboutUs = () => {
  return (
    <section className="bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">About Us</h1>
        <p className="text-lg text-gray-600 text-center mb-12">
          Welcome to our beauty parlor! We are dedicated to enhancing your natural beauty
          through our exceptional services and products.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              To provide a transformative experience that leaves our clients feeling beautiful and confident.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Values</h2>
            <p className="text-gray-600">
              We believe in quality, integrity, and passion in everything we do, ensuring our clients receive the best.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Team</h2>
            <p className="text-gray-600">
              Our skilled professionals are dedicated to offering personalized services tailored to your unique needs.
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Meet Our Team</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="bg-white p-4 rounded-lg shadow-lg w-48">
            <img src="https://via.placeholder.com/150" alt="Team Member" className="rounded-full mb-4" />
            <h3 className="text-lg font-semibold text-gray-800">Jane Doe</h3>
            <p className="text-gray-600">Lead Stylist</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg w-48">
            <img src="https://via.placeholder.com/150" alt="Team Member" className="rounded-full mb-4" />
            <h3 className="text-lg font-semibold text-gray-800">John Smith</h3>
            <p className="text-gray-600">Makeup Artist</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg w-48">
            <img src="https://via.placeholder.com/150" alt="Team Member" className="rounded-full mb-4" />
            <h3 className="text-lg font-semibold text-gray-800">Emily Johnson</h3>
            <p className="text-gray-600">Nail Technician</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Join Us Today!</h2>
          <p className="text-lg text-gray-600 mb-6">
            Experience the difference with our expert services. Schedule your appointment today!
          </p>
          <button className="px-6 py-2 bg-yellow-500 text-gray-800 font-bold rounded-full hover:bg-yellow-400 transition">
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
