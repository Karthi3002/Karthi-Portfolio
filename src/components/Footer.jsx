import React from 'react';
import '../styles/Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram, FaWhatsapp } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand" data-aos="fade-up" data-aos-delay="100">
          <h2 className="footer-logo">Karthi</h2>
          <p>Crafting clean code and creative interfaces with passion and precision.</p>
        </div>

        <div className="footer-links" data-aos="fade-up" data-aos-delay="200">
          <h4>Main Menu</h4>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-links" data-aos="fade-up" data-aos-delay="300">
          <h4>Explore</h4>
          <ul>
            <li><a href="#education">Education</a></li>
            <li><a href="#internships">Internships</a></li>
            <li><a href="#certifications">Certifications</a></li>
          </ul>
        </div>

        <div className="footer-contact" data-aos="fade-up" data-aos-delay="400">
          <h4>Contact</h4>
          <p>
            <FaEnvelope />
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=karthibtech523@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="email-link"
            >
              karthibtech523@gmail.com
            </a>
          </p>
          <p><strong>📍</strong>Kalipatti, Namakkal, Tamil Nadu, India</p>

          <div className="footer-socials">
            <a href="https://github.com/Karthi3002" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/karthi-senthilnathan-8a691a244/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="https://www.instagram.com/karthi_4454/" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://wa.me/919944270322" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom" data-aos="fade-up" data-aos-delay="500">
        <div className="footer-line"></div>
        <p>&copy; {new Date().getFullYear()} Karthi. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
