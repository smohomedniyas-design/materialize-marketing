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
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              <span>Prosper, TX &amp; Dallas-Fort Worth</span>
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5 text-slate-400 border-l border-slate-700 pl-4">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Backed by Sands Planning Group</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="tel:4692157794"
              className="inline-flex items-center gap-1.5 font-bold text-white hover:text-blue-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span>(469) 215-7794</span>
            </a>
            <span className="hidden md:inline text-slate-500">|</span>
            <span className="hidden md:inline text-slate-300">Mon - Fri: 8am - 6pm CST</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        id="siteHeader"
        className={`sticky top-0 z-50 transition-all duration-200 bg-white/95 backdrop-blur-md border-b border-slate-200/90 ${
          isScrolled ? 'py-3 shadow-md' : 'py-4'
        }`}
      >
        <nav
          className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 lg:px-8"
          aria-label="Primary"
        >
          {/* Logo */}
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
              <span className="block font-display text-lg font-black tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                MATERIALIZE
              </span>
              <span className="block text-[10px] font-extrabold uppercase tracking-[0.24em] text-blue-600">
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
                    className={`transition-colors duration-150 ${
                      isActive
                        ? 'text-blue-600 font-bold'
                        : 'text-slate-700 hover:text-blue-600'
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
              className="hidden xl:inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 px-3.5 py-2 rounded-lg transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-blue-600" />
              <span>(469) 215-7794</span>
            </a>

            <a
              href="#free-audit"
              className="btn-primary !py-2.5 !px-5 !text-xs sm:!text-sm whitespace-nowrap"
            >
              Get Free Audit
              <ArrowUpRight className="w-4 h-4 ml-0.5" />
            </a>

            {/* Mobile Menu Button */}
            <button
              id="menuBtn"
              onClick={toggleMobileMenu}
              className="grid h-10 w-10 place-items-center rounded-lg border border-slate-300 text-slate-800 lg:hidden hover:border-blue-600 hover:text-blue-600 transition-colors"
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
        className={`fixed inset-0 z-40 bg-white overflow-y-auto transition-all duration-300 lg:hidden ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        aria-label="Mobile navigation"
      >
        <div className="min-h-full flex flex-col justify-between p-6 pt-28 pb-8 max-w-md mx-auto">
          <div>
            <div className="mb-6 p-4 rounded-xl bg-blue-50 border border-blue-100 text-center">
              <p className="text-xs font-bold text-blue-900 uppercase tracking-wider">Direct Assistance</p>
              <a href="tel:4692157794" className="mt-1 inline-flex items-center gap-2 text-lg font-black text-blue-600">
                <Phone className="w-4 h-4" /> (469) 215-7794
              </a>
            </div>

            <ul className="flex flex-col gap-3 font-display text-xl font-bold text-slate-900">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      document.body.style.overflow = '';
                    }}
                    className="block py-2.5 px-3 rounded-lg hover:bg-slate-50 text-slate-800 hover:text-blue-600 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-6 border-t border-slate-200">
              <a
                href="#free-audit"
                onClick={() => {
                  setMobileMenuOpen(false);
                  document.body.style.overflow = '';
                }}
                className="btn-primary w-full text-center justify-center py-3.5 font-bold"
              >
                Check Your Online Score (Free)
              </a>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-slate-200 text-center text-xs text-slate-500">
            <p className="font-semibold text-slate-700">Materialize Marketing</p>
            <p className="mt-1">Prosper, Texas • hello@materializem.com</p>
            <p className="mt-1 text-slate-400">Under Sands Planning Group</p>
          </div>
        </div>
      </div>
    </>
  );
};