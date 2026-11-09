import React from 'react';
import Link from 'next/link';
import { PROCESS_STEPS } from '@/data/siteData';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const ProcessTimeline: React.FC = () => {
  return (
    <section id="process" className="border-t border-ink/10 bg-paper py-20 text-ink md:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <p className="eyebrow text-ink/50">Our process</p>
            <h2 className="section-h2 mt-4">A proven, milestone-driven launch process.</h2>
            <p className="mt-4 text-base text-ink/65 md:text-lg">
              A streamlined pipeline refined across 60+ launches. You always know what is completed, what is next, and exactly what it costs.
            </p>
          </div>
          <Link
            href="/process"
            className="inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wider text-ink hover:text-ink/70"
          >
            Explore Our Full Process <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <ol className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((step) => (
            <li
              key={step.num}
              className="group rounded-2xl border border-ink/10 bg-white p-6 shadow-sm transition-all duration-300 hover:border-ink hover:shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between border-b border-ink/10 pb-4">
                  <span className="font-display text-5xl font-black text-ink">
                    {step.num}
                  </span>
                  <span className="inline-block rounded-full bg-ink px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.18em] text-lime">
                    {step.timeframe}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-xl font-extrabold tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-ink/60 md:text-[15px]">
                  {step.shortDesc}
                </p>

                <div className="mt-6 space-y-2 border-t border-ink/10 pt-4 text-xs font-semibold text-ink/70">
                  <p className="text-[10px] font-extrabold uppercase tracking-wider text-ink/40">
                    Deliverables:
                  </p>
                  {step.deliverables.slice(0, 2).map((d, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-pine shrink-0" />
                      <span className="truncate">{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-ink/5">
                <Link
                  href="/process"
                  className="text-xs font-bold text-ink inline-flex items-center gap-1 group-hover:text-pine transition-colors"
                >
                  Learn Phase Details <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
