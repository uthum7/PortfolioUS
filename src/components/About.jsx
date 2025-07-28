import React from 'react';
import { motion } from 'framer-motion';
// Import Palette icon for Figma
import { Database, Code, Server, Smartphone, Wind, GitBranch, Palette } from 'lucide-react';

const skills = [
  { name: 'MongoDB', icon: <Database size={40} /> },
  { name: 'Express.js', icon: <Server size={40} /> },
  { name: 'React', icon: <Smartphone size={40} /> },
  { name: 'Node.js', icon: <Code size={40} /> },
  { name: 'Figma', icon: <Palette size={40} /> }, // <-- NEW SKILL ADDED
  { name: 'Tailwind CSS', icon: <Wind size={40} /> },
];

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-gray-800">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
          More About <span className="text-blue-500">Me</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Column: Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I am a dedicated Information Technology and Management undergraduate from the University of Moratuwa. While my core passion lies in full-stack development with the MERN stack, I also have a keen eye for design.
              <br/><br/>
              {/* UPDATED DESCRIPTION */}
              I strongly believe that a great product is born from the synergy of robust engineering and intuitive design. I enjoy using tools like **Figma** to prototype and visualize user interfaces, ensuring that the final product is not only functional but also beautiful and user-friendly. I love tackling challenges across the entire product lifecycle, from the initial wireframe to the final deployment.
            </p>
          </motion.div>
          
          {/* Right Column: Skills */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg flex flex-col items-center justify-center text-center shadow-lg transform hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="text-blue-500 dark:text-blue-400 mb-3">{skill.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{skill.name}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;