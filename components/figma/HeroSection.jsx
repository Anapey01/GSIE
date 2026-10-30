'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Users, Wrench, Lightbulb } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Images for the interactive trail emitter
const HERO_TRAIL_IMAGES = [
  '/images/figma/students_collaborating_in_workshop_841f0cec.jpg',
  '/images/ghie-young-engineers.jpg',
  '/images/ghie-young-engineers-duo.jpg',
  '/images/figma/story_photograph_3eeed8ec.jpg',
  '/images/figma/story_photograph_bc310f3c.jpg',
  '/images/figma/story_photograph_c6415f67.jpg',
  '/images/engineering-hardhat.jpg',
  '/images/hero-student.jpg',
];

export default function HeroSection({ onOpenPortal }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || 650;
    let dpi = Math.min(window.devicePixelRatio || 1, 2);

    canvas.width = width * dpi;
    canvas.height = height * dpi;

    const mouse = {
      x: -1,
      y: -1,
      sx: -1,
      sy: -1,
      lx: -1,
      ly: -1,
      vx: 0,
      vy: 0,
      svx: 0,
      svy: 0,
    };

    const scroll = { y: 0, sy: 0 };
    const head = { x: width * 0.5, y: height * 0.5, mx: 0, my: 0 };

    let isPaused = false;
    let isSleeping = true;
    let sleepTimeout = null;

    const sleep = () => {
      isSleeping = true;
      head.x = width * 0.5;
      head.y = height * 0.5;
    };

    const wake = () => {
      isSleeping = false;
      if (sleepTimeout) clearTimeout(sleepTimeout);
      sleepTimeout = setTimeout(sleep, 3200);
    };

    // Concentric architectural lines matching 24/7 Artists contour physics
    let circles = [];
    const setCircles = () => {
      circles = [];
      const center = { x: width * 1.05, y: height * 0.95 };
      const maxR = Math.hypot(center.x, center.y);
      let r = 80;
      let step = 90;
      while (r < maxR) {
        circles.push({ x: center.x, y: center.y, r });
        r += step;
        step *= 1.06;
      }
    };
    setCircles();

    // Sliced Image Trail class (horizontal Venetian strips)
    class TrailSliceItem {
      constructor(src, x, y, vx, vy, size) {
        this.src = src;
        this.slices = 10;
        this.corner = 2;
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.size = size;
        this.opacity = 1;
        this.visibility = 1;
        this.isLoaded = false;
        this.clipPaths = [];
        this.scrollY = scroll.sy;

        this.image = new window.Image();
        this.image.src = this.src;
        this.image.onload = () => {
          this.init();
        };
      }

      init() {
        this.aspectRatio = 1.15;
        let imgW = this.image.width;
        let imgH = imgW / this.aspectRatio;
        if (imgH > this.image.height) {
          imgH = this.image.height;
          imgW = imgH * this.aspectRatio;
        }

        const sx = (this.image.width - imgW) / 2;
        const sy = (this.image.height - imgH) / 2;
        this.sourceSize = { x: sx, y: sy, width: imgW, height: imgH };

        this.width = this.size;
        this.hWidth = this.width / 2;
        this.height = this.width / this.aspectRatio;
        this.hHeight = this.height / 2;

        this.destinationSize = {
          x: this.x - this.hWidth,
          y: this.y - this.hHeight,
          width: this.width,
          height: this.height,
        };

        this.clipPathSize = this.destinationSize.height / this.slices;
        for (let s = 0; s < this.slices; s++) {
          const cornerOffset = Math.max(
            s < this.slices / 2 ? this.corner - s : s - (this.slices - this.corner - 1),
            0
          );
          const inset = this.clipPathSize * cornerOffset;
          this.clipPaths.push({
            y: this.clipPathSize * s,
            width: this.destinationSize.width - inset,
            currentWidth: 0,
            targetWidth: this.destinationSize.width - inset,
          });
        }

        // Venetian slice animation sequence via GSAP timeline
        const tl = gsap.timeline({
          onComplete: () => {
            this.destroy();
          },
        });

        tl.to(
          this.clipPaths,
          {
            currentWidth: (idx) => this.clipPaths[idx].targetWidth,
            duration: 0.7,
            ease: 'power3.inOut',
            stagger: { amount: 0.35, from: 'center' },
          },
          0
        );

        tl.to(
          this.clipPaths,
          {
            currentWidth: 0,
            duration: 0.65,
            ease: 'power3.inOut',
            stagger: { amount: 0.25, from: 'center' },
          },
          1.1
        );

        tl.to(this, { opacity: 0, duration: 0.5, ease: 'linear' }, 1.3);

        this.isLoaded = true;
      }

      move() {
        if (!this.isLoaded) return;
        this.x += this.vx;
        this.y += this.vy;
        this.vx *= 0.94;
        this.vy *= 0.94;

        this.destinationSize.x = this.x - this.hWidth;
        this.destinationSize.y = this.y - this.hHeight;
      }

      draw() {
        if (!this.isLoaded) return;
        ctx.save();
        ctx.beginPath();
        this.clipPaths.forEach((slice) => {
          const sliceX =
            this.destinationSize.x + (this.destinationSize.width - slice.currentWidth) / 2;
          const sliceY = this.destinationSize.y + slice.y;
          ctx.rect(sliceX, sliceY, slice.currentWidth, this.clipPathSize + 0.5);
        });
        ctx.closePath();
        ctx.clip();

        ctx.globalAlpha = this.opacity;
        ctx.drawImage(
          this.image,
          this.sourceSize.x,
          this.sourceSize.y,
          this.sourceSize.width,
          this.sourceSize.height,
          this.destinationSize.x,
          this.destinationSize.y,
          this.destinationSize.width,
          this.destinationSize.height
        );
        ctx.restore();
      }

      destroy() {
        imagesList = imagesList.filter((item) => item !== this);
      }
    }

    let imagesList = [];
    let imageIndex = 0;
    const lastEmit = { x: 0, y: 0, time: 0 };
    const itemSize = Math.max(Math.min(width * 0.24, 280), 160);
    const spacing = itemSize * 0.45;

    const emitImage = () => {
      if (imagesList.length >= 18) return;
      if (mouse.x === -1 && mouse.y === -1 && !isSleeping) return;

      let canEmit = false;
      let posX = 0;
      let posY = 0;

      if (isSleeping) {
        posX = head.x + head.mx;
        posY = head.y + head.my;
      } else {
        posX = mouse.sx;
        posY = mouse.sy;
      }

      if (lastEmit.x === 0 && lastEmit.y === 0) {
        canEmit = true;
      } else {
        const dist = Math.hypot(posX - lastEmit.x, posY - lastEmit.y);
        if (dist > spacing) canEmit = true;
      }

      if (canEmit) {
        const src = HERO_TRAIL_IMAGES[imageIndex % HERO_TRAIL_IMAGES.length];
        const vx = isSleeping ? 2.5 : mouse.svx * 0.45;
        const vy = isSleeping ? -2.5 : mouse.svy * 0.45;

        imagesList.push(new TrailSliceItem(src, posX, posY, vx, vy, itemSize));
        imageIndex++;
        lastEmit.x = posX;
        lastEmit.y = posY;
        lastEmit.time = performance.now();
      }
    };

    // Draw background concentric contours
    const drawContours = () => {
      ctx.save();
      circles.forEach((c) => {
        ctx.beginPath();
        ctx.arc(c.x, c.y, c.r, Math.PI, 2 * Math.PI);
        ctx.strokeStyle = 'rgba(5, 176, 240, 0.12)';
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.closePath();

        // Tangent drop lines
        const dropX = c.x - c.r;
        ctx.beginPath();
        ctx.moveTo(dropX, c.y);
        ctx.lineTo(dropX, height);
        ctx.strokeStyle = 'rgba(5, 176, 240, 0.08)';
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.closePath();
      });
      ctx.restore();
    };

    // Event listeners
    const onMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const currentX = e.clientX - rect.left;
      const currentY = e.clientY - rect.top;

      mouse.x = currentX;
      mouse.y = currentY;
      mouse.vx = Math.max(Math.min(mouse.x - mouse.lx, 15), -15);
      mouse.vy = Math.max(Math.min(mouse.y - mouse.ly, 15), -15);
      mouse.svx += 0.15 * (mouse.vx - mouse.svx);
      mouse.svy += 0.15 * (mouse.vy - mouse.svy);
      mouse.lx = mouse.x;
      mouse.ly = mouse.y;

      wake();
    };

    const onTouchMove = (e) => {
      if (!e.touches[0]) return;
      const rect = container.getBoundingClientRect();
      const currentX = e.touches[0].clientX - rect.left;
      const currentY = e.touches[0].clientY - rect.top;

      mouse.x = currentX;
      mouse.y = currentY;
      mouse.vx = Math.max(Math.min(mouse.x - mouse.lx, 15), -15);
      mouse.vy = Math.max(Math.min(mouse.y - mouse.ly, 15), -15);
      mouse.svx += 0.15 * (mouse.vx - mouse.svx);
      mouse.svy += 0.15 * (mouse.vy - mouse.svy);
      mouse.lx = mouse.x;
      mouse.ly = mouse.y;

      wake();
    };

    container.addEventListener('mousemove', onMouseMove);
    container.addEventListener('touchmove', onTouchMove, { passive: true });

    let rafId;
    const renderLoop = (time) => {
      if (!isPaused) {
        mouse.sx += 0.4 * (mouse.x - mouse.sx);
        mouse.sy += 0.4 * (mouse.y - mouse.sy);

        head.mx = Math.cos(0.0006 * time) * (width - itemSize) * 0.38;
        head.my = Math.sin(0.0012 * time) * height * 0.15;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.save();
        ctx.scale(dpi, dpi);

        drawContours();

        imagesList.forEach((item) => {
          item.move();
          item.draw();
        });

        emitImage();
        ctx.restore();
      }

      rafId = requestAnimationFrame(renderLoop);
    };

    rafId = requestAnimationFrame(renderLoop);

    const onResize = () => {
      width = container.clientWidth || window.innerWidth;
      height = container.clientHeight || 650;
      dpi = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpi;
      canvas.height = height * dpi;
      setCircles();
    };

    window.addEventListener('resize', onResize);

    return () => {
      container.removeEventListener('mousemove', onMouseMove);
      container.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('resize', onResize);
      if (sleepTimeout) clearTimeout(sleepTimeout);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section className="w-full flex flex-col select-none">
      {/* 1. Interactive 24/7 Artists Hero Stage */}
      <div
        ref={containerRef}
        className="relative w-full min-h-[620px] sm:min-h-[680px] lg:min-h-[740px] bg-[#001438] text-white overflow-hidden flex flex-col justify-between"
      >
        {/* HTML5 Canvas Image Trail & Concentric Arc Grid */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none z-10"
        />

        {/* Ambient Glow Orbs */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#05b0f0]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#001e5a]/80 rounded-full blur-3xl pointer-events-none" />

        {/* Hero Content Overlay */}
        <div className="relative z-20 max-w-[1440px] w-full mx-auto px-6 sm:px-12 lg:px-20 pt-16 sm:pt-20 pb-12 flex flex-col justify-center flex-grow pointer-events-none">
          
          <div className="max-w-[850px] flex flex-col gap-6">
            
            {/* Chapter overline badge */}
            <div className="inline-flex items-center gap-2.5 self-start px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 pointer-events-auto">
              <div className="w-2 h-2 rounded-full bg-[#05b0f0] animate-pulse" />
              <span className="font-mono font-bold text-[11px] sm:text-xs text-[#c6d5ed] tracking-widest uppercase">
                GHIE STUDENT CHAPTER · AAMUSTED
              </span>
            </div>

            {/* Giant Editorial Headline (24/7 Artists Style) */}
            <h1
              ref={titleRef}
              className="font-heading font-normal text-4xl sm:text-6xl lg:text-[76px] leading-[1.05] text-white tracking-tight pointer-events-auto"
            >
              Build your engineering journey step by step.
            </h1>

            {/* Description */}
            <p className="font-sans text-base sm:text-lg lg:text-xl text-[#c6d5ed] leading-relaxed max-w-[580px] pointer-events-auto">
              A community of creators, thinkers and future innovators. Move your cursor or swipe to discover our chapter in motion.
            </p>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2 pointer-events-auto">
              <button
                type="button"
                onClick={() => (onOpenPortal ? onOpenPortal() : null)}
                className="inline-flex items-center justify-center gap-3 bg-[#05b0f0] hover:bg-[#049ad3] text-[#001e5a] font-sans font-bold text-[16px] px-7 py-4 rounded-full transition-all transform active:scale-95 shadow-xl cursor-pointer"
              >
                <span>Join the community</span>
                <ArrowUpRight className="w-5 h-5 text-[#001e5a]" strokeWidth={2.4} />
              </button>

              <Link
                href="#events"
                className="inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 border border-white/25 text-white font-sans font-semibold text-[16px] px-6 py-4 rounded-full transition-all transform active:scale-95 backdrop-blur-sm"
              >
                <span>Explore events</span>
                <ArrowUpRight className="w-4 h-4 text-white" strokeWidth={2.2} />
              </Link>
            </div>

          </div>

        </div>

        {/* Bottom Interactive Hint Bar */}
        <div className="relative z-20 w-full border-t border-white/10 bg-black/25 backdrop-blur-md px-6 sm:px-12 lg:px-20 py-3.5 flex items-center justify-between text-xs font-mono text-[#c6d5ed]/80 pointer-events-none">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#05b0f0]" />
            <span>INTERACTIVE TRAIL ACTIVE</span>
          </div>
          <span className="hidden sm:inline">MOVE CURSOR OR SWIPE SCREEN</span>
        </div>

      </div>

      {/* 2. Community Pillars (Preserved) */}
      <div className="w-full bg-[#f7f8f9] border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 py-7">
          <div data-stagger className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-12">
            
            {/* Pillar 1 */}
            <div data-reveal className="flex items-center gap-4 group amtrav-card-hover p-3 rounded-xl transition-all">
              <div className="w-11 h-11 rounded-full bg-white border border-slate-200 flex items-center justify-center flex-shrink-0 text-[#001e5a] group-hover:bg-[#001e5a] group-hover:text-white transition-colors shadow-xs">
                <Users className="w-6 h-6" strokeWidth={2} />
              </div>
              <div className="flex flex-col">
                <h3 className="font-heading font-semibold text-[16px] text-[#001e5a] leading-tight">
                  Find your community
                </h3>
                <p className="font-sans text-[15px] text-[#617086] leading-snug">
                  Connect across disciplines.
                </p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div data-reveal className="flex items-center gap-4 group amtrav-card-hover p-3 rounded-xl transition-all">
              <div className="w-11 h-11 rounded-full bg-white border border-slate-200 flex items-center justify-center flex-shrink-0 text-[#001e5a] group-hover:bg-[#001e5a] group-hover:text-white transition-colors shadow-xs">
                <Wrench className="w-6 h-6" strokeWidth={2} />
              </div>
              <div className="flex flex-col">
                <h3 className="font-heading font-semibold text-[16px] text-[#001e5a] leading-tight">
                  Learn by building
                </h3>
                <p className="font-sans text-[15px] text-[#617086] leading-snug">
                  Practical skills beyond lectures.
                </p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div data-reveal className="flex items-center gap-4 group amtrav-card-hover p-3 rounded-xl transition-all">
              <div className="w-11 h-11 rounded-full bg-white border border-slate-200 flex items-center justify-center flex-shrink-0 text-[#001e5a] group-hover:bg-[#001e5a] group-hover:text-white transition-colors shadow-xs">
                <Lightbulb className="w-6 h-6" strokeWidth={2} />
              </div>
              <div className="flex flex-col">
                <h3 className="font-heading font-semibold text-[16px] text-[#001e5a] leading-tight">
                  Create what’s next
                </h3>
                <p className="font-sans text-[15px] text-[#617086] leading-snug">
                  Ideas with real-world purpose.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
