'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

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
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring", bounce: 0.2, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500 mb-6 leading-tight drop-shadow-2xl"
        >
          MD IBRAHIM <br className="md:hidden" /> HOSSAIN KHAN
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="uppercase tracking-[0.4em] text-xs md:text-sm text-gray-300 mb-6 font-bold drop-shadow-md"
        >
          Industrial & Production Engineer
        </motion.div>


        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"

        >
          <Link href="/research" className="px-8 py-3.5 bg-white text-black text-sm font-semibold rounded-full hover:bg-gray-200 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] hover:-translate-y-1">
            Explore My Research
          </Link>

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