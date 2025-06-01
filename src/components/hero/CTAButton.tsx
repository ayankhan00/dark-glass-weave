
import React from 'react';
import { ArrowDown } from 'lucide-react';

const CTAButton = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex justify-center mb-12 animate-fade-in" style={{ animationDelay: '900ms' }}>
      <button 
        onClick={scrollToContact}
        className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-10 py-5 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 relative overflow-hidden"
      >
        <span className="relative z-10 flex items-center">
          Let's Work Together
          <ArrowDown className="inline-block ml-3 w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </button>
    </div>
  );
};

export default CTAButton;
