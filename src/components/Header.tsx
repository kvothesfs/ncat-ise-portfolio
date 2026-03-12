"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-nc-blue-900/80 backdrop-blur-md border-b border-white/10">
      <div className="flex items-center gap-3">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-10 h-10 bg-nc-gold rounded-md flex items-center justify-center font-bold text-nc-blue-900 shadow-[0_0_15px_rgba(253,184,39,0.5)]"
        >
          ISE
        </motion.div>
        <span className="font-semibold tracking-wider text-nc-white text-sm md:text-base hidden sm:inline-block">
          NC A&T SENIOR DESIGN
        </span>
      </div>

      <nav className="hidden md:flex items-center gap-8">
        {["Home", "Process", "Portfolio"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-nc-gray-100 hover:text-nc-gold transition-colors text-sm uppercase tracking-widest font-medium"
          >
            {item}
          </a>
        ))}
      </nav>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-nc-white hover:text-nc-gold transition-colors"
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-nc-blue-800 border-b border-white/10 p-4 flex flex-col gap-4 shadow-xl"
        >
          {["Home", "Process", "Portfolio"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="text-nc-white hover:text-nc-gold text-lg tracking-wider"
            >
              {item}
            </a>
          ))}
        </motion.div>
      )}
    </header>
  );
}
