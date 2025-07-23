import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-container">
      <nav>
        <div className="logo">SkyLabs</div>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Features</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>

      <section className="hero">
        <h1>Welcome to SkyLabs</h1>
        <p>Your launchpad to awesome web projects.</p>
        <a href="#explore" className="cta-button">Explore Now</a>
      </section>
    </div>
  );
};

export default LandingPage;
