import React, { useState } from 'react';
import { ExternalLink, Github, Figma, Code2, Sparkles, ArrowRight } from 'lucide-react';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const myProjects = [
    {
      title: 'Web App UI/UX Design',
      subtitle: 'Figma Design System',
      description: 'A complete design prototype for a modern web application, focusing on user flow, component design, and a clean aesthetic. Built with attention to detail and user experience.',
      image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600',
      liveLink: 'https://www.figma.com/files/project/243776507',
      repoLink: '#',
      tags: ['Figma', 'UI/UX', 'Design System', 'Prototyping'],
      gradient: 'from-purple-500 to-pink-500',
      featured: true
    },
    {
      title: 'MERN E-commerce Platform',
      subtitle: 'Full-Stack Development',
      description: 'A feature-rich e-commerce platform built from scratch with MERN stack. Includes user authentication, product catalog, shopping cart, and secure checkout process.',
      image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600',
      liveLink: '#',
      repoLink: '#',
      tags: ['MongoDB', 'Express', 'React', 'Node.js'],
      gradient: 'from-blue-500 to-cyan-500',
      featured: false
    },
    {
      title: 'Job Portal with AI Resume Builder',
      subtitle: 'MERN Stack Application',
      description: 'A dynamic job portal connecting seekers with employers. Features an innovative AI-based resume builder, real-time listings, advanced filters, and seamless application process.',
      image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600',
      liveLink: '#',
      repoLink: 'https://github.com/uthum7/jobportal',
      tags: ['React', 'AI/ML', 'Node.js', 'MongoDB'],
      gradient: 'from-green-500 to-emerald-500',
      featured: true
    },
  ];

  return (
    <section id="projects" className="relative py-24 md:py-32 px-6 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-400/10 dark:bg-blue-600/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-purple-400/10 dark:bg-purple-600/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}} />
      </div>

      <div className="container mx-auto relative z-10 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full border border-blue-200 dark:border-blue-800 mb-4">
            <Code2 size={16} className="text-blue-600" />
            <span className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              Portfolio
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-4">
            Featured{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work in web development and design
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {myProjects.map((project, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              className={`group relative ${
                project.featured ? 'md:col-span-2' : ''
              }`}
            >
              {/* Featured badge */}
              {project.featured && (
                <div className="absolute -top-3 left-8 z-20 flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full shadow-lg">
                  <Sparkles size={14} className="text-white" />
                  <span className="text-xs font-bold text-white uppercase tracking-wide">
                    Featured
                  </span>
                </div>
              )}

              {/* Project Card */}
              <div className="relative bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-800">
                {/* Gradient border glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 -z-10`} />

                <div className={`grid ${project.featured ? 'md:grid-cols-2' : 'md:grid-cols-5'} gap-0`}>
                  {/* Image Section */}
                  <div className={`relative overflow-hidden ${project.featured ? '' : 'md:col-span-2'}`}>
                    {/* Image overlay gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-60 transition-all duration-500 z-10 mix-blend-multiply`} />
                    
                    {/* Image */}
                    <div className="relative h-64 md:h-full overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      
                      {/* Hover overlay with quick links */}
                      <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end justify-center pb-8 gap-4 transition-all duration-500 ${
                        hoveredProject === index ? 'opacity-100' : 'opacity-0'
                      }`}>
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-2.5 bg-white text-gray-900 rounded-full font-bold text-sm hover:bg-gray-100 transition-colors flex items-center gap-2 shadow-lg"
                        >
                          {project.tags.includes('Figma') ? (
                            <>
                              <Figma size={16} />
                              View Design
                            </>
                          ) : (
                            <>
                              <ExternalLink size={16} />
                              Live Demo
                            </>
                          )}
                        </a>
                        <a
                          href={project.repoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-2.5 bg-gray-900 text-white rounded-full font-bold text-sm hover:bg-gray-800 transition-colors flex items-center gap-2 shadow-lg"
                        >
                          <Github size={16} />
                          {project.tags.includes('Figma') ? 'Case Study' : 'Code'}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className={`p-8 md:p-10 flex flex-col justify-between ${project.featured ? '' : 'md:col-span-3'}`}>
                    <div className="space-y-4">
                      {/* Subtitle */}
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.gradient}`} />
                        <span className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                          {project.subtitle}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1.5 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 text-gray-700 dark:text-gray-300 text-xs font-semibold rounded-full border border-gray-300 dark:border-gray-600"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Links - Desktop */}
                    <div className="hidden md:flex items-center gap-6 mt-8 pt-6 border-t border-gray-200 dark:border-gray-800">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold hover:gap-3 transition-all"
                      >
                        {project.tags.includes('Figma') ? 'View Design' : 'Live Demo'}
                        <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
                      </a>
                      <a
                        href={project.repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link flex items-center gap-2 text-gray-600 dark:text-gray-400 font-bold hover:text-gray-900 dark:hover:text-white hover:gap-3 transition-all"
                      >
                        <Github size={18} />
                        {project.tags.includes('Figma') ? 'Case Study' : 'GitHub'}
                        <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Mobile Action Buttons */}
                <div className="md:hidden p-6 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-slate-800/50">
                  <div className="flex gap-3">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 py-3 bg-gradient-to-r ${project.gradient} text-white font-bold rounded-xl text-center text-sm hover:shadow-lg transition-all`}
                    >
                      {project.tags.includes('Figma') ? 'View Design' : 'Live Demo'}
                    </a>
                    <a
                      href={project.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3 bg-gray-900 dark:bg-slate-700 text-white font-bold rounded-xl text-center text-sm hover:shadow-lg transition-all"
                    >
                      {project.tags.includes('Figma') ? 'Case Study' : 'GitHub'}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="inline-block relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
            <div className="relative px-8 py-6 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-slate-900 dark:to-blue-950/30 rounded-2xl border border-gray-200 dark:border-gray-800">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                Want to see more projects?
              </p>
              <a
                href="https://github.com/uthum7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full hover:shadow-xl transform hover:scale-105 transition-all"
              >
                <Github size={20} />
                Visit My GitHub
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;