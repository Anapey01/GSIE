'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import gsap from 'gsap';

const EXECUTIVES = [
  {
    role: 'President',
    name: 'Emmanuel Sarfo Kantanka',
    image: '/images/executives/emmanuel-sarfo-kantanka.jpg',
  },
  {
    role: 'Vice President',
    name: 'Lois Oforiwaa',
    image: '/images/executives/lois-oforiwaa.jpg',
  },
  {
    role: 'General Secretary',
    name: 'Amos Kwasi Nyarko Boamah',
    image: '/images/executives/amos-kwasi-nyarko-boamah.jpg',
  },
  {
    role: 'Media Head',
    name: 'Elizabeth',
    image: '/images/executives/elizabeth.jpg',
  },
];

// Flatter, elegant arc configuration
const SLIDE_WIDTH = 290;
const SLIDE_HEIGHT = 380;
const SLIDE_GAP = 180;
const ARC_DEPTH = 50;     // Drastically reduced steepness (was 180-200)
const CENTER_LIFT = 35;   // Gentle subtle lift (was 90-100)
const SCROLL_LERP = 0.06;

const SLIDES = [...EXECUTIVES, ...EXECUTIVES];
const SLIDE_COUNT = SLIDES.length;

export default function ExecutivesSection() {
  const containerRef = useRef(null);
  const slidesRef = useRef([]);
  const [activeTitle, setActiveTitle] = useState(EXECUTIVES[0]);

  const scrollTargetRef = useRef(0);
  const scrollCurrentRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    const slideElements = slidesRef.current;
    if (!container) return;

    const trackWidth = SLIDE_COUNT * SLIDE_GAP;
    let windowWidth = container.clientWidth || window.innerWidth;
    let windowHeight = container.clientHeight || 560;
    let windowCenterX = windowWidth / 2;
    let arcBaselineY = windowHeight * 0.45;

    function computeSlideTransform(slideIndex, scrollOffset) {
      let wrappedOffsetX =
        (((slideIndex * SLIDE_GAP - scrollOffset) % trackWidth) + trackWidth) %
        trackWidth;
      if (wrappedOffsetX > trackWidth / 2) wrappedOffsetX -= trackWidth;

      const slideCenterX = windowCenterX + wrappedOffsetX;
      const normalizedDist =
        (slideCenterX - windowCenterX) / (windowWidth * 0.5);
      const absDist = Math.min(Math.abs(normalizedDist), 1.3);

      // Flatter, subtle scale drop-off (0.32) so side cards maintain full stature
      const scaleFactor = Math.max(1 - absDist * 0.32, 0.68);
      const scaledWidth = SLIDE_WIDTH * scaleFactor;
      const scaledHeight = SLIDE_HEIGHT * scaleFactor;

      const clampedDist = Math.min(absDist, 1);
      // Gentle flat arc formula
      const arcDropY = (1 - Math.cos(clampedDist * Math.PI)) * 0.5 * ARC_DEPTH;
      const centerLiftY = Math.max(1 - absDist * 2, 0) * CENTER_LIFT;

      return {
        x: slideCenterX - scaledWidth / 2,
        y: arcBaselineY - scaledHeight / 2 + arcDropY - centerLiftY,
        width: scaledWidth,
        height: scaledHeight,
        zIndex: Math.round((1 - absDist) * 100),
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
        gsap.set(slideEl, { x, y, width, height, zIndex });
      });
    }

    layoutSlides(0);

    let activeSlideIndex = -1;
    function syncActiveTitle(scrollOffset) {
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
        setActiveTitle(SLIDES[closestIndex]);
      }
    }

    const onWheel = (e) => {
      e.preventDefault();
      scrollTargetRef.current += e.deltaY * 0.6;
    };

    let touchStartX = 0;
    const onTouchStart = (e) => {
      touchStartX = e.touches[0].clientX;
    };

    const onTouchMove = (e) => {
      e.preventDefault();
      const touchCurrentX = e.touches[0].clientX;
      scrollTargetRef.current += (touchStartX - touchCurrentX) * 1.3;
      touchStartX = touchCurrentX;
    };

    container.addEventListener('wheel', onWheel, { passive: false });
    container.addEventListener('touchstart', onTouchStart);
    container.addEventListener('touchmove', onTouchMove, { passive: false });

    let rafId;
    function animate() {
      scrollCurrentRef.current +=
        (scrollTargetRef.current - scrollCurrentRef.current) * SCROLL_LERP;

      layoutSlides(scrollCurrentRef.current);
      syncActiveTitle(scrollCurrentRef.current);

      rafId = requestAnimationFrame(animate);
    }

    animate();

    const onResize = () => {
      windowWidth = container.clientWidth || window.innerWidth;
      windowHeight = container.clientHeight || 560;
      windowCenterX = windowWidth / 2;
      arcBaselineY = windowHeight * 0.45;
    };

    window.addEventListener('resize', onResize);

    return () => {
      container.removeEventListener('wheel', onWheel);
      container.removeEventListener('touchstart', onTouchStart);
      container.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const slidePrev = () => {
    scrollTargetRef.current -= SLIDE_GAP;
  };

  const slideNext = () => {
    scrollTargetRef.current += SLIDE_GAP;
  };

  return (
    <section
      id="executives"
      data-reveal
      className="relative w-full bg-[#001e5a] text-white py-14 sm:py-20 lg:py-24 border-b border-white/10 overflow-hidden select-none"
    >
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#05b0f0]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-20 flex flex-col gap-6 relative z-10">
        
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
              Drag or swipe to explore our leadership team.
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

        {/* Flatter Arc Stage */}
        <div
          ref={containerRef}
          className="relative w-full h-[520px] sm:h-[550px] lg:h-[570px] overflow-hidden cursor-grab active:cursor-grabbing"
        >
          {SLIDES.map((exec, idx) => (
            <div
              key={idx}
              ref={(el) => (slidesRef.current[idx] = el)}
              className="absolute top-0 left-0 rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_25px_50px_rgba(0,0,0,0.7)] will-change-transform bg-black border border-white/20"
              style={{
                width: `${SLIDE_WIDTH}px`,
                height: `${SLIDE_HEIGHT}px`,
              }}
            >
              <Image
                src={exec.image}
                alt={exec.name}
                fill
                sizes="340px"
                className="object-cover object-top pointer-events-none"
                priority={idx < 4}
              />
            </div>
          ))}

          {/* Centered Title */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center text-center z-40 pointer-events-none w-full px-4">
            <span className="text-xs sm:text-sm font-bold text-[#05b0f0] tracking-widest uppercase mb-1 drop-shadow-sm">
              {activeTitle.role}
            </span>
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight drop-shadow-md">
              {activeTitle.name}
            </h3>
          </div>
        </div>

      </div>
    </section>
  );
}
