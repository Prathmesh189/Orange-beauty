import React, { useState } from 'react';

import service1 from '../../images/service1.jpg';
import service2 from '../../images/service2.jpeg';
import service3 from '../../images/service3.jpg';
import service4 from '../../images/service4.jpeg';

const products = [
  { id: 1, label: 'Bestseller', category: 'Offers', discount: '15% OFF', image: service1, title: 'Reviver Shampoo & Conditioner', price: '₹2,448', originalPrice: '₹2,880' },
  { id: 2, label: 'Bestseller', category: 'Hair Care', discount: '15% OFF', image: service2, title: 'Shea Pro Curl Conditioner', price: '₹1,500', originalPrice: '₹2,400' },
  { id: 3, label: 'Bestseller', category: 'Skin Care', discount: '10% OFF', image: service3, title: 'Olaplex Purple Shampoo', price: '₹2,655', originalPrice: '₹2,950' },
  { id: 4, label: 'Bestseller', category: 'Hair Care', discount: '10% OFF', image: service4, title: 'Olaplex Bond Conditioner', price: '₹2,655', originalPrice: '₹2,950' },
];

const PricingSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSeeAllModalOpen, setIsSeeAllModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Offers');
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openSeeAllModal = () => {
    setIsSeeAllModalOpen(true);
  };

  const closeSeeAllModal = () => {
    setIsSeeAllModalOpen(false);
  };

  const filteredProducts = products.filter(product => product.category === selectedCategory);

  const nextProduct = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredProducts.length);
  };

  const prevProduct = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + filteredProducts.length) % filteredProducts.length);
  };

  return (
    <section className="pricing-section bg-gray-800 text-white p-8 md:p-12 lg:p-16 text-center">
      <h2 className="text-3xl md:text-4xl font-semibold mb-6">Shop Our Bestsellers</h2>
      <p className="text-gray-400 mb-8">Discover our top beauty picks curated just for you.</p>

      {/* Category Buttons */}
      <div className="flex justify-center space-x-4 mb-8">
        {['Offers', 'Hair Care', 'Skin Care'].map((category) => (
          <button 
            key={category} 
            onClick={() => { setSelectedCategory(category); setCurrentIndex(0); }}
            className={`px-4 py-2 ${selectedCategory === category ? 'bg-yellow-500' : 'bg-gray-700'} text-gray-800 font-bold rounded-full hover:bg-yellow-400 transition`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Products Carousel */}
      <div className="relative flex items-center justify-center mb-8">
        <button 
          onClick={prevProduct} 
          className="absolute left-0 text-3xl text-yellow-500 hover:text-yellow-400 transition p-4"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.slice(currentIndex, currentIndex + 3).map((product, index) => (
            <div 
              key={product.id} 
              className="bg-gray-700 p-4 rounded-lg shadow-lg hover:shadow-xl transition mb-4 flex flex-col items-center"
            >
              <img 
                src={product.image} 
                alt={product.title} 
                className="rounded-t-lg w-full h-48 object-cover cursor-pointer" 
                onClick={() => openModal(index)} 
              />
              <h3 className="text-lg font-bold mt-4">{product.title}</h3>
              <p className="text-yellow-400 font-medium">{product.discount}</p>
              <p className="mt-2 text-xl">{product.price}</p>
              <p className="text-gray-400 line-through">{product.originalPrice}</p>
              <button className="mt-4 w-full bg-yellow-500 text-gray-800 py-2 rounded hover:bg-yellow-400 transition">Add to Cart</button>
            </div>
          ))}
        </div>

        <button 
          onClick={nextProduct} 
          className="absolute right-0 text-3xl text-yellow-500 hover:text-yellow-400 transition p-4"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* See All Button */}
      <div className="mb-8">
        <button 
          onClick={openSeeAllModal} 
          className="px-4 py-2 bg-yellow-500 text-gray-800 font-bold rounded-full hover:bg-yellow-400 transition"
        >
          See All {selectedCategory}
        </button>
      </div>

      {/* Modal for Product Details */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-gray-900 rounded-lg p-4 relative max-w-lg mx-auto">
            <button onClick={closeModal} className="absolute top-2 right-2 text-white text-2xl">&times;</button>
            <img src={filteredProducts[currentIndex].image} alt={filteredProducts[currentIndex].title} className="rounded-lg w-full h-96 object-cover mb-4" />
            <h3 className="text-lg font-bold">{filteredProducts[currentIndex].title}</h3>
            <p className="text-yellow-400">{filteredProducts[currentIndex].discount}</p>
            <p className="mt-2 text-xl">{filteredProducts[currentIndex].price}</p>
            <p className="text-gray-400 line-through">{filteredProducts[currentIndex].originalPrice}</p>
          </div>
        </div>
      )}

      {/* See All Modal for All Products */}
      {isSeeAllModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-gray-900 rounded-lg p-4 relative max-w-4xl mx-auto overflow-y-auto max-h-96">
            <button onClick={closeSeeAllModal} className="absolute top-2 right-2 text-white text-2xl">&times;</button>
            <h2 className="text-2xl font-bold text-center mb-4">All {selectedCategory}</h2>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {products.filter(product => product.category === selectedCategory).map((product) => (
                <div 
                  key={product.id} 
                  className="bg-gray-700 p-4 rounded-lg shadow-lg hover:shadow-xl transition flex flex-col items-center"
                >
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="rounded-t-lg w-full h-48 object-cover cursor-pointer" 
                    onClick={() => openModal(product.id - 1)} 
                  />
                  <h3 className="text-lg font-bold mt-4">{product.title}</h3>
                  <p className="text-yellow-400 font-medium">{product.discount}</p>
                  <p className="mt-2 text-xl">{product.price}</p>
                  <p className="text-gray-400 line-through">{product.originalPrice}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PricingSection;
