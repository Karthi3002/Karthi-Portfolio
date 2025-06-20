import React from 'react';
import '../styles/Education.css';

function Education() {
  return (
    <section id="education" className="education-section">
      <h2 className="section-title" data-aos="fade-up">
        <span className="title-glow">Education</span>
      </h2>

      <p className="education-intro" data-aos="fade-up" data-aos-delay="100">
        My academic journey has helped build a strong foundation in programming, data analysis, and modern development practices.
      </p>

      <div className="timeline">
        <div className="timeline-item" data-aos="fade-right" data-aos-delay="200">
          <div className="timeline-dot" data-aos="fade-up" data-aos-delay="200"/>
          <div className="timeline-content">
            <h3>B.Tech – AI & Data Science</h3>
            <span className="timeline-place">SRM Valliammai Engineering College,</span>
            <span className="timeline-place">Potheri, Chengalpattu</span><br></br>
            <span className="timeline-place">CGPA : 7.9</span>
            <span className="timeline-year">2021 - 2025</span>
            <p>Relevant coursework: Machine Learning, Deep Learning, Web Development, Cloud Computing, and Big Data Analytics.</p>
          </div>
        </div>

        <div className="timeline-item" data-aos="fade-right" data-aos-delay="300">
          <div className="timeline-dot" data-aos="fade-up" data-aos-delay="300"/>
          <div className="timeline-content">
            <h3>Higher Secondary</h3>
            <span className="timeline-place">Mahendra Matric HR SEC School,</span>
            <span className="timeline-place">Kalipatti, Namakkal dt, TN</span><br></br>
            <span className="timeline-place">Percentage : 89.6%</span>
            <span className="timeline-year">2019 - 2021</span>
            <p>Completed my HSC with a focus in Mathematics and Computer Science.</p>
          </div>
        </div>

        <div className="timeline-item" data-aos="fade-right" data-aos-delay="400">
          <div className="timeline-dot" data-aos="fade-up" data-aos-delay="400"/>
          <div className="timeline-content">
            <h3>SSLC</h3>
            <span className="timeline-place">Mahendra Matric HR SEC School,</span>
            <span className="timeline-place">Kalipatti, Namakkal dt, TN</span><br></br>
            <span className="timeline-place">Percentage : 76%</span>
            <span className="timeline-year">2018 - 2019</span>
            <p>Completed my 10th standard with a good academic performance.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
