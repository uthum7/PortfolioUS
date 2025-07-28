import React from 'react';

// Using better placeholder images from Unsplash
const myProjects = [
  // <-- NEW FIGMA PROJECT ADDED
  {
    title: 'Web App UI/UX Design (Figma)',
    description: 'A complete design prototype for a modern web application, focusing on user flow, component design, and a clean aesthetic.',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600',
    liveLink: 'https://www.figma.com/files/project/243776507', // IMPORTANT: Add link to your Figma prototype here
    repoLink: '#', // You can link to a case study on Behance/Dribbble here
  },
  {
    title: 'MERN Stack E-commerce Site',
    description: 'A feature-rich e-commerce platform built from scratch. Includes user auth, product catalog, and a checkout process.',
    image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600',
    liveLink: '#',
    repoLink: '#',
  },
  {
    title: 'Job Portal Webapp (MERN) With Resume Builder',
    description: 'A dynamic job portal built with the MERN stack. To empower candidates, this platform features an innovative AI-based resume builder that helps users craft professional, tailored CVs. It connects job seekers with employers through real-time job listings, advanced search filters, and a seamless application process.',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600',
    liveLink: '#',
    repoLink: 'https://github.com/uthum7/jobportal',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
          My <span className="text-blue-500">Projects</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {myProjects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden group">
              <div className="overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <div className="flex justify-between mt-6">
                  <a href={project.liveLink} className="font-semibold text-blue-500 hover:text-blue-600 transition-colors" target="_blank" rel="noopener noreferrer">
                    {project.title.includes('Figma') ? 'View Design →' : 'Live Demo →'}
                  </a>
                  <a href={project.repoLink} className="font-semibold text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                    {project.title.includes('Figma') ? 'Case Study →' : 'GitHub →'}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;