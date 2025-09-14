import React, { useEffect } from 'react';
import './Achievements.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Achievements = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const achievements = [
    {
      title: "Prasunethon Hackathon Participant",
      desc: "Built 'Green Gauge' – an ecological footprint calculator to promote sustainability.",
      tags: ["Hackathon", "Teamwork", "Innovation"]
    },
    {
      title: "College Fest Website Contribution",
      desc: "Contributed to the official cultural fest website of IIIT Sri City.",
      tags: ["Web Dev", "Collaboration", "Creativity"]
    },
    {
      title: "Problem Solving",
      desc: "Solved 200+ Data Structures & Algorithms problems on LeetCode and other platforms.",
      tags: ["DSA", "Consistency", "Logic"]
    }
  ];

  return (
    <section className="achievements-section" id="achievements">
      <h2 className="section-title" data-aos="fade-down">Achievements & Awards</h2>

      <div className="achievements-grid">
        {achievements.map((item, index) => (
          <div className="achievement-card" key={index} data-aos="zoom-in">
            <div className="card-content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <div className="tags">
                {item.tags.map((tag, i) => (
                  <span className="tag" key={i}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
