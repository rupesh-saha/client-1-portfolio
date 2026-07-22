'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

// Array of your core research interests as requested
const researchInterests = [
  "Material",
  "Design and manufacturing",
  "Ergonomics"
];

// Array of social links
const socialLinks = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ibrahim-hossain-khan/', icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z M2 9h4v12H2z M4 2a2 2 0 11-2 2 2 2 0 012-2z' },
  { name: 'GrabCAD Profile', url: 'https://grabcad.com/md.ibrahim.hossain.khan-1', icon: 'M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z M3.27 6.96L12 12.01l8.73-5.05 M12 22.08V12' },
  { name: 'Facebook', url: 'https://www.facebook.com/ibrahimhossain.ibrahim.33', icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' }
];

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

  // GSAP Mouse Follower Effect
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
        opacity: isHoveringSubmit ? 0.6 : 0.2,
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
      className="min-h-screen bg-[#f5f5f7] text-black pt-32 pb-24 md:pt-40 md:pb-32 px-6 md:px-12 lg:px-20 overflow-hidden relative font-sans selection:bg-black selection:text-white"
    >
      {/* GSAP Mouse Follower Orb */}
      <div 
        ref={glowRef}
        className="absolute top-0 left-0 w-[500px] h-[500px] bg-gray-400 rounded-full blur-[120px] opacity-0 pointer-events-none mix-blend-multiply z-0"
        style={{ transform: "translate(-50%, -50%)" }}
      ></div>

      {/* Subtle Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Page Header */}
        <div className="mb-20 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-black leading-[1.1] mb-6"
          >
            Get in Touch.
          </motion.h1>
        </div>

        {/* SECTION 1: Opportunities (Two-Column Split) */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-24"
        >
          {/* Box 1: Graduate Research */}
          <motion.div variants={fadeUp} className="bg-white p-8 md:p-12 rounded-[2rem] border border-gray-200 shadow-sm flex flex-col">
            <div className="flex items-center gap-3 mb-6 w-fit px-4 py-2 rounded-full border border-gray-200 bg-gray-50">
              <div className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-600"></span>
              </div>
              <span className="text-xs font-semibold tracking-widest text-gray-500 uppercase">
                Open to Opportunities
              </span>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Seeking Graduate Research Opportunities</h2>
            <p className="text-gray-600 font-light leading-relaxed mb-8">
              I am an Industrial and Production Engineering graduate actively seeking M.S./Ph.D. opportunities aligned with my core research interests. As a dedicated researcher, I am deeply committed to executing milestone-driven work, completing all objectives strictly on time, and proactively learning new skills to bridge any knowledge gaps. I welcome the opportunity to join your lab and would be glad to discuss how my background supports your current projects during a brief online meeting.
            </p>

            <h3 className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-4">Core Research Interests</h3>
            <div className="flex flex-wrap gap-2 mt-auto">
              {researchInterests.map((interest, i) => (
                <span key={i} className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-xs font-medium text-gray-600">
                  {interest}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Box 2: Collaboration */}
          <motion.div variants={fadeUp} className="bg-white p-8 md:p-12 rounded-[2rem] border border-gray-200 shadow-sm flex flex-col">
             <div className="flex items-center gap-3 mb-6 w-fit px-4 py-2 rounded-full border border-gray-200 bg-gray-50">
              <div className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-600"></span>
              </div>
              <span className="text-xs font-semibold tracking-widest text-gray-500 uppercase">
                Open to Opportunities
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mb-6">Collaborate & Let&apos;s Build Something Meaningful</h2>
            <p className="text-gray-600 font-light leading-relaxed mb-8">
              I am always thrilled to connect with and support current B.Sc. students who share a passion for engineering and discovery. I am always open to collaborating. I am actively ready to guide you on your projects, and I am equally excited to learn from your fresh ideas and perspectives. Whether it is a research collaboration, a hands-on engineering challenge, or discussing the future of additive manufacturing, user-centric design, and new materials, my inbox is always open.
            </p>
          </motion.div>
        </motion.div>


        {/* SECTION 2: Direct Contact & Socials Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 flex flex-col md:flex-row gap-12 lg:gap-24 justify-center items-start md:items-center py-12 border-y border-gray-200"
        >
          {/* Emails & Phone */}
          <div className="flex flex-col gap-6">
            <h4 className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase">Direct Contact</h4>
            <div className="flex flex-col gap-3">
              <a href="mailto:ibrahimhossain2@iut-dhaka.edu" className="text-lg md:text-xl font-medium text-black hover:text-gray-500 transition-colors">ibrahimhossain2@iut-dhaka.edu</a>
              <a href="mailto:ibrahimkhan18042001@gmail.com" className="text-lg md:text-xl font-medium text-black hover:text-gray-500 transition-colors">ibrahimkhan18042001@gmail.com</a>
              <a href="tel:+8801974404417" className="text-lg md:text-xl font-medium text-black hover:text-gray-500 transition-colors mt-2">+880 19744 04417</a>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-6">
            <h4 className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase">Connect</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4">
              {socialLinks.map((link, i) => (
                <a 
                  key={i} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-lg font-medium text-gray-600 hover:text-black transition-colors group"
                >
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={link.icon}></path>
                  </svg>
                  {link.name}
                </a>
              ))}
              <span className="flex items-center gap-3 text-lg font-medium text-gray-400 cursor-not-allowed">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                </svg>
                Website (Coming Soon)
              </span>
            </div>
          </div>
        </motion.div>


        {/* SECTION 3: The Pure White Form */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-[2rem] p-8 md:p-16 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] relative overflow-hidden group"
        >
          <div className="mb-12 text-center">
             <h2 className="text-3xl font-bold mb-2">Send a Message</h2>
             <p className="text-gray-500 font-light">I'll get back to you as soon as possible.</p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-10 relative z-10">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="relative">
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
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

            <div 
              className="mt-6 flex justify-center"
              onMouseEnter={() => setIsHoveringSubmit(true)}
              onMouseLeave={() => setIsHoveringSubmit(false)}
            >
              <button 
                type="submit"
                className="w-full md:w-auto bg-black text-white font-bold tracking-wide py-4 px-12 rounded-full flex items-center justify-center gap-3 hover:bg-gray-800 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
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