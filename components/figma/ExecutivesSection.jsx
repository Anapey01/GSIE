'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const EXECUTIVES = [
  {
    role: 'President',
    name: 'Kwame Asare',
    discipline: 'Mechanical Engineering',
    image: '/images/figma/executive_portrait_af972c98.jpg',
  },
  {
    role: 'Vice President',
    name: 'Akosua Mensah',
    discipline: 'Civil Engineering',
    image: '/images/figma/executive_portrait_ec8d1904.jpg',
  },
  {
    role: 'General Secretary',
    name: 'Kofi Boateng',
    discipline: 'Electrical Engineering',
    image: '/images/figma/executive_portrait_9cba0824.jpg',
  },
  {
    role: 'Financial Secretary',
    name: 'Abena Owusu',
    discipline: 'Computer Engineering',
    image: '/images/figma/executive_portrait_f2e0b553.jpg',
  },
];

export default function ExecutivesSection() {
  return (
    <section id="executives" className="w-full bg-white py-16 lg:py-20 border-b border-slate-100">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 flex flex-col gap-8 lg:gap-10">
        
        {/* Section Introduction */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-[800px] flex flex-col gap-3">
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5">
              <div className="w-[24px] h-[3px] bg-[#05b0f0] rounded-full" />
              <span className="font-sans font-bold text-[12px] text-[#001e5a] tracking-[0.08em] uppercase">
                STUDENT-LED. STUDENT-FOCUSED.
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-heading font-semibold text-3xl sm:text-4xl lg:text-[36px] text-[#001e5a] tracking-tight leading-tight">
              Meet the team moving us forward.
            </h2>

            {/* Description */}
            <p className="font-sans text-base sm:text-[17px] text-[#617086] leading-relaxed">
              Your voice, represented. A leadership team here to listen, connect and make things happen.
            </p>
          </div>

          {/* Section Link */}
          <Link
            href="#executives"
            className="inline-flex items-center gap-2.5 text-[#001e5a] hover:text-[#05b0f0] font-sans font-bold text-[16px] transition-colors pb-1 flex-shrink-0 group"
          >
            <span>Meet the executives</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Executive Portraits Grid (4 columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {EXECUTIVES.map((exec, idx) => (
            <div
              key={idx}
              className="flex flex-col group bg-white rounded-md overflow-hidden"
            >
              {/* Executive Portrait (302 x 284 in Figma) */}
              <div className="relative w-full aspect-[302/284] rounded-[4px] overflow-hidden bg-slate-100">
                <Image
                  src={exec.image}
                  alt={`${exec.name} - ${exec.role}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Executive Details */}
              <div className="pt-5 flex flex-col gap-1.5">
                <span className="font-sans font-bold text-[12px] text-[#001e5a] tracking-wide uppercase">
                  {exec.role}
                </span>
                <h3 className="font-heading font-semibold text-[21px] text-[#001e5a] leading-snug">
                  {exec.name}
                </h3>
                <p className="font-sans text-[15px] text-[#617086]">
                  {exec.discipline}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Illustrative Leadership Note */}
        <div className="pt-2">
          <p className="font-sans text-[12px] text-[#617086]">
            Illustrative leadership • Sample names, roles and portraits for this homepage concept.
          </p>
        </div>

      </div>
    </section>
  );
}
