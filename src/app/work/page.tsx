'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { PROJECTS, Project } from '@/data/siteData';
import { SvgProjectMockup } from '@/components/SvgProjectMockup';
import { Search, ArrowUpRight, Sparkles, ExternalLink } from 'lucide-react';
import { CtaBanner } from '@/components/CtaBanner';

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', ...Array.from(new Set(PROJECTS.map((p) => p.cat)))];

  const filteredProjects = PROJECTS.filter((p) => {
    const matchesCat = activeCategory === 'All' || p.cat === activeCategory;
    const query = searchQuery.toLowerCase().trim();
    const matchesQuery =
      query === '' ||
      p.name.toLowerCase().includes(query) ||
      p.tagline.toLowerCase().includes(query) ||
      p.client.toLowerCase().includes(query) ||
      p.stack.some((tech) => tech.toLowerCase().includes(query)) ||
      (p.features && p.features.some((feat) => feat.toLowerCase().includes(query)));

    return matchesCat && matchesQuery;
  });

  return (
    <div className="pt-28 md:pt-36">
      {/* Hero Header */}
      <section className="bg-ink text-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-3xl">
            <p className="eyebrow text-lime">Portfolio &amp; Case Studies</p>
            <h1 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl mt-4">
              Finished Work. <span className="text-lime">Measured Results.</span>
            </h1>
            <p className="mt-5 text-lg text-white/70 leading-relaxed">
              Explore our verified production builds spanning high-volume e-commerce, high-conversion landing
              funnels, and bespoke custom web applications.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 sm:items-center justify-between border-t border-white/10 pt-8">
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`pill ${activeCategory === cat ? 'is-active' : ''}`}
                >
                  {cat === 'All' ? 'All Work' : cat}
                </button>
              ))}
            </div>

            {/* Keyword Search */}
            <div className="relative min-w-[260px]">
              <Search className="w-4 h-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search by name, tech, or feature..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-full border border-white/20 bg-white/5 py-2 pl-9 pr-4 text-xs text-white placeholder-white/40 focus:border-lime focus:outline-none transition-colors"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="bg-coal py-20 text-white min-h-[500px]">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-display text-2xl font-bold text-white/60">No projects match your filter.</p>
              <button
                onClick={() => {
                  setActiveCategory('All');
                  setSearchQuery('');
                }}
                className="btn-ghost mt-4 !text-xs"
              >
                Reset Search Filters
              </button>
            </div>
          ) : (
            <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((p: Project) => (
                <article
                  key={p.slug}
                  className="group flex flex-col justify-between rounded-2xl bg-coal border border-white/10 p-5 transition-all duration-300 hover:border-lime/50 hover:shadow-2xl"
                >
                  <div>
                    {/* Mockup Image Banner -> Clickable to Live Website */}
                    <a
                      href={p.liveUrl || `/work/${p.slug}`}
                      target={p.liveUrl ? '_blank' : undefined}
                      rel={p.liveUrl ? 'noopener noreferrer' : undefined}
                      className="group/img block relative aspect-[16/10] overflow-hidden rounded-xl border border-white/10 bg-[#10201d] transition-all duration-300 group-hover/img:border-lime/60 shadow-lg"
                      title={`Visit ${p.name} live site: ${p.liveUrl || ''}`}
                    >
                      <div className="h-full w-full transition-transform duration-500 group-hover/img:scale-[1.02]">
                        <SvgProjectMockup project={p} />
                      </div>

                      {/* Category tag */}
                      <div className="absolute top-3 left-3 z-10 pointer-events-none">
                        <span className="rounded-full bg-ink/85 backdrop-blur-md border border-white/20 px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-white">
                          {p.cat}
                        </span>
                      </div>

                      {/* Center Hover Action: only appears when moving cursor to this section */}
                      {p.liveUrl && (
                        <div className="absolute inset-0 bg-ink/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <span className="inline-flex items-center gap-2 rounded-full bg-lime px-4 py-2 text-xs font-black text-ink shadow-2xl scale-95 group-hover:scale-100 transition-transform duration-300">
                            <span>Visit Live Site</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      )}
                    </a>

                    {/* Project Header */}
                    <div className="mt-4 flex items-baseline justify-between">
                      <Link href={`/work/${p.slug}`} className="hover:text-lime transition-colors">
                        <h3 className="font-display text-xl font-bold text-white group-hover:text-lime transition-colors">
                          {p.name}
                        </h3>
                      </Link>
                      <span className="text-xs font-semibold text-white/40">{p.yr}</span>
                    </div>

                    <p className="mt-1.5 text-xs text-white/70 line-clamp-2">{p.tagline}</p>

                    {/* Features list */}
                    {p.features && p.features.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-1">
                        {p.features.slice(0, 3).map((feat, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center rounded bg-white/5 border border-white/10 px-2 py-0.5 text-[10px] font-medium text-white/80"
                          >
                            {feat}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Card Action & Metrics Bar */}
                  <div className="mt-5 pt-3.5 border-t border-white/10 flex items-center justify-between gap-3">
                    <Link
                      href={`/work/${p.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-white/70 hover:text-lime transition-colors group/link"
                    >
                      <span>Read Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </Link>

                    <span className="text-xs font-extrabold text-lime flex items-center gap-1 shrink-0">
                      <Sparkles className="w-3 h-3" /> {p.metrics[0]?.value}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <CtaBanner />
    </div>
  );
}
