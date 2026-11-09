import React from 'react';
import Link from 'next/link';
import { CLIENT_LOGOS } from '@/data/siteData';

export const ClientMarquee: React.FC = () => {
  // Repeat the 6 websites we did to form a wide continuous marquee track
  const loopItems = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section className="border-b border-ink/10 bg-paper py-8 md:py-10 overflow-hidden" aria-label="Our client websites">
      <p className="text-center text-[11px] font-extrabold uppercase tracking-[0.3em] text-ink/40">
        Live Websites &amp; Platforms We Launched
      </p>
      <div className="marquee mt-6">
        <div className="marquee-track flex w-max">
          {/* First run */}
          <div className="flex shrink-0 items-center">
            {loopItems.map((client, i) => (
              <span key={`c1-${i}`} className="marquee-item">
                <Link
                  href={`/work/${client.slug}`}
                  className="group inline-flex items-center gap-2.5"
                >
                  <span className="font-display text-xl font-extrabold uppercase tracking-wider text-ink/35 transition-colors group-hover:text-ink md:text-2xl cursor-pointer">
                    {client.name}
                  </span>
                  <span className="rounded-full bg-sand/80 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-ink/40 group-hover:bg-lime group-hover:text-ink transition-colors">
                    {client.category}
                  </span>
                </Link>
              </span>
            ))}
          </div>
          {/* Cloned run for seamless infinite loop */}
          <div className="flex shrink-0 items-center" aria-hidden="true">
            {loopItems.map((client, i) => (
              <span key={`c2-${i}`} className="marquee-item">
                <Link
                  href={`/work/${client.slug}`}
                  tabIndex={-1}
                  className="group inline-flex items-center gap-2.5"
                >
                  <span className="font-display text-xl font-extrabold uppercase tracking-wider text-ink/35 transition-colors group-hover:text-ink md:text-2xl cursor-pointer">
                    {client.name}
                  </span>
                  <span className="rounded-full bg-sand/80 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-ink/40 group-hover:bg-lime group-hover:text-ink transition-colors">
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
