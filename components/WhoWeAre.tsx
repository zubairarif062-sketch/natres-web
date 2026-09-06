'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function WhoWeAre() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      });

      // Split heading into lines for animation
      const headingLines = headingRef.current?.children ? Array.from(headingRef.current.children) : [];

      tl.fromTo(headingLines,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
      )
      .fromTo(textRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
        "-=0.4"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-brand-secondary">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          
          {/* Left Column - Heading */}
          <div className="lg:col-span-4">
            <h2 ref={headingRef} className="text-white font-medium tracking-tight">
              <span className="block text-5xl md:text-6xl lg:text-7xl leading-[1.1] overflow-hidden">
                <span className="block">Who</span>
              </span>
              <span className="block text-5xl md:text-6xl lg:text-7xl leading-[1.1] overflow-hidden">
                <span className="block">We Are</span>
              </span>
            </h2>
          </div>

          {/* Right Column - Text */}
          <div className="lg:col-span-8">
            <p ref={textRef} className="text-white/90 text-lg md:text-xl font-light leading-relaxed max-w-4xl">
              NATRES is an international commodity trading company headquartered in Qatar, with offices in London, Shanghai, and Johannesburg. We work with global partners to move raw materials from producers to end users, supplying Oil, Gas, LNG, LPG, Coal, and Middle Distillates to refiners, oil majors, electric utilities, and state-owned oil companies worldwide. With a proven buying history in both spot and forward physical markets, we continue to expand our reach across the fast-growing markets of Asia and Africa.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
