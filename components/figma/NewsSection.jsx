'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

const STORIES = [
  {
    category: 'INNOVATION',
    date: '08 Oct 2026',
    headline: 'Small prototypes. Big possibilities.',
    summary: 'Inside a student build session turning everyday challenges into practical engineering solutions.',
    readTime: '4 min read',
    image: '/images/figma/story_photograph_c6415f67.jpg',
  },
  {
    category: 'COMMUNITY',
    date: '02 Oct 2026',
    headline: 'A new semester. A place to belong.',
    summary: 'New faces, shared ambitions and the start of a stronger engineering community.',
    readTime: '3 min read',
    image: '/images/figma/story_photograph_3eeed8ec.jpg',
  },
  {
    category: 'OPPORTUNITIES',
    date: '28 Sep 2026',
    headline: 'Your next step starts with a mentor.',
    summary: 'How conversations with practising engineers can open up a world beyond the lecture hall.',
    readTime: '5 min read',
    image: '/images/figma/story_photograph_bc310f3c.jpg',
  },
];

export default function NewsSection() {
  return (
    <section id="news" className="w-full bg-[#f7f8f9] py-16 lg:py-20 border-b border-slate-200">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 flex flex-col gap-8 lg:gap-10">
        
        {/* Section Introduction */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-[800px] flex flex-col gap-3">
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5">
              <div className="w-[24px] h-[3px] bg-[#05b0f0] rounded-full" />
              <span className="font-sans font-bold text-[12px] text-[#001e5a] tracking-[0.08em] uppercase">
                THE CHAPTER JOURNAL
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-heading font-semibold text-3xl sm:text-4xl lg:text-[36px] text-[#001e5a] tracking-tight leading-tight">
              Ideas, people and progress.
            </h2>
          </div>

          {/* Section Link */}
          <Link
            href="#news"
            className="inline-flex items-center gap-2.5 text-[#001e5a] hover:text-[#05b0f0] font-sans font-bold text-[16px] transition-colors pb-1 flex-shrink-0 group"
          >
            <span>All news &amp; stories</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* News Grid (3 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STORIES.map((story, idx) => (
            <article
              key={idx}
              className="flex flex-col bg-white rounded-[8px] overflow-hidden border border-slate-200/70 shadow-sm hover:shadow-md transition-shadow group cursor-pointer"
            >
              {/* Story Photograph (410 x 230 in Figma) */}
              <div className="relative w-full h-[230px] overflow-hidden bg-slate-100">
                <Image
                  src={story.image}
                  alt={story.headline}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Story Content */}
              <div className="p-6 flex flex-col flex-grow justify-between gap-4">
                <div className="flex flex-col gap-3">
                  {/* Metadata */}
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-sans font-bold text-[11px] text-[#001e5a] tracking-wider uppercase">
                      {story.category}
                    </span>
                    <span className="font-sans text-[12px] text-[#617086]">
                      {story.date}
                    </span>
                  </div>

                  {/* Headline */}
                  <h3 className="font-heading font-semibold text-[22px] text-[#001e5a] leading-snug group-hover:text-[#05b0f0] transition-colors">
                    {story.headline}
                  </h3>

                  {/* Summary */}
                  <p className="font-sans text-[16px] text-[#617086] leading-relaxed">
                    {story.summary}
                  </p>
                </div>

                {/* Read Story Link */}
                <div className="pt-2 flex items-center justify-between text-[#617086] group-hover:text-[#001e5a] transition-colors border-t border-slate-100">
                  <span className="font-sans text-[13px]">{story.readTime}</span>
                  <ArrowUpRight className="w-5 h-5 group-hover:text-[#05b0f0] transition-colors" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Sample Stories Note */}
        <div className="pt-1">
          <p className="font-sans text-[12px] text-[#617086]">
            From the concept journal • Illustrative student stories.
          </p>
        </div>

      </div>
    </section>
  );
}
