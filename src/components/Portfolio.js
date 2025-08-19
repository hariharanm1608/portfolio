/*
React Responsive Portfolio Template
- Single-file React component (default export)
- Built with Tailwind CSS classes (ensure Tailwind is configured in your project)
- Uses Framer Motion for subtle animations (install `framer-motion`)

How to use:
1. Paste this file into your React project under `src/components/Portfolio.jsx`.
2. Ensure Tailwind is configured (or map classes to your CSS). Install framer-motion: `npm i framer-motion`.
3. Replace placeholder data (name, bio, projects, links) with your own content.
4. For PDF export: open the page in browser and use print-to-PDF, or use a library like `html2pdf.js` or Puppeteer.

Notes:
- Keep images in `public/assets/` or import them and update project objects.
- Fonts: recommended Poppins or Inter. Add to index.html via Google Fonts.
*/

import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'CourtBook - Pickleball Booking App',
    role: 'Full Stack Developer',
    year: '2025',
    description: 'Built a responsive booking flow with React, Node.js and MySQL. Implemented slot selection grid and multi-step checkout.',
    tech: ['React', 'Node.js', 'MySQL', 'Framer Motion'],
    link: '#',
    image: '/assets/project1.png'
  },
  {
    id: 2,
    title: 'Performance Revamp - E-commerce',
    role: 'Frontend Engineer',
    year: '2024',
    description: 'Reduced initial load time by 45% by code-splitting and optimizing assets. Improved Lighthouse scores across the board.',
    tech: ['React', 'Webpack', 'Lighthouse'],
    link: '#',
    image: '/assets/project2.png'
  },
  {
    id: 3,
    title: 'Interactive Dashboard',
    role: 'Frontend Developer',
    year: '2023',
    description: 'Built complex, accessible charts and filters with a focus on UX and performance.',
    tech: ['React', 'Recharts', 'Tailwind'],
    link: '#',
    image: '/assets/project3.png'
  }
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900 antialiased">
      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* Header / Nav */}
        <header className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight">HARIHARAN M</h1>
            <p className="text-sm text-gray-600">Full Stack Developer · React.js Specialist</p>
          </div>
          <nav className="space-x-4 text-sm">
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#skills" className="hover:underline">Skills</a>
            <a href="#about" className="hover:underline">About</a>
            <a href="#contact" className="px-3 py-2 bg-green-600 text-white rounded-lg hover:opacity-90">Contact</a>
          </nav>
        </header>

        {/* Hero */}
        <motion.section
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid gap-8 md:grid-cols-2 items-center mb-12"
        >
          <div>
            <h2 className="text-4xl font-bold leading-tight">I build clean, high-performance web apps.</h2>
            <p className="mt-4 text-gray-700">Full-stack developer experienced in React.js, Node.js and SQL — I turn complex workflows into delightful user experiences that scale.</p>

            <div className="mt-6 flex gap-3">
              <a href="#projects" className="inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg">See my work</a>
              <a href="#contact" className="inline-flex items-center px-4 py-2 border border-gray-200 rounded-lg">Get in touch</a>
            </div>

            <div className="mt-6 text-sm text-gray-600">
              <strong>Core:</strong> React · Node.js · MySQL · Framer Motion
            </div>
          </div>

          <div className="relative">
            <div className="w-full h-64 bg-gradient-to-tr from-green-50 to-white rounded-2xl shadow-inner flex items-center justify-center">
              {/* Replace with professional photo or illustration */}
              <div className="text-center text-gray-400">[Professional Photo / Illustration]</div>
            </div>
          </div>
        </motion.section>

        {/* Projects */}
        <section id="projects" className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">Selected Projects</h3>

          <div className="grid gap-6 md:grid-cols-3">
            {projects.map(p => (
              <motion.a
                key={p.id}
                whileHover={{ scale: 1.02 }}
                className="group block rounded-2xl border border-gray-100 bg-white shadow-sm overflow-hidden"
                href={p.link}
              >
                <div className="h-40 bg-gray-100 flex items-center justify-center">
                  <img src={p.image} alt={p.title} className="object-contain h-full" />
                </div>
                <div className="p-4">
                  <div className="flex items-baseline justify-between">
                    <h4 className="text-lg font-medium">{p.title}</h4>
                    <span className="text-xs text-gray-500">{p.year}</span>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">{p.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tech.map(t => (
                      <span key={t} className="text-xs px-2 py-1 bg-gray-50 border rounded text-gray-600">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        {/* Mini Showcase */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Mini Showcase</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-3 bg-white border rounded-lg">Mini Project 1</div>
            <div className="p-3 bg-white border rounded-lg">Mini Project 2</div>
            <div className="p-3 bg-white border rounded-lg">Mini Project 3</div>
            <div className="p-3 bg-white border rounded-lg">Mini Project 4</div>
          </div>
        </section>

        {/* Skills & Tools */}
        <section id="skills" className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Skills & Tools</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 bg-white border rounded-lg">
              <h5 className="font-medium">Frontend</h5>
              <p className="mt-2 text-sm text-gray-600">React, HTML, CSS, JavaScript, Framer Motion</p>
            </div>
            <div className="p-4 bg-white border rounded-lg">
              <h5 className="font-medium">Backend</h5>
              <p className="mt-2 text-sm text-gray-600">Node.js, Express, REST APIs</p>
            </div>
            <div className="p-4 bg-white border rounded-lg">
              <h5 className="font-medium">Database</h5>
              <p className="mt-2 text-sm text-gray-600">MySQL, MongoDB</p>
            </div>
            <div className="p-4 bg-white border rounded-lg">
              <h5 className="font-medium">Tools</h5>
              <p className="mt-2 text-sm text-gray-600">Git, Figma, Postman, Jira</p>
            </div>
          </div>
        </section>

        {/* About / Story */}
        <section id="about" className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">About Me</h3>
          <div className="grid md:grid-cols-2 gap-6 items-start">
            <div className="bg-white border rounded-lg p-6">
              <p className="text-gray-700">I am Hariharan — a full-stack developer with 3+ years building web applications with React and Node.js. I enjoy solving product problems, improving performance, and shipping delightful user experiences. I have hands-on experience with building booking systems, multi-step flows, and interactive dashboards.</p>

              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li><strong>Location:</strong> Chennai, India</li>
                <li><strong>Availability:</strong> Open to opportunities</li>
                <li><strong>Languages:</strong> English, Tamil</li>
              </ul>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-white border rounded-lg">
                <h5 className="font-medium">Testimonials</h5>
                <blockquote className="mt-2 text-sm text-gray-600">"Delivered high-quality work on time and improved key performance metrics." — Manager</blockquote>
              </div>

              <div className="p-4 bg-white border rounded-lg">
                <h5 className="font-medium">Achievements</h5>
                <ul className="mt-2 text-sm text-gray-600 list-disc list-inside">
                  <li>Improved app performance by 45%</li>
                  <li>Led frontend for booking product used by 500+ users</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact / Footer */}
        <motion.footer
          id="contact"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white border rounded-2xl p-6"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h4 className="text-lg font-semibold">Let’s build something together</h4>
              <p className="text-sm text-gray-600">Email: <a href="mailto:you@example.com" className="text-green-600">you@example.com</a> · GitHub: <a href="#" className="text-green-600">github.com/yourhandle</a></p>
            </div>

            <div className="flex gap-3">
              <a href="#" className="px-4 py-2 bg-gray-900 text-white rounded-lg">Download PDF</a>
              <a href="#" className="px-4 py-2 border rounded-lg">LinkedIn</a>
            </div>
          </div>

          <p className="mt-4 text-xs text-gray-400">© {new Date().getFullYear()} Hariharan M — Built with React & Tailwind</p>
        </motion.footer>

      </div>
    </div>
  );
}
