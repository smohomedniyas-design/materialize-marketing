'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export const HeroCarousel: React.FC = () => {
  const bgVideoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (bgVideoRef.current) {
      bgVideoRef.current.play().catch(() => {});
    }

    const handleVisibility = () => {
      if (!document.hidden && bgVideoRef.current) {
        bgVideoRef.current.play().catch(() => {});
      }
    };

    document.addEventListener('visibilitychange', handleVisibility);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden bg-ink flex items-center"
      aria-label="Hero Introduction"
    >
      {/* Background Looping Video */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <video
          ref={bgVideoRef}
          src="/HeroBG.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="h-full w-full object-cover scale-105"
        />
      </div>

      {/* Hero Veil / Dark Gradient Overlay */}
      <div className="hero-veil pointer-events-none absolute inset-0 z-10" />

      {/* Main Content Container */}
      <div className="relative z-20 w-full pt-28 pb-16 sm:pt-36 sm:pb-24 md:pt-40 md:pb-28">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-16">
          <div className="max-w-4xl">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-lime/15 border border-lime/30 px-3.5 py-1.5 backdrop-blur-md mb-6 max-w-full">
              <span className="h-2 w-2 shrink-0 rounded-full bg-lime animate-pulse" />
              <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-[0.16em] sm:tracking-[0.22em] text-lime truncate">
                Web Design • Social Media • AI Automations • Local Growth
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[1.08] sm:leading-[1.05] tracking-tight text-white break-words">
              Turn Your Vision Into <br className="hidden sm:inline" />
              <span className="text-lime">Real Customers.</span>
            </h1>

            {/* Subtitle / Description */}
            <p className="mt-5 sm:mt-6 max-w-3xl text-sm sm:text-lg md:text-xl lg:text-2xl text-white/80 leading-relaxed font-normal">
              We help small businesses look big online. High-converting custom websites, hands-free social media management, and 24/7 AI lead capture — with zero tech headaches, low monthly pricing, and dedicated care.
            </p>

            {/* CTA Buttons (Skol Marketing Dual Lead Magnet Model) */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
              <a href="#free-audit" className="btn-primary text-sm sm:text-base px-7 py-4 w-full sm:w-auto text-center justify-center font-black shadow-xl">
                Check Your Online Score (Free Audit)
                <ArrowUpRight className="w-5 h-5 ml-1" />
              </a>
              <a href="#free-guide" className="btn-ghost text-sm sm:text-base px-7 py-4 w-full sm:w-auto text-center justify-center font-bold">
                Get Free Marketing Guide
              </a>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center sm:justify-start gap-1.5 font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-lime hover:text-white transition-colors pt-2 sm:pt-0 sm:ml-2 text-center"
              >
                Hosting &amp; Packages ($25/mo) &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
