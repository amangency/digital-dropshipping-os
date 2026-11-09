---
name: Anti-Slop Web Design & Landing Page Architect
description: "World-class anti-AI-slop web design skill for digital product landing pages, audits, redesigns, and conversion optimization. Synthesized from Hallmark (Nutlope/hallmark — 57-gate slop test, 21 themes, structural variety), Impeccable (pbakaus/impeccable — 23 steering commands, 59 detector rules), and high-converting digital product sales page frameworks. Triggers on any discussion about landing page design, UI/UX aesthetics, frontend styling, anti-slop audit, typography, colors, animations, sales page redesign, component styling, or conversion optimization."
---

# 💎 Anti-Slop Web Design & Landing Page Architect

A design skill for your AI coding assistant. Makes the UIs it generates look **made, not generated**.

This skill encodes a tight, opinionated set of rules — drawn from the consensus of the anti-AI-slop design field — and refuses to let the model fall back to the defaults every LLM was trained on.

**Sources synthesized:**
1. **[Nutlope/hallmark](https://github.com/Nutlope/hallmark)** — 58-gate slop test, 21 themes, 4 genres, structural variety enforcement, pre-emit self-critique.
2. **[pbakaus/impeccable](https://github.com/pbakaus/impeccable)** — 23 steering commands, 59 deterministic detector rules, live browser iteration, craft-floor quality enforcement.
3. **Digital Product Conversion Science** — Hormozi value equation layouts, Bento grid value stacks, infinite social proof marquees, sticky mobile CTAs, Indian-market mobile optimization.

---

## How to use this skill

This skill has one default behaviour and four explicit commands.

| Command | What it does |
| :--- | :--- |
| *(default)* | The user asked to design or build something new. Follow the **Design Flow** below. |
| `audit <target>` | Score existing code against the 58-gate slop test + anti-pattern list. Return a ranked punch list with AI-Slop Score (0–100). **Do not edit.** |
| `redesign <target>` | Take the target's content and intent, then rebuild the visual structure. New section rhythm, new heading placement, new component voice. Preserve copy intent, brand, and information architecture. |
| `study <screenshot \| URL>` | Extract the **DNA** from a design you admire — macrostructure, type-pairing, colour anchor — and produce a diagnosis report. |

---

## Core Design Philosophy

> "Every model trained on the same SaaS templates. Skip the guidance and you get the same handful of tells on every project: Inter for everything, purple-to-blue gradients, cards nested in cards, gray text on colored backgrounds, the rounded-square icon tile above every heading."
> — Paul Bakaus, Creator of Impeccable

**Two pages built with this skill for two different briefs should feel like different sites, not colour-swaps of the same template.**

---

## The Six Universal Disciplines

These apply to EVERY output — default design, audit, redesign, and component-scope alike.

### 1. Pre-Emit Self-Critique (Six Axes)
Before handing back ANY output, score it 1–5 on these axes. Anything **< 3** triggers a revision pass.

| Axis | What you're scoring |
| :--- | :--- |
| **Philosophy** | Is there a clear *why* — a position the page is taking? Or is it just a layout? |
| **Hierarchy** | Can a reader tell, in 2 seconds, what's primary, secondary, tertiary? |
| **Execution** | Are the details (rule weight, accent footprint, contrast, focus rings) all in spec? |
| **Specificity** | Does this look like *this brief* — or does it look generic? |
| **Restraint** | Have you removed everything that isn't earning its place? |
| **Variety** | Does this output share a structural fingerprint with a previous output? |

### 2. Honest Copy — No Fabricated Content
If the user did not supply a metric, do NOT invent one. "+47% conversion", "trusted by 50,000+ teams", "10× faster" are slop the moment they're invented. Same for fake testimonials, logos, and case-study counts. Use a placeholder (`—` plus a labelled grey block, "metric to confirm") or a different layout.

### 3. Locked Tokens — No Mid-Render Improvisation
Once a theme is selected, every colour and font declaration must reference a named CSS custom property (`var(--color-accent)`, `font-family: var(--font-display)`). Inline hex/rgb values or `font-family: "Some Font"` declarations that bypass the token block are banned.

### 4. Re-Drawn Chrome Forbidden
Never hand-build fake browser bars, fake phone frames, fake code-block windows with mock title bars and dots. The user's environment supplies real chrome.

### 5. Mobile Responsiveness — Every Emit Verified at 320 / 375 / 414 / 768px
Non-negotiables:
- No horizontal scroll. Root `overflow-x: clip` on both `html` and `body` (never `hidden` — it breaks `position: sticky`).
- No two-line clickable text on buttons, primary nav links, CTAs.
- Image grid tracks use `minmax(0, 1fr)`, never bare `1fr`.
- Display headers wrap inside long words via `overflow-wrap: anywhere; min-width: 0`.

### 6. Typography Purity — No Italic Headers
Headings and display type are ALWAYS roman (`font-style: normal`). An italicised emphasis word inside an upright heading (`Built to *think*`) is one of the most reliable AI tells. Carry emphasis with weight, accent colour, or a drawn underline. Italic survives only as body-copy emphasis in running paragraphs.

---

## 🚫 Named Anti-Patterns (The "Tells" of AI Design)

Each of these is a signature of AI-generated UI. Seeing one is a problem; seeing two in the same view is a confirmation.

### CRITICAL — Ships as Slop (Instant Fail)

| Tell | Why it reads AI-generated | Fix |
| :--- | :--- | :--- |
| **Purple-gradient hero** | Purple-to-blue/pink gradient background with white centred text. Single most-recognised AI aesthetic. | Pick a single anchor hue. One accent. No gradient backgrounds on heroes. Tint neutrals for warmth. |
| **Inter-everywhere** | Inter / Roboto / Open Sans as both display and body, no pairing. A one-font page is a template page. | Pair a distinctive display face (*Plus Jakarta Sans, Outfit, Syne*) with a refined body face (*Inter, DM Sans, Geist*). |
| **3-column feature grid** | Three equal columns, icon above heading above body. 24px gap. Every LLM emits this. | Break the grid. Vary column widths. Mix card heights. Remove one card. Move icons inline. Use Bento Grid instead. |
| **Card-in-card nesting** | Bordered container with cards inside it. Visual nesting with no semantic reason. | Pick ONE containment layer. Usually the outer one is wrong. |
| **Gradient headline** | `background-clip: text` with linear gradient fill (purple-to-pink, blue-to-cyan). | Solid ink. Use weight, display face, or accent colour for emphasis — never gradient fill. |
| **Side-stripe card** | Card with thick coloured border on one edge (usually left, 4–6px, purple/green). | Hairline border all around, or no border, or a small accent square beside heading. |
| **Full-viewport centred hero** | `min-height: 100vh`, everything centred, one short sentence, one big CTA. The default LLM landing page. | Let hero be content height. Bias left or right. Put more content in it. |
| **Pure black / pure white** | `#000000` background or `#ffffff` surface. Both flat and synthetic. | Tint toward anchor hue. Dark: `#0B0F17`, `#121826`, `#1C1917`. Light: `#FAFAF9`, `#FDFBF7`. |
| **The AI nav** | Wordmark left, 4–5 inline links centred, CTA button right, sticky, white bg, 1px border-bottom. Genre-blind. | Pick navigation that matches the genre. Floating pill, newspaper masthead, brutal slab, edge-aligned minimal. |
| **The AI footer** | 4 columns of links (Product · Company · Resources · Legal), social icons, copyright. Identical everywhere. | Close the page. Use newsletter-first, statement, letter close, or inline single line. |
| **Aurora-blob background** | Flowing organic mesh blobs in purple-to-pink-to-cyan layered behind hero. | Solid surface. Or subtle two-stop gradient + SVG grain at < 0.1 opacity. |
| **Floating-orb decoration** | Ambient 3D spheres or blurred circles drifting behind hero. No semantic role. | Cut them. Strong typographic anchor > generic depth. |

### MAJOR — Looks AI-Generated

| Tell | Fix |
| :--- | :--- |
| **Bounce/elastic easing** | Use exponential ease-out. Overshoots only for physical interactions. |
| **Centred everything** | Bias the layout. Wide left, narrow right (or reverse). Break symmetry once. |
| **Italic headers** | Roman only. Weight/colour/underline for emphasis. |
| **Eyebrow on every section** | Default OFF. Only when genuinely numbered/chaptered content. Cap at 1–2 per page. |
| **`transition: all`** | Specify exact properties. `transition: transform 200ms ease-out, opacity 200ms ease-out`. |
| **`hover:scale-105` everywhere** | Vary hover effects per element type. Not uniform scale on everything. |
| **Multiple simultaneous hover effects** | No translate + scale + shadow + colour + rotate all at once on the same element. |
| **Emoji as feature icons** | ✨🚀⚡🔥🎯✅ as feature-card icons is an AI tell. Use one icon library (Lucide/Phosphor) or lead with typography. |

---

## 🔍 The 58-Gate Slop Test

Run this list before handing back any output. Every answer must be **NO**.

### Visual Gates (1–7)
1. Is the display font Inter, Roboto, Open Sans, Poppins, Lato, or system default?
2. Is there a purple-to-blue gradient anywhere — **including gradient text**?
3. Is there a 3-equal-column card grid with icon-above-heading tiles?
4. Is any card nested inside another card?
5. Is any card using a thick coloured side-stripe border?
6. Is the hero `min-height: 100vh` with everything centred on the same axis?
7. Is pure `#000` or `#fff` used as a base colour?

### Structural Gates (8–9)
8. Does the page reuse the generic AI template (Hero → 3 features → CTA → footer)?
9. Are sections separated only by equal whitespace — every section identical in rhythm?

### Microinteraction Gates (10–19)
10. Is `transition: all` used anywhere?
11. Is `hover:scale-105` applied uniformly across multiple elements?
12. Are bouncy/elastic easings used on UI state changes?
13. Does any element have more than one hover effect simultaneously?
14. Are `width`, `height`, `top`, `left`, `margin`, or `padding` being animated?
15. Does the focus ring fade in? (Must appear instantly.)
16. Is there a celebratory toast for an action whose effect the user already sees?
17. Are tooltip hover-delay and focus-delay equal? (Hover: 800–1000ms; Focus: 0ms.)
18. Is auto-rotating content lacking pause-on-hover-and-focus? (WCAG 2.2.2.)
19. Is there a placeholder name "Jane Doe / John Smith" or startup cliché?

### Implementation Gates (22–27)
22. Does any neutral use zero-chroma (`oklch(... 0 ...)`)? Tint every neutral — min 0.005 chroma.
23. Does accent colour cover > 5% of any viewport? Accent is for emphasis, not filling.
24. Is any padding/gap/margin a value not on a 4px spacing scale?
25. Is any prose `max-width` outside 45–75ch range?
26. Does any interactive element lack `:focus-visible`, `:active`, OR `:disabled` styling?
27. Is any animation NOT covered by `@media (prefers-reduced-motion: reduce)`?

### Hero Enrichment Gates (28–31)
28. Does hero video autoplay with sound, lack `poster`, or lazy-load the LCP element?
29. Is abstract background > one accent colour, > 5% footprint, or animated mesh on whole page?
30. Are two or more icon libraries mixed, OR are emoji glyphs used as feature icons?
31. Did you default to Lottie when hand-built SVG or pure-CSS would work?

### Typography Gates (37–38a)
37. Are more than 3 distinct `font-family` families used? (Display + Body + 1 Outlier max.)
38. Is the outlier face used in more than 2 slots?
38a. Is any heading or display type italic?

### Layout-Safety Gates (34–36)
34. Does the page horizontally scroll on any viewport 320px–1920px?
35. For decorative text effects — is position/size visually confirmed?
36. Are interactive bars explicitly vertically centred? (`align-items: center`, not default `stretch`.)

### Content Integrity Gates (46–47)
46. Did you invent any metrics, testimonials, fake case-study counts, or logos?
47. Did you draw fake browser bars, phone frames, or IDE chrome?

---

## 🏗️ Impeccable Craft Floor (from pbakaus/impeccable `craft-floor.md`)

> "Load this after the direction is settled, and build without announcing the checklist. A pinned brief or the committed visual world overrides anything here; your own habit does not."
> — Paul Bakaus, Impeccable

The craft floor is a quality gate on the **built result**, not an intention. Run these checks together in batched inspection rounds, not as separate screenshot trips.

### Verify Checklist (Every Output Must Pass All)

| Check | What to verify | Standard |
| :--- | :--- | :--- |
| **Contrast** | Body and placeholder text contrast ratio. On colored surfaces, tint secondary text from that hue — never gray. | Body ≥ 4.5:1, Large text ≥ 3:1 |
| **Depth** | Shadows carry an offset AND a soft blur. A zero-offset colored halo is decoration, not depth. | Offset + blur required |
| **Spacing** | Tight groups, generous separation. More space ABOVE a heading than below it. Read computed values. | 4px/8px scale only |
| **Type** | Body measure, display max-size, tracking floor, balanced headings, obvious scale steps. Run real copy at every breakpoint. | Body 65–75ch, Display max 6rem, tracking ≥ -0.04em |
| **Motion** | ONE authored moment, not scattered effects. Exponential ease-out from an already-visible default. Reach past `transform` and `opacity`: blur, backdrop-filter, clip-path, mask, shadow all belong to the palette. | No identical entrance on every section |
| **States** | hover, disabled, loading, error, empty. Plus real content, working controls, responsive composition, keyboard focus. | All 5 states implemented |
| **Browser Surfaces** | Text selection, caret, custom scrollbars, focus rings, underline offset, tabular-data numerals. These ship with browser defaults that belong to no design system. Theme them. | "The cheapest signal that a page was built rather than assembled" |
| **Copy** | Controls name their action. Errors name the problem AND the recovery. | Product's own language |
| **Coverage** | Every brief requirement present and findable within seconds. | No missing sections |

### Absolute Bans (from Impeccable `craft-floor.md`)

These are the **category's defaults** — reaching for one when the axis is free means you were not deciding:

1. **Same-size cards of icon + heading + text** as the page structure. Cards are the lazy container; nested cards are always wrong.
2. **The hero-metric template:** big number, small label, supporting stats, accent. (Use only when real data supports it.)
3. **A kicker/eyebrow above a heading.** This is a BAN, not a default. No brief earns it back. The heading IS the hierarchy; decoration above it weakens it.

---

## 📊 Impeccable 5-Dimension Audit Framework (from pbakaus/impeccable `audit.md`)

When running `audit`, score across these 5 dimensions (0–4 each):

### 1. Accessibility (A11y) — Score 0–4
Check for:
- **Contrast issues:** Text contrast < 4.5:1 (or 7:1 for AAA)
- **Motion sensitivity:** `prefers-reduced-motion` needs intentional alternative, NOT a global `0.01ms` kill
- **Missing ARIA:** Interactive elements without proper roles, labels, states
- **Keyboard navigation:** Missing focus indicators, illogical tab order, keyboard traps
- **Semantic HTML:** Improper heading hierarchy, missing landmarks, divs instead of buttons
- **Form issues:** Inputs without labels, poor error messaging

### 2. Performance — Score 0–4
Check for:
- **Layout thrashing:** Reading/writing layout properties in loops
- **Expensive animations:** Layout-property animation, unbounded blur/filter/shadow, frame drops
- **Missing optimization:** Images without lazy-loading (below-fold only), unoptimized assets
- **`will-change` overuse:** Applied broadly or left on at rest (targeted hint only)
- **Bundle size:** Unnecessary imports, unused dependencies

### 3. Theming — Score 0–4
Check for:
- **Hard-coded colors:** Colors not using CSS custom property tokens
- **Broken dark mode:** Missing dark variants, poor contrast
- **Inconsistent tokens:** Using wrong tokens, mixing systems
- **Theme switching:** Values that don't update on theme change

### 4. Responsive Design — Score 0–4
Check for:
- **Fixed widths:** Hard-coded widths that break on mobile
- **Touch targets:** Interactive elements < 44×44px
- **Horizontal scroll:** Content overflow on narrow viewports
- **Text scaling:** Layouts that break when text size increases

### 5. Code Quality — Score 0–4
Check for:
- **Inline styles** vs. design tokens
- **Dead code / unused CSS rules**
- **Specificity wars** and `!important` overuse
- **Naming consistency** across classes and variables

**Total Score:** Sum all 5 dimensions (max 20). Report as `/20` with per-dimension breakdown.

---

## 🔧 Impeccable Polish Protocol (from pbakaus/impeccable `polish.md`)

> "Polish is refinement, never concealed redesign. Preserve the incumbent visual world, content, behavior, and everything outside scope."

### Polish Priority Order (Fix in This Sequence)
1. **Broken/blocked tasks** — data loss, misleading state, inaccessible paths
2. **Missing states** — loading, empty, error, success, disabled, permission
3. **Flow/hierarchy/responsive drift** — design system inconsistencies
4. **Visual and motion inconsistencies** — spacing, colour, animation mismatches
5. **Code and asset cleanup** — unused vars, dead CSS, un-minified assets

### System Drift Classification
Before fixing anything, classify each issue:
- **Missing token:** the system needs a reusable value (add to `:root`)
- **One-off implementation:** existing shared component should replace it
- **Conceptual mismatch:** hierarchy differs from comparable product areas
- **Local defect:** implementation simply incomplete or inconsistent

**Rule:** Do not perfect one corner while leaving the rest below the same quality bar.

---

## 🎨 Niche-Specific Colour Systems

### Health & Family / Parenting (MiniWellness, Mom-Targeted Products)
```css
:root {
  --color-surface:    #FAFAF9;   /* Warm cream paper */
  --color-surface-2:  #F5F0EB;   /* Soft warm grey */
  --color-ink:        #1C1917;   /* Warm charcoal (never pure black) */
  --color-ink-soft:   #57534E;   /* Muted warm stone */
  --color-accent:     #064E3B;   /* Deep emerald (trust, health) */
  --color-accent-2:   #D97706;   /* Honey amber (warmth, energy) */
  --color-highlight:  #E6F4EA;   /* Soft sage highlight */
  --color-danger:     #DC2626;   /* Clear red for urgency/scarcity */
  --color-focus:      #2563EB;   /* Focus ring blue */
  --font-display:     'Plus Jakarta Sans', sans-serif;
  --font-body:        'Inter', sans-serif;
}
```

### Wealth / Finance / Business
```css
:root {
  --color-surface:    #F8FAFC;
  --color-ink:        #0F172A;
  --color-accent:     #1E40AF;   /* Deep cobalt */
  --color-accent-2:   #10B981;   /* Success emerald */
  --font-display:     'Outfit', sans-serif;
  --font-body:        'DM Sans', sans-serif;
}
```

### Personal Growth / Lifestyle
```css
:root {
  --color-surface:    #FDFBF7;   /* Warm alabaster */
  --color-ink:        #1E1B4B;   /* Rich indigo ink */
  --color-accent:     #7C3AED;   /* Deep violet (NOT generic purple gradient) */
  --color-accent-2:   #F97316;   /* Terracotta coral */
  --font-display:     'Syne', sans-serif;
  --font-body:        'Inter', sans-serif;
}
```

---

## 🏛️ Digital Product Sales Page — Anti-Slop Section Blueprint

For digital product landing pages, use these conversion-optimized section patterns instead of generic AI layouts:

### 1. Hero Section (The Instant Hook)
- **Social Proof Pill:** Pulsing dot + text ("🔥 1,200+ moms joined"). NOT centred hero. Bias left.
- **Headline:** Problem-to-Outcome in display font. Accent colour on the outcome word. NO gradient text.
- **Avatar Stack:** 4 overlapping circles + "★★★★★ 4.9 from 850+ reviews".
- **Shimmer CTA:** Subtle light-sweep animation every 3s on the primary button. NOT bouncy.
- **Trust Signals:** UPI/Card logos + "Instant Digital Download" + "100% Refund Promise".

### 2. Bento Grid Value Stack (NOT Bullet Lists)
Replace boring 6-card grids with an asymmetric Bento layout:
- 1 hero card (double width, main product with preview mockup)
- 2 compact cards (supporting guides with icon + mini badge)
- 1 accent-glow card (highlighted bonus with leaf/shield icon)
- 2 small cards (remaining items)

### 3. Social Proof Infinite Marquee
- 2-row horizontal ticker (`animation: marquee 30s linear infinite`).
- Real review cards with WhatsApp-style bubble styling + "Verified Purchase ✓" tags.
- `pause-on-hover-and-focus` for WCAG compliance.

### 4. Hormozi Price Anchor Block
- High-contrast card with:
  - Strikethrough original value: `<s>₹2,194</s>`
  - Bold launch price: `₹299` with "86% OFF" pill badge
  - Comparison anchor: "Less than a single Swiggy pizza!"
  - Guarantee shield: "7-Day Mom-to-Mom Promise: 100% refund if mornings aren't easier."
- NO generic pricing table. This is a single-product value anchor.

### 5. Sticky Mobile Bottom Bar
- Fixed bottom container, visible on mobile after scrolling past hero section:
  - Left: Price `₹299` + `★ 4.9`
  - Right: Full-width CTA button "Download Now ➔"
  - Height: 64px. Touch target: ≥ 44px.
  - `backdrop-filter: blur(12px); background: rgba(255,255,255,0.95);`

### 6. FAQ Accordion
- Smooth expand/collapse with `max-height` transition (NOT `height` animation).
- `prefers-reduced-motion` fallback: instant open/close.
- Each answer ≤ 3 sentences. Link to detailed page if longer.

---

## ⚡ Performance Rules (Indian Mobile Networks)

- **Strict Zero-JS Animation Rule**: Do NOT use `framer-motion` or similar heavy JavaScript animation libraries. They cause severe main-thread blocking on low-end mobile devices.
- **Vanilla Implementation**: ALWAYS implement scroll animations (fade-ins, slide-ups) using native CSS (`opacity`, `transform`, `transition`) triggered by a lightweight React `IntersectionObserver` hook.
- **Page weight < 500KB.** No heavy JS frameworks for simple sales pages.
- **LCP < 1.5s on 4G.** Hero image/video: `fetchpriority="high"`, NO `loading="lazy"`.
- **Core Web Vitals:** CLS < 0.1, FID < 100ms, INP < 200ms.
- **Font loading:** `font-display: swap` + `<link rel="preload" as="font">` for display font only.
- **Above-the-fold images:** WebP/AVIF with explicit `width` and `height` attributes.

---

## 📋 The 2+1 Typography Rule

Exactly **two** font families for the page surface, plus at most **one** outlier:

| Slot | Role | Example |
| :--- | :--- | :--- |
| `--font-display` | Headlines, hero, section titles. Bold 700/800. `letter-spacing: -0.02em`. | Plus Jakarta Sans, Outfit, Syne |
| `--font-body` | Body text, descriptions, UI labels. Regular 400. `line-height: 1.6`. | Inter, DM Sans, Geist |
| `--font-outlier` | *(Optional)* Wordmark OR one hero stat OR one pull-quote. MAX 2 slots per page. | A serif for the wordmark only |

A fourth family on the page is slop. Same family at different weights counts as one family.

---

## Steering Commands Quick Reference

| Command | What it does |
| :--- | :--- |
| **`audit`** | Full 58-gate slop test. AI-Slop Score 0–100. Punch list, no edits. |
| **`polish`** | Final pass: design-system alignment, spacing cleanup, shipping readiness. |
| **`bolder`** | Amplify boring designs. More contrast, stronger hierarchy, bigger type. |
| **`quieter`** | Tone down overly bold designs. More whitespace, less accent. |
| **`distill`** | Strip to essence. Remove everything not earning its place. |
| **`harden`** | Error handling, text overflow, edge cases, disabled states. |
| **`animate`** | Add purposeful motion. Shimmer CTAs, smooth reveals, parallax. |
| **`colorize`** | Introduce strategic colour. Replace generic palette with niche-specific tokens. |
| **`typeset`** | Fix font choices, hierarchy, sizing. Apply 2+1 rule. |
| **`layout`** | Fix layout, spacing, visual rhythm. Apply Bento patterns. |
| **`delight`** | Add moments of joy. Micro-interactions, hover states, animated badges. |
| **`mobile-boost`** | Optimize for Indian mobile: sticky CTA bar, touch targets, 4G performance. |
| **`redesign`** | Full visual rebuild. New structure, new theme, same content. |
| **`study`** | Extract DNA from a design you admire. |
