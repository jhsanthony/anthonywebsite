import React from 'react';

const PulsingGradient = ({ variant = 'primary' }) => {
  const gradients = {
    primary: 'from-amber-500/30 via-purple-500/20 to-black',
    secondary: 'from-black via-amber-500/25 to-purple-500/20',
    tertiary: 'from-purple-500/20 via-black to-amber-500/30',
    quaternary: 'from-amber-500/25 via-purple-500/20 to-amber-500/25'
  };

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Main gradient */}
      <div className={`
        absolute inset-0 bg-gradient-to-b ${gradients[variant]}
        animate-pulse duration-[4000ms]
      `} />
      
      {/* Moving gradient overlay */}
      <div className={`
        absolute inset-0 bg-gradient-radial from-amber-500/10 via-transparent to-transparent
        animate-ping duration-[8000ms]
      `} style={{
        transform: 'scale(1.5)',
        animation: 'gradient-move 8s ease-in-out infinite'
      }} />
      
      {/* Blur overlay */}
      <div className="absolute inset-0 backdrop-blur-[100px]" />
    </div>
  );
};

export default PulsingGradient;