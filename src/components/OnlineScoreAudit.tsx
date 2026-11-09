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
    primaryGoal: 'More Inbound Calls & Customers',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="free-audit" className="relative bg-ink text-white py-20 md:py-28 overflow-hidden border-b border-white/10">
      {/* Background ambient accents */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full bg-lime/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Left Column: Educational Diagnostic */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-lime/15 border border-lime/30 px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-widest text-lime">
              <Sparkles className="w-3.5 h-3.5 text-lime" /> 100% Complimentary • No Sales Pressure
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.1]">
              Check Your Online Score. <br />
              <span className="text-lime">Free 5-Minute Marketing Audit.</span>
            </h2>

            <p className="text-base sm:text-lg text-white/75 leading-relaxed">
              Wondering why your website or social media isn&apos;t driving enough phone calls or paying customers? 
              Our Texas team will run a complimentary, human-reviewed diagnostic of your complete digital presence.
            </p>

            {/* 4 Audit Pillars */}
            <div className="grid gap-4 sm:grid-cols-2 pt-2">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-lime/20 text-lime">
                    <Smartphone className="w-4 h-4" />
                  </span>
                  <h4 className="font-display text-sm font-bold text-white">Mobile Speed &amp; Vitals</h4>
                </div>
                <p className="mt-2 text-xs text-white/60 leading-relaxed">
                  Tests how fast your site loads on phones so visitors don&apos;t bounce to a competitor.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-emerald-500/20 text-emerald-400">
                    <Search className="w-4 h-4" />
                  </span>
                  <h4 className="font-display text-sm font-bold text-white">Google Maps 3-Pack</h4>
                </div>
                <p className="mt-2 text-xs text-white/60 leading-relaxed">
                  Checks your Google Business Profile visibility in the local Map Pack for your city.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-purple-500/20 text-purple-300">
                    <Globe className="w-4 h-4" />
                  </span>
                  <h4 className="font-display text-sm font-bold text-white">AI Search (GEO)</h4>
                </div>
                <p className="mt-2 text-xs text-white/60 leading-relaxed">
                  Audits your citations and schema for ChatGPT, Perplexity &amp; Google AI answers.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-amber-500/20 text-amber-300">
                    <Zap className="w-4 h-4" />
                  </span>
                  <h4 className="font-display text-sm font-bold text-white">Conversion Leaks</h4>
                </div>
                <p className="mt-2 text-xs text-white/60 leading-relaxed">
                  Identifies broken phone links, slow forms, or missing calls-to-action that lose leads.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-2 text-xs text-white/50">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-lime" /> Zero spam
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-lime" /> 100% Actionable
              </span>
              <span className="flex items-center gap-1.5">
                <Star className="w-4 h-4 text-lime fill-lime" /> Completely Free
              </span>
            </div>
          </div>

          {/* Right Column: High-Legibility White Form Card */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl bg-white p-6 sm:p-8 md:p-10 shadow-2xl text-ink border border-white/20">
              {submitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-emerald-100 text-emerald-600">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-2xl font-black text-ink">
                    Audit Request Received!
                  </h3>
                  <p className="text-sm text-ink/70 max-w-md mx-auto leading-relaxed">
                    Our team is reviewing <span className="text-pine font-bold">{formData.websiteUrl || formData.businessName}</span>. 
                    We will email your custom video breakdown and online score checklist within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-ghost !text-ink !border-ink/20 hover:!border-ink text-xs px-5 py-2.5 mt-4"
                  >
                    Submit Another Website
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-ink/10 pb-4 mb-4">
                    <h3 className="font-display text-xl font-black text-ink">
                      Request Your Free Online Score
                    </h3>
                    <p className="text-xs text-ink/60 mt-1">
                      Fill out this quick form and our Dallas/Prosper team will analyze your digital footprint.
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-ink/70 mb-1.5">
                      Business Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Apex Dental / Dallas Roofing / Bella Cafe"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      className="w-full rounded-xl border border-ink/15 bg-sand/30 px-4 py-3 text-sm text-ink placeholder-ink/35 focus:border-pine focus:outline-none focus:ring-1 focus:ring-pine"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-ink/70 mb-1.5">
                      Website URL or Instagram Handle *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. www.mybusiness.com or @mybusiness"
                      value={formData.websiteUrl}
                      onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                      className="w-full rounded-xl border border-ink/15 bg-sand/30 px-4 py-3 text-sm text-ink placeholder-ink/35 focus:border-pine focus:outline-none focus:ring-1 focus:ring-pine"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-ink/70 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-xl border border-ink/15 bg-sand/30 px-4 py-3 text-sm text-ink placeholder-ink/35 focus:border-pine focus:outline-none focus:ring-1 focus:ring-pine"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-ink/70 mb-1.5">
                        Phone Number (Optional)
                      </label>
                      <input
                        type="tel"
                        placeholder="(469) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full rounded-xl border border-ink/15 bg-sand/30 px-4 py-3 text-sm text-ink placeholder-ink/35 focus:border-pine focus:outline-none focus:ring-1 focus:ring-pine"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-ink/70 mb-1.5">
                      What is your #1 marketing priority right now?
                    </label>
                    <select
                      value={formData.primaryGoal}
                      onChange={(e) => setFormData({ ...formData, primaryGoal: e.target.value })}
                      className="w-full rounded-xl border border-ink/15 bg-sand/30 px-4 py-3 text-sm text-ink focus:border-pine focus:outline-none focus:ring-1 focus:ring-pine"
                    >
                      <option>More Inbound Calls &amp; Customers</option>
                      <option>New / Modern Website ($299 + $25/mo)</option>
                      <option>Top 3 Ranking on Google Maps</option>
                      <option>Google Ads &amp; Paid Social Advertising</option>
                      <option>Hands-Free Social Media Management</option>
                      <option>24/7 AI Receptionist &amp; Lead Capture</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-ink text-center justify-center py-4 text-base font-bold mt-2"
                  >
                    <span>Get My Free Online Score</span>
                    <ArrowRight className="w-5 h-5 ml-1 text-lime" />
                  </button>

                  <p className="text-[11px] text-center text-ink/50 pt-1">
                    🔒 We respect your privacy. No pushy sales calls. 100% human reviewed.
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