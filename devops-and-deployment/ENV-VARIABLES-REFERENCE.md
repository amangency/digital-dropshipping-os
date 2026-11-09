# 🔑 Environment Variables Quick Reference

> ⚠️ This file contains TEMPLATE values only. Never commit actual keys!

## Required Variables for Hostinger hPanel

Copy these one by one into hPanel → Environment Variables → Add:

```
RAZORPAY_KEY_ID=rzp_live_XXXXXXXXX
```
↑ Razorpay Dashboard → Settings → API Keys → Key ID

```
RAZORPAY_KEY_SECRET=XXXXXXXXXXXXXXXXX
```
↑ Razorpay Dashboard → Settings → API Keys → Key Secret

```
RESEND_API_KEY=re_XXXXXXXXXXXXXXXXX
```
↑ Resend Dashboard → API Keys → Create API Key

```
FROM_EMAIL=orders@yourdomain.com
```
↑ Must be a verified sender in Resend (Resend → Domains → Add Domain → Verify)

```
NODE_ENV=production
```
↑ Always set to "production" for live deployment

```
FB_ACCESS_TOKEN=EAAT_YOUR_META_SYSTEM_USER_ACCESS_TOKEN_HERE
```
↑ Meta Events Manager → Settings → Conversions API → Access Token

```
FB_PIXEL_ID=YOUR_META_PIXEL_ID
```
↑ Your Meta Pixel / Data Set ID

```
RAZORPAY_WEBHOOK_SECRET=XXXXXXXXXXXXXXXXX
```
↑ Razorpay Dashboard → Settings → Webhooks → Secret (100% sale tracking ke liye MANDATORY!)

---

## Variables NOT Needed in Hostinger

| Variable | Why Not Needed |
|:---|:---|
| `GEMINI_API_KEY` | AI Studio only — not used in production |
| `APP_URL` | AI Studio only — not used in production |
| `VITE_FB_PIXEL_ID` | Already hardcoded in index.html |
| `VITE_API_URL` | Should be EMPTY — frontend + backend same server pe hai |
| `PORT` | Hostinger automatically assigns port |

---

## Where to Get Each Key

### Razorpay Keys
1. Go to https://dashboard.razorpay.com/
2. Settings → API Keys
3. Generate Live Keys (Test keys for testing first)

### Resend API Key
1. Go to https://resend.com/
2. API Keys → Create API Key
3. Also verify your domain: Domains → Add Domain → Add DNS records

### Facebook Pixel
- Already hardcoded: `YOUR_META_PIXEL_ID`
- No env variable needed
- Verify at: https://business.facebook.com/events_manager
