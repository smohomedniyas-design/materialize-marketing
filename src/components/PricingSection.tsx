import React from 'react';
import Link from 'next/link';
import { PRICING_PACKAGES } from '@/data/siteData';
import { Check, ArrowRight } from 'lucide-react';

export const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="bg-paper py-20 text-ink md:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center text-ink/50">Pricing</p>
          <h2 className="section-h2 mt-4">Transparent packages with ongoing care.</h2>
          <p className="mt-4 text-base text-ink/65 md:text-lg">
            Low upfront setup, affordable monthly care ($25/mo), and zero tech headaches. Every plan includes high-speed cloud hosting, security, domain setup, and ongoing updates.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-6xl gap-6 lg:grid-cols-3 lg:items-stretch">
          {PRICING_PACKAGES.map((pkg) => {
            const isPopular = pkg.popular;
            return (
              <div
                key={pkg.id}
                className={`relative flex flex-col rounded-2xl p-5 sm:p-7 md:p-8 transition-transform duration-300 hover:-translate-y-1 ${
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

                <h3 className="mt-3 font-display text-2xl font-extrabold tracking-tight">
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

                <div
                  className={`mt-4 pb-4 border-b text-xs font-bold uppercase tracking-wider ${
                    isPopular ? 'border-white/10 text-lime' : 'border-ink/10 text-ink/70'
                  }`}
                >
                  {pkg.timeline}
                </div>

                <ul className="mt-6 flex-1 space-y-3.5 text-sm md:text-[15px]">
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
                  className={`mt-8 w-full ${
                    isPopular ? 'btn-primary' : 'btn-ink-line'
                  }`}
                >
                  {pkg.id === 'launch'
                    ? 'Start a Launch'
                    : pkg.id === 'commerce'
                    ? 'Start Your Project'
                    : 'Talk to Us'}
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Pricing link footer */}
        <div className="mt-12 text-center">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 text-sm font-bold text-ink hover:underline"
          >
            Looking for a custom scope? View full comparison &amp; price calculator{' '}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
