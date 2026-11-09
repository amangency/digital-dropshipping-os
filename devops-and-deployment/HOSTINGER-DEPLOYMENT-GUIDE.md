# 🚀 Your Brand — Hostinger Deployment Guide (Complete)

> **Last Updated:** 18 August 2026  
> **App Type:** Full-Stack (React Frontend + Express Backend)  
> **Hosting:** Hostinger Business Plan (Node.js Web App)  
> **GitHub Repo:** https://github.com/amangency/Miniwellness (PRIVATE)

---

## 📁 Project Architecture

```
MINIWELLNESS COMPLETE LANDING PAGE/
├── index.html              ← HTML entry (FB Pixel code yahan hai)
├── package.json            ← Build + Start scripts
├── server.ts               ← Express backend (TypeScript source)
├── vite.config.ts          ← Vite + TailwindCSS config
├── tsconfig.json           ← TypeScript config
├── .env.example            ← Environment variable template
├── .gitignore              ← Sensitive files excluded
├── src/
│   ├── App.tsx             ← React Router (8 routes)
│   ├── main.tsx            ← React entry point
│   ├── index.css           ← TailwindCSS
│   ├── components/         ← UI components
│   ├── pages/              ← All pages (Landing, Checkout, Upsell, ThankYou, etc.)
│   ├── sections/           ← Landing page sections (Hero, Pricing, FAQ, etc.)
│   └── utils/pixel.ts      ← Facebook Pixel helper functions
├── public/                 ← Static assets (images, logo, favicon)
└── backend-only/           ← Standalone backend (for hybrid hosting, NOT needed now)
```

### What Happens During Build (`npm run build`):
```
Step 1: vite build → Compiles React app → dist/ (HTML, CSS, JS static files)
Step 2: esbuild   → Bundles server.ts  → dist/server.cjs (Express server)
```

### What Happens in Production (`npm run start`):
```
node dist/server.cjs
  ├── Serves static React files from dist/ folder
  ├── POST /api/create-order      → Creates Razorpay payment order
  ├── POST /api/verify-payment    → Verifies payment + sends email via Resend
  └── POST /api/razorpay-webhook  → Razorpay server-to-server callback (100% tracking)
```

---

## ⚙️ Hostinger hPanel Settings (EXACT VALUES)

### 1. Framework Preset

| Setting | Value |
|:---|:---|
| **Framework preset** | `Express` |
| **Branch** | `main` |
| **Node version** | `22.x` |
| **Root directory** | `./` (default, don't change) |

> ⚠️ **Express choose karo, React/Vite NAHI.** Kyunki production mein Express server chalta hai jo frontend + backend dono serve karta hai.

---

### 2. Build and Output Settings

| Setting | Value |
|:---|:---|
| **Package manager** | `npm` |
| **Entry file** | `dist/server.cjs` |

> ⚠️ Entry file `server.js` ya `server.ts` NAHI likhna. Build ke baad bundled file `dist/server.cjs` hai — wahi production entry point hai.

---

### 3. Environment Variables (hPanel → Environment Variables → Add)

| Variable Name | Value | Description |
|:---|:---|:---|
| `RAZORPAY_KEY_ID` | `rzp_live_XXXXXXXXX` | Razorpay Dashboard → API Keys → Key ID |
| `RAZORPAY_KEY_SECRET` | `XXXXXXXXXXXXXXXXX` | Razorpay Dashboard → API Keys → Key Secret |
| `RAZORPAY_WEBHOOK_SECRET` | `XXXXXXXXXXXXXXXXX` | Razorpay Dashboard → Settings → Webhooks → Secret |
| `RESEND_API_KEY` | `re_XXXXXXXXXXXXXXXXX` | Resend Dashboard → API Keys |
| `FROM_EMAIL` | `Your Brand <orders@yourdomain.com>` | Resend mein verified domain ka email (neeche detail) |
| `NODE_ENV` | `production` | Production mode enable karta hai |

> 🔴 **CRITICAL:** `RAZORPAY_KEY_SECRET`, `RAZORPAY_WEBHOOK_SECRET` aur `RESEND_API_KEY` KABHI GitHub pe push mat karna. Sirf hPanel ke Environment Variables mein set karna.

#### 📧 FROM_EMAIL Kaise Likhna Hai (IMPORTANT!)

**✅ Sahi Format (koi bhi ek use karo):**
```
Your Brand <orders@yourdomain.com>
```
ya simply:
```
orders@yourdomain.com
```

**❌ Ye NAHI chalega:**
```
yourbrand@gmail.com     ← Gmail ALLOWED NAHI hai
hello@yahoo.com                   ← Yahoo ALLOWED NAHI hai
kuchbhi@hotmail.com               ← Hotmail ALLOWED NAHI hai
```

> **Kyun?** Resend sirf **tumhare verified domain** se email bhej sakti hai. Gmail/Yahoo ke DNS records tumhare control mein nahi hain, isliye Resend unko reject karta hai. `yourdomain.com` verified hai → isliye `orders@yourdomain.com` ya `hello@yourdomain.com` kuch bhi use kar sakte ho.

---

### 4. Domain & SSL

| Setting | Value |
|:---|:---|
| **Temporary URL** | `snow-wren-235632.hostingersite.com` |
| **Custom Domain** | Apna domain connect karo (hPanel → Domains) |
| **SSL** | Auto-enabled by Hostinger (FREE Let's Encrypt) |

> ⚠️ Razorpay HTTPS mandatory hai. SSL ke bina payment kaam nahi karega.

---

## 🔄 Deployment Steps (One-Time Setup)

### Step 1: GitHub pe code push karo ✅ (ALREADY DONE)
```
Repo: https://github.com/amangency/Miniwellness
Branch: main
Status: ✅ Updated code pushed with clean .gitignore
```

### Step 2: hPanel → Websites → Add Website → Node.js Web App
1. GitHub connect karo → `amangency/Miniwellness` select karo
2. Framework preset: **Express**
3. Branch: **main**
4. Node version: **22.x**

### Step 3: Build and Output Settings → Change
1. Package manager: **npm**
2. Entry file: **`dist/server.cjs`**
3. **Finish** click karo

### Step 4: Environment Variables → Add
- Upar diye gaye **6 variables** add karo (RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET, **RAZORPAY_WEBHOOK_SECRET**, RESEND_API_KEY, FROM_EMAIL, NODE_ENV)

> ⚠️ **RAZORPAY_WEBHOOK_SECRET bhoolna mat!** Bina iske 28% sales (UPI app-switch drop-off) Meta ko invisible rahegi.

### Step 5: Deploy → Click karo! 🚀

### Step 6: Verify
- `https://yourdomain.com/` → Landing page load honi chahiye
- `https://yourdomain.com/checkout` → Checkout page with Razorpay
- Test payment karo Razorpay test keys se
- Email aana chahiye purchase ke baad
- Razorpay Dashboard → Webhooks → Last delivery status `200 OK` dikhna chahiye ✅

---

## 🔄 Future Updates Kaise Kare

Jab bhi code mein change karo:
```bash
git add .
git commit -m "Description of changes"
git push origin main
```
Hostinger automatically re-deploy karega (auto-deploy enabled hai).

---

## 🔒 Security Checklist

| Item | Status |
|:---|:---|
| `.env` files `.gitignore` mein | ✅ |
| `.env.example` mein actual keys nahi | ✅ |
| `RAZORPAY_KEY_SECRET` sirf server-side | ✅ |
| Google Drive download links server-side mein | ✅ |
| GitHub repo PRIVATE hai | ✅ Verify karo |
| HTTPS/SSL enabled | ✅ Auto by Hostinger |

---

## 🔧 Troubleshooting

### Build fail ho rahi hai
- Node version `22.x` selected hai? Check karo
- Entry file `dist/server.cjs` hai? `server.js` ya `server.ts` se error aayegi

### API calls 404 de rahe hain
- `VITE_API_URL` environment variable set MAT karo (empty rakhna)
- Code mein fallback hai: `const API_BASE = import.meta.env.VITE_API_URL || ""`
- Empty hone pe API calls same server pe jayengi — yeh correct behaviour hai

### Payment fail ho rahi hai
1. SSL/HTTPS enabled hai? (Razorpay mandatory)
2. `RAZORPAY_KEY_ID` + `RAZORPAY_KEY_SECRET` sahi set hain?
3. Razorpay dashboard mein domain whitelist karo
4. Test mode keys se pehle test karo, phir live keys lagao

### Emails nahi aa rahe
1. `RESEND_API_KEY` sahi hai?
2. `FROM_EMAIL` Resend mein verified hai?
3. Resend dashboard → Domains → Domain verified hai?

### SPA routes (like /checkout, /upsell) 404 de rahe hain
- Yeh issue NAHI aana chahiye kyunki Express server SPA routing handle karta hai:
  ```javascript
  app.get("*all", (req, res) => {
    res.sendFile(path.join(distPath, "index.html"));
  });
  ```

### Razorpay Webhook kaam nahi kar rahi (sales track nahi ho rahi)
1. `RAZORPAY_WEBHOOK_SECRET` environment variable set hai Hostinger me?
2. Razorpay Dashboard → Settings → Webhooks → URL sahi hai? (`https://yourdomain.com/api/razorpay-webhook`)
3. Event `payment.captured` selected hai?
4. Webhook Status me `200 OK` aa raha hai ya error?
5. Agar `401 / 400` error → Secret mismatch hai, recheck karo
6. Agar `404` error → Code deploy nahi hua hai abhi tak, redeploy karo

### Sales ho rahi hai lekin Meta me track nahi ho rahi (Phantom Sales)
1. **UPI App-Switch Problem**: Customer UPI app se pay karke browser band kar deta hai
2. **Solution**: Razorpay Webhook setup MANDATORY hai (`/api/razorpay-webhook`)
3. **Check**: Razorpay Dashboard → Webhooks → Recent deliveries me `200 OK` dikhna chahiye
4. **Verify**: Meta Events Manager → Test Events tab me CAPI Purchase event dikhna chahiye
