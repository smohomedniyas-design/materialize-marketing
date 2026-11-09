import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { SERVICES, PROJECTS } from '@/data/siteData';
import { SvgProjectMockup } from '@/components/SvgProjectMockup';
import { ArrowLeft, ArrowRight, CheckCircle2, Palette, Layers, Eye, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'UI/UX Design Mockups & Design Systems',
  description:
    'Pixel-obsessed mockups, clickable Figma prototypes, and complete design systems prototyped before a single line of code is written.',
};

export default function UiUxServicePage() {
  const service = SERVICES.find((s) => s.slug === 'ui-ux')!;
  const designProjects = (PROJECTS.filter((p) => p.cat === 'UI/UX').length > 0
    ? PROJECTS.filter((p) => p.cat === 'UI/UX')
    : PROJECTS).slice(0, 2);

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
              Discipline 05
            </span>
            <h1 className="font-display text-4xl font-black tracking-tight sm:text-5xl md:text-6xl mt-2">
              UI/UX <span className="text-lime">Design Mockups</span>
            </h1>
            <p className="mt-5 text-lg text-white/75 leading-relaxed">
              World-class visual craft and tested usability that commands immediate industry authority.
              Clickable Figma prototypes with fluid micro-interactions and scalable design token systems.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact?type=UI/UX+Design" className="btn-primary">
                Commission Design System
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
              <Link href="/pricing" className="btn-ghost">
                View Pricing
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
                  Test and Refine Before Writing a Line of Code.
                </h2>
                <p className="mt-4 text-base text-ink/70 leading-relaxed">
                  Coding without thorough interactive design leads to costly rewrites, misaligned expectations,
                  and sluggish delivery. We map user journeys, test information hierarchy, and produce high-fidelity
                  Figma prototypes so you can click through your full product flow on desktop and mobile before engineering commences.
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="p-6 rounded-2xl border border-ink/10 bg-white">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-lime text-ink mb-4">
                    <Layers className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-extrabold text-lg">Scalable Design Tokens</h3>
                  <p className="text-xs text-ink/65 mt-2">
                    Harmonious typography scales, color palettes, spacing systems, and elevation tokens built for enterprise longevity.
                  </p>
                </div>
                <div className="p-6 rounded-2xl border border-ink/10 bg-white">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-lime text-ink mb-4">
                    <Eye className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-extrabold text-lg">Clickable Prototypes</h3>
                  <p className="text-xs text-ink/65 mt-2">
                    Realistic interactive prototypes perfect for customer interviews, investor presentations, and user testing.
                  </p>
                </div>
                <div className="p-6 rounded-2xl border border-ink/10 bg-white">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-lime text-ink mb-4">
                    <Palette className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-extrabold text-lg">Accessible &amp; Compliant</h3>
                  <p className="text-xs text-ink/65 mt-2">
                    Strict adherence to WCAG AA contrast standards, keyboard navigation cues, and responsive touch targets.
                  </p>
                </div>
                <div className="p-6 rounded-2xl border border-ink/10 bg-white">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-lime text-ink mb-4">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-extrabold text-lg">Developer-Ready Handoff</h3>
                  <p className="text-xs text-ink/65 mt-2">
                    Annotated layout specs, responsive padding guidelines, and clean SVG asset exports ready for implementation.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="sticky top-28 rounded-2xl border border-ink/10 bg-white p-7 shadow-lg">
                <h3 className="font-display font-extrabold text-xl">Design Scope &amp; Pricing</h3>
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
                    href="/contact?type=UI/UX+Design"
                    className="btn-ink w-full !text-sm text-center"
                  >
                    Commission UI/UX
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured UI/UX Case Studies */}
      <section className="bg-coal text-white py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <p className="eyebrow text-white/50">Recent Design Work</p>
              <h2 className="font-display text-3xl font-extrabold mt-2">
                Brand &amp; Product Design Showcases
              </h2>
            </div>
            <Link href="/work" className="text-sm font-bold text-lime hover:underline">
              View All Work &rarr;
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {designProjects.map((p) => (
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
