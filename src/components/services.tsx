"use client";
import Triangle from "@/../public/Triangle.png";
import Image from "next/image";

export default function Services() {
  return (
    <div className="services  sticky w-full flex flex-col sm:flex-row-reverse   bg-white">
      <div className="service-header relative flex min-h-[700px] sm:w-[50%] w-full  bg-[#714A97] ">
        <div className="text w-full px-[18px] sm:px-[32px] sm:py-[32px] py-[28px] h-max flex flex-col gap-[4px]">
          <h2 className="font-medium text-[40px] sm:text-[88px] text-white leading-[100%]">
            Our Services
          </h2>
          <p className="text-[16px] text-wrap font-sans leading-[100%] sm:text-[18px]  text-[#E2D5EF]">
            Our expertise covers Sound & PA Systems for crystal-clear audio, LED
            & Projector Screens for vibrant visuals, and Lighting Creation to
            set the perfect mood. We also specialize in Event Decoration that
            transforms spaces, Exhibition Booths that draw attention, and Stage
            & Stage Design that makes your event unforgettable.
          </p>
        </div>
        <div className="image  absolute bottom-0 items-center justify-center flex w-full h-[30vh]">
          <Image
            src={Triangle}
            priority
            alt="Triangle"
            height={450}
            width={450}
            className="absolute object-cover bottom-0"
          />
        </div>
      </div>
      <div className="services sm:w-[50%]">hhhhb</div>
    </div>
  );
}
