import React from 'react';

const industries = [
  {
    title: "Hair Care",
    description: "Expert stylists offering the latest trends in hair cutting, coloring, and styling to bring out your best look.",
    icon: "💇‍♀️", // You can replace this with actual icons or images
  },
  {
    title: "Skin Care",
    description: "Premium facials, treatments, and products for radiant, glowing skin that feels as good as it looks.",
    icon: "💆‍♀️",
  },
  {
    title: "Nail Care",
    description: "Enjoy relaxing manicure and pedicure services with a range of styles and finishes.",
    icon: "💅",
  },
  {
    title: "Makeup Services",
    description: "Makeup artists for any occasion, ensuring a flawless and customized look every time.",
    icon: "💄",
  },
];

const IndustriesSection = () => {
  return (
    <section className="py-12 px-6 md:px-12 bg-pink-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-pink-600">
        Our Specialties
      </h2>
      <div className="grid gap-8 md:gap-12 md:grid-cols-2 lg:grid-cols-4">
        {industries.map((industry, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300"
          >
            <span className="text-5xl mb-4">{industry.icon}</span>
            <h3 className="text-xl font-semibold mb-2 text-pink-500">{industry.title}</h3>
            <p className="text-gray-600">{industry.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IndustriesSection;
