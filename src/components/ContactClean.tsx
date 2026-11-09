'use client';

import React, { useState } from 'react';
import { Phone, Mail, MapPin, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';

export const ContactClean: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    businessName: '',
    serviceNeeded: 'New Website ($299 + $25/mo)',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-sand/40 py-20 md:py-28 text-ink border-b border-ink/10 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          
          {/* Left Column: Direct Texas Studio Contact */}
          <div className="lg:col-span-5 space-y-6">
            <p className="eyebrow text-ink/50">Direct Agency Contact</p>

            <h2 className="section-h2 text-ink">
              Ready to Upgrade Your Marketing?
            </h2>

            <p className="text-base sm:text-lg text-ink/70 leading-relaxed">
              Schedule a casual 15-minute call with our team. We will review your goals, show you real examples from your industry, and give you a flat-rate roadmap with zero pressure.
            </p>

            {/* Direct Cards */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-ink/10 shadow-sm">
                <div className="h-10 w-10 rounded-lg bg-ink text-lime grid place-items-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-ink/40 uppercase tracking-wider">Direct Phone</p>
                  <a href="tel:4692157794" className="text-base font-black text-ink hover:text-pine transition-colors">
                    (469) 215-7794
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-ink/10 shadow-sm">
                <div className="h-10 w-10 rounded-lg bg-ink text-lime grid place-items-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-ink/40 uppercase tracking-wider">Direct Email</p>
                  <a href="mailto:hello@materializem.com" className="text-base font-black text-ink hover:text-pine transition-colors">
                    hello@materializem.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-ink/10 shadow-sm">
                <div className="h-10 w-10 rounded-lg bg-ink text-lime grid place-items-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-ink/40 uppercase tracking-wider">Headquarters</p>
                  <p className="text-sm font-black text-ink">
                    Prosper, Texas 75078 • Dallas-Fort Worth Metro
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <p className="text-xs text-ink/60 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-pine shrink-0" />
                <span>Operating under Sands Planning Group financial &amp; advisory umbrella.</span>
              </p>
            </div>
          </div>

          {/* Right Column: Clean White Consultation Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white p-6 sm:p-8 md:p-10 border border-ink/10 shadow-xl">
              {submitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-emerald-100 text-emerald-600">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-2xl font-black text-ink">
                    Consultation Request Received!
                  </h3>
                  <p className="text-sm text-ink/70 max-w-md mx-auto leading-relaxed">
                    Thank you, {formData.name}. Agency Manager Mohomed Niyas will contact you within 2 to 4 business hours to confirm your free 15-minute strategy call.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-ghost !text-ink !border-ink/20 text-xs px-5 py-2.5 mt-4"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-ink/10 pb-4 mb-4">
                    <h3 className="font-display text-xl font-black text-ink">
                      Schedule a Free 15-Minute Consultation
                    </h3>
                    <p className="text-xs text-ink/60 mt-1">
                      No obligation. Tell us about your goals and our team will get in touch quickly.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-ink/70 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-xl border border-ink/15 bg-sand/30 px-4 py-3 text-sm text-ink placeholder-ink/35 focus:border-pine focus:outline-none focus:ring-1 focus:ring-pine"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-ink/70 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(469) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full rounded-xl border border-ink/15 bg-sand/30 px-4 py-3 text-sm text-ink placeholder-ink/35 focus:border-pine focus:outline-none focus:ring-1 focus:ring-pine"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-ink/70 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@mybusiness.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-xl border border-ink/15 bg-sand/30 px-4 py-3 text-sm text-ink placeholder-ink/35 focus:border-pine focus:outline-none focus:ring-1 focus:ring-pine"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-ink/70 mb-1.5">
                        Business Name or Website
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Apex Roofing / www.apex.com"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        className="w-full rounded-xl border border-ink/15 bg-sand/30 px-4 py-3 text-sm text-ink placeholder-ink/35 focus:border-pine focus:outline-none focus:ring-1 focus:ring-pine"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-ink/70 mb-1.5">
                      Service of Interest
                    </label>
                    <select
                      value={formData.serviceNeeded}
                      onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                      className="w-full rounded-xl border border-ink/15 bg-sand/30 px-4 py-3 text-sm text-ink focus:border-pine focus:outline-none focus:ring-1 focus:ring-pine"
                    >
                      <option>New Website &amp; Hosting ($299 + $25/mo)</option>
                      <option>Local SEO &amp; Google Map Pack ($497/mo)</option>
                      <option>Google Ads (PPC) &amp; Paid Social Advertising</option>
                      <option>Hands-Free Social Media Management ($399/mo)</option>
                      <option>Generative AI Search (GEO) Optimization</option>
                      <option>Branding &amp; Visual Identity System ($399)</option>
                      <option>24/7 AI Voice &amp; Chat Receptionist</option>
                      <option>Complete All-In Marketing Retainer ($997/mo)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-ink/70 mb-1.5">
                      Tell us about your business goals (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="What are you looking to achieve over the next 90 days? Any deadlines?"
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full rounded-xl border border-ink/15 bg-sand/30 px-4 py-3 text-sm text-ink placeholder-ink/35 focus:border-pine focus:outline-none focus:ring-1 focus:ring-pine"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-ink text-center justify-center py-4 text-base font-bold mt-2"
                  >
                    <span>Request Free 15-Minute Strategy Call</span>
                    <ArrowRight className="w-5 h-5 ml-1 text-lime" />
                  </button>

                  <div className="mt-4 p-3.5 rounded-xl bg-sand/60 border border-ink/10 text-left space-y-1.5 text-xs text-ink/75">
                    <p className="font-bold text-ink flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                      What happens after you reach out:
                    </p>
                    <p className="text-[11px] leading-tight text-ink/70">
                      1. Agency Manager Mohomed Niyas confirms your call time within 2-4 business hours.
                    </p>
                    <p className="text-[11px] leading-tight text-ink/70">
                      2. We review your goals and share real examples and pricing for your industry.
                    </p>
                    <p className="text-[11px] leading-tight text-ink/70">
                      3. Zero automated sales calls or aggressive follow-ups.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};