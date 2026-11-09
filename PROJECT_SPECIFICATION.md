# Materialize Marketing  -  Technical Specification & Brand Alignment

## 1. Project Overview & Brand Identity
- **Company Name:** Materialize Marketing
- **Core Value Proposition:** Senior US-based team building high-performance custom websites, e-commerce stores, and conversion funnels with robust infrastructure, hosting, and ongoing growth support.
- **Brand Identity & Color System:**
  - **Primary Dark / Forest Teal (`brand-dark`):** `#274a44`
  - **Primary Accent / Butter Cream (`brand-accent`):** `#fff9b2`
  - **Deep Spruce / Dark Slate (`brand-surface`):** `#162e2a` / `#112320`
  - **Light Surface / Warm Sand (`brand-light`):** `#faf9f4` / `#f4f2e9`
  - **Typography:**
    - Display: *Archivo* (bold, uppercase, architectural, geometric)
    - Body: *Inter* (clean, legible, modern UI sans-serif)
- **Official Brand Mark / Logo:**
  - Double-M geometric architectural monogram (`#274a44` evergreen strokes).
  - Scaled, crisp, responsive SVG & PNG assets across Header, Footer, Favicon, and Mobile Drawer.

---

## 2. Technical Stack & Architecture
- **Framework:** Next.js 15.5+ (App Router)
- **Rendering:** Static Export (`output: 'export'`, `trailingSlash: true`)
- **Styling:** Tailwind CSS + CSS Variables (`--brand-accent`, `--brand-dark`, `--brand-surface`, `--brand-light`)
- **Icons:** `lucide-react`
- **Deployment Target:** Static host (Hostinger Apache `.htaccess` / Cloudflare Pages / Vercel / Netlify)

---

## 3. Scope of Work & Task Breakdown

### Phase 1: Brand Token & Palette Overhaul
- Update `tailwind.config.ts` to replace legacy neon lime with `#fff9b2` (`accent`) and deep `#274a44` (`primary`/`brand-dark`).
- Update `src/app/globals.css` with CSS custom variables, button classes, selection colors, scrollbar, progress indicators, focus rings, and glowing shadows mapped to `#fff9b2` and `#274a44`.
- Update `index.html` inline tailwind configuration and styles to mirror the new brand palette.

### Phase 2: Logo System & Asset Integration
- Generate optimized transparent PNG and SVG representations of the geometric MM monogram.
- Update `Header.tsx` to display the new MM logo with custom badge styling.
- Update `Footer.tsx` with the new MM logo and cohesive brand typography.
- Generate web app icons and favicons (`favicon.ico`, `icon.png`, `apple-touch-icon.png`).
- Update `index.html` header/footer logo and favicon links.

### Phase 3: Component & Page Brand Harmonization
- **Navigation & Header:** Active link indicators, mobile slide-out menu, CTA button.
- **Hero Carousel:** Progress indicators, slide badges, slide headlines, arrow controls.
- **Client Marquee:** Subtle divider dots, logo typography.
- **Services Preview & Dedicated Service Pages:**
  - `/services`, `/services/web-development`, `/services/ecommerce`, `/services/funnels`, `/services/hosting`, `/services/ui-ux`
  - Icon containers, feature bullet checks, starting prices, deliverables pills.
- **Portfolio & Case Studies:**
  - `/work`, `/work/[slug]`
  - Added new production case study: **Rich Sinners Official Merch Store** (`https://shop.therichsinners.com/`) with custom Shopify Liquid stack, vinyl/apparel merchandising, and high-velocity flash drop handling.
  - Refactored project card interactions: Removed redundant static "Live Site" badges and permanent buttons so that "Visit Live Site" only reveals cleanly upon moving the cursor into the project card/section (on hover).
  - Category filter pills, project cards, metric badges, SvgProjectMockup device accents.
- **Pricing & Cost Estimator:**
  - `/pricing`, `PricingSection.tsx`, `CostEstimator.tsx`
  - Plan cards, "MOST POPULAR" highlight badge, slider track fills, step indicators.
- **Process & About:**
  - `/process`, `ProcessTimeline.tsx`, `/about`
  - Step counter numbers, timeline connector lines, stat badges.
- **Contact & Intake Form:**
  - `/contact`, `IntakeForm.tsx`
  - Step progress indicators, selected options, focus rings, submit actions, success screen.
- **Legal Pages:**
  - `/privacy`, `/terms`
  - Section anchors, back links, contact emails.

### Phase 4: Quality Assurance & Build Verification
- Full TypeScript type check (`tsc --noEmit`).
- Next.js static production build (`npm run build`).
- Verify zero dead links, all routes pre-rendering, responsive mobile checks, and accessibility contrast ratio validation (AA/AAA).
- Synchronize root `index.html` and static exports.

### Phase 5: Hero Video Background, Verified Client Portfolio Marquee & Digital Marketing Integration
- **Hero Video Background:** Integrated user-provided `HeroBG.mp4` into `public/HeroBG.mp4` and configured seamless looping background playback in `HeroCarousel.tsx` and `index.html` with overlay contrast protection.
- **Exclusively Real Client Websites Marquee:** Purged all placeholder company names and populated the infinite sliding marquee (`ClientMarquee.tsx` & `index.html`) exclusively with the 6 client platforms built by Materialize Marketing: Pivotal Family Office, Pivotal Creator Supply, Entourage Transport, Rich Sinners Records, Rich Sinners Official Merch, and Pivotal Wealth & Tax.
- **Full Digital Marketing Strategies & Solutions Expansion:**
  - Added new core discipline: `digital-marketing` (Digital Marketing & Growth Solutions) in `siteData.ts` and generated dedicated full-service route `/services/digital-marketing/`.
  - Added full multi-channel paid acquisition (Meta, Google, TikTok), technical SEO, lifecycle email/SMS marketing, and attribution handling copy across Home, Services, Pricing, Cost Calculator, Intake Form, About, and Footer.


