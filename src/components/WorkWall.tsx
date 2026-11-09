'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { PROJECTS, Project } from '@/data/siteData';
import { SvgProjectMockup } from './SvgProjectMockup';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

export const WorkWall: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [expanded, setExpanded] = useState<boolean>(false);
  const categories = ['All', ...Array.from(new Set(PROJECTS.map((p) => p.cat)))];

  const filteredProjects =
    activeFilter === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.cat === activeFilter);

  const displayedProjects = expanded ? filteredProjects : filteredProjects.slice(0, 6);

  return (
    <section id="work" className="bg-coal py-20 text-white md:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="eyebrow text-white/50">Recently completed projects</p>
            <h2 className="section-h2 mt-4">
              Finished work.<br className="hidden sm:block" /> Measured results.
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div
            className="flex flex-wrap gap-2.5"
            role="group"
            aria-label="Filter projects by category"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveFilter(cat);
                  setExpanded(false);
                }}
                className={`pill ${activeFilter === cat ? 'is-active' : ''}`}
              >
                {cat === 'All' ? 'All Work' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {displayedProjects.map((p: Project) => {
            return (
              <article
                key={p.slug}
                className="group flex flex-col justify-between rounded-2xl bg-coal border border-white/10 p-4 transition-all duration-300 hover:border-lime/50 hover:shadow-xl"
              >
                <div>
                  {/* Clickable Mockup Banner -> Directly opens live site */}
                  <a
                    href={p.liveUrl || `/work/${p.slug}`}
                    target={p.liveUrl ? '_blank' : undefined}
                    rel={p.liveUrl ? 'noopener noreferrer' : undefined}
                    className="group/img block relative aspect-[16/10] overflow-hidden rounded-xl border border-white/10 bg-[#10201d] shadow-md transition-all duration-300 group-hover/img:border-lime/60"
                    title={`Open ${p.name} live site: ${p.liveUrl || ''}`}
                  >
                    <div className="h-full w-full transition-transform duration-500 group-hover/img:scale-[1.02]">
                      <SvgProjectMockup project={p} />
                    </div>

                    {/* Top badges */}
                    <div className="absolute top-2.5 left-2.5 z-10 pointer-events-none">
                      <span className="rounded-full bg-ink/85 backdrop-blur-md border border-white/20 px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-white">
                        {p.cat}
                      </span>
                    </div>

                    {/* Hover Overlay Button: only appears when moving cursor to this section */}
                    {p.liveUrl && (
                      <div className="absolute inset-0 bg-ink/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="inline-flex items-center gap-2 rounded-full bg-lime px-4 py-2 text-xs font-black text-ink shadow-2xl scale-95 group-hover:scale-100 transition-transform duration-300">
                          <span>Visit Live Site</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    )}
                  </a>

                  {/* Title and tagline */}
                  <div className="mt-4">
                    <div className="flex items-baseline justify-between">
                      <Link href={`/work/${p.slug}`} className="hover:text-lime transition-colors">
                        <h3 className="text-lg font-bold text-white group-hover:text-lime transition-colors">
                          {p.name}
                        </h3>
                      </Link>
                      <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40">
                        {p.yr}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-white/70 line-clamp-2">
                      {p.tagline}
                    </p>

                    {/* Features list */}
                    {p.features && p.features.length > 0 && (
                      <div className="mt-2.5 flex flex-wrap gap-1">
                        {p.features.slice(0, 2).map((feat, i) => (
                          <span
                            key={i}
                            className="rounded bg-white/5 border border-white/10 px-2 py-0.5 text-[10px] font-medium text-white/80"
                          >
                            {feat}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="mt-4 pt-3.5 border-t border-white/10 flex items-center justify-between gap-2">
                  <Link
                    href={`/work/${p.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-white/70 hover:text-lime transition-colors group/link"
                  >
                    <span>Read Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </Link>

                  {p.liveUrl && (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-lime hover:underline"
                    >
                      <span>Live Site</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {/* View All / Toggle Button */}
        {filteredProjects.length > 6 && (
          <div className="mt-14 flex justify-center">
            <button
              onClick={() => setExpanded(!expanded)}
              className="btn-ghost"
            >
              {expanded
                ? 'Show Fewer Projects'
                : `View All Work (${filteredProjects.length})`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
