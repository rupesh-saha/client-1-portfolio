'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const IntroSec = () => {
  // Framer Motion animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const imageReveal = {
    hidden: { opacity: 0, scale: 0.95, filter: 'blur(10px)' },
    visible: { 
      opacity: 1, 
      scale: 1, 
      filter: 'blur(0px)',
      transition: { duration: 1, ease: "easeOut" } 
    }
  };

  return (
    <section className="w-full bg-white text-black py-24 md:py-32 px-6 md:px-12 lg:px-20 overflow-hidden relative z-10" id="about">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* LEFT SIDE: The Image */}
        <motion.div 
          className="lg:col-span-5 w-full relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={imageReveal}
        >
          {/* Subtle decorative background block for depth */}
          <div className="absolute -inset-4 bg-gray-100 rounded-[2rem] -z-10 transform -rotate-3"></div>
          
          <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:max-w-full overflow-hidden rounded-3xl shadow-2xl">
            <Image
              src="/IMG_1409.jpg" 
              alt="MD IBRAHIM HOSSAIN KHAN"
              fill
              className="object-cover object-center hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </motion.div>

        {/* RIGHT SIDE: Intro & Stats */}
        <motion.div 
          className="lg:col-span-7 flex flex-col justify-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Eyebrow & Headline */}
          <motion.div variants={fadeUp} className="mb-8">
            <span className="text-sm font-bold tracking-[0.2em] text-gray-400 uppercase mb-4 block">
              About Me
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              Hi, I&apos;m MD IBRAHIM <br className="hidden md:block"/> HOSSAIN KHAN
            </h2>
            <h3 className="text-xl md:text-2xl font-light text-gray-500 italic">
              A passionate engineer, researcher, and problem solver.
            </h3>
          </motion.div>

          {/* Bio Paragraphs */}
          <motion.div variants={fadeUp} className="text-base md:text-lg text-gray-600 font-light leading-relaxed mb-10 space-y-4">
            <p>
              I am an Industrial & Production Engineering graduate specializing in engineering design, advanced manufacturing, materials, and bio-inspired design. My academic and professional work spans CAD modeling, FEA-driven analysis, manufacturing, molecular dynamics simulation of nanomaterials, and maintenance.
            </p>
            <p>
              I am deeply drawn to advanced and additive manufacturing, design, robotics, bio-inspired design, and materials science, where design thinking meets emerging technology. I believe in solving real engineering challenges through rigorous iteration, innovative design, and a KAIZEN mindset. My goal is to work at the intersection of materials, design, manufacturing, and intelligent systems to develop high-performance, reliable, and sustainable engineering solutions.
            </p>
          </motion.div>

          {/* Stat Cards Grid (Replaces the placeholder list) */}
          <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {/* Degree Card */}
            <div className="p-6 border border-gray-200 rounded-2xl bg-gray-50 hover:border-black transition-colors">
              <h4 className="text-sm font-bold text-black mb-1">B.Sc. Degree</h4>
              <p className="text-sm text-gray-600">Industrial and Production Engineering</p>
            </div>
            
            {/* CGPA Card (Highlighted as requested) */}
            <div className="p-6 border border-black rounded-2xl bg-black text-white hover:bg-gray-900 transition-colors shadow-lg">
              <h4 className="text-sm font-bold text-gray-300 mb-1">Academic Standing</h4>
              <p className="text-lg font-semibold tracking-wide">CGPA 3.81 / 4.00</p>
              <p className="text-xs text-gray-400 mt-1">Last year CGPA 3.92/4.00</p>
            </div>

            {/* Role Card */}
            <div className="p-6 border border-gray-200 rounded-2xl bg-gray-50 hover:border-black transition-colors">
              <h4 className="text-sm font-bold text-black mb-1">Current Role</h4>
              <p className="text-sm text-gray-600">Mechanical Design Engineer <br/> @ BJIT Limited</p>
            </div>

            {/* Research Focus Card */}
            <div className="p-6 border border-gray-200 rounded-2xl bg-gray-50 hover:border-black transition-colors">
              <h4 className="text-sm font-bold text-black mb-1">Research Focus</h4>
              <p className="text-sm text-gray-600">Material, Design and manufacturing, Ergonomics</p>
            </div>
          </motion.div>

          {/* Social Links Row */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-6 pt-6 border-t border-gray-200">
            <span className="text-sm font-bold tracking-widest text-black uppercase">Connect:</span>
            {[
              { name: 'LinkedIn', url: 'http://linkedin.com/in/ibrahim-hossain-khan/' },
              { name: 'Email', url: 'mailto:ibrahimkhan18042001@gmail.com' },
              { name: 'Google Scholar', url: 'https://scholar.google.com/citations?user=zQMFSeIAAAAJ&hl=en' },
              { name: 'GrabCAD', url: 'https://grabcad.com/md.ibrahim.hossain.khan-1' },
              { name: 'Facebook', url: 'https://www.facebook.com/ibrahimhossain.ibrahim.33/' }
            ].map((link) => (
              <a 
                key={link.name} 
                href={link.url}
                className="text-sm font-medium text-gray-500 hover:text-black transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default IntroSec;