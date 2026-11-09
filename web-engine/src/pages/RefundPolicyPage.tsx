import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const RefundPolicyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Refund Policy</h1>
        <div className="prose prose-orange max-w-none text-gray-700 space-y-4">
          <p>We want you to be completely satisfied with your purchase of our Tiffin SuperKit and Wellness bundles.</p>
          
          <h3 className="text-xl font-bold text-gray-900 mt-6">7-Day Money-Back Guarantee</h3>
          <p>We proudly offer a 7-day, no-questions-asked money-back guarantee. If you use our guides for a week and feel they haven't made your mornings easier or healthier, simply reach out to us.</p>
          
          <h3 className="text-xl font-bold text-gray-900 mt-6">How to Request a Refund</h3>
          <p>To request a refund, follow these simple steps:</p>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Reply directly to your purchase receipt email OR email us at <strong>support@yourdomain.com</strong>.</li>
            <li>Include your order details (Name and Email used for purchase).</li>
            <li>Let us know you'd like a refund within 7 days of your purchase date.</li>
          </ol>

          <h3 className="text-xl font-bold text-gray-900 mt-6">Processing Time</h3>
          <p>Once your refund request is received, we will process it immediately. The credit will automatically be applied to your original method of payment within 5-7 business days, depending on your bank or payment gateway.</p>
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
