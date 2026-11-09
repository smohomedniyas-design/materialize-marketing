'use client';

import React, { useEffect, useRef, useState } from 'react';
import { TRUST_STATS } from '@/data/siteData';

export const StatsCounter: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState<number[]>(TRUST_STATS.map(() => 0));
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 1600;
          const startTime = performance.now();

          const update = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const ease = 1 - Math.pow(1 - progress, 3);

            setCounts(TRUST_STATS.map((stat) => Math.round(stat.value * ease)));

            if (progress < 1) {
              requestAnimationFrame(update);
            } else {
              setCounts(TRUST_STATS.map((stat) => stat.value));
            }
          };

          requestAnimationFrame(update);
        }
      },
      { threshold: 0.25 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <div
      ref={containerRef}
      className="relative z-20 border-t border-white/10 bg-ink/70 backdrop-blur-md"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
        {TRUST_STATS.map((stat, idx) => (
          <div
            key={stat.label}
            className={`px-4 py-5 sm:px-6 sm:py-6 md:px-8 md:py-8 ${
              idx % 2 === 1 ? 'border-l border-white/10' : ''
            } ${idx > 0 ? 'md:border-l md:border-white/10' : 'md:border-l-0'} ${
              idx >= 2 ? 'border-t border-white/10 md:border-t-0' : ''
            }`}
          >
            <p className="font-display text-3xl sm:text-4xl font-extrabold leading-none tabular text-white md:text-5xl">
              <span>{counts[idx]}</span>
              <span className="text-lime">{stat.suffix}</span>
            </p>
            <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.22em] text-white/50 md:text-[11px]">
              {stat.label}
            </p>
            <p className="mt-1 hidden text-xs text-white/40 lg:block">{stat.sub}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
