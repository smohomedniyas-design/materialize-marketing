import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { IntakeForm } from '@/components/IntakeForm';
import { Mail, Phone, MapPin, Calendar, Clock, CheckCircle2 } from 'lucide-react';
import { CtaBanner } from '@/components/CtaBanner';

export const metadata: Metadata = {
  title: 'Start Your Project - Contact & Intake Brief',
  description:
    'Tell us about your project requirements. Receive a guaranteed fixed quote and architecture roadmap within 24 business hours.',
};

export default function ContactPage() {
  return (
    <div className="pt-28 md:pt-36">
      {/* Hero Header */}
      <section className="bg-ink text-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 text-center">
          <p className="eyebrow justify-center text-lime">Get In Touch</p>
          <h1 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl mt-4">
            Let&apos;s Build Your <span className="text-lime">Infrastructure.</span>
          </h1>
          <p className="mt-5 max-w-2xl mx-auto text-lg text-white/70 leading-relaxed">
            Fill out the brief below to get started. You&apos;ll receive a response from a senior engineer
            within one business day with honest options and a fixed-price quote.
          </p>
        </div>
      </section>

      {/* Main Intake Form Component */}
      <Suspense fallback={<div className="py-20 text-center text-ink">Loading project brief form...</div>}>
        <IntakeForm />
      </Suspense>

      {/* Direct Scheduling & Office Information */}
      <section className="bg-paper py-20 text-ink border-t border-ink/10">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Direct Booking Column */}
            <div className="lg:col-span-6 p-8 rounded-3xl bg-white border border-ink/10 shadow-sm flex flex-col justify-between">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-lime/30 px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-ink mb-4">
                  <Calendar className="w-3.5 h-3.5" /> Direct Scheduling
                </span>
                <h3 className="font-display text-2xl font-black md:text-3xl text-ink">
                  Book a 30-Minute Discovery Call
                </h3>
                <p className="mt-3 text-sm text-ink/70 leading-relaxed">
                  Prefer a live conversation before submitting a brief? Schedule a 1-on-1 strategy call with our principal architect to review your site, current bottlenecks, and technical scope.
                </p>

                <div className="mt-6 space-y-3 text-xs font-semibold text-ink/80">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-lime-700 shrink-0" />
                    <span>No sales pitch - straight architectural and scope feedback</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-lime-700 shrink-0" />
                    <span>Preliminary timeline and ballpark investment range</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-lime-700 shrink-0" />
                    <span>Actionable advice you can keep whether you hire us or not</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-ink/10">
                <a
                  href="mailto:hello@materializem.com?subject=Discovery%20Call%20Request"
                  className="btn-ink w-full !text-center !py-3 !text-sm"
                >
                  Schedule Discovery Call via Email
                </a>
              </div>
            </div>

            {/* Direct Contact Info */}
            <div className="lg:col-span-6 space-y-6">
              <div className="p-8 rounded-3xl bg-sand/60 border border-ink/10">
                <h3 className="font-display font-bold text-xl mb-4">Headquarters &amp; Direct Lines</h3>

                <div className="space-y-4 text-sm text-ink/80">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-ink shrink-0 mt-0.5" />
                    <div>
                      <span className="block font-bold text-ink">Texas Headquarters</span>
                      <span>Prosper, Texas 75078 • Dallas-Fort Worth Metro</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-ink shrink-0 mt-0.5" />
                    <div>
                      <span className="block font-bold text-ink">Direct Telephone</span>
                      <a href="tel:4692157794" className="underline hover:text-ink font-semibold">
                        (469) 215-7794
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-ink shrink-0 mt-0.5" />
                    <div>
                      <span className="block font-bold text-ink">Email Inquiries</span>
                      <a href="mailto:hello@materializem.com" className="underline hover:text-ink font-semibold">
                        hello@materializem.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-ink shrink-0 mt-0.5" />
                    <div>
                      <span className="block font-bold text-ink">Inquiries &amp; RFP Submissions</span>
                      <a href="mailto:hello@materializemarketing.com" className="underline hover:text-ink font-semibold">
                        hello@materializemarketing.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-ink shrink-0 mt-0.5" />
                    <div>
                      <span className="block font-bold text-ink">Support &amp; Response Hours</span>
                      <span>Monday to Friday, 9:00 AM to 6:00 PM Pacific Time</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBanner />
    </div>
  );
}
