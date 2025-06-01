
import React, { useState, useEffect, useCallback } from 'react';
import { ArrowDown, Github, Linkedin, Instagram } from 'lucide-react';
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Container, Engine } from "@tsparticles/engine";

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const roles = ['Full-Stack Developer', 'React Specialist', 'Problem Solver', 'UI/UX Enthusiast'];

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log(container);
  }, []);

  // Typewriter effect
  useEffect(() => {
    const currentText = roles[currentRole];
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      if (displayText.length < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
      } else {
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, currentRole, roles]);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const particlesOptions = {
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 2,
        },
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: ["#3B82F6", "#8B5CF6", "#EC4899"],
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.1,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.3,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Particles Background */}
      <div className="absolute inset-0 z-0">
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={particlesOptions}
        />
      </div>

      {/* Enhanced Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/30 to-pink-900/30 z-1" />
      <div className="absolute inset-0 backdrop-blur-sm z-2" />
      
      {/* Floating Geometric Shapes */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-pink-400/10 to-blue-400/10 rounded-2xl blur-xl animate-pulse delay-1000 rotate-45" />
      <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-xl animate-pulse delay-500" />
      <div className="absolute bottom-1/3 left-1/4 w-28 h-28 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl blur-xl animate-pulse delay-700 rotate-12" />

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <div className="backdrop-blur-xl bg-white/5 rounded-3xl p-8 md:p-16 border border-white/10 shadow-2xl animate-fade-in-up">
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent leading-tight animate-fade-in">
            Hi, I'm Ayan Khan
          </h1>
          
          {/* Animated Role Text with Typewriter Effect */}
          <div className="h-16 md:h-20 mb-8 flex items-center justify-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-300">
              <span className="inline-block min-w-[350px] text-center">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {displayText}
                  <span className="animate-pulse">|</span>
                </span>
              </span>
            </h2>
          </div>

          {/* Professional Tagline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-medium animate-fade-in" style={{ animationDelay: '300ms' }}>
            Crafting scalable, elegant solutions through modern web technologies.
          </p>
          
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '600ms' }}>
            Passionate about creating beautiful, performant web applications that solve real-world problems and deliver exceptional user experiences.
          </p>
          
          {/* CTA Button */}
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

          {/* Social Links */}
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
