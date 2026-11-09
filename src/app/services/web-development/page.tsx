import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { SERVICES, PROJECTS } from '@/data/siteData';
import { SvgProjectMockup } from '@/components/SvgProjectMockup';
import { ArrowLeft, ArrowRight, CheckCircle2, Code2, Cpu, Globe, Rocket } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Web Development Services - Next.js & React Engineering',
  description:
    'Custom hand-rolled Next.js and React builds that load in a blink, score 95+ Core Web Vitals, and turn visitors into paying customers.',
};

export default function WebDevServicePage() {
  const service = SERVICES.find((s) => s.slug === 'web-development')!;
  const relatedProjects = PROJECTS.filter((p) => p.cat === 'Custom Dev' || p.cat === 'E-commerce').slice(0, 2);

  return (
    <div className="pt-28 md:pt-36">
      {/* Breadcrumb & Hero */}
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
              Discipline 01
            </span>
            <h1 className="font-display text-4xl font-black tracking-tight sm:text-5xl md:text-6xl mt-2">
              Custom <span className="text-lime">Web Development</span>
            </h1>
            <p className="mt-5 text-lg text-white/75 leading-relaxed">
              We engineer custom web applications using modern Next.js App Router, React 19, and TypeScript.
              Zero bloated page builders, zero fragile WordPress plugins - just lightning speed and rock-solid code.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact?type=Web+Development" className="btn-primary">
                Start Web Dev Project
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
              <Link href="/pricing" className="btn-ghost">
                View Pricing Packages
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Details & Architecture */}
      <section className="bg-paper py-20 text-ink">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8 space-y-10">
              <div>
                <h2 className="section-h2 text-3xl md:text-4xl">
                  Engineering That Doesn&apos;t Cut Corners.
                </h2>
                <p className="mt-4 text-base text-ink/70 leading-relaxed">
                  Most agency websites look okay on surface level but struggle under real traffic. We treat
                  every website as a mission-critical web application. We configure edge CDN caching, image
                  optimization pipelines, serverless functions, and structured data schema so search engines
                  and customers both love your site.
                </p>
              </div>

              {/* Pillars */}
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="p-6 rounded-2xl border border-ink/10 bg-white">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-lime text-ink mb-4">
                    <Rocket className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-extrabold text-lg">95+ Core Web Vitals</h3>
                  <p className="text-xs text-ink/65 mt-2">
                    Sub-second Largest Contentful Paint (LCP) and zero Cumulative Layout Shift (CLS) for maximal Google rankings.
                  </p>
                </div>
                <div className="p-6 rounded-2xl border border-ink/10 bg-white">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-lime text-ink mb-4">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-extrabold text-lg">Next.js &amp; TypeScript</h3>
                  <p className="text-xs text-ink/65 mt-2">
                    Modern component architecture with strict typing, easy maintenance, and seamless team onboarding.
                  </p>
                </div>
                <div className="p-6 rounded-2xl border border-ink/10 bg-white">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-lime text-ink mb-4">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-extrabold text-lg">Headless CMS Freedom</h3>
                  <p className="text-xs text-ink/65 mt-2">
                    Connect to Sanity, Contentful, or Strapi. Your marketing team edits content easily without touching code.
                  </p>
                </div>
                <div className="p-6 rounded-2xl border border-ink/10 bg-white">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-lime text-ink mb-4">
                    <Globe className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-extrabold text-lg">Global Edge Deployment</h3>
                  <p className="text-xs text-ink/65 mt-2">
                    Deployed across 300+ worldwide edge locations via Vercel or Cloudflare for instantaneous response globally.
                  </p>
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="font-display font-bold text-xl mb-4">Core Technology Stack</h3>
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

            {/* Sidebar Scope Card */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 rounded-2xl border border-ink/10 bg-white p-7 shadow-lg">
                <h3 className="font-display font-extrabold text-xl">Web Dev Package Scope</h3>
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
                    href="/contact?type=Web+Development"
                    className="btn-ink w-full !text-sm text-center"
                  >
                    Request Project Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      <section className="bg-coal text-white py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <p className="eyebrow text-white/50">Proven Results</p>
              <h2 className="font-display text-3xl font-extrabold mt-2">
                Recent Development Work
              </h2>
            </div>
            <Link href="/work" className="text-sm font-bold text-lime hover:underline">
              View All Work &rarr;
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {relatedProjects.map((p) => (
              <div key={p.slug} className="rounded-xl border border-white/10 bg-coal overflow-hidden p-4">
                <div className="relative aspect-[16/10] overflow-hidden rounded-lg">
                  <SvgProjectMockup project={p} />
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <h3 className="font-display text-lg font-bold">{p.name}</h3>
                  <Link href={`/work/${p.slug}`} className="text-xs font-bold text-lime hover:underline">
                    View Case Study &rarr;
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
