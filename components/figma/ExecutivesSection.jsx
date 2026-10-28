'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const EXECUTIVES = [
  {
    role: 'President',
    name: 'Emmanuel Sarfo Kantanka',
    discipline: 'Chapter Leadership',
    image: '/images/executives/emmanuel-sarfo-kantanka.jpg',
  },
  {
    role: 'Vice President',
    name: 'Lois Oforiwaa',
    discipline: 'Executive Council',
    image: '/images/executives/lois-oforiwaa.jpg',
  },
  {
    role: 'General Secretary',
    name: 'Amos Kwasi Nyarko Boamah',
    discipline: 'Secretariat & Records',
    image: '/images/executives/amos-kwasi-nyarko-boamah.jpg',
  },
  {
    role: 'Media Head',
    name: 'Elizabeth',
    discipline: 'Media & Communications',
    image: '/images/executives/elizabeth.jpg',
  },
];

export default function ExecutivesSection() {
  return (
    <section id="executives" data-reveal className="w-full bg-white py-16 lg:py-20 border-b border-slate-100">
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
        <div data-stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {EXECUTIVES.map((exec, idx) => (
            <div
              key={idx}
              data-reveal
              className="flex flex-col group bg-white rounded-xl overflow-hidden amtrav-card-hover p-2 transition-all"
            >
              {/* Executive Portrait (302 x 284 in Figma) */}
              <div className="relative w-full aspect-[302/320] rounded-lg overflow-hidden bg-slate-100 shadow-sm">
                <Image
                  src={exec.image}
                  alt={`${exec.name} - ${exec.role}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Executive Details */}
              <div className="pt-4 pb-2 px-1 flex flex-col gap-1">
                <span className="font-sans font-bold text-[12px] text-[#05b0f0] tracking-wide uppercase">
                  {exec.role}
                </span>
                <h3 className="font-heading font-semibold text-[20px] text-[#001e5a] leading-snug">
                  {exec.name}
                </h3>
                <p className="font-sans text-[14px] text-[#617086]">
                  {exec.discipline}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Leadership Note */}
        <div className="pt-2">
          <p className="font-sans text-[12px] text-[#617086]">
            Chapter Executive Council • Leading with purpose, innovation and dedication.
          </p>
        </div>

      </div>
    </section>
  );
}
