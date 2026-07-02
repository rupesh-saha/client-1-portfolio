'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Register the ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const educationData = [
  {
    degree: "B.Sc. in Industrial and Production Engineering", //[cite: 1]
    institution: "Islamic University of Technology", //[cite: 1]
    timeline: "June 2021 — October 2025", //[cite: 1]
    grade: "CGPA 3.81 / 4.00", //[cite: 1]
    logo: "/iut-logo.png", // Update with your actual file name
    type: "Undergraduate"
  },
  {
    degree: "Higher Secondary School Certificate", //[cite: 1]
    institution: "Dhaka College", //[cite: 1]
    timeline: "2018 — 2020", //[cite: 1]
    grade: "GPA 5.00 / 5.00", //[cite: 1]
    logo: "/dhaka-college-logo.png", // Update with your actual file name
    type: "Higher Secondary" //[cite: 1]
  },
  {
    degree: "Secondary School Certificate", //[cite: 1]
    institution: "Ideal School and College", //[cite: 1]
    timeline: "Class of 2018", //[cite: 1]
    grade: "GPA 5.00 / 5.00", //[cite: 1]
    logo: "/ideal-school-logo.png", // Update with your actual file name
    type: "Secondary" //[cite: 1]
  }
];

export default function EducationPage() {
  const containerRef = useRef(null);
  const lineRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(() => {
    // 1. Animate the center line drawing down as you scroll
    gsap.fromTo(
      lineRef.current,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom bottom",
          scrub: 0.5, // Smooth scrubbing effect
        }
      }
    );

    // 2. Animate each card fading and sliding in as it enters the viewport
    cardsRef.current.forEach((card, index) => {
      // Alternate slide direction: left for even, right for odd
      const xOffset = index % 2 === 0 ? 50 : -50;

      gsap.fromTo(
        card,
        { opacity: 0, x: xOffset, y: 30 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%", // Triggers when the top of the card hits 80% of the viewport height
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, { scope: containerRef });

  return (
    <div className="min-h-screen bg-[#fafafa] text-black pt-32 pb-24 md:pt-40 md:pb-32 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      
      {/* Page Header */}
      <div className="max-w-5xl mx-auto text-center mb-24">
        <h1 className="text-sm font-bold tracking-[0.2em] text-gray-400 uppercase mb-6">
          Academic Journey
        </h1>
        <h2 className="text-5xl md:text-8xl font-bold tracking-tight text-black leading-tight">
          Education & <br className="hidden md:block" />
          Foundation.
        </h2>
      </div>

      {/* GSAP Timeline Container */}
      <div className="max-w-6xl mx-auto relative" ref={containerRef}>
        
        {/* Background Track Line (Faint Gray) */}
        <div className="absolute left-[28px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gray-200"></div>
        
        {/* The Animated Draw Line (Black) */}
        <div 
          ref={lineRef}
          className="absolute left-[28px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-black origin-top"
        ></div>

        {/* Timeline Events */}
        <div className="flex flex-col gap-16 md:gap-32 relative z-10">
          {educationData.map((edu, index) => {
            const isEven = index % 2 === 0;

            return (
              <div 
                key={index}
                // Store each card in the ref array for GSAP
                ref={(el) => (cardsRef.current[index] = el)}
                className={`flex flex-col md:flex-row items-start ${isEven ? 'md:flex-row-reverse' : ''}`}
              >
                
                {/* Empty Half for Desktop Alignment */}
                <div className="hidden md:block w-1/2 px-12"></div>

                {/* Center Node / Dot */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-14 h-14 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-black border-4 border-[#fafafa] shadow-[0_0_0_4px_#fafafa]"></div>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'}`}>
                  
                  <div className={`bg-white border border-gray-200 p-8 md:p-10 rounded-3xl shadow-sm hover:shadow-xl hover:border-black/10 transition-all duration-500 group flex flex-col ${isEven ? 'md:items-end' : 'md:items-start'}`}>
                    
                    {/* Top Row: Type & Logo */}
                    <div className={`flex items-center gap-4 mb-6 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                      <div className="w-12 h-12 relative bg-gray-50 rounded-xl p-2 border border-gray-100 flex-shrink-0">
                        {/* Make sure to add w-auto and h-auto to prevent Next.js warnings */}
                        <Image 
                          src={edu.logo} 
                          alt={`${edu.institution} Logo`}
                          width={48}
                          height={48}
                          className="w-full w-auto h-auto object-contain"
                        />
                      </div>
                      <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">
                        {edu.type}
                      </span>
                    </div>

                    {/* Degree Title */}
                    <h3 className="text-2xl md:text-3xl font-bold text-black mb-3">
                      {edu.degree}
                    </h3>
                    
                    {/* Institution */}
                    <h4 className="text-lg md:text-xl text-gray-500 font-serif italic mb-6">
                      {edu.institution}
                    </h4>

                    {/* Bottom Row: Timeline & Grade */}
                    <div className={`flex flex-wrap items-center gap-4 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                      <span className="px-4 py-2 bg-gray-50 text-gray-600 text-sm font-semibold rounded-lg border border-gray-100">
                        {edu.timeline}
                      </span>
                      <span className="px-4 py-2 bg-black text-white text-sm font-semibold tracking-wide rounded-lg shadow-md">
                        {edu.grade}
                      </span>
                    </div>

                  </div>
                </div>

              </div>
            );
          })}
        </div>
        
      </div>
    </div>
  );
}