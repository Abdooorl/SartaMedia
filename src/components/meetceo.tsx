"use client";
import Engineer from "@/../public/Engineer.png";
import Image from "next/image";
import { motion, MotionValue, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";

export default function MeetCEO() {
  const container = useRef<HTMLDivElement>(null);
  const imageContainer = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.85", "start 0.05"],
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (imageContainer.current) {
      const rect = imageContainer.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const value: string = ` At Sarta Media, we create events people remember. To our valued clients, thank you for trusting us. To future partners, we invite you to experience the passion, creativity, and technology that set us apart `;
  const words: string[] = value.split(" ");

  const Word = ({
    children,
    range,
    progress,
  }: {
    children: React.ReactNode;
    range: { start: number; end: number };
    progress: MotionValue;
  }) => {
    const opacity = useTransform(progress, [range.start, range.end], [0.08, 1]);
    return (
      <motion.span
        className="mr-[4px] sm:mr-[7px] text-center md:text-left leading-[90%]"
        style={{ opacity }}
      >
        {children}
      </motion.span>
    );
  };

  const quoteStart = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const quoteEnd = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const createPolygonPath = (x: number, y: number, size: number) => {
    const points = [
      `${x - size * 0.8}px ${y - size * 1.2}px`,
      `${x + size * 1.1}px ${y - size * 0.6}px`,
      `${x + size * 0.9}px ${y + size * 0.8}px`,
      `${x + size * 0.3}px ${y + size * 1.3}px`,
      `${x - size * 0.7}px ${y + size * 0.9}px`,
      `${x - size * 1.2}px ${y - size * 0.2}px`,
    ];
    return `polygon(${points.join(", ")})`;
  };

  return (
    <div className="sticky min-h-[500px] flex flex-col md:flex-row bg-white">
      <div
        ref={imageContainer}
        className="image bg-[#F0F0F0] md:w-[450px] flex justify-center items-center w-full sm:min-h-[500px] min-h-[430px] relative overflow-hidden cursor-none"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Base grayscale image */}
        <Image
          src={Engineer}
          alt="Engineer"
          className="object-cover absolute bottom-0 w-[400px] grayscale"
        />

        {/* Color reveal layer with irregular polygon clip-path */}
        <motion.div
          className="absolute flex w-full justify-center  inset-0 pointer-events-none"
          // Move the clipPath logic from `style` to `animate`
          animate={{
            clipPath: isHovered
              ? createPolygonPath(mousePosition.x, mousePosition.y, 80)
              : createPolygonPath(mousePosition.x, mousePosition.y, 0),
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
            mass: 0.8,
          }}
        >
          <Image
            src={Engineer}
            alt="Engineer"
            className="object-cover absolute bottom-0 w-[400px]"
          />
        </motion.div>
      </div>

      <div
        ref={container}
        className="text flex-1 flex flex-col justify-between px-[18px] gap-[40px] sm:px-[64px] md:px-[32px] py-[40px]"
      >
        <h2 className="text-[34px] flex flex-wrap sm:justify-start justify-center gap-0 leading-[100%] font-medium sm:text-[64px]">
          <motion.span style={{ opacity: quoteStart }} className="font-sans">
            &quot;
          </motion.span>
          {words.map((word, i) => {
            const end = i / words.length;
            const start = end * (i / words.length);
            return (
              <Word key={i} range={{ start, end }} progress={scrollYProgress}>
                {word}
              </Word>
            );
          })}
          <motion.span style={{ opacity: quoteEnd }} className="font-sans">
            &quot;
          </motion.span>
        </h2>

        <div className="ceo flex flex-col items-center gap-[4px] sm:items-start">
          <p className="text-[16px] font-sans leading-[100%] font-medium tracking-custom sm:text-[18px]">
            - Engr Muhammed Moshood{" "}
          </p>
          <p className="text-[14px] leading-[100%] font-sans tracking-custom sm:text-[16px]">
            CEO/MD, Sarta Media
          </p>
        </div>
      </div>
    </div>
  );
}
