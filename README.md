# Sovira Digital Landing Page

A high-converting landing page for Sovira Digital - the premier Shopify consultancy for momentum fashion & wellness brands turning €1-1.5M annually.

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Typography:** Neue Haas Grotesk Display, Spectral, Suisse Int'l
- **Deployment:** Optimized for Vercel

## 🎨 Design System

### Brand Colors
- `sovira-black`: #111111
- `sovira-graphite`: #2F2F2F  
- `sovira-paper`: #F4F4F4
- `sovira-chartreuse`: #C6FF00 (accent, ≤5% usage)
- `sovira-neutral`: #9B9B9B

### Typography Scale
- H1: 96px (Neue Haas)
- H2: 72px (Neue Haas)
- H3: 48px (Neue Haas)
- Body: 16px (Suisse Int'l)
- Accent: Spectral Italic

## 📁 Project Structure

```
sovira/
├── app/
│   ├── globals.css      # Global styles & font imports
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Landing page composition
├── components/
│   ├── HeroSection.tsx      # Hero with primary CTA
│   ├── ProofSection.tsx     # Social proof & metrics
│   ├── BrandReadySprint.tsx # Sprint pricing tiers
│   ├── RevShareAccelerator.tsx # Rev-share model
│   ├── ComparisonTable.tsx  # Agency comparison
│   ├── CTASection.tsx       # Final conversion push
│   └── Footer.tsx           # Minimal footer
├── public/
│   └── fonts/              # Custom font files
└── tailwind.config.ts      # Tailwind configuration
```

## 🚦 Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

## 📝 Content Variables

The landing page supports these customizable variables:

1. **Primary CTA Text** - Default: "Book Discovery Call"
2. **Client Personas** - Default: "fashion & wellness brands"
3. **Headline Hook** - Default: "Launch in 14 days"
4. **Section Content** - Service features, testimonials
5. **Visual Assets** - Client logos, UI mockups

## 🎯 Conversion Features

- **Single Primary CTA** throughout the page
- **Urgency Indicators** (limited slots, timeline)
- **Social Proof** (metrics, logos, testimonials)
- **Risk Reversal** (90-Day Payback Guarantee)
- **Interactive Calculator** for rev-share model
- **Comparison Table** vs traditional agencies

## 🔧 Performance Optimizations

- Font loading with `font-display: swap`
- Minimal DOM structure
- CSS animations ≤ 150ms
- No parallax on mobile
- Glassmorphism used sparingly
- WCAG 2.2 AA compliant

## 📦 Deployment

Ready for deployment on Vercel:

```bash
vercel
```

## 🤝 Brand Guidelines

Refer to:
- `/cursor-rules/brand-guideliness.mdc`
- `/cursor-rules/sovira-styling-conventions.mdc`

## 📧 Contact

For questions about this landing page:
- Email: sprint@sovira.digital
- Website: https://sovira.digital
