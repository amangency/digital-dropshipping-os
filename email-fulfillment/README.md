# 📧 Email Fulfillment System

Automated and manual digital product fulfillment powered by **Resend**.

---

## ⚡ Automated Delivery (Built into `web-engine`)

The sales engine automatically triggers fulfillment emails upon receiving:
1. Client-side payment confirmation (`/api/verify-payment`) with valid Razorpay HMAC signature.
2. Server-side Razorpay webhook event (`payment.captured` or `order.paid`).

The email contains the direct, pre-authenticated Google Drive / cloud storage download link matching the customer's cart configuration (Core product, Core + Bump 1, Full Cart, or VIP Upsell).

---

## 🛠️ Manual Fulfillment CLI

If a customer reaches out via support or if a payment occurred outside the standard flow, you can manually dispatch their order materials within seconds:

### Usage

```bash
node manual-fulfillment-cli.cjs <customer_email> [customer_name] [type: base|bump1|bump2|both|upsell]
```

### Examples

```bash
# Core Bundle
node manual-fulfillment-cli.cjs user@gmail.com "Rahul Sharma" base

# Core + Both Order Bumps
node manual-fulfillment-cli.cjs user@gmail.com "Pooja Verma" both

# VIP Upsell
node manual-fulfillment-cli.cjs user@gmail.com "Neha Patel" upsell
```

---

## 🔑 Required Environment Variables

Ensure the following variables are present in your `.env` or system environment:

```env
RESEND_API_KEY=re_your_api_key_here
FROM_EMAIL="Your Brand <orders@yourdomain.com>"
REPLY_TO="support@yourdomain.com"
LINK_BASE_BUNDLE="https://drive.google.com/drive/folders/YOUR_BASE_LINK"
LINK_CORE_BUMP1="https://drive.google.com/drive/folders/YOUR_BUMP1_LINK"
LINK_CORE_BUMP2="https://drive.google.com/drive/folders/YOUR_BUMP2_LINK"
LINK_CORE_BOTH_BUMPS="https://drive.google.com/drive/folders/YOUR_BOTH_BUMPS_LINK"
LINK_UPSELL_BUNDLE="https://drive.google.com/drive/folders/YOUR_UPSELL_LINK"
```
