import React from 'react';
import './home.css'; // Assuming you have a CSS file for styling

const HomePage = () => {
  return (
    <div className="home-container">
      {/* Header */}
      <header className="header">
        <div className="logo">Skill Sync</div>
        <nav className="nav">
          <a href="#home" className="nav-item">Profile</a>
          <a href="#features" className="nav-item">Dashboard</a>
          <a href="#contact" className="nav-item">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Skill Sync</h1>
          <p className="hero-subtitle">We help to find your perfect match </p>
          <a href="#features" className="cta-button">Getting Started</a>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="features">
        <div className="feature-card">
          <h3 className="feature-title">Web Design</h3>
          <p className="feature-description">We create stunning, responsive websites tailored to your needs.</p>
        </div>
        <div className="feature-card">
          <h3 className="feature-title">App Development</h3>
          <p className="feature-description">Build innovative mobile apps for a seamless user experience.</p>
        </div>
        <div className="feature-card">
          <h3 className="feature-title">SEO Optimization</h3>
          <p className="feature-description">Increase your website's visibility with expert SEO strategies.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" id="contact">
        <p className="footer-text">Contact us at <a href="mailto:contact@mybrand.com">contact@mybrand.com</a></p>
        <p className="footer-text">&copy; 2025 MyBrand. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
