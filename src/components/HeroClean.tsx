'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Star, ShieldCheck, Sparkles, TrendingUp, PhoneCall, Zap } from 'lucide-react';

export const HeroClean: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-slate-50 pt-12 pb-16 md:pt-20 md:pb-24 border-b border-slate-200/80">
      {/* Decorative background blur dots */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 left-1/4 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl" />
        <div className="absolute top-12 right-1/4 w-80 h-80 bg-amber-100/50 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 max-w-2xl">
            {/* Trust Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200/80 px-4 py-1.5 mb-6 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-xs font-bold text-blue-900 tracking-wide">
                Digital Marketing Made Simple for Small Businesses
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900 leading-[1.12]">
              Turn Your Website Into <br className="hidden sm:inline" />
              <span className="text-blue-600 underline decoration-blue-200 decoration-wavy decoration-2">
                Real Paying Customers.
              </span>
            </h1>

            {/* Plain-English Subtitle */}
            <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
              We help local US businesses look professional online and dominate their market. High-converting custom websites, local Google Maps ranking, hands-free social media, and 24/7 AI lead capture — starting at just <strong>$25/month</strong>.
            </p>

            {/* Dual Primary CTAs (Skol Marketing Model) */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#free-audit"
                className="btn-primary text-base font-bold px-8 py-4 text-center justify-center shadow-lg shadow-blue-500/20"
              >
                <span>Check Your Online Score (Free Audit)</span>
                <ArrowRight className="w-5 h-5 ml-1" />
              </a>

              <a
                href="#contact"
                className="btn-ghost text-base font-bold px-7 py-4 text-center justify-center text-slate-800 hover:text-blue-600"
              >
                Schedule Free 15-Min Call
              </a>
            </div>

            {/* Trust Proof Bullets */}
            <div className="mt-8 pt-6 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-slate-600 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Websites from <strong>$25/mo</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Fast 14-Day Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>No Long-Term Contracts</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Dedicated Texas Support</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Client Ownership</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Backed by SPG Tax &amp; Wealth</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Trust Interactive Card Preview */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md rounded-2xl bg-white p-6 shadow-xl border border-slate-200">
              {/* Card Header Badge */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="h-9 w-9 rounded-xl bg-blue-600 grid place-items-center text-white font-bold text-sm">
                    MM
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 leading-none">Materialize Growth Engine</h3>
                    <p className="text-xs text-slate-500 mt-0.5">Average Client Performance</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
                  Live System
                </span>
              </div>

              {/* Real Metric Highlights */}
              <div className="mt-5 space-y-3.5">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-lg bg-blue-100 text-blue-700 grid place-items-center">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">Google Map Pack &amp; Local SEO</p>
                      <p className="text-sm font-extrabold text-slate-900">#1 Top 3 Rankings</p>
                    </div>
                  </div>
                  <span className="text-xs font-black text-emerald-600">+140% Calls</span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-lg bg-amber-100 text-amber-700 grid place-items-center">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">Page Speed &amp; Mobile Score</p>
                      <p className="text-sm font-extrabold text-slate-900">99 / 100 Google Vitals</p>
                    </div>
                  </div>
                  <span className="text-xs font-black text-blue-600">&lt; 0.8s Load</span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-lg bg-emerald-100 text-emerald-700 grid place-items-center">
                      <PhoneCall className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">24/7 AI Lead Capture</p>
                      <p className="text-sm font-extrabold text-slate-900">Zero Missed Phone Calls</p>
                    </div>
                  </div>
                  <span className="text-xs font-black text-emerald-600">Active</span>
                </div>
              </div>

              {/* 5-Star Testimonial Snippet */}
              <div className="mt-5 p-4 rounded-xl bg-amber-50/70 border border-amber-200/80">
                <div className="flex items-center gap-1 text-amber-500 mb-1.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs font-bold text-amber-900 ml-1.5">5.0 Star Agency</span>
                </div>
                <p className="text-xs text-slate-700 italic">
                  &ldquo;Materialize Marketing built our site, set up our local presence, and handled our social media with zero stress. Best investment we made.&rdquo;
                </p>
                <p className="text-[11px] font-bold text-slate-900 mt-2">
                  — Flos Eats &amp; Local Business Partners
                </p>
              </div>

              {/* Direct Booking Hook */}
              <div className="mt-5 text-center">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 hover:underline"
                >
                  Speak directly with Niyas (Agency Manager) &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
