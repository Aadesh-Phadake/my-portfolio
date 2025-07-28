import React, { useState } from 'react';
import './Projects.css';

const projectData = [
    {
    title: "Travelnest",
    description: "A travel planner and hotel search app using Node + EJS.",
    tech: ["Node", "EJS", "MongoDB"],
    link: "https://github.com/Aadesh-Phadake/ffsd-project/"
  },
  {
    title: "Green Gauge",
    description: "An ecological footprint calculator built with MERN stack.",
    tech: ["EJS", "Node", "MongoDB"],
    link: "https://github.com/Aadesh-Phadake/PrasunethonProject"
  },
  {
    title: "React To-Do App",
    description: "A clean and responsive To-Do App with CRUD features.",
    tech: ["React"],
    link: "https://github.com/Aadesh-Phadake/Simple-React-To-Do-App"
  },
  {
    title: "Syncode",
    description: "A collaborative code editor with real-time sync using React and Socket.io.",
    tech:["React"],
    link: "https://github.com/Aadesh-Phadake/realtime-editor"
  }
];
const allTechs = ["All", "React", "Node", "MongoDB", "EJS"];

const Projects = () => {
  const [selectedTech, setSelectedTech] = useState("All");

  const filteredProjects = selectedTech === "All"
    ? projectData
    : projectData.filter(p => p.tech.includes(selectedTech));

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projects</h2>

      <div className="filter-buttons">
        {allTechs.map((tech, index) => (
          <button
            key={index}
            className={selectedTech === tech ? "active" : ""}
            onClick={() => setSelectedTech(tech)}
          >
            {tech}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="card-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tags">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tag">{tech}</span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noreferrer">View Project →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
