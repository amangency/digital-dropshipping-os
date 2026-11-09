import React, { useState, useEffect } from 'react';

export const CountdownBanner = () => {
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const h = Math.floor(timeLeft / 3600);
  const m = Math.floor((timeLeft % 3600) / 60);
  const s = timeLeft % 60;

  return (
    <div className="bg-[#0d1820] py-2 px-3 flex items-center justify-center relative overflow-hidden">
      {/* Subtle shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#dfab43]/5 to-transparent" />
      
      <div className="relative flex items-center gap-2 sm:gap-3 text-xs sm:text-sm">
        <span className="text-[#dfab43] text-sm sm:text-base">⚡</span>
        <span className="text-[#9ca3af] font-medium tracking-wide">Launch Offer:</span>
        <span className="text-white font-bold">₹497</span>
        <span className="text-[#4a5568]">—</span>
        <span className="text-[#9ca3af] font-medium">Ends in</span>
        <div className="inline-flex items-center gap-0.5 font-mono font-bold text-[#dfab43] tracking-wider">
          <span className="bg-[#dfab43]/10 px-1.5 py-0.5 rounded text-xs sm:text-sm">{String(h).padStart(2, '0')}</span>
          <span className="text-[#4a5568]">:</span>
          <span className="bg-[#dfab43]/10 px-1.5 py-0.5 rounded text-xs sm:text-sm">{String(m).padStart(2, '0')}</span>
          <span className="text-[#4a5568]">:</span>
          <span className="bg-[#dfab43]/10 px-1.5 py-0.5 rounded text-xs sm:text-sm">{String(s).padStart(2, '0')}</span>
        </div>
      </div>
    </div>
  );
};
