'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const trustedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Split heading into two lines for animation
    const headingLines = headingRef.current?.children ? Array.from(headingRef.current.children) : [];

    tl.fromTo(headingLines,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.15, delay: 0.3 }
    )
    .fromTo(subRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      "-=0.6"
    )
    .fromTo(buttonsRef.current?.children ? Array.from(buttonsRef.current.children) : [],
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 },
      "-=0.6"
    );
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col pt-32 pb-12 overflow-hidden">
      {/* Background Image & Overlays */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transform scale-105 animate-slow-pan"
        style={{ 
backgroundImage: 'url("/projectPhotos/qatar-doha-skyline-1.jpg")',
          backgroundPosition: 'center 60%'
        }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/50 to-transparent"></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-brand-dark/90 via-transparent to-brand-dark/30"></div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-[1400px] w-full mx-auto px-6 md:px-12 flex-grow flex flex-col justify-center mt-12">
        <h1 ref={headingRef} className="text-white font-bold tracking-tight uppercase break-words">
          <span className="block text-[43.75px] sm:text-6xl md:text-[5.5rem] lg:text-[7.5rem] leading-[1.05] overflow-hidden">
            <span className="block">Global</span>
          </span>
          <span className="block text-[43.75px] sm:text-6xl md:text-[5.5rem] lg:text-[7.5rem] leading-[1.05] overflow-hidden">
            <span className="block">Commodity Trading</span>
          </span>
        </h1>
        
        <p ref={subRef} className="text-white/90 text-xl md:text-2xl font-light mt-6 max-w-3xl">
          London — Qatar — Shanghai — Johannesburg. Connecting buyers and sellers across the global commodity supply chain.
        </p>
        
        <div ref={buttonsRef} className="flex flex-wrap items-center gap-4 mt-10">
          <button className="bg-brand-primary hover:bg-brand-dark text-white px-8 py-3.5 rounded-full text-lg font-medium transition-all duration-300 shadow-lg shadow-brand-primary/20 hover:shadow-brand-primary/40">
            Learn More
          </button>
          <button className="bg-brand-accent hover:bg-[#e04d1f] text-white px-8 py-3.5 rounded-full text-lg font-medium flex items-center gap-2 transition-all duration-300 shadow-lg shadow-brand-accent/20 hover:shadow-brand-accent/40 group">
            Discuss a Trade 
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}