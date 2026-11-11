'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Globe, 
  MapPin, 
  Search, 
  Target, 
  Share2, 
  Sparkles, 
  ArrowRight, 
  Cpu,
  TrendingUp,
  Bot,
  FileSearch,
  CheckCircle2
} from 'lucide-react';

interface SkolServiceCard {
  id: string;
  title: string;
  desc: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  isAuditCard?: boolean;
}

const SERVICES_GRID: SkolServiceCard[] = [
  {
    id: 'web-dev',
    title: 'Website Development',
    desc: 'Professional websites that build your brand, offer a great user experience, and deliver conversions.',
    href: '/services/web-development',
    icon: Globe,
  },
  {
    id: 'seo',
    title: 'Search Engine Optimization',
    desc: 'Make sure your business ranks #1 on Google Maps and local search when nearby clients need you.',
    href: '/services/seo',
    icon: Search,
  },
  {
    id: 'social-media',
    title: 'Social Media Management',
    desc: 'Build your brand and expand your digital audience with hands-free monthly branded graphics & Reels.',
    href: '/services/social-media',
    icon: Share2,
  },
  {
    id: 'paid-ads',
    title: 'Paid Ads (Google & Meta)',
    desc: 'High-intent digital ads that convert clicks into profitable booked calls with zero wasted budget.',
    href: '/services/paid-ads',
    icon: Target,
  },
  {
    id: 'free-audit',
    title: 'Free Digital Audit',
    desc: 'Let Materialize Marketing help you map out exact opportunities for your business to grow online.',
    href: '#free-audit',
    icon: FileSearch,
    isAuditCard: true,
  },
  {
    id: 'paid-social',
    title: 'Social Ads (Meta & TikTok)',
    desc: 'Put scroll-stopping video and image ads directly in front of the right local customers.',
    href: '/services/paid-social',
    icon: Sparkles,
  },
  {
    id: 'hosting',
    title: 'Hosting & Maintenance',
    desc: 'Keep your website fast, stable, secure, and updated every month for as low as $20 to $25/mo.',
    href: '/services/hosting',
    icon: Cpu,
  },
  {
    id: 'digital-strategy',
    title: 'Digital Marketing Strategy',
    desc: 'Work with our senior team to build a clear playbook that builds brand awareness and drives revenue.',
    href: '/services/digital-marketing',
    icon: TrendingUp,
  },
  {
    id: 'ai-voice',
    title: '24/7 AI Voice & Booking',
    desc: 'Never miss another customer phone call with smart AI answering, booking, and SMS follow-ups.',
    href: '/services/ai-automation',
    icon: Bot,
  },
];

export const ServicesMatrix: React.FC = () => {
  return (
    <section id="services" className="bg-[#0b1715] text-white py-20 md:py-28 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-lime/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-5 lg:px-8 relative z-10">
        
        {/* Section Header (Skol Style) */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="inline-block text-xs font-black uppercase tracking-[0.28em] text-lime mb-3">
            Digital Strategies to Grow Your Business
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Everything Your Business Needs to Win Online.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
            Your brand&apos;s digital presence is crucial — and you need a partner that puts the success of your business front-and-center. With Materialize Marketing, you get expert guidance and hands-on support from a team that understands every facet of the digital world.
          </p>
        </div>

        {/* 3x3 Grid (Matching Skol Screenshot) */}
        <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES_GRID.map((service) => {
            const Icon = service.icon;
            const isHighlight = service.isAuditCard;

            return (
              <Link
                key={service.id}
                href={service.href}
                className={`group relative flex flex-col justify-between rounded-3xl p-7 sm:p-8 transition-all duration-300 hover:-translate-y-1.5 ${
                  isHighlight
                    ? 'bg-lime text-ink shadow-2xl hover:shadow-lime/20 ring-4 ring-lime/30'
                    : 'bg-white/[0.06] hover:bg-white/[0.11] text-white border border-white/10 hover:border-white/20 shadow-lg'
                }`}
              >
                <div>
                  {/* Top Icon */}
                  <div className="mb-5 flex items-center justify-between">
                    <span
                      className={`inline-grid h-12 w-12 place-items-center rounded-2xl transition-transform duration-300 group-hover:scale-110 ${
                        isHighlight
                          ? 'bg-ink text-lime shadow-md'
                          : 'bg-white/10 text-lime border border-white/10'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </span>
                    <span
                      className={`text-xs font-bold uppercase tracking-wider transition-transform duration-300 group-hover:translate-x-1 ${
                        isHighlight ? 'text-ink/60' : 'text-white/40'
                      }`}
                    >
                      Explore →
                    </span>
                  </div>

                  {/* Title with Arrow */}
                  <h3
                    className={`font-display text-xl sm:text-2xl font-black uppercase tracking-tight flex items-center gap-2 ${
                      isHighlight ? 'text-ink' : 'text-white group-hover:text-lime'
                    }`}
                  >
                    <span>{service.title}</span>
                    <ArrowRight className="w-5 h-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                  </h3>

                  {/* Punchy 1-Sentence Benefit Description */}
                  <p
                    className={`mt-3 text-sm leading-relaxed ${
                      isHighlight ? 'text-ink/80 font-medium' : 'text-white/70'
                    }`}
                  >
                    {service.desc}
                  </p>
                </div>

                {/* Bottom Highlight Indicator */}
                <div className="mt-6 pt-4 border-t border-black/10 flex items-center justify-between text-xs font-semibold">
                  {isHighlight ? (
                    <span className="inline-flex items-center gap-1.5 text-ink font-bold">
                      <Sparkles className="w-3.5 h-3.5" /> 100% Free • No Obligation
                    </span>
                  ) : (
                    <span className="text-white/40 group-hover:text-lime transition-colors">
                      Learn more about {service.title.toLowerCase()}
                    </span>
                  )}
                  <span className={isHighlight ? 'text-ink font-bold' : 'text-lime'}>→</span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom Reassurance Banner */}
        <div className="mt-16 text-center">
          <p className="text-sm text-white/60">
            Need a custom package or monthly retainer?{' '}
            <Link href="/pricing" className="text-lime hover:underline font-bold inline-flex items-center gap-1">
              <span>View Transparent Flat Pricing ($25/mo)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </p>
        </div>

      </div>
    </section>
  );
};
