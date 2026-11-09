import React from 'react';

interface ArchProps {
  fillColor?: string;
  className?: string;
}

/**
 * Smooth symmetrical arch transitioning from Dark (#15212E) to Light (#FFFFFF or #F8F9FA)
 */
export const WaveToLight: React.FC<ArchProps> = ({ 
  fillColor = '#ffffff', 
  className = ''
}) => {
  return (
    <div 
      className={`w-full overflow-hidden leading-none block select-none pointer-events-none -mb-1 ${className}`} 
      aria-hidden="true"
    >
      <svg 
        className="w-full h-8 sm:h-12 md:h-16 block" 
        viewBox="0 0 1440 60" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path 
          d="M0,0 C480,60 960,60 1440,0 L1440,60 L0,60 Z" 
          fill={fillColor}
        />
      </svg>
    </div>
  );
};

/**
 * Smooth symmetrical arch transitioning from Light (#FFFFFF or #F8F9FA) to Dark (#15212E)
 */
export const WaveToDark: React.FC<ArchProps> = ({ 
  fillColor = '#15212E', 
  className = ''
}) => {
  return (
    <div 
      className={`w-full overflow-hidden leading-none block select-none pointer-events-none -mt-1 ${className}`} 
      aria-hidden="true"
    >
      <svg 
        className="w-full h-8 sm:h-12 md:h-16 block" 
        viewBox="0 0 1440 60" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path 
          d="M0,60 C480,0 960,0 1440,60 L1440,60 L0,60 Z" 
          fill={fillColor}
        />
      </svg>
    </div>
  );
};

