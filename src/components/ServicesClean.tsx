'use client';

import React from 'react';
import Link from 'next/link';
import { Globe, MapPin, Share2, Bot, ArrowRight, CheckCircle2 } from 'lucide-react';

export const ServicesClean: React.FC = () => {
  const services = [
    {
      id: 'web-design',
      title: 'Custom Web Design & Fast Hosting',
      tagline: 'Look Big Online With Zero Tech Headaches',
      desc: 'Mobile-first, lightning-fast websites engineered to turn visitors into paying customers. We handle everything — design, copy, domain, SSL, and monthly updates starting at just $25/mo.',
      icon: Globe,
      slug: 'web-development',
      price: 'From $299 setup + $25/mo',
      highlights: [
        'Custom design tailored to your brand (no cookie-cutter templates)',
        'Ultra-fast loading speed (< 1 second) optimized for Google',
        'Includes secure hosting, SSL & ongoing monthly edits',
      ],
      badge: 'Most Popular',
      badgeColor: 'bg-blue-100 text-blue-700 border-blue-200',
    },
    {
      id: 'local-seo',
      title: 'Local SEO & Google Business Profile',
      tagline: 'Get Found First When Local Customers Search',
      desc: 'Dominate Google Search and Google Maps in your local area. When nearby homeowners, clients, or customers search for what you do, your business shows up at the top.',
      icon: MapPin,
      slug: 'digital-marketing',
      price: 'From $299/month',
      highlights: [
        'Google Business Profile (GBP) complete setup & optimization',
        'Local keyword ranking & Google Maps 3-Pack domination',
        'Automated 5-star Google review collection system',
      ],
      badge: 'High ROI',
      badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    },
    {
      id: 'social-media',
      title: 'Hands-Free Social Media Management',
      tagline: 'Stay Top-of-Mind With Consistent, Branded Content',
      desc: 'You run your business; we handle your social media. Custom branded posts, carousels, and videos scheduled across Instagram, Facebook, LinkedIn, and TikTok every single week.',
      icon: Share2,
      slug: 'digital-marketing',
      price: 'From $399/month',
      highlights: [
        '12–20 custom branded graphic & video posts per month',
        'Engaging captions, trending local hashtags & scheduling',
        'Monthly performance analytics & audience growth tracking',
      ],
      badge: 'Hands-Free',
      badgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
    },
    {
      id: 'ai-automation',
      title: '24/7 AI Voice & Chat Lead Capture',
      tagline: 'Never Lose a Customer to Voicemail Again',
      desc: 'Capture leads 24/7/365. When customers call your number or visit your website after hours, intelligent AI answers their questions, captures their info, and books calls into your calendar.',
      icon: Bot,
      slug: 'funnels',
      price: 'From $199 setup + $49/mo',
      highlights: [
        'AI Voice phone receptionist for missed call text-back & booking',
        'Instant website chat assistant trained on your exact business FAQ',
        'Instant SMS & email notification directly to your phone',
      ],
      badge: '2026 Tech',
      badgeColor: 'bg-purple-100 text-purple-800 border-purple-200',
    },
  ];

  return (
    <section id="services" className="bg-slate-50 py-20 md:py-28 border-b border-slate-200/80">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-100/70 border border-blue-200 px-3.5 py-1 mb-4">
            <span className="text-xs font-bold text-blue-900 uppercase tracking-widest">
              What We Do
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Everything Your Business Needs to Grow Online.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            No confusing agency jargon. No bloated retainers. Just four simple, battle-tested pillars designed to bring real customers through your door.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.id}
                className="group relative flex flex-col justify-between rounded-2xl bg-white p-8 shadow-sm hover:shadow-xl border border-slate-200/90 transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  {/* Top Bar with Icon and Badge */}
                  <div className="flex items-center justify-between">
                    <div className="h-12 w-12 rounded-xl bg-blue-50 text-blue-600 grid place-items-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-[11px] font-bold px-3 py-1 rounded-full border ${svc.badgeColor}`}>
                      {svc.badge}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="mt-6 font-display text-2xl font-black text-slate-900 group-hover:text-blue-600 transition-colors">
                    {svc.title}
                  </h3>
                  <p className="mt-1 text-sm font-bold text-blue-600">
                    {svc.tagline}
                  </p>

                  {/* Description */}
                  <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                    {svc.desc}
                  </p>

                  {/* Highlights Bullets */}
                  <ul className="mt-5 space-y-2.5 border-t border-slate-100 pt-4">
                    {svc.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer with Price and Link */}
                <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 font-bold block">Pricing</span>
                    <span className="text-sm font-black text-slate-900">{svc.price}</span>
                  </div>

                  <Link
                    href={`/services/${svc.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner Hook */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-blue-200/80 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-base font-bold text-slate-900">Need a custom combination of services?</h4>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">We tailor packages for restaurants, local contractors, medical clinics, and family offices.</p>
          </div>
          <a
            href="#contact"
            className="btn-primary !py-2.5 !px-6 !text-xs sm:!text-sm whitespace-nowrap"
          >
            Get a Custom Quote &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};
