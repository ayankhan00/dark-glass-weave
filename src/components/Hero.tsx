
import React from 'react';
import ParticlesBackground from './hero/ParticlesBackground';
import BackgroundShapes from './hero/BackgroundShapes';
import TypewriterText from './hero/TypewriterText';
import CTAButton from './hero/CTAButton';
import SocialLinks from './hero/SocialLinks';

const Hero = () => {
  const roles = ['Full-Stack Developer', 'React Specialist', 'Problem Solver', 'UI/UX Enthusiast'];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Particles Background */}
      <ParticlesBackground />

      {/* Background Elements */}
      <BackgroundShapes />

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <div className="backdrop-blur-xl bg-white/5 rounded-3xl p-8 md:p-16 border border-white/10 shadow-2xl animate-fade-in-up">
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent leading-tight animate-fade-in">
            Hi, I'm Ayan Khan
          </h1>
          
          {/* Animated Role Text with Typewriter Effect */}
          <TypewriterText roles={roles} />

          {/* Professional Tagline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-medium animate-fade-in" style={{ animationDelay: '300ms' }}>
            Crafting scalable, elegant solutions through modern web technologies.
          </p>
          
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '600ms' }}>
            Passionate about creating beautiful, performant web applications that solve real-world problems and deliver exceptional user experiences.
          </p>
          
          {/* CTA Button */}
          <CTAButton />

          {/* Social Links */}
          <SocialLinks />
        </div>
      </div>
    </section>
  );
};

export default Hero;
