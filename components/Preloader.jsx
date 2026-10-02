'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const GRID_BLOCK_SIZE = 60;

export default function Preloader() {
  const [isActive, setIsActive] = useState(true);
  const overlayRef = useRef(null);
  const gridRef = useRef(null);
  const wrapperRef = useRef(null);
  const ringFrameRef = useRef(null);
  const discFrameRef = useRef(null);

  useEffect(() => {
    if (!overlayRef.current || !gridRef.current) return;

    // 1. Build Grid of Blocks
    const gridContainer = gridRef.current;
    gridContainer.innerHTML = '';
    const blocks = [];

    const gridWidth = window.innerWidth;
    const gridHeight = window.innerHeight;
    const gridColumnCount = Math.ceil(gridWidth / GRID_BLOCK_SIZE);
    const gridRowCount = Math.ceil(gridHeight / GRID_BLOCK_SIZE) + 1;
    const gridOffsetX = (gridWidth - gridColumnCount * GRID_BLOCK_SIZE) / 2;
    const gridOffsetY = (gridHeight - gridRowCount * GRID_BLOCK_SIZE) / 2;

    for (let rowIndex = 0; rowIndex < gridRowCount; rowIndex++) {
      for (let colIndex = 0; colIndex < gridColumnCount; colIndex++) {
        const block = document.createElement('div');
        block.classList.add('preloader-block');
        block.style.width = `${GRID_BLOCK_SIZE}px`;
        block.style.height = `${GRID_BLOCK_SIZE}px`;
        block.style.left = `${colIndex * GRID_BLOCK_SIZE + gridOffsetX}px`;
        block.style.top = `${rowIndex * GRID_BLOCK_SIZE + gridOffsetY}px`;
        gridContainer.appendChild(block);
        blocks.push(block);
      }
    }

    // 2. Build Concentric Rings and 3D Gyroscope Discs
    const ringFrame = ringFrameRef.current;
    const discFrame = discFrameRef.current;
    if (ringFrame && discFrame) {
      ringFrame.innerHTML = '';
      discFrame.innerHTML = '';

      const num = 190;
      for (let i = 1; i <= 3; i++) {
        const ring = document.createElement('span');
        ring.className = 'preloader-ring';
        ring.style.width = `${i * 18 + num}px`;
        ring.style.height = `${i * 18 + num}px`;

        const disc = document.createElement('span');
        disc.className = 'preloader-disc';
        disc.style.animationDelay = `${i * 0.4 - 0.2}s`;

        ringFrame.appendChild(ring);
        discFrame.appendChild(disc);
      }
    }

    // Prevent body scroll during preloader
    document.body.style.overflow = 'hidden';

    // 3. Start GSAP Dissolve Timeline (GridFolio Sequence)
    const tl = gsap.timeline({
      delay: 1.8,
      onComplete: () => {
        document.body.style.overflow = '';
        setIsActive(false);
      },
    });

    // Fade out central gyroscopic HUD
    if (wrapperRef.current) {
      tl.to(wrapperRef.current, {
        opacity: 0,
        duration: 0.35,
        ease: 'power2.out',
      });
    }

    // GridFolio signature random block flicker/dissolve
    if (blocks.length > 0) {
      tl.to(blocks, {
        opacity: 0,
        duration: 0.06,
        ease: 'power2.inOut',
        stagger: {
          amount: 0.55,
          each: 0.01,
          from: 'random',
        },
      });
    }

    // Fade out overlay background seamlessly as blocks dissolve
    if (overlayRef.current) {
      tl.to(
        overlayRef.current,
        {
          opacity: 0,
          duration: 0.25,
          ease: 'power2.out',
        },
        '-=0.2'
      );
    }

    return () => {
      document.body.style.overflow = '';
      tl.kill();
    };
  }, []);

  if (!isActive) return null;

  return (
    <div ref={overlayRef} className="preloader-overlay" aria-hidden="true">
      {/* 60px Block Grid */}
      <div ref={gridRef} className="preloader-grid" />

      {/* Central 3D Gyroscope & Pulsing Status */}
      <div ref={wrapperRef} className="preloader-animation-wrapper">
        <p className="preloader-text">
          Initializing Chapter Platform • GhIE AAMUSTED
        </p>
        <div ref={ringFrameRef} className="preloader-ring-frame" />
        <div ref={discFrameRef} className="preloader-disc-frame" />
      </div>
    </div>
  );
}
