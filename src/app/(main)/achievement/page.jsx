'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
    images: ["/placeholder-1.jpg", "/placeholder-2.png"],
    driveLink: "https://drive.google.com/drive/folders/1tJC1f08cQmg8EeYieFGUWFUbpuVKdVZW?usp=sharing"
  },
  {
    title: "Certified SOLIDWORKS Associate (CSWA)",
    date: "October 2023",
    id: "C-5VJRFA24EC",
    description: "Achieved full marks (240/240) on the Certified SOLIDWORKS Associate (CSWA) exam, demonstrating strong proficiency in CAD modeling and core design principles. This perfect score reflects my strong foundation in creating accurate parts and assemblies efficiently.",
    images: ["/placeholder-3.jpg"],
    driveLink: "https://drive.google.com/drive/folders/1kLVOnMsySujQyMSq_h2yL67sMXXpNdM2?usp=sharing"
  }
];

const achievements = [
  {
    title: "Student Achievement Award 2026",
    role: "Awardee",
    date: "May 2026",
    description: "Received the Student Achievement Award at the IUT Excellence Award Ceremony 2026 for winning multiple national and international competitions. I was deeply honored to accept this recognition from H.E. Dr. A N M Ehsanul Hoque Milon, the Honorable Minister of Education of Bangladesh.",
    image: "/Student Achievement Award 2026.jpeg",
    driveLink: "https://drive.google.com/drive/folders/1-XU89BqAXwQhWe-7GHq1CtNUL2uOvqxS?usp=sharing"
  },
  {
    title: "Senior Design Competition in 8th IEOM Bangladesh International Conference",
    role: "First Place",
    date: "November 2025",
    description: "Led the full lifecycle of our senior design project, managing three sub-teams and overseeing all sections to secure 1st place in the competition. I presented our work at the 8th IEOM Bangladesh International Conference, where it was successfully published as a paper.",
    image: "/Senior Design Competition (8th IEOM Conference).png",
    driveLink: "https://drive.google.com/file/d/10vKHYeknGYqaLm2U-ZXIy7_WW4zhnZq3/view?usp=sharing"
  },
  {
    title: "IMechE Mechanical Engineering Design Competition 2025 Theme: Grain Dryer",
    role: "Champion",
    date: "November 2025",
    description: "Led the development of a smart, sustainable grain-drying system featuring efficient heat distribution, uniform handling, and IoT monitoring. I designed the entire internal system for optimal production efficiency, created all CAD models, and prepared the complete project documentation.",
    image: "/IMechE Mechanical Engineering Design Competition.jpeg",
    driveLink: "https://drive.google.com/drive/folders/1WwL4_2IF5fPtPkYmbDZbMu8bIpRE42dP?usp=sharing"
  },
  {
    title: "International Mars Base Challenge 2025 | Space Robotics Society (SPROS)",
    role: "4th position",
    date: "February 2025",
    description: "Led a team in an international design competition, securing a spot in the top 11 worldwide. After I presented our work in the interview stage, my team won 4th place globally, where I created the core design concept for Mars 2040 and developed advanced habitat designs for Mars 2060.",
    image: "/International Mars Base Challenge 2025 (SPROS).png",
    driveLink: "https://drive.google.com/drive/folders/18vE_LwPv41QJBEpMc7EHk0LRpAPSKZhb?usp=sharing"
  },
  {
    title: "Calibration 1.0 - National CAD Competition",
    role: "Champion",
    date: "February 2024",
    description: "Secured 1st place among 37 teams in a national competition at Khulna University of Engineering & Technology (KUET) as a core team member. My responsibility was to create highly accurate CAD models for precise assembly, which proved my design skills, teamwork, problem-solving, and ability to handle pressure within a team.",
    image: "/Calibration 1.0 - National CAD Competition.jpeg",
    driveLink: "https://drive.google.com/file/d/1UhaglVN9uJf1PDUh4-20KImxp5TeTRv4/view?usp=sharing"
  },
  {
    title: "Ignition 2023 - National CAD Competition",
    role: "1st Runner-Up",
    date: "October 2023",
    description: "Secured 1st runner-up in a competition where my team and I developed a practical home appliance product. I designed a model that integrated a stacking mechanism while ensuring it was ergonomically accurate, demonstrating strong teamwork and user-centered design.",
    image: null, 
    driveLink: "https://drive.google.com/drive/folders/1-XU89BqAXwQhWe-7GHq1CtNUL2uOvqxS?usp=sharing"
  }
];

const leaderships = [
  {
    role: "President, IUT CAD Society",
    org: "Islamic University of Technology, Bangladesh",
    date: "2022 - October 2025",
    description: "Served for 3 years (from 2nd to 4th year), enhancing the IUT CAD Society curriculum by introducing PCB design and upgrading SolidWorks and AutoCAD training. I organized the intra-CAD competition \"Traction\" and coordinated the training of over 270 first-year students annually for competitions and practical applications.",
    image: "/IUT CAD Society.png",
    driveLink: "#" 
  },
  {
    role: "Team Lead, Conception Engineering",
    org: "Self-funded Competition and Research Team",
    date: "September 2024 - Present",
    description: "As the Founder and Team Lead of Conception Engineering, I lead our team in competing and innovating for national and international design competitions. Our core mission is to pursue impactful research and mentor new researchers by working together in a highly collaborative environment.",
    image: "/Conception.jpg",
    driveLink: "#" 
  },
  {
    role: "Secretary of Research & Development, ASME IUT Student Section",
    org: "Islamic University of Technology, Bangladesh",
    date: "2022 - October 2025",
    description: "Contributed strategic ideas for scholarships, E-Fest initiatives, and skill development seminars to enhance the ASME IUT Student Section, actively driving student engagement and professional growth.",
    image: "/ASME IUT Student Section.jpg",
    driveLink: "#" 
  },
  {
    role: "Senior Executive in Mechanical Design Team, Project Altair",
    org: "Islamic University of Technology, Bangladesh",
    date: "2022 - October 2025",
    description: "Worked as a mechanical design engineer for Project Altair, dedicating my efforts to the IRDC competition. I designed the rover's gripper system and performed critical part editing to ensure precise functionality and performance.",
    image: null,
    driveLink: "#" 
  }
];

// Reusable Button Component for Drive Links
const DriveLinkButton = ({ url }) => {
  if (!url || url === "#") return null; 
  
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="group inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-black border-b border-black/30 hover:border-black pb-1 mt-6 transition-all duration-300 w-fit"
    >
      <span>See more pics</span>
      <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
      </svg>
    </a>
  );
};

export default function AchievementPage() {
  const containerRef = useRef(null);
  
  // State for Lightbox Modal
  const [expandedImage, setExpandedImage] = useState(null);

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
            start: "top 85%", 
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#f5f5f7] text-black pt-32 pb-24 md:pt-40 md:pb-32 px-6 md:px-12 lg:px-20 font-sans selection:bg-black selection:text-white relative">
      
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

        {/* SECTION 1: CERTIFICATIONS */}
        <section className="relative">
          <div className="mb-12 border-b border-gray-300 pb-6 gsap-reveal">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Certifications</h2>
          </div>

          {certifications.map((cert, index) => (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24 lg:mb-32">
              
              {/* Left: Sticky Text Description */}
              <div className="lg:col-span-5 lg:sticky lg:top-32 gsap-reveal flex flex-col">
                <span className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-widest uppercase text-gray-500 border border-gray-300 rounded-full bg-white w-fit">
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
                
                {/* Drive Link Button */}
                <DriveLinkButton url={cert.driveLink} />
              </div>

              {/* Right: Scrolling Images */}
              <div className="lg:col-span-7 flex flex-col gap-8">
                {cert.images.map((img, i) => (
                  <div 
                    key={i} 
                    className="aspect-video w-full bg-white rounded-3xl border border-gray-200 shadow-sm flex items-center justify-center p-4 gsap-reveal hover:shadow-xl transition-shadow duration-500 group overflow-hidden cursor-zoom-in"
                    onClick={() => setExpandedImage(img)}
                  >
                    <img 
                      src={img} 
                      alt={`${cert.title} - Image ${i + 1}`} 
                      className="w-full h-full object-contain rounded-xl group-hover:scale-[1.02] transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>

            </div>
          ))}
        </section>


        {/* SECTION 2: ACHIEVEMENTS */}
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
                <div className="md:w-2/3 flex flex-col">
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

                  {/* Drive Link Button */}
                  <DriveLinkButton url={achieve.driveLink} />
                </div>

                {/* Right side Image block */}
                <div className="w-full md:w-1/3 aspect-square rounded-2xl flex flex-col items-center justify-center mt-6 md:mt-0 overflow-hidden">
                  {achieve.image ? (
                    <img 
                      src={achieve.image} 
                      alt={achieve.title} 
                      className="w-full h-full object-cover rounded-2xl border border-gray-200 hover:scale-[1.03] transition-transform duration-500 cursor-zoom-in shadow-sm"
                      onClick={() => setExpandedImage(achieve.image)}
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-50 rounded-2xl border border-dashed border-gray-300 flex flex-col items-center justify-center text-gray-400 p-6 text-center">
                       <span className="text-sm font-medium mb-2">Images Unavailable</span>
                       <span className="text-xs font-light">Check the Drive link for media</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* SECTION 3: LEADERSHIP EXPERIENCE */}
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
                  <div className="flex flex-col">
                    <p className="text-base text-gray-600 font-light leading-relaxed">
                      {lead.description}
                    </p>
                    {/* Drive Link Button */}
                    <DriveLinkButton url={lead.driveLink} />
                  </div>
                  
                  {/* Miniature Image Preview Block */}
                  {lead.image && (
                    <div 
                      className="w-full h-48 bg-white rounded-xl border border-gray-200 flex items-center justify-center overflow-hidden relative group-hover:border-black/20 transition-colors shadow-sm cursor-zoom-in mt-2"
                      onClick={() => setExpandedImage(lead.image)}
                    >
                      <img 
                        src={lead.image} 
                        alt={lead.org} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                </div>

              </div>
            ))}
          </div>
        </section>

      </div>

      {/* FULLSCREEN IMAGE MODAL / LIGHTBOX */}
      <AnimatePresence>
        {expandedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-12 cursor-zoom-out"
            onClick={() => setExpandedImage(null)}
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
              onClick={(e) => e.stopPropagation()} 
            />
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}