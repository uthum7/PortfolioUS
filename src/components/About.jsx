import React, { useState } from 'react';
import { Database, Code, Server, Smartphone, Wind, Palette, Sparkles, Award, Target, Rocket, Brain, Zap } from 'lucide-react';

const About = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = [
    { 
      name: 'MongoDB', 
      icon: <Database size={32} />, 
      color: 'from-green-400 to-green-600',
      level: 85,
      description: 'NoSQL Database'
    },
    { 
      name: 'Express.js', 
      icon: <Server size={32} />, 
      color: 'from-gray-400 to-gray-600',
      level: 90,
      description: 'Backend Framework'
    },
    { 
      name: 'React', 
      icon: <Smartphone size={32} />, 
      color: 'from-blue-400 to-blue-600',
      level: 95,
      description: 'Frontend Library'
    },
    { 
      name: 'Node.js', 
      icon: <Code size={32} />, 
      color: 'from-green-500 to-green-700',
      level: 88,
      description: 'JavaScript Runtime'
    },
    { 
      name: 'Figma', 
      icon: <Palette size={32} />, 
      color: 'from-purple-400 to-pink-600',
      level: 92,
      description: 'UI/UX Design'
    },
    { 
      name: 'Tailwind', 
      icon: <Wind size={32} />, 
      color: 'from-cyan-400 to-blue-600',
      level: 93,
      description: 'CSS Framework'
    },
  ];

  const highlights = [
    {
      icon: <Award className="text-yellow-500" size={28} />,
      title: 'Quality Focused',
      description: 'Committed to writing clean, maintainable code'
    },
    {
      icon: <Target className="text-blue-500" size={28} />,
      title: 'User-Centric',
      description: 'Designing with the end user in mind'
    },
    {
      icon: <Brain className="text-purple-500" size={28} />,
      title: 'AI Enthusiast',
      description: 'Exploring AI/ML integration in web apps'
    },
  ];

  return (
    <section id="about" className="relative py-24 md:py-32 px-6 bg-gradient-to-b from-white via-gray-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/50 via-purple-50/30 to-transparent dark:from-blue-950/10 dark:via-purple-950/5 dark:to-transparent" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-50/50 to-transparent dark:from-purple-950/10 dark:to-transparent" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/10 dark:bg-blue-600/5 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-40 right-20 w-32 h-32 bg-purple-400/10 dark:bg-purple-600/5 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}} />
      
      <div className="container mx-auto relative z-10 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full border border-blue-200 dark:border-blue-800 mb-4">
            <Sparkles size={16} className="text-blue-600" />
            <span className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              About Me
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mt-4 mb-4">
            Creating Digital{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Excellence
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Passionate about building exceptional digital experiences with cutting-edge technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Bio Section */}
          <div className="space-y-8">
            {/* Main bio */}
            <div className="space-y-6">
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-600 via-purple-600 to-pink-600 rounded-full" />
                <div className="space-y-5 pl-6">
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    I'm a passionate{' '}
                    <span className="font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                      Information Technology and Management
                    </span>{' '}
                    undergraduate from the University of Moratuwa, specializing in full-stack development with the MERN stack.
                  </p>
                  
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    I believe exceptional products emerge from the perfect blend of robust engineering and intuitive design. 
                    Using tools like{' '}
                    <span className="inline-flex items-center gap-1 font-semibold text-purple-600 dark:text-purple-400">
                      <Palette size={18} />
                      Figma
                    </span>, I prototype and visualize interfaces that are both functional and beautiful.
                  </p>
                  
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    As an{' '}
                    <span className="inline-flex items-center gap-1 font-bold text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text">
                      <Brain size={18} />
                      AI enthusiast
                    </span>, I'm actively exploring the intersection of web development and artificial intelligence. 
                    I'm fascinated by how AI can enhance user experiences and am continuously learning about machine learning integration, 
                    intelligent features, and automation in modern applications.
                  </p>
                  
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    From initial wireframes to final deployment, I thrive on challenges across the entire product lifecycle, 
                    ensuring every detail contributes to an outstanding user experience.
                  </p>
                </div>
              </div>
            </div>

            {/* Highlight Quote */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
              <div className="relative p-8 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950/30 dark:via-purple-950/30 dark:to-pink-950/30 rounded-2xl border-l-4 border-blue-600">
                <div className="flex items-start gap-4">
                  <Sparkles className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <p className="text-lg text-gray-800 dark:text-gray-200 italic font-medium leading-relaxed">
                      "Great products are born from the synergy of robust engineering, intuitive design, and intelligent automation."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="group p-5 bg-white dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-lg transition-all duration-300"
                >
                  <div className="mb-3">{highlight.icon}</div>
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-1">
                    {highlight.title}
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <Code size={28} className="text-blue-600" />
                Tech Stack
              </h3>
              
              <div className="grid grid-cols-2 gap-5">
                {skills.map((skill, idx) => (
                  <div
                    key={idx}
                    onMouseEnter={() => setHoveredSkill(idx)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className="group relative"
                  >
                    {/* Card */}
                    <div className="relative p-6 bg-white dark:bg-slate-900 rounded-2xl shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-200 dark:border-gray-800 hover:border-transparent overflow-hidden">
                      {/* Gradient Overlay */}
                      <div 
                        className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} 
                      />
                      
                      {/* Animated border on hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl`} />
                      
                      {/* Content */}
                      <div className="relative space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="text-gray-700 dark:text-gray-300 group-hover:scale-110 transition-transform duration-300">
                            {skill.icon}
                          </div>
                          <span className={`text-xs font-bold px-2 py-1 rounded-full bg-gradient-to-r ${skill.color} text-white opacity-0 group-hover:opacity-100 transition-opacity`}>
                            {skill.level}%
                          </span>
                        </div>
                        
                        <div>
                          <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1">
                            {skill.name}
                          </h3>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            {skill.description}
                          </p>
                        </div>

                        {/* Progress bar */}
                        <div className={`overflow-hidden transition-all duration-300 ${hoveredSkill === idx ? 'max-h-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                          <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                            <div 
                              className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-700 ease-out`}
                              style={{ width: hoveredSkill === idx ? `${skill.level}%` : '0%' }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Learning Journey Card - NEW */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
              <div className="relative p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-2xl border border-purple-200 dark:border-purple-800">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl">
                    <Brain size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                      AI Learning Journey
                      <Zap size={18} className="text-yellow-500 animate-pulse" />
                    </h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                      Currently diving deep into artificial intelligence and machine learning. Exploring how to integrate AI capabilities 
                      into web applications to create smarter, more intuitive user experiences.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 text-xs font-semibold bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full">
                        Machine Learning
                      </span>
                      <span className="px-3 py-1 text-xs font-semibold bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 rounded-full">
                        AI Integration
                      </span>
                      <span className="px-3 py-1 text-xs font-semibold bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full">
                        NLP
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Always Learning Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
              <div className="relative p-6 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-slate-900 dark:to-blue-950/30 rounded-2xl border border-gray-200 dark:border-gray-800">
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <Rocket size={20} className="text-blue-600" />
                  Always Learning
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  Beyond MERN stack, I'm exploring advanced React patterns, TypeScript, cloud technologies, and the exciting world of AI/ML 
                  to stay at the cutting edge of modern development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;