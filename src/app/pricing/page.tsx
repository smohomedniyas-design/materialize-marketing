import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { PRICING_PACKAGES, FAQS } from '@/data/siteData';
import { CostEstimator } from '@/components/CostEstimator';
import { Check, X, ArrowRight, HelpCircle } from 'lucide-react';
import { CtaBanner } from '@/components/CtaBanner';

export const metadata: Metadata = {
  title: 'Pricing & Packages - Fixed Quotes & Transparent Scopes',
  description:
    'Transparent, fixed-quote investment packages for custom web development, e-commerce, and high-converting funnels. Zero surprise invoices.',
};

export default function PricingPage() {
  const comparisonRows = [
    { feature: 'Target Turnaround Time', launch: '1-2 Weeks', commerce: '2-3 Weeks', custom: 'Active Partnership' },
    { feature: 'Custom Designed Pages', launch: '1-3 Pages', commerce: '3-8 Pages', custom: 'Full Growth Engine' },
    { feature: 'Managed High-Speed Hosting & SSL', launch: 'Included ($25/mo)', commerce: 'Included ($99/mo)', custom: 'Included' },
    { feature: 'Annual Discount Option', launch: '$20/mo ($240/yr)', commerce: '$80/mo ($960/yr)', custom: 'Custom' },
    { feature: 'Ongoing Content & Staff Updates', launch: 'Basic Updates', commerce: 'Product & Banner Updates', custom: 'Unlimited Requests' },
    { feature: 'Figma UI/UX Mockups & Review', launch: 'Interactive Preview', commerce: 'Full Design System', custom: 'Custom Brand Library' },
    { feature: 'CMS & Storefront Integration', launch: 'WordPress / Next.js', commerce: 'Shopify / WooCommerce', custom: 'Omni-channel Stack' },
    { feature: 'Local SEO & Google Maps Setup', launch: true, commerce: true, custom: true },
    { feature: 'Core Web Vitals 95+ Guarantee', launch: true, commerce: true, custom: true },
    { feature: 'Analytics & Tag Plan (GA4)', launch: true, commerce: true, custom: true },
    { feature: 'Social Media Management', launch: false, commerce: 'Optional Add-on', custom: '16 Posts / Month' },
    { feature: '24/7 AI Lead Capture Chatbot', launch: false, commerce: 'Optional Add-on', custom: true },
    { feature: 'Dedicated Slack / WhatsApp Channel', launch: false, commerce: true, custom: true },
    { feature: '100% Asset & Code Ownership', launch: 'After 12 mos (or $200 buyout)', commerce: 'After 12 mos', custom: true },
  ];

  return (
    <div className="pt-28 md:pt-36">
      {/* Header */}
      <section className="bg-ink text-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 text-center">
          <p className="eyebrow justify-center text-lime">Transparent Pricing</p>
          <h1 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl mt-4">
            Packages That Get You to <span className="text-lime">Launch.</span>
          </h1>
          <p className="mt-5 max-w-2xl mx-auto text-lg text-white/70 leading-relaxed">
            Fixed quotes, no surprise line items. Every package includes development, UI/UX,
            hosting setup, and a real human on support.
          </p>
        </div>
      </section>

      {/* Package Cards */}
      <section className="bg-paper py-20 text-ink">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3 lg:items-stretch">
            {PRICING_PACKAGES.map((pkg) => {
              const isPopular = pkg.popular;
              return (
                <div
                  key={pkg.id}
                  className={`relative flex flex-col rounded-3xl p-6 sm:p-8 transition-transform duration-300 hover:-translate-y-1.5 ${
                    isPopular
                      ? 'border-2 border-ink bg-ink text-white shadow-2xl lg:-my-4 lg:py-12'
                      : 'border border-ink/10 bg-white text-ink shadow-sm'
                  }`}
                >
                  {isPopular && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-lime px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.22em] text-ink shadow-md">
                      Most Popular
                    </span>
                  )}

                  <p
                    className={`text-xs font-extrabold uppercase tracking-[0.25em] ${
                      isPopular ? 'text-white/45' : 'text-ink/45'
                    }`}
                  >
                    {pkg.tier}
                  </p>

                  <h3 className="mt-3 font-display text-2xl sm:text-3xl font-extrabold tracking-tight">
                    {pkg.name}
                  </h3>
                  <p
                    className={`mt-2 text-sm ${
                      isPopular ? 'text-white/60' : 'text-ink/55'
                    }`}
                  >
                    {pkg.tagline}
                  </p>

                  <div className="mt-6 flex items-baseline">
                    <span className="font-display text-4xl sm:text-5xl font-black tracking-tight">
                      {pkg.price}
                    </span>
                    <span
                      className={`ml-1.5 text-sm font-semibold ${
                        isPopular ? 'text-white/50' : 'text-ink/50'
                      }`}
                    >
                      {pkg.period}
                    </span>
                  </div>

                  <p className={`mt-4 text-xs font-bold ${isPopular ? 'text-lime' : 'text-ink/70'}`}>
                    {pkg.timeline}
                  </p>

                  <ul className="mt-8 flex-1 space-y-3.5 text-sm">
                    {pkg.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex gap-3 items-start">
                        <span
                          className={`mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full ${
                            isPopular ? 'bg-lime text-ink' : 'bg-ink text-white'
                          }`}
                        >
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </span>
                        <span className={isPopular ? 'text-white/85' : 'text-ink/75'}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/contact?package=${pkg.id}`}
                    className={`mt-10 w-full ${
                      isPopular ? 'btn-primary' : 'btn-ink-line'
                    }`}
                  >
                    Select {pkg.name} Plan
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Digital Marketing & Growth Management Banner */}
          <div className="mt-14 rounded-3xl border-2 border-pine bg-coal p-6 sm:p-8 md:p-12 text-white shadow-xl">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8">
                <span className="eyebrow text-lime">Active Campaign Handling</span>
                <h3 className="section-h2 text-2xl md:text-3xl text-white mt-2">
                  Need Us to Actively Handle Your Digital Marketing?
                </h3>
                <p className="mt-3 text-sm md:text-base text-white/70 max-w-2xl">
                  We don&apos;t stop at building your website. Our senior growth team formulates custom digital marketing strategies and actively manages paid advertising (Meta, Google, TikTok), SEO authority, and automated retention flows for an ongoing fee of <span className="font-bold text-lime">$149/mo</span>.
                </p>
                <div className="mt-6 flex flex-wrap gap-4 text-xs font-semibold text-white/80">
                  <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-lime" /> Meta &amp; Google Ad Management</span>
                  <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-lime" /> Full Creative &amp; Copywriting</span>
                  <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-lime" /> Technical SEO &amp; Content Funnels</span>
                  <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-lime" /> Weekly ROAS Dashboard</span>
                </div>
              </div>
              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
                <Link href="/services/digital-marketing" className="btn-primary text-center">
                  Explore Marketing Solutions
                </Link>
                <Link href="/contact?type=Digital+Marketing" className="btn-ghost text-center">
                  Book Marketing Strategy Call
                </Link>
              </div>
            </div>
          </div>

          {/* Interactive Calculator Embed */}
          <div className="mt-28">
            <CostEstimator />
          </div>

          {/* Side-by-Side Comparison Matrix */}
          <div className="mt-28">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="eyebrow justify-center text-ink/50">Feature Matrix</span>
              <h2 className="section-h2 mt-3">Side-by-Side Tier Breakdown</h2>
            </div>

            <div className="mb-2 flex items-center justify-end text-xs text-ink/40 lg:hidden">
              <span>&larr; Swipe to compare tiers &rarr;</span>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-ink/10 bg-white shadow-sm">
              <table className="w-full min-w-[580px] text-left border-collapse text-sm">
                <thead>
                  <tr className="border-b border-ink/10 bg-sand/40">
                    <th className="p-4 font-display font-extrabold text-ink">Feature / Capability</th>
                    <th className="p-4 font-display font-extrabold text-ink">Launch ($299+)</th>
                    <th className="p-4 font-display font-extrabold text-ink bg-lime/20">Commerce ($699+)</th>
                    <th className="p-4 font-display font-extrabold text-ink">Custom Quote</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-ink/10">
                  {comparisonRows.map((row, i) => (
                    <tr key={i} className="hover:bg-sand/20 transition-colors">
                      <td className="p-4 font-medium text-ink">{row.feature}</td>
                      <td className="p-4 text-ink/70">
                        {typeof row.launch === 'boolean' ? (
                          row.launch ? <Check className="w-4 h-4 text-ink" /> : <X className="w-4 h-4 text-ink/30" />
                        ) : (
                          row.launch
                        )}
                      </td>
                      <td className="p-4 font-semibold text-ink bg-lime/10">
                        {typeof row.commerce === 'boolean' ? (
                          row.commerce ? <Check className="w-4 h-4 text-ink" /> : <X className="w-4 h-4 text-ink/30" />
                        ) : (
                          row.commerce
                        )}
                      </td>
                      <td className="p-4 font-semibold text-ink">
                        {typeof row.custom === 'boolean' ? (
                          row.custom ? <Check className="w-4 h-4 text-ink" /> : <X className="w-4 h-4 text-ink/30" />
                        ) : (
                          row.custom
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Referral Rewards Program Banner */}
          <div className="mt-20 max-w-5xl mx-auto rounded-3xl bg-ink text-white p-8 md:p-12 border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-lime/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8 space-y-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-lime/20 px-3 py-1 text-xs font-black uppercase tracking-wider text-lime">
                  🎁 Client Referral Rewards Program
                </span>
                <h3 className="font-display text-2xl md:text-3xl font-extrabold text-white">
                  Earn a <span className="text-lime">$100 Reward</span> for Every Business You Refer.
                </h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  Know a fellow business owner, doctor, contractor, or financial advisor whose website is outdated or non-existent?
                  Introduce them to Materialize Marketing. When they launch a site with us or sign up for ongoing hosting,
                  we send you a <strong>$100 direct cash reward</strong> or apply a <strong>$100 invoice credit</strong> to your account.
                </p>
                <p className="text-xs text-white/50">
                  ✓ Unlimited referrals &nbsp;•&nbsp; ✓ Paid upon client launch &nbsp;•&nbsp; ✓ Zero complex paperwork
                </p>
              </div>
              <div className="md:col-span-4 flex flex-col gap-3">
                <Link
                  href="/contact?type=Referral+Reward"
                  className="btn-primary w-full text-center !py-3 !text-sm"
                >
                  Submit a Referral
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
                <a
                  href="tel:4692157794"
                  className="text-xs text-center text-white/60 hover:text-white transition-colors"
                >
                  Or call (469) 215-7794 to introduce
                </a>
              </div>
            </div>
          </div>

          {/* Pricing FAQ Section */}
          <div className="mt-28 max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="eyebrow justify-center text-ink/50">Questions &amp; Answers</p>
              <h2 className="section-h2 mt-3">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-4">
              {FAQS.map((faq, idx) => (
                <div key={idx} className="rounded-2xl border border-ink/10 bg-white p-6 shadow-sm">
                  <h3 className="font-display font-bold text-lg text-ink flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-lime-700 shrink-0 mt-0.5" />
                    <span>{faq.q}</span>
                  </h3>
                  <p className="mt-3 text-sm text-ink/70 pl-8 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBanner />
    </div>
  );
}
