'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Menu, X } from 'lucide-react';

export default function Header({ onOpenPortal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full flex flex-col z-50 sticky top-0 bg-white shadow-sm">
      {/* 1. Utility bar (1440 x 36px, bg: #001e5a) */}
      <div className="w-full bg-[#001e5a] text-white">
        <div className="max-w-[1440px] mx-auto h-9 px-4 sm:px-8 lg:px-20 flex items-center justify-between text-xs font-normal">
          {/* Community message */}
          <div className="text-white truncate">
            A community of thinkers, makers &amp; tomorrow’s engineers.
          </div>

          {/* Utility links */}
          <div className="hidden sm:flex items-center gap-6 text-xs">
            <a
              href="https://ghie.org.gh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c6d5ed] hover:text-white transition-colors flex items-center gap-1"
            >
              Explore GhIE <span className="text-sm">↗</span>
            </a>
            <a
              href="#contact"
              className="text-white hover:text-[#05b0f0] transition-colors"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main navigation (1440 x 100px, bg: #ffffff) */}
      <div className="w-full bg-white border-b border-slate-100">
        <div className="max-w-[1440px] mx-auto h-[90px] sm:h-[100px] px-4 sm:px-8 lg:px-20 flex items-center justify-between">
          {/* Association identity with existing logo */}
          <Link href="/" className="flex items-center gap-3.5 group">
            {/* Preserving user's original logo as strictly requested */}
            <div className="relative w-12 h-12 flex-shrink-0 flex items-center justify-center">
              <Image
                src="/images/ghie-association-logo.png"
                alt="Engineering Students' Association Logo"
                width={48}
                height={48}
                className="object-contain w-full h-full"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-[15px] sm:text-[16px] text-[#001e5a] tracking-tight leading-tight group-hover:text-[#05b0f0] transition-colors">
                Engineering Students’ Association
              </span>
              <span className="font-sans font-semibold text-[11px] sm:text-[12px] text-[#617086] tracking-wider uppercase">
                STUDENT CHAPTER
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links & Action */}
          <div className="hidden lg:flex items-center gap-7">
            {/* Home (active) */}
            <div className="flex flex-col items-center">
              <Link
                href="/"
                className="font-sans font-bold text-[15px] text-[#001e5a] pb-1 hover:text-[#05b0f0] transition-colors"
              >
                Home
              </Link>
              <div className="w-[22px] h-[2px] bg-[#05b0f0] rounded-full" />
            </div>

            <Link
              href="#about"
              className="font-sans font-medium text-[15px] text-[#001e5a] hover:text-[#05b0f0] transition-colors"
            >
              About us
            </Link>

            <Link
              href="#executives"
              className="font-sans font-medium text-[15px] text-[#001e5a] hover:text-[#05b0f0] transition-colors"
            >
              Executives
            </Link>

            <Link
              href="#news"
              className="font-sans font-medium text-[15px] text-[#001e5a] hover:text-[#05b0f0] transition-colors"
            >
              News
            </Link>

            <Link
              href="#events"
              className="font-sans font-medium text-[15px] text-[#001e5a] hover:text-[#05b0f0] transition-colors"
            >
              Events
            </Link>

            {/* Action CTA Button */}
            <button
              onClick={() => onOpenPortal ? onOpenPortal() : null}
              className="inline-flex items-center justify-center gap-3 bg-[#05b0f0] hover:bg-[#049ad3] text-[#001e5a] font-sans font-bold text-[16px] px-5 py-3 rounded-[4px] transition-all transform active:scale-95 shadow-sm cursor-pointer"
            >
              <span>Become a member</span>
              <ArrowUpRight className="w-5 h-5 text-[#001e5a]" strokeWidth={2.2} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={() => onOpenPortal ? onOpenPortal() : null}
              className="inline-flex items-center justify-center gap-1.5 bg-[#05b0f0] text-[#001e5a] font-sans font-bold text-xs px-3 py-2 rounded-[4px]"
            >
              <span>Join</span>
              <ArrowUpRight className="w-4 h-4 text-[#001e5a]" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#001e5a] hover:text-[#05b0f0] transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden w-full bg-white border-b border-slate-200 px-6 py-5 flex flex-col gap-4 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="font-sans font-bold text-[16px] text-[#001e5a] flex items-center justify-between"
          >
            <span>Home</span>
            <div className="w-2 h-2 rounded-full bg-[#05b0f0]" />
          </Link>
          <Link
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="font-sans font-medium text-[16px] text-[#001e5a] hover:text-[#05b0f0]"
          >
            About us
          </Link>
          <Link
            href="#executives"
            onClick={() => setMobileMenuOpen(false)}
            className="font-sans font-medium text-[16px] text-[#001e5a] hover:text-[#05b0f0]"
          >
            Executives
          </Link>
          <Link
            href="#news"
            onClick={() => setMobileMenuOpen(false)}
            className="font-sans font-medium text-[16px] text-[#001e5a] hover:text-[#05b0f0]"
          >
            News
          </Link>
          <Link
            href="#events"
            onClick={() => setMobileMenuOpen(false)}
            className="font-sans font-medium text-[16px] text-[#001e5a] hover:text-[#05b0f0]"
          >
            Events
          </Link>
          <div className="pt-2 border-t border-slate-100 flex flex-col gap-3">
            <a
              href="https://ghie.org.gh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#617086] flex items-center justify-between"
            >
              <span>Explore GhIE Parent Body</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenPortal) onOpenPortal();
              }}
              className="w-full flex items-center justify-center gap-2 bg-[#05b0f0] text-[#001e5a] font-sans font-bold text-[15px] py-3 rounded-[4px]"
            >
              <span>Become a member</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
