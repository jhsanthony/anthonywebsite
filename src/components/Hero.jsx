import React from 'react';
import { useColorScheme } from '../contexts/ColorSchemeContext';

function Hero() {
  const { currentTheme } = useColorScheme();
  
  return (
    <div className="container mx-auto px-6 pt-24">
      <div className="relative">
        <div className={`absolute inset-0 bg-gradient-to-r from-${currentTheme.primary}-500/20 to-${currentTheme.secondary}-500/20 blur-3xl animate-pulse`} />
        <div className="relative">
          <h1 className={`text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-${currentTheme.primary}-500 to-${currentTheme.secondary}-500 mb-4`}>
            Anthony
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Web Developer & Designer
          </p>
          <div className="space-y-8">
            {/* Content sections will be added here */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;