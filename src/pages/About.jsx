import React, { useEffect } from 'react';
import './About.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const skillGroups = {
    "Languages": ["C++", "Java"],
    "Frameworks / Libraries": ["React.js", "Node.js", "Express", "EJS", "Tailwind CSS"],
    "Databases": ["MongoDB", "MySQL"],
    "Tools & Platforms": ["Git", "GitHub", "VS Code", "Hoppscotch"]
  };

  const highlights = [
    "🔧 Building full-stack MERN applications",
    "⚙️ Secure authentication, APIs & REST",
    "📦 Responsive UI/UX using React & Tailwind",
    "🧠 Strong base in DSA, DBMS, OOPs",
    "🏆 Hackathons, team projects, and optimization"
  ];

  return (
    <section className="about-section" id="about">
      <h2 className="section-title" data-aos="fade-down">About Me</h2>

      <div className="about-wrapper">
        <div className="about-left" data-aos="fade-right">
          <p className="intro-line">Passionate Developer | Problem Solver | Tech Explorer</p>

          <p>
            Hey! I'm <strong>Aadesh Phadake</strong>, a Computer Science student at <strong>IIIT Sri City</strong>.
            I build scalable, full-stack applications using the MERN stack and beyond. I love solving real-world problems through clean code and tech innovation.
          </p>
        
          <p><em>Currently pursuing B.Tech in Computer Science & Engineering at <strong>IIIT Sri City</strong> (2023–2027)</em>.</p>

          <p>
            I’ve built several projects like <strong>Green Gauge</strong>, <strong>Travelnest</strong>, and a <strong>React To-Do App</strong>.
            I’m also exploring DevOps, CI/CD, and performance optimization.
          </p>

          <div className="highlights">
            {highlights.map((point, idx) => (
              <div key={idx} className="highlight-point">{point}</div>
            ))}
          </div>
        </div>

        <div className="about-right" data-aos="fade-left">
          <h3>Tech Stack & Tools</h3>
          <div className="grouped-skills">
            {Object.entries(skillGroups).map(([category, skills], i) => (
              <div key={i} className="skill-group-card">
                <h4>{category}</h4>
                <div className="badge-group">
                  {skills.map((skill, index) => (
                    <span className="skill-badge" key={index}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
