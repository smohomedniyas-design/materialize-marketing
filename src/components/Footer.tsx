import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-2 lg:grid-cols-12 lg:px-8">
        {/* Brand column */}
        <div className="lg:col-span-4">
          <Link href="/" className="flex items-center gap-3 group" aria-label="Materialize Marketing Home">
            <span className="relative grid h-10 w-10 place-items-center rounded-xl bg-lime p-1.5 shadow-sm transition-transform duration-300 group-hover:scale-105">
              <img
                src="/images/logo.png"
                alt="Materialize Marketing Logo"
                className="h-full w-full object-contain"
                width={36}
                height={36}
              />
            </span>
            <span className="leading-none">
              <span className="block font-display text-lg font-black tracking-tight text-white transition-colors group-hover:text-lime">
                MATERIALIZE
              </span>
              <span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.32em] text-white/50">
                Marketing
              </span>
            </span>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/55">
            A US-based team building high-performance web infrastructure and handling end-to-end digital marketing strategies behind 20+ launched businesses - fast, reliable, and revenue-focused.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/60 transition hover:border-lime hover:bg-lime hover:text-ink"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/60 transition hover:border-lime hover:bg-lime hover:text-ink"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644z" />
              </svg>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/60 transition hover:border-lime hover:bg-lime hover:text-ink"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.69-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Services column */}
        <div className="lg:col-span-2">
          <h3 className="text-xs font-extrabold uppercase tracking-[0.25em] text-white/40">Services</h3>
          <ul className="mt-5 space-y-3 text-sm text-white/70">
            <li>
              <Link className="transition hover:text-lime" href="/services/web-development">
                Web Development
              </Link>
            </li>
            <li>
              <Link className="transition hover:text-lime" href="/services/digital-marketing">
                Digital Marketing &amp; Solutions
              </Link>
            </li>
            <li>
              <Link className="transition hover:text-lime" href="/services/ecommerce">
                E-commerce Solutions
              </Link>
            </li>
            <li>
              <Link className="transition hover:text-lime" href="/services/funnels">
                Landing Pages &amp; Funnels
              </Link>
            </li>
            <li>
              <Link className="transition hover:text-lime" href="/services/hosting">
                Maintenance &amp; Hosting
              </Link>
            </li>
            <li>
              <Link className="transition hover:text-lime" href="/services/ui-ux">
                UI/UX Design Mockups
              </Link>
            </li>
          </ul>
        </div>

        {/* Company column */}
        <div className="lg:col-span-3">
          <h3 className="text-xs font-extrabold uppercase tracking-[0.25em] text-white/40">Company</h3>
          <ul className="mt-5 space-y-3 text-sm text-white/70">
            <li>
              <Link className="transition hover:text-lime" href="/work">
                Recently Completed Projects
              </Link>
            </li>
            <li>
              <Link className="transition hover:text-lime" href="/pricing">
                Packages &amp; Pricing
              </Link>
            </li>
            <li>
              <Link className="transition hover:text-lime" href="/process">
                Our Process
              </Link>
            </li>
            <li>
              <Link className="transition hover:text-lime" href="/about">
                Meet Our Team
              </Link>
            </li>
            <li>
              <Link className="transition hover:text-lime" href="/contact">
                Start Your Project
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact column */}
        <div className="lg:col-span-3">
          <h3 className="text-xs font-extrabold uppercase tracking-[0.25em] text-white/40">Contact</h3>
          <ul className="mt-5 space-y-3 text-sm text-white/70">
            <li>
              <a
                className="transition hover:text-lime underline decoration-lime/40 underline-offset-4"
                href="mailto:hello@materializem.com"
              >
                hello@materializem.com
              </a>
            </li>
            <li className="text-white/60">
              Prosper, TX 75078<br /> (Dallas-Fort Worth Metro)
            </li>
            <li className="text-white/40 text-xs">Mon-Fri, 9am-6pm CT · Sands Planning Group Partner</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-6 text-xs text-white/40 md:flex-row lg:px-8 text-center md:text-left">
          <p>© {year} Materialize Marketing LLC. All rights reserved.</p>
          <ul className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <li>
              <Link className="transition hover:text-white" href="/privacy">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link className="transition hover:text-white" href="/terms">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link className="transition hover:text-white" href="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <p className="uppercase tracking-[0.2em] font-semibold text-lime/80">Made in the USA</p>
        </div>
      </div>
    </footer>
  );
};
