"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function AlgorithmicBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Generate deterministic but random-looking nodes
  const nodes = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    size: Math.max(20, Math.random() * 80),
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: 10 + Math.random() * 20,
    delay: Math.random() * 5,
    type: i % 3 === 0 ? "gold" : i % 2 === 0 ? "accent" : "blue",
  }));

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none opacity-40">
      {nodes.map((node) => (
        <motion.div
          key={node.id}
          className="absolute rounded-full mix-blend-screen blur-xl"
          style={{
            width: node.size,
            height: node.size,
            left: `${node.x}%`,
            top: `${node.y}%`,
            backgroundColor:
              node.type === "gold"
                ? "var(--color-nc-gold)"
                : node.type === "accent"
                ? "var(--color-nc-accent)"
                : "var(--color-nc-blue-800)",
          }}
          animate={{
            x: [0, (Math.random() - 0.5) * 200, 0],
            y: [0, (Math.random() - 0.5) * 200, 0],
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: node.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: node.delay,
          }}
        />
      ))}
      <div className="absolute inset-0 bg-[url('/assets/noise.png')] opacity-20 mix-blend-overlay"></div>
    </div>
  );
}
