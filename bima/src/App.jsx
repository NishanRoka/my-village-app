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
    <div className="app-container">
      {/* Message Box Modal */}
      {showMessage && (
        <div className="message-modal-overlay">
          <div className="message-modal-content">
            <p className="message-text">{messageContent}</p>
            <button
              onClick={closeMessageBox}
              className="btn btn-primary"
            >
              Got It!
            </button>
          </div>
        </div>
      )}

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={toggleMobileMenu}></div>
      )}

      {/* Mobile Menu Panel */}
      <div className={`mobile-menu-panel ${isMobileMenuOpen ? 'is-open' : ''}`}>
        <div className="mobile-menu-header">
          <button onClick={toggleMobileMenu} className="mobile-menu-close-btn" aria-label="Close mobile menu">
            <X className="icon" />
          </button>
        </div>
        <nav className="mobile-menu-nav">
          <button onClick={() => scrollToSection('features')} className="mobile-nav-item">
            Features
          </button>
          <button onClick={() => scrollToSection('gallery')} className="mobile-nav-item">
            Gallery
          </button>
          <button onClick={() => scrollToSection('contact')} className="mobile-nav-item">
            Contact
          </button>
          <button
            onClick={() => {
              displayCustomMessage('Sign Up functionality will be implemented soon!');
              setIsMobileMenuOpen(false);
            }}
            className="btn btn-primary mobile-nav-item mobile-signup-btn"
          >
            Sign Up
          </button>
        </nav>
      </div>
          

      {/* Global Content Wrapper for consistent centering */}
      <div className="site-wrapper">
        {/* Header */}
        <header className="main-header">
          <div className="header-content container">
            <div className="logo">
              <a href="#" className="logo-link">
                BIMA
              </a>
            </div>
            <nav className="main-nav">
              <button onClick={() => scrollToSection('features')} className="nav-item">
                Features
              </button>
              <button onClick={() => scrollToSection('gallery')} className="nav-item">
                Gallery
              </button>
              <button onClick={() => scrollToSection('contact')} className="nav-item">
                Contact
              </button>
              <button
                onClick={() => displayCustomMessage('Sign Up functionality will be implemented soon!')}
                className="btn btn-primary"
              >
                Sign Up
              </button>
            </nav>
            {/* Mobile Menu Button (Hamburger/Close) */}
            <div className="mobile-menu-toggle">
              <button
                onClick={toggleMobileMenu}
                className="mobile-menu-btn"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X className="icon" /> : <Menu className="icon" />}
              </button>
            </div>
          </div>
        </header>
     

      {/* Hero Section */}
      <section className="hero-section">
          <div
            className="hero-background-overlay"
            style={{ backgroundImage: `url('/images/dhaulagiri.jpg')` }}
            onError={(e) => { e.target.onerror = null; e.target.style.backgroundColor = '#4F46E5'; e.target.style.backgroundImage = 'none'; }}
          ></div>
          <div className="hero-content container">
            <h1 className="hero-title">
              Your Village, Connected. Anywhere. Anytime.
            </h1>
            <p className="hero-subtitle">
              Bridging continents and connecting hearts: Stay updated with news, events, and memories from your beloved village, wherever you are in the world.
            </p>
            <button
              onClick={() => displayCustomMessage('Join functionality will be implemented soon!')}
              className="btn btn-hero"
            >
              Join Our Community Today
            </button>
          </div>
        </section>

      {/* Features Section */}
      <section id="features" className="features-section">
          <h2 className="section-title">
            What You'll Find Here
          </h2>
          <div className="feature-grid">
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
      <section className="cta-section">
          <div className="cta-content container">
            <h2 className="section-title cta-title">
              Ready to Reconnect with Your Roots?
            </h2>
            <p className="cta-subtitle">
              Join our growing community and bridge the distance to your beloved village. Share, connect, and celebrate your heritage.
            </p>
            <button
              onClick={() => displayCustomMessage('Sign Up functionality will be implemented soon!')}
              className="btn btn-hero"
            >
              Sign Up Now
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="main-footer">
          <div className="footer-content container">
            <div className="footer-brand">
              <h4 className="footer-title">BIMA</h4>
              <p className="footer-copyright">&copy; 2025 All rights reserved.</p>
            </div>
            <div className="footer-links-group">
              <ul className="footer-links-list">
                <li><a href="#" className="footer-link">About Us</a></li>
                <li><a href="#" className="footer-link">Privacy Policy</a></li>
              </ul>
              <ul className="footer-links-list">
                <li><a href="#" className="footer-link">Terms of Service</a></li>
                <li><a href="#" className="footer-link">Support</a></li>
              </ul>
            </div>
            <div className="footer-social">
              <h4 className="footer-social-title">Connect With Us</h4>
              <div className="social-icons-wrapper">
                <a href="#" aria-label="Facebook" className="social-icon-link">
                  <Users className="icon" />
                </a>
                <a href="#" aria-label="Twitter" className="social-icon-link">
                  <MessageSquare className="icon" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div> {/* End of Global Content Wrapper */}
    </div>
  );
};

export default App;
