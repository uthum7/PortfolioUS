import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import profile from '../assets/profile.png'; // Ensure you have a profile image in your assets

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 dark:from-gray-800 dark:via-gray-900 dark:to-black py-20 md:py-32">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        {/* Left Column: Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 dark:text-white leading-tight">
            <span className="block mb-2">Hi, I'm</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
              Uthum Wijenayake
            </span>
          </h1>
          <TypeAnimation
            sequence={[
              'A Full-Stack Developer',
              2000,
              'A MERN Stack Specialist',
              2000,
              'A UI/UX Designer',
              2000,
            ]}
            wrapper="h2"
            speed={50}
            className="text-2xl md:text-3xl font-semibold text-gray-600 dark:text-gray-300 mt-4"
            repeat={Infinity}
          />
          <p className="mt-6 text-lg text-gray-500 dark:text-gray-400 max-w-lg mx-auto md:mx-0">
            I build modern, responsive, and engaging web applications from concept to deployment.
          </p>

          {/* --- Button Container --- */}
          <div className="mt-8 flex justify-center md:justify-start space-x-4">
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-teal-400 text-white font-bold rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              Get In Touch
            </a>
            {/* --- NEW GITHUB BUTTON --- */}
            <a
              href="https://github.com/uthum7" // <-- IMPORTANT: Add your GitHub URL here
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-gray-800 text-white dark:bg-gray-100 dark:text-gray-800 font-bold rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              GitHub
            </a>
          </div>

        </motion.div>
        
        {/* Right Column: Avatar/Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative">
            <img
              src={profile} // Ensure you have a profile image in your assets
              alt="Uthum Wijenayake"
              className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-8 border-white dark:border-gray-700 shadow-2xl"
            />
             <div className="absolute inset-0 rounded-full border-4 border-teal-400 animate-pulse"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;