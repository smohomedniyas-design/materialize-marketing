'use client';

import React, { useState } from 'react';
import { Check, ChevronDown } from 'lucide-react';

export const PricingClean: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const tiers = [
    {
      name: 'Starter Website & Hosting',
      tagline: 'Best for local businesses, shops, and startups needing a clean online presence.',
      price: '$299',
      period: 'setup + $25/month',
      popular: false,
      badge: 'Launch Foundation',
      features: [
        'Custom 3 to 5-page responsive website',
        'Sub-second page speed (< 1s) on phones & desktops',
        'Custom domain setup & free SSL security certificate',
        'Google Analytics & conversion contact form integration',
        'Managed cloud hosting ($25/mo) with 99.9% uptime',
        '2 monthly content, text, or photo updates included',
        '100% client code and asset ownership — zero lock-in',
      ],
      cta: 'Get Started ($299)',
      ctaHref: '#contact',
    },
    {
      name: 'Local Growth Engine',
      tagline: 'Best for businesses wanting top rankings on Google and a steady flow of calls.',
      price: '$497',
      period: 'per month',
      popular: true,
      badge: 'Most Popular',
      features: [
        'Everything in Starter Website & Hosting included',
        'Google Business Profile (GBP) complete optimization',
        'Local SEO: Rank in the Google Maps Top 3 Pack',
        'Generative Engine Optimization (GEO) for ChatGPT & AI search',
        'Automated 5-star Google review generation workflow',
        'Local citation syndication across 40+ business directories',
        'Monthly keyword ranking & lead conversion reports',
        'Direct phone & text access to dedicated manager (Niyas)',
      ],
      cta: 'Start Growth Engine',
      ctaHref: '#contact',
    },
    {
      name: 'All-In Marketing & AI Retainer',
      tagline: 'Best for established brands seeking an entire outsourced marketing department.',
      price: '$997',
      period: 'per month',
      popular: false,
      badge: 'Complete Machine',
      features: [
        'Everything in Growth Engine included',
        'Hands-Free Social Media: 16 custom branded posts/mo',
        'Instagram, Facebook & TikTok graphic/video creation',
        'Paid Ads Management (Google Ads Search or Meta Social)',
        '24/7 AI Voice Phone Receptionist (missed call text-back)',
        '24/7 Website AI Chat Assistant trained on your business FAQ',
        'Bi-weekly strategic review call with our senior agency team',
      ],
      cta: 'Claim All-In Retainer',
      ctaHref: '#contact',
    },
  ];

  const faqs = [
    {
      q: 'Do I own my website and content?',
      a: 'Yes, 100%. Unlike proprietary website builders that hold your content hostage, you own your domain, your code, your graphics, and all assets we produce.',
    },
    {
      q: 'Are there any long-term contracts?',
      a: 'No. Our monthly packages are month-to-month. We believe in earning your business every single month through measurable outcomes and responsive support.',
    },
    {
      q: 'What does the $25/month hosting plan include?',
      a: 'It includes high-speed cloud hosting on enterprise networks, automated daily backups, SSL encryption, 99.9% uptime monitoring, and direct human assistance for minor updates.',
    },
    {
      q: 'How fast can our new website be launched?',
      a: 'Our standard turnaround is 14 business days from your initial discovery call. If you have your copy and images ready, we can often launch even faster.',
    },
    {
      q: 'Who will be my point of contact?',
      a: 'You will work directly with our agency manager, Mohomed Niyas, and lead designer Rusith. No call centers, no outsourced support tickets.',
    },
  ];

  return (
    <section id="pricing" className="bg-paper py-20 md:py-28 text-ink border-b border-ink/10">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="eyebrow text-ink/50 justify-center">Transparent Pricing</p>
          <h2 className="section-h2 mt-4 text-ink">
            Predictable Flat Rates. Zero Surprise Invoices.
          </h2>
          <p className="mt-4 text-base md:text-lg text-ink/70">
            Choose the package that fits your stage of business. Change or cancel anytime.
          </p>
        </div>

        {/* 3 Pricing Cards */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3 items-stretch">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col justify-between rounded-2xl p-8 transition-all duration-300 ${
                tier.popular
                  ? 'bg-ink text-white shadow-2xl ring-2 ring-lime lg:-translate-y-2'
                  : 'bg-white text-ink border border-ink/10 shadow-sm hover:shadow-md'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-lime px-4 py-1 text-[11px] font-black uppercase tracking-wider text-ink shadow-sm">
                  ★ Most Popular For Local Growth
                </div>
              )}

              <div>
                <span
                  className={`inline-block text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md ${
                    tier.popular ? 'bg-white/10 text-lime' : 'bg-sand text-ink/70'
                  }`}
                >
                  {tier.badge}
                </span>

                <h3 className="mt-4 font-display text-2xl font-black tracking-tight">
                  {tier.name}
                </h3>
                <p className={`mt-2 text-xs leading-relaxed ${tier.popular ? 'text-white/70' : 'text-ink/60'}`}>
                  {tier.tagline}
                </p>

                <div className="mt-6 flex items-baseline gap-2 pb-6 border-b border-current/15">
                  <span className="font-display text-5xl font-black tracking-tight">
                    {tier.price}
                  </span>
                  <span className={`text-xs font-bold ${tier.popular ? 'text-lime' : 'text-ink/60'}`}>
                    {tier.period}
                  </span>
                </div>

                <ul className="mt-6 space-y-3 text-xs sm:text-sm font-medium">
                  {tier.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <Check
                        className={`w-4 h-4 shrink-0 mt-0.5 ${
                          tier.popular ? 'text-lime' : 'text-pine'
                        }`}
                      />
                      <span className={tier.popular ? 'text-white/90' : 'text-ink/80'}>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-current/15">
                <a
                  href={tier.ctaHref}
                  className={`w-full block text-center py-3.5 px-6 rounded-full font-bold text-sm transition-all duration-200 ${
                    tier.popular
                      ? 'bg-lime text-ink hover:bg-white shadow-lg'
                      : 'bg-ink text-lime hover:bg-pine shadow-sm'
                  }`}
                >
                  {tier.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Small Business FAQ Section */}
        <div className="mt-20 max-w-3xl mx-auto">
          <h3 className="font-display text-2xl font-black text-ink text-center mb-8">
            Frequently Asked Questions
          </h3>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-ink/10 bg-white overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-5 text-left font-bold text-ink text-sm sm:text-base hover:text-pine"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-ink/40 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-pine' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-ink/70 leading-relaxed border-t border-ink/5">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};