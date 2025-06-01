
import React, { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ['Full-Stack Developer', 'React Enthusiast', 'UI/UX Designer', 'Problem Solver'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Background Effects with Smoother Transitions */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20 transition-all duration-[3000ms] ease-in-out" />
      <div className="absolute inset-0 backdrop-blur-3xl transition-all duration-[2000ms] ease-in-out" />
      
      {/* Animated Background Particles with Smoother Movement */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full transition-all duration-[4000ms] ease-in-out"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `pulse ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
              transform: `translateZ(0)`, // Hardware acceleration
              willChange: 'transform, opacity'
            }}
          />
        ))}
      </div>

      {/* Floating Glass Orbs with Smoother Animations */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl transition-all duration-[5000ms] ease-in-out transform-gpu" 
           style={{ 
             animation: 'float 6s ease-in-out infinite',
             animationDelay: '0s'
           }} />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-pink-400/20 to-blue-400/20 rounded-full blur-xl transition-all duration-[6000ms] ease-in-out transform-gpu" 
           style={{ 
             animation: 'float 8s ease-in-out infinite reverse',
             animationDelay: '1000ms'
           }} />
      <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl transition-all duration-[4000ms] ease-in-out transform-gpu" 
           style={{ 
             animation: 'float 7s ease-in-out infinite',
             animationDelay: '500ms'
           }} />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="backdrop-blur-xl bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl animate-fade-in-up transition-all duration-1000 ease-out">
          {/* Profile Image */}
          <div className="w-32 h-32 mx-auto mb-8 relative">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1 transition-all duration-700 ease-in-out">
              <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center text-4xl font-bold transition-all duration-500 ease-in-out">
                AK
              </div>
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 transition-all duration-[3000ms] ease-in-out" 
                 style={{ animation: 'pulse 3s ease-in-out infinite' }}></div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent leading-tight transition-all duration-1000 ease-out">
            Hi, I'm Ayan Khan
          </h1>
          
          {/* Animated Role Text */}
          <div className="h-12 md:h-16 mb-8 flex items-center justify-center">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-300">
              <span className="inline-block min-w-[300px] text-center">
                <span 
                  key={currentRole}
                  className="inline-block animate-fade-in bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent transition-all duration-1000 ease-in-out"
                >
                  {roles[currentRole]}
                </span>
              </span>
            </h2>
          </div>
          
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed transition-all duration-800 ease-out">
            I create beautiful, modern web applications using cutting-edge technologies. 
            Passionate about clean code, user experience, and bringing ideas to life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button 
              onClick={scrollToPortfolio}
              className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25"
            >
              View My Work
              <ArrowDown className="inline-block ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform duration-500 ease-in-out" />
            </button>
            
            <a 
              href="mailto:ayan.gomail@gmail.com"
              className="backdrop-blur-sm bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold border border-white/20 hover:border-white/30 transition-all duration-500 ease-in-out transform hover:scale-105"
            >
              Get In Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/ayankhan00"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 backdrop-blur-sm bg-white/10 hover:bg-white/20 rounded-full border border-white/20 hover:border-white/30 transition-all duration-500 ease-in-out"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors duration-400 ease-in-out" />
            </a>
            <a
              href="https://linkedin.com/in/ayankhan1"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 backdrop-blur-sm bg-white/10 hover:bg-white/20 rounded-full border border-white/20 hover:border-white/30 transition-all duration-500 ease-in-out"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors duration-400 ease-in-out" />
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-20px) translateX(10px) rotate(1deg);
          }
          50% {
            transform: translateY(-10px) translateX(-10px) rotate(-1deg);
          }
          75% {
            transform: translateY(-30px) translateX(5px) rotate(0.5deg);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
