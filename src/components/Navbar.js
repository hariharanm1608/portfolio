import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <motion.nav
      className="bg-gray-900 text-white fixed w-full top-0 shadow-lg"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold">MyPortfolio</h1>
        <ul className="flex gap-6">
          <li>
          <Link to="home" smooth={true} duration={500} className="cursor-pointer hover:text-yellow-400">
    Home </Link>
</li>
          <li><a href="#about" className="hover:text-yellow-400">About</a></li>
          <li><a href="#projects" className="hover:text-yellow-400">Projects</a></li>
          <li><a href="#skills" className="hover:text-yellow-400">Skills</a></li>
          <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
