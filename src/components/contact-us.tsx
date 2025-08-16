"use client";
import Map from "./map/index";
import Input from "./custom/input";
import { TextArea } from "./custom/input";

export default function ContactUs() {
  return (
    <div className="sticky  min-h-screen h-max bg-white">
      
      <div className="tag w-full h-[67px] sm:h-[130px]  bg-[#714A97] flex items-center pl-[18px] sm:pl-[64px]">
        <p className="leading-[100%] text-[32px] sm:text-[88px] text-[#FFFFFF] font-medium ">
          CONTACT US
        </p>
      </div>

      {/* Map and Input */}
      <div className="map-contact-us w-full flex flex-col md:flex-row sm:relative h-[calc(100vh-67px)] sm:h-[calc(100vh-130px)]">
        <div className="map md:w-[50%] sticky top-0 z-0 w-full h-full  min-h-[600px]">
          <Map />
        </div>
        <div className="form md:w-[50%] z-2 bg-white w-full flex-col flex px-[18px] md:px-[36px] sm:px-[64px] py-[36px] gap-[32px]">
          <div className="text flex flex-col gap-[8px]">
            <p className="uppertext font-medium text-[#714A97] leading-[100%] text-[32px] sm:text-[36px]">
              Reach out to us
            </p>
            <p className="lowertext text-[#868686] tracking-custom font-sans  font-medium leading-[100%] text-[14px] sm:text-[16px]">
              We would love to hear from you!
            </p>
          </div>
          <div className="inputs-button flex flex-col gap-[40px]">
            <div className="input-field flex flex-col gap-[20px]">
              <div className="input flex flex-col gap-[8px]">
                <label
                  className="font-sans text-[14px] leading-[100%] text-[#868686] tracking-custom"
                  htmlFor="name"
                >
                  Name
                </label>
                <Input type="text" placeholder="" id="name" />
              </div>
              <div className="input flex flex-col gap-[8px]">
                <label
                  className="font-sans text-[14px] leading-[100%] text-[#868686] tracking-custom"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <Input type="email" placeholder="" id="email" />
              </div>
              <div className="input flex flex-col gap-[8px]">
                <label
                  className="font-sans text-[14px] leading-[100%] text-[#868686] tracking-custom"
                  htmlFor="subject"
                >
                  Subject
                </label>
                <Input type="text" placeholder="" id="subject" />
              </div>
              <div className="input flex flex-col gap-[8px]">
                <label
                  className="font-sans text-[14px] leading-[100%] text-[#868686] tracking-custom"
                  htmlFor="message"
                >
                  Message
                </label>
                <TextArea placeholder="" id="message" />
              </div>
            </div>
            <button className="bg-[#714A97] w-full h-[56px] font-medium text-[20px] rounded-[16px] text-white py-[12px] px-[24px]">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
