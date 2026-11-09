# 🚀 High-Converting Web Funnel Engine

A production-ready, full-stack digital product sales funnel built with **React 19**, **TypeScript**, **Tailwind CSS**, and **Express.js**.

Designed specifically for Indian D2C digital dropshipping funnels with **sub-second mobile loading speeds**, **3-Layer Meta CAPI tracking**, **Razorpay instant checkout**, and **automated Resend fulfillment delivery**.

---

## 🌟 Key Architecture & Features

1. **Anti-Slop Conversion UI**:
   - 11-section sales page architecture (Hero, Problem Agitation, Solution, Bento Features, Comparison Matrix, Social Proof Testimonials, Value Stack Pricing, Risk-Free Guarantee, FAQs, Sticky CTA).
   - Zero heavy animation bloat — built purely with CSS transitions and `IntersectionObserver` for 90+ Lighthouse mobile performance.
   - SVG Arch transitions, before/after visual sliders, urgency countdown banners, and live trust badges.

2. **Multi-Offer Full-Cart Checkout**:
   - Dynamic cart calculation: Front-end base offer + 2 high-converting order bumps (`+₹149`, `+₹197`).
   - Seamless Razorpay standard checkout integration with prefilled 10-digit phone verification.
   - Immediate Step-2 One-Click Upsell routing.

3. **3-Layer Conversion Tracking Engine**:
   - **Layer 1 (Browser)**: Facebook Pixel (`InitiateCheckout`, `Purchase`) with deferred loading for fast LCP.
   - **Layer 2 (Server CAPI)**: Direct backend dispatch on payment signature verification with shared `event_id` for 100% Meta deduplication.
   - **Layer 3 (Razorpay Webhook)**: Background verification safeguard capturing 28% Indian UPI drop-offs.

4. **Instant Digital Fulfillment**:
   - Automated branded HTML email dispatch via **Resend API**.
   - Dynamic asset bundling based on cart combinations (Core Only, Core + Bump 1, Full Cart, Upsell).

---

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript, Vite 6, Tailwind CSS, Lucide Icons, Canvas Confetti
- **Backend**: Node.js, Express, ESBuild, dotenv, compression
- **Payments**: Razorpay Node SDK (HMAC SHA-256 verification)
- **Tracking**: Facebook Business SDK (`facebook-nodejs-business-sdk`)
- **Fulfillment**: Resend Email SDK (`resend`)

---

## ⚡ Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Copy the example environment configuration:
```bash
cp .env.example .env
```
Fill in your credentials in `.env`:
- `RAZORPAY_KEY_ID` & `RAZORPAY_KEY_SECRET`
- `VITE_FB_PIXEL_ID` & `FB_ACCESS_TOKEN`
- `RESEND_API_KEY` & `FROM_EMAIL`
- Google Drive or cloud asset delivery links

### 3. Start Development Server
```bash
npm run dev
```
Runs the Express backend bundled with Vite middleware at `http://localhost:3000`.

### 4. Build for Production
```bash
npm run build
```
Compiles the React frontend into `dist/` and bundles `server.ts` into a standalone Node CJS executable at `dist/server.cjs`.

### 5. Run in Production
```bash
npm start
```
Runs `node dist/server.cjs` on port 3000 (managed via PM2).
