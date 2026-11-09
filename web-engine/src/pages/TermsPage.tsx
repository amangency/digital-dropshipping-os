import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const TermsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms of Service</h1>
        <div className="prose prose-orange max-w-none text-gray-700 space-y-4">
          <p><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>
          <p>By purchasing the Tiffin SuperKit, Fussy Eater Fix Bundle, or any other digital products from our website, you agree to the following terms and conditions.</p>
          
          <h3 className="text-xl font-bold text-gray-900 mt-6">1. Digital Products and Delivery</h3>
          <p>All our products are digital downloads (PDFs, planners, guides). Upon successful payment, you will instantly receive access to your purchased files via a Google Drive link on the Thank You page, and you will also receive an email with the details.</p>
          
          <h3 className="text-xl font-bold text-gray-900 mt-6">2. Personal Use Only (Copyright)</h3>
          <p>The content provided in our bundles is strictly for your personal use only. You may not resell, redistribute, reproduce, or share these digital files with third parties. All materials are copyrighted and protected by law.</p>
          
          <h3 className="text-xl font-bold text-gray-900 mt-6">3. Medical Disclaimer</h3>
          <p>The recipes and wellness guides provided are for general informational purposes. They are not intended as a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or qualified health provider with any questions regarding a medical condition or dietary requirements.</p>

          <h3 className="text-xl font-bold text-gray-900 mt-6">4. Pricing and Availability</h3>
          <p>Prices for our products are subject to change without notice. We reserve the right at any time to modify or discontinue any offering without notice at any time.</p>
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
