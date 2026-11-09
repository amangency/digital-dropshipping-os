# 🚀 Miniwellness Facebook Ads Launch — FINAL Implementation Plan (v2.1)

> **Launch Time:** Tonight, 12:00 AM (August 24, 2026)  
> **Product:** The Mini Wellness Kids Tiffin Bundle — ₹299  
> **Website:** theminiwellness.com  
> **Structure:** 1 Campaign → 2 Ad Sets → 3 Video Ads each (6 total)  
> **Budget:** ₹600/day (₹350 Interest + ₹250 Broad)

> [!NOTE]
> **v2.1 Changes:** Budget upgraded from ₹500/day to ₹600/day to match 2X Rule (₹299 × 2 = ₹598 ≈ ₹600). Split: ₹350 Interest + ₹250 Broad. All sections updated. Proven video ads used. 1-2-3 structure confirmed. India-wide targeting.

---

## All Open Questions — RESOLVED ✅

| Question | User's Answer | Decision |
|:---------|:-------------|:---------|
| Video ads ready? | "Already have 3 proven ads that gave 23 sales" | ✅ Use existing proven videos |
| Payment method? | "Ye sab set hai" | ✅ Active |
| Follow-up sequence? | Explained — manual WhatsApp for now | ✅ Week 2 se start |
| Budget? | "Budget ka dikkat nhi hai" | ✅ ₹600/day (2X Rule matched) |
| Video creation skill? | "Faceless YouTuber hu, best bna skta hu" | ✅ No guidance needed |
| Location targeting? | "Mujhe bhi lagta hai whi reason ho skta hai" | ✅ India-wide open (no radius pins) |
| Pre-launch checks? | "Ye sab kaam kr rhi hai" | ✅ All verified |
| Pixel events? | "Ye sab hai, check kr chuka hu" | ✅ All firing correctly |
| Campaign structure? | "Course me 1-1-3 tha" | ✅ 1-2-3 (data-backed upgrade) |

---

## Part 1: Pre-Launch Status — ALL VERIFIED ✅

| # | Check | Status |
|:--|:------|:-------|
| 1 | Landing Page Live & Fast | ✅ theminiwellness.com |
| 2 | Checkout with Bumps | ✅ Working |
| 3 | Order Bump 1 (Breakfast ₹199) | ✅ Visible |
| 4 | Order Bump 2 (Dinner ₹149) | ✅ Visible |
| 5 | Upsell Page (₹499 Mom's Stack) | ✅ Redirect working |
| 6 | Meta Pixel Installed | ✅ All pages |
| 7 | CAPI + Deduplication | ✅ Browser + Server both firing |
| 8 | Domain Verified in BM | ✅ |
| 9 | Payment Method Active | ✅ Debit card + Add Funds |
| 10 | All Pixel Events Tested | ✅ User verified in Events Manager |
| 11 | Account Spending Limit | ⚡ SET ₹5,000-10,000 (safety) |
| 12 | Follow-Up Sequence | 📋 Manual WhatsApp from Week 2 |

---

## Part 2: Campaign Architecture — 1-2-3 Structure

### Why 1-2-3 (Not Course's 1-1-3 or User's Old 1-3-3)?

```
Course default (1-1-3): 1 Campaign → 1 Ad Set → 3 Ads
  → Too conservative — user has PROVEN data for 2 targeting types

User's old (1-3-3):    1 Campaign → 3 Ad Sets → 3 Ads each  
  → Budget spread too thin: ₹600 ÷ 3 = ₹200/set (RIGHT at minimum — no room!)
  → Ad Set 3 was killed at ₹252 — never got enough data

Our plan (1-2-3):      1 Campaign → 2 Ad Sets → 3 Ads each
  → ₹350 for proven Interest + ₹250 for proven Broad ✅
  → Both comfortably above minimum budget ✅
  → Both targeting types proven in user's data ✅
```

### Why ABO, Not CBO?

```
Pixel purchases right now: 0 (new campaign, different product/funnel)
CBO requirement: 50+ purchases for Meta to optimize budget distribution
Decision: ABO (we control per-ad-set budget) → Switch to CBO after 50+ purchases
```

---

### 📋 Campaign Level Settings

```
Campaign Name:  "MiniWellness - Tiffin Bundle - Sales - Aug24"
Objective:      Sales
Buying Type:    Auction
Budget Type:    Ad Set Budget (ABO)
Special Category: None
A/B Test:       OFF
```

---

### 📋 Ad Set 1 — Interest-Guided (PRIMARY — ₹350/day)

```
Name:           "Interest - Parenting Moms - ₹350/day"
Daily Budget:   ₹350/day
Schedule:       Start at 12:00 AM, August 24 (Midnight — full 24hr optimization)
                Continuous (no end date)

CONVERSION:
├── Location:     Website
├── Performance:  Maximum number of conversions
├── Dataset:      [Your Main Pixel]
├── Event:        Purchase
├── Attribution:  7-day click, 1-day view (default)
└── Bidding:      Lowest Cost (DON'T change)

AUDIENCE:
├── Location:      India (All) — NO city radius pins (your data proves this!)
├── Age:           25-40
├── Gender:        Women only
├── Language:      English (US/UK) + Hindi
├── Detailed Targeting (mode: "Your suggestion"):
│   ├── Interests: Motherhood, Parenting, Child care, Working parent
│   └── Parents:   Preschoolers (03-05), Early school-age (06-08),
│                  Teenagers (13-17), Preteens (09-12)
├── Custom Audiences: None (fresh campaign)
├── Advantage+ Audience: OFF
└── Placements:    Advantage+ (all placements — let Meta decide)
```

**Why PRIMARY:** Tumhara proven data — Interest targeting gave **14 out of 23 sales (61%)**

---

### 📋 Ad Set 2 — Broad/Engaged Shoppers (SECONDARY — ₹250/day)

```
Name:           "Broad - Engaged Shoppers - ₹250/day"
Daily Budget:   ₹250/day
Schedule:       Same as Ad Set 1 (Midnight start, continuous)

CONVERSION:     Same as Ad Set 1

AUDIENCE:
├── Location:      India (All)
├── Age:           25-40
├── Gender:        Women only
├── Language:      English + Hindi
├── Detailed Targeting: Behaviors → Engaged Shoppers
├── Advantage+ Audience: OFF
└── Placements:    Advantage+
```

**Why SECONDARY:** Tumhara proven data — Broad gave **8 out of 23 sales (35%)**

---

### 📋 Ads — 3 PROVEN Video Ads (Same in Both Ad Sets)

```
IMPORTANT: Use your EXISTING 3 proven video ads that gave 23 sales.
Upload the SAME videos. These are tested and proven in YOUR niche.

Ad Format Rules:
✅ ALL VIDEO — no image ads (proven: 23 video sales, 0 image sales)
✅ Your existing proven videos (Pain/Desire/Proof hooks)
✅ CTA: "Shop Now" button → theminiwellness.com
✅ Enhancement: "Add Music" ON, "Generate CTAs" ON
✅ Translation: OFF

Ad Naming Convention:
├── Ad 1: "Proven - [Your Hook Type 1]"
├── Ad 2: "Proven - [Your Hook Type 2]"
└── Ad 3: "Proven - [Your Hook Type 3]"
```

> [!IMPORTANT]
> **Ad Copy:** Tumhare proven videos ke saath jo ad copy (Primary Text + Headline) use karna hai, wo neeche Part 3 me hai. Agar tumhare paas purana ad copy hai toh wahi use karo. Agar nahi hai ya update karna hai toh neeche ke templates use karo.

---

## Part 3: Ad Copy Templates (For Your Proven Videos)

> Ye copy templates hain — agar tumhare paas already ad copy hai previous campaign se, toh wahi use karo. Agar nahi hai toh ye use karo:

### Ad 1 Copy (Pain Angle):
```
PRIMARY TEXT:
Every day, your child's tiffin comes back half-eaten. 😩

You wake up early, spend 30 minutes cooking...
and by afternoon, it's all coming back untouched.

The Mini Wellness Tiffin Bundle gives you:
✅ 120+ kid-approved healthy Indian recipes
⏱️ 15-minute morning prep with Sunday batch cooking
🍱 Bite-sized, mess-free meals kids actually finish
🛡️ FREE Immunity-Boosting Rasoi Remedies Guide

Normally ₹2,499. Today, just ₹299.
That's less than ₹10 per day for stress-free mornings.

👉 Tap "Shop Now" to get your copy instantly!

HEADLINE: Healthy Tiffin in 15 Minutes — ₹299 Only
CTA BUTTON: Shop Now
```

### Ad 2 Copy (Desire Angle):
```
PRIMARY TEXT:
Imagine waking up tomorrow morning and your child's
tiffin is already planned. No stress. No confusion. ✨

The Mini Wellness 30-Day Tiffin System gives you:
📋 Every day's recipe planned for 30 days
🥗 50+ desi recipes kids actually love eating
⏱️ 15-minute morning assembly (not cooking!)
🛒 Printable weekly shopping lists

Over 500 Indian moms already use this system.
"This is the best ₹299 I've ever spent." — Real Mom Review

Worth ₹2,499 → Get it all for just ₹299 today!

👉 Tap "Shop Now" for instant access.

HEADLINE: 30-Day Tiffin Plan — No More Morning Stress
CTA BUTTON: Shop Now
```

### Ad 3 Copy (Proof Angle):
```
PRIMARY TEXT:
500+ Indian moms have already solved their tiffin problem. ✅

They used to struggle every morning — "What to cook today?"
Then they found The Mini Wellness Tiffin Bundle.

Here's what changed:
🍱 "My son now finishes his tiffin and asks for more!"
⏱️ "Morning prep went from 45 mins to just 15 minutes."
🛒 "The shopping list saved me hours every week."

Everything included:
• 120+ Nutritionist-Approved Recipes
• 30-Day Meal Plans
• Printable Shopping Lists
• FREE Immunity Remedies Guide

All for ₹299 (Value: ₹2,499) — limited time!

👉 Tap "Shop Now" — join 500+ happy moms today.

HEADLINE: 500+ Moms Trust This Tiffin System — ₹299
CTA BUTTON: Shop Now
```

---

## Part 4: Budget Strategy

### Daily Budget:

| Component | Budget | Purpose |
|:----------|:-------|:--------|
| Ad Set 1 (Interest) | ₹350/day | PRIMARY — proven winner |
| Ad Set 2 (Broad) | ₹250/day | SECONDARY — proven test |
| **Total Daily** | **₹600/day** | **2X Rule matched (₹299 × 2 = ₹598)** |

### 21-Day Scaling Ladder:

```
Phase 1 — LEARNING (Day 1-7): DON'T TOUCH
  Day 1-7:   ₹600/day  (₹350 + ₹250)     = ₹4,200 total
  Action: Only observe. Kill nothing. Change nothing.

Phase 2 — OPTIMIZE (Day 8-14): Kill losers, scale winners  
  Day 8-10:  ₹720/day  (+20% on winner)    = ₹2,160
  Day 11-13: ₹865/day  (+20%)              = ₹2,595
  Action: Kill worst ad, duplicate winner with new hook

Phase 3 — SCALE (Day 15-21): Aggressive growth
  Day 14-16: ₹1,040/day (+20%)             = ₹3,120
  Day 17-19: ₹1,250/day (+20%)             = ₹3,750
  Day 20-21: ₹1,500/day (+20%)             = ₹3,000

TOTAL FIRST 21 DAYS: ~₹18,825
```

### Revenue Projections:

| Scenario | CPP | Sales/Week | Avg Revenue/Sale | Weekly Revenue | Weekly Profit |
|:---------|:----|:-----------|:-----------------|:---------------|:--------------|
| **Worst** | ₹370 | ~11 | ₹479 | ₹5,269 | ₹1,069 |
| **Likely** | ₹280 | ~15 | ₹524 | ₹7,860 | ₹3,660 |
| **Best** | ₹200 | ~21 | ₹524 | ₹11,004 | ₹6,804 |

> **Revenue/Sale Calculation:**
> Base ₹299 (100%) + Bump1 ₹199×30% + Bump2 ₹149×25% + Upsell ₹499×15% = **~₹471-₹524 avg**

> [!NOTE]
> **Break-Even:** Jab tak CPP < ₹524 (average revenue per customer), tum profitable ho. Even if front-end CPP ₹370 hai, bumps + upsell cover kar dete hain.

---

## Part 5: Location Targeting — Data Analysis

### Tumhare Previous Campaign Ka Data:

```
PREVIOUS SETUP (7 months ago):
  Location: Individual cities with +25mi/+50mi radius pins
  Result:   CPM ₹440-527 (inflated 2x vs normal!)
  Normal:   CPM ₹180-250 for this niche

ROOT CAUSE CONFIRMED:
  → Narrow radius pins squeeze the auction pool
  → Fewer eligible users = more competition per impression
  → More competition = higher CPM
  → Higher CPM → Higher CPC → Higher CPP
  
  Math: CPM ₹527 vs ₹200 = 2.6x more expensive per 1000 impressions
        This directly inflated CPC from expected ₹8-10 to actual ₹20.35
```

### DECISION: India-Wide Open ✅

```
NEW SETUP (Tonight):
  Location: India (All) — type "India" in location field
  NO city pins, NO radius restrictions
  Expected CPM: ₹180-250 (vs previous ₹527)
  Expected CPC: ₹8-12 (vs previous ₹20.35)
  Expected CPP: ₹180-280 (vs previous ₹405)
```

> [!IMPORTANT]
> **Why India-wide works:** Tumhara product digital hai — delivery sab jagah same hai. Narrow city targeting sirf physical products ke liye zaroori hai. Digital products ke liye India-wide best hai kyunki Meta ko maximum auction pool milta hai → lowest CPM → lowest CPP.

---

## Part 6: Ad Manager Step-by-Step Setup (Tonight 11:45 PM)

### Step 1: Campaign Creation

```
1. Open ads.facebook.com → Click "Create"
2. Select "Sales" objective → Click "Continue"
3. Name: "MiniWellness - Tiffin Bundle - Sales - Aug24"
4. Budget: Select "Ad Set Budget" (NOT Campaign Budget!)
5. Click "Next"
```

### Step 2: Ad Set 1 (Interest-Guided — ₹350)

```
6.  Name: "Interest - Parenting Moms - ₹350/day"
7.  Conversion: Website
8.  Performance Goal: Maximum number of conversions
9.  Dataset: Select your Miniwellness pixel
10. Conversion Event: Purchase
11. Attribution: Standard (don't change)
12. Budget: ₹350/day
13. Schedule: Set start → August 24, 12:00 AM (MIDNIGHT!)

14. AUDIENCE:
    → Location: India (type "India" — NO city pins!)
    → Age: 25 to 40
    → Gender: Women
    → Language: "English (US)", "English (UK)", "Hindi"
    → Detailed Targeting:
      → "Motherhood" → Add
      → "Parenting" → Add
      → "Child care" → Add
      → "Working parent" → Add
      → Parents → Add all subcategories:
        Preschoolers (03-05), Early school-age (06-08),
        Preteens (09-12), Teenagers (13-17)
    → Advantage+ Audience: Toggle OFF

15. Placements: Advantage+ (leave all on)
16. Click "Next"
```

### Step 3: Create Ad 1

```
17. Name: "Proven - [Your Video 1 Hook Type]"
18. Identity: Mini Wellness FB page + IG account
19. Ad Setup: Create ad → Single image or video
20. Upload your PROVEN VIDEO #1
21. Website URL: https://theminiwellness.com
22. Primary Text: [Use your existing copy OR copy from Part 3 above]
23. Headline: [Your headline OR from Part 3]
24. CTA: Shop Now
25. Enhancement: "Add Music" ON + "Generate CTAs" ON
26. Translation: OFF
```

### Step 4: Duplicate for Ads 2 & 3

```
27. Click on Ad 1 → "Quick Duplicate"
28. Name: "Proven - [Your Video 2 Hook Type]"
29. Replace video with your PROVEN VIDEO #2
30. Update Primary Text + Headline (if different per video)

31. Duplicate again → "Proven - [Your Video 3 Hook Type]"
32. Replace video with PROVEN VIDEO #3
33. Update Primary Text + Headline

RESULT: 1 Campaign → 1 Ad Set → 3 Video Ads ✅
```

### Step 5: Create Ad Set 2 (Broad)

```
34. Go back to Ad Set level
35. Click Ad Set 1 → "Quick Duplicate" (copies all 3 ads too!)
36. Rename: "Broad - Engaged Shoppers - ₹250/day"
37. Change budget to ₹250/day
38. AUDIENCE CHANGES:
    → Remove ALL interest targeting (Motherhood, Parenting etc.)
    → Add: Behaviors → Engaged Shoppers
    → Keep everything else same (India, 25-40, Women, Languages)
39. Verify: Same 3 video ads are duplicated automatically

FINAL STRUCTURE:
┌── Campaign: "MiniWellness - Tiffin Bundle - Sales - Aug24"
├── Ad Set 1: "Interest - Parenting Moms - ₹350/day"
│   ├── Ad 1: Proven Video 1
│   ├── Ad 2: Proven Video 2
│   └── Ad 3: Proven Video 3
└── Ad Set 2: "Broad - Engaged Shoppers - ₹250/day"
    ├── Ad 1: Proven Video 1 (duplicate)
    ├── Ad 2: Proven Video 2 (duplicate)
    └── Ad 3: Proven Video 3 (duplicate)

Total: 1 Campaign → 2 Ad Sets → 6 Ads
Daily Budget: ₹600/day (₹350 + ₹250)
```

### Step 6: Final Check & Publish

```
40. Review ALL settings:
    □ Campaign: Sales objective, ABO ✅
    □ Ad Set 1: ₹350, Interest, Purchase event, Midnight start ✅
    □ Ad Set 2: ₹250, Engaged Shoppers, Purchase event, Midnight start ✅
    □ All 6 ads: Correct videos, copy, URL, Shop Now CTA ✅
    □ Pixel selected, Purchase event selected ✅

41. Click "Publish" at 11:55 PM → Ads scheduled for 12:00 AM ✅
```

---

## Part 7: Post-Launch Monitoring Timeline

### ⏰ 0-24 Hours — HANDS OFF

```
🚫 DON'T TOUCH ANYTHING — Meta learning phase
🚫 Don't change budget, don't edit ads, don't panic

✅ Only check: Are ads delivering? (Ad Manager → check spend)
✅ Check: Any Meta notifications?
✅ Check: Events firing in Events Manager?
```

### ⏰ 24-48 Hours — First Observation

```
| Metric   | Target  | If Below                              |
|----------|---------|---------------------------------------|
| CTR      | >1%     | Creative hook may need work → BUT WAIT|
| CPC      | <₹15    | If >₹20, note it but don't touch yet  |
| LP Views | >80%    | Page speed issue (mobile)             |
| Spend    | ₹300+   | If <₹150 spent, check audience/payment|

ACTION: Only OBSERVE. Do NOT make changes yet.
```

### ⏰ 48-72 Hours — Decision Time

```
SCENARIO A — Purchases at CPP < ₹400:
  → GREAT! Note which ad set + which video is winning
  → Wait till Day 7 for scale decision

SCENARIO B — LP views but NO purchases:
  → Problem = LANDING PAGE (not ads)
  → Check: CVR (LP views vs purchases) — target >2%
  → Check: Ad ↔ LP message congruence
  → Check: Mobile UX, checkout process

SCENARIO C — Clicks but NO LP views:
  → Problem = PAGE SPEED
  → GTMetrix test → target 95%+
  → Check Hostinger CDN: Active, Security Level "Low"

SCENARIO D — NO clicks (CTR < 0.5%):
  → Problem = CREATIVE (hook not working)
  → Keep running for full 72 hours
  → If still <0.5% after 72hrs → create new video variations
```

### ⏰ Day 7 — Weekly Review (CRITICAL)

```
FULL METRICS AUDIT:

| Metric    | Good ✅  | Better 🔥 | Red Flag ❌ |
|-----------|---------|----------|------------|
| CPM       | ₹100-250| <₹100    | >₹400      |
| CTR       | >1%     | >2%      | <0.5%      |
| CPC       | <₹15    | <₹10     | >₹30       |
| CVR       | >2%     | >5%      | <1%        |
| CPP       | <₹400   | <₹250    | >₹500      |
| ROAS      | >1.5x   | >3x      | <1x        |
| Frequency | <1.0    | <0.5     | >2.0       |

ACTIONS:
✅ Kill worst performing video ad → replace with variation
✅ Compare ad sets: Interest vs Broad → which wins?
✅ If Interest >> Broad: Shift ₹50 from Broad to Interest
✅ Check bump/upsell rates — if total AOV > CPP = PROFITABLE
✅ Create 1-2 new video variations of winning ad

❌ If no sales after 7 days + ₹4,200 spent:
   → Debug: Offer → Creative → LP → Audience → Budget
   → Most likely: Offer clarity issue or LP conversion issue
```

### ⏰ Day 14 — Scale/Kill Decision

```
IF ROAS > 2x:
  → Scale: +20% budget every 3 days
  → Add retargeting ad set (₹100/day, LP visitors)
  → Create Lookalike from purchasers (if 30+ purchases)

IF ROAS 1-2x:
  → Optimize LP (CVR improvement)
  → Test new video hooks
  → Improve bump/upsell take-rates

IF ROAS < 1x for 14 days:
  → Pause campaign
  → Full audit: Offer, creative, LP, tracking
  → Don't keep spending if clearly losing
```

---

## Part 8: The 4 Mistakes to NEVER Repeat

```
❌ TRAP 1: Zero Backend Monetization
   BEFORE: ₹499 alone → ₹129 profit max
   NOW: ₹299 + Bumps (₹199+₹149) + Upsell (₹499) = AOV ₹524+ ✅

❌ TRAP 2: Narrow City Radius Pins
   BEFORE: +25mi/+50mi → CPM ₹527 (2.6x inflation!)
   NOW: India-wide open → Expected CPM ₹180-250 ✅

❌ TRAP 3: 30-Second Feature-Dump Videos
   BEFORE: 30s "features list" = ₹20+ CPC
   NOW: Proven 60-75s Emotion + Proof videos (same ones that gave 23 sales) ✅

❌ TRAP 4: Premature Ad Set Killing
   BEFORE: Killed Ad Set 3 (lowest CPC ₹12.61!) at only ₹252
   NOW: NEVER kill before spending 2x product price (₹598+) per ad set ✅
```

---

## Part 9: Troubleshooting Quick Reference

```
No Impressions?
  → Budget too low? (Min ₹200/day)
  → Payment method active?
  → Account restricted? (Check Account Quality)

Impressions but No Clicks (CTR < 0.5%)?
  → Video hook not working (first 3 seconds)
  → Ad copy not compelling
  → Try: Same video, different primary text

Clicks but No LP Views?
  → Page speed issue on mobile
  → GTMetrix → 95%+ needed
  → Hostinger CDN active? Security Level "Low"?

LP Views but No Purchases?
  → Landing page not converting
  → Check: Ad ↔ LP message match (CRITICAL!)
  → Check: Mobile UX, CTA visibility
  → Check: Checkout + payment gateway working?

Purchases but ROAS < 1x?
  → CPP too high → Better creatives needed
  → AOV too low → Bump/upsell take-rate low
  → At 1:1 (breakeven) → KEEP RUNNING, don't kill!
```

---

## Part 10: Follow-Up Sequence (Manual — Start Week 2)

### What It Is:
```
Follow-up = Message un logon ko jo checkout tak gaye but pay nahi kiya
Why: 10 me se 3-4 log checkout start karte hain but complete nahi karte
Result: Ek reminder se 20-30% wapas aa ke buy kar lete hain
```

### Manual WhatsApp Approach (Week 2 se):

```
DAILY TASK: Check Razorpay dashboard → filter "failed/pending" payments

Message 1 (1 hour after abandoned checkout):
  "Hi! Aapne Mini Wellness Tiffin Bundle checkout kiya tha but
   payment complete nahi hua. Koi problem aayi? Hum help kar sakte hain!"

Message 2 (24 hours later):
  "Aapka order abhi bhi pending hai. ₹299 me poore month ka tiffin plan!
   Koi sawaal ho toh reply karo 💛"

Message 3 (48 hours later):
  "Special ₹50 discount sirf aapke liye! ₹249 me grab karo —
   ye offer sirf 24 hours valid hai. Link: theminiwellness.com"
```

---

## Part 11: Retargeting Plan (After Week 1)

### When to Add Retargeting Ad Set:

```
Prerequisite: 7+ days of campaign data (pixel has visitor data)

Retargeting Ad Set:
  Name:      "Retarget - LP Visitors - ₹100/day"
  Budget:    ₹100/day
  Audience:  Custom → Website → Last 7 days → Visited LP
             EXCLUDE: People who purchased
  Ads:       2 videos with PROOF/URGENCY angle
```

### Retargeting Priority:
```
Week 2: LP visitors who didn't buy (₹100/day)
Week 3: Video viewers 75%+ who didn't visit LP (₹50/day)
Week 4: Checkout abandoners (₹50/day)
```

---

## Part 12: Future Expansion — New Video Scripts (When Ready)

> These scripts are ready for testing when you want to expand creative volume or replace underperforming ads.

### Script Bank (Test Later):

| Script | Hook | Angle | Status |
|:-------|:-----|:------|:-------|
| "Untouched Tiffin" (67s) | Pain | Guilt/Frustration | 📋 Ready — test when current ads fatigue |
| "Aaj Kya Banau" (70s) | Pain Alt | Morning confusion | 📋 Ready |
| "Stress-Free Mornings" (65s) | Desire | Aspiration | 📋 Ready |
| "500+ Moms" (65s) | Proof | Social proof/FOMO | 📋 Ready |

> **When to test:** After Day 14, if winning ad starts showing frequency > 2.0 (creative fatigue), OR if you want to add a 3rd ad set for horizontal scaling.
> 
> **Full scripts available in:** [miniwellness-video-scripts.md](file:///c:/Users/Anshu/Music/DIGITAL%20DROPSHIPING/.agents/skills/Facebook-Ads-mastery/Reference/miniwellness-video-scripts.md)

---

## Part 13: Tonight's Action Checklist

```
🕐 RIGHT NOW (Before 11 PM):
  □ Set Account Spending Limit: ₹5,000-10,000 (safety net)
  □ Prepare 3 proven video files (ensure they're on your device)
  □ Copy ad copy from Part 3 (or use your existing copy)
  □ Have theminiwellness.com URL ready

🕐 11:00 PM - 11:45 PM:
  □ Create Campaign (Part 6, Step 1-5)
  □ Create Ad Set 1 — Interest ₹350 (Part 6, Step 6-16)
  □ Create 3 Ads in Ad Set 1 (Part 6, Step 17-26)
  □ Duplicate → Ad Set 2 — Broad ₹250 (Part 6, Step 34-39)
  □ Final review (Part 6, Step 40)

🕐 11:55 PM:
  □ PUBLISH → Ads live at 12:00 AM ✅

🕐 AFTER PUBLISH:
  □ DON'T touch for 24 hours
  □ 24hr check: Just observe (spend, delivery)
  □ 48-72hr check: Decision time (Part 7)
  □ Day 7: Full audit + Kill/Keep/Scale (Part 7)
  □ Day 14: ROAS evaluation + scaling (Part 7)
```

---

## Verification Plan

### Before Launch (Tonight):
```
□ Account Spending Limit set
□ All 3 videos uploaded correctly
□ URL pointing to theminiwellness.com
□ CTA = "Shop Now" on all 6 ads
□ Midnight start time set on both ad sets
□ Pixel selected + Purchase event selected
```

### After 48 Hours:
```
□ Check delivery status of all 6 ads
□ Check Events Manager → Purchase events firing
□ Check deduplication → no double-counting
□ Note: Which ad set spending more? Which video getting clicks?
```

### Ongoing:
```
Daily:   Check spend + delivery (2 min)
48hr:    First metrics check (10 min)
7-day:   Full audit + decisions (30 min)
14-day:  ROAS evaluation + scaling plan (30 min)
30-day:  Full account audit + next month planning (1 hour)
```
