'use client';

import React from 'react';
import Link from 'next/link';
import { TEAM_MEMBERS } from '@/data/siteData';
import { ShieldCheck, Mail, Phone, ArrowRight, Heart } from 'lucide-react';

export const TeamClean: React.FC = () => {
  return (
    <section className="bg-sand/30 py-20 md:py-28 text-ink border-b border-ink/10">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="eyebrow justify-center text-ink/50">Our Team</p>
          <h2 className="section-h2 mt-3">
            The Real Humans Behind Your Business Growth.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-ink/70 leading-relaxed">
            No endless corporate bureaucracy or nameless offshore ticketing queues. You work directly with dedicated designers, operators, and growth partners committed to your success.
          </p>
        </div>

        {/* Team Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM_MEMBERS.map((member, idx) => (
            <div
              key={idx}
              className="group rounded-3xl border border-ink/10 bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Avatar with subtle zoom */}
                <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-sand/60 mb-5">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute bottom-2.5 left-2.5 rounded-full bg-ink/80 backdrop-blur-md px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-lime border border-white/10">
                    {member.specialty}
                  </div>
                </div>

                <h3 className="font-display text-xl font-extrabold text-ink">
                  {member.name}
                </h3>
                <p className="mt-1 text-xs font-bold text-lime-800">
                  {member.role}
                </p>
                <p className="mt-3 text-xs text-ink/70 leading-relaxed line-clamp-3">
                  {member.bio}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-ink/5 flex items-center justify-between text-xs text-ink/50">
                <span className="flex items-center gap-1 font-semibold text-ink/70">
                  <ShieldCheck className="w-3.5 h-3.5 text-lime-700" /> Dedicated Care
                </span>
                <span className="text-[11px] font-mono font-medium">Texas / Remote</span>
              </div>
            </div>
          ))}
        </div>

        {/* Fun Team Spirit Banner */}
        <div className="mt-12 rounded-3xl bg-white border border-ink/10 p-6 sm:p-8 text-center max-w-3xl mx-auto shadow-sm">
          <p className="text-xs sm:text-sm text-ink/80 flex items-center justify-center gap-2 font-medium">
            <Heart className="w-4 h-4 text-rose-500 shrink-0 fill-rose-500" />
            <span>Passionate about clean code, honest pricing, and seeing local American businesses thrive.</span>
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-4 text-xs font-bold">
            <Link href="/about" className="text-ink hover:text-lime-800 underline">
              Read Our Origin Story &rarr;
            </Link>
            <span className="text-ink/30">•</span>
            <Link href="/careers" className="text-ink hover:text-lime-800 underline">
              We&apos;re Hiring! View Open Roles &rarr;
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

