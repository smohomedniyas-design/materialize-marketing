'use client';

import React, { useState } from 'react';
import { BookOpen, Download, CheckCircle2, ArrowRight } from 'lucide-react';

export const FreeMarketingGuideBanner: React.FC = () => {
  const [downloaded, setDownloaded] = useState(false);
  const [email, setEmail] = useState('');

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setDownloaded(true);
    }
  };

  return (
    <section className="bg-sand/60 border-y border-ink/10 py-14 text-ink">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="rounded-3xl bg-white border border-ink/10 p-6 sm:p-10 md:p-12 shadow-sm">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            {/* Left Info */}
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-lime/30 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-ink">
                <BookOpen className="w-3.5 h-3.5 text-ink" /> Free Small Business Resource
              </span>
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-ink">
                Download the &quot;Marketing for Busy Owners&quot; Guide.
              </h3>
              <p className="text-sm sm:text-base text-ink/70 leading-relaxed max-w-2xl">
                The no-jargon handbook breaking down exactly how local businesses win customers on Google, Instagram, and through modern websites — without burning thousands on wasted ads.
              </p>
              <div className="flex flex-wrap gap-4 pt-2 text-xs font-bold text-ink/60">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-pine" /> 10-Minute Read
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-pine" /> Zero Tech Jargon
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-pine" /> Instant PDF Download
                </span>
              </div>
            </div>

            {/* Right Download Form */}
            <div className="lg:col-span-5">
              {downloaded ? (
                <div className="rounded-2xl bg-pine/10 border border-pine/20 p-6 text-center space-y-2">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-pine text-white mx-auto">
                    <Download className="w-6 h-6" />
                  </div>
                  <h4 className="font-display text-lg font-bold text-ink">Check Your Inbox!</h4>
                  <p className="text-xs text-ink/70">
                    We just sent the PDF guide to <span className="font-bold text-ink">{email}</span>. Enjoy the playbook!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleDownload} className="space-y-3">
                  <label className="block text-xs font-bold uppercase tracking-wider text-ink/70">
                    Enter your email for instant access:
                  </label>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="email"
                      required
                      placeholder="you@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 rounded-xl border border-ink/15 bg-paper px-4 py-3.5 text-sm text-ink placeholder-ink/40 focus:border-ink focus:outline-none focus:ring-1 focus:ring-ink"
                    />
                    <button
                      type="submit"
                      className="btn-primary py-3.5 px-6 text-sm font-black whitespace-nowrap justify-center"
                    >
                      Get Free Guide <ArrowRight className="w-4 h-4 ml-1.5" />
                    </button>
                  </div>
                  <p className="text-[11px] text-ink/45">
                    No credit card required. Free instant download.
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

