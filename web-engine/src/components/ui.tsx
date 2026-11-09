import React from 'react';
import { Star, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackPixelEvent } from '../utils/pixel';

export const StarRating = ({ count = 5, text }: { count?: number; text?: string }) => (
  <div className="flex flex-col items-center justify-center space-y-2 mt-4">
    <div className="flex space-x-1">
      {[...Array(count)].map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
    {text && <p className="text-sm font-medium text-center">{text}</p>}
  </div>
);

export const Button = ({ children, onClick, variant = 'primary', className = '', to }: any) => {
  const baseStyle = "inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-full shadow-lg hover:-translate-y-1";
  const variants = {
    primary: "bg-[#dfab43] text-white hover:bg-black",
    secondary: "bg-white text-black hover:bg-gray-100",
    dark: "bg-black text-white hover:bg-[#dfab43]",
    accent: "bg-[#FF6C4F] text-white hover:bg-[#e05b41]",
  };
  
  const combinedClassName = `${baseStyle} ${variants[variant as keyof typeof variants]} ${className || 'px-8 py-4 text-lg'}`;

  const handleClick = (e: any) => {
    if (to === '/checkout') {
      trackPixelEvent('AddToCart', { content_name: 'Tiffin Bundle', value: 497, currency: 'INR' });
    }
    if (onClick) onClick(e);
  };

  if (to) {
    return (
      <Link to={to} className={combinedClassName} onClick={handleClick}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClassName} onClick={onClick}>
      {children}
    </button>
  );
};

export const AccordionItem = ({ title, content, isOpen, onClick }: any) => {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden mb-4 bg-white shadow-sm">
      <button 
        className={`flex justify-between items-center w-full px-6 py-4 text-left font-semibold transition-colors ${isOpen ? 'bg-[#F3F4F6] text-black' : 'bg-white text-gray-800 hover:bg-gray-50'}`}
        onClick={onClick}
      >
        <span className="text-lg">{title}</span>
        {isOpen ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
      </button>
      <div className={`accordion-content ${isOpen ? 'is-open' : ''}`}>
        <div className="px-6 py-5 text-gray-600 leading-relaxed border-t border-gray-100 bg-white">
          {content}
        </div>
      </div>
    </div>
  );
};
