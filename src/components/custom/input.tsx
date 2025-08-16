"use client";

export default function Input({
  type,
  placeholder,
  name,
  id,
  className,
  ...props
}: {
  type: string;
  placeholder: string;
  name?: string;
  id?: string;
  className?: string;
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={` h-[44px] border-1 border-[#E2E2E2] font-sans text-[16px] sm:text-[15px] tracking-[-0.6px] rounded-[16px] px-[16px] focus:outline-none focus:ring-[1px] focus:ring-[#8400ff82] ${className}`}
      {...props}
    />
  );
}

export function TextArea({
  placeholder,
  className,
  name,
  id,
  ...props
}: {
  placeholder: string;
  className?: string;
  name?: string;
  id?: string;
}) {
  return (
    <textarea
      
      placeholder={placeholder}
      className={` h-[80px] pt-[12px] border-1 border-[#E2E2E2] font-sans text-[16px] sm:text-[15px] tracking-[-0.6px] rounded-[16px] px-[16px] focus:outline-none focus:ring-[1.5px] focus:ring-[#d4a5ff82] ${className}`}
      {...props}
    />
  );
}
