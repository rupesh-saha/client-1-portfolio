'use client';

import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const experienceData = [
  {
    company: "BJIT Limited",
    role: "Mechanical Design Engineer",
    timeline: "April 2026 - Present",
    logo: "/BJIT.png",
    description: "I transform raw 3D scan point clouds into precise digital models using Poly Works to align data and identify dimensional deviations. Through detailed AutoCAD drafting and analysis, I map out defects and evaluate the exact wear and tear on industrial machinery. This technical documentation provides the critical insights needed for strict quality control, letting you know exactly when a part requires maintenance."
  },
  {
    company: "Karnaphuli Fertilizer Company Limited (KAFCO)",
    role: "Industrial Attachment",
    timeline: "June 2024",
    logo: "/Kafco_Logo.png",
    description: "Completed industrial training at KAFCO, Bangladesh's largest multinational joint-venture company, gaining an end-to-end understanding of large-scale production, procurement, packaging, and logistics. I analyzed how strategic plant layouts optimize manufacturing workflows and eliminate operational bottlenecks to maximize facility efficiency. Additionally, I studied practical inventory management and the step-by-step transportation procedures required to maintain a reliable, high-volume supply chain."
  },
  {
    company: "Gyre Engineering",
    role: "Product Development & Design Intern",
    timeline: "September 2022 - March 2023",
    logo: "/Gyre Engineering.png",
    description: "Interned at Gyre Engineering, managing the full product lifecycle from initial concept and manufacturing to final customer delivery. I designed and executed user-focused solutions, including a production-ready fingerprint scanner casing and a specialized sensor enclosure for water-level monitoring. This hands-on experience bridged the gap between creative design, functional engineering, and efficient manufacturing."
  }
];

export default function ProfessionalPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo('.exp-card', 
      { opacity: 0, y: 50 }, 
      {
        opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power3.out",
        scrollTrigger: { trigger: containerRef.current, start: "top 80%" }
      }
    );
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#f5f5f7] text-black pt-32 pb-24 md:pt-40 md:pb-32 px-6 md:px-12 lg:px-20 font-sans selection:bg-black selection:text-white">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-24">
        <h2 className="text-sm font-bold tracking-[0.2em] text-gray-400 uppercase mb-4">Professional Journey</h2>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">Work Experience.</h1>
      </div>

      {/* Grid Layout */}
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        {experienceData.map((exp, index) => (
          <motion.div 
            key={index}
            className="exp-card bg-white p-8 md:p-12 rounded-[2rem] border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-500 group"
          >
            <div className="flex flex-col lg:flex-row gap-8">
              
              {/* Logo Column */}
              <div className="w-24 h-24 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center p-4 flex-shrink-0">
                <img src={exp.logo} alt={exp.company} className="w-full h-auto object-contain" />
              </div>

              {/* Info Column */}
              <div className="flex-grow">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
                  <div>
                    <h3 className="text-2xl font-bold">{exp.role}</h3>
                    <p className="text-lg text-gray-500 italic font-serif">{exp.company}</p>
                  </div>
                  <span className="text-sm font-bold tracking-widest text-gray-400 uppercase mt-4 md:mt-0">
                    {exp.timeline}
                  </span>
                </div>
                
                <p className="text-base md:text-lg text-gray-600 font-light leading-relaxed max-w-4xl">
                  {exp.description}
                </p>
              </div>

            </div>
          </motion.div>
        ))}
      </div>

    </div>
  );
}