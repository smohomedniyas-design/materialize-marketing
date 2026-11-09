'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu on page change
    setMobileMenuOpen(false);
    document.body.style.overflow = '';
  }, [pathname]);

  const toggleMobileMenu = () => {
    const next = !mobileMenuOpen;
    setMobileMenuOpen(next);
    document.body.style.overflow = next ? 'hidden' : '';
  };

  const navLinks = [
    { label: 'Services', href: '/services' },
    { label: 'Work', href: '/work' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Process', href: '/process' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header
        id="siteHeader"
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          isScrolled || mobileMenuOpen
            ? 'bg-ink/90 backdrop-blur-md border-b border-white/10 py-3 shadow-lg'
            : 'bg-transparent py-4 md:py-6'
        }`}
      >
        <nav
          className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 lg:px-8"
          aria-label="Primary"
        >
          {/* Logo */}
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

          {/* Desktop Nav */}
          <ul className="hidden items-center gap-8 text-sm font-medium lg:flex">
            {navLinks.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={`transition-colors duration-200 ${
                      isActive
                        ? 'text-lime font-semibold'
                        : 'text-white/70 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="btn-primary !hidden lg:!inline-flex whitespace-nowrap !py-2.5 !px-5 !text-sm"
            >
              Start Your Project
              <ArrowUpRight className="w-4 h-4 ml-0.5" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              id="menuBtn"
              onClick={toggleMobileMenu}
              className="grid h-10 w-10 place-items-center rounded-lg border border-white/20 text-white lg:hidden transition hover:border-lime hover:text-lime"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        id="mobileMenu"
        className={`fixed inset-0 z-40 bg-ink overflow-y-auto transition-all duration-300 lg:hidden ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        aria-label="Mobile navigation"
      >
        <div className="min-h-full flex flex-col justify-between p-6 pt-24 pb-8 max-w-md mx-auto">
          <ul className="flex flex-col gap-3 font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            {navLinks.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    document.body.style.overflow = '';
                  }}
                  className="block py-2 text-white/85 hover:text-lime transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="pt-6 mt-6 border-t border-white/10">
            <div className="flex flex-col items-center gap-1 text-center text-xs font-semibold text-white/40">
              <span className="uppercase tracking-[0.25em] break-all">hello@materializemarketing.com</span>
              <span>(415) 555-0134 · San Francisco, CA</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
