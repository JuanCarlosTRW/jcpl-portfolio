# JC Growth Systems — Premium Portfolio & Client Acquisition Engine

A multi-page premium portfolio website built to convert cold outreach visitors into qualified booked calls. Engineered with Next.js 16, TypeScript, Tailwind CSS, and Framer Motion.

## 🏗️ Architecture

```
src/
├── app/
│   ├── layout.tsx            # Root layout (Navbar + Footer + structured data)
│   ├── page.tsx              # Home page (6 sections, dynamic imports)
│   ├── globals.css           # Design tokens + utility classes
│   ├── not-found.tsx         # Custom 404
│   ├── sitemap.ts            # Auto-generated sitemap.xml
│   ├── robots.ts             # Auto-generated robots.txt
│   ├── services/page.tsx     # 3-tier service packages
│   ├── case-studies/page.tsx # 3 case studies with proof
│   ├── about/page.tsx        # Founder story + philosophy
│   └── apply/page.tsx        # Multi-step qualification form
├── components/
│   ├── Navbar.tsx            # Sticky glass navbar with mobile menu
│   ├── Footer.tsx            # Links + contact + legal
│   ├── ApplyForm.tsx         # Multi-step form with qualification logic
│   ├── home/
│   │   ├── Hero.tsx          # Cinematic hero with word-split animation
│   │   ├── ProblemSection.tsx
│   │   ├── SystemSection.tsx # Presence-to-Pipeline System™
│   │   ├── ResultsSection.tsx
│   │   ├── WhySection.tsx
│   │   └── FinalCTA.tsx
│   └── ui/
│       ├── AnimatedSection.tsx  # Scroll-triggered reveal wrapper
│       ├── CountUp.tsx          # Animated number counter
│       ├── CTAButton.tsx        # Conversion-tracked CTA
│       ├── SectionWrapper.tsx   # Consistent section padding
│       └── SectionLabel.tsx     # Pill-style section labels
└── lib/
    ├── content.ts            # ALL copy, data, form config (single source of truth)
    ├── analytics.ts          # Event tracking (GTM-compatible)
    ├── metadata.ts           # Per-page SEO metadata builder
    ├── schema.ts             # JSON-LD structured data generators
    └── utils.ts              # cn() class merge utility
```

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📦 Tech Stack

| Tool            | Purpose                          |
| --------------- | -------------------------------- |
| Next.js 16      | App Router, SSG, file-based routing |
| TypeScript      | Type safety throughout           |
| Tailwind CSS v4 | Utility-first styling            |
| Framer Motion   | Scroll & layout animations       |
| Vercel          | Deployment target                |

## 🎯 Pages

| Page         | Route          | Purpose                                    |
| ------------ | -------------- | ------------------------------------------ |
| Home         | `/`            | Hero → Problem → System → Results → CTA   |
| Services     | `/services`    | 3-tier packages (Foundation/Growth/Scale)  |
| Case Studies | `/case-studies`| 3 detailed cases with proof & before/after |
| About        | `/about`       | Founder story + philosophy + advantage     |
| Apply        | `/apply`       | Multi-step qualification form + Calendly   |

## 📊 Analytics Events

All events push to `window.dataLayer` (GTM-compatible):

| Event                  | Trigger                          |
| ---------------------- | -------------------------------- |
| `hero_cta_click`       | Hero CTA clicked                 |
| `section_cta_click`    | Any section CTA clicked          |
| `form_start`           | First form field interaction     |
| `form_step_complete`   | Each form step completed         |
| `form_submit`          | Form submitted                   |
| `lead_qualified_true`  | Lead passes qualification logic  |
| `lead_qualified_false` | Lead fails qualification logic   |
| `calendly_view`        | Calendly embed/link clicked      |

## 🔍 SEO & GEO

- ✅ Unique `<title>` + `<meta description>` per page
- ✅ OpenGraph + Twitter Card metadata
- ✅ Canonical URLs via `alternates.canonical`
- ✅ Auto-generated `robots.txt` + `sitemap.xml`
- ✅ JSON-LD structured data: `Person`, `ProfessionalService`, `FAQPage`
- ✅ Semantic HTML throughout

## 🎨 Design System

- **Background:** `#050507` (near-black)
- **Surface:** `#0c0c10` / `#141418` (elevated)
- **Accent:** `#6366f1` (Indigo 500) with glow shadows
- **Text:** `#f0f0f5` (primary) / `#9a9ab0` (secondary) / `#5c5c72` (muted)
- **Borders:** `rgba(255,255,255,0.06)` subtle glass effect
- **Animations:** Framer Motion with `prefers-reduced-motion` respect

## ☁️ Deploy to Vercel

### Option 1: One-click
1. Push this repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the repository
4. Click **Deploy** — zero configuration needed

### Option 2: CLI
```bash
npm i -g vercel
vercel --prod
```

### Environment Variables (optional)
| Variable                | Purpose                      |
| ----------------------- | ---------------------------- |
| `NEXT_PUBLIC_SITE_URL`  | Production URL for metadata  |
| `NEXT_PUBLIC_GTM_ID`    | Google Tag Manager container |
| `NEXT_PUBLIC_CALENDLY`  | Calendly scheduling link     |

## ✅ QA Checklist

| Check                                      | Status |
| ------------------------------------------ | ------ |
| All 5 pages render without errors           | ✅     |
| Production build succeeds (`npm run build`) | ✅     |
| TypeScript compiles with zero errors        | ✅     |
| All navigation links work                   | ✅     |
| Mobile responsive (all breakpoints)         | ✅     |
| Navbar sticky + glass effect on scroll      | ✅     |
| Hero animations play on load                | ✅     |
| Rotating niche text in hero                 | ✅     |
| Scroll animations trigger on viewport enter | ✅     |
| CountUp numbers animate on view             | ✅     |
| Service tier cards render with all content   | ✅     |
| Case studies display all 3 cases            | ✅     |
| Before/after placeholders present           | ✅     |
| Multi-step form advances correctly          | ✅     |
| Form validation catches empty required fields| ✅    |
| Email validation works                      | ✅     |
| Qualified leads see Calendly CTA            | ✅     |
| Non-qualified leads see nurture fallback    | ✅     |
| 404 page renders custom design              | ✅     |
| robots.txt generates correctly              | ✅     |
| sitemap.xml generates correctly             | ✅     |
| JSON-LD structured data in `<head>`         | ✅     |
| `prefers-reduced-motion` respected          | ✅     |
| Dynamic imports for below-fold sections     | ✅     |
| Analytics events fire on interactions       | ✅     |

## 🗺️ v2 Roadmap

### CRO Tests
- [ ] A/B test hero headline variants
- [ ] Test CTA button copy variations (Apply vs. Book vs. Get Started)
- [ ] Test form step count (4 steps vs. 2 steps)
- [ ] Heatmap integration (Hotjar/Microsoft Clarity)
- [ ] Exit-intent popup with lead magnet offer

### Motion Refinements
- [ ] GSAP ScrollTrigger for hero parallax sequence
- [ ] Lottie animations for system step icons
- [ ] Magnetic button hover effect (cursor-following glow)
- [ ] Page transition animations between routes
- [ ] Staggered card reveal with 3D perspective tilt

### Speed Improvements
- [ ] Image optimization with `next/image` + WebP/AVIF
- [ ] Font subsetting (only used characters)
- [ ] Critical CSS inlining
- [ ] Edge runtime for API routes
- [ ] Bundle analysis + tree-shaking audit

### Feature Additions
- [ ] Blog/resources section for content marketing
- [ ] Testimonial carousel with video embeds
- [ ] Real Calendly embed integration (replace placeholder)
- [ ] Email capture → CRM integration (HubSpot, GoHighLevel)
- [ ] Multi-language support (EN/ES)
- [ ] Dark/light mode toggle
- [ ] Case study individual detail pages (`/case-studies/[slug]`)
- [ ] PDF case study download (gated lead magnet)

---

Built with precision by **APEX-SYSTEMS** methodology.
