import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { SERVICES } from '@/data/siteData';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  MapPin, 
  Star, 
  TrendingUp, 
  Search, 
  PhoneCall, 
  ShieldCheck, 
  Sparkles 
} from 'lucide-react';
import { CtaBanner } from '@/components/CtaBanner';

export const metadata: Metadata = {
  title: 'Local SEO & Google Business Profile (GBP) Management - Materialize Marketing',
  description:
    'Dominate Google Maps and local 3-Pack rankings. We optimize your Google Business Profile, build local citations, and run automated 5-star review generation campaigns.',
};

export default function LocalSeoServicePage() {
  const service = SERVICES.find((s) => s.slug === 'seo')!;

  const localPillars = [
    {
      icon: MapPin,
      title: 'Google Maps 3-Pack Domination',
      desc: 'When potential clients search "service near me" or search in your city, we optimize your Google Business Profile categories, geotags, service areas, and photos to push you into the top 3 map results.',
    },
    {
      icon: Star,
      title: 'Automated 5-Star Review Engine',
      desc: 'We set up automated SMS and email review collection campaigns after every completed client transaction, boosting your review volume, average star rating, and social proof.',
    },
    {
      icon: Search,
      title: '40+ National Citation Syndication',
      desc: 'We claim, verify, and standardize your Name, Address, and Phone number (NAP) across Apple Maps, Bing Places, Yelp, YellowPages, Better Business Bureau, and 40+ high-authority directories.',
    },
    {
      icon: PhoneCall,
      title: 'Direct Phone Call Lead Attribution',
      desc: 'Track every inbound phone call and direction request generated from your Google Business Profile with transparent call analytics and monthly keyword ranking reports.',
    },
  ];

  return (
    <div className="pt-28 md:pt-36">
      {/* Hero Header */}
      <section className="bg-ink text-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-lime hover:underline mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to All Services
          </Link>
          <div className="max-w-3xl">
            <span className="font-display text-xs font-extrabold uppercase tracking-[0.25em] text-white/50">
              Discipline 03 · Local Authority
            </span>
            <h1 className="font-display text-4xl font-black tracking-tight sm:text-5xl md:text-6xl mt-2">
              Local SEO &amp; <span className="text-lime">Google Business Profile</span>
            </h1>
            <p className="mt-5 text-lg text-white/75 leading-relaxed">
              When high-intent customers in your city need your service, they search Google Maps first.
              We optimize your local presence, drive 5-star reviews, and secure top 3-Pack placement so your phone rings first.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact?type=Local+SEO" className="btn-primary">
                Get Free Local Ranking Audit
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
              <Link href="/pricing" className="btn-ghost">
                View Pricing ($299/mo)
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Details */}
      <section className="bg-paper py-20 text-ink">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8 space-y-10">
              <div>
                <span className="eyebrow text-ink/50">Local Search Supremacy</span>
                <h2 className="section-h2 mt-3 text-3xl md:text-4xl">
                  Win the High-Intent Searches in Your Service Radius.
                </h2>
                <p className="mt-4 text-base text-ink/70 leading-relaxed">
                  Over 78% of local mobile searches result in an offline purchase within 24 hours. If your competitors
                  are occupying the top 3 spots in Google Maps, they are taking your customers. We deploy proven on-page
                  local schema, directory citations, and active review funnels to push your business to the top.
                </p>
              </div>

              {/* 4 Pillars Grid */}
              <div className="grid gap-6 sm:grid-cols-2">
                {localPillars.map((p, i) => {
                  const Icon = p.icon;
                  return (
                    <div key={i} className="p-6 rounded-2xl border border-ink/10 bg-white">
                      <div className="grid h-10 w-10 place-items-center rounded-lg bg-lime text-ink mb-4">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-display font-extrabold text-lg">{p.title}</h3>
                      <p className="text-xs text-ink/65 mt-2 leading-relaxed">{p.desc}</p>
                    </div>
                  );
                })}
              </div>

              {/* Free Audit Tie-In Box */}
              <div className="p-6 md:p-8 rounded-2xl bg-ink text-white border border-white/10">
                <div className="flex items-center gap-3">
                  <Sparkles className="w-6 h-6 text-lime shrink-0" />
                  <h3 className="font-display font-bold text-xl">Not Sure Where You Rank Today?</h3>
                </div>
                <p className="text-sm text-white/70 mt-2">
                  Take our free 5-minute online diagnostic score. We will evaluate your Google Business Profile, map rankings, and local citations, and deliver an actionable report with zero obligation.
                </p>
                <div className="mt-5">
                  <Link href="/#audit" className="btn-primary !text-xs !py-2.5">
                    Check Your Local Score Now
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar Pricing & Features */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 rounded-2xl border border-ink/10 bg-white p-7 shadow-lg">
                <h3 className="font-display font-extrabold text-xl">Monthly Local SEO Retainer</h3>
                <p className="text-xs text-ink/50 mt-1">Starting at {service.startingPrice}</p>

                <div className="mt-6 space-y-3">
                  {service.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-ink/80">
                      <CheckCircle2 className="w-4 h-4 text-lime-700 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-ink/10 space-y-3">
                  <Link
                    href="/contact?type=Local+SEO"
                    className="btn-ink w-full !text-sm text-center"
                  >
                    Start Local SEO Campaign
                  </Link>
                  <p className="text-[11px] text-center text-ink/50">
                    No long lock-ins. Month-to-month with transparent ranking reports.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
