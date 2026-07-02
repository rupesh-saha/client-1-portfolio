'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const publishedWork = {
  title: "Conceptual System Design of a Mother-Daughter Lunar Rover for South-Polar Exploration: Dust-Resilient Mobility, Uneven Terrain Navigation, and Multi-Stage Sample Collection",
  authors: "Khan, M. I. H., Shourov, I. R., Nafim, R. I., Arnob, P. H., Siddiquee, S., Munna, S. A., Washee, T. K., Mayaz, M. H. J., Ridita, T. A., & Rohan, A. I. (2025)",
  doi: "https://doi.org/10.46254/ba08.20250465",
  image: "/rover-presentation.jpeg",
  status: "Published"
};

const ongoingWorks = [
  {
    title: "Reducing Hand-Arm Vibration Through Anthropometric-Based Ergonomic Design of a Power-Driven Hand Drill",
    context: "Presented as first author in the 3rd International Conference on Mechanical, Manufacturing and Process Engineering (ICMMPE 2026).",
    target: "Targeting: AIP Conference Proceedings Platform",
    image: "/drill-presentation.jpeg",
    status: "Under Review / Post-Conference"
  },
  {
    title: "MD Simulation of TMDs Material",
    context: "Preparing the manuscript on MD simulation of TMDs material for journal publication.",
    target: "Targeting: Peer-Reviewed Journal",
    image: "/md-simulation.png",
    status: "Manuscript in Preparation"
  }
];

const conceptionCompetitions = [
  { name: "Senior Design Competition (8th IEOM)", position: "1st Position", date: "November 2025" },
  { name: "IMechE Design Challenge (Grain Dryer)", position: "Champion", date: "November 2025" },
  { name: "International Mars Base Design Challenge 2025", position: "4th Position Globally", date: "February 2025" }
];

export default function ResearchPage() {
  const pageRef = useRef(null);
  const darkSectionRef = useRef(null);
  
  // State to track which image is currently clicked/expanded
  const [expandedImage, setExpandedImage] = useState(null);
  
  // Parallax scroll effect for the Hero Image
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  useEffect(() => {
    // GSAP Fade Up Animations
    const revealElements = gsap.utils.toArray('.gsap-fade-up');
    revealElements.forEach((el) => {
      gsap.fromTo(el,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 1, ease: "power3.out",
          scrollTrigger: {
            trigger: el, start: "top 85%", toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, []);

  return (
    <div ref={pageRef} className="bg-[#f5f5f7] text-black font-sans selection:bg-black selection:text-white pb-0">
      
      {/* 1. HERO & PUBLISHED WORK */}
      <section className="pt-32 md:pt-48 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto mb-32">
        <div className="mb-20">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm font-bold tracking-[0.2em] text-gray-400 uppercase mb-4 block">
            Academic Contributions
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight">
            Research & <br/> Publications.
          </motion.h1>
        </div>

        <div className="gsap-fade-up border-t border-gray-300 pt-12">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            
            <div className="lg:w-1/3 flex flex-col gap-6 relative z-10">
              <span className="w-fit px-4 py-1.5 rounded-full bg-black text-white text-xs font-bold tracking-widest uppercase">
                {publishedWork.status}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                {publishedWork.title}
              </h2>
              <p className="text-sm text-gray-500 font-mono leading-relaxed">
                {publishedWork.authors}
              </p>
              <a href={publishedWork.doi} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest w-fit mt-4">
                <span className="border-b border-black pb-1 group-hover:pr-4 transition-all duration-300">View Publication</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </a>
            </div>

            {/* Huge Presentation Image - Added onClick and cursor-zoom-in */}
            <div 
              className="lg:w-2/3 w-full h-[400px] md:h-[600px] rounded-3xl overflow-hidden relative group border border-gray-200 bg-gray-200 cursor-zoom-in"
              onClick={() => setExpandedImage(publishedWork.image)}
            >
              <motion.img 
                style={{ y }}
                src={publishedWork.image} 
                alt="Presenting lunar rover paper" 
                className="w-full h-[120%] object-cover absolute top-[-10%]" 
              />
            </div>
          </div>
        </div>
      </section>


      {/* 2. ONGOING MANUSCRIPTS */}
      <section className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto mb-40">
        <div className="gsap-fade-up border-b border-gray-300 pb-6 mb-12 flex justify-between items-end">
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight">Active Manuscripts</h3>
          <span className="text-gray-400 text-sm font-mono hidden md:block">02 Projects in Pipeline</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {ongoingWorks.map((work, idx) => (
            <div key={idx} className="gsap-fade-up group flex flex-col gap-6">
              {/* Image Box - Added onClick and cursor-zoom-in */}
              <div 
                className="w-full aspect-[4/3] rounded-3xl bg-gray-100 border border-gray-200 shadow-sm overflow-hidden relative flex items-center justify-center group-hover:shadow-xl transition-all duration-500 cursor-zoom-in"
                onClick={() => setExpandedImage(work.image)}
              >
                <img 
                  src={work.image} 
                  alt={work.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              <div className="flex flex-col gap-3 pr-8">
                <span className="text-xs font-bold tracking-widest uppercase text-blue-600 bg-blue-50 w-fit px-3 py-1 rounded-full border border-blue-100">
                  {work.status}
                </span>
                <h4 className="text-xl md:text-2xl font-bold leading-snug">{work.title}</h4>
                <p className="text-sm text-gray-600 font-light leading-relaxed">{work.context}</p>
                <p className="text-xs font-mono text-gray-400 mt-2">{work.target}</p>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* 3. CONCEPTION ENGINEERING (Dark Mode Breakout Section) */}
      <section ref={darkSectionRef} className="bg-[#050505] text-[#ededed] py-32 px-6 md:px-12 lg:px-20 rounded-t-[3rem] md:rounded-t-[5rem] relative overflow-hidden">
        
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none z-0"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white opacity-[0.02] blur-[150px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-24">
            <div className="lg:col-span-7 gsap-fade-up">
              <span className="text-xs font-bold tracking-[0.3em] text-gray-500 uppercase mb-6 block border-l-2 border-green-500 pl-4">
                Competition & Research Team
              </span>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
                Conception <br className="hidden md:block" /> Engineering.
              </h2>
              <div className="space-y-6 text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-2xl">
                <p>
                  I started this competition and research team back in January 2025. My main goal was to create a space where we could challenge ourselves in national and international competitions while also diving deep into the research topics we are genuinely passionate about.
                </p>
                <p>
                  Equally important to me is creating a collaborative environment where other students feel motivated to try research for the first time. We are completely self-funded by the students themselves, and our ultimate goal is to grow a community of research enthusiasts.
                </p>
                <p className="text-white font-medium">
                  We want to give students a place to start their journey from scratch and guide them so that they can boost their potential and create a lasting impact both in their own fields and across different sectors.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-6 gsap-fade-up">
              <div className="bg-[#111] border border-white/10 rounded-3xl p-8 hover:border-white/30 transition-colors">
                <h4 className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-4">Team Research Output</h4>
                <p className="text-base text-gray-300 font-medium leading-relaxed">
                  Published: Conceptual System Design of a Mother-Daughter Lunar Rover for South-Polar Exploration.
                </p>
              </div>
              
              <div className="bg-[#111] border border-white/10 rounded-3xl p-8 flex flex-col gap-6">
                <h4 className="text-sm font-bold tracking-widest text-gray-500 uppercase">Competition Podium Finishes</h4>
                {conceptionCompetitions.map((comp, i) => (
                  <div key={i} className="flex flex-col border-l-2 border-white/20 pl-4">
                    <span className="text-xs font-mono text-gray-500 mb-1">{comp.date}</span>
                    <h5 className="text-lg font-bold text-white leading-snug">{comp.name}</h5>
                    <span className="text-sm font-medium text-green-400 mt-1">{comp.position}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FULLSCREEN IMAGE MODAL / LIGHTBOX */}
      <AnimatePresence>
        {expandedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-12 cursor-zoom-out"
            onClick={() => setExpandedImage(null)} // Click anywhere to close
          >
            {/* Close Button */}
            <button 
              className="absolute top-6 right-6 md:top-10 md:right-10 text-white bg-black/50 hover:bg-white hover:text-black rounded-full p-3 transition-colors z-[110]"
              onClick={() => setExpandedImage(null)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>

            {/* The Expanded Image */}
            <motion.img 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              src={expandedImage} 
              alt="Expanded view" 
              className="max-w-full max-h-full rounded-2xl shadow-2xl object-contain cursor-default"
              onClick={(e) => e.stopPropagation()} // Clicking the image itself won't close it
            />
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}