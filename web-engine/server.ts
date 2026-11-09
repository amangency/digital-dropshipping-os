import dotenv from "dotenv";
dotenv.config({ override: true });
import express from "express";
import path from "path";
import Razorpay from "razorpay";
import crypto from "crypto";
import { Resend } from "resend";
import { createServer as createViteServer } from "vite";
import compression from "compression";

// ── Facebook Conversions API (CAPI) Setup ──────────────────────────────
const bizSdk = require("facebook-nodejs-business-sdk");

const FB_PIXEL_ID = process.env.FB_PIXEL_ID || "";
const FB_ACCESS_TOKEN = process.env.FB_ACCESS_TOKEN || "";

// Initialize Facebook API only if token exists
if (FB_ACCESS_TOKEN) {
  bizSdk.FacebookAdsApi.init(FB_ACCESS_TOKEN);
  console.log("✅ Facebook Conversions API initialized");
} else {
  console.warn("⚠️ FB_ACCESS_TOKEN not set — CAPI events will be skipped");
}

/**
 * Send a server-side event to Facebook via Conversions API
 * This works alongside the browser pixel for deduplication
 */
async function sendCAPIEvent({
  eventName,
  eventId,
  email,
  phone,
  value,
  currency = "INR",
  sourceUrl,
  clientIp,
  clientUserAgent,
}: {
  eventName: string;
  eventId: string;
  email?: string;
  phone?: string;
  value?: number;
  currency?: string;
  sourceUrl?: string;
  clientIp?: string;
  clientUserAgent?: string;
}) {
  if (!FB_ACCESS_TOKEN) {
    console.log(`⏭️ CAPI skipped (no token): ${eventName}`);
    return;
  }

  try {
    const ServerEvent = bizSdk.ServerEvent;
    const EventRequest = bizSdk.EventRequest;
    const UserData = bizSdk.UserData;
    const CustomData = bizSdk.CustomData;

    // Build user data with SHA256 hashed values
    const userData = new UserData();
    if (email) {
      // SHA256 hash the email (lowercase, trimmed)
      const hashedEmail = crypto
        .createHash("sha256")
        .update(email.toLowerCase().trim())
        .digest("hex");
      userData.setEmails([hashedEmail]);
    }
    if (phone) {
      // SHA256 hash the phone (digits only)
      const cleanPhone = phone.replace(/\D/g, "");
      const hashedPhone = crypto
        .createHash("sha256")
        .update(cleanPhone)
        .digest("hex");
      userData.setPhones([hashedPhone]);
    }
    if (clientIp) userData.setClientIpAddress(clientIp);
    if (clientUserAgent) userData.setClientUserAgent(clientUserAgent);

    // Build custom data
    const customData = new CustomData();
    if (value !== undefined) {
      customData.setValue(value);
      customData.setCurrency(currency);
    }

    // Build the server event
    const serverEvent = new ServerEvent()
      .setEventName(eventName)
      .setEventTime(Math.floor(Date.now() / 1000))
      .setEventId(eventId) // MUST match browser pixel eventID for deduplication
      .setUserData(userData)
      .setCustomData(customData)
      .setActionSource("website");

    if (sourceUrl) {
      serverEvent.setEventSourceUrl(sourceUrl);
    }

    // Send to Meta
    const eventRequest = new EventRequest(FB_ACCESS_TOKEN, FB_PIXEL_ID)
      .setEvents([serverEvent]);

    const response = await eventRequest.execute();
    console.log(`✅ CAPI ${eventName} sent (event_id: ${eventId})`, response);
  } catch (error: any) {
    // CAPI errors should NOT break the payment flow
    console.error(`❌ CAPI ${eventName} failed:`, error.message || error);
  }
}

// ── Email Deduplication: Track which payment_ids already got emails ────
// This prevents double-emails when both browser AND webhook fire
const emailedPaymentIds = new Set<string>();

// ── Express Server ─────────────────────────────────────────────────────
async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  app.use(express.json());

  // ── Performance: Gzip compression for all responses ──
  app.use(compression());

  // ── Security: Essential HTTP security headers ──
  app.use((_req, res, next) => {
    res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
    res.setHeader('Cross-Origin-Opener-Policy', 'same-origin-allow-popups');
    res.setHeader('X-Frame-Options', 'SAMEORIGIN');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    next();
  });

  // Razorpay Order Creation API
  app.post("/api/create-order", async (req, res) => {
    try {
      const { amount, event_id } = req.body;

      if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
        return res.status(500).json({ error: "Razorpay API keys are not configured" });
      }

      const razorpay = new Razorpay({
        key_id: process.env.RAZORPAY_KEY_ID,
        key_secret: process.env.RAZORPAY_KEY_SECRET,
      });

      const options = {
        amount: Math.round(amount * 100), // convert to paise
        currency: "INR",
        receipt: `receipt_${Date.now()}`,
        // Store browser event_id in notes so webhook can reuse it for CAPI deduplication
        ...(event_id ? { notes: { event_id } } : {}),
      };

      const order = await razorpay.orders.create(options);

      // Send InitiateCheckout event via CAPI (server-side)
      if (event_id) {
        const referer = req.headers.referer || req.headers.origin || "";
        sendCAPIEvent({
          eventName: "InitiateCheckout",
          eventId: event_id,
          value: amount,
          currency: "INR",
          sourceUrl: typeof referer === "string" ? referer : "",
          clientIp: req.ip || req.socket.remoteAddress || "",
          clientUserAgent: req.headers["user-agent"] || "",
        });
      }
      
      res.json({
        ...order,
        key_id: process.env.RAZORPAY_KEY_ID,
      });
    } catch (error: any) {
      console.error("Error creating Razorpay order:", error);
      res.status(500).json({ error: error?.error?.description || error.message || "Failed to create order" });
    }
  });

  // Razorpay Payment Verification & Email API
  app.post("/api/verify-payment", async (req, res) => {
    try {
      const { razorpay_order_id, razorpay_payment_id, razorpay_signature, email, phone, name, items, bump1, bump2, isUpsell, event_id, amount } = req.body;

      if (!process.env.RAZORPAY_KEY_SECRET) {
        return res.status(500).json({ error: "Razorpay secret not configured" });
      }

      const body = razorpay_order_id + "|" + razorpay_payment_id;
      const expectedSignature = crypto
        .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
        .update(body.toString())
        .digest("hex");

      const isAuthentic = expectedSignature === razorpay_signature;

      if (!isAuthentic) {
        return res.status(400).json({ error: "Invalid Signature" });
      }

      let downloadLink = process.env.LINK_BASE_BUNDLE || "https://drive.google.com/drive/folders/YOUR_BASE_BUNDLE_LINK";
      if (isUpsell) {
        downloadLink = process.env.LINK_UPSELL_BUNDLE || "https://drive.google.com/drive/folders/YOUR_UPSELL_BUNDLE_LINK";
      } else if (bump1 && bump2) {
        downloadLink = process.env.LINK_CORE_BOTH_BUMPS || "https://drive.google.com/drive/folders/YOUR_CORE_BOTH_BUMPS_LINK";
      } else if (bump1) {
        downloadLink = process.env.LINK_CORE_BUMP1 || "https://drive.google.com/drive/folders/YOUR_CORE_BUMP1_LINK";
      } else if (bump2) {
        downloadLink = process.env.LINK_CORE_BUMP2 || "https://drive.google.com/drive/folders/YOUR_CORE_BUMP2_LINK";
      }

      const emailSubject = isUpsell ? "Your Fussy Eater Fix Bundle is Here!" : "Your Tiffin Bundle Purchase is Complete!";

      // Payment is successful, send email
      if (process.env.RESEND_API_KEY && process.env.FROM_EMAIL) {
        try {
          const resend = new Resend(process.env.RESEND_API_KEY);
          
          const emailResult = await resend.emails.send({
            from: process.env.FROM_EMAIL,
            to: email,
            subject: emailSubject,
            html: `
              <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; border: 1px solid #eee;">
                <div style="background-color: #dfab43; padding: 30px; text-align: center;">
                  <h1 style="color: #ffffff; margin: 0; font-size: 24px;">Thank you for your purchase!</h1>
                </div>
                <div style="padding: 30px;">
                  <p style="font-size: 16px; color: #333;">Hi ${name},</p>
                  <p style="font-size: 16px; color: #333;">Your payment was successful. We are thrilled to have you! Here is a summary of your order:</p>
                  <ul style="font-size: 16px; color: #555; padding-left: 20px;">
                    ${items.map((item: string) => `<li style="margin-bottom: 8px;">${item}</li>`).join("")}
                  </ul>
                  <div style="text-align: center; margin-top: 40px; margin-bottom: 40px;">
                    <a href="${downloadLink}" style="background-color: #dfab43; color: #ffffff; padding: 14px 28px; text-decoration: none; border-radius: 6px; font-weight: bold; font-size: 16px; display: inline-block;">Access Your Downloads</a>
                  </div>
                  <p style="font-size: 16px; color: #333;">If you have any questions, feel free to reply to this email.</p>
                  <p style="font-size: 16px; color: #333; margin-bottom: 0;">Best regards,<br/>The Mini Wellness Team</p>
                </div>
              </div>
            `,
          });
          // Track this payment_id so webhook doesn't send duplicate email
          if (razorpay_payment_id) emailedPaymentIds.add(razorpay_payment_id);
          console.log("✅ Email sent successfully:", JSON.stringify(emailResult));
        } catch (emailError: any) {
          // Email errors should NOT break the payment flow
          console.error("❌ Resend email failed:", emailError?.message || emailError);
          console.error("   FROM_EMAIL:", process.env.FROM_EMAIL);
          console.error("   TO:", email);
          console.error("   Full error:", JSON.stringify(emailError));
        }
      } else {
        console.warn("⚠️ RESEND_API_KEY or FROM_EMAIL is missing. Email was not sent.");
        console.warn("   RESEND_API_KEY set:", !!process.env.RESEND_API_KEY);
        console.warn("   FROM_EMAIL set:", !!process.env.FROM_EMAIL);
      }

      // ── CAPI: Send Purchase event server-side ──────────────────────────
      if (event_id) {
        const referer = req.headers.referer || req.headers.origin || "";
        sendCAPIEvent({
          eventName: "Purchase",
          eventId: event_id,
          email: email,
          phone: phone,
          value: amount,
          currency: "INR",
          sourceUrl: typeof referer === "string" ? referer : "",
          clientIp: req.ip || req.socket.remoteAddress || "",
          clientUserAgent: req.headers["user-agent"] || "",
        });
      }

      res.json({ success: true });
    } catch (error: any) {
      console.error("Error verifying payment:", error);
      res.status(500).json({ error: error.message || "Failed to verify payment" });
    }
  });

  // ── Razorpay Webhook: DISABLED ──────────────────────────────────────────
  // Webhook CAPI has been removed because it was causing duplicate Purchase events
  // in Meta Ads Manager (1 sale counted as 2). The browser flow already handles
  // both pixel + server-side CAPI via /api/verify-payment with proper event_id
  // deduplication. Keeping this endpoint alive so Razorpay doesn't error on
  // the configured webhook URL, but it does NOT send any CAPI events.
  app.post("/api/razorpay-webhook", express.raw({ type: "application/json" }), async (_req, res) => {
    console.log("🔕 Webhook received — CAPI disabled (dedup handled by browser flow)");
    res.status(200).json({ status: "ok" });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Production serving
    const distPath = path.join(process.cwd(), "dist");

    // ── Performance: Cache headers for static assets ──
    // Vite adds content hashes to filenames (e.g. index-DEaU-4pU.js)
    // so 1-year cache is safe — new deploys = new hashes = auto cache bust
    app.use("/assets", express.static(path.join(distPath, "assets"), {
      maxAge: "1y",
      immutable: true,
    }));

    // Images — cache for 30 days (they rarely change, and filenames are static)
    app.use("/images", express.static(path.join(distPath, "images"), {
      maxAge: "30d",
    }));

    // Other static files (favicon, logo, robots.txt) — cache for 7 days
    app.use(express.static(distPath, {
      maxAge: "7d",
    }));

    // SPA catch-all: serve index.html for all non-API routes (Express 4 compatible)
    app.get("/*", (req, res) => {
      // No cache for index.html so users always get latest version
      res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
