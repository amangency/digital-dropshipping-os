import React, { useEffect } from 'react';
import { CheckCircle2, Download, Mail, Star, MessageCircle } from 'lucide-react';
import { Button } from '../components/ui';
import { Link, useLocation } from 'react-router-dom';
import { trackPixelCustom } from '../utils/pixel';

export const ThankYouPage = () => {
  const location = useLocation();
  const { bump1, bump2, upsell1 } = location.state || { bump1: false, bump2: false, upsell1: false };

  useEffect(() => {
    // ── PRICING (LIVE) ──
    let totalValue = 497;
    if (bump1) totalValue += 149;
    if (bump2) totalValue += 197;
    if (upsell1) totalValue += 397;

    trackPixelCustom('ThankYouVisited', { currency: 'INR', value: totalValue });
  }, [bump1, bump2, upsell1]);

  let downloadLink = "https://drive.google.com/drive/folders/YOUR_BASE_BUNDLE_LINK";
  if (bump1 && bump2) {
    downloadLink = "https://drive.google.com/drive/folders/YOUR_CORE_BOTH_BUMPS_LINK";
  } else if (bump1) {
    downloadLink = "https://drive.google.com/drive/folders/YOUR_CORE_BUMP1_LINK";
  } else if (bump2) {
    downloadLink = "https://drive.google.com/drive/folders/YOUR_CORE_BUMP2_LINK";
  }

  const upsellDownloadLink = "https://drive.google.com/drive/folders/YOUR_UPSELL_BUNDLE_LINK";

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-xl w-full bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-12 text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-green-600" />
        </div>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Payment Successful!</h1>
        <p className="text-lg text-gray-600 mb-8">
          Thank you for your purchase. We've sent a confirmation email with your access links.
        </p>

        <div className="bg-orange-50 border border-orange-100 rounded-xl p-6 mb-8 text-left">
          <h3 className="font-bold text-gray-900 flex items-center gap-2 mb-2">
            <Mail className="w-5 h-5 text-[#dfab43]" />
            Check Your Inbox
          </h3>
          <p className="text-sm text-gray-700">
            You will receive an email shortly containing all the links to download your bundles.
          </p>
        </div>

        <div className="space-y-4">
          <div className="text-left mb-2">
            <h4 className="font-bold text-gray-900">Your Tiffin SuperKit:</h4>
          </div>
          <a href={downloadLink} target="_blank" rel="noopener noreferrer" className="w-full inline-block">
            <Button variant="primary" className="w-full flex items-center justify-center gap-2 py-4 text-lg">
              <Download className="w-5 h-5" />
              Access Tiffin Bundle
            </Button>
          </a>

          {upsell1 && (
            <div className="mt-8">
              <div className="text-left mb-2 mt-6">
                <h4 className="font-bold text-gray-900 flex items-center gap-2">
                  <Star className="w-5 h-5 text-[#dfab43]" fill="#dfab43"/>
                  Your Fussy Eater Fix Bundle:
                </h4>
              </div>
              <a href={upsellDownloadLink} target="_blank" rel="noopener noreferrer" className="w-full inline-block">
                <Button variant="dark" className="w-full flex items-center justify-center gap-2 py-4 text-lg">
                  <Download className="w-5 h-5" />
                  Access Fussy Eater Fix Bundle
                </Button>
              </a>
            </div>
          )}

          {/* WhatsApp Community Section */}
          <div className="mt-8 pt-8 border-t border-gray-100">
            <div className="bg-[#25D366]/10 border border-[#25D366]/20 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[#25D366]/30">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Join Our VIP Moms Community</h3>
              <p className="text-sm text-gray-600 mb-6">
                Get exclusive recipes, daily tips, and future updates directly on WhatsApp. 100% spam-free.
              </p>
              <a href="https://chat.whatsapp.com/K9zxXcfEPRyIHttEfsZERr?s=cl&p=a&mlu=4" target="_blank" rel="noopener noreferrer" className="w-full inline-block">
                <button className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-3 px-6 rounded-full transition-colors flex items-center justify-center gap-2 shadow-md">
                  <MessageCircle className="w-5 h-5" />
                  Join WhatsApp Group
                </button>
              </a>
            </div>
          </div>
          
          <div className="pt-6">
            <Link to="/" className="inline-block mt-4 text-gray-500 hover:text-gray-900 transition-colors font-medium">
              Return to Homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
