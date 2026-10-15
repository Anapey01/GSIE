'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

const CALENDAR_WEEKS = [
  // Week 1
  [
    { day: 28, isPrev: true },
    { day: 29, isPrev: true },
    { day: 30, isPrev: true },
    { day: 1 },
    { day: 2 },
    { day: 3 },
    { day: 4 },
  ],
  // Week 2
  [
    { day: 5 },
    { day: 6 },
    { day: 7 },
    { day: 8 },
    { day: 9 },
    { day: 10 },
    { day: 11 },
  ],
  // Week 3
  [
    { day: 12 },
    { day: 13 },
    { day: 14 },
    { day: 15, isToday: true },
    { day: 16, isEvent: true },
    { day: 17 },
    { day: 18 },
  ],
  // Week 4
  [
    { day: 19 },
    { day: 20 },
    { day: 21, isEvent: true },
    { day: 22 },
    { day: 23 },
    { day: 24 },
    { day: 25 },
  ],
  // Week 5
  [
    { day: 26 },
    { day: 27 },
    { day: 28, isEvent: true },
    { day: 29 },
    { day: 30 },
    { day: 31 },
    { day: 1, isNext: true },
  ],
];

const UPCOMING_EVENTS = [
  {
    day: '16',
    weekday: 'FRI',
    category: 'HANDS-ON WORKSHOP',
    title: 'Build lab: Intro to Arduino',
    venue: '2:00 PM – 4:30 PM  •  Engineering Makerspace',
  },
  {
    day: '21',
    weekday: 'WED',
    category: 'CAREERS & CONNECTIONS',
    title: 'Engineering your next chapter',
    venue: '5:00 PM – 6:30 PM  •  Main Lecture Theatre',
  },
  {
    day: '28',
    weekday: 'WED',
    category: 'COMMUNITY',
    title: 'Ideas night: From what if to why not',
    venue: '6:00 PM – 8:00 PM  •  Student Innovation Hub',
  },
];

export default function EventsCalendarSection() {
  const [selectedDay, setSelectedDay] = useState(16);

  return (
    <section id="events" className="w-full bg-white py-16 lg:py-20 border-b border-slate-100">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 flex flex-col gap-8 lg:gap-10">
        
        {/* Section Introduction */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-[800px] flex flex-col gap-3">
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5">
              <div className="w-[24px] h-[3px] bg-[#05b0f0] rounded-full" />
              <span className="font-sans font-bold text-[12px] text-[#001e5a] tracking-[0.08em] uppercase">
                MAKE TIME FOR WHAT’S NEXT
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-heading font-semibold text-3xl sm:text-4xl lg:text-[36px] text-[#001e5a] tracking-tight leading-tight">
              Good things happen when you show up.
            </h2>

            {/* Description */}
            <p className="font-sans text-base sm:text-[17px] text-[#617086] leading-relaxed">
              Workshops, conversations and moments that bring our community together.
            </p>
          </div>

          {/* Section Link */}
          <Link
            href="#events"
            className="inline-flex items-center gap-2.5 text-[#001e5a] hover:text-[#05b0f0] font-sans font-bold text-[16px] transition-colors pb-1 flex-shrink-0 group"
          >
            <span>View all events</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Events Layout (2 columns: Month Calendar + Upcoming Events) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          
          {/* Month Calendar (596px in Figma, ~5 cols in 12-col grid) */}
          <div className="lg:col-span-5 w-full bg-white border border-slate-200 rounded-[8px] p-6 sm:p-7 shadow-xs">
            {/* Month Navigation */}
            <div className="flex items-center justify-between pb-5 border-b border-slate-100">
              <h3 className="font-heading font-semibold text-[21px] sm:text-[23px] text-[#001e5a]">
                October 2026
              </h3>
              <div className="flex items-center gap-4 text-[#001e5a]">
                <button
                  type="button"
                  aria-label="Previous Month"
                  className="p-1 hover:text-[#05b0f0] transition-colors rounded hover:bg-slate-50"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  aria-label="Next Month"
                  className="p-1 hover:text-[#05b0f0] transition-colors rounded hover:bg-slate-50"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Weekday Headings */}
            <div className="grid grid-cols-7 pt-4 pb-2 text-center">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                <span
                  key={day}
                  className="font-sans font-semibold text-[12px] text-[#617086]"
                >
                  {day}
                </span>
              ))}
            </div>

            {/* Calendar Weeks */}
            <div className="flex flex-col gap-1 py-1">
              {CALENDAR_WEEKS.map((week, wIdx) => (
                <div key={wIdx} className="grid grid-cols-7 text-center">
                  {week.map((item, dIdx) => {
                    const isMuted = item.isPrev || item.isNext;
                    const isSelected = selectedDay === item.day && !isMuted;

                    return (
                      <div
                        key={dIdx}
                        onClick={() => !isMuted && setSelectedDay(item.day)}
                        className="h-[48px] sm:h-[51px] flex flex-col items-center justify-center cursor-pointer group"
                      >
                        <div
                          className={`w-[36px] h-[36px] rounded-full flex items-center justify-center text-[15px] transition-all ${
                            item.isToday
                              ? 'bg-[#001e5a] text-white font-bold'
                              : item.isEvent
                              ? 'bg-[#eaf7fd] text-[#001e5a] font-bold group-hover:bg-[#05b0f0] group-hover:text-[#001e5a]'
                              : isMuted
                              ? 'text-[#b6beca] font-normal'
                              : 'text-[#001e5a] font-normal group-hover:bg-slate-100'
                          }`}
                        >
                          {item.day}
                        </div>
                        {/* Event marker dot */}
                        <div className="h-[4px] mt-0.5">
                          {item.isEvent && (
                            <div className="w-1 h-1 rounded-full bg-[#05b0f0]" />
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>

            {/* Calendar Legend */}
            <div className="pt-4 mt-2 border-t border-slate-100 flex items-center justify-between text-[12px] text-[#617086]">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#05b0f0]" />
                <span>Chapter event</span>
              </div>
              <div>Today: 15 October</div>
            </div>
          </div>

          {/* Upcoming Events List (628px in Figma, ~7 cols) */}
          <div className="lg:col-span-7 flex flex-col">
            {/* Upcoming Heading */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <h3 className="font-heading font-semibold text-[20px] sm:text-[22px] text-[#001e5a]">
                Coming up this month
              </h3>
              <span className="font-sans text-[12px] text-[#617086]">
                All times GMT
              </span>
            </div>

            {/* Events items */}
            <div className="flex flex-col">
              {UPCOMING_EVENTS.map((evt, idx) => (
                <div
                  key={idx}
                  className="py-5 sm:py-6 border-b border-slate-200 flex items-center gap-4 sm:gap-6 group hover:bg-slate-50/80 px-2 sm:px-3 rounded-md transition-colors cursor-pointer"
                >
                  {/* Date Badge (65 x 76 in Figma, bg: #eaf7fd) */}
                  <div className="w-[60px] sm:w-[65px] h-[70px] sm:h-[76px] rounded-[4px] bg-[#eaf7fd] flex flex-col items-center justify-center flex-shrink-0 group-hover:bg-[#05b0f0]/20 transition-colors">
                    <span className="font-heading font-semibold text-[24px] sm:text-[28px] text-[#001e5a] leading-none">
                      {evt.day}
                    </span>
                    <span className="font-sans font-bold text-[10px] sm:text-[11px] text-[#001e5a] tracking-wider uppercase mt-1">
                      {evt.weekday}
                    </span>
                  </div>

                  {/* Event Details */}
                  <div className="flex flex-col flex-grow gap-1">
                    <span className="font-sans font-bold text-[10px] text-[#617086] tracking-wider uppercase">
                      {evt.category}
                    </span>
                    <h4 className="font-heading font-semibold text-[17px] sm:text-[19px] text-[#001e5a] group-hover:text-[#05b0f0] transition-colors leading-snug">
                      {evt.title}
                    </h4>
                    <p className="font-sans text-[13px] sm:text-[14px] text-[#617086]">
                      {evt.venue}
                    </p>
                  </div>

                  {/* Action Icon */}
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-slate-400 group-hover:text-[#001e5a] group-hover:bg-white transition-all">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              ))}
            </div>

            {/* Sample Events Note */}
            <div className="pt-4">
              <p className="font-sans text-[12px] text-[#617086]">
                Illustrative events and venues • A sample programme for the student chapter.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
