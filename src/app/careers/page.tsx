'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CAREER_ROLES } from '@/data/siteData';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Users, 
  Zap, 
  Send, 
  ShieldCheck,
  Mail,
  Phone
} from 'lucide-react';
import { CtaBanner } from '@/components/CtaBanner';

export default function CareersPage() {
  const [selectedRole, setSelectedRole] = useState<string>('lead-web-designer');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    roleId: 'lead-web-designer',
    portfolioUrl: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-28 md:pt-36 bg-paper min-h-screen text-ink">
      {/* Hero Header */}
      <section className="bg-ink text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-lime/10 rounded-full blur-3xl pointer-events-none" />
        <div className="mx-auto max-w-7xl px-5 lg:px-8 text-center relative z-10">
          <p className="eyebrow justify-center text-lime">We Are Hiring</p>
          <h1 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl mt-4">
            Build the Digital Infrastructure Behind <span className="text-lime">America&apos;s Best Local Businesses.</span>
          </h1>
          <p className="mt-5 max-w-2xl mx-auto text-base sm:text-lg text-white/70 leading-relaxed">
            Join Materialize Marketing. We design lightning-fast websites, high-converting ad funnels, and automated growth systems for passionate business owners nationwide.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-xs font-semibold text-white/80">
            <span className="flex items-center gap-1.5 rounded-full bg-white/5 border border-white/10 px-4 py-2">
              <MapPin className="w-3.5 h-3.5 text-lime" /> Remote &amp; Texas Hub
            </span>
            <span className="flex items-center gap-1.5 rounded-full bg-white/5 border border-white/10 px-4 py-2">
              <Zap className="w-3.5 h-3.5 text-lime" /> Fast-Paced &amp; Autonomous
            </span>
            <span className="flex items-center gap-1.5 rounded-full bg-white/5 border border-white/10 px-4 py-2">
              <ShieldCheck className="w-3.5 h-3.5 text-lime" /> Backed by Sands Planning Group
            </span>
          </div>
        </div>
      </section>

      {/* Culture & Team Pillars */}
      <section className="py-20 border-b border-ink/10 bg-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="eyebrow justify-center text-ink/50">Why Join Us</span>
            <h2 className="section-h2 mt-3">High Ownership. Real Clients. No Bureaucracy.</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl border border-ink/10 bg-sand/30 p-8 shadow-sm">
              <div className="h-12 w-12 rounded-2xl bg-ink text-lime flex items-center justify-center mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-extrabold text-ink">Ship Live Work Weekly</h3>
              <p className="mt-3 text-sm text-ink/70 leading-relaxed">
                You won&apos;t spend months making slides for approval committees. You will design, build, and launch real client sites and campaigns seen by thousands of customers every week.
              </p>
            </div>

            <div className="rounded-3xl border border-ink/10 bg-sand/30 p-8 shadow-sm">
              <div className="h-12 w-12 rounded-2xl bg-ink text-lime flex items-center justify-center mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-extrabold text-ink">Elite Collaborative Squad</h3>
              <p className="mt-3 text-sm text-ink/70 leading-relaxed">
                Work alongside experienced agency operators, designers, and growth strategists in a supportive environment where continuous learning and sharp feedback are celebrated.
              </p>
            </div>

            <div className="rounded-3xl border border-ink/10 bg-sand/30 p-8 shadow-sm">
              <div className="h-12 w-12 rounded-2xl bg-ink text-lime flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-extrabold text-ink">Freedom &amp; Autonomy</h3>
              <p className="mt-3 text-sm text-ink/70 leading-relaxed">
                We value outcomes over clocked hours. As long as our clients are delighted and deadlines are hit with excellence, you own your calendar and workflow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Roles & Quick Application Grid */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            
            {/* Left: Job Openings List */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className="eyebrow text-ink/50">Current Opportunities</span>
                <h2 className="section-h2 mt-2">Open Roles at Materialize</h2>
                <p className="mt-3 text-sm text-ink/70">
                  Select a position below to view details and apply. We review every application within 48 business hours.
                </p>
              </div>

              <div className="space-y-6">
                {CAREER_ROLES.map((role) => {
                  const isSelected = selectedRole === role.id;
                  return (
                    <div
                      key={role.id}
                      onClick={() => {
                        setSelectedRole(role.id);
                        setFormData((prev) => ({ ...prev, roleId: role.id }));
                      }}
                      className={`cursor-pointer rounded-3xl border p-6 sm:p-8 transition-all duration-300 ${
                        isSelected
                          ? 'border-2 border-ink bg-white shadow-xl -translate-y-1 ring-2 ring-lime/50'
                          : 'border-ink/10 bg-white/70 hover:bg-white hover:border-ink/20 shadow-sm'
                      }`}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <span className="inline-flex items-center gap-1 rounded-full bg-sand px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-ink">
                          {role.department}
                        </span>
                        <div className="flex items-center gap-3 text-xs text-ink/60 font-semibold">
                          <span className="flex items-center gap-1">
                            <Briefcase className="w-3.5 h-3.5 text-lime-800" />
                            {role.type}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5 text-lime-800" />
                            {role.location}
                          </span>
                        </div>
                      </div>

                      <h3 className="mt-4 font-display text-2xl font-extrabold text-ink">
                        {role.title}
                      </h3>

                      <p className="mt-3 text-sm text-ink/70 leading-relaxed">
                        {role.description}
                      </p>

                      <div className="mt-6 pt-6 border-t border-ink/5 grid sm:grid-cols-2 gap-6 text-xs">
                        <div>
                          <p className="font-bold text-ink uppercase tracking-wider mb-2">Key Responsibilities:</p>
                          <ul className="space-y-1.5 text-ink/75">
                            {role.responsibilities.map((r, idx) => (
                              <li key={idx} className="flex items-start gap-1.5">
                                <span className="text-lime-800 font-bold">•</span>
                                <span>{r}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="font-bold text-ink uppercase tracking-wider mb-2">Requirements:</p>
                          <ul className="space-y-1.5 text-ink/75">
                            {role.requirements.map((req, idx) => (
                              <li key={idx} className="flex items-start gap-1.5">
                                <span className="text-lime-800 font-bold">•</span>
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="mt-6 pt-4 flex justify-between items-center text-xs font-bold text-lime-800">
                        <span>{isSelected ? '✓ Selected in Application Form' : 'Click to apply for this role'}</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: Quick Application Form */}
            <div className="lg:col-span-5 sticky top-28">
              <div className="rounded-3xl border border-ink/10 bg-white p-6 sm:p-8 shadow-xl">
                <span className="eyebrow text-ink/50">Direct Application</span>
                <h3 className="font-display text-2xl font-extrabold text-ink mt-2">
                  Send Your Application
                </h3>
                <p className="mt-2 text-xs text-ink/60">
                  No 10-page cover letters needed. Show us your best work, tell us why you are a fit, and let&apos;s talk.
                </p>

                {submitted ? (
                  <div className="mt-8 rounded-2xl bg-lime/20 border border-lime p-6 text-center space-y-3">
                    <CheckCircle2 className="w-12 h-12 text-ink mx-auto" />
                    <h4 className="font-display font-extrabold text-xl text-ink">Application Received!</h4>
                    <p className="text-xs text-ink/80 leading-relaxed">
                      Thank you for applying to Materialize Marketing. Our hiring team will review your portfolio and reach out within 48 business hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="btn-ink !py-2 !text-xs mt-3"
                    >
                      Submit Another Application
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-ink uppercase tracking-wider mb-1.5">
                        Selected Role
                      </label>
                      <select
                        value={formData.roleId}
                        onChange={(e) => {
                          setFormData({ ...formData, roleId: e.target.value });
                          setSelectedRole(e.target.value);
                        }}
                        className="w-full rounded-xl border border-ink/15 bg-sand/20 px-3.5 py-2.5 text-xs font-semibold text-ink focus:border-ink focus:outline-none"
                      >
                        {CAREER_ROLES.map((r) => (
                          <option key={r.id} value={r.id}>
                            {r.title} ({r.type})
                          </option>
                        ))}
                        <option value="general-inquiry">General Application / Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-ink uppercase tracking-wider mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Morgan"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full rounded-xl border border-ink/15 px-3.5 py-2.5 text-xs text-ink placeholder:text-ink/35 focus:border-ink focus:outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-ink uppercase tracking-wider mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="alex@gmail.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full rounded-xl border border-ink/15 px-3.5 py-2.5 text-xs text-ink placeholder:text-ink/35 focus:border-ink focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-ink uppercase tracking-wider mb-1.5">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="(555) 000-0000"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full rounded-xl border border-ink/15 px-3.5 py-2.5 text-xs text-ink placeholder:text-ink/35 focus:border-ink focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-ink uppercase tracking-wider mb-1.5">
                        Portfolio / GitHub / LinkedIn URL *
                      </label>
                      <input
                        type="url"
                        required
                        placeholder="https://yourportfolio.com or linkedin.com/in/..."
                        value={formData.portfolioUrl}
                        onChange={(e) => setFormData({ ...formData, portfolioUrl: e.target.value })}
                        className="w-full rounded-xl border border-ink/15 px-3.5 py-2.5 text-xs text-ink placeholder:text-ink/35 focus:border-ink focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-ink uppercase tracking-wider mb-1.5">
                        Brief Note / Why Materialize?
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Tell us about your superpower and recent projects you enjoyed building..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full rounded-xl border border-ink/15 px-3.5 py-2.5 text-xs text-ink placeholder:text-ink/35 focus:border-ink focus:outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-primary w-full text-center !py-3 !text-sm mt-2 flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      Submit Application
                    </button>

                    <div className="pt-2 text-[11px] text-center text-ink/50 space-y-1">
                      <p>🔒 Your personal information is kept strictly confidential.</p>
                      <p>Prefer direct email? Send resume to <a href="mailto:careers@materializem.com" className="text-lime-800 font-bold underline">careers@materializem.com</a></p>
                    </div>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Direct Contact Banner */}
      <section className="py-16 bg-white border-t border-ink/10">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 text-center">
          <h3 className="font-display text-2xl font-extrabold text-ink">
            Questions About Joining the Squad?
          </h3>
          <p className="mt-2 text-sm text-ink/70">
            Reach out directly to our operations and talent team anytime.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm font-semibold text-ink">
            <a href="mailto:careers@materializem.com" className="flex items-center gap-2 hover:text-lime-800 transition-colors">
              <Mail className="w-4 h-4 text-lime-800" />
              <span>careers@materializem.com</span>
            </a>
            <a href="tel:4692157794" className="flex items-center gap-2 hover:text-lime-800 transition-colors">
              <Phone className="w-4 h-4 text-lime-800" />
              <span>(469) 215-7794</span>
            </a>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <CtaBanner />
    </div>
  );
}

