'use client';

import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP Plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const certifications = [
  {
    title: "Certified SOLIDWORKS Professional (CSWP)",
    date: "July 21, 2025",
    id: "C-WKJRPC4GUS",
    description: "Earning my CSWP certification with a score of 301 out of 318 validated my advanced skills in 3D modeling and assembly design. Completing these complex parts under a strict time limit proved my ability to deliver high-accuracy engineering work under pressure.",
    images: ["/placeholder-1.jpg", "/placeholder-2.jpg"] // Add your actual image paths here
  },
  {
    title: "Certified SOLIDWORKS Associate (CSWA)",
    date: "October 2023",
    id: "C-5VJRFA24EC",
    description: "Achieved full marks (240/240) on the Certified SOLIDWORKS Associate (CSWA) exam, demonstrating strong proficiency in CAD modeling and core design principles. This perfect score reflects my strong foundation in creating accurate parts and assemblies efficiently.",
    images: ["/placeholder-3.jpg", "/placeholder-4.jpg"]
  }
];

const achievements = [
  {
    title: "Student Achievement Award 2026",
    role: "Awardee",
    date: "May 2026",
    description: "Received the Student Achievement Award at the IUT Excellence Award Ceremony 2026 for winning multiple national and international competitions. I was deeply honored to accept this recognition from H.E. Dr. A N M Ehsanul Hoque Milon, the Honorable Minister of Education of Bangladesh."
  },
  {
    title: "Senior Design Competition (8th IEOM Conference)",
    role: "First Place",
    date: "November 2025",
    description: "Led the full lifecycle of our senior design project, managing three sub-teams and overseeing all sections to secure 1st place in the competition. I presented our work at the 8th IEOM Bangladesh International Conference, where it was successfully published as a paper."
  },
  {
    title: "IMechE Mechanical Engineering Design Competition",
    role: "Champion",
    date: "November 2025",
    description: "Led the development of a smart, sustainable grain-drying system featuring efficient heat distribution, uniform handling, and IoT monitoring. I designed the entire internal system for optimal production efficiency, created all CAD models, and prepared the complete project documentation."
  },
  {
    title: "International Mars Base Challenge 2025 (SPROS)",
    role: "4th Position Globally",
    date: "February 2025",
    description: "Led a team in an international design competition, securing a spot in the top 11 worldwide. After I presented our work in the interview stage, my team won 4th place globally, where I created the core design concept for Mars 2040 and developed advanced habitat designs for Mars 2060."
  },
  {
    title: "Calibration 1.0 - National CAD Competition",
    role: "Champion",
    date: "February 2024",
    description: "Secured 1st place among 37 teams in a national competition at Khulna University of Engineering & Technology (KUET) as a core team member. My responsibility was to create highly accurate CAD models for precise assembly, which proved my design skills, teamwork, problem-solving, and ability to handle pressure within a team."
  },
  {
    title: "Ignition 2023 - National CAD Competition",
    role: "1st Runner-Up",
    date: "October 2023",
    description: "Secured 1st runner-up in a competition where my team and I developed a practical home appliance product. I designed a model that integrated a stacking mechanism while ensuring it was ergonomically accurate, demonstrating strong teamwork and user-centered design."
  }
];

const leaderships = [
  {
    role: "President",
    org: "IUT CAD Society",
    date: "2022 - October 2025",
    description: "Served for 3 years (from 2nd to 4th year), enhancing the IUT CAD Society curriculum by introducing PCB design and upgrading SolidWorks and AutoCAD training. I organized the intra-CAD competition \"Traction\" and coordinated the training of over 270 first-year students annually for competitions and practical applications."
  },
  {
    role: "Founder & Team Lead",
    org: "Conception Engineering",
    date: "September 2024 - Present",
    description: "As the Founder and Team Lead of Conception Engineering, I lead our team in competing and innovating for national and international design competitions. Our core mission is to pursue impactful research and mentor new researchers by working together in a highly collaborative environment."
  },
  {
    role: "Secretary of Research & Development",
    org: "ASME IUT Student Section",
    date: "2022 - October 2025",
    description: "Contributed strategic ideas for scholarships, E-Fest initiatives, and skill development seminars to enhance the ASME IUT Student Section, actively driving student engagement and professional growth."
  },
  {
    role: "Senior Executive (Mechanical Design)",
    org: "Project Altair",
    date: "2022 - October 2025",
    description: "Worked as a mechanical design engineer for Project Altair, dedicating my efforts to the IRDC competition. I designed the rover's gripper system and performed critical part editing to ensure precise functionality and performance."
  }
];

export default function AchievementPage() {
  const containerRef = useRef(null);

  // GSAP Scroll Animations
  useEffect(() => {
    const elements = gsap.utils.toArray('.gsap-reveal');
    
    elements.forEach((el) => {
      gsap.fromTo(el, 
        { opacity: 0, y: 50 }, 
        {
          opacity: 1, 
          y: 0, 
          duration: 1, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%", // Reveal when element is 85% down the screen
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#f5f5f7] text-black pt-32 pb-24 md:pt-40 md:pb-32 px-6 md:px-12 lg:px-20 font-sans selection:bg-black selection:text-white">
      
      {/* Page Header */}
      <div className="max-w-7xl mx-auto mb-24 md:mb-32">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm font-bold tracking-[0.2em] text-gray-400 uppercase mb-4 block"
        >
          Track Record
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-black leading-[1.1]"
        >
          Achievements & <br /> Certification.
        </motion.h1>
      </div>

      <div className="max-w-7xl mx-auto space-y-32 md:space-y-48">

        {/* SECTION 1: CERTIFICATIONS (Sticky Split Layout) */}
        <section className="relative">
          <div className="mb-12 border-b border-gray-300 pb-6 gsap-reveal">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Certifications</h2>
          </div>

          {certifications.map((cert, index) => (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24 lg:mb-32">
              
              {/* Left: Sticky Text Description */}
              <div className="lg:col-span-5 lg:sticky lg:top-32 gsap-reveal">
                <span className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-widest uppercase text-gray-500 border border-gray-300 rounded-full bg-white">
                  Issue Date: {cert.date}
                </span>
                <h3 className="text-3xl md:text-4xl font-bold text-black mb-4 leading-tight">
                  {cert.title}
                </h3>
                <p className="text-sm font-mono text-gray-500 mb-6 bg-gray-100 p-2 rounded w-fit">
                  ID: {cert.id}
                </p>
                <p className="text-lg text-gray-600 font-light leading-relaxed">
                  {cert.description}
                </p>
              </div>

              {/* Right: Scrolling Images */}
              <div className="lg:col-span-7 flex flex-col gap-8">
                {cert.images.map((img, i) => (
                  <div key={i} className="aspect-video w-full bg-white rounded-3xl border border-gray-200 shadow-sm flex items-center justify-center p-4 gsap-reveal hover:shadow-xl transition-shadow duration-500 group">
                    {/* Placeholder for your actual image/pdf */}
                    <div className="w-full h-full bg-gray-50 rounded-2xl border border-dashed border-gray-300 flex flex-col items-center justify-center text-gray-400 group-hover:bg-gray-100 transition-colors">
                      <svg className="w-8 h-8 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                      <span className="text-sm font-medium">Image Placeholder ({i + 1})</span>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </section>


        {/* SECTION 2: ACHIEVEMENTS (Large Editorial Blocks) */}
        <section>
          <div className="mb-16 border-b border-gray-300 pb-6 gsap-reveal">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Achievements</h2>
          </div>

          <div className="flex flex-col gap-12">
            {achievements.map((achieve, index) => (
              <div 
                key={index} 
                className="gsap-reveal bg-white border border-gray-200 rounded-[2rem] p-8 md:p-12 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-black/10 transition-all duration-500 flex flex-col md:flex-row gap-8 md:gap-12 justify-between items-start"
              >
                <div className="md:w-2/3">
                  <div className="flex flex-wrap gap-3 mb-6">
                    <span className="px-3 py-1 text-xs font-semibold tracking-widest uppercase text-white bg-black rounded-full">
                      {achieve.role}
                    </span>
                    <span className="px-3 py-1 text-xs font-semibold tracking-widest uppercase text-gray-600 bg-gray-100 border border-gray-200 rounded-full">
                      {achieve.date}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl md:text-4xl font-bold text-black mb-6 leading-tight">
                    {achieve.title}
                  </h3>
                  
                  <p className="text-base md:text-lg text-gray-500 font-light leading-relaxed">
                    {achieve.description}
                  </p>
                </div>

                {/* Right side Image block */}
                <div className="w-full md:w-1/3 aspect-square bg-gray-50 rounded-2xl border border-dashed border-gray-300 flex flex-col items-center justify-center text-gray-400 mt-6 md:mt-0">
                  <span className="text-sm font-medium px-4 text-center">Insert Image/Certificate Here</span>
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* SECTION 3: LEADERSHIP EXPERIENCE (Interactive List) */}
        <section>
          <div className="mb-12 border-b border-gray-300 pb-6 gsap-reveal">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Leadership</h2>
          </div>

          <div className="flex flex-col border-t border-gray-300">
            {leaderships.map((lead, index) => (
              <div 
                key={index} 
                className="gsap-reveal py-10 border-b border-gray-300 group grid grid-cols-1 md:grid-cols-12 gap-6 items-start"
              >
                
                {/* Left: Role & Date */}
                <div className="md:col-span-4 flex flex-col">
                  <h3 className="text-xl md:text-2xl font-bold text-black group-hover:translate-x-2 transition-transform duration-300">
                    {lead.role}
                  </h3>
                  <span className="text-sm text-gray-500 font-medium mt-2">
                    {lead.date}
                  </span>
                </div>

                {/* Middle: Organization */}
                <div className="md:col-span-3">
                  <h4 className="text-lg text-black font-serif italic border-l-2 border-black pl-4">
                    {lead.org}
                  </h4>
                </div>

                {/* Right: Description & Images */}
                <div className="md:col-span-5 flex flex-col gap-6">
                  <p className="text-base text-gray-600 font-light leading-relaxed">
                    {lead.description}
                  </p>
                  
                  {/* Miniature Image Preview Block */}
                  <div className="w-full h-32 bg-gray-100 rounded-xl border border-gray-200 flex items-center justify-center overflow-hidden relative group-hover:border-black/20 transition-colors">
                     <span className="text-xs text-gray-400">Hover/Click for images</span>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}