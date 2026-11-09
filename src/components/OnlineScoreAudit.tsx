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
    setSubmitted(true);
  };

  return (
    <section id="free-audit" className="relative bg-slate-900 text-white py-20 md:py-28 overflow-hidden">
      {/* Background ambient accents */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Educational Value Prop */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/15 border border-blue-400/30 px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-widest text-blue-400">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" /> 100% Free • No Sales Pressure
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.1]">
              Check Your Online Score. <br />
              <span className="text-blue-400">Free 5-Minute Marketing Audit.</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Wondering why your website or social media isn&apos;t driving enough phone calls or paying customers? 
              Our Texas team will run a complimentary, human-reviewed diagnostic of your digital presence.
            </p>

            {/* 4 Audit Pillars */}
            <div className="grid gap-4 sm:grid-cols-2 pt-2">
              <div className="rounded-xl border border-slate-800 bg-slate-800/60 p-4">
                <div className="flex items-center gap-3">
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-blue-500/20 text-blue-400">
                    <Smartphone className="w-4 h-4" />
                  </span>
                  <h4 className="font-display text-sm font-bold text-white">Mobile Speed &amp; UX</h4>
                </div>
                <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                  Tests how fast your site loads on phones so visitors don&apos;t bounce to a competitor.
                </p>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-800/60 p-4">
                <div className="flex items-center gap-3">
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-emerald-500/20 text-emerald-400">
                    <Search className="w-4 h-4" />
                  </span>
                  <h4 className="font-display text-sm font-bold text-white">Google Maps Ranking</h4>
                </div>
                <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                  Checks your Google Business Profile visibility in the local Map Pack for your city.
                </p>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-800/60 p-4">
                <div className="flex items-center gap-3">
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-purple-500/20 text-purple-400">
                    <Globe className="w-4 h-4" />
                  </span>
                  <h4 className="font-display text-sm font-bold text-white">Social Media Health</h4>
                </div>
                <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                  Analyzes your branding, posting consistency, and local customer engagement.
                </p>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-800/60 p-4">
                <div className="flex items-center gap-3">
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-amber-500/20 text-amber-400">
                    <Zap className="w-4 h-4" />
                  </span>
                  <h4 className="font-display text-sm font-bold text-white">Conversion Leaks</h4>
                </div>
                <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                  Identifies broken phone links, slow forms, or missing calls-to-action that lose leads.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-2 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> Zero spam
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400" /> 100% Actionable
              </span>
              <span className="flex items-center gap-1.5">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" /> 100% Free
              </span>
            </div>
          </div>

          {/* Right Column: Clean White Form Card */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl bg-white p-6 sm:p-8 md:p-10 shadow-2xl text-slate-900 border border-slate-100">
              {submitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-emerald-100 text-emerald-600">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-2xl font-black text-slate-900">
                    Audit Request Received!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Our team is reviewing <span className="text-blue-600 font-bold">{formData.websiteUrl || formData.businessName}</span>. 
                    We will email your custom breakdown and online score checklist within 24 hours.
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
                  <div className="border-b border-slate-100 pb-4 mb-4">
                    <h3 className="font-display text-xl font-black text-slate-900">
                      Request Your Free Audit
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Fill out this quick form and our Texas team will review your business.
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Business Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Apex Dental / Bella Bistro / Dallas Roofing"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Website URL or Instagram Handle *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. www.mybusiness.com or @mybusiness"
                      value={formData.websiteUrl}
                      onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Phone Number (Optional)
                      </label>
                      <input
                        type="tel"
                        placeholder="(469) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      What is your #1 marketing priority right now?
                    </label>
                    <select
                      value={formData.primaryGoal}
                      onChange={(e) => setFormData({ ...formData, primaryGoal: e.target.value })}
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                    >
                      <option>More Customers &amp; Inbound Calls</option>
                      <option>New / Modern Website That Converts</option>
                      <option>Rank Higher on Google Maps</option>
                      <option>Consistent Social Media Posts &amp; Branding</option>
                      <option>24/7 AI Receptionist &amp; Lead Capture</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary text-center justify-center py-4 text-base font-bold shadow-lg shadow-blue-500/20 mt-2"
                  >
                    <span>Get My Free Online Score</span>
                    <ArrowRight className="w-5 h-5 ml-1" />
                  </button>

                  <p className="text-[11px] text-center text-slate-500 pt-1">
                    🔒 We respect your privacy. No pushy spam. 100% human-analyzed.
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