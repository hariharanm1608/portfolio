import React from 'react';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';
import './Contact.css'; // Importing CSS

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <div className="contact-card">
        {/* Email */}
        <a href="mailto:hariharanm1608@email.com" className="contact-link">
          <FaEnvelope className="contact-icon email" />
          hariharanm1608@email.com
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/your-linkedin-username"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <FaLinkedin className="contact-icon linkedin" />
          LinkedIn Profile
        </a>
      </div>
    </section>
  );
};

export default Contact;
