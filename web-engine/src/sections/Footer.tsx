import React from 'react';
import { Facebook, Instagram, Mail, ArrowRight } from 'lucide-react';
import { FadeInSection } from '../components/FadeInSection';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-gray-800">
      <FadeInSection className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <img loading="lazy" decoding="async" src="/logo.jpg" alt="Mini Wellness" width="80" height="80" className="w-16 md:w-20 h-auto rounded-2xl mb-6 shadow-md" />
            <p className="text-[#9ca3af] mb-6 font-medium">Get Recipes, Tips & Tiffin Hacks Straight to Your Inbox</p>
            <form className="flex border-b border-gray-600 pb-2 max-w-sm" onSubmit={(e) => e.preventDefault()}>
              <Mail className="w-5 h-5 text-[#9ca3af] mr-3 mt-1" />
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-transparent w-full focus:outline-none text-white placeholder-gray-500"
                required
              />
              <button type="submit" className="text-[#dfab43] font-semibold hover:text-white transition-colors flex items-center gap-1">
                Sign up <ArrowRight className="w-4 h-4" />
              </button>
            </form>
            <p className="text-[#9ca3af] mt-6 text-sm">Email: support@yourdomain.com</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-6 uppercase tracking-wider text-gray-300">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-[#9ca3af] hover:text-[#dfab43] transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-[#9ca3af] hover:text-[#dfab43] transition-colors">Contact Us</Link></li>
              <li><Link to="/refund" className="text-[#9ca3af] hover:text-[#dfab43] transition-colors">Refund Policy</Link></li>
              <li><Link to="/terms" className="text-[#9ca3af] hover:text-[#dfab43] transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-6 uppercase tracking-wider text-gray-300">Follow Us</h4>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/profile.php?id=61593256057528" target="_blank" rel="noopener noreferrer" aria-label="Follow Mini Wellness on Facebook" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#dfab43] hover:text-black transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/miniwellnessformoms/" target="_blank" rel="noopener noreferrer" aria-label="Follow Mini Wellness on Instagram" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#dfab43] hover:text-black transition-all">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center pt-8 border-t border-gray-800 text-sm text-[#9ca3af] flex flex-col md:flex-row items-center justify-between">
          <p>© {new Date().getFullYear()} Mini Wellness. All rights reserved.</p>
        </div>
      </FadeInSection>
    </footer>
  );
};
