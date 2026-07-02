'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const FooterBar = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] } 
    },
  };

  return (
    <footer className="bg-[#050505] text-[#ededed] pt-24 md:pt-32 pb-8 px-6 md:px-12 lg:px-20 border-t border-white/10 w-full font-sans overflow-hidden">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-20 md:mb-32">
          
          <motion.div variants={itemVariants} className="lg:col-span-5 flex flex-col items-start">
            <Link href="/" className="hover:opacity-80 transition-opacity mb-8 inline-block">
              <Image
                src="/logo1.png" 
                alt="Portfolio Logo"
                width={160}
                height={40}
                // Added w-auto here
                className="w-32 md:w-40 w-auto h-auto object-contain opacity-90"
                priority
              />
            </Link>
            <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-md">
              Solving real engineering challenges through rigorous iteration, innovative design, and a KAIZEN mindset.
            </p>
          </motion.div>

          <div className="hidden lg:block lg:col-span-2"></div>

          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-12">
            
            <motion.div variants={itemVariants} className="flex flex-col">
              <h4 className="text-xs tracking-[0.2em] text-gray-500 uppercase mb-6 font-semibold">
                Contact
              </h4>
              <div className="flex flex-col gap-4">
                <a 
                  href="mailto:ibrahimkhan18042001@gmail.com" 
                  className="text-lg md:text-xl font-light text-gray-200 hover:text-white transition-colors"
                >
                  ibrahimkhan18042001@gmail.com 
                </a>
                <a 
                  href="tel:+8801700000000" 
                  className="text-lg md:text-xl font-light text-gray-200 hover:text-white transition-colors"
                >
                  +880 19744 04417
                </a>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col">
              <h4 className="text-xs tracking-[0.2em] text-gray-500 uppercase mb-6 font-semibold">
                Socials
              </h4>
              <ul className="flex flex-col gap-3 text-base md:text-lg text-gray-400 font-light">
                {[
                  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ibrahim-hossain-khan/' },
                  { name: 'Google Scholar', url: 'https://scholar.google.com/' },
                  { name: 'GrabCAD', url: 'https://grabcad.com/md.ibrahim.hossain.khan-1' },
                  { name: 'Facebook', url: 'https://www.facebook.com/ibrahimhossain.ibrahim.33' }
                ].map((social) => (
                  <li key={social.name}>
                    <a 
                      href={social.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:text-white transition-colors relative group w-fit flex items-center gap-2"
                    >
                      <span className="w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-4"></span>
                      <span className="transform transition-transform duration-300 group-hover:translate-x-1">
                        {/* Citation tag removed here! */}
                        {social.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        <motion.div 
          variants={itemVariants}
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-[10px] md:text-xs text-gray-600 tracking-widest"
        >
          <div className="uppercase">Version: Next.js Edition</div>
          <div className="uppercase">Location: Dhaka, Bangladesh</div>
          <div className="flex gap-6 text-gray-500 text-xs">
            <Link href="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-300 transition-colors">Terms</Link>
            <Link href="/disclaimer" className="hover:text-gray-300 transition-colors">Disclaimer</Link>
          </div>
        </motion.div>

      </motion.div>
    </footer>
  );
};

export default FooterBar;