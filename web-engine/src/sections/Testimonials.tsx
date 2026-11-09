import React from 'react';
import { Star } from 'lucide-react';
import { Button, StarRating } from '../components/ui';
import { TrustBadges } from '../components/TrustBadges';
import { FadeInSection } from '../components/FadeInSection';

const testimonials = [
  {
    name: "Pooja, Working Mom of 2, Mumbai",
    text: "I used to send biscuits and feel guilty. Now my son loves his lunchbox and I feel proud!",
    image: "/images/testimonial-1.webp"
  },
  {
    name: "Neha, Homemaker, Ahmedabad",
    text: "The rasoi remedies really helped! My daughter hasn't fallen sick all month.",
    image: "/images/testimonial-2.webp"
  },
  {
    name: "Meenal, Teacher & Mom, Delhi",
    text: "I finally stopped buying protein powders. The homemade health drinks work like magic!",
    image: "/images/testimonial-3.webp"
  },
  {
    name: "Rashmi, Mom of a 6-year-old, Bangalore",
    text: "Even my picky eater finished his tiffin for 5 days in a row",
    image: "/images/testimonial-4.webp"
  },
  {
    name: "Swati, Part-time working mom, Jaipur",
    text: "The grocery list and prep plan saved me so much mental load. I finally feel in control!",
    image: "/images/testimonial-5.webp"
  },
  {
    name: "Sneha, Full-time Mom of 2, Lucknow",
    text: "This bundle feels like having a nutritionist and a nani by my side — every single day.",
    image: "/images/testimonial-6.webp"
  }
];

export const Testimonials = () => {
  return (
    <section className="bg-[#15212E] text-white py-16 px-6 md:px-12 lg:px-24">
      <FadeInSection className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className="relative inline-block">
            What Real Moms Are Saying
            <svg className="absolute w-full h-4 -bottom-2 left-0 text-[#dfab43]" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent"/></svg>
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white/5 rounded-2xl border border-white/10"
            >
              <img loading="lazy" src={t.image} alt={t.name} width="80" height="80" className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-[#dfab43]" />
              <h3 className="font-semibold text-lg mb-2">{t.name}</h3>
              <p className="text-[#c5cdd6] mb-4 flex-grow italic">"{t.text}"</p>
              <div className="flex space-x-1 mt-auto">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center">
          <div className="w-full max-w-md px-4 md:px-0">
            <Button to="/checkout" variant="primary" className="w-full flex items-center justify-center gap-2 md:gap-3 py-3 md:py-5 text-base md:text-xl h-auto whitespace-normal text-center leading-tight">
              <span>Your Shortcut to Easy, Healthy Meals</span>
            </Button>
            <StarRating count={5} text="4.9/5 based on 2,143+ happy moms" />
            <TrustBadges variant="dark" />
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};
