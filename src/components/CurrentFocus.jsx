'use client';

import React from 'react';
import { motion } from 'framer-motion';

const focusItems = [
  {
    category: "Manuscript Prep",
    title: "MD Simulation",
    description: "Preparing the manuscript on MD simulation of TMDs material for journal publication.",
    span: "md:col-span-2", 
    delay: 0.1,
  },
  {
    category: "Publication",
    title: "AIP Publishing",
    description: "Working to publish my recent conference paper on ergonomics and vibration reduction of drill machines.",
    span: "md:col-span-1",
    delay: 0.2,
  },
  {
    category: "Research",
    title: "Additive Manufacturing",
    description: "Expanding my expertise in additive manufacturing and materials, as well as researching within the field.",
    span: "md:col-span-1",
    delay: 0.3,
  },
  {
    category: "Design",
    title: "Bio-inspired Design",
    description: "Exploring Bio-inspired Design, Compliant Mechanisms, and advanced design.",
    span: "md:col-span-1",
    delay: 0.4,
  },
  {
    category: "Industry",
    title: "Reverse Engineering",
    description: "Professionally working and developing my skills in reverse engineering and analysis.",
    span: "md:col-span-1",
    delay: 0.5,
  }
];

// NEW: Categorized Research Interests Array
const categorizedInterests = [
  {
    category: "Manufacturing",
    items: [
      "Advanced and Additive Manufacturing",
      "Smart and Hybrid Manufacturing"
    ]
  },
  {
    category: "Design",
    items: [
      "Engineering Design & Solid Mechanics",
      "Compliant Mechanisms, Topology Optimization",
      "Biomedical Device Design (Prosthesis and Orthosis), Assistive Technologies & Biomechanics",
      "Ergonomics (User-centric design), Human Factors Engineering"
    ]
  },
  {
    category: "Materials",
    items: [
      "2D Materials (Molecular Dynamics)",
      "Computational Modeling"
    ]
  }
];

const CurrentFocus = () => {
  return (
    <section className="w-full bg-[#fafafa] text-black py-24 md:py-32 px-6 md:px-12 lg:px-20 border-y border-gray-200 overflow-hidden relative">
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-60"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-600"></span>
              </div>
              <span className="text-sm font-bold tracking-[0.2em] text-gray-400 uppercase">
                Live Status
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black">
              What I&apos;m Currently Doing
            </h2>
          </motion.div>
        </div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-20 md:mb-24">
          {focusItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: item.delay, ease: "easeOut" }}
              className={`group relative p-8 md:p-10 rounded-3xl bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-black/10 transition-all duration-500 overflow-hidden ${item.span}`}
            >
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <span className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-widest uppercase text-gray-500 border border-gray-200 rounded-full bg-gray-50">
                    {item.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
                    {item.title}
                  </h3>
                </div>
                
                <p className="text-base md:text-lg text-gray-500 font-light leading-relaxed group-hover:text-black transition-colors duration-300 mt-8">
                  {item.description}
                </p>
              </div>

              <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-gray-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        {/* NEW: Categorized Research Interests Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col items-center md:items-start border-t border-gray-200 pt-12 md:pt-16"
        >
          <div className="flex flex-col md:flex-row items-start gap-12 w-full">
            
            {/* Title for the section */}
            <div className="md:w-1/3 flex-shrink-0 text-center md:text-left sticky top-32">
              <h3 className="text-2xl font-bold text-black mb-2">Core Research Interests</h3>
              <p className="text-sm text-gray-500 font-light">Areas of deep focus categorized by engineering domain.</p>
            </div>

            {/* The Categorized Tags Container */}
            <div className="md:w-2/3 flex flex-col gap-10 w-full">
              {categorizedInterests.map((group, groupIndex) => (
                <div key={groupIndex} className="flex flex-col w-full">
                  {/* Category Header */}
                  <h4 className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-4 text-center md:text-left border-b border-gray-200 pb-2">
                    {group.category}
                  </h4>
                  
                  {/* Category Pills */}
                  <div className="flex flex-wrap justify-center md:justify-start gap-3">
                    {group.items.map((interest, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        // Stagger the animation so they pop in nicely
                        transition={{ duration: 0.4, delay: (groupIndex * 0.1) + (index * 0.05) + 0.2 }}
                        className="px-5 py-2.5 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-600 hover:text-black hover:border-black/20 hover:shadow-md transition-all duration-300 cursor-default"
                      >
                        {interest}
                      </motion.span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default CurrentFocus;