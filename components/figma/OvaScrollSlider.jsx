'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const OVA_SLIDES = [
  {
    category: 'CHAPTER VISION',
    title: 'Nurturing student engineers into world-class problem solvers, innovators and industrial leaders across Ghana and beyond.',
    image: '/images/slider_img_1.jpg',
  },
  {
    category: 'TECHNICAL EXCELLENCE',
    title: 'Bridging classroom theoretical principles with industrial machinery, modern automation and practical hands-on laboratories.',
    image: '/images/slider_img_2.jpg',
  },
  {
    category: 'COMMUNITY & IMPACT',
    title: 'A dynamic student brotherhood built on mentorship, peer tutoring, academic camaraderie and mutual professional elevation.',
    image: '/images/slider_img_3.jpg',
  },
  {
    category: 'INNOVATION & DISCOVERY',
    title: 'From sustainable power solutions to smart civil infrastructure, student projects tackling real community challenges.',
    image: '/images/slider_img_4.jpg',
  },
];

export default function OvaScrollSlider() {
  const containerRef = useRef(null);
  const sliderRef = useRef(null);
  const progressBarRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const slider = sliderRef.current;
    const progressBar = progressBarRef.current;
    if (!slider || !progressBar) return;

    const pinDistance = window.innerHeight * OVA_SLIDES.length * 0.9;

    const st = ScrollTrigger.create({
      trigger: slider,
      start: 'top top',
      end: `+=${pinDistance}px`,
      scrub: 0.6,
      pin: true,
      pinSpacing: true,
      onUpdate: (self) => {
        gsap.set(progressBar, {
          scaleY: self.progress,
        });

        const currentSlide = Math.min(
          Math.floor(self.progress * OVA_SLIDES.length),
          OVA_SLIDES.length - 1
        );

        setActiveSlide(currentSlide);
      },
    });

    return () => {
      st.kill();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#00102e] text-white overflow-hidden select-none"
    >
      <div
        ref={sliderRef}
        className="relative w-full h-screen overflow-hidden flex items-center justify-between"
      >
        {/* Background Crossfading Images with Kinetic Zoom */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          {OVA_SLIDES.map((slide, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-out ${
                idx === activeSlide
                  ? 'opacity-100 scale-100 z-10'
                  : 'opacity-0 scale-110 z-0 pointer-events-none'
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.category}
                fill
                priority={idx === 0}
                className="object-cover object-center brightness-[0.45] contrast-105"
              />
            </div>
          ))}
          {/* Deep Navy Gradient Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#001640] via-transparent to-[#001640]/60 z-10 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#001640]/80 via-transparent to-transparent z-10 pointer-events-none" />
        </div>

        {/* Content Container */}
        <div className="relative z-20 max-w-[1440px] w-full mx-auto px-6 sm:px-12 lg:px-20 flex items-center justify-between gap-10">
          
          {/* Left: Active Story Caption */}
          <div className="max-w-[700px] flex flex-col gap-4 sm:gap-6">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#05b0f0]" />
              <span className="font-mono text-xs sm:text-sm font-bold text-[#05b0f0] tracking-widest uppercase">
                {OVA_SLIDES[activeSlide].category}
              </span>
            </div>

            <h2 className="font-heading font-normal text-2xl sm:text-4xl lg:text-[44px] text-white tracking-tight leading-[1.25] transition-all duration-500">
              “{OVA_SLIDES[activeSlide].title}”
            </h2>

            <div className="flex items-center gap-4 text-xs font-mono text-[#c6d5ed]/70 pt-2">
              <span>AAMUSTED GhIE CHAPTER</span>
              <span>•</span>
              <span>SCROLL TO ADVANCE</span>
            </div>
          </div>

          {/* Right: Step Indicator & Vertical Progress Bar */}
          <div className="relative flex items-center gap-6 sm:gap-8 self-center pr-2">
            
            {/* Step Indices */}
            <div className="flex flex-col gap-6">
              {OVA_SLIDES.map((_, idx) => {
                const isActive = idx === activeSlide;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-3.5 justify-end font-mono text-xs sm:text-sm transition-all duration-300"
                  >
                    <span
                      className={`h-[1.5px] bg-[#05b0f0] transition-all duration-300 origin-right ${
                        isActive ? 'w-6 opacity-100' : 'w-2 opacity-20'
                      }`}
                    />
                    <span
                      className={`font-bold transition-all duration-300 ${
                        isActive
                          ? 'text-[#05b0f0] scale-110'
                          : 'text-white/40'
                      }`}
                    >
                      {(idx + 1).toString().padStart(2, '0')}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Vertical Progress Bar */}
            <div className="relative w-[2px] h-44 sm:h-56 bg-white/15 rounded-full overflow-hidden">
              <div
                ref={progressBarRef}
                className="absolute top-0 left-0 w-full h-full bg-[#05b0f0] origin-top rounded-full"
                style={{ transform: 'scaleY(0)', willChange: 'transform' }}
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
