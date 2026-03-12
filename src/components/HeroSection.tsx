"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FadeIn } from "./ScrollReveal";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 text-center"
    >
      <div className="max-w-4xl mx-auto z-10">
        <FadeIn delay={0.2} direction="down">
          <div className="inline-block border border-nc-gold/50 text-nc-gold bg-nc-gold/10 px-4 py-1.5 rounded-full text-sm font-semibold tracking-widest mb-6">
            NORTH CAROLINA A&T STATE UNIVERSITY
          </div>
        </FadeIn>
        
        <FadeIn delay={0.4} direction="up">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight">
            Industrial and Systems Engineering{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-nc-gold to-nc-accent">
              Senior Design
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.6} direction="up">
          <p className="text-lg md:text-2xl text-nc-gray-100 max-w-2xl mx-auto font-light leading-relaxed">
            Transforming resources into solutions through iterative, creative, and
            data-driven design.
          </p>
        </FadeIn>
      </div>

      <motion.a
        href="#process"
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: [0, 15, 0] }}
        transition={{ 
            opacity: { delay: 1.2, duration: 1 }, 
            y: { repeat: Infinity, duration: 2, ease: "easeInOut" }
        }}
        className="absolute bottom-12 flex flex-col items-center gap-2 text-nc-gold hover:text-white transition-colors cursor-pointer z-10"
      >
        <span className="text-sm tracking-widest uppercase font-medium">
          Explore the Process
        </span>
        <ChevronDown className="w-6 h-6" />
      </motion.a>
    </section>
  );
}
