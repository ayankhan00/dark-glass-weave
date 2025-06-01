
import React from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';

const SocialLinks = () => {
  return (
    <div className="flex justify-center space-x-6 animate-fade-in" style={{ animationDelay: '1200ms' }}>
      <a
        href="https://github.com/ayankhan00"
        target="_blank"
        rel="noopener noreferrer"
        className="group p-4 backdrop-blur-sm bg-white/10 hover:bg-white/20 rounded-full border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20"
        aria-label="GitHub Profile"
      >
        <Github className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors duration-200" />
      </a>
      <a
        href="https://linkedin.com/in/ayankhan1"
        target="_blank"
        rel="noopener noreferrer"
        className="group p-4 backdrop-blur-sm bg-white/10 hover:bg-white/20 rounded-full border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20"
        aria-label="LinkedIn Profile"
      >
        <Linkedin className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors duration-200" />
      </a>
      <a
        href="https://instagram.com/ayankhan.dev"
        target="_blank"
        rel="noopener noreferrer"
        className="group p-4 backdrop-blur-sm bg-white/10 hover:bg-white/20 rounded-full border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-purple-500/20"
        aria-label="Instagram Profile"
      >
        <Instagram className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors duration-200" />
      </a>
    </div>
  );
};

export default SocialLinks;
