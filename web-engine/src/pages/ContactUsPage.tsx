import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Clock } from 'lucide-react';

export const ContactUsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h1>
        <div className="prose prose-orange max-w-none text-gray-700 mb-8">
          <p>We're here to help! Whether you have a question about your recent bundle purchase, need help downloading your files, or just want to share your success story, we'd love to hear from you.</p>
        </div>
        
        <div className="bg-orange-50 rounded-xl p-6 mb-8 border border-orange-100 space-y-4">
          <div className="flex items-start gap-4">
            <Mail className="w-6 h-6 text-[#FF6F00] shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-gray-900">Email Support</h3>
              <p className="text-gray-600 font-medium">support@yourdomain.com</p>
              <p className="text-sm text-gray-500 mt-1">Drop us an email and we'll get back to you within 24-48 hours.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 pt-4 border-t border-orange-200/50">
            <Clock className="w-6 h-6 text-[#FF6F00] shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-gray-900">Business Hours</h3>
              <p className="text-gray-600">Monday - Saturday: 10:00 AM to 6:00 PM (IST)</p>
            </div>
          </div>
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
