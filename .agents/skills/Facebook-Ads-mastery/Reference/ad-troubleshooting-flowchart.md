# Facebook Ad Performance Troubleshooting Flowchart

## Step-by-Step Debugging (Updated with Day 2)

```
START: Ad not performing?
│
├─→ Q1: Getting IMPRESSIONS?
│   ├── NO → Budget too low OR audience too narrow OR account issue
│   │   → Fix: Increase budget to 2X product price, broaden audience
│   │   → Check: Payment method active? Account not restricted?
│   └── YES ↓
│
├─→ Q2: Getting CLICKS (CTR > 1%)?
│   ├── NO → Creative is bad (hook not working)
│   │   → Fix: Test new hooks (Pain/Desire/Fear/Proof/Status)
│   │   → Fix: Try image ad if using video (or vice versa)
│   │   → Check: Is messaging clear? Meta reads your ad text!
│   └── YES ↓
│
├─→ Q3: Getting LANDING PAGE VIEWS (>80% of clicks)?
│   ├── NO → Page speed is slow
│   │   → Fix: GTMetrics score must be 95%+
│   │   → Fix: Optimize images, reduce scripts
│   │   → Check: Mobile loading speed (99% traffic is mobile!)
│   └── YES ↓
│
├─→ Q4: Getting ADD TO CART / INITIATE CHECKOUT?
│   ├── NO → Landing page not converting (CVR < 1%)
│   │   → Fix: Review offer copy (use 11-section framework)
│   │   → Fix: Check ad → LP message CONGRUENCE
│   │   → Fix: Check mobile UX
│   │   → Fix: Add proof EARLY (testimonials above the fold)
│   └── YES ↓
│
├─→ Q5: Getting PURCHASES?
│   ├── NO → Checkout friction OR price objection
│   │   → Fix: Simplify checkout
│   │   → Fix: Add trust signals (guarantee, testimonials)
│   │   → Fix: Check payment gateway working
│   │   → Fix: Check pricing (too high for cold traffic?)
│   │   → Note: People who ATC but don't purchase = RETARGETING POOL
│   └── YES ↓
│
├─→ Q6: TRACKING ACCURATE?
│   ├── NO → Events not firing correctly
│   │   → Fix: Check Events Manager → test all events
│   │   → Fix: Check deduplication (not double counting?)
│   │   → Fix: Event Match Quality > 7.5?
│   │   → Fix: CAPI connected and sending data?
│   └── YES ↓
│
└─→ PROFITABLE? (ROAS > 2x)
    ├── NO → Offer economics don't work
    │   → Fix: Add bumps/upsells to increase AOV
    │   → Fix: Reduce CPA with better creatives
    │   → Fix: Backend product needed (front-end alone won't work)
    │   → Note: At 1:1 (breakeven), KEEP RUNNING — don't kill
    └── YES → SCALE! (20% budget increase every 3 days)
```

## Key Metrics Reference (Updated Day 2)

| Metric | Formula | Good ✅ | Better 🔥 | Best 🏆 | Red Flag ❌ |
|:---|:---|:---|:---|:---|:---|
| CPM | (Spend / Impressions) × 1000 | ₹100-250 | ₹50-100 | <₹50 | >₹700 |
| CTR | (Clicks / Impressions) × 100 | >1% | >1.5% | >2.5% | <0.5% |
| CPC | Spend / Clicks | <₹15 | <₹10 | <₹5 | >₹50 |
| CVR | (Purchases / LP Views) × 100 | 1-3% | 3-5% | >5% | <0.5% |
| CPA | Spend / Purchases | <Product Price | <50% of Price | <30% | >2× Price |
| ROAS | Revenue / Spend | >2x | >3x | >5x | <1x |
| Frequency | Impressions / Reach | <1.0 | <0.8 | <0.5 | >2.0 |
| EMQ | Events Manager Score | >7.5 | >8.5 | >9.0 | <6.0 |

## Timeline for Decisions (Updated Day 2)

| Time | Action | What to Check |
|:---|:---|:---|
| 0-24 hrs | DON'T TOUCH — Learning phase | Nothing (patience!) |
| 24-48 hrs | Check creative performance | LP views, CTR, CPC |
| 48-72 hrs | Check conversions | Purchases, CPA, CVR |
| 72+ hrs | Decide: Kill/Keep/Scale | Full metrics review |
| 7 days | Weekly review | Creative fatigue, lead quality |
| 14 days | Evaluate ROAS | Overall profitability decision |
| 30 days | Monthly audit | Account health, plan next month |

## Learning Phase Rules

```
Duration: First 7 days after launch
Exit condition: 50+ conversion events per ad set
During learning: Results will be INCONSISTENT (normal!)

🚫 NEVER change during learning phase:
- Budget
- Objective  
- Audience
- Ad creative
- ANY edit resets the learning phase!
```

## Kill/Keep/Duplicate/Refresh/Scale Decision Matrix

| Signal | Action | Next Step |
|:---|:---|:---|
| No conversions after enough spend | **KILL** | Create new creative |
| Learning phase, data incomplete, within range | **KEEP** | Give more time + budget |
| Winner found, good audience + conversion | **DUPLICATE** | Create variations of winner |
| High frequency, creative fatigue | **REFRESH** | New version of same angle |
| Stable CPA, stable ROAS, proven | **SCALE** | +20% budget every 3 days |
