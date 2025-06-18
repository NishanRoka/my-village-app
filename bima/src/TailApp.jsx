import React, { useState, useEffect } from 'react';
import { Newspaper, BookOpen, CalendarDays, Mountain, Users, MessageSquare, Menu, X } from 'lucide-react'; // Icons from lucide-react
import FeatureCard from './components/featureCard';
import data from './model/featureCard.json';


// Main App component
const App = () => {
  // State for a potential modal or message box (instead of alert)
  const [showMessage, setShowMessage] = useState(false);
  const [messageContent, setMessageContent] = useState('');
  // State for mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to display a custom message
  const displayCustomMessage = (message) => {
    setMessageContent(message);
    setShowMessage(true);
  };

  // Close message box
  const closeMessageBox = () => {
    setShowMessage(false);
    setMessageContent('');
  };


  //Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  // Smooth scroll function for navigation
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false); //Close menu after selection
    }
  };

  // Effect to prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen){
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    // Clean function
    return () =>{
      document.body.style.overflow = 'unset';
    }
  },[isMobileMenuOpen]);
  return (
    <div className="min-h-screen bg-gray-50 font-inter antialiased">
      {/* Message Box Modal */}
      {showMessage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl p-6 max-w-sm w-full text-center">
            <p className="text-lg font-semibold mb-4">{messageContent}</p>
            <button
              onClick={closeMessageBox}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Got It!
            </button>
          </div>
        </div>
      )}

      {/* New: Global Content Wrapper for consistent centering */}
      {/* This div will now dictate the overall max-width and centering for all main content */}
      <div className="container mx-auto max-w-screen-xl">
      {/* Header */}
      <header className="bg-white shadow-sm py-4 sticky top-0 z-30 px-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-800">
            <a href="#" className="hover:text-blue-600 transition-colors">
              Bima
            </a>
          </div>
          <nav className="hidden md:flex space-x-6">
            <button onClick={() => scrollToSection('features')} className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Features
            </button>
            <button onClick={() => scrollToSection('gallery')} className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Gallery
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Contact
            </button>
            <button
              onClick={() => displayCustomMessage('Sign Up functionality will be implemented soon!')}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Sign Up
            </button>
          </nav>
          {/* Mobile Menu Button (Hamburger/Close) */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-600 hover:text-blue-600 focus:outline-none"
              aria-label="Toggle mobile menu"
            >
             {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opcaity-50 z-40 md:hidden"
          onClick={toggleMobileMenu} // Close menu when clicking outside
        ></div>
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out
          ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className='flex justify-end p-4'>
          <button
            onClick={toggleMobileMenu}
            className='text-gray-600 hover:text-blue-600 focus:outline-none'
            aria-label='Close mobile menu'
          >
            <X className='w-7 h-7' /> 
          </button>
        </div>

        <nav className="flex flex-col p-4 space-y-6">
          <button onClick={() => scrollToSection('features')} className="text-gray-700 hover:text-blue-600 text-lg font-medium transition-colors text-left">
            Features
          </button>
          <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-blue-600 text-lg font-medium transition-colors text-left">
            Gallery
          </button>
          <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 text-lg font-medium transition-colors text-left">
            Contact
          </button>
          <button
            onClick={() => {
              displayCustomMessage('Sign Up functionality will be implemented soon!');
              setIsMobileMenuOpen(false); // Close menu after message
            }}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 text-left"
          >
            Sign Up
          </button>
        </nav>
      
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 md:py-32 overflow-hidden rounded-b-xl -mt-px">
        {/* Background Image/Overlay for visual appeal */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url('/images/dhaulagiri.jpg')` }}
          onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/1920x1080/4F46E5/FFFFFF?text=Village+Landscape'; }}
        ></div>
        {/* Removed container and max-w here, added px-4 for internal padding */}
        <div className="relative mx-auto px-4 text-center z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg">
            Your Village, Connected. Anywhere. Anytime.
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto opacity-90">
            Bridging continents and connecting hearts. Stay updated with news, events, and memories from your beloved village, wherever you are in the world.
          </p>
          <button
            onClick={() => displayCustomMessage('Join functionality will be implemented soon!')}
            className="px-8 py-4 bg-white text-blue-700 text-xl font-bold rounded-full shadow-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Join Our Community Today
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 bg-white px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            What You'll Find Here
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature Item 1: Village News */}
            <FeatureCard header={data[0].header} paragraph={data[0].paragraph} tag={data[0].tag} />

            {/* Feature Item 2: Community Articles */}
            <FeatureCard header={data[1].header} paragraph={data[1].paragraph} tag={data[1].tag} />

            {/* Feature Item 3: Events & Festivals */}
            <FeatureCard header={data[2].header} paragraph={data[2].paragraph} tag={data[2].tag} />

            {/* Feature Item 4: Natural Beauty Gallery */}
            <FeatureCard header={data[3].header} paragraph={data[3].paragraph} tag={data[3].tag} />
          </div>

      </section>

      {/* Call to Action Section */}
      <section className="py-16 md:py-24 bg-blue-600 text-white text-center px-4 rounded-xl shadow-lg my-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Reconnect with Your Roots?
          </h2>
          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto opacity-90">
            Join our growing community and bridge the distance to your beloved village. Share, connect, and celebrate your heritage.
          </p>
          <button
            onClick={() => displayCustomMessage('Sign Up functionality will be implemented soon!')}
            className="px-8 py-4 bg-white text-blue-700 text-xl font-bold rounded-full shadow-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Sign Up Now
          </button>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-800 text-gray-300 py-10">
        <div className="container max-w-screen-xl flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-6 md:mb-0">
            <h4 className="text-xl font-bold text-white mb-2">VillageConnect</h4>
            <p className="text-sm">&copy; 2025 All rights reserved.</p>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>
          <div className="mt-6 md:mt-0">
            <h4 className="text-lg font-semibold text-white mb-3">Connect With Us</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              {/* Placeholder social media icons */}
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white transition-colors">
                <Users className="w-6 h-6" /> {/* Using a generic user icon for social media placeholder */}
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white transition-colors">
                <MessageSquare className="w-6 h-6" /> {/* Using a generic message icon for social media placeholder */}
              </a>
              {/* Add more social media icons as needed */}
            </div>
          </div>
        </div>
      </footer>
    </div>
    </div>
  );
};

export default App;
