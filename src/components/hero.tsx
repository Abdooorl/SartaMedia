"use client";
import { motion } from "framer-motion";
import { BubbleBackground } from "./animate-ui/backgrounds/bubble";

export default function Hero() {
  const line1 = "Transforming Events";
  const line2 = "Amplifying Experiences";
  const textLines = [line1, line2];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.025, // Time delay between each character
      },
    },
  } as const;

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  } as const;

  return (
    <div className="hero flex items-center justify-center bg-fixed h-[calc(100vh-80px)] bg-[#0C0E35] ">
      <motion.h1
        className="text-white text-[60px] px-[18px] sm:px-[40px] font-bold w-full text-center sm:mt-[-60px] sm:text-[100px]  md:text-[132px] text-balance leading-[100%]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {textLines.map((line, lineIndex) => (
          <span key={lineIndex} style={{ display: "block" }}>
            {Array.from(line).map((char, charIndex) => (
              <motion.span
                key={charIndex}
                variants={childVariants}
                style={{ display: "inline-block" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </span>
        ))}
      </motion.h1>
    </div>
  );
}
