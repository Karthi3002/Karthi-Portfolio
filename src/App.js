import React, { useEffect } from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Internships from './components/Internships';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certification';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
useEffect(() => {
  AOS.init({
    once: true,           // Only animate once
    duration: 700,        // Reduce duration
    offset: 100,          // Start animation earlier
    easing: 'ease-out-cubic',
    throttleDelay: 99,    // Reduce CPU hit
    debounceDelay: 50
  });
}, []);
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Education />
      <Internships />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
      {/* Other sections will be added here */}
    </div>
  );
}

export default App;
