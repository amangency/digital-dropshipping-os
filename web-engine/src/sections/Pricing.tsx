import React from 'react';
import { Button, StarRating } from '../components/ui';
import { TrustBadges } from '../components/TrustBadges';
import { ArrowRight } from 'lucide-react';
import { FadeInSection } from '../components/FadeInSection';

export const Pricing = () => {
  return (
    <section className="bg-[#15212E] text-white py-16 md:py-24 px-4 sm:px-5 md:px-12 relative overflow-hidden">
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <FadeInSection className="relative bg-gradient-to-b from-white/[0.07] to-white/[0.03] backdrop-blur-sm border border-white/10 p-6 sm:p-8 md:p-16 rounded-3xl shadow-2xl shadow-black/20">
          
          {/* Premium corner accents with subtle 3D gold glow */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#dfab43]/40 rounded-tl-3xl pointer-events-none" style={{ filter: 'drop-shadow(0 0 6px rgba(223,171,67,0.15))' }} />
          <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#dfab43]/40 rounded-tr-3xl pointer-events-none" style={{ filter: 'drop-shadow(0 0 6px rgba(223,171,67,0.15))' }} />
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-[#dfab43]/40 rounded-bl-3xl pointer-events-none" style={{ filter: 'drop-shadow(0 0 6px rgba(223,171,67,0.15))' }} />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#dfab43]/40 rounded-br-3xl pointer-events-none" style={{ filter: 'drop-shadow(0 0 6px rgba(223,171,67,0.15))' }} />

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-white drop-shadow-sm leading-tight">
            Your Mornings Don't Have to <br className="hidden md:block"/>Feel This Hard.
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 md:mb-10 font-medium leading-relaxed">
            Get 6 practical guides filled with simple, nutritious tiffin ideas — so you always know what to pack and can finally say goodbye to last-minute stress.
          </p>

          <div className="flex justify-center mb-8 md:mb-10 relative -mx-4 sm:mx-0">
            <img loading="lazy" decoding="async" src="/images/tiffin-bundle.webp" alt="Mini Wellness Tiffin Bundle — 6 eBooks included" width="1400" height="781" className="w-full max-w-full sm:max-w-sm md:max-w-md lg:max-w-lg h-auto drop-shadow-2xl scale-110 sm:scale-100" />
          </div>

          {/* Price block with premium styling */}
          <div className="mb-8 md:mb-10 w-full max-w-md mx-auto">
            <p className="text-lg md:text-xl text-gray-400 line-through decoration-red-500/70 decoration-2 mb-1">Total Value: ₹2,104</p>
            <p className="text-[#dfab43] text-xl md:text-2xl font-bold mb-6 leading-snug">
              Today, Get Everything for Just <span className="text-3xl md:text-4xl">₹497</span>
            </p>
            
            <Button to="/checkout" variant="primary" className="w-full flex items-center justify-center gap-2 md:gap-3 py-4 md:py-5 text-base md:text-xl shadow-[#dfab43]/40 shadow-2xl h-auto whitespace-normal text-center leading-tight uppercase tracking-wider font-bold">
              <span>Get Instant Access</span>
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          <StarRating count={5} text="4.9/5 based on 2,143+ happy moms" />
          <TrustBadges variant="dark" type="security" />
        </FadeInSection>
      </div>
    </section>
  );
};
