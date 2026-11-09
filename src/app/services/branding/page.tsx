import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { SERVICES } from '@/data/siteData';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Palette, 
  Layers, 
  Type, 
  Sparkles, 
  Award, 
  DownloadCloud 
} from 'lucide-react';
import { CtaBanner } from '@/components/CtaBanner';

export const metadata: Metadata = {
  title: 'Branding & Visual Identity Systems - Materialize Marketing',
  description:
    'Distinctive logo suites, color palettes, typography scales, and social media asset kits that make your small business look like the undeniable industry leader.',
};

export default function BrandingServicePage() {
  const service = SERVICES.find((s) => s.slug === 'branding')!;

  const brandingPillars = [
    {
      icon: Palette,
      title: 'Full Vector Logo Suite',
      desc: 'You receive primary horizontal, stacked vertical, circular badge, and icon-only sub-marks in all transparent vector formats (SVG, EPS, high-res PNG) ready for print, web, and embroidery.',
    },
    {
      icon: Type,
      title: 'Typography & Font System',
      desc: 'We select cohesive, modern font pairings (headline and body) with clear hierarchy guidelines that keep your marketing materials sharp, readable, and authoritative.',
    },
    {
      icon: Layers,
      title: 'Curated Color Palette & Brand Book',
      desc: 'A complete color system featuring primary, secondary, and accent colors with exact Hex, RGB, and CMYK codes for consistent reproduction across digital screens and physical print.',
    },
    {
      icon: Sparkles,
      title: 'Social Media Starter Assets',
      desc: 'We format your new branding into matching square profile avatars, horizontal banner covers for Facebook and LinkedIn, and 5 reusable Canva post templates for instant use.',
    },
  ];

  return (
    <div className="pt-28 md:pt-36">
      {/* Hero Header */}
      <section className="bg-ink text-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-lime hover:underline mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to All Services
          </Link>
          <div className="max-w-3xl">
            <span className="font-display text-xs font-extrabold uppercase tracking-[0.25em] text-white/50">
              Discipline 08 · Visual Authority
            </span>
            <h1 className="font-display text-4xl font-black tracking-tight sm:text-5xl md:text-6xl mt-2">
              Branding &amp; <span className="text-lime">Visual Identity Systems</span>
            </h1>
            <p className="mt-5 text-lg text-white/75 leading-relaxed">
              Transform how your business looks so you can command premium pricing with confidence.
              We design memorable logos, refined color palettes, and complete brand style guides that make your business unforgettable.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact?type=Branding" className="btn-primary">
                Start Your Brand Project
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
              <Link href="/pricing" className="btn-ghost">
                View Pricing ($199 - $399)
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Details */}
      <section className="bg-paper py-20 text-ink">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8 space-y-10">
              <div>
                <span className="eyebrow text-ink/50">Stand Out from Competitors</span>
                <h2 className="section-h2 mt-3 text-3xl md:text-4xl">
                  First Impressions Decide Your Profit Margin.
                </h2>
                <p className="mt-4 text-base text-ink/70 leading-relaxed">
                  When a customer lands on your website or social profile, they judge your competence within 3 seconds.
                  A dated, amateur logo makes clients question your pricing and reliability. A polished, modern brand
                  identity creates immediate trust and gives you the leverage to charge what you are genuinely worth.
                </p>
              </div>

              {/* 4 Pillars Grid */}
              <div className="grid gap-6 sm:grid-cols-2">
                {brandingPillars.map((p, i) => {
                  const Icon = p.icon;
                  return (
                    <div key={i} className="p-6 rounded-2xl border border-ink/10 bg-white">
                      <div className="grid h-10 w-10 place-items-center rounded-lg bg-lime text-ink mb-4">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-display font-extrabold text-lg">{p.title}</h3>
                      <p className="text-xs text-ink/65 mt-2 leading-relaxed">{p.desc}</p>
                    </div>
                  );
                })}
              </div>

              {/* Ownership Guarantee */}
              <div className="p-6 md:p-8 rounded-2xl bg-sand/60 border border-ink/10 space-y-3">
                <h3 className="font-display font-bold text-xl">100% Full Copyright Ownership Guarantee</h3>
                <p className="text-xs text-ink/70 leading-relaxed">
                  Upon completion of your branding project, you receive 100% full commercial ownership and copyright rights
                  to all final files, vectors, fonts, and assets. Zero royalties, zero recurring licensing fees.
                </p>
              </div>
            </div>

            {/* Sidebar Overview */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 rounded-2xl border border-ink/10 bg-white p-7 shadow-lg">
                <h3 className="font-display font-extrabold text-xl">Brand Identity Package</h3>
                <p className="text-xs text-ink/50 mt-1">Starting at {service.startingPrice} one-time</p>

                <div className="mt-6 space-y-3">
                  {service.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-ink/80">
                      <CheckCircle2 className="w-4 h-4 text-lime-700 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-ink/10 space-y-3">
                  <Link
                    href="/contact?type=Branding"
                    className="btn-ink w-full !text-sm text-center"
                  >
                    Get Your Brand Kit
                  </Link>
                  <p className="text-[11px] text-center text-ink/50">
                    Delivered in 1 to 2 weeks with interactive revision rounds.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
