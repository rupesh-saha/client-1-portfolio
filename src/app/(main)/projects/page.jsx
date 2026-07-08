'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// ---------------------------------------------------------
// DATA CONFIGURATION
// ---------------------------------------------------------
const projectsData = [
  {
    id: "ongoing",
    title: "ONGOING PROJECTS",
    software: "SolidWorks, Inventor, ANSYS",
    description: [
      "I am focused on advancing my expertise in compliant mechanisms, topology optimization, medical devices, assistive technology, and additive manufacturing to lay a strong foundation for my upcoming graduate studies.",
      "Driven by a commitment to continuous learning, I am actively building projects in these areas to sharpen my technical skills and prepare for meaningful academic research."
    ],
    images: ["/placeholder1.png", "/placeholder2.png"], 
    isSpecial: false
  },
  {
    id: "hand-drill",
    title: "POWER-DRIVEN HAND DRILL MACHINE",
    software: "SolidWorks, ANSYS, KeyShot, Arduino IDE",
    description: [
      "Ergonomic Design: Designed a cordless drill utilizing an eccentricity-based layout to improve drilling precision and reduce user fatigue.",
      "Vibration Control: Incorporated PORON foam and rubber damping layers to actively minimize tool vibration.",
      "Biomechanical Testing: Validated the ergonomic improvements through empirical testing using EMG and vibration sensors."
    ],
    images: ["/placeholder3.png", "/placeholder4.png","/placeholder5.png", "/placeholder6.jpeg","/placeholder7.png", "/placeholder8.png","/placeholder9.jpeg"],
    isSpecial: false
  },
  {
    id: "mars-base",
    title: "MARS BASE 2040 CHALLENGE",
    software: "SolidWorks, KeyShot, Blender",
    description: [
      "Project Leadership: Led the team in designing a sustainable Mars habitat roadmap (2040–2060), focusing on life support, energy systems, autonomous infrastructure, and scalability.",
      "Site Selection: Selected and justified an optimal Martian location for long-term human settlement based on resource availability.",
      "Global Recognition: Personally presented the project through a successful interview evaluation, securing 4th position globally in the international Mars Base Challenge."
    ],
    images: ["/placeholder10.png", "/placeholder11.png","/placeholder12.png", "/placeholder13.png","/placeholder14.JPG"],
    isSpecial: false
  },
  {
    id: "rover",
    title: "ROVER DESIGN CHALLENGE",
    software: "SolidWorks, ANSYS, KeyShot, Blender",
    description: [
      "System Development: Designed a multi-functional rover for challenging exploration environments, developing robust mechanical, electronic, scientific, and power subsystems.",
      "Mobility & Manipulation: Integrated a rocker-bogie suspension system for terrain adaptability and a custom robotic arm for sample handling and payload operations.",
      "Navigation & Power: Equipped the rover with onboard sensors and cameras for hazard detection, alongside a solar-powered energy system for long-term operational reliability."
    ],
    images: ["/placeholder15.jpeg", "/placeholder16.jpeg","/placeholder17.png", "/placeholder18.png","/placeholder19.JPG"],
    isSpecial: false
  },
  {
    id: "rover-analysis",
    title: "ROVER DESIGN CHALLENGE (Analysis)",
    software: "SolidWorks, ANSYS, KeyShot, Blender",
    description: [
      "Structural Evaluation: Performed comprehensive structural analysis of the rover chassis using ANSYS to evaluate overall strength, durability, and load-bearing performance under mission-specific conditions.",
      "Reliability Analysis: Assessed deformation characteristics and structural integrity under stress to ensure the chassis remains reliable and secure during operations."
    ],
    images: ["/placeholder20.png", "/placeholder21.png","/placeholder22.png", "/placeholder23.png","/placeholder24.png"],
    isSpecial: false
  },
  {
    id: "toothbrush",
    title: "eTOOTH BRUSH DESIGN",
    software: "SolidWorks, KeyShot, Blender",
    description: [
      "Product Design: Designed a fully functional 3D model of an electric toothbrush that integrates a custom mechanical dispensing system for direct toothpaste delivery.",
      "Functional Innovation: Enabled automated paste flow straight through the bristles to maximize user convenience and efficiency.",
      "User Experience: Focused on optimizing usability, ergonomics, and structural design to deliver an enhanced oral care experience."
    ],
    images: ["/placeholder25.png", "/placeholder26.JPG","/placeholder27.png", "/placeholder28.png","/placeholder29.png"],
    isSpecial: false
  },
  {
    id: "grain-dryer",
    title: "INNOVATIVE GRAIN DRYER",
    software: "SolidWorks, KeyShot, Blender",
    description: [
      "IoT Automation: Smart sensors control temperature (43–50 °C) and automate drying and discharge.",
      "Hybrid Energy: Uses solar power and biomass for efficient, low-cost, and sustainable drying.",
      "Uniform Drying: Dual-shell chamber and helical mixer ensure even drying and prevent grain damage.",
      "User-Friendly Design: Compact, lightweight, and locally manufacturable for easy use in rural areas.",
      "High Capacity: Dries 1000–2000 kg per batch with improved safety, hygiene, and energy efficiency."
    ],
    images: ["/placeholder30.png", "/placeholder31.png","/placeholder32.png", "/placeholder33.png","/placeholder34.JPG","placeholder35.png",'placeholder36.png'],
    isSpecial: false
  },
  {
    id: "table",
    title: "MULTIFUNCTIONAL ERGONOMIC TABLE",
    software: "SolidWorks, KeyShot, Blender",
    description: [
      "Ergonomic Design: Engineered a multifunctional workstation featuring an adjustable-height table for seamless sitting and standing modes.",
      "Smart Integration: Integrated a 3-axis motorized laptop stand that aligns flush with the surface when not in use.",
      "Mechanical Innovation: Developed foldable hand rests for enhanced comfort alongside an innovative rotation-to-linear keyboard drawer mechanism."
    ],
    images: ["/placeholder37.png", "/placeholder81.png","/placeholder39.JPG", "/placeholder40.png","/placeholder41.png","placeholder42.png",'placeholder43.JPG','placeholder44.JPG'],
    isSpecial: false
  },
  {
    id: "femur",
    title: "FEMUR BONE STRENGTH ANALYSIS DEPENDS ON AGE, GENDER & MOVEMENTS",
    software: "SolidWorks, ANSYS",
    description: [
      "The Stress Paradox: FEA revealed that while the femur loses rigidity and deforms more with age, its ability to distribute internal stress remains surprisingly stable and identical across both genders.",
      "Better Risk Tracking: The data proves that structural deformation, not internal stress, is the true indicator of age-related bone weakening and fracture risk.",
      "The High-Risk Zone: Pinpointed the femoral neck as the precise hotspot where peak stress and deformation collide, directly mapping out why this area is so prone to hip fractures.",
      "Smart Orthotics Blueprint: Provided the exact load-bearing data needed to develop custom, sensor-mapped orthotics that can track bone strain in real time and prevent injuries before they happen."
    ],
    images: ["/placeholder45.png", "/placeholder46.png","/placeholder47.JPG", "/placeholder48.png","/placeholder49.jpg","placeholder50.png",'placeholder51.jpg','placeholder52.jpg','placeholder53.jpg'],
    isSpecial: false
  },
  {
    id: "several",
    title: "SEVERAL PROJECTS ON MACHINE, INSTRUMENTS, INDUSTRIAL, PRODUCT, AND MECHANISMS DESIGN",
    software: "SolidWorks, KeyShot",
    description: [],
    images: ["/placeholder54.png", "/placeholder55.png","/placeholder56.png", "/placeholder57.png","/placeholder58.png","placeholder58.png",'placeholder60.png','placeholder61.JPG','placeholder62.png','placeholder63.png','placeholder64.png','placeholder65.png'],
    isSpecial: true 
  }
];

// ---------------------------------------------------------
// COMPONENT (Ensure this entire block is pasted!)
// ---------------------------------------------------------
export default function ProjectsPage() {
  const containerRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);

  // GSAP for initial grid reveal
  useEffect(() => {
    const elements = gsap.utils.toArray('.project-card');
    elements.forEach((el) => {
      gsap.fromTo(el,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%" }
        }
      );
    });
    
    // Disable body scroll when modal is open
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [selectedProject]);

  // Framer Motion variants for staggering images
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } }
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-[#f5f5f7] text-black pt-32 pb-24 md:pt-40 md:pb-32 px-6 md:px-12 lg:px-20 font-sans selection:bg-black selection:text-white">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-20 md:mb-32">
        <h2 className="text-sm font-bold tracking-[0.2em] text-gray-400 uppercase mb-4">Portfolio</h2>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-black leading-[1.1]">
          Engineering <br /> Projects.
        </h1>
      </div>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {projectsData.map((project) => (
          <div 
            key={project.id} 
            className="project-card group cursor-pointer flex flex-col gap-6"
            onClick={() => setSelectedProject(project)}
          >
            {/* Project Card Cover */}
            <div className="w-full aspect-[4/3] rounded-3xl bg-gray-200 border border-gray-300 overflow-hidden relative shadow-sm group-hover:shadow-xl transition-all duration-500">
              {project.images[0] ? (
                <img 
                  src={project.images[0]} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium">Cover Image Placeholder</div>
              )}
              
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="bg-white text-black px-6 py-3 rounded-full font-bold uppercase tracking-widest text-xs shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  View Project
                </span>
              </div>
            </div>
            
            {/* Project Titles */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold leading-snug mb-2 group-hover:text-gray-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-xs font-bold tracking-widest uppercase text-blue-600">
                {project.software}
              </p>
            </div>
          </div>
        ))}
      </div>


      {/* FULL-SCREEN OVERLAY (Acts as the "New Route") */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[100] bg-[#fafafa] overflow-y-auto"
          >
            {/* Sticky Header with Back Button */}
            <div className="sticky top-0 w-full bg-[#fafafa]/80 backdrop-blur-xl border-b border-gray-200 z-[110] px-6 py-6 md:px-12 flex justify-between items-center">
              <button 
                onClick={() => setSelectedProject(null)}
                className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-gray-500 transition-colors"
              >
                <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                Back to Projects
              </button>
            </div>

            <div className="max-w-5xl mx-auto pt-20 pb-32 px-6 md:px-12">
              
              {/* Title & Software */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-16"
              >
                <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                  {selectedProject.title}
                </h1>
                <span className="inline-block px-4 py-2 text-xs font-bold tracking-widest uppercase text-white bg-black rounded-full">
                  {selectedProject.software}
                </span>
              </motion.div>

              {/* Description */}
              {!selectedProject.isSpecial && selectedProject.description.length > 0 && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mb-20 space-y-6 text-lg text-gray-600 font-light leading-relaxed border-l-2 border-black pl-6"
                >
                  {selectedProject.description.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </motion.div>
              )}

              {/* Staggered Images Gallery */}
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-col gap-8 md:gap-16"
              >
                {selectedProject.images.map((img, i) => (
                  <motion.div 
                    key={i} 
                    variants={imageVariants}
                    className="w-full bg-gray-100 rounded-3xl overflow-hidden shadow-lg border border-gray-200"
                  >
                    <img 
                      src={img} 
                      alt={`${selectedProject.title} detail ${i + 1}`} 
                      className="w-full h-auto object-contain"
                    />
                  </motion.div>
                ))}
              </motion.div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}