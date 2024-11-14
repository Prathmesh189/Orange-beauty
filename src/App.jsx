import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/homepage/HomePage';
import AboutUs from './pages/AboutUs';
import Features from './pages/Features';
import ContactUs from './pages/ContactUs';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import FixedIcons from './components/homepage/FixedIcons';

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
            <Route path="/contactus" element={<ContactUs />} />
            
          </Routes>
        </main>
        <Footer />
        <FixedIcons />
      </div>
    </Router>
  );
}

export default App;
