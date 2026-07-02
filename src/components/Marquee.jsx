'use client';

import React, { useRef } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from 'framer-motion';

const wrap = (min, max, v) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

const Marquee = () => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  
  // Track if the user is currently hovering over the marquee
  const isHovered = useRef(false);
  
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });

  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 0.2], {
    clamp: false
  });

  const x = useTransform(baseX, (v) => `${wrap(0, -50, v)}%`);

  const directionFactor = useRef(1);
  
  // SPEED FIX 3: Dropped from -0.05 to -0.02 for an ultra-slow, premium drift.
  const baseVelocity = -0.013;

  useAnimationFrame((t, delta) => {
    // If the mouse is hovering over the container, halt the animation completely
    if (isHovered.current) return;

    let moveBy = directionFactor.current * baseVelocity * (delta / 16);

    if (velocityFactor.get() < 0) {
      directionFactor.current = 1; 
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = -1; 
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  // Content mapped directly from your engineering profile[cite: 2]
  const marqueeItems = [
    "MD IBRAHIM HOSSAIN KHAN",
    "INDUSTRIAL & PRODUCTION ENGINEERING",
    "ADVANCED & ADDITIVE MANUFACTURING",
    "BIO-INSPIRED DESIGN",
    "ROBOTICS & AUTOMATION"
  ];

  const repeatedText = marqueeItems.join(" • ") + " • ";

  return (
    <section 
      className="w-full bg-white border-y border-black/10 py-6 md:py-10 overflow-hidden flex whitespace-nowrap relative z-10 cursor-default"
      // Add the hover listeners directly to the section container
      onMouseEnter={() => (isHovered.current = true)}
      onMouseLeave={() => (isHovered.current = false)}
    >
      <motion.div 
        className="flex whitespace-nowrap text-5xl md:text-7xl font-sans font-bold tracking-wider text-black uppercase" 
        style={{ x }}
      >
        {[...Array(4)].map((_, i) => (
          <span key={i} className="flex-shrink-0 pr-8 transition-opacity duration-300 hover:opacity-70">
            {repeatedText}
          </span>
        ))}
      </motion.div>
    </section>
  );
};

export default Marquee;