#!/usr/bin/env node

/**
 * ==============================================================================
 * ENVIRONMENT & INTEGRATION DIAGNOSTIC CHECKER
 * ==============================================================================
 * Verifies your .env configuration, API keys, and service readiness
 * before deploying your sales funnel to production.
 *
 * Usage:
 *   node verify-env.cjs
 * ==============================================================================
 */

const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

console.log('\n==================================================');
console.log('🔍 DIGITAL DROPSHIPPING OS — INTEGRATION DIAGNOSTIC');
console.log('==================================================\n');

const envPath = path.resolve(__dirname, '.env');

if (!fs.existsSync(envPath)) {
  console.error('❌ ERROR: .env file not found in web-engine directory!');
  console.log('👉 Run: cp .env.example .env and fill in your keys.\n');
  process.exit(1);
}

const env = dotenv.parse(fs.readFileSync(envPath));

let warnings = 0;
let errors = 0;

function check(title, condition, errorMsg, isWarning = false) {
  if (condition) {
    console.log(`✅ [OK]      ${title}`);
  } else {
    if (isWarning) {
      warnings++;
      console.log(`⚠️  [WARN]    ${title}: ${errorMsg}`);
    } else {
      errors++;
      console.log(`❌ [FAIL]    ${title}: ${errorMsg}`);
    }
  }
}

// 1. Payment Gateway: Razorpay
console.log('--- 1. PAYMENT GATEWAY (RAZORPAY) ---');
check('Razorpay Key ID', !!env.RAZORPAY_KEY_ID && (env.RAZORPAY_KEY_ID.startsWith('rzp_test_') || env.RAZORPAY_KEY_ID.startsWith('rzp_live_')), 'Must start with rzp_live_ or rzp_test_');
check('Razorpay Key Secret', !!env.RAZORPAY_KEY_SECRET && env.RAZORPAY_KEY_SECRET.length >= 10, 'Must be valid secret string');
check('Razorpay Webhook Secret', !!env.RAZORPAY_WEBHOOK_SECRET, 'Mandatory for capturing background UPI payments (28% of Indian traffic)', true);

// 2. Tracking: Meta Pixel & Conversions API
console.log('\n--- 2. CONVERSION TRACKING (META PIXEL & CAPI) ---');
check('Meta Pixel ID', !!env.FB_PIXEL_ID && /^\d+$/.test(env.FB_PIXEL_ID), 'Must be numeric string from Events Manager');
check('Client Pixel ID', !!env.VITE_FB_PIXEL_ID && /^\d+$/.test(env.VITE_FB_PIXEL_ID), 'Must match FB_PIXEL_ID for client tracking');
check('Conversions API Token', !!env.FB_ACCESS_TOKEN && env.FB_ACCESS_TOKEN.length > 20, 'Required for server-side CAPI event deduplication', true);

// 3. Email Fulfillment: Resend
console.log('\n--- 3. TRANSACTIONAL EMAIL (RESEND) ---');
check('Resend API Key', !!env.RESEND_API_KEY && env.RESEND_API_KEY.startsWith('re_'), 'Must start with re_ from resend.com');
const isDomainEmail = !!env.FROM_EMAIL && !env.FROM_EMAIL.includes('@gmail.com') && !env.FROM_EMAIL.includes('@yahoo.com') && !env.FROM_EMAIL.includes('@hotmail.com');
check('Verified Sender Domain', isDomainEmail, 'Resend requires a custom verified domain email (e.g. orders@yourdomain.com), public email providers are rejected', true);

// 4. Digital Asset Links
console.log('\n--- 4. DIGITAL PRODUCT ASSET LINKS ---');
check('Core Product Link', !!env.LINK_BASE_BUNDLE && !env.LINK_BASE_BUNDLE.includes('YOUR_BASE_BUNDLE_LINK'), 'Replace placeholder with your secure Google Drive / cloud link', true);
check('Order Bump 1 Link', !!env.LINK_CORE_BUMP1 && !env.LINK_CORE_BUMP1.includes('YOUR_CORE_BUMP1_LINK'), 'Configure link for bump 1 buyers', true);
check('Order Bump 2 Link', !!env.LINK_CORE_BUMP2 && !env.LINK_CORE_BUMP2.includes('YOUR_CORE_BUMP2_LINK'), 'Configure link for bump 2 buyers', true);
check('VIP Upsell Link', !!env.LINK_UPSELL_BUNDLE && !env.LINK_UPSELL_BUNDLE.includes('YOUR_UPSELL_BUNDLE_LINK'), 'Configure link for upsell buyers', true);

console.log('\n==================================================');
if (errors === 0 && warnings === 0) {
  console.log('🎉 ALL CHECKS PASSED: Your sales engine is 100% production ready!');
} else if (errors === 0) {
  console.log(`⚠️  SYSTEM READY WITH ${warnings} WARNING(S): Review optional warnings above.`);
} else {
  console.log(`🛑 FOUND ${errors} CRITICAL ERROR(S) AND ${warnings} WARNING(S): Fix above items before launching paid ads.`);
}
console.log('==================================================\n');
