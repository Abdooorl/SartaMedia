"use client";
import Hero from "@/components/hero";
import QuickIntro from "@/components/intro";
import GlobalPartner from "@/components/globalpartner";
import Portfolio from "@/components/portolio";
import Works from "@/components/works";
import Services from "@/components/services";
import MeetCEO from "@/components/meetceo";
import ContactUs from "@/components/contact-us";

export default function Home() {
  return (
    <div className="home  font-serif ">
      <Hero />
      <QuickIntro />
      <GlobalPartner />
      <Portfolio />
      <Works />
      <Services />
      <MeetCEO />
      <ContactUs />
    </div>
  );
}
