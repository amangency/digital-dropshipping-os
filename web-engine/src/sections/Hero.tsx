import React from 'react';
import { StarRating, Button } from '../components/ui';
import { TrustBadges } from '../components/TrustBadges';
import { ArrowDownToLine } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="bg-[#15212E] text-white py-8 sm:py-10 md:py-16 px-2.5 sm:px-6 md:px-12 lg:px-24 flex flex-col items-center justify-center text-center relative overflow-hidden">
      <h3 className="text-xs sm:text-sm md:text-base text-[#c5cdd6] uppercase tracking-wider font-semibold mb-3 md:mb-5 w-full sm:max-w-2xl mx-auto leading-relaxed px-0">
        Tired of packing a tiffin with love, only to see it come back half-eaten?
      </h3>
      
      <div className="relative w-full sm:max-w-4xl mx-auto">
        <h1 className="text-[30px] sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.18] md:leading-tight mb-4 md:mb-7 px-0 w-full tracking-tight">
          Turn Every Tiffin Into a <span className="text-[#dfab43] relative inline-block">
            Delicious Meal
            <svg className="absolute w-full h-2.5 md:h-4 -bottom-1 left-0 text-[#dfab43]" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent"/></svg>
          </span> Your Child Is Excited to Finish!
        </h1>
      </div>

      <p className="text-[15px] sm:text-lg md:text-xl text-[#d1d5db] w-full sm:max-w-3xl mb-6 md:mb-12 px-0 leading-relaxed font-normal mx-auto">
        Discover 50+ practical, nutritious, and kid-friendly tiffin ideas that bring more variety to your child's meals—without adding more stress to your busy mornings.
      </p>

      <div className="w-full max-w-4xl flex flex-col items-center">
        <img fetchPriority="high" decoding="async"
          src="/images/tiffin-bundle.webp" 
          alt="Mini Wellness Tiffin Bundle — 6 eBooks with 50+ kid-friendly Indian tiffin recipes, immunity drinks, and meal prep guides" 
          width="1400"
          height="781"
          className="w-full max-w-[100%] sm:max-w-xl md:max-w-2xl lg:max-w-3xl h-auto drop-shadow-2xl rounded-lg mb-6 sm:mb-6 md:mb-10"
        />
        <div className="w-full max-w-md px-1 sm:px-4 md:px-0">
          <Button to="/checkout" variant="primary" className="w-full flex items-center justify-center gap-2 md:gap-3 py-3 md:py-5 text-base md:text-xl h-auto whitespace-normal text-center leading-tight">
            <span>Fix Tiffin Trouble for ₹497</span>
            <ArrowDownToLine className="w-4 h-4 md:w-5 md:h-5" />
          </Button>
          <StarRating count={5} text="4.9/5 based on 2,143+ happy moms" />
          <TrustBadges variant="dark" />
        </div>
      </div>
    </section>
  );
};
