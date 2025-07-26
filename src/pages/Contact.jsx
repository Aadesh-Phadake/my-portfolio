import React, { useEffect } from 'react';
import './Contact.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="contact-section" id="contact">
      <h2 className="section-title" data-aos="fade-down">Contact Me</h2>

      <div className="contact-wrapper">
        <form
          className="contact-form"
          data-aos="fade-right"
          action="https://formspree.io/f/xeozgnyw" // Replace with your own if needed
          method="POST"
        >
          <label>
            Name
            <input type="text" name="name" required placeholder="Your Name" />
          </label>

          <label>
            Email
            <input type="email" name="email" required placeholder="you@example.com" />
          </label>

          <label>
            Message
            <textarea name="message" rows="5" required placeholder="Type your message here..." />
          </label>

          <button type="submit">Send Message</button>
        </form>

        <div className="contact-socials" data-aos="fade-left">
          <h3>Connect with me</h3>
          <div className="social-icons">
            <a href="https://github.com/Aadesh-Phadake" target="_blank" rel="noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/aadesh-phadake-96554123b/" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/aadesh_phadake/" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://x.com/aadesh_phadake" target="_blank" rel="noreferrer">
              <i className="fab fa-x-twitter"></i>
            </a>
            <a href="mailto:aadeshashok.p23@iiits.in">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
