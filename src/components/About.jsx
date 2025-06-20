import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title" data-aos="fade-up">
        <span className="title-glow">About</span> Me
      </h2>

      <div className="about-content">
        <div className="about-text" data-aos="fade-right">
              <p>
                I’m <span className="highlight">Karthi</span>, an aspiring <strong>Frontend Developer</strong> with a solid foundation in <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, and <strong>Angular</strong>, along with experience in <strong>React</strong>.
              </p><br></br>
              <p>
                I’m passionate about building responsive and user-friendly web interfaces that combine clean code with engaging design. I love turning ideas into real-world solutions through intuitive and performant UIs.
              </p><br></br>
              <p>
                I’m always eager to learn and explore the latest tools and trends in web development. Currently, I’m <span className="highlight">actively seeking job opportunities</span> where I can grow, collaborate, and contribute to impactful projects.
              </p>
        </div>

        <div className="about-shape-container" data-aos="fade-left">
          <div className="about-blob">
            <img src={require('../assets/about.png')} alt="Dev Working" className="blob-image" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
