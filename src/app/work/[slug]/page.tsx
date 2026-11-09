import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { PROJECTS } from '@/data/siteData';
import { SvgProjectMockup } from '@/components/SvgProjectMockup';
import { ArrowLeft, ArrowRight, CheckCircle2, TrendingUp, Sparkles, ExternalLink } from 'lucide-react';
import { CtaBanner } from '@/components/CtaBanner';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return { title: 'Project Not Found' };

  return {
    title: `${project.name} Case Study - Materialize Marketing`,
    description: `${project.tagline} Delivered in ${project.yr} with ${project.stack.join(', ')}.`,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const projectIndex = PROJECTS.findIndex((p) => p.slug === slug);
  if (projectIndex === -1) {
    notFound();
  }

  const project = PROJECTS[projectIndex];
  const nextProject = PROJECTS[(projectIndex + 1) % PROJECTS.length];

  return (
    <div className="pt-28 md:pt-36">
      {/* Case Study Header */}
      <section className="bg-ink text-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-lime hover:underline mb-8"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to All Projects
          </Link>

          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="rounded-full bg-lime px-3 py-1 text-xs font-black uppercase tracking-wider text-ink">
                  {project.cat}
                </span>
                <span className="text-xs font-bold uppercase tracking-widest text-white/50">
                  {project.client} · {project.yr}
                </span>
              </div>
              <h1 className="font-display text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
                {project.name}
              </h1>
              <p className="mt-5 max-w-2xl text-lg text-white/75 leading-relaxed">
                {project.tagline}
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col lg:items-end gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-fit inline-flex items-center gap-2 !bg-lime !text-ink hover:opacity-90 shadow-lg"
                >
                  <span>Visit Live Site</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
              <Link
                href="/contact"
                className="btn-ghost w-fit inline-flex items-center gap-1.5 text-xs"
              >
                Discuss Similar Project
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Visual Mockup Banner */}
      <section className="bg-coal py-12 md:py-16 border-y border-white/10">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/15 bg-[#15151A] shadow-2xl transition-all duration-300 hover:border-lime/60 hover:shadow-lime/10"
              title={`Open ${project.name} live site: ${project.liveUrl}`}
            >
              <div className="h-full w-full transition-transform duration-700 group-hover:scale-[1.01]">
                <SvgProjectMockup project={project} />
              </div>
              <div className="absolute inset-0 bg-ink/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                <span className="inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3 text-sm font-black text-ink shadow-2xl scale-95 group-hover:scale-100 transition-transform">
                  <span>Visit Live Website</span>
                  <ExternalLink className="w-4 h-4" />
                </span>
              </div>
            </a>
          ) : (
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/15 bg-[#15151A] shadow-2xl">
              <SvgProjectMockup project={project} />
            </div>
          )}
        </div>
      </section>

      {/* Metrics Impact Bar */}
      <section className="bg-sand py-10 border-b border-ink/10 text-ink">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-ink/50 mb-6">
            Key Performance Metrics &amp; Impact
          </p>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="border-l-2 border-ink pl-4">
                <p className="font-display text-3xl font-black md:text-4xl text-ink">
                  {m.value}
                </p>
                <p className="text-xs font-bold uppercase tracking-wider text-ink/60 mt-1">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep-Dive Narrative */}
      <section className="bg-paper py-20 text-ink">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Main Story Column */}
            <div className="space-y-12 lg:col-span-8">
              <div>
                <span className="eyebrow text-ink/50">The Background</span>
                <h2 className="section-h2 text-3xl mt-3">Overview &amp; Context</h2>
                <p className="mt-4 text-base text-ink/75 leading-relaxed md:text-lg">
                  {project.description}
                </p>
              </div>

              {/* Challenge & Solution */}
              <div className="grid gap-8 sm:grid-cols-2">
                <div className="p-7 rounded-2xl bg-white border border-ink/10 shadow-sm">
                  <h3 className="font-display font-extrabold text-xl text-ink mb-3">
                    The Challenge
                  </h3>
                  <p className="text-sm text-ink/70 leading-relaxed">
                    {project.challenge}
                  </p>
                </div>
                <div className="p-7 rounded-2xl bg-white border border-ink/10 shadow-sm">
                  <h3 className="font-display font-extrabold text-xl text-ink mb-3">
                    The Architecture Solution
                  </h3>
                  <p className="text-sm text-ink/70 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Key Features & Architecture Highlights */}
              {project.features && project.features.length > 0 && (
                <div className="p-7 rounded-2xl bg-white border border-ink/10 shadow-sm">
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="w-5 h-5 text-lime-700" />
                    <h3 className="font-display font-extrabold text-xl text-ink">
                      Key Engineered Features &amp; Capabilities
                    </h3>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {project.features.map((feat, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-3.5 rounded-xl bg-sand/60 border border-ink/5"
                      >
                        <span className="grid h-6 w-6 place-items-center rounded-full bg-ink text-white text-xs font-bold shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <div>
                          <p className="text-sm font-bold text-ink">{feat}</p>
                          <p className="text-xs text-ink/60 mt-0.5">
                            Engineered for high performance, fault tolerance, and premium brand perception.
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Deliverables Checklist */}
              <div>
                <h3 className="font-display font-bold text-2xl mb-5">Deliverables Shipped</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  {project.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-ink/10">
                      <CheckCircle2 className="w-4 h-4 text-lime-700 shrink-0 mt-0.5" />
                      <span className="text-sm font-semibold text-ink/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sticky Sidebar Tech Metadata */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 space-y-6 rounded-2xl border border-ink/10 bg-white p-7 shadow-lg">
                <h3 className="font-display font-bold text-lg border-b border-ink/10 pb-3">
                  Project Specifications
                </h3>

                <div className="space-y-4 text-sm">
                  <div>
                    <span className="block text-xs font-extrabold uppercase tracking-wider text-ink/40">Client</span>
                    <span className="font-bold text-ink">{project.client}</span>
                  </div>
                  <div>
                    <span className="block text-xs font-extrabold uppercase tracking-wider text-ink/40">Category</span>
                    <span className="font-bold text-ink">{project.cat}</span>
                  </div>
                  <div>
                    <span className="block text-xs font-extrabold uppercase tracking-wider text-ink/40">Year Launched</span>
                    <span className="font-bold text-ink">{project.yr}</span>
                  </div>
                  <div>
                    <span className="block text-xs font-extrabold uppercase tracking-wider text-ink/40 mb-2">Technologies Used</span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.map((t) => (
                        <span key={t} className="rounded bg-sand px-2.5 py-1 text-xs font-bold text-ink">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {project.features && project.features.length > 0 && (
                    <div>
                      <span className="block text-xs font-extrabold uppercase tracking-wider text-ink/40 mb-2">
                        Key Features
                      </span>
                      <ul className="space-y-1.5">
                        {project.features.map((f, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs font-semibold text-ink/80">
                            <span className="h-1.5 w-1.5 rounded-full bg-lime-700 shrink-0 mt-1.5" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {project.liveUrl && (
                    <div className="pt-2 border-t border-ink/10">
                      <span className="block text-xs font-extrabold uppercase tracking-wider text-ink/40 mb-1.5">
                        Live Website
                      </span>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-lime-700 hover:text-ink hover:underline transition-colors"
                      >
                        <span className="truncate max-w-[220px]">
                          {project.liveUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                        </span>
                        <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                      </a>
                    </div>
                  )}
                </div>

                <div className="pt-6 border-t border-ink/10">
                  <Link
                    href={`/contact?type=${encodeURIComponent(project.cat)}`}
                    className="btn-ink w-full !text-xs text-center"
                  >
                    Start Similar Project
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Project Navigator */}
      <section className="bg-coal text-white py-16 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-white/40">Next Case Study</span>
            <h3 className="font-display text-2xl font-bold mt-1 text-white">{nextProject.name}</h3>
            <p className="text-xs text-white/60">{nextProject.tagline}</p>
          </div>
          <Link
            href={`/work/${nextProject.slug}`}
            className="btn-ghost inline-flex items-center gap-2"
          >
            Read {nextProject.name} &rarr;
          </Link>
        </div>
      </section>

      {/* CTA */}
      <CtaBanner />
    </div>
  );
}
