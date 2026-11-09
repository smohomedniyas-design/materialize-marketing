export interface Slide {
  id: number;
  label: string;
  title: string;
  desc: string;
  video?: string;
  poster: string;
}

export interface Project {
  slug: string;
  name: string;
  cat: 'E-commerce' | 'Landing Pages' | 'Custom Dev' | 'UI/UX';
  stack: string[];
  layout: 'shop' | 'landing' | 'dash' | 'uiux';
  yr: string;
  a: string;
  b: string;
  acc: string;
  tagline: string;
  description: string;
  metrics: { label: string; value: string }[];
  client: string;
  deliverables: string[];
  challenge: string;
  solution: string;
  image?: string;
  features?: string[];
  liveUrl?: string;
}

export interface Service {
  slug: string;
  num: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  heroHighlight: string;
  startingPrice: string;
  typicalTimeline: string;
  features: string[];
  deliverables: string[];
  technologies: string[];
}

export interface PricingTier {
  id: string;
  tier: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  popular?: boolean;
  features: string[];
  idealFor: string;
  timeline: string;
}

export interface ProcessStep {
  num: string;
  timeframe: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  keyActions: string[];
}

export const SLIDES: Slide[] = [
  {
    id: 1,
    label: 'The Build Crew',
    title: 'Web Development',
    desc: 'Custom-coded sites that load in a blink and turn visitors into customers - on every launch, without fail.',
    poster: '/images/hero/web-development.jpg',
  },
  {
    id: 2,
    label: 'The Growth Desk',
    title: 'Digital Marketing & Strategy',
    desc: 'Omnichannel digital marketing strategies, paid acquisition handling, SEO, and conversion funnels mapped to your revenue.',
    poster: '/images/hero/digital-strategy.jpg',
  },
  {
    id: 3,
    label: 'The Craft Studio',
    title: 'Creative',
    desc: 'UI/UX mockups and design systems that make your business look premium from the very first click.',
    poster: '/images/hero/creative.jpg',
  },
  {
    id: 4,
    label: 'The Safety Net',
    title: 'Support',
    desc: 'Proactive hosting, maintenance, and real humans on call - through launch week and long after.',
    poster: '/images/hero/support.jpg',
  },
];

export const PROJECTS: Project[] = [
  {
    slug: 'pivotal-family-office',
    name: 'Pivotal Family Office',
    cat: 'Custom Dev',
    stack: ['React', 'Vite', 'TypeScript'],
    layout: 'landing',
    yr: '2025',
    a: '#0F172A',
    b: '#1E293B',
    acc: '#00E5FF',
    tagline: 'Your career window is short. Your wealth needs to last a lifetime.',
    description: 'Pivotal Family Office helps musicians, creators, athletes, and entrepreneurs manage the complexity of sudden wealth through coordinated tax strategy, investment oversight, business management, and financial administration.',
    metrics: [
      { label: 'Years Combined Experience', value: '100+' },
      { label: 'Athletes & Creators', value: '70+' },
      { label: 'Inquiry Conversion', value: '78%' },
      { label: 'Lighthouse Performance', value: '99/100' },
    ],
    client: 'Pivotal Family Office',
    image: '/images/projects/pivotal-family-office.jpg',
    liveUrl: 'https://pivotalfamilyoffice.com/',
    features: [
      'Interactive SVG Service Wheel',
      'Cinematic Hero with Embedded Video',
      'Resilient Dual-Provider Inquiry Form',
    ],
    deliverables: [
      'Interactive SVG Service Wheel mapping multi-disciplinary wealth coordination',
      'Cinematic full-screen hero section with responsive embedded video',
      'Resilient dual-provider inquiry form engine with automated failover routing',
      'Coordinated athlete and entertainer financial intake architecture',
    ],
    challenge: 'High-earning athletes, musicians, and creators face tight career windows and intense financial complexity. Generic wealth management sites felt detached, corporate, and failed to communicate urgency or specialized creator empathy.',
    solution: 'Engineered an immersive digital family office experience featuring an interactive SVG service wheel, cinematic video hero, and a fail-safe inquiry pipeline connecting clients directly to specialized wealth directors.',
  },
  {
    slug: 'entourage-transport',
    name: 'Entourage Transport',
    cat: 'Custom Dev',
    stack: ['React', 'TypeScript', 'Vite', 'PHP API'],
    layout: 'dash',
    yr: '2025',
    a: '#0F0D16',
    b: '#201A30',
    acc: '#C99A45',
    tagline: 'Make a statement before you say one - luxury chauffeur and VIP concierge transport.',
    description: 'Luxury chauffeur & concierge services for executives, public figures, and special occasions across Phoenix Valley, Arizona, backed by an automated booking engine and private fleet operations portal.',
    metrics: [
      { label: 'Booking Conversion', value: '+192%' },
      { label: 'Reservation Time', value: '<90 sec' },
      { label: 'Dispatch Automation', value: '100%' },
      { label: 'Fleet Reliability', value: '99.98%' },
    ],
    client: 'Entourage Transport LLC',
    image: '/images/projects/entourage-transport.jpg',
    liveUrl: 'https://entouragetransport.com/',
    features: [
      'Multi-Step VIP Booking & Reservation System',
      'Instant Admin Alerts',
      'Multi-Channel Automated Email & Notification Engine',
      'Comprehensive Admin Portal & Operations Dashboard',
      'Self-Hosted Hostinger PHP API',
    ],
    deliverables: [
      'Multi-step VIP booking & reservation engine with instant itinerary calculations',
      'Instant multi-channel admin alerts via automated SMS & email dispatch',
      'Comprehensive admin portal & operations dashboard for real-time fleet assignment',
      'Self-hosted Hostinger PHP API ensuring secure reservation data processing',
    ],
    challenge: 'VIP and executive clients requiring luxury chauffeur transport require instantaneous confirmation, while the operations team was burdened by manual dispatch phone calls and missed leads during off-hours.',
    solution: 'Designed and coded an automated luxury reservation engine with self-hosted PHP APIs, multi-channel instant notifications, and a centralized operations dashboard that coordinates bookings in real-time.',
  },
  {
    slug: 'rich-sinners',
    name: 'Rich Sinners',
    cat: 'E-commerce',
    stack: ['Next.js', 'Shopify'],
    layout: 'shop',
    yr: '2025',
    a: '#140606',
    b: '#2D0D0D',
    acc: '#FF2A2A',
    tagline: 'The sound of the underground - official merch drops, dynamic artist roster, and interactive discography.',
    description: 'Rich Sinners is an underground music and streetwear label. We created an unapologetic headless commerce storefront and interactive artist discography designed for rapid drop releases.',
    metrics: [
      { label: 'Drop Sellout Time', value: '<12 min' },
      { label: 'Streaming Clicks', value: '+340%' },
      { label: 'Storefront Speed', value: '310ms' },
      { label: 'Active Fanbase', value: '120k+' },
    ],
    client: 'Rich Sinners Records',
    image: '/images/projects/rich-sinners.jpg',
    liveUrl: 'https://therichsinners.com/',
    features: [
      'Immersive Visual Identity & Micro-Interactions',
      'Official Merch Showcase & E-Commerce Integration',
      'Interactive Music Catalog & Discography',
      'Dynamic Artist Roster & Automatic Song Linking',
      'Resilient 3-Tier Contact & Booking Engine',
      'Static Performance & Deployment Pipeline',
    ],
    deliverables: [
      'Immersive underground visual identity and micro-interaction choreography',
      'Official merchandise showcase with headless Shopify e-commerce checkout',
      'Interactive music catalog & discography with dynamic streaming platform linking',
      'Dynamic artist roster and profile directory with automated song embeds',
      'Resilient 3-tier contact & booking engine for talent management inquiries',
      'Static performance and edge deployment pipeline on Next.js and Vercel',
    ],
    challenge: 'The label needed a digital hub that felt raw, underground, and culturally authentic, while possessing the enterprise stability to withstand massive traffic spikes during limited apparel drops.',
    solution: 'Architected a Next.js frontend seamlessly married to Shopify’s checkout infrastructure, backed by an interactive audio discography and a resilient 3-tier booking pipeline.',
  },
  {
    slug: 'rich-sinners-shop',
    name: 'Rich Sinners Official Merch',
    cat: 'E-commerce',
    stack: ['Shopify', 'Liquid', 'Custom UI/UX'],
    layout: 'shop',
    yr: '2025',
    a: '#1A0808',
    b: '#380E0E',
    acc: '#E53E3E',
    tagline: 'High-converting Shopify merchandise storefront engineered for limited-edition vinyl and apparel drops.',
    description: 'A custom-tailored Shopify e-commerce store built for underground music collective Rich Sinners, featuring high-impact visual merchandising, rapid checkout optimization, and resilient inventory flash-drop handling.',
    metrics: [
      { label: 'Drop Conversion Rate', value: '4.8%' },
      { label: 'Checkout Completion', value: '86%' },
      { label: 'Mobile Load Speed', value: '420ms' },
      { label: 'Flash Sale Volume', value: '10k+ Units' },
    ],
    client: 'Rich Sinners Records',
    image: '/images/projects/rich-sinners-shop.jpg',
    liveUrl: 'https://shop.therichsinners.com/',
    features: [
      'Custom Shopify Liquid Theme Architecture',
      'High-Impact Dark Aesthetic & Fire Ambience',
      'Limited-Edition Vinyl & Apparel Product Display',
      'Express 1-Click Mobile Checkout Optimization',
      'High-Traffic Flash Drop Scalability',
      'Automated Inventory & Pre-Order Synchronization',
    ],
    deliverables: [
      'Bespoke Shopify theme development with custom Liquid templates and stylized merchandising',
      'Full responsive optimization for mobile drop traffic and streamlined cart drawers',
      'Automated inventory thresholds, variant selectors, and express payment gateways',
      'Vinyl record and merchandise mockup integration with dynamic collection filtering',
      'High-conversion product detail templates tailored for streetwear & music collectors',
    ],
    challenge: 'Rich Sinners needed a dedicated, bulletproof Shopify merchandise store tailored specifically for high-velocity drop releases that maintained their signature raw underground aesthetic without sacrificing conversion rate or checkout speed.',
    solution: 'Designed and engineered a custom high-performance Shopify storefront optimized for limited vinyl records and merch drops, featuring immersive visual presentation, streamlined drawer checkout, and robust inventory handling.',
  },
  {
    slug: 'pivotal-wealth-and-tax',
    name: 'Pivotal Wealth and Tax',
    cat: 'Landing Pages',
    stack: ['WordPress'],
    layout: 'landing',
    yr: '2025',
    a: '#0F1E2E',
    b: '#1E3A5F',
    acc: '#2563EB',
    tagline: 'Here for all of your pivotal moments - expert wealth management and tax strategy.',
    description: 'Pivotal Wealth and Tax provides comprehensive wealth management, tax advisory, and strategic financial planning. We engineered an authoritative, high-trust digital platform built on WordPress with dedicated client portal access.',
    metrics: [
      { label: 'Advisory Inquiries', value: '+165%' },
      { label: 'Page Load Speed', value: '460ms' },
      { label: 'SEO Trust Score', value: '95/100' },
      { label: 'Consultation Bookings', value: '140+/mo' },
    ],
    client: 'Pivotal Wealth & Tax LLC',
    image: '/images/projects/pivotal-wealth-and-tax.jpg',
    liveUrl: 'https://pivotalwealthandtax.com/',
    features: [
      'Custom WordPress Architecture',
      'Client Portal Secure Integration',
      'In-Depth Wealth & Tax Strategy Showcases',
      'High-Conversion Consultation Booking Flow',
    ],
    deliverables: [
      'Custom WordPress architecture optimized for institutional financial trust',
      'Integrated client portal authentication gateway for existing wealth clients',
      'Comprehensive multi-service showcases (Wealth, Tax, Strategic, Advisory)',
      'High-converting qualification funnel routing prospects to licensed advisors',
    ],
    challenge: 'Navigating wealth management and in-depth tax planning is intimidating for prospective clients. The previous site was outdated and failed to highlight their breadth of strategic services or drive booked appointments.',
    solution: 'Designed and deployed a clean, authoritative WordPress platform featuring distinct service modules, seamless portal access, and a high-converting consultation booking funnel.',
  },
];

export const SERVICES: Service[] = [
  {
    slug: 'web-development',
    num: '01',
    name: 'Web Development',
    shortDesc: 'Hand-rolled React and Next.js builds - fast, secure, and tuned for conversion.',
    heroHighlight: 'Performance-obsessed engineering that drives organic rank and business outcomes.',
    startingPrice: '$299',
    typicalTimeline: '1-2 weeks',
    fullDesc: 'We build web platforms from the ground up using React, Next.js, and TypeScript. No bloated themes, no sluggish page builders. Every line of code is optimized for 95+ Core Web Vitals, bulletproof security, and seamless CMS integration.',
    features: [
      'Next.js App Router & Server Components for near-instant page loads',
      'Full TypeScript implementation for rock-solid stability',
      'Headless CMS integration (Sanity, Contentful, Strapi, or MDX)',
      'Automated CI/CD pipelines with zero-downtime deployments',
      'Comprehensive Core Web Vitals audit & 95+ speed guarantees',
      'Semantic HTML and structured JSON-LD schema for top SEO ranking',
    ],
    deliverables: [
      'Production-ready Next.js codebase with complete Git repository',
      'Integrated CMS setup with customizable content editing models',
      'Staging and Production environments on Vercel or AWS',
      'Comprehensive documentation and client team training',
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel', 'Node.js', 'PostgreSQL'],
  },
  {
    slug: 'digital-marketing',
    num: '02',
    name: 'Digital Marketing & Growth Solutions',
    shortDesc: 'Omnichannel digital marketing strategies, paid ad management, and campaign handling that turn traffic into revenue.',
    heroHighlight: 'From ad creative to attribution: we plan, launch, and actively manage your paid and organic growth.',
    startingPrice: '$149/mo',
    typicalTimeline: 'Active monthly management',
    fullDesc: 'We do not just formulate strategy decks to collect dust. Materialize Marketing designs end-to-end digital marketing solutions and actively handles multi-channel campaign execution across Meta, Google, TikTok, and email funnels. From audience targeting and ad creative production to attribution modeling and conversion rate optimization, our senior squad manages your growth engine day-to-day.',
    features: [
      'Full-funnel digital marketing strategies tailored to your unit economics (CAC, ROAS, LTV)',
      'Hands-on paid advertising management across Meta Ads (Facebook & Instagram), Google Search, Performance Max, and TikTok',
      'High-converting ad creative direction, persuasive copywriting, and multi-format asset production',
      'Technical SEO, programmatic keyword targeting, and authoritative search ranking architecture',
      'Automated lifecycle marketing: Klaviyo & HubSpot abandoned checkout, nurture sequences, and retention flows',
      'First-party tracking & attribution modeling (Meta CAPI, GA4, PostHog, and Triple Whale)',
    ],
    deliverables: [
      'Comprehensive 90-Day Digital Growth Roadmap & Competitor Gap Analysis',
      'Multi-channel paid ad campaign architecture with daily bid and budget management',
      'Weekly live ROAS, CPA, and conversion telemetry dashboards with executive summaries',
      'Bi-weekly strategic growth reviews and real-time Slack communication with your dedicated marketing team',
    ],
    technologies: ['Meta Ads Manager', 'Google Ads', 'TikTok Ads', 'Klaviyo', 'HubSpot', 'Google Analytics 4', 'Triple Whale', 'PostHog', 'Ahrefs'],
  },
  {
    slug: 'ecommerce',
    num: '03',
    name: 'E-commerce Solutions',
    shortDesc: 'Storefronts that sell: Shopify, WooCommerce, and custom - with checkout that converts.',
    heroHighlight: 'Turn browsing into buying with frictionless cart workflows and lightning-fast checkout.',
    startingPrice: '$699',
    typicalTimeline: '2-4 weeks',
    fullDesc: 'Whether scaling an existing Shopify Plus brand or deploying a custom headless commerce architecture, we engineer storefronts that eliminate cart friction, lift average order value, and scale through extreme holiday surges.',
    features: [
      'Custom Shopify Liquid or Headless Hydrogen / Next.js builds',
      'High-converting slide-out cart drawers with smart upsells & bundles',
      'Stripe, Apple Pay, PayPal, and multi-currency checkout configurations',
      'Inventory, ERP, and warehouse logistics integrations',
      'Custom product filtering, variant selectors, and real-time stock alerts',
      'Post-purchase upsells and automated customer retention workflows',
    ],
    deliverables: [
      'Fully operational, tested storefront with payments and tax automation',
      'Complete product catalog migration and SEO redirect map',
      'High-speed mobile checkout flow tuned for conversion',
      '30-day post-launch hypercare and revenue analytics dashboard',
    ],
    technologies: ['Shopify Plus', 'Liquid', 'Hydrogen', 'Stripe', 'WooCommerce', 'Klaviyo', 'Algolia'],
  },
  {
    slug: 'funnels',
    num: '04',
    name: 'Landing Pages & Funnels',
    shortDesc: 'Single-goal pages built around speed, clarity, and measurable revenue.',
    heroHighlight: 'Laser-focused sales pages engineered to cut client acquisition costs in half.',
    startingPrice: '$199',
    typicalTimeline: '1 week',
    fullDesc: 'We create relentless landing pages that focus on a single action: turning paid and organic traffic into paying customers. From high-ticket SaaS demo request pages to direct-response opt-ins, our funnels are built on data-backed psychological frameworks.',
    features: [
      'Conversion-centered visual hierarchy and persuasive layout design',
      'Sub-500ms load times to eliminate bounce rates from paid ad campaigns',
      'Built-in A/B testing infrastructure (PostHog, Google Optimize, Vercel Edge)',
      'Multi-step dynamic qualification forms that capture higher lead quality',
      'CRM integration with automated Slack notifications & instant webhooks',
      'Heatmap and session recording setup to monitor visitor behavior',
    ],
    deliverables: [
      'High-converting landing page with responsive breakpoints',
      'A/B test variant setup for headline and offer testing',
      'CRM routing pipeline (HubSpot, Salesforce, Monday, or Zapier)',
      'Conversion tracking pixel verification (Meta, Google, LinkedIn)',
    ],
    technologies: ['React', 'Next.js', 'PostHog', 'HubSpot', 'Zapier', 'Plausible', 'Tailwind'],
  },
  {
    slug: 'hosting',
    num: '05',
    name: 'Maintenance & Managed Hosting',
    shortDesc: 'Reliable cloud hosting, security updates, SSL, and support so you can sleep and sell.',
    heroHighlight: 'Proactive monitoring and regular updates so your website is never broken or outdated.',
    startingPrice: '$25/mo',
    typicalTimeline: 'Ongoing monthly care ($20/mo annual)',
    fullDesc: 'Websites are living digital assets. Our maintenance and managed cloud hosting retainers protect your business with fast cloud hosting, free SSL security, daily off-site backups, and ongoing support hours for staff updates, phone changes, and content additions every month.',
    features: [
      '99.9% uptime reliability backed by cloud infrastructure',
      'Free SSL security certificate and HTTPS automatic encryption',
      'Daily automated database and website backups with instant restore points',
      'Regular security updates, plugin patches, and performance checks',
      'Ongoing developer support for menu, staff, and text updates',
      'Direct communication channel (Slack / WhatsApp) for quick questions',
    ],
    deliverables: [
      'High-speed managed cloud hosting environment',
      'Custom domain configuration and DNS management',
      'Monthly health and security check confirmation',
      'Priority support for ongoing website updates',
    ],
    technologies: ['Hostinger Cloud', 'Cloudflare', 'SSL Encryption', 'Daily Backups', 'WordPress', 'Shopify'],
  },
  {
    slug: 'ui-ux',
    num: '06',
    name: 'UI/UX Design Mockups',
    shortDesc: 'Pixel-obsessed mockups and design systems - prototyped before a line is coded.',
    heroHighlight: 'World-class visual craft and tested usability that builds immediate brand authority.',
    startingPrice: '$149',
    typicalTimeline: '1 week',
    fullDesc: 'Before we write a single line of code, we design every screen, interaction, and responsive breakpoint in Figma. We craft complete design systems with reusable components, typography scales, and interactive prototypes so you can click through your site before build.',
    features: [
      'Interactive Figma prototypes with realistic animation micro-interactions',
      'Complete design token system (colors, typography, spacing, shadows)',
      'User journey mapping and information architecture wireframing',
      'Desktop, tablet, and mobile responsive layout specifications',
      'Accessibility audit (WCAG AA compliant color contrast and legibility)',
      'Developer handoff with documented asset exports and motion specs',
    ],
    deliverables: [
      'Figma master file with full ownership and edit permissions',
      'Exported design system guide with typography & component tokens',
      'Clickable prototype for investor demos and customer validation',
      'Asset package with optimized SVG icons, illustrations, and imagery',
    ],
    technologies: ['Figma', 'FigJam', 'Tokens Studio', 'Lottie', 'Adobe Creative Cloud'],
  },
];

export const PRICING_PACKAGES: PricingTier[] = [
  {
    id: 'launch',
    tier: 'Starter Launch & Hosting',
    name: 'Launch',
    tagline: 'High-converting custom website with zero-headache managed hosting & updates.',
    price: '$299',
    period: 'setup + $25/mo',
    idealFor: 'Local businesses, professionals, and startups needing instant credibility without expensive tech retainers.',
    timeline: '1-2 weeks delivery',
    features: [
      'Custom modern website tuned for conversion & mobile speed',
      'High-speed managed cloud hosting & automatic daily backups',
      'Free SSL security certificate & custom domain setup',
      'Google Business Profile & Google Analytics (GA4) integration',
      'Ongoing basic content updates & technical maintenance included',
      'Annual billing discount: $20/mo ($240/yr - save $60)',
      '12-month hosting agreement (or $200 buyout to take files early)',
    ],
  },
  {
    id: 'commerce',
    tier: 'E-Commerce Growth',
    name: 'Commerce',
    tagline: 'For online stores ready to sell at scale with zero friction.',
    price: '$499',
    period: 'setup + $99/mo',
    popular: true,
    idealFor: 'Growing brands, streetwear labels, and retailers looking to drive online sales with active store management.',
    timeline: '2-3 weeks delivery',
    features: [
      'Custom Shopify or high-performance e-commerce storefront',
      'Streamlined 1-click mobile checkout & dynamic cart drawers',
      'Monthly product catalog updates & new variant uploads',
      'Promotional banner designs for seasonal drops & flash sales',
      'Third-party app integrations (Klaviyo, Reviews, Instagram Shop)',
      'Ongoing speed optimization & conversion rate tuning',
      'Dedicated direct chat channel (Slack / WhatsApp) for quick updates',
    ],
  },
  {
    id: 'custom',
    tier: 'Full Growth Retainer',
    name: 'Growth Partner',
    tagline: 'Your complete outsourced marketing & automation department.',
    price: '$497',
    period: '- $997 / mo',
    idealFor: 'Established businesses ready for steady lead flow, active social media handling, and AI automation.',
    timeline: 'Active monthly partnership',
    features: [
      'Everything in Launch & Commerce maintenance, plus:',
      '12-16 high-impact social media posts/mo (graphics, carousels & video edits)',
      '24/7 AI lead capture chatbot installed on your website',
      'Local SEO ranking & monthly Google Business Profile posts',
      'Automated review generation system (Google 5-star boost)',
      'Bi-weekly strategic growth reviews & live performance reporting',
      'Priority same-day turnaround on all creative and web requests',
    ],
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    num: '01',
    timeframe: 'Days 1-3',
    title: 'Discovery & Blueprint',
    shortDesc: 'We map your goals, audience, and offer - then you get a fixed quote with zero surprises.',
    fullDesc: 'We start with a streamlined consultation to understand your business model, customer pain points, and growth goals. We map out site structure, review your assets, and provide a clear roadmap and fixed investment quote before starting.',
    deliverables: [
      'Project Scope & Deliverable Blueprint',
      'Competitor & Visual Benchmark Review',
      'Clear Fixed-Price Quote & Milestone Schedule',
      'Direct Communication Channel (Slack / Email)',
    ],
    keyActions: [
      'Brand & goals intake questionnaire review',
      'Asset and logo collection',
      'Timeline and milestone confirmation',
    ],
  },
  {
    num: '02',
    timeframe: 'Week 1',
    title: 'Design & Visual Prototyping',
    shortDesc: 'Modern mockups and layouts in live workspaces you can review and approve in days.',
    fullDesc: 'Our design team crafts visual mockups and layout previews in collaborative Figma workspaces. We align your typography, brand colors, and mobile viewports so you can see exactly how your site or campaign looks before development.',
    deliverables: [
      'High-Fidelity Desktop & Mobile Design Previews',
      'Brand Styling & Visual Component Alignment',
      'Collaborative Feedback & Revision Round',
      'Written Client Approval on Visual Direction',
    ],
    keyActions: [
      'Live mockup walkthrough and comment collection',
      'Adjustment and refinement loop',
      'Design lock-in before technical assembly',
    ],
  },
  {
    num: '03',
    timeframe: 'Week 1-2',
    title: 'Build & Live Staging Review',
    shortDesc: 'Fast development with private staging links. You see your live site before launch.',
    fullDesc: 'We build your website on our high-speed hosting infrastructure using clean, fast code. We integrate your contact forms, configure e-commerce carts and payment gateways, and send you a private staging link to test every button and page.',
    deliverables: [
      'Private Staging URL for Real-Time Review',
      'Fully Responsive Mobile & Tablet Optimization',
      'Working Contact Forms & Appointment Booking',
      'Payment & Inventory Configurations (E-Commerce)',
    ],
    keyActions: [
      'Cross-browser and mobile device testing',
      'Form submission routing verification',
      'Client staging review and final polish',
    ],
  },
  {
    num: '04',
    timeframe: 'Week 2+',
    title: 'Launch & Ongoing Support',
    shortDesc: 'Seamless domain connection, Google verification, and ongoing maintenance.',
    fullDesc: 'We connect your custom domain, activate SSL security encryption, configure Google Analytics and search indexing, and make your site live. Once live, our team handles ongoing hosting, backups, and regular updates so you never have to worry about tech.',
    deliverables: [
      'Official Live Launch on Your Custom Domain',
      'Free SSL Security Certificate & HTTPS Activation',
      'Google Search Console & Analytics (GA4) Tracking',
      'Ongoing Managed Hosting, Security & Regular Updates',
    ],
    keyActions: [
      'DNS cutover and live transaction testing',
      'Google index submission',
      'Seamless transition into monthly hosting & care',
    ],
  },
];

export const TRUST_STATS = [
  { value: 5, suffix: '+', label: 'Years Experience', sub: 'Combined digital & web engineering' },
  { value: 20, suffix: '+', label: 'Clients Launched', sub: 'Across diverse industries nationwide' },
  { value: 60, suffix: '+', label: 'Projects Delivered', sub: 'On time, on budget, zero lock-in' },
  { value: 100, suffix: '%', label: 'Dedicated Support', sub: 'Hands-on partnership & care' },
];

export interface ClientWebsite {
  name: string;
  category: string;
  slug: string;
  url: string;
}

export const CLIENT_LOGOS: ClientWebsite[] = [
  {
    name: 'Pivotal Family Office',
    category: 'Wealth Management',
    slug: 'pivotal-family-office',
    url: 'https://pivotalfamilyoffice.com/',
  },
  {
    name: 'Entourage Transport',
    category: 'Luxury VIP Transport',
    slug: 'entourage-transport',
    url: 'https://entouragetransport.com/',
  },
  {
    name: 'Rich Sinners Records',
    category: 'Music & Streetwear Hub',
    slug: 'rich-sinners',
    url: 'https://therichsinners.com/',
  },
  {
    name: 'Rich Sinners Official Merch',
    category: 'Shopify Storefront',
    slug: 'rich-sinners-shop',
    url: 'https://shop.therichsinners.com/',
  },
  {
    name: 'Pivotal Wealth & Tax',
    category: 'Tax & Advisory',
    slug: 'pivotal-wealth-and-tax',
    url: 'https://pivotalwealthandtax.com/',
  },
];

export const TEAM_MEMBERS = [
  {
    name: 'Ollie',
    role: 'US Operations & Client Partner',
    bio: 'Oversees US client engagements, onboarding workflows, and strategic alignment. Dedicated to ensuring every project delivers measurable business momentum.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    specialty: 'Client Strategy & Operations',
  },
  {
    name: 'Mohomed Niyas',
    role: 'Agency Operations Manager & Digital Strategist',
    bio: 'Leads end-to-end digital operations, multi-channel marketing campaigns, and quality assurance. Expert in converting web traffic into predictable revenue.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    specialty: 'Operations, Growth & QA',
  },
  {
    name: 'Rusith Balasooriya',
    role: 'Lead Web Designer & Full-Stack UI/UX Specialist',
    bio: 'Specializes in custom WordPress and Shopify builds, mobile-first design systems, and lightning-fast web infrastructure that elevates brand authority.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    specialty: 'WordPress, Shopify & UI/UX',
  },
  {
    name: 'Creative & Support Squad',
    role: 'Social Media, Content & QA Specialists',
    bio: 'Our dedicated execution team handling daily Canva graphic production, caption writing, community monitoring, and routine platform maintenance.',
    avatar: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80',
    specialty: 'Social Media, Content & QA',
  },
];

export const FAQS = [
  {
    q: 'How does your website pricing and monthly hosting work?',
    a: 'We keep upfront costs low and affordable by bundling custom web design with ongoing managed hosting and care. For example, our Launch package is just $299 upfront plus $25/month ($20/month billed annually at $240/year). That covers your high-speed cloud hosting, SSL security, domain maintenance, and ongoing updates so your site never gets outdated or broken.',
  },
  {
    q: 'How long does a typical website take to launch?',
    a: 'Most standard small business websites launch in just 1 to 2 weeks. Custom e-commerce stores with large catalogs typically take 2 to 3 weeks. We provide clear milestone dates during Discovery and keep you updated every step of the way.',
  },
  {
    q: 'Who owns the website and design assets?',
    a: 'You do! Upon completion of your initial 12-month agreement (or with a one-time $200 design release buyout if you choose to self-host earlier), 100% of your website content, design assets, and files are yours. There are zero proprietary software lock-ins.',
  },
  {
    q: 'What ongoing marketing and social media services do you provide?',
    a: 'Beyond web design, we provide monthly social media management (custom graphics, Reels editing, captions, scheduling), Google Business Profile local SEO optimization, 24/7 AI lead capture chatbots, and automated review generation systems.',
  },
  {
    q: 'Can we easily request changes and updates to our site?',
    a: 'Yes! That is why we include ongoing care in our monthly plans. Whenever you need a new staff member added, photos swapped, prices adjusted, or a promotion posted, just message us on your direct communication channel and we handle it for you.',
  },
  {
    q: 'Where is Materialize Marketing based?',
    a: 'Our agency headquarters is in Prosper, Texas (Dallas-Fort Worth metropolitan area), working in coordination with Sands Planning Group. We serve small businesses and growing brands nationwide across the United States.',
  },
];
