import React from 'react';
// All icons are correctly imported
import { Linkedin, Facebook, Instagram, Mail, Github } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    // Your correct URLs are preserved
    { name: 'LinkedIn', icon: <Linkedin />, url: 'https://www.linkedin.com/in/uthum-wijenayake-988a79363?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
    { name: 'GitHub', icon: <Github />, url: 'https://github.com/uthum7' },
    { name: 'Facebook', icon: <Facebook />, url: 'https://www.facebook.com/uthum.wijenayake' },
    { name: 'Instagram', icon: <Instagram />, url: 'https://www.instagram.com/uthum_wijenayake?igsh=cmFxYzl2NjY0cHUw' },
    
    // --- THIS IS THE MODIFIED LINE ---
    // The Email link now points to the contact form section for smooth scrolling
    { name: 'Email', icon: <Mail />, url: '#contact' }, 
  ];

  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container mx-auto px-4 py-10 text-center">
        <h2 className="text-3xl font-bold text-white mb-2">Uthum Wijenayake</h2>
        <p className="mb-6">Full-Stack Developer & UI/UX Designer</p>
        
        <div className="flex justify-center space-x-6 mb-8">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              // --- THIS LOGIC IS RE-ADDED FOR BETTER USER EXPERIENCE ---
              // It ensures only external links open in a new tab
              target={link.url.startsWith('#') ? '_self' : '_blank'}
              rel="noopener noreferrer"
              aria-label={link.name}
              className="transform hover:scale-125 hover:text-blue-400 transition-all duration-300"
            >
              {link.icon}
            </a>
          ))}
        </div>
        
        <div className="border-t border-gray-700 pt-6 text-sm">
          <p>© {new Date().getFullYear()} Uthum Wijenayake. All Rights Reserved.</p>
          <p className="mt-1">Built with React, Vite & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;