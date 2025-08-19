import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <motion.div
        className="max-w-5xl mx-auto px-6 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-lg text-gray-700">
          I am a passionate developer skilled in HTML, CSS, JavaScript, React, and Node.js.
          I enjoy building modern, responsive, and user-friendly websites.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
