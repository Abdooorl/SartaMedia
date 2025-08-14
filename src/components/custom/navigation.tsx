"use client";
import Logo from "../../../public/Logo.png";
import Image from "next/image";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { useState } from "react";
import { div } from "motion/react-client";
import { text } from "stream/consumers";

export default function Navigation() {
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const socialNavigations = [
    { name: "Facebook", url: "https://facebook.com", text: "Text Us" },
    { name: "Instagram", url: "https://instagram.com", text: "Get a Quote" },
    { name: "Whatsapp", url: "https://whatsapp.com", text: "Book a Call" },
  ];

  const lineProps = {
    stroke: "white",
    strokeWidth: "3",
    vectorEffect: "non-scaling-stroke",
    initial: "closed",
    animate: isMenuClicked ? "open" : "closed",
    transition: { type: "spring", stiffness: 260, damping: 20 },
  } as const;

  const topLineVariants: Variants = {
    closed: { d: "M 2 10 L 30 10" },
    open: { d: "M 4 28 L 28 4" },
  };

  const bottomLineVariants: Variants = {
    closed: { d: "M 2 22 L 30 22" },
    open: { d: "M 4 4 L 28 28" },
  };

  return (
    <div className="navupper relative flex w-full h-max flex-col">
      <div className="nav z-1  flex flex-row items-center w-full justify-between py-[20px] px-[18px] sm:px-[64px] sm:py-[24px] bg-[#0C0E35]">
        <Image
          src={Logo}
          alt="Logo"
          className="h-[28px] w-[auto] sm:h-[32px] sm:w-[auto] "
        />
        <div
          className="menu cursor-pointer"
          onClick={() => setIsMenuClicked((prev) => !prev)}
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 32 32"
            fill="none"
            overflow="visible"
          >
            <motion.path {...lineProps} variants={topLineVariants} />

            <motion.path {...lineProps} variants={bottomLineVariants} />
          </motion.svg>
        </div>
      </div>
      <AnimatePresence>
        {isMenuClicked && (
          <motion.div
            key="navigation-menu"
            className="navigations z-0 w-full flex flex-row items-center justify-between top-[68px] h-[50px] sm:h-[100px] sm:top-[80px] absolute bg-[#E8E9FF]"
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ ease: "easeInOut", duration: 0.3 }}
          >
            {socialNavigations.map((item) => (
              <div
                key={item.name}
                className="bg-[#E8E9FF] group hover:bg-[hsl(237,100%,90%)] transition-colors duration-200 ease-out cursor-pointer border-r border-[#D0D2FF] text-[22px] sm:text-[48px] font-medium h-full flex items-center justify-center w-full"
              >
                <a
                  href={item.url}
                  target="_blank"
                  className="w-full h-full flex justify-center items-center text-center font-medium text-[#0C0E35] relative overflow-hidden"
                >
                  <motion.div
                    className="w-full h-full"
                    whileHover={{ y: "-100%" }}
                    transition={{ ease: "easeInOut", duration: 0.5 }}
                  >
                    <span className="w-full h-full flex justify-center items-center">
                      {item.name}
                    </span>
                    <span className="w-full h-full flex justify-center items-center absolute inset-0 top-full">
                      {item.text}
                    </span>
                  </motion.div>
                </a>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
