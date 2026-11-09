import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui';
import { FadeInSection } from '../components/FadeInSection';

const pains = [
  "Are you tired of your child bringing back half-eaten lunch?",
  "Do you wish they ate more fruits, veggies, and healthy food — happily?",
  "Do you pack tiffins every morning and run out of ideas?",
  "Do you want easy recipes that are tasty and boost immunity?",
  "Do you wish someone just gave you a ready-made grocery list for tiffins?",
  "Have you ever wanted a simple guide that makes tiffin packing stress-free?"
];

export const TargetAudience = () => {
  return (
    <section className="bg-white text-black pt-8 sm:pt-14 pb-14 md:pb-20 px-4 sm:px-6 md:px-12 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10 md:gap-12">
        <div className="flex-1 w-full">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-10 leading-tight">
            <span className="relative inline-block">
              Is This You, Mom?
              <svg className="absolute w-full h-3 md:h-4 -bottom-1 left-0 text-[#FF6F00]" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent"/></svg>
            </span>
          </h2>
          
          <div className="space-y-4 md:space-y-6 mb-8 md:mb-10">
            {pains.map((pain, i) => (
              <div 
                key={i}
                className="flex items-start gap-3 md:gap-4"
              >
                <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-[#FF6F00] shrink-0 mt-1" />
                <p className="text-base md:text-lg lg:text-xl font-medium text-gray-800">{pain}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 p-5 md:p-6 rounded-2xl border-l-4 border-[#FF6F00] mb-8">
            <p className="text-base sm:text-lg md:text-xl font-bold text-black">
              If you said YES to even one… this bundle is your shortcut to stress-free mornings!
            </p>
          </div>

          <Button to="/checkout" variant="dark" className="w-full md:w-auto px-8 md:px-10 py-4 md:py-5 text-lg md:text-xl h-auto whitespace-normal text-center leading-tight">
            Download Now for ₹497
          </Button>
        </div>

        <FadeInSection className="flex-1 w-full relative">
          <img 
            loading="lazy"
            src="/images/mom-lifestyle.webp"
            alt="Stressed Mom"
            width="600"
            height="600"
            className="w-full h-auto max-h-[600px] object-cover rounded-3xl shadow-xl"
          />
        </FadeInSection>
      </div>
    </section>
  );
};
