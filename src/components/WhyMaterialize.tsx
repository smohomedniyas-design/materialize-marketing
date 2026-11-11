'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, PhoneCall, BookOpen, ArrowRight, Award, Users, CheckCircle2 } from 'lucide-react';

export const WhyMaterialize: React.FC = () => {
  const trustStats = [
    { value: '100+', label: 'Years Combined Experience', sub: 'Across our senior digital & web team' },
    { value: '20+', label: 'Businesses Launched', sub: 'Local restaurants, salons & firms' },
    { value: '60+', label: 'Projects Delivered', sub: 'On time, on budget, zero lock-in' },
    { value: '100%', label: 'Dedicated Human Support', sub: 'Direct phone, WhatsApp & Slack' },
  ];

  return (
    <section className="bg-sand/30 py-20 md:py-28 text-ink border-b border-ink/10">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="eyebrow justify-center text-ink/50">Why Materialize Marketing?</p>
          <h2 className="section-h2 mt-3">
            The Digital Muscle You Need. The Personal Attention You Deserve.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-ink/70 leading-relaxed">
            Started in Prosper, Texas, Materialize Marketing combines high-end technical craftsmanship with a personal, hands-on partnership to help your business win in an increasingly online world.
          </p>
        </div>

        {/* 3 Core Value Pillars (Cards) */}
        <div className="grid gap-8 md:grid-cols-3">
          
          {/* Pillar 1 */}
          <div className="rounded-3xl border border-ink/10 bg-white p-8 sm:p-9 shadow-sm hover:shadow-md transition-shadow">
            <div className="h-12 w-12 rounded-2xl bg-ink text-lime flex items-center justify-center mb-6">
              <PhoneCall className="w-6 h-6" />
            </div>
            <h3 className="font-display text-2xl font-extrabold text-ink">
              Hands-On Texas Service
            </h3>
            <p className="mt-3 text-sm text-ink/70 leading-relaxed">
              We answer our phones. You get direct access to our team via phone, WhatsApp, or Slack. No overseas ticketing mazes, no waiting a week for a simple menu or photo update.
            </p>
            <div className="mt-6 pt-4 border-t border-ink/5 flex items-center gap-2 text-xs font-bold text-lime-800">
              <CheckCircle2 className="w-4 h-4 text-lime-700 shrink-0" />
              <span>Direct cell phone &amp; Slack channels</span>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="rounded-3xl border border-ink/10 bg-white p-8 sm:p-9 shadow-sm hover:shadow-md transition-shadow">
            <div className="h-12 w-12 rounded-2xl bg-ink text-lime flex items-center justify-center mb-6">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-display text-2xl font-extrabold text-ink">
              Backed by Sands Planning Group
            </h3>
            <p className="mt-3 text-sm text-ink/70 leading-relaxed">
              We operate under the Sands Planning Group corporate umbrella. We don&apos;t just build pretty pages; we align your digital presence with real corporate growth, customer retention, and tax efficiency.
            </p>
            <div className="mt-6 pt-4 border-t border-ink/5 flex items-center gap-2 text-xs font-bold text-lime-800">
              <CheckCircle2 className="w-4 h-4 text-lime-700 shrink-0" />
              <span>Corporate advisory &amp; financial alignment</span>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="rounded-3xl border border-ink/10 bg-white p-8 sm:p-9 shadow-sm hover:shadow-md transition-shadow">
            <div className="h-12 w-12 rounded-2xl bg-ink text-lime flex items-center justify-center mb-6">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="font-display text-2xl font-extrabold text-ink">
              Educational Focus (No Tech Jargon)
            </h3>
            <p className="mt-3 text-sm text-ink/70 leading-relaxed">
              It&apos;s your business. We may execute your digital marketing and website playbook, but we ensure you understand the &ldquo;why&rdquo; behind every move in plain, straightforward English.
            </p>
            <div className="mt-6 pt-4 border-t border-ink/5 flex items-center gap-2 text-xs font-bold text-lime-800">
              <CheckCircle2 className="w-4 h-4 text-lime-700 shrink-0" />
              <span>Bi-weekly plain-English walkthroughs</span>
            </div>
          </div>

        </div>

        {/* 4 Bold Stats Counter Bar */}
        <div className="mt-16 rounded-3xl bg-ink text-white p-8 sm:p-12 shadow-xl border border-white/10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
            {trustStats.map((stat, idx) => (
              <div key={idx} className={`pt-6 lg:pt-0 ${idx > 0 ? 'lg:pl-8' : ''}`}>
                <div className="font-display text-4xl sm:text-5xl font-black text-lime">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm sm:text-base font-bold text-white">
                  {stat.label}
                </div>
                <div className="mt-1 text-xs text-white/50">
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

