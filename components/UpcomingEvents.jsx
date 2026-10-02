'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const events = [
  {
    date: '16 – 20 March 2026',
    title: '56th GhIE Annual General Meeting & Young Engineers Forum',
    location: 'Volta Serene Hotel, Ho, Volta Region',
    description:
      'Theme: Engineering the Food Security and Sustainable Agriculture Value Chain.',
  },
  {
    date: 'May 2026',
    title: 'GhIE Professional Accreditation Prep Seminar',
    location: 'AAMUSTED Engineering Auditorium',
    description:
      'Guidance on Act 819 compliance, GhIE portfolio submission, and ethical practice.',
  },
  {
    date: 'July 2026',
    title: 'Industrial Infrastructure & Field Inspection Tour',
    location: 'Regional Infrastructure Sites',
    description:
      'On-site technical evaluation with practicing senior engineers across civil and electrical sectors.',
  },
];

export default function UpcomingEvents() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      '.event-row',
      { opacity: 0, y: 25 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-20 sm:py-32 bg-slate-50 border-y border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        {/* Minimalist Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm font-medium tracking-widest text-[#00a2e8] uppercase mb-3">
            CALENDAR
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0c2340] tracking-tight">
            Key Programs & Activities
          </h2>
        </div>

        {/* Minimalist Editorial Event List */}
        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {events.map((evt, idx) => (
            <div
              key={idx}
              className="event-row py-8 sm:py-10 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start"
            >
              <div className="md:col-span-3">
                <span className="text-sm font-semibold text-[#00a2e8] block">
                  {evt.date}
                </span>
                <span className="text-xs text-slate-500 mt-1 block">
                  {evt.location}
                </span>
              </div>

              <div className="md:col-span-9">
                <h3 className="text-lg sm:text-xl font-bold text-[#0c2340] mb-2">
                  {evt.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl">
                  {evt.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
