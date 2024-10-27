import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/homepage/HomePage';
import AboutUs from './components/aboutus/AboutUs';
import Features from './components/features/Features';
import IndustriesSection from './components/industries/IndustriesSection';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import PricingSection from './components/pricing/PricingSection';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/features" element={<Features />} />
            <Route path="/industries" element={<IndustriesSection />} />
            <Route path="/pricing" element={<PricingSection />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
