
import React from 'react';

const BackgroundShapes = () => {
  return (
    <>
      {/* Enhanced Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/30 to-pink-900/30 z-1" />
      <div className="absolute inset-0 backdrop-blur-sm z-2" />
      
      {/* Floating Geometric Shapes */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-pink-400/10 to-blue-400/10 rounded-2xl blur-xl animate-pulse delay-1000 rotate-45" />
      <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-xl animate-pulse delay-500" />
      <div className="absolute bottom-1/3 left-1/4 w-28 h-28 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl blur-xl animate-pulse delay-700 rotate-12" />
    </>
  );
};

export default BackgroundShapes;
