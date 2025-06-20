import React, { useEffect, useState } from 'react';
import '../styles/Header.css';

function Header() {
  const [activeSection, setActiveSection] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    const sections = document.querySelectorAll('section[id]');
    let currentSection = '';

    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 140 && rect.bottom >= 140) {
        currentSection = section.id;
      }
    });

    setActiveSection(currentSection);
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Initial check on load

  return () => window.removeEventListener('scroll', handleScroll);
}, []);



  useEffect(() => {
  const handleClickOutside = (event) => {
    const dropdown = document.querySelector('.dropdown');
    if (dropdown && !dropdown.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  document.addEventListener('click', handleClickOutside);
  return () => {
    document.removeEventListener('click', handleClickOutside);
  };
}, []);


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) setDropdownOpen(false); // Close dropdown if menu opens
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  return (
    <header className="header" data-aos ="fade-down">
      <div className="logo">PORTFOLIO<span className="dot">.</span></div>

      <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
        <a href="#hero" className={activeSection === 'hero' ? 'active' : ''} onClick={closeMenu}>Home</a>
        <a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={closeMenu}>About</a>
        <a href="#skills" className={activeSection === 'skills' ? 'active' : ''} onClick={closeMenu}>Skills</a>
        <a href="#projects" className={activeSection === 'projects' ? 'active' : ''} onClick={closeMenu}>Projects</a>
        <a href="#education" className={activeSection === 'education' ? 'active' : ''} onClick={closeMenu}>Education</a>
        <a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={closeMenu}>Contact</a>

        <div className="dropdown">
          <span className="dropdown-toggle" onClick={toggleDropdown}>Other ▾</span>
          <div className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
            <a href="#certifications" className={activeSection === 'certifications' ? 'active' : ''} onClick={closeMenu}>Certifications</a>
            <a href="#internships" className={activeSection === 'internships' ? 'active' : ''} onClick={closeMenu}>Internships</a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
