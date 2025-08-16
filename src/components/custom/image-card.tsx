"use client";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { motion, MotionValue, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function ImageCard({
  image,
  targetScale,
  progress,
  range,
}: {
  image: { src: StaticImageData; alt: string; desc: string; id: number };
  targetScale: number;
  progress: MotionValue;
  range: [number, number];
}) {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className={`image-card sticky top-[0] z-4 h-[100vh] w-full px-[18px] sm:px-[0] flex justify-center items-center`}
    >
      <motion.div
        style={{ top: `calc(-5% + ${image.id * 25}px)`, scale }}
        className={`img sm:w-[900px] border-2 overflow-hidden border-white  sm:rounded-[40px] rounded-[32px]  w-full relative`}
      >
        <motion.div style={{ scale: imageScale }} className="img">
          <Image
            priority={true}
            fetchPriority="high"
            src={image.src}
            alt={image.alt}
            className="object-cover sm:rounded-[40px]  rounded-[32px] w-full sm:h-[500px] h-[70vh]"
          />
        </motion.div>
        <div className="overlay absolute inset-0 bg-[linear-gradient(178deg,transparent_49.64%,rgba(0,0,0,0.6)_101.7%)] mix-blend-multiply rounded-[32px]"></div>
        <div className="text absolute bottom-0 sm:pl-[20px] sm:pb-[20px] pl-[16px] pb-[16px]">
          <p className="text-white font-medium leading-[100%] sm:text-[32px] text-[28px]">
            {image.desc}
          </p>
          <p className="text-[#DADADA] font-sans tracking-custom sm:text-[16px] text-[14px]">
            {image.alt}
          </p>
        </div>
      </motion.div>
    </div>
  );
}
