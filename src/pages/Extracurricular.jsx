import React, { useEffect } from "react";
import "./Extracurricular.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Extracurricular = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const activities = [
    {
      role: "NSS Design Core Member",
      org: "National Service Scheme (NSS)",
      description: "Designed creatives, posters, and event materials as part of the NSS core team.",
      year: "2024 - Present",
    },
    {
      role: "Mess Secretary",
      org: "IIIT Sri City",
      description: "Coordinated between students and administration to improve mess facilities.",
      year: "2025",
    },
    {
      role: "Fitness Enthusiast",
      org: "Personal",
      description: "Regularly train in the gym, maintaining discipline and consistency.",
      year: "Ongoing",
    },
    {
      role: "Basketball (Hobby)",
      org: "Personal Interest",
      description: "Play basketball recreationally for fun and fitness.",
      year: "Ongoing",
    },
  ];

  return (
    <section className="extracurricular-section" id="extracurricular">
      <h2 className="section-title" data-aos="fade-down">Extracurricular & Volunteering</h2>

      <div className="extracurricular-wrapper">
        {activities.map((item, index) => (
          <div className="extracurricular-card" key={index} data-aos="fade-up">
            <h3>{item.role} {item.org !== "Personal Interest" && `@ ${item.org}`}</h3>
            <p>{item.description}</p>
            <span className="year">{item.year}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Extracurricular;
