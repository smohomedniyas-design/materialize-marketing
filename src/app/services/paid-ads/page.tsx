import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { SERVICES } from '@/data/siteData';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Target, 
  TrendingUp, 
  DollarSign, 
  ShieldCheck, 
  Filter, 
  BarChart3 
} from 'lucide-react';
import { CtaBanner } from '@/components/CtaBanner';

export const metadata: Metadata = {
  title: 'Google Ads & PPC Search Management - Materialize Marketing',
  description:
    'Target high-intent customers ready to buy right now. Precision Google Ads management, negative keyword pruning, dedicated landing pages, and strict positive ROI focus.',
};

export default function PaidAdsServicePage() {
  const service = SERVICES.find((s) => s.slug === 'paid-ads')!;

  const ppcPillars = [
    {
      icon: Target,
      title: 'High-Intent Transactional Keywords',
      desc: 'We identify and bid strictly on keywords where the searcher is ready to book, call, or purchase — not informational tire-kickers searching for DIY tips.',
    },
    {
      icon: Filter,
      title: 'Aggressive Negative Keyword Pruning',
      desc: 'Most small business ad spend is wasted on accidental clicks. We build extensive 500+ negative keyword lists and review search query reports weekly to eliminate budget leaks.',
    },
    {
      icon: TrendingUp,
      title: 'High-Converting Dedicated Landing Pages',
      desc: 'Never send expensive Google Ads clicks to a generic homepage. Every campaign links to a custom, lightning-fast landing page optimized specifically for phone calls and form submissions.',
    },
    {
      icon: BarChart3,
      title: 'Direct Revenue & Call Attribution',
      desc: 'We configure server-side conversion tracking so you can see exactly which keyword, ad copy, and campaign drove each booked appointment and closed customer.',
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
              Discipline 05 · Paid Acquisition
            </span>
            <h1 className="font-display text-4xl font-black tracking-tight sm:text-5xl md:text-6xl mt-2">
              Google Ads &amp; <span className="text-lime">Paid Search (PPC)</span>
            </h1>
            <p className="mt-5 text-lg text-white/75 leading-relaxed">
              Capture ready-to-buy customers at the exact second they search for your services.
              We design, test, and manage high-ROI Google Ads campaigns with transparent tracking and zero wasted spend.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact?type=Google+Ads" className="btn-primary">
                Request a Paid Ads Audit
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
              <Link href="/pricing" className="btn-ghost">
                View Pricing ($497/mo)
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
                <span className="eyebrow text-ink/50">Profitable Client Acquisition</span>
                <h2 className="section-h2 mt-3 text-3xl md:text-4xl">
                  Stop Burning Ad Budget. Start Capturing Booked Inquiries.
                </h2>
                <p className="mt-4 text-base text-ink/70 leading-relaxed">
                  Google Ads is the fastest way to generate qualified business, but running broad match campaigns
                  without proper negative keywords and landing page alignment burns thousands of dollars every month.
                  Our team manages your Google campaigns with surgical precision: testing headlines, optimizing quality scores,
                  and turning ad clicks into predictable revenue.
                </p>
              </div>

              {/* 4 Pillars Grid */}
              <div className="grid gap-6 sm:grid-cols-2">
                {ppcPillars.map((p, i) => {
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

              {/* What Makes Us Different */}
              <div className="p-6 md:p-8 rounded-2xl bg-sand/60 border border-ink/10 space-y-3">
                <h3 className="font-display font-bold text-xl">Our Google Ads Management Promise</h3>
                <ul className="space-y-2.5 text-xs text-ink/75">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-lime-700 shrink-0 mt-0.5" />
                    <span><strong>100% Account Ownership:</strong> You own your Google Ads account, data, and billing directly. We never hold your assets hostage.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-lime-700 shrink-0 mt-0.5" />
                    <span><strong>Dedicated Landing Page Included:</strong> We build and host the high-speed landing page variant as part of our setup.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-lime-700 shrink-0 mt-0.5" />
                    <span><strong>Live Telemetry Dashboard:</strong> You can inspect cost-per-lead, conversion rates, and calls in real time.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Sidebar Overview */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 rounded-2xl border border-ink/10 bg-white p-7 shadow-lg">
                <h3 className="font-display font-extrabold text-xl">Google Ads Management</h3>
                <p className="text-xs text-ink/50 mt-1">Starting at {service.startingPrice}</p>

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
                    href="/contact?type=Google+Ads"
                    className="btn-ink w-full !text-sm text-center"
                  >
                    Start Your Campaign
                  </Link>
                  <p className="text-[11px] text-center text-ink/50">
                    Recommended minimum ad spend: $500 - $1,500/month.
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
