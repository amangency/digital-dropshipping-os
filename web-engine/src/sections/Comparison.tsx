import React from 'react';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { Button, StarRating } from '../components/ui';
import { TrustBadges } from '../components/TrustBadges';
import { Download } from 'lucide-react';
import { FadeInSection } from '../components/FadeInSection';

export const Comparison = () => {
  return (
    <section className="bg-[#15212E] text-white py-16 px-5 md:px-12">
      <FadeInSection className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 md:mb-12 leading-tight">
          From <span className="text-[#dfab43]">"What Do I Pack?"</span> to <span className="text-[#dfab43]">"I've Got This."</span>
        </h2>
        
        <BeforeAfterSlider 
          beforeImage="/images/comparison-before.webp"
          afterImage="/images/comparison-after.webp"
        />

        <div className="mt-14 md:mt-16 max-w-3xl mx-auto px-4 md:px-0">
          <p className="text-xl md:text-2xl font-medium mb-5 leading-relaxed text-white/95">
            Say goodbye to stressful mornings, repeated tiffin ideas, and the guilt of relying on junk food.
          </p>
          <p className="text-base md:text-lg text-[#c5cdd6] mb-10 leading-relaxed">
            With 6 simple guides, you'll always have fresh, nutritious ideas ready — making every tiffin easier to plan and every morning easier to manage.
          </p>
          
          <div className="w-full max-w-md mx-auto">
            <Button to="/checkout" variant="primary" className="w-full flex items-center justify-center gap-2 md:gap-3 py-3 md:py-5 text-base md:text-xl h-auto whitespace-normal text-center leading-tight">
              <Download className="w-4 h-4 md:w-5 md:h-5" />
              <span>Download & Relax</span>
            </Button>
            <div className="text-gray-400 mt-2">
              <StarRating count={5} text="4.9/5 based on 2,143+ happy moms" />
            </div>
            <TrustBadges variant="dark" />
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};
