'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
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

// Replicate to support smooth circular scrolling across the arc
const SLIDES = [...EXECUTIVES, ...EXECUTIVES, ...EXECUTIVES];
const SLIDE_COUNT = SLIDES.length;

const SLIDE_WIDTH = 260;
const SLIDE_HEIGHT = 350;
const SLIDE_GAP = 140;
const ARC_DEPTH = 180;
const CENTER_LIFT = 65;
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

    const trackWidth = SLIDE_COUNT * SLIDE_GAP;
    let containerWidth = container.clientWidth || window.innerWidth;
    let containerHeight = container.clientHeight || 560;
    let windowCenterX = containerWidth / 2;
    let arcBaselineY = containerHeight * 0.44;

    function computeSlideTransform(slideIndex, scrollOffset) {
      let wrappedOffsetX =
        (((slideIndex * SLIDE_GAP - scrollOffset) % trackWidth) + trackWidth) %
        trackWidth;
      if (wrappedOffsetX > trackWidth / 2) wrappedOffsetX -= trackWidth;

      const slideCenterX = windowCenterX + wrappedOffsetX;
      const normalizedDist = (slideCenterX - windowCenterX) / (containerWidth * 0.45);
      const absDist = Math.min(Math.abs(normalizedDist), 1.4);

      const scaleFactor = Math.max(1 - absDist * 0.45, 0.55);
      const scaledWidth = SLIDE_WIDTH * scaleFactor;
      const scaledHeight = SLIDE_HEIGHT * scaleFactor;

      const clampedDist = Math.min(absDist, 1);
      const arcDropY = (1 - Math.cos(clampedDist * Math.PI)) * 0.5 * ARC_DEPTH;
      const centerLiftY = Math.max(1 - absDist * 2, 0) * CENTER_LIFT;

      return {
        x: slideCenterX - scaledWidth / 2,
        y: arcBaselineY - scaledHeight / 2 + arcDropY - centerLiftY,
        width: scaledWidth,
        height: scaledHeight,
        zIndex: Math.round((1.5 - absDist) * 100),
        distanceFromCenter: Math.abs(wrappedOffsetX),
        opacity: Math.max(1 - absDist * 0.6, 0.35),
      };
    }

    function layoutSlides(scrollOffset) {
      slideElements.forEach((slideEl, i) => {
        if (!slideEl) return;
        const { x, y, width, height, zIndex, opacity } = computeSlideTransform(
          i,
          scrollOffset
        );
        gsap.set(slideEl, {
          x,
          y,
          width,
          height,
          zIndex,
          opacity,
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

    // Wheel listener
    const onWheel = (e) => {
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      if (Math.abs(delta) > 5) {
        scrollTargetRef.current += delta * 0.8;
      }
    };

    // Drag / Touch gestures
    let isDragging = false;
    let dragStartX = 0;

    const onMouseDown = (e) => {
      isDragging = true;
      dragStartX = e.clientX;
    };

    const onMouseMove = (e) => {
      if (!isDragging) return;
      const diff = dragStartX - e.clientX;
      scrollTargetRef.current += diff * 1.2;
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
      scrollTargetRef.current += (touchStartX - touchCurrentX) * 1.2;
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
      containerHeight = container.clientHeight || 560;
      windowCenterX = containerWidth / 2;
      arcBaselineY = containerHeight * 0.44;
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

  const slidePrev = () => {
    scrollTargetRef.current -= SLIDE_GAP;
  };

  const slideNext = () => {
    scrollTargetRef.current += SLIDE_GAP;
  };

  const currentExec = EXECUTIVES[activeIndex] || EXECUTIVES[0];

  return (
    <section id="executives" data-reveal className="relative w-full bg-[#001e5a] text-white py-16 lg:py-24 border-b border-white/10 overflow-hidden select-none">
      
      {/* Background Ambience & Grid Lines */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#05b0f0]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#001640] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 flex flex-col gap-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-[700px] flex flex-col gap-3">
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5">
              <div className="w-[24px] h-[3px] bg-[#05b0f0] rounded-full" />
              <span className="font-sans font-bold text-[12px] text-[#05b0f0] tracking-[0.08em] uppercase">
                STUDENT-LED. STUDENT-FOCUSED.
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[42px] text-white tracking-tight leading-tight">
              Meet the executive council.
            </h2>

            {/* Description */}
            <p className="font-sans text-base sm:text-[17px] text-[#c6d5ed] leading-relaxed">
              Drag or swipe to explore our leadership team dedicated to moving the chapter forward.
            </p>
          </div>

          {/* Slider Navigation Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={slidePrev}
              aria-label="Previous executive"
              className="p-3.5 rounded-full bg-white/10 hover:bg-[#05b0f0] hover:text-[#001e5a] text-white border border-white/20 transition-all shadow-md active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" strokeWidth={2.4} />
            </button>
            <button
              onClick={slideNext}
              aria-label="Next executive"
              className="p-3.5 rounded-full bg-white/10 hover:bg-[#05b0f0] hover:text-[#001e5a] text-white border border-white/20 transition-all shadow-md active:scale-95 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" strokeWidth={2.4} />
            </button>
          </div>
        </div>

        {/* 3D Arc Slider Stage — Clean seamless stage directly on background */}
        <div
          ref={containerRef}
          className="relative w-full h-[500px] sm:h-[550px] lg:h-[580px] overflow-hidden cursor-grab active:cursor-grabbing"
        >
          {/* Slides Track */}
          {SLIDES.map((exec, idx) => (
            <div
              key={idx}
              ref={(el) => (slidesRef.current[idx] = el)}
              className="absolute top-0 left-0 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-2 border-white/20 will-change-transform group bg-[#001640]"
              style={{
                width: `${SLIDE_WIDTH}px`,
                height: `${SLIDE_HEIGHT}px`,
              }}
            >
              <div className="relative w-full h-full">
                <Image
                  src={exec.image}
                  alt={exec.name}
                  fill
                  sizes="320px"
                  className="object-cover object-top pointer-events-none group-hover:scale-105 transition-transform duration-500"
                  priority={idx < 4}
                />

                {/* Subtle dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#001640]/90 via-transparent to-transparent pointer-events-none" />

                {/* Direct Card Info Overlay */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#001640]/80 backdrop-blur-md p-3 rounded-xl border border-white/15">
                  <p className="text-[11px] font-bold text-[#05b0f0] uppercase tracking-wider">
                    {exec.role}
                  </p>
                  <p className="text-[14px] font-bold text-white leading-snug truncate">
                    {exec.name}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Centered Active Title Feature (Codegrid Voku Style directly on section background) */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center text-center z-40 pointer-events-none">
            <span className="inline-block px-4 py-1 rounded-full bg-[#05b0f0]/20 text-[#05b0f0] text-xs font-bold tracking-widest uppercase mb-2 border border-[#05b0f0]/40 backdrop-blur-md">
              {currentExec.role}
            </span>
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight drop-shadow-md">
              {currentExec.name}
            </h3>
            <p className="font-sans text-sm sm:text-base text-[#c6d5ed] mt-1">
              {currentExec.discipline}
            </p>
          </div>

          {/* Hint */}
          <div className="absolute bottom-4 right-4 hidden sm:flex items-center gap-1.5 text-xs text-[#c6d5ed]/60 font-medium">
            <span>Scroll or drag horizontally</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>

      </div>
    </section>
  );
}
