"use client";
import Map from "./map/index";

export default function ContactUs() {
  return (
    <div className="sticky  top-0 z-8 min-h-screen h-max bg-white">
      <div className="tag w-full h-[67px] sm:h-[130px]  bg-[#714A97] flex items-center pl-[18px] sm:pl-[64px]">
        <p className="leading-[100%] text-[32px] sm:text-[88px] text-[#FFFFFF] font-medium ">
          CONTACT US
        </p>
      </div>
      <div className="map-contact-us w-full flex flex-col md:flex-row relative h-[calc(100vh-67px)] sm:h-[calc(100vh-130px)]">
        <div className="map md:w-[50%] w-full h-full ">
          <Map />
        </div>
        <div className="form md:w-[50%] w-full">
          <div className="text fex flex-col gap-[8px]">
            <p className="uppertext font-medium text-[#714A97] leading-[100%] text-[32px] sm:text-[36px]">
              Reach out to us
            </p>
            <p className="lowertext text-[#868686] tracking-custom font-sans  font-medium leading-[100%] text-[14px] sm:text-[16px]">
              We would love to hear from you!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
