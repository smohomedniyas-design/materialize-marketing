import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { SERVICES } from '@/data/siteData';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  Video, 
  Users, 
  Layers, 
  Zap, 
  Sparkles 
} from 'lucide-react';
import { CtaBanner } from '@/components/CtaBanner';

export const metadata: Metadata = {
  title: 'Paid Social Advertising (Meta, Instagram & TikTok) - Materialize Marketing',
  description:
    'Scroll-stopping visual ad creatives and laser-targeted audience funnels across Facebook, Instagram, and TikTok. Turn social media feeds into booked clients.',
};

export default function PaidSocialServicePage() {
  const service = SERVICES.find((s) => s.slug === 'paid-social')!;

  const socialAdPillars = [
    {
      icon: Video,
      title: 'High-Impact Short-Form Video & Visual Hooks',
      desc: 'Feeds are fast. We write, design, and edit high-energy video hooks, carousel cards, and customer spotlight creatives designed to stop the thumb within the first 2 seconds.',
    },
    {
      icon: Users,
      title: 'Hyper-Targeted Local Radius & Demographics',
      desc: 'Whether you need homeowners in specific zip codes, high-income professionals, or niche local demographics, we build targeted custom audiences and lookalikes that reach the right buyers.',
    },
    {
      icon: Layers,
      title: 'Full-Funnel Retargeting Architecture',
      desc: 'Over 95% of first-time website visitors do not convert immediately. We set up dynamic retargeting ad sets that nurture past visitors with testimonials, offers, and case studies until they book.',
    },
    {
      icon: Zap,
      title: 'Meta Conversions API (CAPI) Integration',
      desc: 'We configure server-side tracking via Meta CAPI and first-party pixels to bypass iOS tracking loss, ensuring accurate conversion measurement and better ad delivery algorithms.',
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
              Discipline 06 · Social Acquisition
            </span>
            <h1 className="font-display text-4xl font-black tracking-tight sm:text-5xl md:text-6xl mt-2">
              Paid Social Advertising <span className="text-lime">(Meta &amp; TikTok)</span>
            </h1>
            <p className="mt-5 text-lg text-white/75 leading-relaxed">
              Put your brand directly in front of thousands of ideal local clients on Instagram, Facebook, and TikTok.
              We handle ad creative production, audience targeting, copywriting, and daily bid scaling.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact?type=Paid+Social+Ads" className="btn-primary">
                Scale Your Social Ads
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
              <Link href="/pricing" className="btn-ghost">
                View Retainer Options ($497/mo)
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
                <span className="eyebrow text-ink/50">Creative That Converts</span>
                <h2 className="section-h2 mt-3 text-3xl md:text-4xl">
                  Turn Passive Social Scrolling into Paying Customers.
                </h2>
                <p className="mt-4 text-base text-ink/70 leading-relaxed">
                  Most social ads fail because they look like boring ads. We design native-feeling content — authentic
                  client results, engaging transformation Reels, and compelling localized offers — that customers actually
                  want to watch. Paired with intelligent retargeting, your business stays top-of-mind across your entire market.
                </p>
              </div>

              {/* 4 Pillars Grid */}
              <div className="grid gap-6 sm:grid-cols-2">
                {socialAdPillars.map((p, i) => {
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

              {/* Creative Workflow */}
              <div className="p-6 md:p-8 rounded-2xl bg-sand/60 border border-ink/10 space-y-3">
                <h3 className="font-display font-bold text-xl">Our Rapid Creative Testing Engine</h3>
                <p className="text-xs text-ink/70 leading-relaxed">
                  Ad fatigue kills campaigns. We continuously refresh your ad creatives every 2 to 3 weeks, testing new headlines,
                  color palettes, video hooks, and call-to-action buttons to ensure your cost-per-lead stays low and predictable.
                </p>
              </div>
            </div>

            {/* Sidebar Overview */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 rounded-2xl border border-ink/10 bg-white p-7 shadow-lg">
                <h3 className="font-display font-extrabold text-xl">Paid Social Retainer</h3>
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
                    href="/contact?type=Paid+Social+Ads"
                    className="btn-ink w-full !text-sm text-center"
                  >
                    Launch Paid Social
                  </Link>
                  <p className="text-[11px] text-center text-ink/50">
                    Transparent daily ad spend oversight with weekly reporting.
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
