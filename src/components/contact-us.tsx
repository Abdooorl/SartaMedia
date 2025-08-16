"use client";
import { useState } from "react";
import { z } from "zod";
import Map from "./map/index";
import Input from "./custom/input";
import { TextArea } from "./custom/input";
import Socials from "./custom/socials";
import {
  Cursor,
  CursorFollow,
  CursorProvider,
} from "@/components/animate-ui/components/cursor";

// Create a schema for form validation
const formSchema = z.object({
  name: z.string(),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(1, "Please enter a subject"),
  message: z.string(),
});

export default function ContactUs() {
  // Add form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Add error state - expanded to include subject
  const [errors, setErrors] = useState<{ email?: string; subject?: string }>(
    {}
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));

    // Clear error when user types in email or subject field
    if (
      (id === "email" && errors.email) ||
      (id === "subject" && errors.subject)
    ) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[id as keyof typeof errors];
        return newErrors;
      });
    }
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Track validation errors
    const newErrors: { email?: string; subject?: string } = {};

    // Validate email
    const emailResult = formSchema.shape.email.safeParse(formData.email);
    if (!emailResult.success) {
      newErrors.email = "Please enter a valid email address";
    }

    // Validate subject
    const subjectResult = formSchema.shape.subject.safeParse(formData.subject);
    if (!subjectResult.success) {
      newErrors.subject = "Please enter a subject";
    }

    // If there are any errors, stop submission
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    // Clear errors if validation passes
    setErrors({});

    // Submit form data (add your API call here)
    console.log("Form submitted:", formData);

    // Reset form after submission (optional)
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);

    // You could add a success message here
  };

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
      string: "+2348025519631 +2347080000404 ",
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
            <form
              className="input-field flex flex-col gap-[20px]"
              id="contact-form"
              onSubmit={handleSubmit}
            >
              <div className="input flex flex-col gap-[8px]">
                <label
                  className="font-sans text-[14px] font-medium leading-[100%] text-[#868686] tracking-custom"
                  htmlFor="name"
                >
                  Name
                </label>
                <Input
                  type="text"
                  placeholder=""
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="input flex flex-col gap-[8px]">
                <label
                  className="font-sans text-[14px] font-medium leading-[100%] text-[#868686] tracking-custom"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <Input
                  type="email"
                  placeholder=""
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <p className="text-red-500 font-sans tracking-custom text-sm mt-[-4px]">
                    {errors.email}
                  </p>
                )}
              </div>
              <div className="input flex flex-col gap-[8px]">
                <label
                  className="font-sans text-[14px] font-medium leading-[100%] text-[#868686] tracking-custom"
                  htmlFor="subject"
                >
                  Subject
                </label>
                <Input
                  type="text"
                  placeholder=""
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
                {errors.subject && (
                  <p className="text-red-500 font-sans tracking-custom text-sm mt-[-4px]">
                    {errors.subject}
                  </p>
                )}
              </div>
              <div className="input flex flex-col gap-[8px]">
                <label
                  className="font-sans text-[14px] leading-[100%] text-[#868686] tracking-custom"
                  htmlFor="message"
                >
                  Message
                </label>
                <TextArea
                  placeholder=""
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
            </form>
            <button
              type="submit"
              form="contact-form"
              className="bg-[#714A97] w-full h-[56px] font-medium text-[20px] rounded-[16px] text-white py-[12px] px-[24px] disabled:opacity-70"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </div>
        </div>
      </div>

      <div className="contact-details w-full grid grid-cols-1 md:grid-cols-4 bg-[#FAFAFF] py-[20px]">
        {contactData.map((item) => (
          <div
            key={item.id}
            className={`flex flex-col justify-center  md:items-center sm:justify-center ${
              item.id !== 4 ? "border-b-[0.5px]" : ""
            } sm:border-r-1 sm:border-b-0 w-full h-[120px] sm:h-[100px] px-[18px] sm:px-[64px] md:p-[0] md:h-[145px]`}
          >
            <p className="font-medium text-[#714A97] leading-[100%] text-[28px] md:text-[40px]">
              {item.title}
            </p>
            <p
              className={`text-[#8C7C9D] ${
                item.id !== 1
                  ? "w-[50%] sm:w-[60%]"
                  : "w-[90%] text-wrap sm:text-balance"
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
      <CursorProvider>
        <Cursor>
          <svg
            className="size-6 text-[#5500A8] hidden md:flex"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 40 40"
          >
            <path
              fill="currentColor"
              d="M1.8 4.4 7 36.2c.3 1.8 2.6 2.3 3.6.8l3.9-5.7c1.7-2.5 4.5-4.1 7.5-4.3l6.9-.5c1.8-.1 2.5-2.4 1.1-3.5L5 2.5c-1.4-1.1-3.5 0-3.3 1.9Z"
            />
          </svg>
        </Cursor>

        <CursorFollow>
          <div className="bg-[#5500A8] text-white font-medium hidden md:flex tracking-custom font-sans px-3 py-1 rounded-[100px] text-sm shadow-lg">
            Contact Us
          </div>
        </CursorFollow>
      </CursorProvider>
    </div>
  );
}
