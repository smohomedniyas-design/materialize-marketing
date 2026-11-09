'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Globe, 
  MapPin, 
  Search, 
  Target, 
  Share2, 
  Sparkles, 
  Palette, 
  Bot, 
  ArrowRight, 
  CheckCircle2,
  TrendingUp,
  Cpu
} from 'lucide-react';

interface ServiceItem {
  id: string;
  category: 'Web & Hosting' | 'Search & AI' | 'Paid Advertising' | 'Social & Brand';
  title: string;
  subtitle: string;
  desc: string;
  price: string;
  features: string[];
  slug: string;
  icon: React.ComponentType<{ className?: string }>;
  tag: string;
}

const ALL_SERVICES: ServiceItem[] = [
  // 1. Web & Hosting
  {
    id: 'web-development',
    category: 'Web & Hosting',
    title: 'Custom Web Design & Fast Development',
    subtitle: 'High-Converting Websites Built for Real Customers',
    desc: 'Mobile-first, lightning-fast custom websites that load in sub-seconds and turn visitors into paying customers. No fragile templates or slow builders — built with React, Next.js, and WordPress.',
    price: 'From $299 setup',
    features: [
      'Custom design tailored to your industry and brand',
      'Sub-second page speed (< 1s) optimized for Google rank',
      'Integrated contact forms, call buttons & appointment booking',
      '100% full code and asset ownership — zero platform lock-in',
    ],
    slug: 'web-development',
    icon: Globe,
    tag: 'Core Foundation',
  },
  {
    id: 'hosting',
    category: 'Web & Hosting',
    title: 'Managed Cloud Hosting & Monthly Care',
    subtitle: 'Zero Downtime, Free SSL & Dedicated Texas Support',
    desc: 'Never worry about your website breaking, getting hacked, or loading slowly. We host on enterprise global cloud servers with automatic daily backups and direct human support.',
    price: '$25 / month',
    features: [
      'High-speed global cloud server deployment & 99.9% uptime',
      'Free Let’s Encrypt SSL certificate & DDoS protection',
      'Automatic daily offsite backups with 1-click restore',
      'Includes 2 monthly content, text, or photo updates by our team',
    ],
    slug: 'hosting',
    icon: Cpu,
    tag: 'Essential Value',
  },

  // 2. Search & AI
  {
    id: 'local-seo',
    category: 'Search & AI',
    title: 'Local SEO & Google Business Profile (GBP)',
    subtitle: 'Dominate Google Maps in Your Local City',
    desc: 'When local customers search for your service nearby, your business needs to show up in the Google Maps Top 3 Pack. We optimize your profile, build local citations, and drive organic phone calls.',
    price: 'From $299 / mo',
    features: [
      'Complete Google Business Profile (GBP) verification & optimization',
      'Local Map Pack 3-Pack ranking strategy for your city and radius',
      'Automated 5-star Google review collection campaigns',
      'Local directory citation syndication across 40+ national networks',
    ],
    slug: 'digital-marketing',
    icon: MapPin,
    tag: 'Local Domination',
  },
  {
    id: 'geo-ai-search',
    category: 'Search & AI',
    title: 'Generative Engine Optimization (GEO) & AI Search',
    subtitle: 'Get Recommended by ChatGPT, Gemini & Perplexity',
    desc: 'The 2026 frontier: Customers are asking AI engines for local business recommendations. We optimize your digital footprint and schema so AI models cite and recommend your company first.',
    price: 'Included in Growth Retainers',
    features: [
      'Structured JSON-LD schema markup for AI language models',
      'Entity authority optimization for ChatGPT, Perplexity & Google SGE',
      'Brand citation building across trusted AI reference databases',
      'Voice search optimization for Siri, Google Assistant & Alexa',
    ],
    slug: 'digital-marketing',
    icon: Sparkles,
    tag: '2026 Tech',
  },

  // 3. Paid Advertising
  {
    id: 'google-ads-ppc',
    category: 'Paid Advertising',
    title: 'Paid Search Advertising (Google Ads & PPC)',
    subtitle: 'Capture Ready-to-Buy Customers Right Now',
    desc: 'Bypass organic wait times with precision Google Ads. We target high-intent search keywords with strict negative match filtering, high-converting landing pages, and daily budget oversight.',
    price: 'From $497 / mo + ad spend',
    features: [
      'High-intent Google Search, Call-Only & Performance Max campaigns',
      'Strict negative keyword lists to prevent wasted ad budget',
      'Dedicated landing page design optimized for phone calls and leads',
      'Conversion tracking dashboard tied to actual revenue, not vanity clicks',
    ],
    slug: 'digital-marketing',
    icon: Target,
    tag: 'Immediate Inquiries',
  },
  {
    id: 'paid-social-ads',
    category: 'Paid Advertising',
    title: 'Paid Social Advertising (Meta, Instagram & TikTok)',
    subtitle: 'Hyper-Targeted Local Radius & Retargeting Campaigns',
    desc: 'Put your business directly in front of thousands of local homeowners and prospects in your target zip codes on Instagram and Facebook with compelling creative that demands attention.',
    price: 'From $497 / mo + ad spend',
    features: [
      'Custom ad creative, visual hooks, and persuasive copywriting',
      'Local radius and demographic targeting in your specific service area',
      'Smart website retargeting to bring back lost visitors',
      'Direct instant lead form integration routing to your phone',
    ],
    slug: 'digital-marketing',
    icon: TrendingUp,
    tag: 'High Visibility',
  },

  // 4. Social & Brand
  {
    id: 'social-media-management',
    category: 'Social & Brand',
    title: 'Hands-Free Social Media Management (Organic)',
    subtitle: 'Stay Top-of-Mind With Consistent, Branded Posts',
    desc: 'You run your company; our creative team handles your social channels. We produce custom graphics, reels, carousels, and stories scheduled every single week across all platforms.',
    price: 'From $399 / mo',
    features: [
      '12 to 20 custom branded graphic & video posts produced monthly',
      'Professional copywriting, local hashtags, and multi-channel scheduling',
      'Active coverage on Instagram, Facebook, LinkedIn, and TikTok',
      'Monthly performance reporting and follower engagement insights',
    ],
    slug: 'digital-marketing',
    icon: Share2,
    tag: 'Done-For-You',
  },
  {
    id: 'branding-identity',
    category: 'Social & Brand',
    title: 'Branding & Visual Identity Systems',
    subtitle: 'Make Your Business Look Like the Market Leader',
    desc: 'Stop looking like an amateur. We craft distinctive logo suites, modern color schemes, typography hierarchies, and business collateral that command premium pricing.',
    price: 'From $399 one-time',
    features: [
      'Primary, secondary, and sub-mark logo suites (vector SVG/PNG)',
      'Complete brand style guide: typography, color codes, and usage rules',
      'Business cards, vehicle wraps, flyers, and uniform mockups',
      'Social media profile avatars, banners, and template starter kit',
    ],
    slug: 'ui-ux',
    icon: Palette,
    tag: 'Prestige & Trust',
  },
  {
    id: 'ai-voice-receptionist',
    category: 'Social & Brand',
    title: '24/7 AI Voice & Chat Receptionists',
    subtitle: 'Never Lose a Customer to Voicemail Again',
    desc: 'Capture leads while you sleep. When customers call your number after hours or message your site, conversational AI answers their questions, captures their details, and books appointments.',
    price: 'From $199 setup + $49/mo',
    features: [
      'AI Phone receptionist with automatic missed-call text-back',
      '24/7 Website AI chat assistant trained on your exact business FAQ',
      'Automated Google Calendar & CRM appointment booking',
      'Instant SMS notifications sent straight to your personal mobile phone',
    ],
    slug: 'funnels',
    icon: Bot,
    tag: 'Lead Capture',
  },
];

export const ServicesMatrix: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Web & Hosting', 'Search & AI', 'Paid Advertising', 'Social & Brand'];

  const filteredServices = activeCategory === 'All' 
    ? ALL_SERVICES 
    : ALL_SERVICES.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="bg-paper py-20 md:py-28 text-ink border-b border-ink/10">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-12 border-b border-ink/10">
          <div className="max-w-3xl">
            <p className="eyebrow text-ink/50">Comprehensive Agency Services</p>
            <h2 className="section-h2 mt-4 text-ink">
              The Full-Suite Growth Engine for Small Businesses.
            </h2>
            <p className="mt-4 text-base md:text-lg text-ink/70 leading-relaxed">
              From custom websites and $25/mo hosting to Google Ads, local SEO, AI search (GEO), and hands-free social media — everything you need to dominate your market under one roof.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <a
              href="#free-audit"
              className="btn-ink text-xs sm:text-sm font-bold whitespace-nowrap"
            >
              Get Free Online Score &rarr;
            </a>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="mt-8 flex flex-wrap gap-2 pt-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-5 py-2 text-xs font-bold transition-all ${
                activeCategory === cat
                  ? 'bg-ink text-lime shadow-md scale-105'
                  : 'bg-sand/70 text-ink/70 hover:bg-sand hover:text-ink'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 9 Services Matrix Cards */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredServices.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.id}
                className="group relative flex flex-col justify-between rounded-2xl bg-white p-7 border border-ink/10 shadow-sm hover:shadow-xl hover:border-ink/30 transition-all duration-300"
              >
                <div>
                  {/* Top Bar with Icon and Category Tag */}
                  <div className="flex items-center justify-between pb-4 border-b border-ink/5">
                    <div className="h-11 w-11 rounded-xl bg-ink text-lime grid place-items-center group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-sand/80 text-ink/70 border border-ink/10">
                      {svc.tag}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="mt-5 font-display text-xl font-black text-ink group-hover:text-pine transition-colors">
                    {svc.title}
                  </h3>
                  <p className="mt-1 text-xs font-bold text-pine/80">
                    {svc.subtitle}
                  </p>

                  {/* Description */}
                  <p className="mt-3 text-xs sm:text-sm text-ink/65 leading-relaxed">
                    {svc.desc}
                  </p>

                  {/* Feature Checklist */}
                  <ul className="mt-5 space-y-2 border-t border-ink/5 pt-4">
                    {svc.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-ink/80">
                        <CheckCircle2 className="w-3.5 h-3.5 text-pine shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Footer */}
                <div className="mt-7 pt-4 border-t border-ink/10 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-ink/40 font-bold block">Investment</span>
                    <span className="text-xs font-black text-ink">{svc.price}</span>
                  </div>

                  <Link
                    href={`/services/${svc.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-ink hover:text-pine transition-colors group-hover:translate-x-0.5"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 text-pine" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Strategy Callout */}
        <div className="mt-14 rounded-2xl bg-ink p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="max-w-2xl">
            <span className="text-xs font-extrabold uppercase tracking-widest text-lime">Need a Tailored Retainer?</span>
            <h3 className="font-display text-2xl font-black mt-1">Combine Services Into One Predictable Monthly Retainer.</h3>
            <p className="mt-2 text-sm text-white/70">
              Most clients bundle Website Hosting ($25/mo) + Local SEO + Social Media or Google Ads for a streamlined, flat-rate monthly investment.
            </p>
          </div>
          <a
            href="#contact"
            className="btn-primary text-xs sm:text-sm font-bold whitespace-nowrap shadow-lg"
          >
            Speak With Agency Manager (Niyas) &rarr;
          </a>
        </div>

      </div>
    </section>
  );
};