'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, ShieldCheck, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-ink text-white/80">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12">
          
          {/* Brand & Mission column */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-3 group" aria-label="Materialize Marketing Home">
              <span className="relative grid h-10 w-10 place-items-center rounded-xl bg-lime p-1.5 shadow-md transition-transform duration-300 group-hover:scale-105">
                <img
                  src="/images/logo.png"
                  alt="Materialize Marketing Logo"
                  className="h-full w-full object-contain"
                  width={36}
                  height={36}
                />
              </span>
              <span className="leading-tight">
                <span className="block font-display text-lg font-black tracking-tight text-white group-hover:text-lime transition-colors">
                  MATERIALIZE
                </span>
                <span className="block text-[9px] font-extrabold uppercase tracking-[0.28em] text-lime/90">
                  Marketing
                </span>
              </span>
            </Link>

            <p className="text-sm text-white/60 leading-relaxed max-w-sm">
              We engineer the digital infrastructure behind America&apos;s best small businesses. Custom websites from $25/mo, local Google ranking, profitable paid ads, and hands-free growth.
            </p>

            <div className="pt-2 text-xs text-white/50 space-y-1.5">
              <p className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-lime shrink-0" />
                <span className="text-white/90 font-bold">Backed by Sands Planning Group</span>
              </p>
              <p className="text-[11px] text-white/40">Corporate tax, retirement &amp; business advisory umbrella.</p>
            </div>
          </div>

          {/* Core Services column */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-black uppercase tracking-[0.25em] text-lime">Services</h3>
            <ul className="mt-4 space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/services/web-development" className="text-white/70 hover:text-white transition-colors">
                  Custom Web Design ($299)
                </Link>
              </li>
              <li>
                <Link href="/services/hosting" className="text-white/70 hover:text-white transition-colors">
                  Cloud Hosting ($25/mo)
                </Link>
              </li>
              <li>
                <Link href="/services/digital-marketing" className="text-white/70 hover:text-white transition-colors">
                  Local SEO &amp; Google Maps 3-Pack
                </Link>
              </li>
              <li>
                <Link href="/services/digital-marketing" className="text-white/70 hover:text-white transition-colors">
                  AI Search &amp; GEO (ChatGPT Optimization)
                </Link>
              </li>
              <li>
                <Link href="/services/digital-marketing" className="text-white/70 hover:text-white transition-colors">
                  Google Ads (PPC) &amp; Paid Social
                </Link>
              </li>
              <li>
                <Link href="/services/digital-marketing" className="text-white/70 hover:text-white transition-colors">
                  Hands-Free Social Media Management
                </Link>
              </li>
              <li>
                <Link href="/services/ui-ux" className="text-white/70 hover:text-white transition-colors">
                  Branding &amp; Visual Identity Kits
                </Link>
              </li>
              <li>
                <Link href="/services/funnels" className="text-white/70 hover:text-white transition-colors">
                  24/7 AI Voice Receptionists
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Resources */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-black uppercase tracking-[0.25em] text-lime">Company</h3>
            <ul className="mt-4 space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/about" className="text-white/70 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/process" className="text-white/70 hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/work" className="text-white/70 hover:text-white transition-colors">
                  Client Results
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-white/70 hover:text-white transition-colors">
                  Pricing Plans
                </Link>
              </li>
              <li>
                <a href="#free-audit" className="text-lime hover:underline font-bold transition-colors inline-flex items-center gap-1">
                  <span>Free Online Score</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-white transition-colors">
                  Contact Studio
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-black uppercase tracking-[0.25em] text-lime">Texas Headquarters</h3>
            <div className="space-y-2.5 text-xs text-white/60">
              <a
                href="tel:4692157794"
                className="flex items-center gap-2 text-white hover:text-lime font-bold text-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-lime shrink-0" />
                <span>(469) 215-7794</span>
              </a>
              <a
                href="mailto:hello@materializem.com"
                className="flex items-center gap-2 text-white/80 hover:text-lime transition-colors"
              >
                <Mail className="w-4 h-4 text-lime shrink-0" />
                <span>hello@materializem.com</span>
              </a>
              <p className="flex items-start gap-2 pt-1 text-white/70">
                <MapPin className="w-4 h-4 text-lime shrink-0 mt-0.5" />
                <span>Prosper, TX 75078<br />Dallas-Fort Worth Metro</span>
              </p>
            </div>
            <div className="pt-3">
              <span className="inline-block rounded-xl bg-white/5 border border-white/10 px-3.5 py-2.5 text-[11px] text-white/60">
                🏢 Parent Company: <a href="https://www.sandspg.com/" target="_blank" rel="noopener noreferrer" className="text-lime hover:underline font-bold">Sands Planning Group</a>
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© {year} Materialize Marketing LLC. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <span className="text-white/20">|</span>
            <span className="text-white/60">Prosper, Texas • United States</span>
          </div>
        </div>

      </div>
    </footer>
  );
};