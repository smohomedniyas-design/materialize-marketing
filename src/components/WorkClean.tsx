'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ExternalLink, TrendingUp, CheckCircle } from 'lucide-react';

export const WorkClean: React.FC = () => {
  const caseStudies = [
    {
      name: 'Flos Eats',
      tagline: 'Local Restaurant & Fast-Casual Dining',
      category: 'Web Design & Local SEO',
      result: '+140% Online Inquiries',
      desc: 'Complete mobile-first website redesign, digital menu integration, and Google Business Profile optimization for a growing restaurant brand.',
      slug: 'flos-eats',
      highlights: ['Custom responsive menu', 'Sub-second page load', 'Top 3 Google Maps rank'],
    },
    {
      name: 'Skrilla / The Rich Sinners',
      tagline: 'Urban Streetwear & Official Merch Storefront',
      category: 'E-Commerce & Branding',
      result: '100% Organic Viral Traffic',
      desc: 'High-conversion e-commerce storefront for an international recording artist and apparel line with seamless mobile checkout and inventory tracking.',
      slug: 'skrilla-the-rich-sinners',
      highlights: ['Automated checkout & cart', 'Mobile-first streetwear aesthetic', 'Zero crash traffic spikes'],
    },
    {
      name: 'Pivotal Family Office',
      tagline: 'Private Wealth & Asset Strategy Hub',
      category: 'Corporate Platform & Portal',
      result: 'Institutional Trust',
      desc: 'Clean, confidential institutional web architecture built to establish authority and trust with high-net-worth investors and family offices.',
      slug: 'pivotal-family-office',
      highlights: ['Bank-grade SSL security', 'Ultra-clean executive layout', 'Compliant investor inquiries'],
    },
    {
      name: 'Sands Planning Group',
      tagline: 'Tax, Retirement & Financial Architecture',
      category: 'Advisory Web Presence',
      result: 'Texas Market Leader',
      desc: 'Official digital platform for our parent company serving business owners across Texas with complex corporate tax and estate planning.',
      slug: 'pivotal-wealth-tax',
      highlights: ['Lead qualification funnels', 'Educational resource library', 'Seamless calendar booking'],
    },
  ];

  return (
    <section id="work" className="bg-slate-50 py-20 md:py-28 border-b border-slate-200/80">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100/70 border border-blue-200 px-3.5 py-1 mb-4">
              <span className="text-xs font-bold text-blue-900 uppercase tracking-widest">
                Real Client Results
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Websites That Look Great and Actually Sell.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600">
              We do not build pretty templates that sit empty. Every project we launch is designed to bring calls, customers, and compounding revenue.
            </p>
          </div>

          <Link
            href="/work"
            className="inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wider text-blue-600 hover:text-blue-800 transition-colors"
          >
            <span>See All Portfolio Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4 Cards Grid */}
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {caseStudies.map((cs) => (
            <div
              key={cs.slug}
              className="group relative flex flex-col justify-between rounded-2xl bg-white p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-extrabold text-blue-700 border border-blue-100">
                    {cs.category}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                    {cs.result}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-2xl font-black text-slate-900 group-hover:text-blue-600 transition-colors">
                  {cs.name}
                </h3>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-0.5">
                  {cs.tagline}
                </p>

                <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                  {cs.desc}
                </p>

                <ul className="mt-5 space-y-2 border-t border-slate-100 pt-4">
                  {cs.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                      <CheckCircle className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href={`/work/${cs.slug}`}
                  className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-slate-800 hover:text-blue-600 transition-colors"
                >
                  <span>Read Case Study</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <span className="text-xs text-slate-400 font-medium">Verified Launch</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
