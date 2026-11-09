import React from 'react';
import Link from 'next/link';
import { CLIENT_LOGOS } from '@/data/siteData';

export const ClientMarquee: React.FC = () => {
  // Repeat the 6 websites we did to form a wide continuous marquee track
  const loopItems = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section className="border-b border-slate-200/90 bg-slate-50 py-7 md:py-8 overflow-hidden" aria-label="Our client websites">
      <p className="text-center text-xs font-bold uppercase tracking-[0.22em] text-slate-500">
        Trusted By Growing Brands &amp; Local Leaders
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
                  <span className="font-display text-lg font-black uppercase tracking-wider text-slate-400 transition-colors group-hover:text-blue-600 md:text-xl cursor-pointer">
                    {client.name}
                  </span>
                  <span className="rounded-full bg-slate-200/80 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-600 group-hover:bg-blue-100 group-hover:text-blue-700 transition-colors">
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
                  <span className="font-display text-lg font-black uppercase tracking-wider text-slate-400 transition-colors group-hover:text-blue-600 md:text-xl cursor-pointer">
                    {client.name}
                  </span>
                  <span className="rounded-full bg-slate-200/80 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-600 group-hover:bg-blue-100 group-hover:text-blue-700 transition-colors">
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
