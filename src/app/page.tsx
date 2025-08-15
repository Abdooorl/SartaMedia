"use client";
import Image from "next/image";
import Hero from "@/components/hero";
import QuickIntro from "@/components/intro";
import GlobalPartner from "@/components/globalpartner";
import Portfolio from "@/components/portolio";
import Works from "@/components/works";
import { useScroll } from "motion/react";
import { useRef } from "react";
import Services from "@/components/services";

export default function Home() {
  return (
    <div className="home  font-serif ">
      <Hero />
      <QuickIntro />
      <GlobalPartner />
      <Portfolio />
      <Works />
      <Services />
    </div>
  );
}
