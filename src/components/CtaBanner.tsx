import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Phone } from 'lucide-react';

export const CtaBanner: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-ink py-20 text-white md:py-28">
      {/* Background Lime Glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-[52rem] -translate-x-1/2 rounded-full bg-lime/10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-5 text-center lg:px-8">
        <h2 className="font-display text-4xl font-extrabold tracking-tight md:text-6xl">
          Your launch deserves <span className="text-lime">better infrastructure.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base text-white/70 md:text-lg">
          Book a free 30-minute discovery call. Leave with a clear picture of the path, architecture
          options, and a guaranteed fixed quote - no obligation, no fluff.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link href="/contact" className="btn-primary">
            Start Your Project
            <ArrowUpRight className="w-4 h-4 ml-0.5" />
          </Link>
          <a
            className="btn-ghost inline-flex items-center gap-2"
            href="tel:+14155550134"
          >
            <Phone className="w-4 h-4" />
            Call (415) 555-0134
          </a>
        </div>
      </div>
    </section>
  );
};
