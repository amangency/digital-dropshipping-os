import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui';
import { FadeInSection } from '../components/FadeInSection';

const features = [
  {
    title: "1. Healthy Tiffin Ideas for Indian Kids",
    points: [
      "45+ lunchbox recipes that are tasty and good for health",
      "All Indian ingredients — no fancy items.",
      "Great for picky eaters",
      "Easy for veg families & seasonal foods",
      "Nutrition notes with each recipe"
    ],
    buttonText: "Grab the Kid-Approved Tiffin Recipe Pack Now",
    images: [
      "/images/feature-1.webp",
      "/images/feature-shared.webp"
    ]
  },
  {
    title: "2. Immunity-Boosting Rasoi Remedies (Age 2–12)",
    points: [
      "Haldi, saunf, ajwain & more — simple home remedies",
      "Cough, cold, low energy, digestion = all covered",
      "Safe, easy & nani-style care daily"
    ],
    buttonText: "Unlock the Nani-Approved Immunity Secrets Now",
    images: [
      "/images/feature-2.webp",
      "/images/feature-shared.webp"
    ]
  },
  {
    title: "3. 15-Min Tiffin Hacks for Busy Mornings",
    points: [
      "Use leftovers smartly",
      "22+ fast recipes in under 15 mins",
      "For working moms & school chaos days"
    ],
    buttonText: "Grab These 15-Min Tiffin Hacks That Save Your Mornings",
    images: [
      "/images/feature-3.webp",
      "/images/feature-shared.webp"
    ]
  },
  {
    title: "4. Printable Grocery List (1 Month Plan)",
    points: [
      "Just print or save on phone",
      "No more “What should I buy?” moments",
      "Follows the full 4-week tiffin plan"
    ],
    buttonText: "Get the 1-Click Grocery List Every Mom Needs",
    images: [
      "/images/feature-5.webp",
      "/images/feature-shared.webp"
    ]
  },
  {
    title: "5. Easy Homemade Health Drinks for Kids",
    points: [
      "Amla, tulsi, jaggery, curd = yummy drinks",
      "Better than protein powders or sugary drinks",
      "Seasonal immunity + fussy kids love them"
    ],
    buttonText: "Unlock Natural Immunity with These Rasoi-Style Drinks",
    images: [
      "/images/feature-4.webp",
      "/images/feature-shared.webp"
    ]
  },
  {
    title: "6. 30-Min Weekend Tiffin Prep Guide",
    points: [
      "Plan once, save 60 mins daily",
      "Roti rolls, chutneys, snacks — batch cooking tips",
      "For moms who hate early mornings"
    ],
    buttonText: "Steal This Weekend Prep Guide & Win Every Morning",
    images: [
      "/images/feature-6.webp",
      "/images/feature-shared.webp"
    ]
  }
];

const FeatureRow = ({ feature, index }: any) => {
  const isEven = index % 2 === 0;

  return (
    <FadeInSection className={`flex flex-col-reverse gap-8 md:gap-12 lg:gap-24 mb-20 md:mb-32 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center`}>
      <div className="flex-1 w-full">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-8 text-gray-900 leading-tight">
          {feature.title}
        </h3>
        <div className="space-y-3 md:space-y-5 mb-6 md:mb-10">
          {feature.points.map((point: string, i: number) => (
            <div key={i} className="flex items-start gap-3 md:gap-4">
              <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-[#FF6F00] shrink-0 mt-0.5" />
              <p className="text-base md:text-lg text-gray-700 font-medium">{point}</p>
            </div>
          ))}
        </div>
        <Button to="/checkout" variant="primary" className="w-full md:w-auto text-sm sm:text-base px-4 py-3 sm:py-4 md:px-6 h-auto whitespace-normal text-center leading-tight">
          {feature.buttonText}
        </Button>
      </div>

      <div className="flex-1 w-full relative flex justify-center px-4 sm:px-12">
        <div className="relative w-full max-w-[260px] sm:max-w-sm mx-auto">
          <img 
            loading="lazy"
            decoding="async"
            src={feature.images[0]} 
            alt={feature.title} 
            width="400"
            height="400"
            className="w-full h-auto rounded-2xl sm:rounded-3xl shadow-2xl z-10 relative block"
          />
          <img 
            loading="lazy"
            decoding="async"
            src={feature.images[1]} 
            alt="Badge" 
            width="400"
            height="400"
            className="absolute -bottom-8 -left-8 sm:-bottom-12 sm:-left-12 md:-bottom-16 md:-left-20 w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 z-20 max-w-none drop-shadow-xl"
          />
        </div>
      </div>
    </FadeInSection>
  );
};

export const BundleFeatures = () => {
  return (
    <section className="bg-[#F8F9FA] text-black py-16 md:py-24 px-5 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <FadeInSection className="text-center mb-12 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold px-2">
            Here’s everything you get inside this life-saving tiffin bundle 👇
          </h2>
        </FadeInSection>
        
        {features.map((feature, index) => (
          <FeatureRow key={index} feature={feature} index={index} />
        ))}
      </div>
    </section>
  );
};
