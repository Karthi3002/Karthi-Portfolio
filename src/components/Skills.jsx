import React from 'react';
import '../styles/Skills.css';
import {
  SiHtml5, SiCss3, SiJavascript, SiAngular, SiReact,
  SiFirebase, SiNodedotjs, SiGit, SiGithub, SiFlutter, SiWix, SiPython
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';

const skillsData = {
  frontend: [
    { name: "HTML5", icon: <SiHtml5 />, level: "90%" },
    { name: "CSS3", icon: <SiCss3 />, level: "85%" },
    { name: "JavaScript", icon: <SiJavascript />, level: "50%" },
    { name: "Angular", icon: <SiAngular />, level: "65%" },
    { name: "React", icon: <SiReact />, level: "60%" }
  ],
  backend: [
    { name: "Node.js", icon: <SiNodedotjs />, level: "40%" },
    { name: "Firebase", icon: <SiFirebase />, level: "65%" },
    { name: "Python", icon: <SiPython />, level: "70%" }
  ],
  tools: [
    { name: "Git", icon: <SiGit />, level: "80%" },
    { name: "GitHub", icon: <SiGithub />, level: "75%" },
    { name: "Flutter", icon: <SiFlutter />, level: "65%" },
    { name: "Wix", icon: <SiWix />, level: "80%" },
    { name: "VS Code", icon: <VscCode />, level: "85%" }
  ]
};

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title" data-aos="fade-up">
        <span className="title-glow">Skills</span>
      </h2>

      <p className="skills-intro" data-aos="fade-up" data-aos-delay="100">
        Here are some of the technologies, tools, and frameworks I’ve worked with while building frontend, backend projects.
      </p>

      <div className="skills-grid">
        {Object.entries(skillsData).map(([category, skills], index) => (
          <div
            className="skills-card"
            key={category}
            data-aos={index === 0 ? "zoom-in-right" : index === 1 ? "zoom-in-up" : "zoom-in-left"}
            data-aos-delay={index * 150}
          >
            <h3 className="skills-category-title">
              {category === 'frontend' ? 'Frontend' : category === 'backend' ? 'Backend' : 'Tools & Platforms'}
            </h3>

            <ul className="skills-list">
              {skills.map((skill, i) => (
                <li
                  key={skill.name}
                  className="skill-item"
                  data-aos="fade-up"
                  data-aos-delay={100 + i * 50}
                >
                  <span className="skill-icon">{skill.icon}</span>
                  <div className="skill-details">
                    <span className="skill-name">{skill.name}</span>
                    <div className="skill-bar">
                      <div className="skill-fill" style={{ width: skill.level }}></div>
                    </div>
                  </div>
                  <span className="skill-percent">{skill.level}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
