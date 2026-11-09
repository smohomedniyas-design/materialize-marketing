'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowUpRight, ArrowRight, CheckCircle2, ShieldCheck, Sparkles, TrendingUp, PhoneCall, Zap, Play, Pause } from 'lucide-react';

interface HeroSlide {
  id: number;
  label: string;
  tagline: string;
  headline: string;
  desc: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    label: '01 / Web Infrastructure',
    tagline: 'Custom Web Design & Cloud Hosting',
    headline: 'Turn Website Visitors Into Real Paying Customers.',
    desc: 'Custom-coded, mobile-first websites that load in sub-seconds and rank on Google. Full ownership, zero tech headaches, and managed cloud hosting from just $25/month.',
  },
  {
    id: 2,
    label: '02 / Search & AI Discovery',
    tagline: 'Local SEO, Google Maps & Generative Engine Optimization',
    headline: 'Rank #1 on Google Maps and ChatGPT Search.',
    desc: 'We optimize your local business presence so nearby customers find you first — across Google Search, Google Maps 3-Pack, and new AI search tools like ChatGPT and Perplexity.',
  },
  {
    id: 3,
    label: '03 / Paid Customer Acquisition',
    tagline: 'Google Ads & Meta Social Advertising',
    headline: 'Profitable Ads Engineered for Immediate Return.',
    desc: 'Target ready-to-buy homeowners and clients right now. High-intent Google Search PPC and hyper-local Facebook & Instagram campaigns with rigorous conversion tracking.',
  },
  {
    id: 4,
    label: '04 / Hands-Free Brand Growth',
    tagline: 'Social Media Management & 24/7 AI Voice',
    headline: 'Stay Top-of-Mind and Never Miss Another Lead.',
    desc: 'Consistent branded posts, reels, and stories handled for you across Instagram, Facebook, and TikTok — backed by 24/7 AI phone and chat receptionists answering client inquiries.',
  },
];

export const HeroBespoke: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
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

  // Slide auto-rotation
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const current = HERO_SLIDES[activeSlide];

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] w-full overflow-hidden bg-ink flex items-center border-b border-white/10"
      aria-label="Materialize Marketing Hero"
    >
      {/* 3D Ambient Looping Video Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <video
          ref={bgVideoRef}
          src="/HeroBG.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="h-full w-full object-cover scale-105 opacity-60"
        />
      </div>

      {/* Hero Veil / Dark Gradient Overlay for high-contrast human craft */}
      <div className="hero-veil pointer-events-none absolute inset-0 z-10" />

      {/* Main Content Container */}
      <div className="relative z-20 w-full pt-20 pb-16 sm:pt-28 sm:pb-24 lg:pt-32 lg:pb-28">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            
            {/* Left 8 Cols: Dynamic Headline & Value Prop */}
            <div className="lg:col-span-8 max-w-3xl">
              {/* Category Eyebrow Pill */}
              <div className="inline-flex items-center gap-2 rounded-full bg-lime/15 border border-lime/30 px-4 py-1.5 backdrop-blur-md mb-6">
                <span className="h-2 w-2 rounded-full bg-lime animate-pulse" />
                <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-lime">
                  {current.tagline}
                </span>
              </div>

              {/* Dynamic Bold Editorial Headline */}
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.08] tracking-tight text-white transition-opacity duration-300">
                {current.headline.split(' ').map((word, idx) => {
                  const isHighlighted = idx >= current.headline.split(' ').length - 3;
                  return (
                    <span key={idx} className={isHighlighted ? 'text-lime' : 'text-white'}>
                      {word}{' '}
                    </span>
                  );
                })}
              </h1>

              {/* Clear Subtitle */}
              <p className="mt-6 text-base sm:text-lg md:text-xl text-white/80 leading-relaxed font-normal max-w-2xl">
                {current.desc}
              </p>

              {/* Skol-Style Action CTAs */}
              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href="#free-audit"
                  className="btn-primary text-sm sm:text-base px-8 py-4 text-center justify-center font-black shadow-xl"
                >
                  Check Your Online Score (Free Audit)
                  <ArrowUpRight className="w-5 h-5 ml-1" />
                </a>

                <a
                  href="#contact"
                  className="btn-ghost text-sm sm:text-base px-7 py-4 text-center justify-center font-bold"
                >
                  Schedule Free 15-Min Call
                </a>

                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center sm:justify-start gap-1 font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-lime hover:text-white transition-colors pt-2 sm:pt-0 sm:ml-2 text-center"
                >
                  Hosting from $25/mo &rarr;
                </Link>
              </div>

              {/* Interactive Progress Tabs for Human-Crafted Soul */}
              <div className="mt-12 pt-8 border-t border-white/10">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/40 mb-3">
                  Core Disciplines (Click to Explore)
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {HERO_SLIDES.map((slide, idx) => {
                    const isActive = activeSlide === idx;
                    return (
                      <button
                        key={slide.id}
                        onClick={() => {
                          setActiveSlide(idx);
                          setIsPlaying(false);
                        }}
                        className={`text-left p-2.5 rounded-lg border transition-all ${
                          isActive
                            ? 'bg-white/10 border-lime text-white'
                            : 'bg-white/5 border-white/10 text-white/50 hover:text-white hover:border-white/20'
                        }`}
                      >
                        <div className="h-1 w-full bg-white/20 rounded-full mb-2 overflow-hidden">
                          <div
                            className={`h-full bg-lime transition-all duration-300 ${
                              isActive ? 'w-full' : 'w-0'
                            }`}
                          />
                        </div>
                        <span className="block text-[11px] font-bold truncate">
                          {slide.label.split('/ ')[1]}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right 4 Cols: Live Proof & Trust Capsule */}
            <div className="lg:col-span-4 hidden lg:block">
              <div className="rounded-3xl bg-coal/90 border border-white/15 p-6 backdrop-blur-xl shadow-2xl">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2.5">
                    <div className="h-9 w-9 rounded-xl bg-lime text-ink grid place-items-center font-black text-sm">
                      MM
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white leading-none">Materialize Marketing</h4>
                      <p className="text-[11px] text-white/50 mt-1">Sands Planning Group</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-lime bg-lime/10 px-2.5 py-1 rounded-full border border-lime/20">
                    <span className="h-1.5 w-1.5 rounded-full bg-lime animate-ping" />
                    Texas HQ
                  </span>
                </div>

                <div className="mt-5 space-y-3">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-white/50">Managed Hosting &amp; Care</p>
                      <p className="text-sm font-bold text-white">Fast Cloud Servers</p>
                    </div>
                    <span className="text-xs font-black text-lime">$25 / mo</span>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-white/50">Google Map Pack &amp; SEO</p>
                      <p className="text-sm font-bold text-white">Local City Domination</p>
                    </div>
                    <span className="text-xs font-black text-emerald-400">Top 3 Rank</span>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-white/50">AI Lead Receptionist</p>
                      <p className="text-sm font-bold text-white">24/7 Voice &amp; Chat</p>
                    </div>
                    <span className="text-xs font-black text-lime">Zero Missed Calls</span>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-white/10">
                  <p className="text-xs text-white/70 italic leading-relaxed">
                    &ldquo;They redesigned our web platform, set up our local visibility, and handled our launches without the usual agency runaround.&rdquo;
                  </p>
                  <p className="text-[11px] font-bold text-lime mt-2">
                    — Flos Eats &amp; Local Partners
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};