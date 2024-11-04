import React from 'react';
import { useColorScheme } from '../contexts/ColorSchemeContext';
import Settings from './Settings';

function NavBar() {
  const { currentTheme } = useColorScheme();
  
  return (
    <nav className={`fixed w-full bg-black/50 backdrop-blur-xl z-50 border-b border-${currentTheme.primary}-500/20`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className={`text-${currentTheme.primary}-500 text-2xl font-bold`}>A</a>
          <div className="flex items-center space-x-8">
            <div className="hidden md:flex space-x-8">
              <a href="#about" className={`text-gray-300 hover:text-${currentTheme.primary}-500 transition-colors`}>About</a>
              <a href="#skills" className={`text-gray-300 hover:text-${currentTheme.primary}-500 transition-colors`}>Skills</a>
              <a href="#projects" className={`text-gray-300 hover:text-${currentTheme.primary}-500 transition-colors`}>Projects</a>
              <a href="#contact" className={`text-gray-300 hover:text-${currentTheme.primary}-500 transition-colors`}>Contact</a>
            </div>
            <Settings />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;