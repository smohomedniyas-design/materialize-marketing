'use client';

import React, { useState } from 'react';
import { Phone, Mail, MapPin, CheckCircle2, ArrowRight, ShieldCheck, Clock } from 'lucide-react';

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
    <section id="contact" className="bg-white py-20 md:py-28 border-b border-slate-200/80">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          {/* Left Column: Direct Agency Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200 px-3.5 py-1">
              <span className="text-xs font-bold text-blue-900 uppercase tracking-widest">
                Direct Contact
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Ready to Look Great and Get More Calls?
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Schedule a casual 15-minute call with our team. We will review your goals, show you real examples from your industry, and outline a flat-rate roadmap with zero pressure.
            </p>

            {/* Direct Cards */}
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="h-10 w-10 rounded-lg bg-blue-100 text-blue-600 grid place-items-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Direct Phone</p>
                  <a href="tel:4692157794" className="text-base font-black text-slate-900 hover:text-blue-600 transition-colors">
                    (469) 215-7794
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="h-10 w-10 rounded-lg bg-emerald-100 text-emerald-600 grid place-items-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Direct Email</p>
                  <a href="mailto:hello@materializem.com" className="text-base font-black text-slate-900 hover:text-blue-600 transition-colors">
                    hello@materializem.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="h-10 w-10 rounded-lg bg-purple-100 text-purple-600 grid place-items-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Headquarters</p>
                  <p className="text-sm font-black text-slate-900">
                    Prosper, Texas 75078 • Dallas-Fort Worth Metro
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <p className="text-xs text-slate-500 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Operating under Sands Planning Group financial &amp; advisory umbrella.</span>
              </p>
            </div>
          </div>

          {/* Right Column: Clean Simple Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-slate-50 p-6 sm:p-8 md:p-10 border border-slate-200 shadow-sm">
              {submitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-emerald-100 text-emerald-600">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-2xl font-black text-slate-900">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, {formData.name}. Agency Manager Mohomed Niyas will contact you within 2 to 4 business hours to confirm your free 15-minute strategy call.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-ghost text-xs px-5 py-2.5 mt-4"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-slate-200/80 pb-4 mb-4">
                    <h3 className="font-display text-xl font-black text-slate-900">
                      Schedule a Free 15-Minute Consultation
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      No commitment required. Tell us a little about your business and we&apos;ll be in touch quickly.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(469) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@mybusiness.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Business Name or Website
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Apex Roofing / www.apex.com"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      What are you interested in?
                    </label>
                    <select
                      value={formData.serviceNeeded}
                      onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                    >
                      <option>New Website ($299 setup + $25/mo)</option>
                      <option>Local SEO &amp; Google Map Pack ($497/mo)</option>
                      <option>Social Media Management ($399/mo)</option>
                      <option>24/7 AI Voice &amp; Chat Receptionist</option>
                      <option>Complete All-In Marketing Retainer ($997/mo)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Tell us a little about your business (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="What is your biggest business goal right now? Any specific deadline?"
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary text-center justify-center py-4 text-base font-bold shadow-lg shadow-blue-500/20 mt-2"
                  >
                    <span>Request Free 15-Minute Strategy Call</span>
                    <ArrowRight className="w-5 h-5 ml-1" />
                  </button>

                  <p className="text-[11px] text-center text-slate-500 pt-1">
                    ⚡ Fast response within 2–4 hours • Dedicated Texas account manager
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
