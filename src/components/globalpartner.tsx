"use client";
import { image } from "motion/react-client";
import NigeriaBar from "../../public/nigeria-bar-association.png";
import NigeriaAir from "../../public/Nigeria-Air-force-logo.png";
import CIPM from "../../public/cipm-Logo.png";
import FraserSuites from "../../public/Fraser-Suites-Abuja.png";
import ICAN from "../../public/ican_logo.png";
import COREN from "../../public/COREN.png";
import Image from "next/image";
import { useRef } from "react";
import { MotionHighlight } from "./animate-ui/effects/motion-highlight";

import { useTransform, motion, MotionValue } from "motion/react";

export default function GlobalPartner() {
  const imageData = [
    { src: NigeriaBar, alt: "Image 1", id: 1 },
    { src: NigeriaAir, alt: "Image 2", id: 2 },
    { src: CIPM, alt: "Image 3", id: 3 },
    { src: FraserSuites, alt: "Image 4", id: 4 },
    { src: ICAN, alt: "Image 5", id: 5 },
    { src: COREN, alt: "Image 6", id: 6 },
  ];
  return (
    <motion.div className="global-partner sticky sm:h-screen h-[calc(100vh-80px)] bg-[#ffffff]">
      <div className="tag w-full h-[67px] sm:h-[130px]  bg-[#E76A57] flex items-center pl-[18px] sm:pl-[64px]">
        <p className="leading-[100%] text-[32px] sm:text-[88px] text-[#FFFFFF] font-medium ">
          GLOBAL PARTNERS
        </p>
      </div>
      <div className="grid grid-cols-2 grid-rows-3 sm:grid-rows-2 h-[calc(100vh-147px)] sm:h-[calc(100vh-130px)] w-full sm:grid-cols-3">
        <MotionHighlight hover>
          {imageData.map((image) => (
            <div
              key={image.alt}
              className=" col-span-1 flex h-full w-full items-center justify-center border-[0.5px]"
            >
              <Image
                src={image.src}
                alt={image.alt}
                className={`object-contain inline-block  ${
                  image.id > 4
                    ? "sm:h-[52px] h-[32px] w-[auto]"
                    : image.id === 4
                    ? "sm:h-[52px] h-[52px] w-[auto]"
                    : " h-[80px] sm:h-[120px]"
                } `}
              />
            </div>
          ))}
        </MotionHighlight>
      </div>
    </motion.div>
  );
}
