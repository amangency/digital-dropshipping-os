#!/usr/bin/env node

/**
 * ==============================================================================
 * MANUAL DIGITAL PRODUCT FULFILLMENT CLI
 * ==============================================================================
 * Utility script to manually deliver digital product bundles to customers
 * via the Resend transactional email API.
 *
 * Usage:
 *   node manual-fulfillment-cli.cjs <customer_email> [customer_name] [type: base|bump1|bump2|both|upsell]
 *
 * Examples:
 *   node manual-fulfillment-cli.cjs customer@example.com "Aman Sharma" base
 *   node manual-fulfillment-cli.cjs customer@example.com "Pooja Verma" both
 *   node manual-fulfillment-cli.cjs customer@example.com "Neha Patel" upsell
 * ==============================================================================
 */

const https = require('https');
const path = require('path');
const fs = require('fs');

// Attempt to load .env from parent or current directory
try {
  const dotenvPath = path.resolve(__dirname, '../web-engine/.env');
  if (fs.existsSync(dotenvPath)) {
    require('dotenv').config({ path: dotenvPath });
  } else {
    require('dotenv').config();
  }
} catch (e) {
  // dotenv optional if passed via env
}

// ── CONFIGURATION (FROM ENVIRONMENT) ─────────────────────────────────────────
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const FROM_EMAIL = process.env.FROM_EMAIL || 'Your Brand <orders@yourdomain.com>';
const REPLY_TO = process.env.REPLY_TO || 'support@yourdomain.com';
const BRAND_NAME = process.env.BRAND_NAME || 'Your Digital Store';

if (!RESEND_API_KEY) {
  console.error('\n❌ ERROR: RESEND_API_KEY environment variable is missing.');
  console.error('Please configure RESEND_API_KEY in your .env file or environment.\n');
  process.exit(1);
}

// ── ASSET DOWNLOAD LINKS ─────────────────────────────────────────────────────
const LINKS = {
  base: process.env.LINK_BASE_BUNDLE || 'https://drive.google.com/drive/folders/YOUR_BASE_BUNDLE_LINK',
  bump1: process.env.LINK_CORE_BUMP1 || 'https://drive.google.com/drive/folders/YOUR_CORE_BUMP1_LINK',
  bump2: process.env.LINK_CORE_BUMP2 || 'https://drive.google.com/drive/folders/YOUR_CORE_BUMP2_LINK',
  both: process.env.LINK_CORE_BOTH_BUMPS || 'https://drive.google.com/drive/folders/YOUR_CORE_BOTH_BUMPS_LINK',
  upsell: process.env.LINK_UPSELL_BUNDLE || 'https://drive.google.com/drive/folders/YOUR_UPSELL_BUNDLE_LINK'
};

// ── CLI PARSING ─────────────────────────────────────────────────────────────
const args = process.argv.slice(2);
const toEmail = args[0];
const customerName = args[1] || 'Valued Customer';
const orderType = (args[2] || 'base').toLowerCase();

if (!toEmail) {
  console.log(`
Usage:
  node manual-fulfillment-cli.cjs <customer_email> [customer_name] [type: base|bump1|bump2|both|upsell]
  `);
  process.exit(1);
}

const downloadLink = LINKS[orderType] || LINKS.base;

console.log('--------------------------------------------------');
console.log(`📦 DISPATCHING DIGITAL PRODUCT FULFILLMENT EMAIL`);
console.log(`To:          ${toEmail}`);
console.log(`Customer:    ${customerName}`);
console.log(`Order Type:  ${orderType.toUpperCase()}`);
console.log(`Vault Link:  ${downloadLink}`);
console.log('--------------------------------------------------');

// ── BUILD ORDER SUMMARY HTML ────────────────────────────────────────────────
let itemsHtml = `
  <div style="display: flex; align-items: flex-start; margin-bottom: 14px; padding-bottom: 12px; border-bottom: 1px dashed #e2e8f0;">
    <span style="font-size: 20px; margin-right: 12px;">📚</span>
    <div>
      <strong style="color: #1e293b; font-size: 15px;">Core Digital Bundle</strong><br>
      <span style="color: #64748b; font-size: 13px;">Full digital guides, recipe vault & morning routine system</span>
    </div>
  </div>
`;

if (orderType === 'bump1' || orderType === 'both' || orderType === 'upsell') {
  itemsHtml += `
    <div style="display: flex; align-items: flex-start; margin-bottom: 14px; padding-bottom: 12px; border-bottom: 1px dashed #e2e8f0;">
      <span style="font-size: 20px; margin-right: 12px;">🥗</span>
      <div>
        <strong style="color: #1e293b; font-size: 15px;">Order Bump 1: Nutrition & Meal Planner</strong><br>
        <span style="color: #64748b; font-size: 13px;">Weekly grocery checklist + smart prep cheatsheets</span>
      </div>
    </div>
  `;
}

if (orderType === 'bump2' || orderType === 'both' || orderType === 'upsell') {
  itemsHtml += `
    <div style="display: flex; align-items: flex-start; margin-bottom: 14px; padding-bottom: 12px; border-bottom: 1px dashed #e2e8f0;">
      <span style="font-size: 20px; margin-right: 12px;">🥤</span>
      <div>
        <strong style="color: #1e293b; font-size: 15px;">Order Bump 2: Immunity Boosters Toolkit</strong><br>
        <span style="color: #64748b; font-size: 13px;">Herbal teas, morning booster tonics & immune shields</span>
      </div>
    </div>
  `;
}

if (orderType === 'upsell') {
  itemsHtml += `
    <div style="display: flex; align-items: flex-start; margin-bottom: 14px; padding-bottom: 12px; border-bottom: 1px dashed #e2e8f0;">
      <span style="font-size: 20px; margin-right: 12px;">⭐</span>
      <div>
        <strong style="color: #1e293b; font-size: 15px;">VIP Upsell: 7-Day Reset Master System</strong><br>
        <span style="color: #64748b; font-size: 13px;">Comprehensive behavioral psychology & routine reset guide</span>
      </div>
    </div>
  `;
}

const htmlBody = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family: 'Segoe UI', Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 30px 15px;">
  <div style="max-width: 580px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 14px rgba(0,0,0,0.06); border: 1px solid #e2e8f0;">
    <div style="background: linear-gradient(135deg, #15212E 0%, #1e3a5f 100%); padding: 32px 24px; text-align: center;">
      <h1 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 700;">Your Order is Ready for Download!</h1>
      <p style="color: #94a3b8; margin: 8px 0 0 0; font-size: 14px;">Instant Digital Access</p>
    </div>
    <div style="padding: 28px 24px;">
      <p style="font-size: 16px; color: #1e293b; margin: 0 0 16px 0;">Hi <strong>${customerName}</strong>,</p>
      <p style="font-size: 14px; color: #475569; line-height: 1.6; margin: 0 0 20px 0;">
        Thank you for your purchase with <strong>${BRAND_NAME}</strong>! Your digital materials are hosted in a secure Google Drive folder.
      </p>
      <div style="background: #f1f5f9; border-radius: 8px; padding: 18px; margin-bottom: 24px;">
        <h3 style="color: #0f172a; margin: 0 0 12px 0; font-size: 14px; text-transform: uppercase;">Items in your order:</h3>
        ${itemsHtml}
      </div>
      <div style="text-align: center; margin: 28px 0;">
        <a href="${downloadLink}" style="background-color: #eab308; color: #000000; text-decoration: none; padding: 16px 36px; border-radius: 8px; font-weight: 700; font-size: 16px; display: inline-block;">
          👉 ACCESS YOUR DIGITAL DOWNLOADS
        </a>
      </div>
      <p style="font-size: 12px; color: #64748b; text-align: center; margin: 20px 0 0 0;">
        Need help? Reply to this email or reach us at <a href="mailto:${REPLY_TO}" style="color: #3b82f6;">${REPLY_TO}</a>
      </p>
    </div>
  </div>
</body>
</html>
`;

// ── SEND VIA RESEND API ─────────────────────────────────────────────────────
const postData = JSON.stringify({
  from: FROM_EMAIL,
  to: [toEmail],
  reply_to: REPLY_TO,
  subject: `Your ${BRAND_NAME} Digital Download is Ready! 🎉`,
  html: htmlBody
});

const req = https.request({
  hostname: 'api.resend.com',
  port: 443,
  path: '/emails',
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${RESEND_API_KEY}`,
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(postData)
  }
}, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    if (res.statusCode >= 200 && res.statusCode < 300) {
      console.log('✅ Email dispatched successfully!');
      console.log('Response:', data);
    } else {
      console.error(`❌ Dispatch failed with status ${res.statusCode}:`, data);
    }
  });
});

req.on('error', (err) => {
  console.error('❌ Network error:', err.message);
});

req.write(postData);
req.end();
