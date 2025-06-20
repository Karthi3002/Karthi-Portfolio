import React from 'react';
import '../styles/Projects.css';
import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.jpg';
import project3 from '../assets/project3.jpg';
import project4 from '../assets/project5.jpg';

const projects = [
  {
    title: "Pest Detection & Solution System",
    image: project1,
    description:
      "An AI-powered system to detect crop pests using image recognition and suggest eco-friendly treatment solutions.",
    tech: ["Python", "TensorFlow", "Streamlit"],
    link: "https://pest-detection-and-solution.onrender.com/"
  },
  {
    title: "Farmer-Consumer App Framework",
    image: project2,
    description:
      "A Flutter-based mobile app that connects farmers directly with customers for fair pricing, transparent trade, new features and payment gateway.",
    tech: ["Flutter", "Firebase", "Cloud Firestore"],
    link: "https://project1-7a7dd.web.app/"
  },
  {
    title: "Responsive College Website",
    image: project3,
    description:
      "A fully responsive and animated modern college website with integrated blog, course offered, and college facilities.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: " https://karthi3002.github.io/SRM-Valliammai-Engineering/"
  },
  {
    title: "Online Auction Bazaar",
    image: project4,
    description:
      "An Angular-based web platform for live product auctions, featuring real-time bidding, role-based dashboards.",
    tech: ["Angular", "Firebase", "Firestore", "JavaScript"],
    link: "https://auction-bazar-db.web.app/login"
  }
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title" data-aos="fade-up">
        <span className="title-glow">Projects</span>
      </h2>

      <p className="projects-intro" data-aos="fade-up" data-aos-delay="100">
        A curated selection of my favorite projects built with modern technologies. Each reflects my growth and passion for frontend development.
      </p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index}
            data-aos="zoom-in-up"
            data-aos-delay={index * 200}>
          <div
            className="project-card"
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-tags">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              <a href={project.link} className="project-btn">View Project</a>
            </div>
          </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
