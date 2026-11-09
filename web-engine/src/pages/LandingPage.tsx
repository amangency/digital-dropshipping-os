import React from 'react';
import { CountdownBanner } from '../components/CountdownBanner';
import { Hero } from '../sections/Hero';
import { TargetAudience } from '../sections/TargetAudience';
import { Comparison } from '../sections/Comparison';
import { BundleFeatures } from '../sections/BundleFeatures';
import { Testimonials } from '../sections/Testimonials';
import { FAQ } from '../sections/FAQ';
import { Pricing } from '../sections/Pricing';
import { Footer } from '../sections/Footer';
import { ArchDivider } from '../components/ArchDivider';

export const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#dfab43] selection:text-black overflow-x-hidden">
      <CountdownBanner />
      
      <main>
      {/* 1. Hero (#15212E) ➔ Target Audience (White) */}
      <Hero />
      <ArchDivider 
        type="dark-to-light" 
        lightBg="#ffffff" 
        badgeHighlight="50+" 
        badgeText={`Quick\nTiffin Hacks`} 
        badgeIcon="✨" 
      />

      {/* 2. Target Audience (White) ➔ Comparison (#15212E) */}
      <TargetAudience />
      <ArchDivider 
        type="light-to-dark" 
        lightBg="#ffffff" 
        badgeHighlight="15 Min" 
        badgeText={`Daily\nRoutine`} 
        badgeIcon="⏱️" 
      />

      {/* 3. Comparison / Video (#15212E) ➔ Bundle Features (#F8F9FA) */}
      <Comparison />
      <ArchDivider 
        type="dark-to-light" 
        lightBg="#F8F9FA" 
        badgeHighlight="6-in-1" 
        badgeText={`Complete\nBundle`} 
        badgeIcon="📦" 
      />

      {/* 4. Bundle Features 6 Books (#F8F9FA) ➔ Testimonials (#15212E) */}
      <BundleFeatures />
      <ArchDivider 
        type="light-to-dark" 
        lightBg="#F8F9FA" 
        badgeHighlight="4.9 ★" 
        badgeText={`2,140+\nHappy Moms`} 
        badgeIcon="❤️" 
      />

      {/* 5. Testimonials (#15212E) ➔ FAQ (White) */}
      <Testimonials />
      <ArchDivider 
        type="dark-to-light" 
        lightBg="#ffffff" 
        badgeHighlight="Got Doubts?" 
        badgeText={`Quick\nAnswers`} 
        badgeIcon="💬" 
      />

      {/* 6. FAQ (White) ➔ Pricing (#15212E) */}
      <FAQ />
      <ArchDivider 
        type="light-to-dark" 
        lightBg="#ffffff" 
        badgeHighlight="100% Secure" 
        badgeText={`Lifetime\nAccess`} 
        badgeIcon="🔒" 
      />

      {/* 7. Pricing (#15212E) & Footer */}
      <Pricing />
      </main>
      <Footer />
    </div>
  );
};
