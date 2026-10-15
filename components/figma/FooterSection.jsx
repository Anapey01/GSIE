'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Linkedin, Facebook } from 'lucide-react';

export default function FooterSection() {
  return (
    <footer className="w-full bg-[#001640] text-white pt-14 pb-8">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 flex flex-col gap-10">
        
        {/* Footer Information (4 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          
          {/* Col 1: Association Summary (410px in Figma, ~4-5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-5 max-w-[410px]">
            {/* Identity with preserved old design logo */}
            <div className="flex items-center gap-3.5">
              <div className="relative w-11 h-11 flex-shrink-0 flex items-center justify-center">
                <Image
                  src="/images/ghie-association-logo.png"
                  alt="Engineering Students' Association Logo"
                  width={44}
                  height={44}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-[15px] text-white leading-tight">
                  Engineering Students’ Association
                </span>
                <span className="font-sans font-semibold text-[11px] text-[#c6d5ed] tracking-wider uppercase">
                  STUDENT CHAPTER
                </span>
              </div>
            </div>

            {/* Purpose */}
            <p className="font-sans text-[15px] sm:text-[16px] text-[#c6d5ed] leading-relaxed max-w-[340px]">
              Connecting students. Developing potential. Engineering a better tomorrow, together.
            </p>

            {/* Social Channels */}
            <div className="flex items-center gap-5 text-[#c6d5ed]">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-[#05b0f0] transition-colors"
              >
                <Instagram className="w-5 h-5" strokeWidth={1.8} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-[#05b0f0] transition-colors"
              >
                <Linkedin className="w-5 h-5" strokeWidth={1.8} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-[#05b0f0] transition-colors"
              >
                <Facebook className="w-5 h-5" strokeWidth={1.8} />
              </a>
            </div>
          </div>

          {/* Col 2: Explore (150px in Figma, ~2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="font-sans font-bold text-[14px] text-white tracking-wide">
              Explore
            </h4>
            <ul className="flex flex-col gap-3 font-sans text-[14px] text-[#c6d5ed]">
              <li>
                <Link href="#about" className="hover:text-white transition-colors">
                  About the association
                </Link>
              </li>
              <li>
                <Link href="#executives" className="hover:text-white transition-colors">
                  Our executives
                </Link>
              </li>
              <li>
                <Link href="#news" className="hover:text-white transition-colors">
                  News &amp; stories
                </Link>
              </li>
              <li>
                <Link href="#events" className="hover:text-white transition-colors">
                  Events calendar
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Get Involved (150px in Figma, ~2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="font-sans font-bold text-[14px] text-white tracking-wide">
              Get involved
            </h4>
            <ul className="flex flex-col gap-3 font-sans text-[14px] text-[#c6d5ed]">
              <li>
                <Link href="#membership" className="hover:text-white transition-colors">
                  Become a member
                </Link>
              </li>
              <li>
                <Link href="#volunteer" className="hover:text-white transition-colors">
                  Volunteer with us
                </Link>
              </li>
              <li>
                <Link href="#share" className="hover:text-white transition-colors">
                  Share an idea
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white transition-colors">
                  Get in touch
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Parent Organisation Resource (255px in Figma, ~3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-3.5">
            <h4 className="font-sans font-bold text-[14px] text-white tracking-wide">
              The wider engineering community
            </h4>
            <p className="font-sans text-[14px] text-[#c6d5ed] leading-relaxed">
              Discover the Ghana Institution of Engineering and the profession beyond campus.
            </p>
            <a
              href="https://ghie.org.gh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-sans font-semibold text-[15px] text-[#05b0f0] hover:text-[#38c8ff] transition-colors mt-1"
            >
              <span>Visit ghie.org.gh</span>
              <span className="text-base">↗</span>
            </a>
          </div>

        </div>

        {/* Footer Legal Area */}
        <div className="flex flex-col gap-4 pt-6 border-t border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#c6d5ed]">
            <p className="font-sans">
              © 2026 Engineering Students’ Association · Student Chapter
            </p>
            <div className="flex items-center gap-6">
              <Link href="#privacy" className="hover:text-white transition-colors">
                Privacy policy
              </Link>
              <Link href="#accessibility" className="hover:text-white transition-colors">
                Accessibility
              </Link>
            </div>
          </div>

          {/* Concept disclosure */}
          <p className="font-sans text-[11px] text-[#8fa5c8] leading-normal">
            Independent student homepage concept, inspired by GhIE. No official school or chapter affiliation is claimed. Names, imagery, stories and events are illustrative.
          </p>
        </div>

      </div>
    </footer>
  );
}
