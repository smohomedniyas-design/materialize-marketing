import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { SERVICES } from '@/data/siteData';
import { ArrowLeft, ArrowRight, CheckCircle2, ShieldCheck, Activity, Server, LifeBuoy, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Managed Maintenance & Hosting - 99.9% Uptime SLA',
  description:
    'Enterprise-grade managed infrastructure, 24/7 uptime monitoring, security patching, and dedicated developer hours so you can sleep and sell.',
};

export default function HostingServicePage() {
  const service = SERVICES.find((s) => s.slug === 'hosting')!;

  return (
    <div className="pt-28 md:pt-36">
      <section className="bg-ink text-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-lime hover:underline mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to All Services
          </Link>
          <div className="max-w-3xl">
            <span className="font-display text-xs font-extrabold uppercase tracking-[0.25em] text-white/50">
              Discipline 04
            </span>
            <h1 className="font-display text-4xl font-black tracking-tight sm:text-5xl md:text-6xl mt-2">
              Managed <span className="text-lime">Maintenance &amp; Hosting</span>
            </h1>
            <p className="mt-5 text-lg text-white/75 leading-relaxed">
              Software is living infrastructure. Our retainers protect your digital business with proactive
              monitoring, automated daily backups, security vulnerability patches, and real engineers on call.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact?type=Maintenance+%26+Hosting" className="btn-primary">
                Secure Your Retainer
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
              <Link href="/pricing" className="btn-ghost">
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper py-20 text-ink">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8 space-y-10">
              <div>
                <h2 className="section-h2 text-3xl md:text-4xl">
                  Sleep Well While Your Site Sells 24/7.
                </h2>
                <p className="mt-4 text-base text-ink/70 leading-relaxed">
                  Too many businesses discover a broken checkout or expired SSL certificate only after lost sales.
                  With our managed maintenance plans, automated monitors ping your critical checkout and API flows every
                  60 seconds. When an anomaly occurs, our US senior engineering team is notified and resolves it before
                  your customers notice.
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="p-6 rounded-2xl border border-ink/10 bg-white">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-lime text-ink mb-4">
                    <Activity className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-extrabold text-lg">60-Second Telemetry Ping</h3>
                  <p className="text-xs text-ink/65 mt-2">
                    Multi-region automated health pings covering DNS, SSL certificates, payment webhooks, and third-party APIs.
                  </p>
                </div>
                <div className="p-6 rounded-2xl border border-ink/10 bg-white">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-lime text-ink mb-4">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-extrabold text-lg">Cloudflare Edge Defense</h3>
                  <p className="text-xs text-ink/65 mt-2">
                    Enterprise Web Application Firewall (WAF), rate limiting, and DDoS protection absorbing malicious bot traffic.
                  </p>
                </div>
                <div className="p-6 rounded-2xl border border-ink/10 bg-white">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-lime text-ink mb-4">
                    <Server className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-extrabold text-lg">Daily Off-Site Snapshots</h3>
                  <p className="text-xs text-ink/65 mt-2">
                    Redundant daily database and code backups stored in immutable multi-region buckets with 1-click rollback.
                  </p>
                </div>
                <div className="p-6 rounded-2xl border border-ink/10 bg-white">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-lime text-ink mb-4">
                    <LifeBuoy className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-extrabold text-lg">Dedicated Developer Hours</h3>
                  <p className="text-xs text-ink/65 mt-2">
                    Every retainer includes rollover developer hours for copy updates, new landing pages, and feature additions.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-sand/60 border border-ink/10">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-ink" />
                  <h3 className="font-display font-bold text-lg">Guaranteed 1-Hour Emergency Response SLA</h3>
                </div>
                <p className="text-xs text-ink/70 mt-2">
                  Retainer clients receive private access to our on-call Slack channel. In the event of a critical issue, a senior engineer responds within 60 minutes.
                </p>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="sticky top-28 rounded-2xl border border-ink/10 bg-white p-7 shadow-lg">
                <h3 className="font-display font-extrabold text-xl">Retainer Overview</h3>
                <p className="text-xs text-ink/50 mt-1">Starting at {service.startingPrice}</p>

                <div className="mt-6 space-y-3">
                  {service.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-ink/80">
                      <CheckCircle2 className="w-4 h-4 text-lime-700 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-ink/10">
                  <Link
                    href="/contact?type=Maintenance+%26+Hosting"
                    className="btn-ink w-full !text-sm text-center"
                  >
                    Inquire About Retainers
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
