import React from 'react';
import '../styles/Certification.css';
import htmlCert from '../assets/html-cert.png';
import cssCert from '../assets/css-cert.png';
import jsCert from '../assets/js-cert.png';
import pythonCert from '../assets/python-cert.png';
import angularcert from '../assets/angular-intern.png';

const certifications = [
  {
    title: "Angular Intern",
    provider: "Infosys Springboard",
    image: angularcert
  },
  {
    title: "HTML5",
    provider: "Infosys Springboard",
    image: htmlCert
  },
  {
    title: "CSS3",
    provider: "Infosys Springboard",
    image: cssCert
  },
  {
    title: "JavaScript",
    provider: "Infosys Springboard",
    image: jsCert
  },
  {
    title: "Python Programming",
    provider: "Udemy",
    image: pythonCert
  }
];

function Certifications() {
  return (
    <section id="certifications" className="cert-section">
      <h2 className="section-title" data-aos="fade-up">
        <span className="title-glow">Certifications</span>
      </h2>

      <p className="cert-intro" data-aos="fade-up" data-aos-delay="100">
        A selection of certifications earned through hands-on practice and guided learning.
      </p>

      <div className="cert-grid">
        {certifications.map((cert, index) => (
          <div
            className="cert-card"
            key={index}
            data-aos="flip-down"
            data-aos-delay={index * 150}
          >
            <div className="card-inner">
              <div className="card-front">
                <img src={cert.image} alt={cert.title} />
              </div>
              <div className="card-back">
                <h3>{cert.title}</h3>
                <p>{cert.provider}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
