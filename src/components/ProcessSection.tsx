"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
import { FadeIn, cn } from "./ScrollReveal";

// Helper component for identical node styling
const FlowNode = ({ children, className, style }: { children: React.ReactNode, className?: string, style?: any }) => (
  <motion.div
    style={style}
    className={cn(
      "bg-nc-white text-nc-blue-900 border-2 border-nc-blue-900 font-semibold p-3 text-center text-sm md:text-base shadow-lg flex items-center justify-center min-h-[60px]",
      className
    )}
  >
    {children}
  </motion.div>
);

const ModifierLabel = ({ children, color, style, className }: { children: React.ReactNode, color: string, style?: any, className?: string }) => (
  <motion.div style={style} className={cn(`text-${color} font-bold flex flex-col items-center justify-center gap-1 text-sm md:text-base`, className)}>
    <span>{children}</span>
    {color === "nc-green-600" && <motion.div className="w-1 h-6 bg-current"></motion.div>}
    {color === "nc-purple-600" && <motion.div className="w-1 h-6 bg-current order-first"></motion.div>}
  </motion.div>
);


export function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Stage 1: Inputs & Modifiers
  const inputX = useTransform(scrollYProgress, [0, 0.1], [-100, 0]);
  const inputOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  const modifierYTop = useTransform(scrollYProgress, [0.05, 0.15], [-50, 0]);
  const modifierYBot = useTransform(scrollYProgress, [0.05, 0.15], [50, 0]);
  const modifierOpacity = useTransform(scrollYProgress, [0.05, 0.15], [0, 1]);

  // Stage 2: Box 1 (Analysis)
  const box1Opacity = useTransform(scrollYProgress, [0.15, 0.25], [0, 1]);
  const box1Scale = useTransform(scrollYProgress, [0.15, 0.25], [0.8, 1]);

  // Stage 3: Divergent Arrows & Box 2 (Evaluation)
  const divergentOpacity = useTransform(scrollYProgress, [0.35, 0.45], [0, 1]);
  const box2Opacity = useTransform(scrollYProgress, [0.45, 0.55], [0, 1]);
  const box2Scale = useTransform(scrollYProgress, [0.45, 0.55], [0.8, 1]);

  // Stage 4: Convergent Arrows & Box 3 (Detailed Design)
  const convergentOpacity = useTransform(scrollYProgress, [0.6, 0.7], [0, 1]);
  const box3Opacity = useTransform(scrollYProgress, [0.7, 0.8], [0, 1]);
  const box3Scale = useTransform(scrollYProgress, [0.7, 0.8], [0.8, 1]);

  // Stage 5: Outputs
  const outputX = useTransform(scrollYProgress, [0.85, 0.95], [-50, 0]);
  const outputOpacity = useTransform(scrollYProgress, [0.85, 0.95], [0, 1]);

  return (
    <section id="process" ref={containerRef} className="relative w-full h-[500vh] bg-nc-white">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden px-4 md:px-12 bg-nc-white text-nc-blue-900 border-y-8 border-nc-blue-900">

        <FadeIn className="absolute top-10 left-0 right-0 text-center z-50">
          <h2 className="text-3xl md:text-5xl font-bold text-nc-blue-900 drop-shadow-sm mb-4">The Engineering Design Process</h2>
          <div className="w-24 h-1 bg-nc-gold mx-auto"></div>
        </FadeIn>

        {/* Global Chart Container */}
        <div className="relative w-full max-w-3xl mx-auto h-[70vh] flex items-stretch mt-60 mb-20">

          {/* Top Modifiers */}
          <div className="absolute top-[-80px] left-1/4 right-1/4 flex justify-between px-12 z-20">
            <ModifierLabel color="green-600" style={{ y: modifierYTop, opacity: modifierOpacity }} className="text-[#15B06D]">Constraints</ModifierLabel>
            <ModifierLabel color="green-600" style={{ y: modifierYTop, opacity: modifierOpacity }} className="text-[#15B06D]">Standards</ModifierLabel>
            <ModifierLabel color="green-600" style={{ y: modifierYTop, opacity: modifierOpacity }} className="text-[#15B06D]">Systems Factors</ModifierLabel>
          </div>

          {/* Bottom Modifiers */}
          <div className="absolute bottom-[-60px] left-1/3 right-1/3 flex justify-between px-8 z-20">
            <ModifierLabel color="purple-700" style={{ y: modifierYBot, opacity: modifierOpacity }} className="text-[#6D348E]">ISE Knowledge</ModifierLabel>
            <ModifierLabel color="purple-700" style={{ y: modifierYBot, opacity: modifierOpacity }} className="text-[#6D348E]">Team Skills</ModifierLabel>
          </div>

          {/* Main Content Boundary Box */}
          <motion.div
            style={{ opacity: modifierOpacity }}
            className="absolute inset-0 border-4 border-nc-blue-900 z-0 bg-nc-white p-4 sm:p-8 flex gap-2 md:gap-8 items-center justify-between"
          >

            {/* Inputs */}
            <div className="absolute left-[-100px] md:left-[-150px] flex flex-col justify-between h-[60%] top-[20%] z-20 font-bold text-lg md:text-2xl text-[#0066CC]">
              <motion.div style={{ x: inputX, opacity: inputOpacity }} className="flex items-center gap-2">Problem <span className="text-6xl">→</span></motion.div>
              <motion.div style={{ x: inputX, opacity: inputOpacity }} className="flex items-center gap-2 text-right leading-tight">Stakeholder<br />Needs <span className="text-6xl">→</span></motion.div>
            </div>

            {/* Box 1 Group */}
            <motion.div style={{ opacity: box1Opacity, scale: box1Scale }} className="flex flex-col h-full w-[15%] justify-between py-4 relative z-10">
              <FlowNode className="h-24">Problem<br />As-Is<br />Analysis</FlowNode>
              <div className="flex justify-center my-0 items-center">
                <span className="text-nc-blue-900 font-bold text-xl">↓↑</span>
              </div>
              <FlowNode className="h-16 w-4/4 mx-auto border-dashed">Requirements<br />Development</FlowNode>
              <div className="flex justify-center my-4 items-center">
                <span className="text-nc-blue-900 font-bold text-xl">↑↓</span>
              </div>
              <FlowNode className="h-24">User<br />Analysis</FlowNode>

              {/* Box 1.5 - System Concept */}
              <div className="absolute top-0 bottom-0 right-[-100%] w-[90%]">
                <FlowNode className="h-full flex-col justify-around">
                  <div>System<br />Concept</div>
                  <div className="w-full h-px bg-black/20 my-2"></div>
                  <div>Generation<br />of<br />Alternatives</div>
                </FlowNode>
              </div>
            </motion.div>

            {/* Divergent Arrows */}
            <motion.div style={{ opacity: divergentOpacity }} className="w-[15%] h-full flex right-[-8%] items-center justify-center relative text-[#E31837] font-bold text-xs">
              <div className="w-full flex justify-center absolute h-[100] flex-col opacity-50">
                <div className="w-full h-px bg-black rotate-[-30deg] origin-left"></div>
                <div className="w-full h-px bg-black rotate-[-15deg] origin-left"></div>
                <div className="w-full h-px bg-black"></div>
                <div className="w-full h-px bg-black rotate-[15deg] origin-left"></div>
                <div className="w-full h-px bg-black rotate-[30deg] origin-left"></div>
              </div>
              <span className="bg-nc-white z-10 px-1">Divergent</span>
            </motion.div>

            {/* Box 2 Group */}
            <motion.div style={{ opacity: box2Opacity, scale: box2Scale }} className="flex flex-col h-full w-[15%] justify-between relative z-10">
              <FlowNode className="h-full flex-col justify-around">
                <div>Tradeoff<br />Analysis</div>
                <div className="w-full h-px bg-black/20 my-2"></div>
                <div>Risk<br />Assessment</div>
                <div className="w-full h-px bg-black/20 my-2"></div>
                <div>Design<br />Optimization</div>
              </FlowNode>
            </motion.div>

            {/* Convergent Arrows */}
            <motion.div style={{ opacity: convergentOpacity }} className="w-[15%] h-full flex right-[8%] items-center justify-center relative text-[#E31837] font-bold text-xs">
              <div className="w-full flex justify-center absolute h-[100%] flex-col opacity-50">
                <div className="w-full h-px bg-black rotate-[30deg] origin-right"></div>
                <div className="w-full h-px bg-black rotate-[15deg] origin-right"></div>
                <div className="w-full h-px bg-black"></div>
                <div className="w-full h-px bg-black rotate-[-15deg] origin-right"></div>
                <div className="w-full h-px bg-black rotate-[-30deg] origin-right"></div>
              </div>
              <span className="bg-nc-white z-10 px-1">Convergent</span>
            </motion.div>

            {/* Box 3 Group */}
            <motion.div style={{ opacity: box3Opacity, scale: box3Scale }} className="flex flex-col h-full w-[25%] justify-between relative z-10 ml-[-100]">
              <FlowNode className="h-full flex-col justify-around">
                <div>Design<br />Selection and<br />Justification</div>
                <div className="w-full h-px bg-black/20 my-2"></div>
                <div>Implementation<br />Plan</div>
                <div className="w-full h-px bg-black/20 my-2"></div>
                <div>Feedback/<br />Review</div>
              </FlowNode>
            </motion.div>
          </motion.div>

          {/* Outputs */}
          <div className="absolute right-[-200px] md:right-[-250px] flex flex-col justify-between h-[80%] top-[10%] z-20 font-bold text-lg md:text-xl text-[#E31837]">
            <motion.div style={{ x: outputX, opacity: outputOpacity }} className="flex items-center gap-3">
              <div className="w-12 h-4 bg-[#E31837] relative after:content-[''] after:absolute after:border-y-[12px] after:border-y-transparent after:border-l-[16px] after:border-[#E31837] after:-right-4 after:-top-1"></div>
              System Design<br />Implement Plan
            </motion.div>
            <motion.div style={{ x: outputX, opacity: outputOpacity }} className="flex items-center gap-3">
              <div className="w-12 h-4 bg-[#E31837] relative after:content-[''] after:absolute after:border-y-[12px] after:border-y-transparent after:border-l-[16px] after:border-[#E31837] after:-right-4 after:-top-1"></div>
              Report/Poster<br />Presentation
            </motion.div>
            <motion.div style={{ x: outputX, opacity: outputOpacity }} className="flex items-center gap-3">
              <div className="w-12 h-4 bg-[#E31837] relative after:content-[''] after:absolute after:border-y-[12px] after:border-y-transparent after:border-l-[16px] after:border-[#E31837] after:-right-4 after:-top-1"></div>
              Reflection/<br />Assessment
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
