import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FadeInSection } from '../components/FadeInSection';

const faqs = [
  {
    q: "What if my child is a super fussy eater?",
    a: "That's exactly who this bundle is made for! The recipes are kid-tested and picky-eater-approved — using flavors they already know and love."
  },
  {
    q: "Are the ingredients expensive or hard to find?",
    a: "Not at all! Every recipe and remedy uses local, seasonal, affordable ingredients — no fancy superfoods or imported stuff."
  },
  {
    q: "I'm a working mom — will I even have time to use this?",
    a: "Yes! The bundle includes 15-min hacks, weekend prep guides, and done-for-you grocery lists — so you save time every single day."
  },
  {
    q: "Is this for vegetarian families?",
    a: "Absolutely. All recipes are 100% vegetarian and follow typical Indian household habits — no eggs, no meat, no confusion."
  },
  {
    q: "What age group is this for?",
    a: "The content is perfect for kids aged 2–12 — ideal for preschool to pre-teens."
  },
  {
    q: "Is it a physical product or digital?",
    a: "This is a digital bundle — you'll get instant access via email. You can read it on your phone or even print it if you like."
  },
  {
    q: "How will I receive the bundle?",
    a: "Right after your payment, you'll get an instant email with download links to all 6 eBooks. You can read them on your phone, laptop, or tablet — or even print them out if you prefer."
  }
];

const FAQItem = ({ faq, index, isOpen, onClick }: { faq: typeof faqs[0]; index: number; isOpen: boolean; onClick: () => void }) => {
  return (
    <div 
      className={`group rounded-2xl border transition-all duration-300 ${
        isOpen 
          ? 'bg-[#f0f7ff] border-[#dfab43]/30 shadow-md' 
          : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-sm'
      }`}
    >
      <button 
        className="flex justify-between items-center w-full px-5 sm:px-7 py-5 sm:py-6 text-left gap-4"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className={`text-base sm:text-lg font-semibold leading-snug transition-colors ${
          isOpen ? 'text-[#15212E]' : 'text-gray-800'
        }`}>
          {faq.q}
        </span>
        <span className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
          isOpen 
            ? 'bg-[#dfab43] text-white rotate-180' 
            : 'bg-gray-100 text-gray-500 group-hover:bg-gray-200'
        }`}>
          <ChevronDown className="w-4 h-4" />
        </span>
      </button>
      <div className={`accordion-content ${isOpen ? 'is-open' : ''}`}>
        <div className="px-5 sm:px-7 pb-6 text-gray-600 leading-relaxed text-[15px] sm:text-base">
          {faq.a}
        </div>
      </div>
    </div>
  );
};

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-16 md:py-24 px-5 md:px-12">
      <FadeInSection className="max-w-3xl mx-auto">
        {/* Premium heading with subheading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
            Still Have Questions?
          </h2>
          <p className="text-base md:text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
            Here's everything you need to know before getting your bundle.
          </p>
        </div>
        
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, i) => (
            <FAQItem 
              key={i}
              faq={faq}
              index={i}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </FadeInSection>
    </section>
  );
};
