'use client';

import React from 'react';
import { Coffee, Rocket, ShieldCheck, ArrowRight, Clock, Check } from 'lucide-react';

export const ProcessClean: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: '15-Minute Discovery & Audit',
      timeframe: 'Day 1',
      icon: Coffee,
      desc: 'We hop on a casual call to understand your business, your target customers, and where your current online presence is losing leads. No sales tactics — just clear, actionable guidance.',
      deliverables: [
        'Complete website & Google Maps audit',
        'Competitor review in your local area',
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
    <section id="process" className="bg-paper py-20 md:py-28 text-ink border-b border-ink/10">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="eyebrow text-ink/50 justify-center">The 3-Step Roadmap</p>
          <h2 className="section-h2 mt-4 text-ink">
            How We Take the Stress Out of Marketing.
          </h2>
          <p className="mt-4 text-base md:text-lg text-ink/70 leading-relaxed">
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
                className="relative flex flex-col justify-between rounded-2xl bg-white p-8 border border-ink/10 hover:border-ink/30 transition-all duration-300 shadow-sm hover:shadow-lg"
              >
                <div>
                  {/* Step Number & Timeframe */}
                  <div className="flex items-center justify-between pb-4 border-b border-ink/5">
                    <span className="font-display text-3xl font-black text-pine">
                      {st.num}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-ink/70 bg-sand px-3 py-1 rounded-full border border-ink/10">
                      <Clock className="w-3.5 h-3.5 text-pine" />
                      {st.timeframe}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="mt-6 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-ink text-lime grid place-items-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display text-xl font-black text-ink leading-snug">
                      {st.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-xs sm:text-sm text-ink/70 leading-relaxed">
                    {st.desc}
                  </p>

                  {/* Deliverables Checklist */}
                  <ul className="mt-6 space-y-2 border-t border-ink/5 pt-4">
                    {st.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-ink/80">
                        <Check className="w-4 h-4 text-pine shrink-0 mt-0.5" />
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
            className="btn-ink text-sm sm:text-base font-bold px-8 py-4 shadow-xl"
          >
            <span>Start Step 1: Schedule Your 15-Minute Call</span>
            <ArrowRight className="w-5 h-5 ml-1 text-lime" />
          </a>
          <p className="mt-3 text-xs text-ink/50">
            No credit card required • Free 15-minute consultation • 100% no-pressure advice
          </p>
        </div>

      </div>
    </section>
  );
};