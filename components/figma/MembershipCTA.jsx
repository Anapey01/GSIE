'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function MembershipCTA({ onOpenPortal }) {
  return (
    <section id="membership" className="w-full bg-[#001e5a] text-white py-16 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10 lg:gap-14">
          
          {/* Left: Invitation Copy (w: 700px in Figma) */}
          <div className="max-w-[700px] flex flex-col gap-4 sm:gap-5">
            {/* Eyebrow */}
            <span className="font-sans font-bold text-[12px] text-[#05b0f0] tracking-[0.08em] uppercase">
              THERE’S A PLACE FOR YOU HERE.
            </span>

            {/* Invitation Heading */}
            <h2 className="font-heading font-semibold text-3xl sm:text-4xl lg:text-[44px] text-white leading-[1.15] tracking-tight">
              Don’t just study the future.<br />
              Help engineer it.
            </h2>

            {/* Invitation Description */}
            <p className="font-sans text-base sm:text-[18px] text-[#c6d5ed] leading-relaxed max-w-[610px]">
              Bring your curiosity. We’ll bring the community, opportunities and space to grow. Let’s build something that matters.
            </p>
          </div>

          {/* Right: Membership Actions */}
          <div className="flex flex-col items-start lg:pl-10 gap-4 flex-shrink-0">
            <button
              type="button"
              onClick={() => onOpenPortal ? onOpenPortal() : null}
              className="inline-flex items-center justify-center gap-3 bg-[#05b0f0] hover:bg-[#049ad3] text-[#001e5a] font-sans font-bold text-[16px] px-7 py-3.5 rounded-[4px] transition-all transform active:scale-95 shadow-lg cursor-pointer"
            >
              <span>Become a member</span>
              <ArrowUpRight className="w-5 h-5 text-[#001e5a]" strokeWidth={2.4} />
            </button>

            <span className="font-sans text-[14px] text-[#c6d5ed]">
              Your journey starts with a connection.
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
