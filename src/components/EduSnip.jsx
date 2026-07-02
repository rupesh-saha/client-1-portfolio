'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const EduSnip = () => {
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

  return (
    <section className="w-full bg-[#fafafa] text-black py-24 md:py-32 px-6 md:px-12 lg:px-20 border-t border-gray-200">
      <div className="max-w-5xl mx-auto">
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6"
        >
          {/* Section Header */}
          <motion.div variants={fadeUp}>
            <span className="text-sm font-bold tracking-[0.2em] text-gray-400 uppercase mb-4 block">
              Academic Foundation
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black">
              Education
            </h2>
          </motion.div>

          {/* Call to Action Button */}
          <motion.div variants={fadeUp}>
            <Link 
              href="/about" 
              className="group inline-flex items-center gap-3 px-6 py-3 bg-black text-white text-sm font-semibold rounded-full hover:bg-gray-800 transition-all duration-300 shadow-md hover:shadow-xl"
            >
              View Full Academic Journey
              <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Highlighted IUT Card */}
        <motion.div 
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative bg-white border border-gray-200 rounded-3xl p-8 md:p-12 shadow-sm hover:shadow-xl transition-shadow duration-500 overflow-hidden group"
        >
          {/* Subtle Accent Line on Hover */}
          <div className="absolute top-0 left-0 w-full h-1 bg-black transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left: Logo & Timeline */}
            <div className="md:col-span-3 flex flex-row md:flex-col items-center md:items-start justify-between md:justify-start gap-4 border-b md:border-b-0 md:border-r border-gray-100 pb-6 md:pb-0 md:pr-6">
              {/* Replace /iut-logo.png with your actual logo file in the public folder */}
              <div className="relative w-16 h-16 md:w-24 md:h-24 bg-gray-50 rounded-2xl flex items-center justify-center p-2 border border-gray-100">
                <Image 
                  src="/iut-logo.png" 
                  alt="IUT Logo" 
                  width={80} 
                  height={80} 
                  className="object-contain"
                />
              </div>
              <div className="text-right md:text-left">
                <p className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-1">Timeline</p>
                <p className="text-sm md:text-base font-medium text-black">June 2021 —</p>
                <p className="text-sm md:text-base font-medium text-black">October 2025</p>
              </div>
            </div>

            {/* Right: Degree Details */}
            <div className="md:col-span-9 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold text-black mb-2 leading-tight">
                B.Sc. in Industrial and <br className="hidden md:block" /> Production Engineering
              </h3>
              <h4 className="text-lg md:text-xl text-gray-500 font-serif italic mb-6">
                Islamic University of Technology
              </h4>
              
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg w-fit">
                <span className="flex h-2 w-2 rounded-full bg-black"></span>
                <span className="text-sm font-semibold text-black tracking-wide">
                  CGPA: 3.81 / 4.00
                </span>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default EduSnip;