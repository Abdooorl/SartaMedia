"use client";
import Map from "./map/index";
import Input from "./custom/input";
import { TextArea } from "./custom/input";
import { title } from "process";
import Socials from "./custom/socials";

export default function ContactUs() {
  const contactData = [
    {
      id: 1,
      title: "Our Office Address",
      string: "Suite 208, Copper House Wuse Zone 5,  Abuja – Nigeria",
    },
    {
      id: 2,
      title: "Email Us",
      string: "info@sartamedia.com www.sartamedia.com",
    },
    {
      id: 3,
      title: "Phone Number",
      string: "+2348025519631 +2348025519631 ",
    },
    {
      id: 4,
      title: "Working Hours",
      string: "Monday - Friday, 8:00 AM - 5:00 PM",
    },
  ];
  return (
    <div className="sticky min-h-screen bg-white">
      <div className="tag w-full h-[67px] sm:h-[130px]  bg-[#714A97] flex items-center pl-[18px] sm:pl-[64px]">
        <p className="leading-[100%] text-[32px] sm:text-[88px] text-[#FFFFFF] font-medium ">
          CONTACT US
        </p>
      </div>

      {/* Map and Input */}
      <div className="map-contact-us w-full items-center flex flex-col md:flex-row relative">
        <div className="map md:w-[50%] w-full h-[500px] md:h-[calc(100vh-100px)]">
          <Map />
        </div>
        <div className="form md:w-[50%] bg-white w-full flex-col flex px-[18px] md:px-[36px] sm:px-[64px] py-[36px] md:py-[16px] gap-[32px]">
          <div className="text flex flex-col gap-[8px]">
            <p className="uppertext font-medium text-[#714A97] leading-[100%] text-[32px] sm:text-[36px]">
              Reach out to us
            </p>
            <p className="lowertext text-[#868686] tracking-custom font-sans  font-medium leading-[100%] text-[15px] sm:text-[16px]">
              We would love to hear from you!
            </p>
          </div>
          <div className="inputs-button flex flex-col gap-[40px]">
            <div className="input-field flex flex-col gap-[20px]">
              <div className="input flex flex-col gap-[8px]">
                <label
                  className="font-sans text-[14px] font-medium leading-[100%] text-[#868686] tracking-custom"
                  htmlFor="name"
                >
                  Name
                </label>
                <Input type="text" placeholder="" id="name" />
              </div>
              <div className="input flex flex-col gap-[8px]">
                <label
                  className="font-sans text-[14px] font-medium leading-[100%] text-[#868686] tracking-custom"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <Input type="email" placeholder="" id="email" />
              </div>
              <div className="input flex flex-col gap-[8px]">
                <label
                  className="font-sans text-[14px] font-medium leading-[100%] text-[#868686] tracking-custom"
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

      <div className="contact-details w-full grid grid-cols-1 md:grid-cols-4 bg-[#FAFAFF] py-[20px]">
        {contactData.map((item) => (
          <div
            key={item.id}
            className={`flex flex-col justify-center  md:items-center sm:justify-center ${item.id !== 4 ? "border-b-[0.5px]" : ""} sm:border-r-1 sm:border-b-0 w-full h-[100px] sm:h-[100px] px-[18px] sm:px-[64px] md:p-[0] md:h-[145px]`}
          >
            <p className="font-medium text-[#714A97] leading-[100%] text-[28px] md:text-[40px]">
              {item.title}
            </p>
            <p
              className={`text-[#868686] ${
                item.id !== 1 ? "w-[50%] sm:w-[60%]" : "w-full"
              } tracking-custom font-sans md:text-center text-balance font-medium leading-[120%] mt-[8px] text-[15px] sm:text-[16px]`}
            >
              {item.string}
            </p>
          </div>
        ))}
      </div>

      <div className="socials ">
        <Socials />
      </div>
    </div>
  );
}
