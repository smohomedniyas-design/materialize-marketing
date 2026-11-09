import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { PROCESS_STEPS } from '@/data/siteData';
import { CheckCircle2, Shield, Clock, Users, ArrowRight, MessageSquare, GitBranch, Layers } from 'lucide-react';
import { CtaBanner } from '@/components/CtaBanner';

export const metadata: Metadata = {
  title: 'Our Process - Streamlined Milestone-Driven Delivery',
  description:
    'A proven, milestone-driven web development and growth pipeline refined across 60+ launches. Transparent communication, rapid staging previews, and guaranteed delivery.',
};

export default function ProcessPage() {
  return (
    <div className="pt-28 md:pt-36">
      {/* Hero Header */}
      <section className="bg-ink text-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 text-center">
          <p className="eyebrow justify-center text-lime">Milestone-Driven Delivery</p>
          <h1 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl mt-4">
            Our Streamlined <span className="text-lime">Launch Pipeline.</span>
          </h1>
          <p className="mt-5 max-w-2xl mx-auto text-lg text-white/70 leading-relaxed">
            From quick 1-2 week starter launches to comprehensive e-commerce builds. You always know what is completed, what is being built next, and exactly what it costs.
          </p>
        </div>
      </section>

      {/* Detailed Pipeline Breakdown */}
      <section className="bg-paper py-20 text-ink">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 space-y-16">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.num}
              className="rounded-3xl border border-ink/10 bg-white p-8 md:p-12 shadow-sm transition-all hover:shadow-lg"
            >
              <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
                {/* Left Step Header */}
                <div className="lg:col-span-5">
                  <div className="flex items-center gap-3">
                    <span className="font-display text-5xl font-black text-ink">
                      {step.num}
                    </span>
                    <span className="rounded-full bg-ink px-3 py-1 text-xs font-extrabold uppercase tracking-widest text-lime">
                      {step.timeframe}
                    </span>
                  </div>

                  <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight">
                    {step.title}
                  </h2>
                  <p className="mt-4 text-base text-ink/70 leading-relaxed">
                    {step.fullDesc}
                  </p>
                </div>

                {/* Right Actions & Deliverables */}
                <div className="lg:col-span-7 grid gap-6 sm:grid-cols-2">
                  <div className="rounded-2xl bg-sand/50 p-6 border border-ink/10">
                    <h3 className="font-display font-bold text-sm uppercase tracking-wider text-ink/60 mb-3">
                      Key Sprint Actions
                    </h3>
                    <ul className="space-y-2.5 text-xs text-ink/80 font-medium">
                      {step.keyActions.map((action, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Clock className="w-3.5 h-3.5 text-ink/40 mt-0.5 shrink-0" />
                          <span>{action}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-2xl bg-lime/20 p-6 border border-ink/10">
                    <h3 className="font-display font-bold text-sm uppercase tracking-wider text-ink/70 mb-3">
                      Shipped Deliverables
                    </h3>
                    <ul className="space-y-2.5 text-xs text-ink/90 font-semibold">
                      {step.deliverables.map((deliv, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-lime-900 mt-0.5 shrink-0" />
                          <span>{deliv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Collaboration Ecosystem */}
      <section className="bg-coal text-white py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <p className="eyebrow justify-center text-white/50">Collaboration Stack</p>
            <h2 className="font-display text-3xl font-extrabold sm:text-4xl mt-3">
              How We Work With Your Team
            </h2>
            <p className="mt-3 text-sm text-white/60">
              No black-box mystery. You get real-time transparency across design, code, and sprint boards.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="p-6 rounded-2xl border border-white/10 bg-coal">
              <MessageSquare className="w-8 h-8 text-lime mb-4" />
              <h3 className="font-display font-bold text-lg">Shared Slack Channel</h3>
              <p className="text-xs text-white/60 mt-2">
                Direct daily communication with our principal architect and project lead - no account manager telephone games.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-white/10 bg-coal">
              <Layers className="w-8 h-8 text-lime mb-4" />
              <h3 className="font-display font-bold text-lg">Live Figma Workspaces</h3>
              <p className="text-xs text-white/60 mt-2">
                Comment directly on wireframes, interactive prototypes, and design systems as they are being crafted.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-white/10 bg-coal">
              <GitBranch className="w-8 h-8 text-lime mb-4" />
              <h3 className="font-display font-bold text-lg">Vercel Preview Deploys</h3>
              <p className="text-xs text-white/60 mt-2">
                Every Friday, you receive a private password-protected staging URL to click through progress on your own device.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-white/10 bg-coal">
              <Shield className="w-8 h-8 text-lime mb-4" />
              <h3 className="font-display font-bold text-lg">Monday.com Sprint Board</h3>
              <p className="text-xs text-white/60 mt-2">
                Real-time milestone tracking, task assignments, and delivery schedules updated every single day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="bg-sand/60 py-16 text-ink border-t border-ink/10">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="rounded-3xl border border-ink/10 bg-white p-8 md:p-12 text-center max-w-3xl mx-auto shadow-md">
            <h3 className="font-display text-2xl font-black md:text-3xl">The Materialize Standard Guarantee</h3>
            <p className="text-sm text-ink/70 mt-3 leading-relaxed">
              If we miss an agreed deadline that is within our control, we credit you 10% of the project fee for every week delayed.
              We stand behind our estimates with financial skin in the game.
            </p>
            <div className="mt-6 flex justify-center">
              <Link href="/contact" className="btn-ink !py-3 !px-6 !text-sm">
                Kick Off Your Project Brief <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBanner />
    </div>
  );
}
