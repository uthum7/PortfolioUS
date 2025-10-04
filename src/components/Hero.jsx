import React, { useState, useEffect } from 'react';
import { ArrowRight, Github, Sparkles, Code2, Palette, Zap } from 'lucide-react';
import profileImg from '../assets/uthumW.jpg';

const Hero = () => {
  const roles = ['Full-Stack Developer', 'MERN Specialist', 'UI/UX Designer', 'Problem Solver'];
  const [currentRole, setCurrentRole] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const profile = profileImg;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400/30 to-purple-400/30 dark:from-blue-600/20 dark:to-purple-600/20 rounded-full blur-3xl animate-pulse" />
        <div 
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-purple-400/30 to-pink-400/30 dark:from-purple-600/20 dark:to-pink-600/20 rounded-full blur-3xl animate-pulse" 
          style={{animationDelay: '1.5s'}} 
        />
        
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-blue-500 rounded-full animate-ping" style={{animationDelay: '0.5s'}} />
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-purple-500 rounded-full animate-ping" style={{animationDelay: '1s'}} />
        <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-pink-500 rounded-full animate-ping" style={{animationDelay: '2s'}} />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Content */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Status Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full border border-blue-200 dark:border-blue-800 backdrop-blur-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
              </span>
              <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Available for opportunities
              </span>
            </div>

            <div className="space-y-6">
              {/* Main Heading */}
              <div className="space-y-2">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight">
                  <span className="text-gray-900 dark:text-white block mb-2">
                    Hi, I'm
                  </span>
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                      Uthum Wijenayake
                    </span>
                    <Sparkles className="absolute -top-6 -right-8 text-yellow-500 w-6 h-6 animate-pulse" />
                  </span>
                </h1>
              </div>
              
              {/* Rotating Roles */}
              <div className="relative h-16 flex items-center overflow-hidden">
                <div className="absolute inset-0 flex items-center">
                  {roles.map((role, idx) => (
                    <div
                      key={idx}
                      className={`absolute transition-all duration-500 ${
                        idx === currentRole 
                          ? 'opacity-100 translate-y-0' 
                          : idx < currentRole 
                            ? 'opacity-0 -translate-y-full' 
                            : 'opacity-0 translate-y-full'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {role.includes('Full-Stack') && <Code2 className="text-blue-500" size={28} />}
                        {role.includes('Designer') && <Palette className="text-purple-500" size={28} />}
                        <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-300 dark:to-gray-100 bg-clip-text text-transparent">
                          {role}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Description */}
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
                Crafting exceptional digital experiences with modern technologies. 
                I transform <span className="font-semibold text-gray-800 dark:text-gray-200">ideas into elegant, scalable solutions</span> that users love.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#contact"
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center gap-2">
                  Let's Connect
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <a
                href="https://github.com/uthum7"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-white dark:bg-slate-800 text-gray-900 dark:text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 flex items-center gap-2"
              >
                <Github size={20} className="group-hover:rotate-12 transition-transform" />
                View GitHub
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200 dark:border-gray-800">
              <div>
                <div className="text-3xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">1+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">8+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Projects Done</div>
              </div>
              <div>
                <div className="text-3xl font-black bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">3+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Tech Stack</div>
              </div>
            </div>
          </div>

          {/* COMPLETELY NEW PROFILE IMAGE DESIGN */}
          <div className={`relative flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative group">
              {/* Hexagon container with modern look */}
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                {/* Glassmorphism background card */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10 dark:from-slate-800/40 dark:to-slate-900/10 backdrop-blur-xl rounded-3xl border border-white/20 dark:border-gray-700/50 shadow-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500" />
                
                {/* Main image container */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl transform -rotate-6 group-hover:-rotate-3 transition-transform duration-500">
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-transparent to-purple-500/20 z-10" />
                  
                  {/* Profile Image */}
                  <img
                    src={profile}
                    alt="Uthum Wijenayake"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Scan line effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent animate-pulse z-20" />
                </div>

                {/* Floating tech badges - Different positions */}
                <div className="absolute -top-6 -left-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-4 shadow-2xl transform group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-300 border-4 border-white dark:border-slate-900">
                  <Code2 className="text-white" size={28} />
                </div>
                
                <div className="absolute top-1/2 -right-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-4 shadow-2xl transform group-hover:scale-110 group-hover:translate-x-2 transition-all duration-300 border-4 border-white dark:border-slate-900">
                  <Palette className="text-white" size={28} />
                </div>
                
                <div className="absolute -bottom-6 left-1/4 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl p-4 shadow-2xl transform group-hover:scale-110 group-hover:translate-y-2 transition-all duration-300 border-4 border-white dark:border-slate-900">
                  <Zap className="text-white" size={28} />
                </div>

                {/* Decorative dots pattern */}
                <div className="absolute -top-4 right-1/4 grid grid-cols-2 gap-2 opacity-50">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}} />
                  <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}} />
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '0.6s'}} />
                </div>

                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-blue-500 rounded-tl-3xl" />
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-purple-500 rounded-br-3xl" />
              </div>

              {/* Glowing effect behind */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 blur-3xl -z-10 animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center p-2">
          <div className="w-1 h-2 bg-gray-400 dark:bg-gray-600 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;