import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';

interface HeroSectionProps {
  setCursorVariant: (prop:string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ setCursorVariant }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const gradientBgRef = useRef<HTMLDivElement>(null);
  const accentGradientRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Clean entrance animations (no gsap.set needed, handled by Tailwind)
      const tl = gsap.timeline();
      
      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power3.out'
      })
      .to(headlineRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out'
      }, '-=0.8')
      .to(subheadlineRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out'
      }, '-=0.6')
      .to(imageRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out'
      }, '-=0.8')
      .to(gradientBgRef.current && [gradientBgRef.current, accentGradientRef.current], {
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out'
      }, '-=1.2');
    }, heroRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 768); // Tailwind's md breakpoint
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative min-h-screen w-full overflow-hidden bg-black flex items-center justify-center cursor-none"
    >
      {/* Minimal Background */}
      {
        isDesktop &&
      <div ref={gradientBgRef} className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-0" />
      }
      {/* Single accent gradient */}
      {
        isDesktop &&
        <div ref={accentGradientRef} className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-red-600/20 to-transparent opacity-0" />
      }

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                
        {/* TEDx Title */}
        <div ref={titleRef} className="mb-12 opacity-0 translate-y-16"
          onMouseEnter={() => setCursorVariant('hover')}
          onMouseLeave={() => setCursorVariant('default')}
        >
          <h1 className="text-6xl sm:text-8xl lg:text-9xl font-black text-white mb-4">
            TED<span className="text-red-600">x</span>
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-light text-gray-300 tracking-[0.3em]">
            ASSAM UNIVERSITY
          </h2>
        </div>

        {/* Main Headline */}
        <h3
          ref={headlineRef}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight opacity-0 translate-y-16"
        >
          <span className="block text-red-500 mb-2"
            onMouseEnter={() => setCursorVariant('hover')}
            onMouseLeave={() => setCursorVariant('default')}
          >पूर्व की आवाज़</span>
          <span className="block text-2xl sm:text-3xl lg:text-4xl font-light text-gray-300"
            onMouseEnter={() => setCursorVariant('hover')}
            onMouseLeave={() => setCursorVariant('default')}
          >
            Voice from the East
          </span>
        </h3>

        {/* Simple Subheadline */}
        <p
          ref={subheadlineRef}
          className="text-lg sm:text-xl text-gray-400 mb-12 max-w-2xl mx-auto opacity-0 translate-y-16"
          onMouseEnter={() => setCursorVariant('hover')}
          onMouseLeave={() => setCursorVariant('default')}
          >
          Ideas that spark revolution
        </p>
      </div>

      {/* Revolution Image - Blended in background */}
      {isDesktop ? (
        <div className="absolute inset-0 w-screen h-screen z-0 opacity-70">
          <Image
            ref={imageRef}
            src="https://www.highlandfm.org.au/wp-content/uploads/2021/04/rev.jpeg"
            alt="Revolutionary spirit - Ideas that change the world"
            className="object-cover mix-blend-overlay opacity-0 translate-y-16"
            fill
            sizes="100vw"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
            unoptimized
            priority
          />
        </div>
      ) : (
        <div className="absolute right-10 bottom-14 sm:bottom-0 opacity-80">
          <Image
            ref={imageRef}
            src="/rev.png"
            alt="Revolutionary spirit - Ideas that change the world"
            className="object-cover mix-blend-overlay opacity-0 translate-y-16"
            width={1000}
            height={1000}
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
            priority
          />
        </div>
      )}

      {/* Single decorative line */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-red-600 opacity-60" />
    </div>
  );
};

export default HeroSection;