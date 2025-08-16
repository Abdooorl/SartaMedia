"use client";
import Image from "next/image";
import bottomLogo from "../../public/SARTAMEDIA.png"


export default function Footer() {
  return (
    <footer className="bg-[#F5F5FF] sticky h-[150px] sm:h-[400px] overflow-y-clip ">
      {/* <div className="container mx-auto text-center pt-[32px]">
        <p className="text-[#868686] font-sans tracking-custom font-medium text-sm sm:text-[16px]">
          &copy; {new Date().getFullYear()} Sarta Media. All rights reserved.
        </p>
      </div> */}
      <div className="w-full absolute -bottom-[16px] sm:-bottom-[64px]">
        <Image src={bottomLogo} alt="Sarta Media" className="mx-auto w-full absolute -bottom-[16px] sm:-bottom-[64px] " />
      </div>
    </footer>
  );
}
