import React from "react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Contact.css"; // optional, for styling

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <p>
        <a href="mailto:hariharanm1608@email.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope size={24} style={{ marginRight: "8px" }} />
          hariharanm1608@email.com
        </a>
      </p>
      <p>
        <a
          href="https://www.linkedin.com/in/your-linkedin-username"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={24} style={{ marginRight: "8px" }} />
          LinkedIn Profile
        </a>
      </p>
    </section>
  );
};

export default Contact;
