/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import { LandingPage } from './pages/LandingPage';

// Only lazy-load secondary pages (not the landing page — it's the critical first view)
const CheckoutPage = lazy(() => import('./pages/CheckoutPage').then(module => ({ default: module.CheckoutPage })));
const UpsellPage = lazy(() => import('./pages/UpsellPage').then(module => ({ default: module.UpsellPage })));
const ThankYouPage = lazy(() => import('./pages/ThankYouPage').then(module => ({ default: module.ThankYouPage })));
const AboutUsPage = lazy(() => import('./pages/AboutUsPage').then(module => ({ default: module.AboutUsPage })));
const ContactUsPage = lazy(() => import('./pages/ContactUsPage').then(module => ({ default: module.ContactUsPage })));
const TermsPage = lazy(() => import('./pages/TermsPage').then(module => ({ default: module.TermsPage })));
const RefundPolicyPage = lazy(() => import('./pages/RefundPolicyPage').then(module => ({ default: module.RefundPolicyPage })));

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-gray-50"><div className="w-10 h-10 border-4 border-[#dfab43] border-t-transparent rounded-full animate-spin"></div></div>}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/upsell" element={<UpsellPage />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/refund" element={<RefundPolicyPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
