import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const AboutUsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">About Us</h1>
        <div className="prose prose-orange max-w-none text-gray-700 space-y-4">
          <p>Welcome to our community of smart, busy Indian moms!</p>
          <p>We know the morning rush. The panic of "what to pack for tiffin today?" The guilt of sending half-eaten lunches back home, and the constant struggle to balance your kids' health with your own well-being.</p>
          <p>That's exactly why we created the <strong>Tiffin SuperKit</strong> and the <strong>The Fussy Eater Fix Bundle</strong>.</p>
          <p>Our mission is simple: To give moms practical, 15-minute solutions that actually work in a real Indian kitchen. No fancy ingredients, no gym memberships—just traditional wisdom, smart hacks, and a lot of love.</p>
          <p>Join over 2,143+ happy moms who have reclaimed their mornings and their health with our guides!</p>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-100">
          <Link to="/" className="text-[#FF6F00] hover:text-orange-700 font-medium">
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};
