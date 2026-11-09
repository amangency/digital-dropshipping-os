import React from 'react';

interface ArchDividerProps {
  type: 'dark-to-light' | 'light-to-dark';
  lightBg?: string; // '#ffffff' or '#F8F9FA'
  darkBg?: string;  // '#15212E'
  badgeHighlight: string;
  badgeText: string;
  badgeIcon: string;
}

export const ArchDivider: React.FC<ArchDividerProps> = ({
  type,
  lightBg = '#ffffff',
  darkBg = '#15212E',
  badgeHighlight,
  badgeText,
  badgeIcon
}) => {
  if (type === 'dark-to-light') {
    return (
      <div className="w-full relative select-none" style={{ backgroundColor: darkBg }}>
        {/* Dark Blue Arch transitioning downward into Light Canvas */}
        <div className="relative w-full overflow-visible leading-none">
          <svg 
            className="w-full h-12 sm:h-16 md:h-20 block" 
            viewBox="0 0 1440 80" 
            fill={lightBg}
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d="M0,0 C480,80 960,80 1440,0 L1440,80 L0,80 Z" />
          </svg>

          {/* 3D Metallic Gold Capsule Badge - Nested in the Curve Apex */}
          <div className="absolute bottom-2 sm:bottom-3.5 left-1/2 -translate-x-1/2 translate-y-[30%] z-20 w-max">
            <div className="inline-flex items-center gap-2 sm:gap-3.5 px-4 sm:px-6 py-1.5 sm:py-2.5 rounded-full bg-[#15212E] border-2 border-[#dfab43] shadow-[0_8px_25px_rgba(0,0,0,0.22),0_0_12px_rgba(223,171,67,0.35)]">
              <span className="text-xl sm:text-2xl font-black text-[#dfab43] tracking-tight">{badgeHighlight}</span>
              <div className="h-5 sm:h-6 w-[1px] bg-white/20"></div>
              <div className="flex items-center gap-1.5 text-left">
                <span className="text-xs sm:text-sm font-bold text-white tracking-wide leading-tight whitespace-pre-line">
                  {badgeText}
                </span>
                <span className="text-[#dfab43] text-sm sm:text-base">{badgeIcon}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Light to Dark Transition
  return (
    <div className="w-full relative select-none" style={{ backgroundColor: lightBg }}>
      {/* Light Canvas Arch transitioning downward into Dark Blue */}
      <div className="relative w-full overflow-visible leading-none">
        <svg 
          className="w-full h-12 sm:h-16 md:h-20 block" 
          viewBox="0 0 1440 80" 
          fill={darkBg}
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M0,0 C480,80 960,80 1440,0 L1440,80 L0,80 Z" />
        </svg>

        {/* 3D Metallic Gold Capsule Badge - Nested in the Curve Apex */}
        <div className="absolute bottom-2 sm:bottom-3.5 left-1/2 -translate-x-1/2 translate-y-[30%] z-20 w-max">
          <div className="inline-flex items-center gap-2 sm:gap-3.5 px-4 sm:px-6 py-1.5 sm:py-2.5 rounded-full bg-[#15212E] border-2 border-[#dfab43] shadow-[0_8px_25px_rgba(0,0,0,0.25),0_0_12px_rgba(223,171,67,0.35)]">
            <span className="text-xl sm:text-2xl font-black text-[#dfab43] tracking-tight">{badgeHighlight}</span>
            <div className="h-5 sm:h-6 w-[1px] bg-white/20"></div>
            <div className="flex items-center gap-1.5 text-left">
              <span className="text-xs sm:text-sm font-bold text-white tracking-wide leading-tight whitespace-pre-line">
                {badgeText}
              </span>
              <span className="text-[#dfab43] text-sm sm:text-base">{badgeIcon}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
