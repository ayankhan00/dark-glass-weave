
import React, { useState, useEffect, Suspense, lazy } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

// Lazy load components for better performance
const Portfolio = lazy(() => import('../components/Portfolio'));
const Skills = lazy(() => import('../components/Skills'));
const Contact = lazy(() => import('../components/Contact'));
const Footer = lazy(() => import('../components/Footer'));

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    setIsLoaded(true);
    
    // Scroll spy functionality
    const handleScroll = () => {
      const sections = ['home', 'portfolio', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white font-inter transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Navbar activeSection={activeSection} />
      <Hero />
      <Suspense fallback={
        <div className="flex items-center justify-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        </div>
      }>
        <Portfolio />
        <Skills />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
