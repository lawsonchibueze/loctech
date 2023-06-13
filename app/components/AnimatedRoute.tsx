"use client";
import { motion } from "framer-motion";
import React from "react";
import { Box } from ".././lib/mui";

interface AnimatedRoute {
  children: React.ReactNode;
}
export default function AnimatedRoute({ children }: AnimatedRoute) {
  const MotionBox = motion(Box);
  return (
    <MotionBox
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeIn", duration: 2 }}
    >
      {children}
    </MotionBox>
  );
}
