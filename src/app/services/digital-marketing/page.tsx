import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { SERVICES, PROJECTS } from '@/data/siteData';
import { ArrowLeft, ArrowRight, CheckCircle2, TrendingUp, Target, BarChart3, Megaphone, Zap, Layers, Sparkles } from 'lucide-react';
import { CtaBanner } from '@/components/CtaBanner';

export const metadata: Metadata = {
  title: 'Digital Marketing Strategies & Handled Solutions - Materialize Marketing',
  description:
    'Full-funnel digital marketing strategies, paid acquisition management (Meta, Google, TikTok), SEO, and conversion optimization actively handled by senior US marketers.',
};

export default function DigitalMarketingServicePage() {
  const service = SERVICES.find((s) => s.slug === 'digital-marketing')!;

  const strategicPillars = [
    {
      icon: Target,
      title: 'Full-Funnel Strategy Formulation',
      desc: 'We map your exact customer economics: Target Customer Acquisition Cost (CAC), Return on Ad Spend (ROAS), and Customer Lifetime Value (LTV). No generic playbooks - every strategy is built around your specific margins and sales cycles.',
    },
    {
      icon: Megaphone,
      title: 'Multi-Channel Paid Ad Management',
      desc: 'Hands-on daily campaign management across Meta Ads (Facebook & Instagram), Google Search & Performance Max, YouTube, and TikTok. We write the copy, direct creative angles, test hooks, and optimize bids continuously.',
    },
    {
      icon: TrendingUp,
      title: 'Technical SEO & Search Authority',
      desc: 'Capture intent-driven high-ticket buyers with technical on-page SEO, high-authority content architecture, clean schema markup, and programmatic landing pages designed to rank and convert.',
    },
    {
      icon: Layers,
      title: 'Lifecycle & Retention Automation',
      desc: 'Turn one-off purchasers into compounding lifetime revenue with automated Klaviyo & HubSpot flows: abandoned checkout recovery, personalized post-purchase nurture, VIP loyalty campaigns, and SMS broadcasts.',
    },
    {
      icon: BarChart3,
      title: 'First-Party Attribution & Analytics',
      desc: 'Eliminate iOS tracking blindspots with server-side Meta Conversions API (CAPI), Google Analytics 4 (GA4), PostHog, and Triple Whale. Clear, verified revenue dashboards with zero guesswork.',
    },
    {
      icon: Zap,
      title: 'Active Execution & Senior Handling',
      desc: 'You do not just get advice; we actively handle campaign setup, audience segmentation, creative refreshes, budget scaling, and weekly performance reviews with our senior growth squad.',
    },
  ];

  return (
    <div className="pt-28 md:pt-36">
      {/* Hero Section */}
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
              Discipline 02
            </span>
            <h1 className="font-display text-4xl font-black tracking-tight sm:text-5xl md:text-6xl mt-2">
              Digital Marketing &amp; <span className="text-lime">Growth Solutions</span>
            </h1>
            <p className="mt-5 text-lg text-white/75 leading-relaxed">
              We don&apos;t just build websites and walk away. Materialize Marketing formulates data-backed
              digital marketing strategies and actively handles your multi-channel campaigns day-to-day -
              scaling paid ads, dominating search, and turning traffic into compounding revenue.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact?type=Digital+Marketing" className="btn-primary">
                Discuss Your Marketing Strategy
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
              <Link href="/pricing" className="btn-ghost">
                View Retainer Options
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="bg-paper py-20 text-ink">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8 space-y-12">
              <div>
                <span className="eyebrow text-ink/50">Strategic Execution</span>
                <h2 className="section-h2 mt-3 text-3xl md:text-4xl">
                  Strategy Formulated. Campaigns Handled. Results Compounded.
                </h2>
                <p className="mt-4 text-base text-ink/70 leading-relaxed">
                  Too many agencies hand clients a 40-page slide deck that gathers dust. At Materialize Marketing,
                  our 4-person senior team takes direct ownership of your marketing infrastructure: formulating
                  compelling offers, producing creative assets, managing ad spend, and fine-tuning landing pages
                  for peak conversion.
                </p>
              </div>

              {/* 6 Strategic Pillars Grid */}
              <div className="grid gap-6 sm:grid-cols-2">
                {strategicPillars.map((pillar, idx) => {
                  const Icon = pillar.icon;
                  return (
                    <div
                      key={idx}
                      className="rounded-2xl border border-ink/10 bg-white p-6 shadow-sm transition hover:shadow-md hover:border-ink/20"
                    >
                      <div className="grid h-10 w-10 place-items-center rounded-xl bg-lime/30 text-ink mb-4">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-display text-lg font-bold text-ink">
                        {pillar.title}
                      </h3>
                      <p className="mt-2 text-xs text-ink/65 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Features List */}
              <div className="rounded-2xl border border-ink/10 bg-white p-8">
                <h3 className="font-display text-xl font-bold text-ink mb-6">
                  What We Handle Every Single Month
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {service.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-ink/80">
                      <CheckCircle2 className="w-4 h-4 text-pine shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverables */}
              <div>
                <h3 className="font-display text-2xl font-bold text-ink mb-6">
                  Tangible Deliverables &amp; Cadence
                </h3>
                <div className="space-y-4">
                  {service.deliverables.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 p-4 rounded-xl bg-sand/30 border border-ink/10"
                    >
                      <span className="grid h-7 w-7 place-items-center rounded-full bg-ink text-lime text-xs font-black shrink-0">
                        {i + 1}
                      </span>
                      <p className="text-sm font-medium text-ink/80 mt-1">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar Details */}
            <div className="lg:col-span-4 space-y-6">
              <div className="rounded-2xl border border-ink/10 bg-white p-6 shadow-sm sticky top-28">
                <span className="text-xs font-extrabold uppercase tracking-widest text-ink/40">
                  Engagement Model
                </span>
                <p className="font-display text-3xl font-black text-ink mt-2">
                  {service.startingPrice}
                </p>
                <p className="text-xs text-ink/50 mt-1 font-semibold">
                  {service.typicalTimeline} · Guaranteed Senior Hands-On Execution
                </p>

                <div className="mt-6 space-y-4 border-t border-ink/10 pt-6">
                  <div>
                    <span className="text-xs font-bold text-ink/50 uppercase tracking-wider block">
                      Target Metrics
                    </span>
                    <span className="text-sm font-semibold text-ink mt-0.5 block">
                      ROAS, CAC, Inquiries, LTV
                    </span>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-ink/50 uppercase tracking-wider block">
                      Channels Managed
                    </span>
                    <span className="text-sm font-semibold text-ink mt-0.5 block">
                      Meta Ads, Google, TikTok, Klaviyo, SEO
                    </span>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-ink/50 uppercase tracking-wider block">
                      Reporting Cadence
                    </span>
                    <span className="text-sm font-semibold text-ink mt-0.5 block">
                      Live Telemetry Dashboard + Bi-Weekly Calls
                    </span>
                  </div>
                </div>

                <div className="mt-8">
                  <Link
                    href="/contact?type=Digital+Marketing"
                    className="btn-primary w-full text-center"
                  >
                    Request Strategy Call
                  </Link>
                </div>
              </div>

              {/* Stack & Tools */}
              <div className="rounded-2xl border border-ink/10 bg-white p-6 shadow-sm">
                <h4 className="font-display text-sm font-bold uppercase tracking-wider text-ink/60 mb-4">
                  Growth Stack &amp; Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg bg-paper px-2.5 py-1 text-xs font-bold text-ink/75 border border-ink/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBanner />
    </div>
  );
}

