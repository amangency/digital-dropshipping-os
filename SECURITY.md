# 🛡️ Security Policy

## Supported Versions

We take the security of our open-source funnel and payment architecture seriously. The following versions are currently supported with active security updates:

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |
| < 1.0   | :x:                |

---

## 🔒 Security Architecture Highlights

1. **Strict Client/Server Separation**:
   - `RAZORPAY_KEY_SECRET`, `RAZORPAY_WEBHOOK_SECRET`, `FB_ACCESS_TOKEN`, and `RESEND_API_KEY` are strictly server-side environment variables. They are never compiled or leaked to the client bundle.
2. **Cryptographic Signature Verification**:
   - Every payment event and webhook callback is verified using HMAC SHA-256 before triggering digital fulfillment or dispatching Conversions API events.
3. **Zero Secrets in Repository**:
   - Rigorous automated scanners prevent `.env` or credential leakage in git history.

---

## 🚨 Reporting a Vulnerability

If you discover a potential security vulnerability within this repository, please follow these steps:

1. **Do NOT report security vulnerabilities via public GitHub issues.**
2. Send an email to the project maintainers at **security@amangency.dev** (or open a private security advisory on GitHub).
3. Please include:
   - Type of issue (e.g., buffer overflow, SQL injection, unauthorized webhook trigger).
   - Clear steps to reproduce the issue.
   - Proof-of-concept code or HTTP requests if available.
4. We acknowledge receipt within **24–48 hours** and aim to release a patched version promptly.
