"use client";
import Triangle from "@/../public/Triangle.png";
import Image from "next/image";
import { AudioLinesIcon } from "./ui/audio-lines";
import { CastIcon } from "./ui/cast";
import { SunIcon } from "./ui/sun";
import { PartyPopperIcon } from "./ui/party-popper";
import { ClapIcon } from "./ui/clap";
import { TelescopeIcon } from "./ui/telescope";
import { JSX } from "react";

export default function Services() {
  const servicesData: {
    icon: JSX.Element;
    title: string;
    description: string;
  }[] = [
    {
      icon: <AudioLinesIcon />,
      title: "Sound & PA Systems",
      description: "Crystal-clear audio for any event.",
    },
    {
      icon: <CastIcon />,
      title: "LED & Projector Screens",
      description: "Vibrant visuals to captivate your audience.",
    },
    {
      icon: <SunIcon />,
      title: "Lighting Creation",
      description: "Set the perfect mood with our lighting solutions.",
    },
    {
      icon: <PartyPopperIcon />,
      title: "Event Decoration",
      description: "Transform your space into something extraordinary.",
    },
    {
      icon: <TelescopeIcon />,
      title: "Exhibition Booths",
      description: "Draw attention with our stunning booth designs.",
    },
    {
      icon: <ClapIcon />,
      title: "Stage & Stage Design",
      description: "Make your event unforgettable with our stage solutions.",
    },
  ];
  return (
    <div className="services  sticky w-full flex flex-col sm:flex-row-reverse   bg-white">
      <div className="service-header relative sm:top-0  sm:sticky flex  min-h-[600px] sm:h-screen sm:w-[50%] w-full  bg-[#714A97] ">
        <div className="text w-full px-[18px] sm:px-[32px] sm:py-[32px] py-[28px] h-max flex flex-col gap-[8px]">
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
      <div className="services sm:w-[50%]">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="service flex flex-col  gap-[20px] px-[18px] sm:h-[200px] h-[160px] justify-center sm:pl-[64px] sm:pr-[12px] border-b-[1px] border-[#ECECF2]"
          >
            <div className="icon cursor-pointer w-max">{service.icon}</div>
            <div className="text flex flex-col gap-[4px]">
              <h3 className="font-medium text-[28px] leading-[100%] sm:text-[40px] text-[#161616]">
                {service.title}
              </h3>
              <p className="text-[16px] tracking-custom font-sans text-[#636363]">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
