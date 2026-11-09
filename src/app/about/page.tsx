import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { TEAM_MEMBERS, TRUST_STATS } from '@/data/siteData';
import { ShieldCheck, Target, HeartHandshake, Zap, ArrowRight } from 'lucide-react';
import { CtaBanner } from '@/components/CtaBanner';

export const metadata: Metadata = {
  title: 'About Us - Dedicated Web Development, Design & Growth Team',
  description:
    'Materialize Marketing is a dedicated digital growth team building high-performance web infrastructure and marketing solutions for growing businesses.',
};

export default function AboutPage() {
  return (
    <div className="pt-28 md:pt-36">
      {/* Header */}
      <section className="bg-ink text-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-3xl">
            <p className="eyebrow text-lime">About Materialize Marketing</p>
            <h1 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl mt-4">
              We Build Infrastructure. <br />
              <span className="text-lime">Launch Results, Not Opinions.</span>
            </h1>
            <p className="mt-5 text-lg text-white/70 leading-relaxed">
              We are a dedicated team of engineers, growth strategists, and UI/UX designers building robust web platforms, modern branding, and executing digital marketing strategies that turn ideas into measurable revenue.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-coal text-white py-12 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {TRUST_STATS.map((stat, i) => (
              <div key={i} className="border-l border-white/15 pl-4">
                <p className="font-display text-4xl font-black text-white md:text-5xl">
                  {stat.value}<span className="text-lime">{stat.suffix}</span>
                </p>
                <p className="text-xs font-bold uppercase tracking-widest text-white/50 mt-1">
                  {stat.label}
                </p>
                <p className="text-xs text-white/40 mt-0.5">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Origin Story & Values */}
      <section className="bg-paper py-20 text-ink">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="eyebrow text-ink/50">Our Story</span>
              <h2 className="section-h2 text-3xl md:text-4xl">
                Built to Turn Your Vision Into Real Revenue.
              </h2>
              <p className="text-base text-ink/75 leading-relaxed">
                Materialize Marketing was founded on a simple premise: small business owners and ambitious founders deserve enterprise-grade digital craft without the high retainers, rigid contracts, or tech headaches.
              </p>
              <p className="text-base text-ink/75 leading-relaxed">
                Based out of Prosper, Texas, and partnering with Sands Planning Group, we provide an all-in-one growth partner: custom-engineered web design, mobile-first e-commerce, high-converting brand identity, and proactive managed hosting. When you work with us, you work directly with hands-on builders who treat your business like their own.
              </p>
            </div>

            <div className="lg:col-span-6 grid gap-4 sm:grid-cols-2">
              <div className="p-6 rounded-2xl bg-white border border-ink/10 shadow-sm">
                <Zap className="w-6 h-6 text-ink mb-3" />
                <h3 className="font-display font-bold text-base">Speed Over Novelty</h3>
                <p className="text-xs text-ink/65 mt-2">
                  We don&apos;t use trendy libraries that will be obsolete in six months. We build with battle-tested standards that run fast.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-ink/10 shadow-sm">
                <ShieldCheck className="w-6 h-6 text-ink mb-3" />
                <h3 className="font-display font-bold text-base">Fixed Price Transparency</h3>
                <p className="text-xs text-ink/65 mt-2">
                  No runaway hourly billables. Fixed scopes with guaranteed milestones and clear delivery dates.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-ink/10 shadow-sm">
                <Target className="w-6 h-6 text-ink mb-3" />
                <h3 className="font-display font-bold text-base">Full IP Ownership</h3>
                <p className="text-xs text-ink/65 mt-2">
                  You own 100% of your code, designs, and database upon final milestone payment. Zero lock-in.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-ink/10 shadow-sm">
                <HeartHandshake className="w-6 h-6 text-ink mb-3" />
                <h3 className="font-display font-bold text-base">We Stay After Launch</h3>
                <p className="text-xs text-ink/65 mt-2">
                  Our team provides hypercare and managed retainers so your site continues to thrive as your company scales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Senior Team Showcase */}
      <section className="bg-sand/40 py-20 text-ink border-t border-ink/10">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-2xl mb-14">
            <span className="eyebrow text-ink/50">The Crew</span>
            <h2 className="section-h2 text-3xl md:text-4xl mt-3">
              Meet Our Senior Leadership
            </h2>
            <p className="mt-3 text-sm text-ink/65">
              Every project is led by a principal architect with 10+ years of verifiable production experience.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM_MEMBERS.map((member, idx) => (
              <div
                key={idx}
                className="group rounded-2xl border border-ink/10 bg-white p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-sand mb-5">
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute bottom-3 left-3 rounded-full bg-ink/80 backdrop-blur-sm px-3 py-1 text-[10px] font-bold text-lime">
                    {member.specialty}
                  </div>
                </div>

                <h3 className="font-display font-extrabold text-xl text-ink">
                  {member.name}
                </h3>
                <p className="text-xs font-bold uppercase tracking-wider text-ink/50 mt-1">
                  {member.role}
                </p>
                <p className="text-xs text-ink/70 mt-3 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Headquarters */}
      <section className="bg-ink text-white py-16 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-lime">San Francisco HQ</span>
            <h3 className="font-display text-2xl font-bold mt-1">548 Market St, Suite 300, San Francisco, CA</h3>
            <p className="text-sm text-white/60 mt-1">Available for in-person kickoffs in the Bay Area and nationwide remote sprints.</p>
          </div>
          <Link href="/contact" className="btn-primary shrink-0">
            Work With Our Team <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <CtaBanner />
    </div>
  );
}
