import React from 'react';
import { Linkedin, Facebook, Instagram, Mail, Github } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { 
      name: 'LinkedIn', 
      icon: <Linkedin size={20} />, 
      url: 'https://www.linkedin.com/in/uthum-wijenayake-988a79363?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' 
    },
    { 
      name: 'GitHub', 
      icon: <Github size={20} />, 
      url: 'https://github.com/uthum7' 
    },
    { 
      name: 'Facebook', 
      icon: <Facebook size={20} />, 
      url: 'https://www.facebook.com/uthum.wijenayake' 
    },
    { 
      name: 'Instagram', 
      icon: <Instagram size={20} />, 
      url: 'https://www.instagram.com/uthum_wijenayake?igsh=cmFxYzl2NjY0cHUw' 
    },
    { 
      name: 'Email', 
      icon: <Mail size={20} />, 
      url: '#contact' 
    },
  ];

  return (
    <footer className="bg-slate-950 text-gray-400 py-16 px-6">
      <div className="container mx-auto">
        <div className="text-center space-y-8">
          {/* Brand */}
          <div>
            <h2 className="text-4xl font-black text-white mb-2">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Uthum Wijenayake
              </span>
            </h2>
            <p className="text-lg text-gray-400">
              Full-Stack Developer & UI/UX Designer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target={link.url.startsWith('#') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                aria-label={link.name}
                className="p-3 bg-slate-900 rounded-full hover:bg-gradient-to-br hover:from-blue-600 hover:to-purple-600 transform hover:scale-110 transition-all duration-300"
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Navigation Links */}
          <div className="flex justify-center gap-8 text-sm">
            <a 
              href="#about" 
              className="hover:text-white transition-colors"
            >
              About
            </a>
            <a 
              href="#projects" 
              className="hover:text-white transition-colors"
            >
              Projects
            </a>
            <a 
              href="#contact" 
              className="hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-8 space-y-2">
            <p className="text-sm">
              © {new Date().getFullYear()} Uthum Wijenayake. All Rights Reserved.
            </p>
            <p className="text-xs text-gray-500">
              Crafted with React, Vite & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;