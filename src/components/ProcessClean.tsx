'use client';

import React from 'react';
import { Coffee, Rocket, ShieldCheck, ArrowRight, Clock, Check } from 'lucide-react';

export const ProcessClean: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: '15-Minute Discovery & Free Audit',
      timeframe: 'Day 1',
      icon: Coffee,
      desc: 'We hop on a quick, casual call to understand your business, your target customers, and where your current online presence is losing leads. No high-pressure sales tactics — just clear, actionable guidance.',
      deliverables: [
        'Complete website & Google Maps audit',
        'Competitor review in your local city',
        'Clear flat-rate quote with zero hidden fees',
      ],
    },
    {
      num: '02',
      title: 'We Build Everything In 14 Days',
      timeframe: 'Days 2–14',
      icon: Rocket,
      desc: 'You relax while our Texas team handles all the heavy lifting. We write conversion copy, design custom graphics, build your lightning-fast website, and configure your local SEO profiles.',
      deliverables: [
        'Custom web design & mobile optimization',
        'Google Business Profile & local schema setup',
        'You review and request any revisions until 100% satisfied',
      ],
    },
    {
      num: '03',
      title: 'Launch & Hands-Free Growth',
      timeframe: 'Day 14 & Beyond',
      icon: ShieldCheck,
      desc: 'We launch your website with 99.9% uptime and handle ongoing hosting for just $25/mo. If you need text changes, new photos, or blog posts, just text or email your dedicated manager.',
      deliverables: [
        'High-speed cloud hosting & automatic daily backups',
        'Continuous security monitoring & SSL certificate',
        'Direct access to your dedicated account manager (Niyas)',
      ],
    },
  ];

  return (
    <section id="process" className="bg-white py-20 md:py-28 border-b border-slate-200/80">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200 px-3.5 py-1 mb-4">
            <span className="text-xs font-bold text-blue-900 uppercase tracking-widest">
              Simple 3-Step Process
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            How We Take the Stress Out of Marketing.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Most agencies disappear after you pay them. At Materialize Marketing, you get a clear 14-day timeline and a dedicated team in your timezone.
          </p>
        </div>

        {/* 3 Steps */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((st) => {
            const Icon = st.icon;
            return (
              <div
                key={st.num}
                className="relative flex flex-col justify-between rounded-2xl bg-slate-50 p-8 border border-slate-200 hover:border-blue-300 hover:bg-blue-50/30 transition-all duration-200 shadow-sm"
              >
                <div>
                  {/* Step Number & Timeframe */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-200/60">
                    <span className="font-display text-3xl font-black text-blue-600">
                      {st.num}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 bg-white px-2.5 py-1 rounded-full border border-slate-200">
                      <Clock className="w-3.5 h-3.5 text-blue-500" />
                      {st.timeframe}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="mt-6 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-blue-100 text-blue-700 grid place-items-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display text-xl font-black text-slate-900 leading-snug">
                      {st.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                    {st.desc}
                  </p>

                  {/* Deliverables Checklist */}
                  <ul className="mt-6 space-y-2 border-t border-slate-200/60 pt-4">
                    {st.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Hook */}
        <div className="mt-14 text-center">
          <a
            href="#contact"
            className="btn-primary text-base font-bold px-8 py-4 shadow-lg shadow-blue-500/20"
          >
            Start Step 1: Schedule Your 15-Minute Call
            <ArrowRight className="w-5 h-5 ml-1" />
          </a>
          <p className="mt-3 text-xs text-slate-500">
            No credit card required • Free 15-minute consultation • 100% no-pressure advice
          </p>
        </div>
      </div>
    </section>
  );
};