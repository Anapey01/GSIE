'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import gsap from 'gsap';

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

const SLIDES = [...EXECUTIVES, ...EXECUTIVES, ...EXECUTIVES];
const SLIDE_COUNT = SLIDES.length;
const SCROLL_LERP = 0.08;

export default function ExecutivesSection() {
  const containerRef = useRef(null);
  const slidesRef = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollTargetRef = useRef(0);
  const scrollCurrentRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    const slideElements = slidesRef.current;
    if (!container) return;

    let containerWidth = container.clientWidth || window.innerWidth;
    let isMobile = containerWidth < 768;

    let slideWidth = isMobile ? 180 : 250;
    let slideHeight = isMobile ? 240 : 340;
    let slideGap = isMobile ? 100 : 150;
    let arcDepth = isMobile ? 80 : 140;
    let centerLift = isMobile ? 35 : 60;

    let trackWidth = SLIDE_COUNT * slideGap;
    let windowCenterX = containerWidth / 2;
    let arcBaselineY = isMobile ? 140 : 185;

    function computeSlideTransform(slideIndex, scrollOffset) {
      let wrappedOffsetX =
        (((slideIndex * slideGap - scrollOffset) % trackWidth) + trackWidth) %
        trackWidth;
      if (wrappedOffsetX > trackWidth / 2) wrappedOffsetX -= trackWidth;

      const slideCenterX = windowCenterX + wrappedOffsetX;
      const normalizedDist =
        (slideCenterX - windowCenterX) / (containerWidth * 0.45);
      const absDist = Math.min(Math.abs(normalizedDist), 1.3);

      const scaleFactor = Math.max(
        1 - absDist * (isMobile ? 0.38 : 0.55),
        isMobile ? 0.58 : 0.45
      );
      const scaledWidth = slideWidth * scaleFactor;
      const scaledHeight = slideHeight * scaleFactor;

      const clampedDist = Math.min(absDist, 1);
      const arcDropY = (1 - Math.cos(clampedDist * Math.PI)) * 0.5 * arcDepth;
      const centerLiftY = Math.max(1 - absDist * 2, 0) * centerLift;

      return {
        x: slideCenterX - scaledWidth / 2,
        y: arcBaselineY - scaledHeight / 2 + arcDropY - centerLiftY,
        width: scaledWidth,
        height: scaledHeight,
        zIndex: Math.round((1.5 - absDist) * 100),
        distanceFromCenter: Math.abs(wrappedOffsetX),
      };
    }

    function layoutSlides(scrollOffset) {
      slideElements.forEach((slideEl, i) => {
        if (!slideEl) return;
        const { x, y, width, height, zIndex } = computeSlideTransform(
          i,
          scrollOffset
        );
        gsap.set(slideEl, {
          x,
          y,
          width,
          height,
          zIndex,
        });
      });
    }

    let activeSlideIndex = -1;
    function syncActiveSlide(scrollOffset) {
      let closestIndex = 0;
      let closestDist = Infinity;

      slideElements.forEach((_, i) => {
        const { distanceFromCenter } = computeSlideTransform(i, scrollOffset);
        if (distanceFromCenter < closestDist) {
          closestDist = distanceFromCenter;
          closestIndex = i;
        }
      });

      if (closestIndex !== activeSlideIndex) {
        activeSlideIndex = closestIndex;
        setActiveIndex(closestIndex % EXECUTIVES.length);
      }
    }

    const onWheel = (e) => {
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      if (Math.abs(delta) > 4) {
        scrollTargetRef.current += delta * 0.8;
      }
    };

    let isDragging = false;
    let dragStartX = 0;

    const onMouseDown = (e) => {
      isDragging = true;
      dragStartX = e.clientX;
    };

    const onMouseMove = (e) => {
      if (!isDragging) return;
      const diff = dragStartX - e.clientX;
      scrollTargetRef.current += diff * 1.3;
      dragStartX = e.clientX;
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    let touchStartX = 0;
    const onTouchStart = (e) => {
      touchStartX = e.touches[0].clientX;
    };

    const onTouchMove = (e) => {
      const touchCurrentX = e.touches[0].clientX;
      scrollTargetRef.current += (touchStartX - touchCurrentX) * 1.4;
      touchStartX = touchCurrentX;
    };

    container.addEventListener('wheel', onWheel, { passive: true });
    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    container.addEventListener('touchstart', onTouchStart, { passive: true });
    container.addEventListener('touchmove', onTouchMove, { passive: true });

    let rafId;
    function animate() {
      scrollCurrentRef.current +=
        (scrollTargetRef.current - scrollCurrentRef.current) * SCROLL_LERP;

      layoutSlides(scrollCurrentRef.current);
      syncActiveSlide(scrollCurrentRef.current);

      rafId = requestAnimationFrame(animate);
    }

    animate();

    const onResize = () => {
      containerWidth = container.clientWidth || window.innerWidth;
      isMobile = containerWidth < 768;

      slideWidth = isMobile ? 180 : 250;
      slideHeight = isMobile ? 240 : 340;
      slideGap = isMobile ? 100 : 150;
      arcDepth = isMobile ? 80 : 140;
      centerLift = isMobile ? 35 : 60;

      trackWidth = SLIDE_COUNT * slideGap;
      windowCenterX = containerWidth / 2;
      arcBaselineY = isMobile ? 140 : 185;
    };

    window.addEventListener('resize', onResize);

    return () => {
      container.removeEventListener('wheel', onWheel);
      container.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      container.removeEventListener('touchstart', onTouchStart);
      container.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const selectExec = (idx) => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const gap = isMobile ? 100 : 150;
    const diff = (idx - activeIndex + EXECUTIVES.length) % EXECUTIVES.length;
    const step = diff > EXECUTIVES.length / 2 ? diff - EXECUTIVES.length : diff;
    scrollTargetRef.current += step * gap;
  };

  const slidePrev = () => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    scrollTargetRef.current -= isMobile ? 100 : 150;
  };

  const slideNext = () => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    scrollTargetRef.current += isMobile ? 100 : 150;
  };

  const currentExec = EXECUTIVES[activeIndex] || EXECUTIVES[0];

  return (
    <section
      id="executives"
      data-reveal
      className="relative w-full bg-[#001e5a] text-white py-14 sm:py-20 lg:py-24 border-b border-white/10 overflow-hidden select-none"
    >
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#05b0f0]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#001640] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-20 flex flex-col gap-6 sm:gap-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5">
          <div className="max-w-[650px] flex flex-col gap-2.5">
            <div className="flex items-center gap-2.5">
              <div className="w-[22px] h-[3px] bg-[#05b0f0] rounded-full" />
              <span className="font-sans font-bold text-[11px] sm:text-[12px] text-[#05b0f0] tracking-[0.08em] uppercase">
                STUDENT-LED. STUDENT-FOCUSED.
              </span>
            </div>

            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-[40px] text-white tracking-tight leading-tight">
              Meet the executive council.
            </h2>

            <p className="font-sans text-sm sm:text-base text-[#c6d5ed] leading-relaxed">
              Drag or swipe the gallery, or click any leader below to focus.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-2.5 self-start sm:self-auto">
            <button
              onClick={slidePrev}
              aria-label="Previous executive"
              className="p-2.5 sm:p-3 rounded-full bg-white/10 hover:bg-[#05b0f0] hover:text-[#001e5a] text-white border border-white/20 transition-all shadow-md active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" strokeWidth={2.4} />
            </button>
            <button
              onClick={slideNext}
              aria-label="Next executive"
              className="p-2.5 sm:p-3 rounded-full bg-white/10 hover:bg-[#05b0f0] hover:text-[#001e5a] text-white border border-white/20 transition-all shadow-md active:scale-95 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" strokeWidth={2.4} />
            </button>
          </div>
        </div>

        {/* 3D Arc Stage (Pure clean photo slides with zero obstruction) */}
        <div
          ref={containerRef}
          className="relative w-full h-[300px] sm:h-[390px] lg:h-[430px] overflow-hidden cursor-grab active:cursor-grabbing"
        >
          {SLIDES.map((exec, idx) => (
            <div
              key={idx}
              ref={(el) => (slidesRef.current[idx] = el)}
              className="absolute top-0 left-0 rounded-2xl overflow-hidden shadow-[0_20px_45px_rgba(0,0,0,0.6)] border border-white/20 will-change-transform bg-[#001640]"
            >
              <Image
                src={exec.image}
                alt={exec.name}
                fill
                sizes="(max-width: 768px) 200px, 320px"
                className="object-cover object-top pointer-events-none"
                priority={idx < 4}
              />
            </div>
          ))}
        </div>

        {/* Redesigned Executive Spotlight Card (Modern Executive Badge Architecture) */}
        <div className="w-full max-w-[680px] mx-auto bg-gradient-to-b from-[#01256d] to-[#001847] border border-white/15 rounded-2xl p-6 sm:p-7 shadow-[0_20px_50px_-10px_rgba(0,10,40,0.5)] flex flex-col items-center text-center relative overflow-hidden backdrop-blur-md">
          {/* Subtle Top Ambient Glow Accent */}
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-48 h-24 bg-[#05b0f0]/30 rounded-full blur-2xl pointer-events-none" />

          {/* Active Role Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#05b0f0]/15 border border-[#05b0f0]/30 mb-3 shadow-inner">
            <span className="w-2 h-2 rounded-full bg-[#05b0f0] animate-pulse" />
            <span className="text-xs font-bold text-[#05b0f0] tracking-widest uppercase">
              {currentExec.role}
            </span>
          </div>

          {/* Active Name */}
          <h3 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-[34px] text-white tracking-tight leading-snug">
            {currentExec.name}
          </h3>

          {/* Discipline / Assignment */}
          <p className="font-sans text-sm sm:text-base text-[#c6d5ed] mt-1.5 font-medium">
            {currentExec.discipline} · GhIE AAMUSTED Chapter
          </p>

          {/* Quick Council Selector Tabs */}
          <div className="mt-6 pt-5 border-t border-white/10 w-full flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
            {EXECUTIVES.map((exec, idx) => {
              const active = idx === activeIndex;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => selectExec(idx)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    active
                      ? 'bg-[#05b0f0] text-[#001e5a] shadow-md font-bold scale-105'
                      : 'bg-white/5 text-[#c6d5ed] hover:bg-white/15 hover:text-white'
                  }`}
                >
                  {exec.role}
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
