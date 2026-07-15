"use client";

import { motion } from "framer-motion";
import { useMousePosition } from "@/hooks/use-mouse-position";

export function MouseFollower() {
  const { x, y } = useMousePosition();

  return (
    <motion.div
      className="pointer-events-none fixed z-50 hidden h-8 w-8 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm lg:block"
      animate={{ x: x - 16, y: y - 16 }}
      transition={{ type: "spring", damping: 30, stiffness: 200, mass: 0.5 }}
      aria-hidden="true"
    />
  );
}
