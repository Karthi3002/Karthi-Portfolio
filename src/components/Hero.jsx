import React from 'react';
import { ReactTyped } from 'react-typed';
import { FaLinkedin, FaGithub, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import '../styles/Hero.css';
import profileImg from '../assets/photo.jpg';
import resumePdf from '../assets/Karthi__Resume.pdf';

function Hero() {
  return (
    <section id = "hero" className="hero">
      {/* Background Blobs */}
      <div className="blob blob1"></div>
      <div className="blob blob2"></div>

      <div className="hero-left" data-aos="fade-right">
        <h1>Hi, I'm <span className="highlight">Karthi S</span></h1>
        <ReactTyped
          className="typing"
          strings={['Frontend Developer', 'Angular Enthusiast', 'UI/UX Explorer']}
          typeSpeed={80}
          backSpeed={40}
          loop
        />
        <p>
          Passionate about building responsive web applications with great user experience. 
          Skilled in HTML, CSS, JavaScript, Angular and React.
        </p>
        <div className="hero-buttons">
          <a href="#contact" className="hero-btn">Contact</a>
          <a href={resumePdf} download className="hero-btn-outline">Download Resume</a>
        </div>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/karthi-senthilnathan-8a691a244/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://github.com/Karthi3002" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://wa.me/919944270322" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
          <a href="https://www.instagram.com/karthi_4454/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </div>
      </div>

      <div className="hero-right" data-aos="fade-left">
        <img src={profileImg} alt="Karthi Profile" className="profile-img" />
      </div>

      <div className="hero-glow-bar"></div>

    </section>
  );
}

export default Hero;
