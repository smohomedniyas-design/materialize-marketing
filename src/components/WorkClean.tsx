'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, TrendingUp, CheckCircle2, ExternalLink, Sparkles } from 'lucide-react';

interface CaseStudyItem {
  name: string;
  tagline: string;
  category: string;
  result: string;
  desc: string;
  slug: string;
  image: string;
  liveUrl?: string;
  highlights: string[];
}

export const WorkClean: React.FC = () => {
  const caseStudies: CaseStudyItem[] = [
    {
      name: 'Pivotal Family Office',
      tagline: 'Private Wealth & Athlete Strategy Hub',
      category: 'Corporate Platform & Portal',
      result: 'Lighthouse 99/100',
      desc: 'Institutional digital family office with an interactive SVG service wheel, cinematic video hero, and dual-provider inquiry engine for high-net-worth creators & athletes.',
      slug: 'pivotal-family-office',
      image: '/images/projects/pivotal-family-office.jpg',
      liveUrl: 'https://pivotalfamilyoffice.com/',
      highlights: ['Interactive Service Wheel', 'Sub-second mobile speed', 'Automated intake pipeline'],
    },
    {
      name: 'Entourage Transport',
      tagline: 'Luxury Chauffeur & VIP Fleet Booking',
      category: 'Custom Web & Booking Engine',
      result: '+192% Booking Inquiries',
      desc: 'High-end black car and private chauffeur concierge portal across Phoenix Valley, Arizona, with instant booking forms and fleet presentation.',
      slug: 'entourage-transport',
      image: '/images/projects/entourage-transport.jpg',
      liveUrl: 'https://entouragetransport.com/',
      highlights: ['Automated reservation flow', 'Mobile-first VIP layout', 'Zero friction checkout'],
    },
    {
      name: 'The Rich Sinners',
      tagline: 'Music & Official Streetwear Storefront',
      category: 'Shopify Storefront & Branding',
      result: '100% Crash-Proof Drops',
      desc: 'Custom high-conversion Shopify storefront for an international merchandise line with slide-out cart drawers, currency conversion, and lightning mobile checkout.',
      slug: 'rich-sinners',
      image: '/images/projects/rich-sinners.jpg',
      liveUrl: 'https://therichsinners.com/',
      highlights: ['1-click slide-out cart', 'Mobile drop optimization', 'Automated stock notifications'],
    },
    {
      name: 'Pivotal Wealth & Tax',
      tagline: 'Corporate Tax, Advisory & Retirement',
      category: 'Advisory Web Platform',
      result: 'Texas Market Authority',
      desc: 'Comprehensive corporate advisory website for business owners needing proactive entity structuring, bookkeeping, and year-round tax reduction.',
      slug: 'pivotal-wealth-and-tax',
      image: '/images/projects/pivotal-wealth-and-tax.jpg',
      liveUrl: 'https://pivotalwealthandtax.com/',
      highlights: ['Tax reduction calculators', 'Client portal integration', 'Local Texas authority'],
    },
  ];

  return (
    <section id="work" className="bg-sand/30 py-20 md:py-28 text-ink border-b border-ink/10">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-12 border-b border-ink/10">
          <div className="max-w-3xl">
            <p className="eyebrow text-ink/50">Real Client Work</p>
            <h2 className="section-h2 mt-4 text-ink">
              Bespoke Websites That Look Premium and Actually Convert.
            </h2>
            <p className="mt-4 text-base md:text-lg text-ink/70 leading-relaxed">
              We do not build generic cookie-cutter templates that sit empty. Every platform we engineer is tailored to your business, loaded with speed, and optimized to drive inbound phone calls and sales.
            </p>
          </div>

          <Link
            href="/work"
            className="btn-ink shrink-0 !py-3 !text-xs font-bold uppercase tracking-wider"
          >
            <span>View All Client Work</span>
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </Link>
        </div>

        {/* 4 Rich Visual Cards Grid */}
        <div className="mt-14 grid gap-10 md:grid-cols-2">
          {caseStudies.map((cs) => (
            <div
              key={cs.slug}
              className="group relative flex flex-col justify-between rounded-3xl bg-white border border-ink/10 shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Visual Project Browser Mockup */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-ink/5 border-b border-ink/10">
                {/* Browser Top Chrome Dots */}
                <div className="absolute top-3 left-4 z-20 flex items-center gap-1.5 rounded-full bg-ink/70 backdrop-blur-md px-3 py-1.5 border border-white/10">
                  <span className="h-2 w-2 rounded-full bg-red-400" />
                  <span className="h-2 w-2 rounded-full bg-amber-400" />
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  <span className="ml-2 text-[10px] font-mono font-medium text-white/70">
                    {cs.name.toLowerCase().replace(/\s+/g, '')}.com
                  </span>
                </div>

                {/* Outcome Badge in Top Right */}
                <span className="absolute top-3 right-4 z-20 inline-flex items-center gap-1.5 rounded-full bg-lime text-ink px-3 py-1 text-xs font-black uppercase tracking-wider shadow-md">
                  <TrendingUp className="w-3.5 h-3.5" />
                  {cs.result}
                </span>

                {/* Real Screenshot Image */}
                <img
                  src={cs.image}
                  alt={`${cs.name} Website Mockup`}
                  className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />

                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Project Details */}
              <div className="p-7 sm:p-8 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-black uppercase tracking-wider text-lime-800">
                      {cs.category}
                    </span>
                    {cs.liveUrl && (
                      <a
                        href={cs.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-ink/50 hover:text-ink font-semibold flex items-center gap-1 transition-colors"
                      >
                        <span>Live Site</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>

                  <h3 className="font-display text-2xl font-extrabold text-ink group-hover:text-lime-800 transition-colors">
                    {cs.name}
                  </h3>
                  <p className="mt-1 text-xs font-semibold text-ink/60">
                    {cs.tagline}
                  </p>

                  <p className="mt-3 text-sm text-ink/75 leading-relaxed">
                    {cs.desc}
                  </p>

                  {/* Highlights Checkmarks */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {cs.highlights.map((h, hIdx) => (
                      <span
                        key={hIdx}
                        className="inline-flex items-center gap-1 rounded-xl bg-sand/60 px-3 py-1 text-xs font-semibold text-ink/80"
                      >
                        <CheckCircle2 className="w-3 h-3 text-lime-700 shrink-0" />
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Link Action */}
                <div className="mt-6 pt-5 border-t border-ink/5 flex items-center justify-between">
                  <Link
                    href={`/work/${cs.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-ink group-hover:text-lime-800 transition-colors"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>

                  <Link
                    href="/contact"
                    className="text-xs font-semibold text-ink/50 hover:text-ink transition-colors"
                  >
                    Build Something Similar →
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
