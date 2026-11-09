'use client';

import React, { useState } from 'react';
import { CheckCircle2, ShieldCheck, Zap, Search, Globe, Smartphone, ArrowRight, Sparkles, Star } from 'lucide-react';

export const OnlineScoreAudit: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    businessName: '',
    websiteUrl: '',
    email: '',
    phone: '',
    primaryGoal: 'More Customers & Phone Calls',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setSubmitted(true);
  };

  return (
    <section id="free-audit" className="relative bg-ink text-white py-20 md:py-28 overflow-hidden">
      {/* Background ambient accents */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full bg-lime/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Educational Value Prop (The Skol Marketing Model) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-lime/15 border border-lime/30 px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-widest text-lime">
              <Sparkles className="w-3.5 h-3.5 text-lime" /> 100% Free • No Hard Pitch
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.1]">
              Check Your Online Score. <br />
              <span className="text-lime">Free 5-Minute Marketing Audit.</span>
            </h2>

            <p className="text-base sm:text-lg text-white/75 leading-relaxed">
              Wondering why your website or social media isn&apos;t driving enough phone calls, foot traffic, or orders? 
              Let our team run a complimentary, human-reviewed diagnostic of your digital presence.
            </p>

            {/* 4 Audit Pillars */}
            <div className="grid gap-4 sm:grid-cols-2 pt-2">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-lime/20 text-lime">
                    <Smartphone className="w-4 h-4" />
                  </span>
                  <h4 className="font-display text-sm font-bold text-white">Mobile &amp; Speed Health</h4>
                </div>
                <p className="mt-2 text-xs text-white/60">
                  Tests how fast your site loads on iPhone and Android devices so visitors don&apos;t bounce.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-lime/20 text-lime">
                    <Search className="w-4 h-4" />
                  </span>
                  <h4 className="font-display text-sm font-bold text-white">Google Maps &amp; Local SEO</h4>
                </div>
                <p className="mt-2 text-xs text-white/60">
                  Analyzes where you rank when local customers search for your services in your city.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-lime/20 text-lime">
                    <Globe className="w-4 h-4" />
                  </span>
                  <h4 className="font-display text-sm font-bold text-white">Social &amp; Brand Consistency</h4>
                </div>
                <p className="mt-2 text-xs text-white/60">
                  Checks your Instagram, Facebook, and branding to make sure you look credible and active.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-lime/20 text-lime">
                    <Zap className="w-4 h-4" />
                  </span>
                  <h4 className="font-display text-sm font-bold text-white">Lead Capture &amp; Conversion</h4>
                </div>
                <p className="mt-2 text-xs text-white/60">
                  Spots missed opportunities: broken contact forms, confusing menus, or missing calls-to-action.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-2 text-xs text-white/50">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-lime" /> Zero spam
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-lime" /> Actionable roadmap
              </span>
              <span className="flex items-center gap-1.5">
                <Star className="w-4 h-4 text-lime fill-lime" /> 100% Free
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Audit Form */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl border border-white/15 bg-white/10 p-6 sm:p-8 md:p-10 backdrop-blur-md shadow-2xl">
              {submitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-lime text-ink">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-2xl font-black text-white">
                    Audit Request Received!
                  </h3>
                  <p className="text-sm text-white/70 max-w-md mx-auto">
                    Our team is reviewing <span className="text-lime font-bold">{formData.websiteUrl || formData.businessName}</span>. 
                    We will email your custom video breakdown and online score checklist within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-ghost text-xs px-5 py-2.5 mt-4"
                  >
                    Submit Another Website
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-white/10 pb-4 mb-4">
                    <h3 className="font-display text-xl font-extrabold text-white">
                      Request Your Free Audit
                    </h3>
                    <p className="text-xs text-white/60 mt-1">
                      Fill out this quick form and our Dallas/Prosper team will review your business.
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-white/70 mb-1.5">
                      Business Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Apex Dental / Bella Bistro"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-lime focus:outline-none focus:ring-1 focus:ring-lime"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-white/70 mb-1.5">
                      Website URL or Instagram Handle *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. www.mybusiness.com or @mybusiness"
                      value={formData.websiteUrl}
                      onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                      className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-lime focus:outline-none focus:ring-1 focus:ring-lime"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-white/70 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-lime focus:outline-none focus:ring-1 focus:ring-lime"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-white/70 mb-1.5">
                        Phone (Optional)
                      </label>
                      <input
                        type="tel"
                        placeholder="(555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-lime focus:outline-none focus:ring-1 focus:ring-lime"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-white/70 mb-1.5">
                      What is your biggest marketing bottleneck?
                    </label>
                    <select
                      value={formData.primaryGoal}
                      onChange={(e) => setFormData({ ...formData, primaryGoal: e.target.value })}
                      className="w-full rounded-xl border border-white/15 bg-ink px-4 py-3 text-sm text-white focus:border-lime focus:outline-none focus:ring-1 focus:ring-lime"
                    >
                      <option value="More Customers & Phone Calls">I need more customers, calls, or foot traffic</option>
                      <option value="New Modern Website">My current website looks outdated / amateur</option>
                      <option value="Social Media Consistency">I don&apos;t have time to post on social media</option>
                      <option value="E-Commerce Sales">I need to increase online sales &amp; Shopify conversions</option>
                      <option value="Google Ranking">I am not showing up on Google Maps in my city</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full py-4 text-sm font-black justify-center mt-6 shadow-xl"
                  >
                    Get My Free Online Score &amp; Audit <ArrowRight className="w-4 h-4 ml-2" />
                  </button>

                  <p className="text-[11px] text-center text-white/45 mt-2">
                    Delivered within 24 hours. We never sell your data or spam you.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

