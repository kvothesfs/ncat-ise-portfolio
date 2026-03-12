"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  const getAxis = () => {
    switch (direction) {
      case "up":
        return { y: 40 };
      case "down":
        return { y: -40 };
      case "left":
        return { x: 40 };
      case "right":
        return { x: -40 };
      case "none":
        return { y: 0, x: 0 };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...getAxis() }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
