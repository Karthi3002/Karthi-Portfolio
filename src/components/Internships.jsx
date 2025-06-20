import React from 'react';
import '../styles/Internships.css';

function Internships() {
  return (
    <section id="internships" className="internships-section">
      <h2 className="section-title" data-aos="fade-down">
        <span className="title-glow">Internships</span>
      </h2>

      <p className="internships-intro" data-aos="fade-up" data-aos-delay="100">
        Practical experience through various internships helped me apply my skills in real-world projects and grow as a developer.
      </p>

      <div className="internships-timeline">
        <div className="internship-card" data-aos="flip-left" data-aos-delay="200">
          <h3>Junior Software Development Intern</h3>
          <span className="company">Wolvio Solutions</span>
          <span className="duration">Sep 2024 – May 2025 | 9 Months</span>
          <ul>
            <li>Worked in the Digital Transformation & AI (DT&AI) department.</li>
            <li>Involved in testing, website development, web design, and web analysis.</li>
            <li>Demonstrated strong teamwork, learning ability, and work ethic.</li>
          </ul>
        </div>

        <div className="internship-card" data-aos="flip-up" data-aos-delay="300">
          <h3>Angular Intern</h3>
          <span className="company">Infosys Springboard</span>
          <span className="duration">1 Month</span>
          <ul>
            <li>Built and modified Angular components and implemented routing.</li>
            <li>Gained hands-on experience with Angular’s real-time project cycle.</li>
          </ul>
        </div>

        <div className="internship-card" data-aos="flip-right" data-aos-delay="400">
          <h3>Frontend Development Intern</h3>
          <span className="company">Wolvio Solutions</span>
          <span className="duration">15 Days</span>
          <ul>
            <li>Created responsive frontend components using HTML, CSS, and JavaScript.</li>
            <li>Explored AI integration into UI/UX for enhanced user experience.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Internships;
