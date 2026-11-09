'use client';

import React from 'react';
import Link from 'next/link';
import { CLIENT_LOGOS } from '@/data/siteData';

export const ClientMarquee: React.FC = () => {
  const loopItems = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section className="border-b border-white/10 bg-coal py-7 md:py-8 overflow-hidden" aria-label="Our client platforms">
      <p className="text-center text-[11px] font-extrabold uppercase tracking-[0.25em] text-white/50">
        Live Websites &amp; Platforms We Launched
      </p>
      <div className="marquee mt-5">
        <div className="marquee-track flex w-max">
          {/* First run */}
          <div className="flex shrink-0 items-center">
            {loopItems.map((client, i) => (
              <span key={`c1-${i}`} className="marquee-item px-8">
                <Link
                  href={`/work/${client.slug}`}
                  className="group inline-flex items-center gap-3"
                >
                  <span className="font-display text-lg font-black uppercase tracking-wider text-white/40 transition-colors group-hover:text-lime md:text-xl cursor-pointer">
                    {client.name}
                  </span>
                  <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white/60 group-hover:bg-lime group-hover:text-ink transition-colors">
                    {client.category}
                  </span>
                </Link>
              </span>
            ))}
          </div>
          {/* Cloned run for seamless infinite loop */}
          <div className="flex shrink-0 items-center" aria-hidden="true">
            {loopItems.map((client, i) => (
              <span key={`c2-${i}`} className="marquee-item px-8">
                <Link
                  href={`/work/${client.slug}`}
                  tabIndex={-1}
                  className="group inline-flex items-center gap-3"
                >
                  <span className="font-display text-lg font-black uppercase tracking-wider text-white/40 transition-colors group-hover:text-lime md:text-xl cursor-pointer">
                    {client.name}
                  </span>
                  <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white/60 group-hover:bg-lime group-hover:text-ink transition-colors">
                    {client.category}
                  </span>
                </Link>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};