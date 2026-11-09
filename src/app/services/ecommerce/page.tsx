import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { SERVICES, PROJECTS } from '@/data/siteData';
import { SvgProjectMockup } from '@/components/SvgProjectMockup';
import { ArrowLeft, ArrowRight, CheckCircle2, ShoppingBag, CreditCard, Sparkles, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'E-commerce Solutions - Shopify Plus & Custom Stores',
  description:
    'High-converting e-commerce storefronts engineered on Shopify Plus and custom headless stacks. Frictionless checkout, instant cart drawers, and scalable sales.',
};

export default function EcommerceServicePage() {
  const service = SERVICES.find((s) => s.slug === 'ecommerce')!;
  const ecomProjects = PROJECTS.filter((p) => p.cat === 'E-commerce');

  return (
    <div className="pt-28 md:pt-36">
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
              Discipline 02
            </span>
            <h1 className="font-display text-4xl font-black tracking-tight sm:text-5xl md:text-6xl mt-2">
              High-Converting <span className="text-lime">E-Commerce</span>
            </h1>
            <p className="mt-5 text-lg text-white/75 leading-relaxed">
              Storefronts engineered to sell. From bespoke Shopify Plus themes to headless Hydrogen and Next.js commerce,
              we eliminate checkout friction and maximize your Average Order Value (AOV).
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact?type=E-commerce" className="btn-primary">
                Launch Your Store
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
              <Link href="/pricing" className="btn-ghost">
                View Pricing Packages
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper py-20 text-ink">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8 space-y-10">
              <div>
                <h2 className="section-h2 text-3xl md:text-4xl">
                  Turn Passive Browsers Into Loyal Buyers.
                </h2>
                <p className="mt-4 text-base text-ink/70 leading-relaxed">
                  Every 100ms of checkout lag costs online stores millions in lost sales. We design
                  friction-free cart experiences: slide-out mini-carts with free shipping thresholds,
                  1-click Apple Pay checkout, dynamic cross-sell bundles, and automated Klaviyo retention flows.
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="p-6 rounded-2xl border border-ink/10 bg-white">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-lime text-ink mb-4">
                    <ShoppingBag className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-extrabold text-lg">Instant Slide-Out Cart</h3>
                  <p className="text-xs text-ink/65 mt-2">
                    Dynamic cart drawer with upsell tiles, Tiered discount meters, and real-time inventory checks.
                  </p>
                </div>
                <div className="p-6 rounded-2xl border border-ink/10 bg-white">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-lime text-ink mb-4">
                    <CreditCard className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-extrabold text-lg">Multi-Currency &amp; Stripe</h3>
                  <p className="text-xs text-ink/65 mt-2">
                    Automated currency conversion, local tax calculation via Avalara, and localized checkout rails.
                  </p>
                </div>
                <div className="p-6 rounded-2xl border border-ink/10 bg-white">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-lime text-ink mb-4">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-extrabold text-lg">AOV Optimization</h3>
                  <p className="text-xs text-ink/65 mt-2">
                    Frequently bought together bundles, post-purchase 1-click upsells, and custom volume pricing.
                  </p>
                </div>
                <div className="p-6 rounded-2xl border border-ink/10 bg-white">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-lime text-ink mb-4">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-extrabold text-lg">ERP &amp; Logistics Sync</h3>
                  <p className="text-xs text-ink/65 mt-2">
                    Integrations with ShipStation, Katana, NetSuite, and warehouse fulfillment APIs.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-display font-bold text-xl mb-4">Commerce Technologies We Master</h3>
                <div className="flex flex-wrap gap-2.5">
                  {service.technologies.map((t) => (
                    <span
                      key={t}
                      className="rounded-lg bg-sand px-3 py-1.5 text-xs font-bold text-ink border border-ink/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="sticky top-28 rounded-2xl border border-ink/10 bg-white p-7 shadow-lg">
                <h3 className="font-display font-extrabold text-xl">Commerce Package Scope</h3>
                <p className="text-xs text-ink/50 mt-1">Starting at {service.startingPrice}</p>

                <div className="mt-6 space-y-3">
                  {service.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-ink/80">
                      <CheckCircle2 className="w-4 h-4 text-lime-700 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-ink/10">
                  <Link
                    href="/contact?type=E-commerce"
                    className="btn-ink w-full !text-sm text-center"
                  >
                    Start Commerce Store
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured E-commerce Case Studies */}
      <section className="bg-coal text-white py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <p className="eyebrow text-white/50">Storefront Case Studies</p>
              <h2 className="font-display text-3xl font-extrabold mt-2">
                Real E-Commerce Results
              </h2>
            </div>
            <Link href="/work" className="text-sm font-bold text-lime hover:underline">
              View All Work &rarr;
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {ecomProjects.map((p) => (
              <div key={p.slug} className="rounded-xl border border-white/10 bg-coal overflow-hidden p-4">
                <div className="relative aspect-[16/10] overflow-hidden rounded-lg">
                  <SvgProjectMockup project={p} />
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <h3 className="font-display text-lg font-bold">{p.name}</h3>
                  <Link href={`/work/${p.slug}`} className="text-xs font-bold text-lime hover:underline">
                    Case Study &rarr;
                  </Link>
                </div>
                <p className="text-xs text-white/60 mt-1">{p.tagline}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
