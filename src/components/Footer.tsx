'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand & Mission column */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-3 group" aria-label="Materialize Marketing Home">
              <span className="relative grid h-10 w-10 place-items-center rounded-xl bg-blue-600 p-1.5 shadow-sm transition-transform duration-200 group-hover:scale-105">
                <img
                  src="/images/logo.png"
                  alt="Materialize Marketing Logo"
                  className="h-full w-full object-contain brightness-0 invert"
                  width={36}
                  height={36}
                />
              </span>
              <span className="leading-tight">
                <span className="block font-display text-lg font-black tracking-tight text-white group-hover:text-blue-400 transition-colors">
                  MATERIALIZE
                </span>
                <span className="block text-[10px] font-extrabold uppercase tracking-[0.24em] text-blue-400">
                  Marketing
                </span>
              </span>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              We help local US small businesses look professional online and turn website traffic into real, paying customers. Custom websites from $25/mo, local Google ranking, and dedicated care.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1.5">
              <p className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-slate-300 font-semibold">Backed by Sands Planning Group</span>
              </p>
              <p className="text-[11px] text-slate-500">Corporate tax, retirement &amp; business advisory umbrella.</p>
            </div>
          </div>

          {/* Core Services column */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-white">Our Services</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/services/web-development" className="text-slate-400 hover:text-white transition-colors">
                  Custom Web Design ($299)
                </Link>
              </li>
              <li>
                <Link href="/services/hosting" className="text-slate-400 hover:text-white transition-colors">
                  Fast Cloud Hosting ($25/mo)
                </Link>
              </li>
              <li>
                <Link href="/services/digital-marketing" className="text-slate-400 hover:text-white transition-colors">
                  Local SEO &amp; Google Map Pack
                </Link>
              </li>
              <li>
                <Link href="/services/digital-marketing" className="text-slate-400 hover:text-white transition-colors">
                  Hands-Free Social Media
                </Link>
              </li>
              <li>
                <Link href="/services/funnels" className="text-slate-400 hover:text-white transition-colors">
                  24/7 AI Voice &amp; Chat Receptionist
                </Link>
              </li>
              <li>
                <Link href="/services/ecommerce" className="text-slate-400 hover:text-white transition-colors">
                  E-Commerce Storefronts
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Resources */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-white">Company</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/process" className="text-slate-400 hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/work" className="text-slate-400 hover:text-white transition-colors">
                  Client Results
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-slate-400 hover:text-white transition-colors">
                  Pricing Plans
                </Link>
              </li>
              <li>
                <a href="#free-audit" className="text-blue-400 hover:text-blue-300 font-semibold transition-colors">
                  Free Online Score Audit &rarr;
                </a>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-white">Direct Assistance</h3>
            <div className="space-y-2.5 text-xs text-slate-400">
              <a
                href="tel:4692157794"
                className="flex items-center gap-2 text-white hover:text-blue-400 font-bold text-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <span>(469) 215-7794</span>
              </a>
              <a
                href="mailto:hello@materializem.com"
                className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>hello@materializem.com</span>
              </a>
              <p className="flex items-start gap-2 pt-1 text-slate-400">
                <MapPin className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <span>Prosper, TX 75078<br />Dallas-Fort Worth Metroplex</span>
              </p>
            </div>
            <div className="pt-3">
              <span className="inline-block rounded-lg bg-slate-800 border border-slate-700 px-3 py-2 text-[11px] text-slate-400">
                🏢 Mother Company: <a href="https://www.sandspg.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:underline font-bold">Sands Planning Group</a>
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Legal Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {year} Materialize Marketing LLC. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </Link>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">Proudly based in Texas, USA</span>
          </div>
        </div>
      </div>
    </footer>
  );
};