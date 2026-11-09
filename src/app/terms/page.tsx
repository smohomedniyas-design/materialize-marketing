import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service - Materialize Marketing',
  description: 'Terms of Service for Materialize Marketing LLC web development and design engagements.',
};

export default function TermsPage() {
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
            Terms of Service
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
              <h2 className="font-display text-2xl font-bold text-ink mb-3">1. Scope of Work &amp; Engagement</h2>
              <p>
                All web development, e-commerce, design, and hosting services provided by Materialize Marketing LLC are governed by individual Statements of Work (SOWs) and these Master Terms. Any modifications to agreed milestones or technical scopes will be documented in a mutual written change order before execution.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-ink mb-3">2. Fixed Quote Guarantee</h2>
              <p>
                We execute all defined projects under fixed-price quotes. Our quoted fee covers all deliverables specified in the agreed project roadmap. If unexpected technical hurdles arise within agreed specifications, we resolve them without supplemental billing.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-ink mb-3">3. Intellectual Property &amp; Code Ownership</h2>
              <p>
                Upon receipt of final milestone payment, full ownership of all custom source code, Git repositories, Figma mockups, visual assets, and content developed exclusively for your engagement transfers unconditionally to the client. We retain no proprietary licensing locks on your codebase.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-ink mb-3">4. Post-Launch Warranty &amp; Hypercare</h2>
              <p>
                Every project includes a 30 to 90-day post-launch warranty during which any defects, functional bugs, or display inconsistencies will be rectified promptly at no cost. Ongoing maintenance, security patching, and SLA guarantees are provided under separate managed service agreements.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-ink mb-3">5. Governing Law</h2>
              <p>
                These terms are governed by the laws of the State of California, United States, without regard to its conflict of law principles. Any dispute arising under these terms shall be resolved exclusively in the state or federal courts located in San Francisco, California.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
