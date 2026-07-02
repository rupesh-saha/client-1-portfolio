'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-[#050505]">
      
      {/* 1. Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-105" 
      >
        {/* Make sure the video is in your public folder */}
        <source src="/lunar-rover.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 2. Cinematic Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-[#050505]/40 to-[#050505] z-0"></div>

      {/* 3. Foreground Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-5xl mx-auto mt-16">
        
        {/* Eyebrow Text */}
        

        {/* Main Name Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight"
        >
          MD IBRAHIM <br className="md:hidden" /> HOSSAIN KHAN
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="uppercase tracking-[0.3em] text-xs md:text-sm text-gray-400 mb-6 font-semibold"
        >
          Industrial & Production Engineer
        </motion.div>

        {/* Subtitle / Mission */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="text-lg md:text-xl text-gray-300 max-w-2xl font-light leading-relaxed mb-10"
        >
          A passionate engineer, researcher, and problem solver working at the intersection of <span className="text-white font-medium">advanced manufacturing</span>, <span className="text-white font-medium">design</span>, and <span className="text-white font-medium">intelligent systems</span>.
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a href="#research" className="px-8 py-3.5 bg-white text-black text-sm font-semibold rounded-full hover:bg-gray-200 transition-colors shadow-lg hover:shadow-xl">
            Explore My Research
          </a>
          <a href="#contact" className="px-8 py-3.5 bg-transparent border border-white/30 text-white text-sm font-semibold rounded-full hover:bg-white/10 transition-colors backdrop-blur-sm">
            Get in Touch
          </a>
        </motion.div>
      </div>

      {/* 4. Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-[10px] uppercase tracking-widest text-gray-400 font-medium">Scroll</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }} 
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-gray-400 to-transparent"
        ></motion.div>
      </motion.div>
      
    </section>
  );
};

export default Hero;