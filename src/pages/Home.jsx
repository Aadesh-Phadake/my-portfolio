import './Home.css';
import profileImg from '../assets/profile.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="home" className="home-section" >
      <div className="home-wrapper">
        <div className="home-text" data-aos="fade-right">
          <h1>Hi, I'm <span className="highlight">Aadesh Phadake</span></h1>
          <h2>Full Stack Web Developer</h2>
          <p>
            I'm a Computer Science student at IIIT Sri City, passionate about building dynamic,
            scalable web apps using the MERN stack. I love solving real-world problems with clean,
            maintainable code.
          </p>

          <div className="home-buttons">
            <a href="/resume.pdf" download className="btn">Download Resume</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
          </div>

          <div className="social-icons">
            <a href="https://github.com/Aadesh-Phadake" target="_blank" rel="noreferrer">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg" alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/aadesh-phadake-96554123b/" target="_blank" rel="noreferrer">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg" alt="LinkedIn" />
            </a>
            <a href="mailto:aadeshashok.p23@iiits.in">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/gmail.svg" alt="Gmail" />
            </a>
          </div>
        </div>

        <div className="home-image" data-aos="fade-left">
          <img src={profileImg} alt="Aadesh Phadake" />
        </div>
      </div>
    </section>
  );
};

export default Home;
