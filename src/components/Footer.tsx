
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="backdrop-blur-lg bg-white/5 rounded-2xl p-8 border border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Ayan Khan
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                  Full-Stack Developer
                </p>
              </div>
              
              <div className="flex items-center space-x-6">
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/ayankhan00"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-2 text-gray-400 hover:text-white transition-all duration-200 hover:scale-110"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  
                  <a
                    href="https://linkedin.com/in/ayankhan1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-2 text-gray-400 hover:text-white transition-all duration-200 hover:scale-110"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
                
                <div className="text-sm text-gray-500">
                  © {currentYear} All rights reserved.
                </div>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-white/10 text-center">
              <p className="text-sm text-gray-400">
                Designed and built with ❤️ using React, TypeScript, and Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 backdrop-blur-lg bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 text-white rounded-full shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-110 z-40"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </>
  );
};

export default Footer;
