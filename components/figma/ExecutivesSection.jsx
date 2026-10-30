'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
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

// Replicate list to support continuous circular loop
const SLIDES = [...EXECUTIVES, ...EXECUTIVES, ...EXECUTIVES];
const SLIDE_COUNT = SLIDES.length;
const SCROLL_LERP = 0.08;

export default function ExecutivesSection() {
  const containerRef = useRef(null);
  const slidesRef = useRef([]);

  const scrollTargetRef = useRef(0);
  const scrollCurrentRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    const slideElements = slidesRef.current;
    if (!container) return;

    let containerWidth = container.clientWidth || window.innerWidth;
    let isMobile = containerWidth < 768;

    // Strict responsive parameters based on real screen width
    let slideWidth = isMobile ? Math.min(containerWidth * 0.52, 210) : 260;
    let slideHeight = isMobile ? slideWidth * 1.38 : 360;
    let slideGap = isMobile ? slideWidth * 0.58 : 155;
    let arcDepth = isMobile ? 60 : 120;
    let centerLift = isMobile ? 30 : 55;

    let trackWidth = SLIDE_COUNT * slideGap;
    let windowCenterX = containerWidth / 2;
    let arcBaselineY = isMobile ? slideHeight * 0.62 : slideHeight * 0.58;

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
        1 - absDist * (isMobile ? 0.35 : 0.5),
        isMobile ? 0.65 : 0.48
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

    const onWheel = (e) => {
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      if (Math.abs(delta) > 3) {
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

      rafId = requestAnimationFrame(animate);
    }

    animate();

    const onResize = () => {
      containerWidth = container.clientWidth || window.innerWidth;
      isMobile = containerWidth < 768;

      slideWidth = isMobile ? Math.min(containerWidth * 0.52, 210) : 260;
      slideHeight = isMobile ? slideWidth * 1.38 : 360;
      slideGap = isMobile ? slideWidth * 0.58 : 155;
      arcDepth = isMobile ? 60 : 120;
      centerLift = isMobile ? 30 : 55;

      trackWidth = SLIDE_COUNT * slideGap;
      windowCenterX = containerWidth / 2;
      arcBaselineY = isMobile ? slideHeight * 0.62 : slideHeight * 0.58;
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
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const gap = isMobile ? 110 : 155;
    scrollTargetRef.current -= gap;
  };

  const slideNext = () => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const gap = isMobile ? 110 : 155;
    scrollTargetRef.current += gap;
  };

  return (
    <section
      id="executives"
      data-reveal
      className="relative w-full bg-[#001e5a] text-white py-14 sm:py-20 lg:py-24 border-b border-white/10 overflow-hidden select-none"
    >
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#05b0f0]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-20 flex flex-col gap-6 sm:gap-10 relative z-10">
        
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

        {/* 3D Arc Stage with Perpendicular Minimalist Typography */}
        <div
          ref={containerRef}
          className="relative w-full h-[370px] sm:h-[440px] lg:h-[480px] overflow-hidden cursor-grab active:cursor-grabbing"
        >
          {SLIDES.map((exec, idx) => (
            <div
              key={idx}
              ref={(el) => (slidesRef.current[idx] = el)}
              className="absolute top-0 left-0 rounded-2xl overflow-hidden shadow-[0_20px_45px_rgba(0,0,0,0.65)] will-change-transform bg-black group"
            >
              {/* Photo */}
              <div className="relative w-full h-full">
                <Image
                  src={exec.image}
                  alt={exec.name}
                  fill
                  sizes="(max-width: 768px) 210px, 280px"
                  className="object-cover object-top pointer-events-none"
                  priority={idx < 4}
                />

                {/* Perpendicular / Vertical Minimalist Name Spine (Left Edge) */}
                <div className="absolute top-0 left-0 bottom-0 w-8 sm:w-10 bg-gradient-to-r from-black/80 via-black/40 to-transparent flex flex-col justify-end p-2 sm:p-3 pointer-events-none z-10">
                  <div
                    className="origin-bottom-left -rotate-90 whitespace-nowrap translate-x-4 sm:translate-x-5 text-[11px] sm:text-[13px] font-bold text-white tracking-widest uppercase opacity-90 drop-shadow-md"
                    style={{ transformOrigin: '0 100%' }}
                  >
                    <span className="text-[#05b0f0] mr-2">[{exec.role}]</span>
                    <span>{exec.name}</span>
                  </div>
                </div>

                {/* Subtle bottom gradient to ground the portrait */}
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
