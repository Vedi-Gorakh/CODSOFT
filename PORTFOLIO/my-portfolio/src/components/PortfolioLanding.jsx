import React from 'react';
import './PortfolioLanding.css';

const PortfolioLanding = () => {
  return (
    <div className="portfolio-container">
      <div className="content-card">
        <h1>Hi, I'm <span>VEDI</span></h1>
        <h2>Full-Stack Developer</h2>
        <p>I build modern, responsive web apps using React, Node.js, and MongoDB.</p>

        <div className="btn-group">
          <a href="#projects" className="btn"> View Projects</a>
          <a href="#contact" className="btn outline"> Contact Me</a>
        </div>

        <div className="social-icons">
          <a href="https://github.com/" target="_blank" rel="noreferrer"> GitHub</a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer"> LinkedIn</a>
          <a href="mailto:youremail@example.com"> Email</a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioLanding;
