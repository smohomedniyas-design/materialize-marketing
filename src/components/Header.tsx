'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight, Phone, ShieldCheck, MapPin } from 'lucide-react';

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
    { label: 'How It Works', href: '/process' },
    { label: 'Our Work', href: '/work' },
    { label: 'Pricing ($25/mo)', href: '/pricing' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Top Utility Trust Bar */}
      <div className="bg-[#0b1715] text-white/80 text-xs py-2 px-4 border-b border-white/10 z-50 relative">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-white/90">
              <MapPin className="w-3.5 h-3.5 text-lime" />
              <span>Prosper, TX &amp; Dallas-Fort Worth</span>
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5 text-white/60 border-l border-white/15 pl-4">
              <ShieldCheck className="w-3.5 h-3.5 text-lime" />
              <span>Backed by Sands Planning Group</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="tel:4692157794"
              className="inline-flex items-center gap-1.5 font-bold text-white hover:text-lime transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-lime" />
              <span>(469) 215-7794</span>
            </a>
            <span className="hidden md:inline text-white/30">|</span>
            <span className="hidden md:inline text-white/70">Mon - Fri: 8am - 6pm CST</span>
          </div>
        </div>
      </div>

      {/* Main Glassmorphic Sticky Header */}
      <header
        id="siteHeader"
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled || mobileMenuOpen
            ? 'bg-ink/95 backdrop-blur-md border-b border-white/10 py-3 shadow-xl'
            : 'bg-ink/75 backdrop-blur-sm border-b border-white/5 py-4'
        }`}
      >
        <nav
          className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 lg:px-8"
          aria-label="Primary"
        >
          {/* Logo */}
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

          {/* Desktop Nav */}
          <ul className="hidden items-center gap-7 text-sm font-semibold lg:flex">
            {navLinks.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={`transition-colors duration-200 ${
                      isActive
                        ? 'text-lime font-bold'
                        : 'text-white/80 hover:text-white'
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
            <a
              href="tel:4692157794"
              className="hidden xl:inline-flex items-center gap-1.5 text-xs font-bold text-white bg-white/10 hover:bg-white/20 px-3.5 py-2 rounded-full border border-white/15 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-lime" />
              <span>(469) 215-7794</span>
            </a>

            <a
              href="#free-audit"
              className="btn-primary !py-2.5 !px-5 !text-xs sm:!text-sm whitespace-nowrap shadow-lg shadow-lime/20"
            >
              Get Free Audit
              <ArrowUpRight className="w-4 h-4 ml-0.5" />
            </a>

            {/* Mobile Menu Button */}
            <button
              id="menuBtn"
              onClick={toggleMobileMenu}
              className="grid h-10 w-10 place-items-center rounded-lg border border-white/20 text-white lg:hidden hover:border-lime hover:text-lime transition-colors"
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
        <div className="min-h-full flex flex-col justify-between p-6 pt-28 pb-8 max-w-md mx-auto">
          <div>
            <div className="mb-6 p-4 rounded-xl bg-white/5 border border-white/10 text-center">
              <p className="text-xs font-bold text-lime uppercase tracking-wider">Direct Texas Assistance</p>
              <a href="tel:4692157794" className="mt-1 inline-flex items-center gap-2 text-lg font-black text-white hover:text-lime transition-colors">
                <Phone className="w-4 h-4 text-lime" /> (469) 215-7794
              </a>
            </div>

            <ul className="flex flex-col gap-3 font-display text-xl font-bold text-white">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      document.body.style.overflow = '';
                    }}
                    className="block py-2.5 px-3 rounded-lg hover:bg-white/10 text-white/90 hover:text-lime transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-6 border-t border-white/10">
              <a
                href="#free-audit"
                onClick={() => {
                  setMobileMenuOpen(false);
                  document.body.style.overflow = '';
                }}
                className="btn-primary w-full text-center justify-center py-3.5 font-bold"
              >
                Check Your Online Score (Free Audit)
              </a>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-white/10 text-center text-xs text-white/50">
            <p className="font-semibold text-white">Materialize Marketing</p>
            <p className="mt-1">Prosper, Texas • hello@materializem.com</p>
            <p className="mt-1 text-lime/80 font-medium">Under Sands Planning Group</p>
          </div>
        </div>
      </div>
    </>
  );
};