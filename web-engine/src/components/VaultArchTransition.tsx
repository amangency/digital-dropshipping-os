import React from 'react';

export const VaultArchTransition = () => {
  return (
    <div className="w-full bg-[#15212E] relative select-none">
      {/* Symmetrical Dark Blue Arch transitioning to White */}
      <div className="relative w-full overflow-visible leading-none">
        <svg 
          className="w-full h-12 sm:h-16 md:h-20 block text-white" 
          viewBox="0 0 1440 80" 
          fill="currentColor"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M0,0 C480,80 960,80 1440,0 L1440,80 L0,80 Z" />
        </svg>

        {/* 3D Metallic Gold Capsule Badge - Nested Comfortably in the Curve Apex */}
        <div className="absolute bottom-2 sm:bottom-3.5 left-1/2 -translate-x-1/2 translate-y-[30%] z-20 w-max">
          <div className="inline-flex items-center gap-2.5 sm:gap-4 px-5 sm:px-7 py-2 sm:py-2.5 rounded-full bg-[#15212E] border-2 border-[#dfab43] shadow-[0_8px_25px_rgba(0,0,0,0.22),0_0_12px_rgba(223,171,67,0.35)]">
            <span className="text-2xl sm:text-3xl font-black text-[#dfab43] tracking-tight">50+</span>
            <div className="h-5 sm:h-7 w-[1px] bg-white/20"></div>
            <div className="flex items-center gap-1.5 text-left">
              <span className="text-xs sm:text-sm font-bold text-white tracking-wide leading-tight">
                Quick<br />Tiffin Hacks
              </span>
              <span className="text-[#dfab43] text-sm sm:text-base">✨</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
