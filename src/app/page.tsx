import Image from "next/image";
import Hero from "@/components/custom/hero";
import QuickIntro from "@/components/custom/intro";
import GlobalPartner from "@/components/custom/globalpartner";
import Portfolio from "@/components/custom/portolio";

export default function Home() {
  return (
    <div className="home font-serif ">
      <Hero />
      <QuickIntro  />
      <GlobalPartner />
      <Portfolio />
    </div>
  );
}
