"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import data from "@/data/projects.json";
import { FadeIn } from "./ScrollReveal";
import { X, ExternalLink } from "lucide-react";

type Project = typeof data.projects[0];

export function PortfolioSection() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedProject = data.projects.find((p) => p.id === selectedId);

  return (
    <section id="portfolio" className="relative w-full py-40 px-6 bg-nc-blue-900/50">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Portfolio Showcase</h2>
          <p className="text-xl text-nc-gray-100 max-w-2xl">
            Explore our real-world impact across industry partners.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.projects.map((project) => (
            <motion.div
              layoutId={`card-${project.id}`}
              onClick={() => setSelectedId(project.id)}
              key={project.id}
              className="bg-nc-blue-800 border border-white/10 rounded-2xl p-6 cursor-pointer hover:border-nc-gold/50 transition-colors shadow-2xl group relative overflow-hidden flex flex-col items-center text-center justify-between min-h-[350px]"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-nc-blue-900/80 to-transparent z-0"></div>

              <div className="relative z-10 w-full flex-1 flex items-center justify-center">
                <motion.img
                  layoutId={`logo-${project.id}`}
                  src={project.partner.logo_url}
                  alt={project.partner.name}
                  className="w-32 h-32 object-contain filter drop-shadow-lg"
                />
              </div>

              <div className="relative z-10 w-full">
                <motion.h3 layoutId={`title-${project.id}`} className="text-xl font-bold mb-2 group-hover:text-nc-gold transition-colors">
                  {project.title}
                </motion.h3>
                <div className="text-sm text-nc-gray-100">{project.partner.name}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedId && selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12 overflow-y-auto bg-nc-blue-900/90 backdrop-blur-md"
          >
            <motion.div
              layoutId={`card-${selectedProject.id}`}
              className="bg-nc-blue-800 w-full max-w-6xl rounded-3xl overflow-hidden shadow-2xl border border-white/10 relative"
            >
              <button
                onClick={() => setSelectedId(null)}
                className="absolute top-6 right-6 z-50 p-2 bg-nc-blue-900/50 hover:bg-nc-gold text-white hover:text-nc-blue-900 rounded-full transition-colors"
              >
                <X />
              </button>

              <div className="h-full max-h-[85vh] overflow-y-auto scroll-smooth">
                {/* Stage 1: The Genesis */}
                <div className="min-h-[50vh] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 bg-gradient-to-br from-nc-blue-900 to-nc-blue-800">
                  <div className="md:w-1/2 flex justify-center">
                    <motion.img
                      layoutId={`logo-${selectedProject.id}`}
                      src={selectedProject.partner.logo_url}
                      className="w-48 h-48 object-contain"
                    />
                  </div>
                  <div className="md:w-1/2">
                    <h3 className="text-nc-gold font-bold tracking-widest text-sm mb-2">01. THE GENESIS</h3>
                    <motion.h2 layoutId={`title-${selectedProject.id}`} className="text-4xl font-bold mb-6">
                      {selectedProject.title}
                    </motion.h2>
                    <p className="text-xl text-nc-gray-100 mb-4 pb-4 border-b border-white/10">
                      <strong>Problem:</strong> {selectedProject.stage1_intro.problem}
                    </p>
                    <p className="text-xl text-nc-gold font-light">
                      <strong>Goals:</strong> {selectedProject.stage1_intro.goals}
                    </p>
                  </div>
                </div>

                {/* Stage 2: The Framework */}
                <div className="min-h-[50vh] p-8 md:p-16 border-t border-white/5">
                  <FadeIn direction="up">
                    <h3 className="text-nc-gold font-bold tracking-widest text-sm mb-8 text-center">02. THE FRAMEWORK</h3>
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                      <div className="md:w-1/2">
                        <img src={selectedProject.stage2_framework.visual_abstract_url} className="w-full rounded-2xl shadow-xl border border-white/10" />
                      </div>
                      <div className="md:w-1/2">
                        <h4 className="text-2xl font-bold mb-4">Objectives & Constraints</h4>
                        <p className="text-lg text-nc-gray-100 mb-6">{selectedProject.stage2_framework.objectives}</p>
                        <ul className="space-y-3">
                          {selectedProject.stage2_framework.constraints.map(c => (
                            <li key={c} className="flex items-center gap-3">
                              <div className="w-2 h-2 rounded-full bg-nc-accent"></div>
                              <span className="text-nc-gray-100">{c}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </FadeIn>
                </div>

                {/* Stage 3: The Solution */}
                <div className="min-h-[50vh] p-8 md:p-16 bg-nc-blue-900/30 border-t border-white/5">
                  <FadeIn direction="up">
                    <h3 className="text-nc-gold font-bold tracking-widest text-sm mb-8 text-center">03. THE SOLUTION & IMPACT</h3>
                    <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
                      <div className="md:w-1/2">
                        <motion.img
                          animate={{ y: [-10, 10, -10] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                          src={selectedProject.stage3_solution.supporting_figure_url}
                          className="w-full rounded-2xl shadow-[0_0_40px_rgba(188,92,69,0.3)] border border-nc-accent/30"
                        />
                      </div>
                      <div className="md:w-1/2">
                        <h4 className="text-2xl font-bold mb-4">Methods Applied</h4>
                        <div className="flex flex-wrap gap-2 mb-8">
                          {selectedProject.stage3_solution.methods.map(m => (
                            <span key={m} className="px-3 py-1 bg-nc-blue-800 border border-nc-gold/30 text-nc-gold rounded-full text-sm">
                              {m}
                            </span>
                          ))}
                        </div>
                        <div className="p-6 bg-gradient-to-r from-nc-accent/20 to-transparent border-l-4 border-nc-accent rounded-r-lg text-xl font-light leading-relaxed">
                          "{selectedProject.stage3_solution.results}"
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                </div>

                {/* Stage 4: The Innovators */}
                <div className="min-h-[40vh] p-8 md:p-16 border-t border-white/5 text-center">
                  <FadeIn direction="up">
                    <h3 className="text-nc-gold font-bold tracking-widest text-sm mb-8">04. THE INNOVATORS</h3>
                    <img src={selectedProject.stage4_team.photo_url} className="w-full max-w-3xl mx-auto rounded-xl shadow-xl border-2 border-nc-accent mb-8" />
                    <div className="flex justify-center gap-6 text-xl">
                      {selectedProject.stage4_team.names.map(name => (
                        <span key={name} className="font-semibold text-nc-white">{name}</span>
                      ))}
                    </div>
                  </FadeIn>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
