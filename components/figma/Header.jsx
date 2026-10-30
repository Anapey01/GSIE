'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Menu, X } from 'lucide-react';

export default function Header({ onOpenPortal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full flex flex-col z-50 sticky top-0 shadow-md">
      {/* 1. Slim Utility Announcement Bar (Solid Deep Navy) */}
      <div className="w-full bg-[#001640] text-white border-b border-white/10">
        <div className="max-w-[1440px] mx-auto h-9 px-4 sm:px-8 lg:px-12 flex items-center justify-between text-[13px] sm:text-[14px]">
          {/* Chapter Notice with live dot */}
          <div className="flex items-center gap-2.5 text-[#c6d5ed] font-medium truncate">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#05b0f0] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#05b0f0]" />
            </span>
            <span>GhIE Student Chapter · A community of thinkers, makers &amp; tomorrow’s engineers.</span>
          </div>

          {/* Quick External Links */}
          <div className="hidden sm:flex items-center gap-6 text-[#c6d5ed]">
            <a
              href="https://ghie.org.gh"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1 font-medium"
            >
              <span>Explore GhIE</span>
              <span className="text-[12px] text-[#05b0f0]">↗</span>
            </a>
            <span className="text-white/20">|</span>
            <a
              href="#contact"
              className="hover:text-[#05b0f0] transition-colors font-medium"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar (100% Solid Crisp White — ZERO Transparency / Glassmorphism) */}
      <div className="w-full bg-white border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto h-[78px] sm:h-[82px] px-4 sm:px-8 lg:px-12 flex items-center justify-between">
          
          {/* Left: Brand Identity */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3.5 shrink min-w-0 group">
            {/* Dual Institutional Logo Lockup from initial commits */}
            <div className="flex items-center gap-2 sm:gap-2.5 shrink-0 py-1">
              <div className="relative w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0 flex items-center justify-center p-0.5 rounded-lg sm:rounded-xl bg-slate-50 border border-slate-200 group-hover:border-[#05b0f0]/60 transition-colors shadow-xs">
                <Image
                  src="/images/ghie-association-logo.png"
                  alt="Ghana Institution of Engineering (GhIE)"
                  width={40}
                  height={40}
                  className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-300"
                  priority
                />
              </div>

              <div className="h-5 sm:h-6 w-[1.5px] bg-slate-200 hidden xs:block" />

              <div className="relative w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0 hidden xs:flex items-center justify-center p-0.5 rounded-lg sm:rounded-xl bg-slate-50 border border-slate-200 group-hover:border-[#05b0f0]/60 transition-colors shadow-xs">
                <Image
                  src="/images/school-logo.png"
                  alt="AAMUSTED University"
                  width={40}
                  height={40}
                  className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-300"
                  priority
                />
              </div>
            </div>
            
            <div className="flex flex-col min-w-0">
              <span className="font-heading font-extrabold text-[14px] xs:text-[15px] sm:text-[18px] lg:text-[20px] text-[#001e5a] tracking-tight truncate leading-tight group-hover:text-[#05b0f0] transition-colors">
                Engineering Students’ Association
              </span>
              <span className="font-mono text-[9px] xs:text-[10px] sm:text-[11px] lg:text-[12px] font-bold text-[#617086] tracking-wider uppercase truncate">
                GhIE Student Chapter · AAMUSTED
              </span>
            </div>
          </Link>

          {/* Right: Desktop Navigation Links & Action CTA */}
          <div className="hidden lg:flex items-center gap-7 xl:gap-8 shrink-0">
            <nav aria-label="Main Navigation" className="flex items-center gap-1 xl:gap-2">
              <Link
                href="/"
                className="relative px-4 py-2 text-[16px] font-bold text-[#001e5a] hover:text-[#05b0f0] transition-colors whitespace-nowrap flex items-center group"
              >
                <span>Home</span>
                <span className="absolute bottom-0 left-4 right-4 h-[2.5px] bg-[#05b0f0] rounded-full" />
              </Link>

              <Link
                href="#about"
                className="px-4 py-2 text-[16px] font-semibold text-[#475569] hover:text-[#001e5a] hover:bg-slate-50 rounded-lg transition-colors whitespace-nowrap"
              >
                About us
              </Link>

              <Link
                href="#executives"
                className="px-4 py-2 text-[16px] font-semibold text-[#475569] hover:text-[#001e5a] hover:bg-slate-50 rounded-lg transition-colors whitespace-nowrap"
              >
                Executives
              </Link>

              <Link
                href="#news"
                className="px-4 py-2 text-[16px] font-semibold text-[#475569] hover:text-[#001e5a] hover:bg-slate-50 rounded-lg transition-colors whitespace-nowrap"
              >
                News &amp; Stories
              </Link>

              <Link
                href="#events"
                className="px-4 py-2 text-[16px] font-semibold text-[#475569] hover:text-[#001e5a] hover:bg-slate-50 rounded-lg transition-colors whitespace-nowrap"
              >
                Events
              </Link>
            </nav>

            {/* Action CTA Button */}
            <button
              type="button"
              onClick={() => onOpenPortal ? onOpenPortal() : null}
              className="group inline-flex items-center justify-center gap-2.5 bg-[#05b0f0] hover:bg-[#049ad3] text-[#001e5a] font-sans font-bold text-[16px] px-6 py-3 rounded-full shadow-md active:scale-95 transition-all cursor-pointer whitespace-nowrap shrink-0"
            >
              <span>Become a member</span>
              <ArrowUpRight className="w-4 h-4 text-[#001e5a] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" strokeWidth={2.4} />
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="flex lg:hidden items-center gap-2 shrink-0">
            <button
              onClick={() => onOpenPortal ? onOpenPortal() : null}
              className="inline-flex items-center justify-center gap-1 bg-[#05b0f0] text-[#001e5a] font-sans font-bold text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-xs active:scale-95 transition-transform shrink-0"
            >
              <span>Join</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#001e5a]" strokeWidth={2.4} />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 sm:p-2 rounded-lg text-[#001e5a] hover:bg-slate-100 transition-colors shrink-0"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* 3. Mobile Menu Drawer (Solid White) */}
      {mobileMenuOpen && (
        <div className="lg:hidden w-full bg-white border-b border-slate-200 px-6 py-6 flex flex-col gap-4 shadow-xl animate-in fade-in slide-in-from-top-3 duration-200">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="font-sans font-bold text-[18px] text-[#001e5a] flex items-center justify-between py-2.5 border-b border-slate-100"
          >
            <span>Home</span>
            <div className="w-2.5 h-2.5 rounded-full bg-[#05b0f0]" />
          </Link>
          <Link
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="font-sans font-semibold text-[17px] text-[#475569] hover:text-[#001e5a] py-2.5 border-b border-slate-100"
          >
            About us
          </Link>
          <Link
            href="#executives"
            onClick={() => setMobileMenuOpen(false)}
            className="font-sans font-semibold text-[17px] text-[#475569] hover:text-[#001e5a] py-2.5 border-b border-slate-100"
          >
            Executives
          </Link>
          <Link
            href="#news"
            onClick={() => setMobileMenuOpen(false)}
            className="font-sans font-semibold text-[17px] text-[#475569] hover:text-[#001e5a] py-2.5 border-b border-slate-100"
          >
            News &amp; Stories
          </Link>
          <Link
            href="#events"
            onClick={() => setMobileMenuOpen(false)}
            className="font-sans font-semibold text-[17px] text-[#475569] hover:text-[#001e5a] py-2.5 border-b border-slate-100"
          >
            Events
          </Link>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              if (onOpenPortal) onOpenPortal();
            }}
            className="w-full mt-3 inline-flex items-center justify-center gap-2 bg-[#05b0f0] text-[#001e5a] font-sans font-bold text-[16px] py-3.5 rounded-full shadow-md"
          >
            <span>Become a member</span>
            <ArrowUpRight className="w-4 h-4 text-[#001e5a]" strokeWidth={2.4} />
          </button>
        </div>
      )}
    </header>
  );
}
