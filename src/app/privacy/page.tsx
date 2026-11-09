import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy - Materialize Marketing',
  description: 'Privacy policy for Materialize Marketing LLC. Learn how we handle client and visitor data.',
};

export default function PrivacyPage() {
  return (
    <div className="pt-28 md:pt-36">
      <section className="bg-ink text-white py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-lime hover:underline mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
          </Link>
          <h1 className="font-display text-4xl font-black tracking-tight sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-white/50">
            Effective Date: January 1, 2025 · Last Updated: September 2025
          </p>
        </div>
      </section>

      <section className="bg-paper py-16 text-ink">
        <div className="mx-auto max-w-4xl px-5 lg:px-8 prose prose-slate">
          <div className="space-y-8 text-sm md:text-base text-ink/80 leading-relaxed">
            <div>
              <h2 className="font-display text-2xl font-bold text-ink mb-3">1. Information We Collect</h2>
              <p>
                Materialize Marketing LLC (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects information you provide directly through our project brief intake forms, emails, and phone consultations. This typically includes your name, work email address, company name, project brief details, and budget parameters.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-ink mb-3">2. How We Use Information</h2>
              <p>
                We use the information collected solely to evaluate your project inquiry, prepare accurate fixed-price proposals, communicate regarding project timelines, and deliver custom development services. We never sell, rent, or distribute your personal details to third-party data brokers.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-ink mb-3">3. Code &amp; Client Data Confidentiality</h2>
              <p>
                All client proprietary business logic, trade secrets, designs, databases, and customer records accessed during development are protected under standard Mutual Non-Disclosure Agreements (NDAs). We implement strict access controls and encrypted channels for all credentials.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-ink mb-3">4. Cookies &amp; Telemetry</h2>
              <p>
                Our site uses minimal privacy-first analytics to monitor page performance, Core Web Vitals, and aggregate traffic patterns. We do not track visitors across third-party websites or engage in intrusive behavioral retargeting.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-ink mb-3">5. Contact Us</h2>
              <p>
                If you have questions or requests regarding your personal information, please reach out to us at{' '}
                <a href="mailto:hello@materializem.com" className="font-semibold underline decoration-lime text-ink">
                  hello@materializem.com
                </a>{' '}
                or call us at (469) 215-7794. You may also write to Materialize Marketing, Prosper, Texas 75078 (Dallas-Fort Worth metropolitan area).
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
