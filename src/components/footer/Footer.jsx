import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Company Info */}
          <div className="w-full sm:w-1/2 lg:w-1/3 mb-8">
            <h4 className="text-lg font-bold mb-4">Company</h4>
            <ul>
              <li><a href="/aboutus" className="hover:text-teal-400">About us</a></li>
              <li><a href="#terms" className="hover:text-teal-400">Terms & conditions</a></li>
              <li><a href="#privacy" className="hover:text-teal-400">Privacy policy</a></li>
              <li><a href="#anti-discrimination" className="hover:text-teal-400">Anti-discrimination policy</a></li>
              <li><a href="#impact" className="hover:text-teal-400">UC impact</a></li>
            </ul>
          </div>

          {/* For Customers */}
          <div className="w-full sm:w-1/2 lg:w-1/3 mb-8">
            <h4 className="text-lg font-bold mb-4">For customers</h4>
            <ul>
              <li><a href="#reviews" className="hover:text-teal-400">UC reviews</a></li>
              <li><a href="#categories" className="hover:text-teal-400">Categories near you</a></li>
              <li><a href="#blog" className="hover:text-teal-400">Blog</a></li>
              <li><a href="/contactus" className="hover:text-teal-400">Contact us</a></li>
            </ul>
          </div>

          {/* Social Links & App Links */}
          <div className="w-full lg:w-1/3 mb-8">
            <h4 className="text-lg font-bold mb-4">Social links</h4>
            <ul className="flex space-x-4 mb-4">
              <li><a href="https://x.com/?mx=2" className="hover:text-teal-400"><i className="fab fa-twitter text-xl"></i></a></li>
              <li><a href="https://www.facebook.com/" className="hover:text-teal-400"><i className="fab fa-facebook-f text-xl"></i></a></li>
              <li><a href="https://www.instagram.com/" className="hover:text-teal-400"><i className="fab fa-instagram text-xl"></i></a></li>
              <li><a href="https://www.linkedin.com/feed/" className="hover:text-teal-400"><i className="fab fa-linkedin-in text-xl"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 text-center py-4 mt-8">
        <p className="text-sm">&copy; {new Date().getFullYear()} Powered by Sync solution</p>
      </div>
    </footer>
  );
};

export default Footer;
