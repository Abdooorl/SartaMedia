"use client";
import PortFolioHeader from "../../../public/Portfolio-Image.png"

import Image from "next/image";

export default function Portfolio() {
  return (
    <div className="portfolio sticky z-2 sm:h-screen overflox-x-hidden flex items-center justify-center h-[calc(100vh-80px)] bg-[#C63275]">
      <p className="text-[32px] sm:text-[88px] gap-[4px] flex flex-row items-center font-medium text-[#fff]">FEATURED
        <Image src={PortFolioHeader} className="h-[52px] w-[auto] sm:h-[80px] rounded-[16px] border-2 border-white" alt="Featured Portfolio" />
         PORTFOLIO</p>
    </div>
  );
}
