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
    duration: 1000,       // Animation duration
    once: true,           // Animate only once when scrolling down
    offset: 100           // Offset from the original trigger point
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
