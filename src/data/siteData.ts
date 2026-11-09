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
    name: 'Custom Web Design & Fast Development',
    shortDesc: 'Fast, modern, custom websites designed to convert visitors into paying clients.',
    heroHighlight: 'Clean design and sub-second mobile speed that turns website traffic into calls and sales.',
    startingPrice: '$299',
    typicalTimeline: '1-2 weeks',
    fullDesc: 'We build custom websites from the ground up tailored to your brand and industry. No bloated themes, no sluggish page builders. Every page is optimized for lightning-fast mobile loading, bulletproof security, and seamless Google ranking.',
    features: [
      'Sub-second mobile loading speed (< 1s) so visitors never bounce',
      'Clear call buttons, contact forms, and appointment booking',
      'Built-in Google local search optimization and ranking architecture',
      'Easy content and photo editing with ongoing developer updates included',
      'High-speed cloud hosting ($25/mo) with free SSL certificate',
      '100% full client code and asset ownership — zero platform traps',
    ],
    deliverables: [
      'Custom production website with responsive phone, tablet, and desktop layouts',
      'Integrated contact forms with instant email and SMS notifications',
      'Private staging link for client walkthrough and review before launch',
      'Full asset transfer and ongoing monthly maintenance support',
    ],
    technologies: ['Custom React', 'Next.js', 'WordPress', 'Hostinger Cloud', 'Mobile Optimization'],
  },
  {
    slug: 'hosting',
    num: '02',
    name: 'Managed Cloud Hosting & Monthly Care',
    shortDesc: 'Reliable cloud hosting, security updates, SSL, and support so you can sleep and sell.',
    heroHighlight: 'Proactive monitoring and regular updates so your website is never broken or outdated.',
    startingPrice: '$25/mo',
    typicalTimeline: 'Ongoing care ($20/mo annual)',
    fullDesc: 'Websites are living digital assets. Our maintenance and managed cloud hosting retainers protect your business with fast cloud hosting, free SSL security, daily off-site backups, and ongoing support hours for staff updates, phone changes, and content additions every month.',
    features: [
      '99.9% uptime reliability backed by enterprise cloud infrastructure',
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
    slug: 'seo',
    num: '03',
    name: 'Local SEO & Google Business Profile (GBP)',
    shortDesc: 'Dominate Google Maps and local 3-Pack rankings to drive qualified local calls and customers.',
    heroHighlight: 'Rank #1 in Google Maps when high-intent local clients search for your services.',
    startingPrice: '$299/mo',
    typicalTimeline: 'Active monthly ranking',
    fullDesc: 'When local customers search for your service nearby, your business needs to show up in the Google Maps Top 3 Pack. We optimize your profile, build local citations, and drive organic phone calls through systematic local authority building.',
    features: [
      'Complete Google Business Profile (GBP) audit, claim & optimization',
      'Local Map Pack 3-Pack geo-ranking strategy across your target service radius',
      'Automated 5-star Google review collection workflows via SMS and email',
      'Local citation syndication across 40+ national business directories',
      'On-page localized keyword and schema markup for city and neighborhood searches',
      'Monthly search visibility and phone-call lead attribution reporting',
    ],
    deliverables: [
      'Fully optimized Google Business Profile with verified categories and geo-tags',
      'Automated review generation funnel and custom review link cards',
      'Monthly rank tracking report across target city keywords',
      'Citation cleanup and NAP (Name, Address, Phone) consistency across all directories',
    ],
    technologies: ['Google Business Profile', 'BrightLocal', 'Whitespark', 'Google Search Console', 'Schema.org'],
  },
  {
    slug: 'geo',
    num: '04',
    name: 'Generative Engine Optimization (GEO) & AI Search',
    shortDesc: 'Get recommended by ChatGPT, Gemini, Perplexity, and Claude when prospects ask for top providers.',
    heroHighlight: 'The 2026 search frontier: make sure AI models recommend your business first.',
    startingPrice: 'Included in Retainers',
    typicalTimeline: 'Ongoing AI authority',
    fullDesc: 'Modern customers are asking AI assistants like ChatGPT, Gemini, and Perplexity for business recommendations. Generative Engine Optimization (GEO) ensures your brand is indexed, cited, and recommended as the authoritative choice in your industry and region.',
    features: [
      'Structured JSON-LD schema markup tailored for Large Language Model retrieval',
      'Entity authority optimization for ChatGPT, Perplexity, Claude & Google AI Overviews',
      'Brand citation building across trusted AI reference databases and industry directories',
      'Conversational search optimization answering common natural-language queries',
      'Voice search readiness for Siri, Google Assistant, and Amazon Alexa',
    ],
    deliverables: [
      'Full semantic schema graph deployed across your domain',
      'LLM entity footprint audit and citation map',
      'Optimized conversational Q&A knowledge base integrated on your site',
      'Quarterly AI search visibility and citation verification report',
    ],
    technologies: ['JSON-LD', 'Knowledge Graphs', 'OpenAI', 'Perplexity AI', 'Google AI Overviews', 'Wikidata'],
  },
  {
    slug: 'paid-ads',
    num: '05',
    name: 'Google Ads (PPC) & Paid Search',
    shortDesc: 'Target high-intent searchers at the exact moment they need your services with zero wasted ad spend.',
    heroHighlight: 'Data-driven search campaigns engineered for predictable customer acquisition cost.',
    startingPrice: '$497/mo',
    typicalTimeline: 'Active campaign management',
    fullDesc: 'Stop burning money on broad-match Google clicks that never convert. We design tightly targeted Google Search and Local Service Ads campaigns focused strictly on high-intent transactional keywords, negative keyword filters, and high-converting landing pages.',
    features: [
      'Hyper-targeted search keyword selection focused on high commercial intent',
      'Negative keyword lists eliminating accidental clicks and budget waste',
      'A/B tested ad copy, headline variations, and sitelink extensions',
      'Conversion tracking verified with Google Analytics 4 (GA4) and Google Tag Manager',
      'Landing page alignment ensuring high Google Quality Scores and lower cost-per-click',
      'Weekly bid adjustments, budget pacing, and negative keyword pruning',
    ],
    deliverables: [
      'Comprehensive Google Ads campaign architecture with dedicated ad groups',
      'Custom high-converting lead capture landing page variant',
      'Live Google Data Studio telemetry dashboard tracking cost-per-lead and ROAS',
      'Bi-weekly performance reviews and strategy refinements',
    ],
    technologies: ['Google Ads', 'Google Tag Manager', 'GA4', 'Looker Studio', 'SpyFu', 'Semrush'],
  },
  {
    slug: 'paid-social',
    num: '06',
    name: 'Paid Social Advertising (Meta & TikTok Ads)',
    shortDesc: 'High-converting video and image ad campaigns across Facebook, Instagram, and TikTok.',
    heroHighlight: 'Scroll-stopping creative hooks and laser-targeted audience funnels that generate booked calls.',
    startingPrice: '$497/mo',
    typicalTimeline: 'Active campaign management',
    fullDesc: 'We create, test, and scale paid social ad campaigns that capture attention in busy feeds. From custom visual ad hooks and short-form video edits to retargeting funnels that bring back abandoned visitors, we handle your entire paid social engine.',
    features: [
      'High-impact visual ad creatives: carousels, video reels, and static spotlights',
      'Direct-response copywriting with compelling hooks and clear value propositions',
      'Full-funnel audience architecture: cold prospecting, lookalikes, and dynamic retargeting',
      'Server-side Meta Conversions API (CAPI) setup bypassing iOS tracking limitations',
      'Rapid creative testing framework: 4-6 new hooks tested weekly',
      'Daily bid management and budget scaling based on cost-per-acquisition targets',
    ],
    deliverables: [
      'Complete Meta Ads (Facebook & Instagram) campaign setup and pixel integration',
      'Monthly creative asset package (video cuts, graphics, and ad variations)',
      'Real-time conversion tracking dashboard with live lead and ROAS metrics',
      'Bi-weekly creative review and audience optimization meetings',
    ],
    technologies: ['Meta Ads Manager', 'Conversions API (CAPI)', 'TikTok Ads', 'Canva Pro', 'CapCut', 'Triple Whale'],
  },
  {
    slug: 'social-media',
    num: '07',
    name: 'Hands-Free Social Media Management',
    shortDesc: '12 to 16 custom branded posts, Reels, and carousels per month with zero effort from your team.',
    heroHighlight: 'Stay top-of-mind with consistent, professional social content published every week.',
    startingPrice: '$497/mo',
    typicalTimeline: 'Active monthly retainer',
    fullDesc: 'Consistency is where most businesses fail with social media. Materialize Marketing takes social media completely off your plate: we design custom branded graphics, edit short-form Reels, write persuasive captions with targeted hashtags, schedule all posts, and engage with your community.',
    features: [
      '12 to 16 high-impact social posts per month (mix of Reels, carousels, and single images)',
      'Custom visual styling aligned with your brand colors and typography',
      'Persuasive, engaging captions with local geo-tags and researched hashtag sets',
      'Monthly content calendar mapped out in advance for your review and approval',
      'Active community engagement: comment responses and story re-shares',
      'Cross-platform distribution across Instagram, Facebook, and LinkedIn',
    ],
    deliverables: [
      'Monthly editorial calendar delivered 1 week before the month begins',
      'All graphic design, reel video editing, and copywriting completed by our squad',
      'Automated multi-channel scheduling via professional social management tools',
      'Monthly analytics report measuring reach, follower growth, and engagement rate',
    ],
    technologies: ['Instagram', 'Facebook', 'LinkedIn', 'Canva Pro', 'Buffer / Metricool', 'CapCut Pro'],
  },
  {
    slug: 'branding',
    num: '08',
    name: 'Branding & Visual Identity Kits',
    shortDesc: 'Logo design, typography scales, color palettes, and social media asset kits that command premium authority.',
    heroHighlight: 'Transform how your business looks so you can charge premium prices with confidence.',
    startingPrice: '$199',
    typicalTimeline: '1-2 weeks',
    fullDesc: 'First impressions matter. Before customers read a word of your copy, your visual brand signals whether you are a trusted, premium leader or a budget operation. We design memorable logos, refined color systems, and complete brand style guides that make your business instantly recognizable.',
    features: [
      'Primary, secondary, and sub-mark logo designs in all vector and digital formats (SVG, PNG, PDF)',
      'Curated brand color palette with hex codes, RGB, and CMYK print values',
      'Typography hierarchy and font pairing guide for web, print, and social media',
      'Brand style guide one-sheet detailing usage rules and spacing',
      'Social media profile kit: matching avatar, cover banners, and story highlight icons',
      '100% full commercial copyright transfer upon project completion',
    ],
    deliverables: [
      'Comprehensive vector logo package (dark, light, monochrome, and icon versions)',
      'Brand Identity Style Guide PDF with typography and color codes',
      'Social media starter kit with 5 reusable Canva post templates',
      'Business card and email signature layout mockups',
    ],
    technologies: ['Figma', 'Adobe Illustrator', 'Canva', 'Vector Formats', 'Typography Systems'],
  },
  {
    slug: 'ai-automation',
    num: '09',
    name: '24/7 AI Voice & Receptionist Agents',
    shortDesc: 'Never miss a customer call again with smart AI receptionists that answer questions and book appointments 24/7.',
    heroHighlight: 'Instant lead response around the clock - capturing callers when your office is closed.',
    startingPrice: '$199 setup + $49/mo',
    typicalTimeline: '3-5 days delivery',
    fullDesc: 'Over 62% of calls to small businesses go to voicemail — and 85% of those callers never call back. Our conversational AI voice agents answer inbound phone calls within 2 seconds, answer common questions, check real-time availability, and book appointments directly on your calendar.',
    features: [
      'Natural, human-sounding AI voice receptionist customized for your business',
      'Answers common FAQs: pricing, hours, location, services, and booking steps',
      'Integrates directly with Google Calendar, Calendly, or your CRM to book appointments live',
      'Instant SMS follow-up sent to the caller with booking confirmation and links',
      'Real-time email and Slack notification to your team with full call audio and transcript',
      'Custom call forwarding rules: routes urgent calls directly to your cell phone',
    ],
    deliverables: [
      'Custom dedicated local phone number with AI receptionist live in 3-5 days',
      'Full conversational prompt engineering tailored to your exact business rules',
      'Automated calendar booking and CRM contact synchronization',
      'Private web dashboard to review call recordings, transcripts, and analytics',
    ],
    technologies: ['Vapi.ai', 'Retell AI', 'Twilio', 'Make.com', 'Google Calendar', 'Zapier'],
  },
  {
    slug: 'ecommerce',
    num: '10',
    name: 'E-commerce Solutions',
    shortDesc: 'Storefronts that sell: Shopify, WooCommerce, and custom - with checkout that converts.',
    heroHighlight: 'Turn browsing into buying with frictionless cart workflows and lightning-fast checkout.',
    startingPrice: '$499 setup + $99/mo',
    typicalTimeline: '2-3 weeks',
    fullDesc: 'Whether scaling an existing Shopify store or deploying a custom storefront, we engineer e-commerce experiences that eliminate cart friction, lift average order value, and handle traffic surges during sales drops.',
    features: [
      'Custom Shopify Liquid or Next.js e-commerce storefront builds',
      'High-converting slide-out cart drawers with smart upsells & bundles',
      'Stripe, Apple Pay, PayPal, and multi-currency checkout configurations',
      'Inventory, variant catalog, and automated shipping integrations',
      'Custom product filtering, variant selectors, and real-time stock alerts',
      'Post-purchase upsells and automated customer retention workflows',
    ],
    deliverables: [
      'Fully operational, tested storefront with payments and tax automation',
      'Complete product catalog migration and SEO redirect map',
      'High-speed mobile checkout flow tuned for conversion',
      '30-day post-launch hypercare and revenue analytics dashboard',
    ],
    technologies: ['Shopify Plus', 'Liquid', 'Stripe', 'WooCommerce', 'Klaviyo'],
  },
  {
    slug: 'funnels',
    num: '11',
    name: 'Landing Pages & Funnels',
    shortDesc: 'Single-goal pages built around speed, clarity, and measurable revenue.',
    heroHighlight: 'Laser-focused sales pages engineered to cut client acquisition costs in half.',
    startingPrice: '$199',
    typicalTimeline: '1 week',
    fullDesc: 'We create relentless landing pages that focus on a single action: turning paid and organic traffic into paying customers. From high-ticket consultation booking pages to direct-response opt-ins, our funnels are built on data-backed psychological frameworks.',
    features: [
      'Conversion-centered visual hierarchy and persuasive layout design',
      'Sub-500ms load times to eliminate bounce rates from paid ad campaigns',
      'Multi-step dynamic qualification forms that capture higher lead quality',
      'CRM integration with automated email notifications & instant webhooks',
      'Heatmap and conversion tracking pixel verification (Meta, Google)',
    ],
    deliverables: [
      'High-converting landing page with responsive breakpoints',
      'A/B test variant setup for headline and offer testing',
      'CRM routing pipeline (Email, Google Sheets, or Zapier)',
      'Conversion tracking pixel verification (Meta, Google)',
    ],
    technologies: ['React', 'Next.js', 'HubSpot', 'Zapier', 'Tailwind CSS'],
  },
  {
    slug: 'ui-ux',
    num: '12',
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
  {
    slug: 'digital-marketing',
    num: '13',
    name: 'Full Growth Retainers',
    shortDesc: 'Omnichannel digital marketing strategies, paid ad management, and campaign handling that turn traffic into revenue.',
    heroHighlight: 'From ad creative to attribution: we plan, launch, and actively manage your paid and organic growth.',
    startingPrice: '$497/mo',
    typicalTimeline: 'Active monthly management',
    fullDesc: 'We do not just formulate strategy decks to collect dust. Materialize Marketing designs end-to-end digital marketing solutions and actively handles multi-channel campaign execution across Meta, Google, and local search.',
    features: [
      'Full-funnel digital marketing strategies tailored to your unit economics',
      'Hands-on paid advertising management across Meta Ads and Google Search',
      'High-converting ad creative direction and persuasive copywriting',
      'Technical SEO and Google Business Profile ranking architecture',
      'First-party tracking & attribution modeling',
    ],
    deliverables: [
      'Comprehensive 90-Day Digital Growth Roadmap',
      'Multi-channel paid ad campaign architecture with daily bid management',
      'Weekly live ROAS, CPA, and conversion telemetry dashboards',
      'Bi-weekly strategic growth reviews with your dedicated marketing team',
    ],
    technologies: ['Meta Ads Manager', 'Google Ads', 'GA4', 'HubSpot'],
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
