import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { SERVICES } from '@/data/siteData';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Sparkles } from 'lucide-react';
import { CtaBanner } from '@/components/CtaBanner';

export const metadata: Metadata = {
  title: 'Services & Capabilities - Web Engineering & Digital Marketing',
  description:
    'Full-stack digital infrastructure and marketing solutions across 6 core disciplines: Web Development, Digital Marketing & Growth, E-commerce, Landing Pages & Funnels, Managed Hosting, and UI/UX Design Systems.',
};

export default function ServicesPage() {
  return (
    <div className="pt-28 md:pt-36">
      {/* Hero Header */}
      <section className="bg-ink text-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-3xl">
            <p className="eyebrow text-lime">Services &amp; Capabilities</p>
            <h1 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl mt-4">
              Full-Stack Infrastructure &amp; <span className="text-lime">Growth Marketing.</span>
            </h1>
            <p className="mt-5 text-lg text-white/70 leading-relaxed">
              We don&apos;t just code websites and leave you hanging. We engineer high-performance platforms
              and formulate data-backed digital marketing strategies that actively drive traffic, maximize
              conversions, and scale recurring revenue.
            </p>
          </div>
        </div>
      </section>

      {/* Disciplines Deep-Dive Grid */}
      <section className="bg-paper py-20 text-ink">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 space-y-16">
          {SERVICES.map((svc, idx) => (
            <div
              key={svc.slug}
              id={svc.slug}
              className={`rounded-3xl border border-ink/10 bg-white p-8 md:p-12 shadow-sm transition-all hover:shadow-xl ${
                idx % 2 === 1 ? 'bg-sand/30' : ''
              }`}
            >
              <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                {/* Left Description Column */}
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-3">
                    <span className="font-display text-2xl font-black text-ink/40">
                      {svc.num}
                    </span>
                    <span className="rounded-full bg-lime/40 px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-ink">
                      Starting at {svc.startingPrice} · {svc.typicalTimeline}
                    </span>
                  </div>

                  <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight md:text-4xl text-ink">
                    {svc.name}
                  </h2>
                  <p className="mt-2 text-base font-semibold text-ink/75">
                    {svc.heroHighlight}
                  </p>
                  <p className="mt-4 text-base text-ink/65 leading-relaxed">
                    {svc.fullDesc}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {svc.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg bg-paper px-2.5 py-1 text-xs font-bold text-ink/70 border border-ink/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <Link
                      href={`/services/${svc.slug}`}
                      className="btn-ink !py-2.5 !px-5 !text-sm"
                    >
                      View Discipline Details
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                    <Link
                      href={`/contact?type=${encodeURIComponent(svc.name)}`}
                      className="text-sm font-bold text-ink hover:underline inline-flex items-center gap-1"
                    >
                      Inquire About {svc.name} <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                {/* Right Deliverables Column */}
                <div className="rounded-2xl border border-ink/10 bg-sand/60 p-6 md:p-8 lg:col-span-5">
                  <h3 className="text-xs font-extrabold uppercase tracking-[0.2em] text-ink/50 mb-4">
                    What&apos;s Included In Every Build
                  </h3>
                  <ul className="space-y-3.5">
                    {svc.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3 text-sm text-ink/80">
                        <CheckCircle2 className="w-4 h-4 text-lime-700 mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 pt-5 border-t border-ink/10">
                    <p className="text-xs font-bold uppercase tracking-wider text-ink/60 mb-2">
                      Key Deliverables
                    </p>
                    <div className="space-y-1.5 text-xs text-ink/70 font-medium">
                      {svc.deliverables.slice(0, 2).map((deliv, dIdx) => (
                        <p key={dIdx}>• {deliv}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Standards Bar */}
      <section className="bg-coal text-white py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex gap-4 items-start">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-white/10 text-lime shrink-0">
                <Zap className="w-6 h-6" />
              </span>
              <div>
                <h3 className="font-display text-lg font-bold">Sub-500ms Page Loads</h3>
                <p className="text-sm text-white/60 mt-1">
                  Guaranteed 95+ Google Lighthouse scores across desktop and mobile devices.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-white/10 text-lime shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </span>
              <div>
                <h3 className="font-display text-lg font-bold">Bank-Grade Security</h3>
                <p className="text-sm text-white/60 mt-1">
                  Automated dependency scans, SSL certificates, and Cloudflare DDoS shields included.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-white/10 text-lime shrink-0">
                <Sparkles className="w-6 h-6" />
              </span>
              <div>
                <h3 className="font-display text-lg font-bold">100% Code &amp; IP Ownership</h3>
                <p className="text-sm text-white/60 mt-1">
                  Full ownership of all Git repositories, design files, and assets upon launch.
                </p>
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
