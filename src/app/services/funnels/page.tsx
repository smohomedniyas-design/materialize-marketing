import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { SERVICES, PROJECTS } from '@/data/siteData';
import { SvgProjectMockup } from '@/components/SvgProjectMockup';
import { ArrowLeft, ArrowRight, CheckCircle2, Target, Gauge, Split, BarChart3 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Landing Pages & Sales Funnels - Conversion Engineering',
  description:
    'Single-goal landing pages and multi-stage qualification funnels built around speed, psychological clarity, and measurable revenue.',
};

export default function FunnelsServicePage() {
  const service = SERVICES.find((s) => s.slug === 'funnels')!;
  const funnelProjects = PROJECTS.filter((p) => p.cat === 'Landing Pages');

  return (
    <div className="pt-28 md:pt-36">
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
              Discipline 03
            </span>
            <h1 className="font-display text-4xl font-black tracking-tight sm:text-5xl md:text-6xl mt-2">
              Landing Pages &amp; <span className="text-lime">Funnels</span>
            </h1>
            <p className="mt-5 text-lg text-white/75 leading-relaxed">
              Single-action sales experiences engineered to halve your Customer Acquisition Cost (CAC).
              Sub-second load times, data-backed persuasive copywriting, and multi-step qualification forms.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact?type=Landing+Page+/+Funnel" className="btn-primary">
                Build a High-Converting Funnel
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
              <Link href="/pricing" className="btn-ghost">
                View Starter Package
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper py-20 text-ink">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8 space-y-10">
              <div>
                <h2 className="section-h2 text-3xl md:text-4xl">
                  Every Second and Every Pixel Counts.
                </h2>
                <p className="mt-4 text-base text-ink/70 leading-relaxed">
                  Paid advertising on Meta, Google, or LinkedIn is too expensive for mediocre landing pages.
                  If your page takes 3 seconds to load, 50% of ad clicks bounce before your headline renders.
                  We build ultra-lean landing pages that load in under 400 milliseconds and present an offer
                  that is impossible to misunderstand.
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="p-6 rounded-2xl border border-ink/10 bg-white">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-lime text-ink mb-4">
                    <Gauge className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-extrabold text-lg">Zero Paid Ad Bounce</h3>
                  <p className="text-xs text-ink/65 mt-2">
                    Minimal JavaScript bundles and pre-rendered static HTML ensure immediate visual presentation.
                  </p>
                </div>
                <div className="p-6 rounded-2xl border border-ink/10 bg-white">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-lime text-ink mb-4">
                    <Target className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-extrabold text-lg">Dynamic Lead Qualification</h3>
                  <p className="text-xs text-ink/65 mt-2">
                    Multi-step interactive assessments that filter out tire-kickers and route high-value leads directly to sales.
                  </p>
                </div>
                <div className="p-6 rounded-2xl border border-ink/10 bg-white">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-lime text-ink mb-4">
                    <Split className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-extrabold text-lg">Edge A/B Experimentation</h3>
                  <p className="text-xs text-ink/65 mt-2">
                    Test headlines, video hooks, and CTA buttons with zero page flicker using edge middleware split testing.
                  </p>
                </div>
                <div className="p-6 rounded-2xl border border-ink/10 bg-white">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-lime text-ink mb-4">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-extrabold text-lg">Full-Funnel Telemetry</h3>
                  <p className="text-xs text-ink/65 mt-2">
                    Conversions tracked at every milestone: scroll depth, form field abandonment, and calendar bookings.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-display font-bold text-xl mb-4">Growth Stack</h3>
                <div className="flex flex-wrap gap-2.5">
                  {service.technologies.map((t) => (
                    <span
                      key={t}
                      className="rounded-lg bg-sand px-3 py-1.5 text-xs font-bold text-ink border border-ink/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="sticky top-28 rounded-2xl border border-ink/10 bg-white p-7 shadow-lg">
                <h3 className="font-display font-extrabold text-xl">Funnel Scope &amp; Pricing</h3>
                <p className="text-xs text-ink/50 mt-1">Starting at {service.startingPrice}</p>

                <div className="mt-6 space-y-3">
                  {service.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-ink/80">
                      <CheckCircle2 className="w-4 h-4 text-lime-700 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-ink/10">
                  <Link
                    href="/contact?type=Landing+Page+/+Funnel"
                    className="btn-ink w-full !text-sm text-center"
                  >
                    Start Funnel Project
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Funnel Case Studies */}
      <section className="bg-coal text-white py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <p className="eyebrow text-white/50">Proven Funnels</p>
              <h2 className="font-display text-3xl font-extrabold mt-2">
                High-Converting Pages in the Wild
              </h2>
            </div>
            <Link href="/work" className="text-sm font-bold text-lime hover:underline">
              View All Work &rarr;
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {funnelProjects.map((p) => (
              <div key={p.slug} className="rounded-xl border border-white/10 bg-coal overflow-hidden p-4">
                <div className="relative aspect-[16/10] overflow-hidden rounded-lg">
                  <SvgProjectMockup project={p} />
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <h3 className="font-display text-lg font-bold">{p.name}</h3>
                  <Link href={`/work/${p.slug}`} className="text-xs font-bold text-lime hover:underline">
                    Case Study &rarr;
                  </Link>
                </div>
                <p className="text-xs text-white/60 mt-1">{p.tagline}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
