'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isHoveringSubmit, setIsHoveringSubmit] = useState(false);
  const glowRef = useRef(null);
  const containerRef = useRef(null);

  // GSAP Mouse Follower Effect (Now a soft, premium aura)
  useEffect(() => {
    const container = containerRef.current;
    const glow = glowRef.current;

    if (!container || !glow) return;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      gsap.to(glow, {
        x: x - 250, 
        y: y - 250,
        duration: 0.8,
        ease: "power3.out",
        // The aura gets slightly darker/more focused when hovering the submit button
        opacity: isHoveringSubmit ? 0.6 : 0.3,
        scale: isHoveringSubmit ? 1.1 : 1,
      });
    };

    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, [isHoveringSubmit]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message ready to send! Hook this up to an API.");
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };

  return (
    <div 
      ref={containerRef}
      // Apple-style off-white background (#f5f5f7)
      className="min-h-screen bg-[#f5f5f7] text-black pt-32 pb-24 md:pt-40 md:pb-32 px-6 md:px-12 lg:px-20 overflow-hidden relative font-sans selection:bg-black selection:text-white"
    >
      {/* GSAP Mouse Follower Orb (Soft gray shadow aura) */}
      <div 
        ref={glowRef}
        className="absolute top-0 left-0 w-[500px] h-[500px] bg-gray-400 rounded-full blur-[120px] opacity-0 pointer-events-none mix-blend-multiply z-0"
        style={{ transform: "translate(-50%, -50%)" }}
      ></div>

      {/* Subtle Background Grid (Darker grid lines for light mode) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">
        
        {/* Left Column: Copy & Info */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="lg:col-span-5 flex flex-col pt-8"
        >
          {/* Availability Badge */}
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8 w-fit px-4 py-2 rounded-full border border-black/10 bg-black/5 backdrop-blur-md">
            <div className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-600"></span>
            </div>
            <span className="text-xs font-semibold tracking-widest text-gray-500 uppercase">
              Open to Opportunities
            </span>
          </motion.div>

          <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-bold tracking-tight text-black leading-[1.1] mb-6">
            Let&apos;s build <br />
            <span className="text-gray-400">something</span> <br />
            meaningful.
          </motion.h1>

          <motion.p variants={fadeUp} className="text-lg md:text-xl text-gray-500 font-light leading-relaxed mb-16 max-w-md">
            Whether it is a research collaboration, engineering challenge, or discussing the future of advanced manufacturing—my inbox is always open.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col gap-8">
            <div>
              <h4 className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-2">Direct Line</h4>
              <a href="mailto:ibrahimkhan18042001@gmail.com" className="text-xl md:text-2xl font-medium text-black hover:text-gray-500 transition-colors inline-block group break-all">
                ibrahimkhan18042001@gmail.com
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[2px] bg-black mt-1"></span>
              </a>
            </div>
            <div>
              <h4 className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-2">Location</h4>
              <p className="text-xl md:text-2xl font-medium text-black">
                Dhaka, Bangladesh
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Spacer */}
        <div className="hidden lg:block lg:col-span-1"></div>

        {/* Right Column: The Pure White Form */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          // Pure white card with an elegant, soft drop shadow
          className="lg:col-span-6 bg-white border border-gray-200 rounded-[2rem] p-8 md:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] relative overflow-hidden group"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-10 relative z-10">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Name Input */}
              <div className="relative">
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  // Light mode input styling
                  className="w-full bg-transparent border-b border-gray-300 py-3 text-black focus:outline-none focus:border-black transition-colors peer placeholder-transparent"
                  placeholder="John Doe"
                />
                <label 
                  htmlFor="name" 
                  className="absolute left-0 top-3 text-gray-400 text-base transition-all peer-focus:-top-5 peer-focus:text-xs peer-focus:text-black peer-valid:-top-5 peer-valid:text-xs peer-valid:text-gray-500 cursor-text"
                >
                  What's your name?
                </label>
              </div>

              {/* Email Input */}
              <div className="relative">
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-gray-300 py-3 text-black focus:outline-none focus:border-black transition-colors peer placeholder-transparent"
                  placeholder="john@example.com"
                />
                <label 
                  htmlFor="email" 
                  className="absolute left-0 top-3 text-gray-400 text-base transition-all peer-focus:-top-5 peer-focus:text-xs peer-focus:text-black peer-valid:-top-5 peer-valid:text-xs peer-valid:text-gray-500 cursor-text"
                >
                  Your email address
                </label>
              </div>
            </div>

            {/* Subject Input */}
            <div className="relative">
              <input 
                type="text" 
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-gray-300 py-3 text-black focus:outline-none focus:border-black transition-colors peer placeholder-transparent"
                placeholder="Collaboration"
              />
              <label 
                htmlFor="subject" 
                className="absolute left-0 top-3 text-gray-400 text-base transition-all peer-focus:-top-5 peer-focus:text-xs peer-focus:text-black peer-valid:-top-5 peer-valid:text-xs peer-valid:text-gray-500 cursor-text"
              >
                Subject
              </label>
            </div>

            {/* Message Input */}
            <div className="relative">
              <textarea 
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full bg-transparent border-b border-gray-300 py-3 text-black focus:outline-none focus:border-black transition-colors peer placeholder-transparent resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
              <label 
                htmlFor="message" 
                className="absolute left-0 top-3 text-gray-400 text-base transition-all peer-focus:-top-5 peer-focus:text-xs peer-focus:text-black peer-valid:-top-5 peer-valid:text-xs peer-valid:text-gray-500 cursor-text"
              >
                Tell me about your project...
              </label>
            </div>

            {/* Submit Button */}
            <div 
              className="mt-6"
              onMouseEnter={() => setIsHoveringSubmit(true)}
              onMouseLeave={() => setIsHoveringSubmit(false)}
            >
              <button 
                type="submit"
                // Pitch black button for maximum contrast
                className="w-full md:w-auto bg-black text-white font-bold tracking-wide py-4 px-10 rounded-full flex items-center justify-center gap-3 hover:bg-gray-800 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
              >
                Send Message
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </div>

          </form>
        </motion.div>

      </div>
    </div>
  );
}