'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Check, HelpCircle, ArrowRight, Sparkles, ChevronDown } from 'lucide-react';

export const PricingClean: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const tiers = [
    {
      name: 'Starter Website & Hosting',
      tagline: 'Best for local shops, contractors, and startups needing a clean online presence.',
      price: '$299',
      period: 'setup + $25/month',
      popular: false,
      badge: 'Transparent Value',
      features: [
        'Custom 3 to 5-page responsive website',
        'Lightning-fast page load (< 1s)',
        'Domain setup & free SSL certificate included',
        'Google Analytics & contact form integration',
        'High-speed cloud hosting ($25/mo)',
        '2 monthly content/image updates included',
        '100% full code & asset ownership',
      ],
      cta: 'Get Started ($299)',
      ctaHref: '#contact',
    },
    {
      name: 'Local Growth Engine',
      tagline: 'Best for businesses that want more phone calls and top rankings on Google.',
      price: '$497',
      period: 'per month',
      popular: true,
      badge: 'Most Popular',
      features: [
        'Everything in Starter Website included',
        'Google Business Profile (GBP) complete optimization',
        'Local SEO: Rank in the Google Maps Top 3 Pack',
        'Automated 5-star Google review collection system',
        'Local citation syndication across 40+ business directories',
        'Monthly keyword ranking & lead conversion report',
        'Unlimited minor text and photo updates',
        'Direct phone & text access to your dedicated manager (Niyas)',
      ],
      cta: 'Start Growth Engine',
      ctaHref: '#contact',
    },
    {
      name: 'All-In Marketing & AI Retainer',
      tagline: 'Best for established businesses wanting an entire outsourced marketing department.',
      price: '$997',
      period: 'per month',
      popular: false,
      badge: 'Complete Machine',
      features: [
        'Everything in Growth Engine included',
        'Hands-Free Social Media: 16 custom branded posts/mo',
        'Instagram, Facebook & TikTok graphic/video creation',
        '24/7 AI Voice Phone Receptionist (missed call text-back)',
        '24/7 AI Website Chatbot trained on your exact business FAQ',
        'Paid Ads Funnel Management (Google Ads or Meta)',
        'Bi-weekly strategy call with our agency team',
      ],
      cta: 'Claim All-In Retainer',
      ctaHref: '#contact',
    },
  ];

  const faqs = [
    {
      q: 'Do I own my website and content?',
      a: 'Yes, 100%. Unlike some proprietary platforms that lock you in, you own your domain, your content, your code, and all graphics we create for you.',
    },
    {
      q: 'Are there any long-term contracts?',
      a: 'No. Our monthly packages are month-to-month. We believe in earning your business every single month through measurable results and great service.',
    },
    {
      q: 'What does the $25/month hosting plan include?',
      a: 'It includes ultra-fast cloud hosting, automatic daily backups, enterprise SSL certificates, 99.9% uptime monitoring, and ongoing security patches so you never have to worry about your site crashing.',
    },
    {
      q: 'How fast can our new website be launched?',
      a: 'Our standard turnaround is 14 business days from the initial discovery call. If you have your copy and images ready, we can often launch even faster.',
    },
    {
      q: 'Who will I be talking to when I need help?',
      a: 'You will have direct access to your dedicated Texas-based account manager, Mohomed Niyas, via phone, email, and direct text. No overseas call centers, no robot tickets.',
    },
  ];

  return (
    <section id="pricing" className="bg-white py-20 md:py-28 border-b border-slate-200/80">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200 px-3.5 py-1 mb-4">
            <span className="text-xs font-bold text-blue-900 uppercase tracking-widest">
              Simple, Flat Pricing
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Transparent Rates. Zero Surprise Invoices.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
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
                  ? 'bg-blue-600 text-white shadow-2xl shadow-blue-500/25 ring-2 ring-blue-600 lg:-translate-y-2'
                  : 'bg-slate-50 text-slate-900 border border-slate-200 shadow-sm hover:shadow-md'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-amber-400 px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-slate-900 shadow-sm">
                  ★ Most Popular For Local Businesses
                </div>
              )}

              <div>
                <span
                  className={`inline-block text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md ${
                    tier.popular ? 'bg-blue-700 text-blue-100' : 'bg-slate-200 text-slate-700'
                  }`}
                >
                  {tier.badge}
                </span>

                <h3 className="mt-4 font-display text-2xl font-black tracking-tight">
                  {tier.name}
                </h3>
                <p className={`mt-2 text-xs leading-relaxed ${tier.popular ? 'text-blue-100' : 'text-slate-500'}`}>
                  {tier.tagline}
                </p>

                <div className="mt-6 flex items-baseline gap-2 pb-6 border-b border-current/15">
                  <span className="font-display text-5xl font-black tracking-tight">
                    {tier.price}
                  </span>
                  <span className={`text-xs font-bold ${tier.popular ? 'text-blue-100' : 'text-slate-500'}`}>
                    {tier.period}
                  </span>
                </div>

                <ul className="mt-6 space-y-3 text-xs sm:text-sm font-medium">
                  {tier.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <Check
                        className={`w-4 h-4 shrink-0 mt-0.5 ${
                          tier.popular ? 'text-blue-200' : 'text-emerald-600'
                        }`}
                      />
                      <span className={tier.popular ? 'text-white' : 'text-slate-700'}>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-current/15">
                <a
                  href={tier.ctaHref}
                  className={`w-full block text-center py-3.5 px-6 rounded-xl font-bold text-sm transition-all duration-200 ${
                    tier.popular
                      ? 'bg-white text-blue-700 hover:bg-blue-50 shadow-md'
                      : 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm'
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
          <h3 className="font-display text-2xl font-black text-slate-900 text-center mb-8">
            Frequently Asked Questions
          </h3>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-200 bg-slate-50 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-5 text-left font-bold text-slate-900 text-sm sm:text-base hover:text-blue-600"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-blue-600' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/50">
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