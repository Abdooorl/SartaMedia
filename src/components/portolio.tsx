"use client";
import PortFolioHeader from "../../public/Portfolio-Image.png";
import Image from "next/image";
import { useScroll } from "motion/react";
import { useRef } from "react";
import { useTransform, motion, MotionValue } from "motion/react";

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 8]);

  return (
    <div
      ref={containerRef}
      className="portfolio relative  h-[200vh]   bg-[#C63275]"
    >
      <div className="sticky z-2 h-[100vh] overflow-x-hidden top-0 bg-[#C63275]">
        <div className="h-[100%] w-[100%] gap-[8px] sm:gap-[1.5rem] flex items-center overflow-hidden justify-center absolute top-0">
          <span className="text-[36px] sm:text-[100px]  font-medium text-white">
            Featured{" "}
          </span>
          <motion.div
            className="scale4  w-[80vw] flex flex-row items-center justify-center gap-[8px] sm:w-[21vw] h-[auto] relative "
            style={{ scale }}
          > 
            <Image
              src={PortFolioHeader}
              alt="Featured Portfolio"
              className="bg-contain grayscale rounded-3xl hover:grayscale-0 transition-all  duration-300"
            />
            <p className="absolute font-medium text-white sm:text-[32px] text-[14px]">OUR WORK</p>
          </motion.div>
          <span className="text-[36px] sm:text-[100px] font-medium text-white">
            Portfolio
          </span>
        </div>
      </div>
    </div>
  );
}
