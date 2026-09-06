'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Text-based stylized partner names (generic placeholders)
const partners = [
  {
    name: 'ADNOC',
    logo: (
      <div className="flex flex-col items-center justify-center gap-1 opacity-70 hover:opacity-100 transition-opacity duration-300">
        <span className="text-xl font-black tracking-tight leading-none">ADNOC</span>
      </div>
    )
  },
  {
    name: 'Qatar Petroleum',
    logo: (
      <div className="flex flex-col items-center justify-center gap-1 opacity-70 hover:opacity-100 transition-opacity duration-300">
        <span className="text-lg font-bold tracking-wide leading-none">Qatar Petroleum</span>
      </div>
    )
  },
  {
    name: 'Saudi Aramco',
    logo: (
      <div className="flex flex-col items-center justify-center gap-1 opacity-70 hover:opacity-100 transition-opacity duration-300">
        <span className="text-lg font-bold tracking-wide leading-none">Saudi Aramco</span>
      </div>
    )
  },
  {
    name: 'Kuwait Petroleum',
    logo: (
      <div className="flex flex-col items-center justify-center gap-1 opacity-70 hover:opacity-100 transition-opacity duration-300">
        <span className="text-lg font-bold tracking-wide leading-none">Kuwait Petroleum</span>
      </div>
    )
  },
  {
    name: 'Oman Oil',
    logo: (
      <div className="flex flex-col items-center justify-center gap-1 opacity-70 hover:opacity-100 transition-opacity duration-300">
        <span className="text-xl font-black tracking-tight leading-none">Oman Oil</span>
      </div>
    )
  },
  {
    name: 'Abu Dhabi NOC',
    logo: (
      <div className="flex flex-col items-center justify-center gap-1 opacity-70 hover:opacity-100 transition-opacity duration-300">
        <span className="text-lg font-bold tracking-wide leading-none">Abu Dhabi NOC</span>
      </div>
    )
  }
];

export default function TrustedPartners() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in header
      gsap.fromTo(headerRef.current,
        { y: 30, opacity: 0 },
        { 
          y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          }
        }
      );

      // Infinite Marquee Animation — paused when off-screen
      if (trackRef.current) {
        const marquee = gsap.to(trackRef.current, {
          xPercent: -50,
          ease: 'none',
          duration: 30,
          repeat: -1,
          paused: true,
        });

        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          onToggle: (self) => {
            if (self.isActive) {
              marquee.play();
            } else {
              marquee.pause();
            }
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-brand-secondary overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-16 md:mb-24">
        {/* Header */}
        <div ref={headerRef} className="text-center">
          <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight leading-tight">
            Trusted by<br />Global Commodity Partners
          </h2>
        </div>
      </div>

      {/* Marquee Track */}
      <div className="relative w-full overflow-hidden flex items-center">
        {/* Gradient Masks for smooth fade on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-brand-secondary to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-brand-secondary to-transparent z-10 pointer-events-none"></div>

        {/* Scrolling Content */}
        <div ref={trackRef} className="flex items-center w-max text-white">
          {/* First Set */}
          <div className="flex items-center gap-16 md:gap-24 px-8 md:px-12">
            {partners.map((partner, index) => (
              <div key={`set1-${index}`} className="flex items-center justify-center min-w-[120px]">
                {partner.logo}
              </div>
            ))}
          </div>
          {/* Second Set (Duplicated for seamless loop) */}
          <div className="flex items-center gap-16 md:gap-24 px-8 md:px-12">
            {partners.map((partner, index) => (
              <div key={`set2-${index}`} className="flex items-center justify-center min-w-[120px]">
                {partner.logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}