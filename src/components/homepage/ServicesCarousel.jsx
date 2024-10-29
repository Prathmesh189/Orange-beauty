import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import service1 from '../../images/service1.jpg';
import service2 from '../../images/service2.jpeg';
import service3 from '../../images/service3.jpg';
import service4 from '../../images/service4.jpeg';

const carouselSettings = {
  dots: true,
  infinite: true,
  speed: 400,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const ServicesCarousel = () => (
  <section className="services-carousel py-12 text-center bg-gradient-to-b from-orange-50 to-white">
    <h2 className="text-5xl font-bold text-center mb-6 text-orange-700"> Our Most Popular Services! </h2>
    <Slider {...carouselSettings}>
      {[
        { image: service1, title: "Luxurious Hair Treatments" },
        { image: service2, title: "Relaxing Spa Sessions" },
        { image: service3, title: "Glamorous Makeovers" },
        { image: service4, title: "Expert Nail Art" }
      ].map((service, index) => (
        <div key={index} className="relative p-4">
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-64 object-cover rounded-lg" 
          />
          <br></br>
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-0 text-black font-bold text-lg p-2 rounded-b-sm">
            {service.title}
          </div>
        </div>
      ))}
    </Slider>
  </section>
);

export default ServicesCarousel;
