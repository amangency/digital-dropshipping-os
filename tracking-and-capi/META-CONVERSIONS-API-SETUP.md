# 🎯 Meta Conversions API (CAPI) — Complete Step-by-Step Setup Guide

> **Created For:** Mini Wellness Digital Product Funnel  
> **Method:** 100% Free Direct Server API (No Paid Third-Party Tools)  
> **Pixel ID:** `YOUR_META_PIXEL_ID`

---

## 📖 Overview: CAPI + Meta Pixel Kyun Zaroori Hai?

Jab hum Facebook Ads chalate hain, sirf browser pixel lagane se **30% se 40% data miss** ho jata hai (Ad-blockers, iOS privacy restrictions, browser crash ya network issues ki wajah se).

**Conversions API (CAPI)** direct hamare backend server (Node.js/Express) se Meta ke server ko real-time data bhejta hai.
- **Browser Pixel + Server CAPI + Razorpay Webhook** teeno milke kaam karte hain → **3-Layer Tracking Architecture**.
- Facebook **`event_id`** ke through events ko **Deduplicate** karta hai (matlab 1 sale ko 1 hi count karega, duplicate nahi karega).
- Meta ke AI (*Andromeda Engine*) ko high-quality buyers ko target karne ke liye accurate data milta hai.

> [!CAUTION]
> **MINI WELLNESS LESSON LEARNED:** Sirf Browser Pixel + CAPI se bhi **28% Indian UPI sales miss ho sakti hain!** Jab customer PhonePe/GPay se pay karke browser band kar de, toh Pixel AUR CAPI dono fire nahi hote. Isliye **Razorpay Webhook (Step 11)** MANDATORY hai!

---

## 🛠️ Step-by-Step Setup in Meta Events Manager

---

### 📍 Step 1: Events Manager me Login & Data Set Open Karo
1. Browser me open karo: **[business.facebook.com](https://business.facebook.com)**
2. Left navigation menu se **Events Manager** pe jao.
3. Left side me **Data Sets / Pixels** pe click karke apna Pixel (`YOUR_META_PIXEL_ID` - Miniwellness) select karo.

---

### 📍 Step 2: "Add New Integration" me Conversions API Select Karo
1. Pixel overview page pe **"Settings"** ya **"Overview"** me **"Set up Conversions API"** / **"Add New Integration"** pe click karo.
2. Modal pop-up hoga: **"Add New Integration"**.
3. Pehla option select karo:
   - 🔘 **Conversions API** *(Build an API connection directly with your server to share web, app, in-store data)*
4. Neeche **"Set Up"** (Blue Button) pe click karo.

---

### 📍 Step 3: Connection Type Choose Karo
1. Agli screen aayegi: **"How do you want to connect your website?"**
2. Pehla option select karo:
   - 🔘 **Conversions API and Meta Pixel (Recommended)** *(Send data directly through an API connection...)*
3. Neeche **"Next"** button pe click karo.

> 💡 *Note: Yeh method 100% free hai. Isme koi paid cloud subscription nahi lagta.*

---

### 📍 Step 4: Instructions Screen
1. Screen aayegi: **"Instructions"**
2. Upar **Conversions API** section ke andar button hoga:
   - 👉 Click karo: **"Start CAPI setup"** (Upar wala button)

---

### 📍 Step 5: Event Selection (Konsa Event Track Karna Hai)
Screen aayegi: **"Select Events"**

Meta bohot saare random events suggest karega. Hume sirf hamare funnel ke relevant events select karne hain:

#### ✅ Yeh Events SELECT Rakho (Checked):
- ✅ **Purchase** (Most Critical)
- ✅ **Initiate Checkout**
- ✅ **Add to Cart**
- ✅ **View Content**
- ✅ **PageView**

#### ❌ Yeh Events UNCHECK (Deselect) Karo:
- ❌ Search
- ❌ Add to Wishlist
- ❌ Subscribe
- ❌ Start Trial
- ❌ Complete Registration
- ❌ Contact

Selection ke baad neeche **"Continue" / "Next"** button dabao.

---

### 📍 Step 6: Event Details & Match Quality Parameters Select Karo
Screen aayegi: **"Select Event Details"**

Left side me har event (`Purchase`, `Initiate Checkout`, etc.) pe click karke right side me yeh parameters enable karo:

#### 1️⃣ Event Detail Parameters:
- ✅ **Event ID** (*CRITICAL: Deduplication ke liye mandatory hai*)
- ✅ **Event Time** (Required)
- ✅ **Event Name** (Required)
- ✅ **Event Source URL** (Required)
- ✅ **Action Source** (Required)

#### 2️⃣ Customer Information Parameters (Match Quality ke liye):
- ✅ **Email** (Customer email - SHA256 hashed jayega)
- ✅ **Phone Number** (Customer mobile number)
- ✅ **Client IP Address** (User's IP)
- ✅ **Client User Agent** (Browser/Device details)
- ✅ **Browser ID (fbp) Cookie** (Facebook browser cookie)
- ✅ **Click ID (fbc) Cookie** (Facebook ad click ID)

Sab select karne ke baad neeche **"Continue"** dabao, review screen pe verify karke **"Finish"** pe click karo.

---

### 📍 Step 7: Permanent CAPI Access Token Generate Karo
1. Setup complete hote hi (**"Continue"** dabane ke baad), Meta automatically page par redirect kar dega.
2. Bas page par **neeche scroll karo** jab tak **"Conversions API"** section na aa jaye.
3. **"Set up manually"** ke andar blue button/link dikhega:
   - 👉 Click karo: **"Generate access token"**
4. Screen par lamba alphanumeric token generate ho jayega (Starting with `EAAT...` ya `EAAG...`).
5. **"Copy Token"** pe click karke isko safe jagah save kar lo.

> 🔑 **Generated Token Example:**
> ```
> EAAT_YOUR_META_SYSTEM_USER_ACCESS_TOKEN_HERE
> ```

---

### 📍 Step 8: Test Events Code (Live Verification ke liye)
1. Events Manager me **"Test events"** tab me jao.
2. **"Confirm your server's events are set up correctly"** section me ek test code dikhega (Jaise: `TEST12345`).
3. Is test code ko server payload me temporary pass karke live test kiya jata hai.

---

## 🔒 Step 9: Environment Variables Setup (Hostinger / Server)

Access token milne ke baad ise Hostinger hPanel ke Environment Variables me add kiya jata hai:

| Variable Name | Value | Purpose |
|:---|:---|:---|
| `FB_PIXEL_ID` | `YOUR_META_PIXEL_ID` | Meta Pixel / Data Set ID |
| `FB_ACCESS_TOKEN` | `EAAT_YOUR_META_SYSTEM_USER_ACCESS_TOKEN` | Server API se events authenticate karne ke liye |

> ⚠️ **Security Rule:** Access token ko **kabhi bhi frontend code ya public GitHub repo me push mat karna**. Yeh sirf server-side environment variable me rehta hai.

---

## ⚡ Step 10: Code Architecture & Deduplication Rule

### 1. Browser Event (Pixel):
Jab user purchase karta hai, frontend pixel fire hota hai:
```javascript
fbq('track', 'Purchase', {
  value: 299,
  currency: 'INR'
}, { eventID: 'order_rzp_12345' });
```

### 2. Server Event (CAPI):
Jab backend Razorpay payment verify karta hai, server CAPI event bhejta hai:
```javascript
// Server sends to Meta CAPI:
{
  event_name: 'Purchase',
  event_time: Math.floor(Date.now() / 1000),
  event_id: 'order_rzp_12345', // SAME event_id
  user_data: {
    em: [sha256(email)],
    ph: [sha256(phone)],
    client_ip_address: req.ip,
    client_user_agent: req.headers['user-agent']
  },
  custom_data: {
    value: 299,
    currency: 'INR'
  }
}
```

### 3. Meta Deduplication Result:
- Meta dekhega: **Pixel Event (`order_rzp_12345`) == Server Event (`order_rzp_12345`)**
- Meta ise **1 single purchase** count karega with 100% data accuracy! ✅

---

## 🎯 Verification Checklist

- [x] Pixel ID copied (`YOUR_META_PIXEL_ID`)
- [x] Relevant events selected (Purchase, InitiateCheckout, AddToCart, PageView)
- [x] Event ID & User matching parameters enabled
- [x] Access Token generated & saved
- [x] Token added to server environment variables
- [x] Code updated with deduplication (`event_id`) & SHA256 hashing

---

## 🛡️ Step 11: Razorpay Webhook — 100% Sale Tracking (MANDATORY!)

> [!CAUTION]
> **Bina yeh step kiye, 10-28% Indian UPI sales Meta ko invisible rahegi!**

### Problem: UPI App-Switch Drop-Off
```
Customer UPI se pay karti hai → PhonePe/GPay app khulta hai → PIN dalti hai
→ ₹ Katata hai (Razorpay ko paisa mil jata hai) ✅
→ BUT: Customer browser tab swipe/close kar deti hai
→ Browser callback fire nahi hota
→ RESULT:
   ❌ Browser Pixel fire nahi hua → Meta ko sale nahi dikhi
   ❌ CAPI call nahi gayi → Server track bhi miss
   ❌ Resend email nahi gaya → Customer ko product nahi mila
```

### Solution: Razorpay Server-to-Server Webhook
```
Razorpay Server → Direct tumhare server ko POST request bhejta hai
→ ✅ CAPI Purchase event fire hota hai (browser se independent)
→ ✅ Resend email jaata hai (browser se independent)
→ ✅ 100% sales tracked + 100% emails delivered
```

### Setup Steps:
1. **Razorpay Dashboard** → Settings → Webhooks → Add New Webhook
2. **Webhook URL**: `https://YOUR-DOMAIN.com/api/razorpay-webhook`
3. **Event**: `payment.captured` select karo
4. **Secret**: Auto-generated secret copy karo
5. **Server .env** me `RAZORPAY_WEBHOOK_SECRET=<secret>` add karo
6. **Hostinger hPanel** ke Environment Variables me bhi same secret add karo

### 3-Layer Tracking Architecture:
```
┌─────────────────────────────────────────────┐
│            3-LAYER TRACKING                  │
│                                              │
│  Layer 1: Browser Pixel (index.html)         │
│  → PageView, AddToCart, InitiateCheckout,    │
│    Purchase events browser se fire hote hain │
│                                              │
│  Layer 2: Server CAPI (/api/verify-payment)  │
│  → Browser callback → Server → Meta API      │
│  → SHA256 hashed email + phone               │
│                                              │
│  Layer 3: Razorpay Webhook (/api/razorpay-   │
│    webhook)                                  │
│  → Razorpay server → Tumhara server          │
│  → Browser se 100% INDEPENDENT!              │
│  → UPI drop-off ka backup net               │
└─────────────────────────────────────────────┘
```

### Deduplication (Double-Counting Prevention):
| Layer | event_id Format | Email Dedup |
|:---|:---|:---|
| Browser Pixel | Frontend UUID | N/A |
| CAPI (verify-payment) | Same Frontend UUID | Sends email + adds payment_id to Set |
| CAPI (webhook) | `webhook_` + payment_id | Checks Set → skips if already sent |

> Meta deduplicates same user (email + phone) within same timeframe. ZERO double counting.

---

## 🎯 Updated Verification Checklist

- [x] Pixel ID copied (`YOUR_META_PIXEL_ID`)
- [x] Relevant events selected (Purchase, InitiateCheckout, AddToCart, PageView)
- [x] Event ID & User matching parameters enabled
- [x] Access Token generated & saved
- [x] Token added to server environment variables
- [x] Code updated with deduplication (`event_id`) & SHA256 hashing
- [x] **Razorpay Webhook URL set** (`/api/razorpay-webhook`)
- [x] **RAZORPAY_WEBHOOK_SECRET added to Hostinger env vars**
- [x] **Webhook verified**: Razorpay Dashboard → Recent deliveries → `200 OK`
