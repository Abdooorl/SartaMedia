"use client";

export default function Input({
  type,
  placeholder,
  name,
  id,
  value,
  className,
  onChange,
  ...props
}: {
  type: string;
  placeholder: string;
  name?: string;
  id?: string;
  value?: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      id={id}
      name={name}
      onChange={onChange} // Just pass the function directly
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
  value,
  onChange,
  ...props
}: {
  placeholder: string;
  className?: string;
  name?: string;
  id?: string;
  value?: string; // Make this optional to match Input
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}) {
  return (
    <textarea
      placeholder={placeholder}
      value={value || ""} // Add fallback for undefined
      id={id}
      name={name}
      onChange={onChange} // Just pass the function directly
      className={` h-[80px] pt-[12px] border-1 border-[#E2E2E2] font-sans text-[16px] sm:text-[15px] tracking-[-0.6px] rounded-[16px] px-[16px] focus:outline-none focus:ring-[1.5px] focus:ring-[#d4a5ff82] ${className}`}
      {...props}
    />
  );
}
