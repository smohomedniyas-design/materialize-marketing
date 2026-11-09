'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, TrendingUp, CheckCircle, ExternalLink } from 'lucide-react';

export const WorkClean: React.FC = () => {
  const caseStudies = [
    {
      name: 'Flos Eats',
      tagline: 'Local Restaurant & Fast-Casual Dining',
      category: 'Web Design & Local SEO',
      result: '+140% Online Inquiries',
      desc: 'Complete mobile-first website redesign, digital menu architecture, and Google Business Profile optimization for an expanding local restaurant brand.',
      slug: 'flos-eats',
      highlights: ['Custom responsive menu', 'Sub-second page speed', 'Top 3 Google Maps rank'],
    },
    {
      name: 'Skrilla / The Rich Sinners',
      tagline: 'Streetwear & Official Merch Storefront',
      category: 'E-Commerce & Branding',
      result: '100% Organic Viral Traffic',
      desc: 'High-conversion Shopify storefront for an international recording artist and merchandise line with seamless mobile checkout and inventory tracking.',
      slug: 'skrilla-the-rich-sinners',
      highlights: ['Automated checkout & cart', 'Dark streetwear aesthetic', 'Zero crash traffic spikes'],
    },
    {
      name: 'Pivotal Family Office',
      tagline: 'Private Wealth & Asset Strategy Hub',
      category: 'Corporate Platform & Portal',
      result: 'Institutional Trust',
      desc: 'Confidential institutional web platform built to establish authority and trust with high-net-worth creators, athletes, and family offices.',
      slug: 'pivotal-family-office',
      highlights: ['Bank-grade SSL security', 'Ultra-clean executive layout', 'Compliant investor funnels'],
    },
    {
      name: 'Sands Planning Group',
      tagline: 'Corporate Tax, Retirement & Wealth Strategy',
      category: 'Advisory Web Presence',
      result: 'Texas Market Leader',
      desc: 'Official digital platform for our parent company serving business owners across Texas with complex corporate tax and estate architecture.',
      slug: 'pivotal-wealth-tax',
      highlights: ['Lead qualification funnels', 'Educational video library', 'Seamless calendar booking'],
    },
  ];

  return (
    <section id="work" className="bg-sand/30 py-20 md:py-28 text-ink border-b border-ink/10">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-12 border-b border-ink/10">
          <div className="max-w-3xl">
            <p className="eyebrow text-ink/50">Real Client Results</p>
            <h2 className="section-h2 mt-4 text-ink">
              Bespoke Platforms That Look Great and Actually Sell.
            </h2>
            <p className="mt-4 text-base md:text-lg text-ink/70 leading-relaxed">
              We do not build generic templates that sit empty. Every platform we engineer is crafted for visual prestige, lightning speed, and compounding revenue.
            </p>
          </div>

          <Link
            href="/work"
            className="inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wider text-ink hover:text-pine transition-colors"
          >
            <span>See All Portfolio Work</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4 Cards Grid */}
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {caseStudies.map((cs) => (
            <div
              key={cs.slug}
              className="group relative flex flex-col justify-between rounded-2xl bg-white p-8 border border-ink/10 shadow-sm hover:shadow-xl hover:border-ink/30 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-ink/5">
                  <span className="rounded-full bg-sand px-3 py-1 text-xs font-extrabold text-ink border border-ink/10">
                    {cs.category}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                    {cs.result}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-2xl font-black text-ink group-hover:text-pine transition-colors">
                  {cs.name}
                </h3>
                <p className="text-xs font-bold text-ink/50 uppercase tracking-wider mt-0.5">
                  {cs.tagline}
                </p>

                <p className="mt-4 text-sm text-ink/70 leading-relaxed">
                  {cs.desc}
                </p>

                <ul className="mt-5 space-y-2 border-t border-ink/5 pt-4">
                  {cs.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs font-semibold text-ink/80">
                      <CheckCircle className="w-3.5 h-3.5 text-pine shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-5 border-t border-ink/10 flex items-center justify-between">
                <Link
                  href={`/work/${cs.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-ink hover:text-pine transition-colors"
                >
                  <span>Read Full Case Study</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <span className="text-[11px] text-ink/40 font-bold uppercase tracking-wider">Live Platform</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};