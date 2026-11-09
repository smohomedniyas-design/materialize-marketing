import React from 'react';
import Link from 'next/link';
import { SERVICES } from '@/data/siteData';
import { ArrowRight } from 'lucide-react';

export const ServicesPreview: React.FC = () => {
  return (
    <section id="services" className="bg-paper py-20 text-ink md:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <p className="eyebrow text-ink/50">What we do</p>
            <h2 className="section-h2 mt-4">Full-stack infrastructure for your next move.</h2>
            <p className="mt-4 max-w-xl text-base text-ink/65 md:text-lg">
              Six core disciplines, one senior team. From custom web engineering to active digital marketing strategies, every project ships with the same standard - speed, reliability, and revenue measured in real dollars.
            </p>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wider text-ink hover:text-ink/70"
          >
            Explore All 6 Disciplines <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <ul className="mt-14 divide-y divide-ink/10 border-y border-ink/10">
          {SERVICES.map((svc) => (
            <li key={svc.slug} id={`svc-${svc.slug}`}>
              <Link
                href={`/services/${svc.slug}`}
                className="group flex items-center gap-6 py-6 transition duration-200 md:py-8 hover:bg-black/[0.02] px-2 rounded-xl"
              >
                <span className="w-8 text-sm font-extrabold tabular text-ink/40">
                  {svc.num}
                </span>
                <span className="flex-1">
                  <span className="block font-display text-2xl font-extrabold tracking-tight transition-transform duration-300 group-hover:translate-x-2 md:text-4xl">
                    {svc.name}
                  </span>
                  <span className="mt-1.5 block max-w-xl text-sm text-ink/60 md:text-base">
                    {svc.shortDesc}
                  </span>
                </span>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-ink/15 transition-all duration-300 group-hover:border-lime group-hover:bg-lime group-hover:text-ink">
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
