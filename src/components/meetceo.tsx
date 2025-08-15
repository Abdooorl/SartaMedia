"use client";
import Engineer from "@/../public/Engineer.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";


export default function MeetCEO() {
  return (
    <div className="sticky min-h-[500px]  flex flex-col md:flex-row bg-white">
      <div className="image bg-[#F0F0F0] md:w-[450px] grayscale flex justify-center items-center w-full  min-h-[500px]  relative">
        <Image
          src={Engineer}
          alt="Engineer"
          className="object-cover absolute bottom-0  w-[400px]"
        />
      </div>
      <div className="text flex-1 flex flex-col justify-between px-[18px] gap-[40px] sm:px-[24px] md:px-[32px] py-[40px]">
        <h2 className="text-[34px] text-center md:text-left leading-[100%] font-medium sm:text-[64px]">
          <span className="font-sans ">&ldquo;</span>
          At Sarta Media, we create events people remember. To our valued
          clients, thank you for trusting us. To future partners, we invite you
          to experience the passion, creativity, and technology that set us
          apart.
          <span className="font-sans">&rdquo;</span>
        </h2>

        <div className="ceo flex flex-col gap-[4px] items-center md:items-start">
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
