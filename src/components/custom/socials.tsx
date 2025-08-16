"use client";
import { socialNavigations } from "../navigation";
import {  motion } from "framer-motion";

export default function Socials() {
  return (
    <motion.div
      key="navigation-menu"
      className="navigations w-full flex flex-row items-center justify-between  h-[50px] sm:h-[100px]   bg-[#E8E9FF]"
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
  );
}
