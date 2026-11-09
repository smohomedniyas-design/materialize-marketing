'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Calculator, ArrowRight, Sparkles, Check } from 'lucide-react';

interface AddOn {
  id: string;
  name: string;
  price: number;
  weeks: number;
  description: string;
}

const ADD_ONS: AddOn[] = [
  { id: 'cms', name: 'Headless CMS (Sanity / Contentful)', price: 79, weeks: 0.5, description: 'Client-friendly content editing for any non-technical staff member.' },
  { id: 'ecommerce', name: 'E-commerce Cart & Payments (Stripe / Shopify)', price: 199, weeks: 1, description: 'Complete catalog, checkout, tax compliance and order routing.' },
  { id: 'marketing', name: 'Handled Digital Marketing & Paid Ads (90-Day Setup)', price: 149, weeks: 1, description: 'Meta & Google ad campaign setup, ad creative, copywriting, and weekly ROAS tracking.' },
  { id: 'motion', name: 'Advanced Motion & Interactive Graphics', price: 69, weeks: 0.5, description: 'Micro-interactions, 3D element rendering, and GSAP scroll tours.' },
  { id: 'seo', name: 'Comprehensive SEO & Analytics Suite', price: 49, weeks: 0.5, description: 'Schema markup, GA4 event tagging, Meta pixel, and sitemap indexing.' },
  { id: 'maintenance', name: '90-Day VIP Maintenance Retainer', price: 49, weeks: 0, description: 'Dedicated developer hours, emergency SLA, and uptime monitoring.' },
];

export const CostEstimator: React.FC = () => {
  const [projectType, setProjectType] = useState<'landing' | 'website' | 'ecommerce' | 'custom'>('website');
  const [pageRange, setPageRange] = useState<number>(5);
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['cms', 'seo']);

  // Base pricing
  const baseRates = {
    landing: { basePrice: 199, baseWeeks: 1, perPage: 25 },
    website: { basePrice: 299, baseWeeks: 1.5, perPage: 35 },
    ecommerce: { basePrice: 599, baseWeeks: 2, perPage: 50 },
    custom: { basePrice: 899, baseWeeks: 3, perPage: 75 },
  };

  const currentRate = baseRates[projectType];
  const pagesCost = (pageRange - 1) * currentRate.perPage;
  const addonsCost = selectedAddons.reduce((acc, id) => {
    const item = ADD_ONS.find((a) => a.id === id);
    return acc + (item ? item.price : 0);
  }, 0);

  const totalMin = Math.round((currentRate.basePrice + pagesCost + addonsCost) * 0.95);
  const totalMax = Math.round((currentRate.basePrice + pagesCost + addonsCost) * 1.1);

  const addonsWeeks = selectedAddons.reduce((acc, id) => {
    const item = ADD_ONS.find((a) => a.id === id);
    return acc + (item ? item.weeks : 0);
  }, 0);

  const totalWeeks = Math.ceil(currentRate.baseWeeks + Math.floor(pageRange / 4) + addonsWeeks);

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const prefillUrl = `/contact?type=${encodeURIComponent(
    projectType.toUpperCase()
  )}&pages=${pageRange}&budget=${encodeURIComponent(`$${totalMin.toLocaleString()} - $${totalMax.toLocaleString()}`)}`;

  return (
    <div className="rounded-3xl border border-ink/10 bg-white p-4 sm:p-6 md:p-10 shadow-xl text-ink">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-ink/10">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-lime/30 px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-ink">
            <Calculator className="w-3.5 h-3.5" /> Interactive Calculator
          </span>
          <h3 className="mt-2 font-display text-2xl font-black tracking-tight md:text-3xl">
            Estimate Your Project Scope &amp; Budget
          </h3>
          <p className="text-sm text-ink/60 mt-1">
            Configure your technical requirements to generate an instant estimate.
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-10 lg:grid-cols-12">
        {/* Controls Column */}
        <div className="space-y-8 lg:col-span-7">
          {/* Step 1: Project Type */}
          <div>
            <label className="block text-xs font-extrabold uppercase tracking-[0.2em] text-ink/50 mb-3">
              1. Project Architecture
            </label>
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3 sm:grid-cols-4">
              {[
                { id: 'landing', label: 'Landing Page', sub: 'High-converting' },
                { id: 'website', label: 'Marketing Site', sub: 'React / Next.js' },
                { id: 'ecommerce', label: 'E-commerce', sub: 'Shopify / Stripe' },
                { id: 'custom', label: 'Custom App', sub: 'SaaS / Portal' },
              ].map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setProjectType(t.id as any)}
                  className={`flex flex-col p-2.5 sm:p-3.5 text-left rounded-xl border transition-all ${
                    projectType === t.id
                      ? 'border-ink bg-ink text-white shadow-md'
                      : 'border-ink/15 bg-paper/60 text-ink hover:border-ink/40'
                  }`}
                >
                  <span className="font-display font-extrabold text-sm">{t.label}</span>
                  <span className={`text-[10px] mt-0.5 ${projectType === t.id ? 'text-lime' : 'text-ink/50'}`}>
                    {t.sub}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Page Count Slider */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-extrabold uppercase tracking-[0.2em] text-ink/50">
                2. Estimated Page Count
              </label>
              <span className="font-display font-black text-xl text-ink">
                {pageRange} {pageRange === 1 ? 'Page' : 'Pages'}
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="20"
              step="1"
              value={pageRange}
              onChange={(e) => setPageRange(parseInt(e.target.value, 10))}
              className="w-full accent-ink cursor-pointer h-2 bg-paper rounded-lg"
            />
            <div className="flex justify-between text-[11px] font-semibold text-ink/40 mt-1">
              <span>1 (Single)</span>
              <span className="hidden sm:inline">5 (Standard)</span>
              <span className="hidden sm:inline">10 (Full)</span>
              <span>20+ (Large)</span>
            </div>
          </div>

          {/* Step 3: Add-ons & Integrations */}
          <div>
            <label className="block text-xs font-extrabold uppercase tracking-[0.2em] text-ink/50 mb-3">
              3. Specialized Add-ons &amp; Services
            </label>
            <div className="space-y-2.5">
              {ADD_ONS.map((addon) => {
                const isChecked = selectedAddons.includes(addon.id);
                return (
                  <div
                    key={addon.id}
                    onClick={() => toggleAddon(addon.id)}
                    className={`flex items-start gap-3 p-3 sm:p-3.5 rounded-xl border cursor-pointer transition-all ${
                      isChecked
                        ? 'border-ink bg-paper/90 shadow-sm'
                        : 'border-ink/10 bg-white hover:border-ink/20'
                    }`}
                  >
                    <div
                      className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded ${
                        isChecked ? 'bg-ink text-lime' : 'border border-ink/20 bg-white'
                      }`}
                    >
                      {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                        <span className="text-sm font-bold text-ink">{addon.name}</span>
                        <span className="text-xs font-extrabold text-ink/60 shrink-0">
                          +${addon.price.toLocaleString()}
                        </span>
                      </div>
                      <p className="text-xs text-ink/50 mt-0.5">{addon.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Output Summary Column */}
        <div className="flex flex-col justify-between rounded-2xl bg-sand/60 p-5 sm:p-6 md:p-8 border border-ink/10 lg:col-span-5">
          <div>
            <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-ink/60">
              <Sparkles className="w-4 h-4 text-ink" /> Estimated Investment
            </div>

            <div className="mt-4 flex flex-wrap items-baseline gap-1.5">
              <span className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-ink">
                ${totalMin.toLocaleString()}
              </span>
              <span className="text-lg font-bold text-ink/40"> - </span>
              <span className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-ink">
                ${totalMax.toLocaleString()}
              </span>
            </div>
            <p className="mt-2 text-xs text-ink/50">
              Guaranteed fixed-quote pricing backed by our 100% scope contract.
            </p>

            <div className="mt-8 space-y-3 border-t border-ink/10 pt-6 text-sm">
              <div className="flex justify-between">
                <span className="text-ink/60">Estimated Delivery:</span>
                <span className="font-bold text-ink">{totalWeeks} to {totalWeeks + 2} Weeks</span>
              </div>
              <div className="flex justify-between">
                <span className="text-ink/60">Core Engineering Team:</span>
                <span className="font-bold text-ink">Lead Architect + UI/UX</span>
              </div>
              <div className="flex justify-between">
                <span className="text-ink/60">Post-Launch Warranty:</span>
                <span className="font-bold text-ink">30 to 90 Days Included</span>
              </div>
              <div className="flex justify-between">
                <span className="text-ink/60">Code Ownership:</span>
                <span className="font-bold text-pine bg-lime/70 px-2.5 py-0.5 rounded text-xs">100% Client IP</span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-ink/10">
            <Link
              href={prefillUrl}
              className="btn-ink w-full !py-3.5 !text-sm text-center"
            >
              Start Project With This Scope
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
            <p className="mt-3 text-center text-[11px] text-ink/50">
              Quotes locked for 30 calendar days upon brief receipt.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
