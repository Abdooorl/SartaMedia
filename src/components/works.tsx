"use client";
import ImageCard from "./custom/image-card";
import EventOne from "@/../public/Events-one.png";
import EventTwo from "@/../public/Events-two.png";
import EventThree from "@/../public/Events-three.png";
import EventFour from "@/../public/Events-four.png";
import { motion, useScroll, useTransform } from "motion/react";
import {  useRef } from "react";

export default function Works() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const imageData = [
    {
      src: EventOne,
      alt: "Chartered Institute of Personnel Management in Nigeria",
      desc: "55th INTERNATIONAL CONFERENCE AND EXHIBITION",
      id: 0
    },
    {
      src: EventTwo,
      alt: "National Ministry of Education",
      desc: "NATIONAL CONFERENCE ON LEARNING IN NIGERIA",
      id: 1,
    },
    {
      src: EventThree,
      alt: "National Policy and Development Summit",
      desc: "THE INTERROGATING CHANGE AGENDA ",
      id: 2,
    },
    {
      src: EventFour,
      alt: "USAID X MERCY CORPS",
      desc: "COMMUNITY INITIATIVES TO PROMOTE PEACE",
      id: 3,
    },
  ];

  return (
    <div ref={container} className="works sticky bg-[#4FC0D4] z-2 h-[400vh]">
      {imageData.map((image, index) => {
        const targetScale = 1 - ((imageData.length - image.id) * 0.05);
        return (
          <ImageCard
            key={index}
            range={[image.id * 0.25, 1]}
            targetScale={targetScale}
            progress={scrollYProgress}
            image={{
              src: image.src,
              alt: image.alt,
              desc: image.desc,
              id: image.id,
            }}
          />
        );
      })}
    </div>
  );
}
