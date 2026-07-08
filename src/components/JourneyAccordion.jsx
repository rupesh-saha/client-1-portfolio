'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const journeyData = [
  {
    title: "Curiosity Spark",
    tag: "Age Fifteen",
    content: "At fifteen, on one occasion, I went to a garment manufacturing facility operated by a family acquaintance. I observed the complex but organized nature of industrial production, from self-generated power systems and coordinated washing and cutting operations to continuous machinery operation and efficient manufacturing that turned my curiosity into an interest in industry and mechanical systems, leading me to Industrial and Production Engineering."
  },
  {
    title: "Started Building",
    tag: "Academic Excellence",
    content: "I maintained academic excellence throughout my secondary and higher secondary education, achieving a perfect 5.00 out of 5.00 in both board examinations. Following that, I competed in the highly selective IUT (subsidiary organ of OIC) admission examination and secured a place in the Industrial and Production Engineering program, which aligned perfectly with my academic aspirations and engineering ambitions."
  },
  {
    title: "Exploration & Growth",
    tag: "Leadership",
    content: "Throughout my academic journey, I strived to balance academic excellence with meaningful extracurricular involvement. Beyond the classroom, I developed my leadership and teamwork skills through active participation in university clubs, including the IUT CAD Society and ASME IUT Student Section. I also built and led my own team for competitions and research initiatives, which shaped me into a more collaborative, driven, and purpose-oriented engineer."
  },
  {
    title: "Current Focus",
    tag: "Professional Dev",
    content: "I am currently seeking graduate research opportunities to deepen my academic knowledge and engineering expertise. Alongside this, I am actively developing my professional skills through hands-on experience in reverse engineering, product lifecycle estimation, and preventive maintenance via analysis, continuously working to grow as an engineer and researcher."
  },
  {
    title: "Future Vision",
    tag: "Research & Impact",
    content: "I aim to pursue graduate studies in areas aligned with my research interests, with a strong commitment to working dedicatedly and sincerely toward meaningful research outcomes. I will always be eager to embrace new experiences and continuously expand my knowledge across diverse domains so that I can contribute effectively to my research and research group. My ultimate goal is to produce impactful work that benefits academia and industry, creating lasting value for both."
  },
  {
    title: "My Mission",
    tag: "Core Objective",
    content: "I want to gather deep expertise through my studies and professional experience and use it to do research work that truly matters for industry and humanity. At the end of the day, I want to be known as a smart, impactful engineer and researcher who contributed something meaningful to the world."
  }
];

const JourneyAccordion = () => {
  const [expandedIndex, setExpandedIndex] = useState(0); 

  return (
    <section className="w-full bg-white text-black py-24 md:py-32 px-6 md:px-12 lg:px-20 min-h-screen">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-20 text-center md:text-left">
          <h2 className="text-[12vw] md:text-[5vw] font-bold tracking-tighter leading-none mb-4">
            My Journey
          </h2>
          <div className="w-full h-[1px] bg-black mt-12"></div>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col">
          {journeyData.map((item, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <div 
                key={index} 
                className="border-b border-gray-300 group cursor-pointer"
                onClick={() => setExpandedIndex(isExpanded ? null : index)}
              >
                {/* Accordion Header */}
                <div className="py-8 md:py-10 flex items-center justify-between transition-colors duration-300 hover:bg-gray-50 px-4 md:px-8 -mx-4 md:-mx-8 rounded-xl">
                  
                  {/* Adjusted Typography for the Title */}
                  <h3 className="text-2xl md:text-4xl lg:text-5xl font-medium tracking-tight text-black transition-transform duration-300 group-hover:translate-x-2">
                    {item.title}
                  </h3>

                  {/* Right Side: Tag and Animated Icon */}
                  <div className="flex items-center gap-6 md:gap-12 ml-4">
                    <span className="hidden md:block text-sm font-medium text-gray-500 uppercase tracking-widest">
                      {item.tag}
                    </span>
                    
                    {/* Animated Plus/Cross Icon */}
                    <motion.div
                      animate={{ rotate: isExpanded ? 45 : 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="text-2xl md:text-4xl font-light text-gray-400 group-hover:text-black flex-shrink-0"
                    >
                      +
                    </motion.div>
                  </div>
                </div>

                {/* Accordion Content (Animated Height) */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: { opacity: 1, height: "auto", marginBottom: "3rem" },
                        collapsed: { opacity: 0, height: 0, marginBottom: "0rem" }
                      }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden px-4 md:px-8"
                    >
                      <div className="max-w-3xl pt-2">
                        <p className="text-lg md:text-xl font-light text-gray-600 leading-relaxed">
                          {item.content}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default JourneyAccordion;