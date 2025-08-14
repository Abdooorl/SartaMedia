import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import localFonts from "next/font/local";
import "./globals.css";
import Navigation from "@/components/custom/navigation";

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const testManuka = localFonts({
  variable: "--font-test-manuka",
  src: [
    {
      path: "../../public/fonts/TestManuka-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/TestManuka-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/TestManuka-Bold.otf",
      weight: "700",
      style: "normal",
    },

    {
      path: "../../public/fonts/TestManuka-Black.otf",
      weight: "900",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Sarta Media",
  description:
    "Sarta Media is a static website for Sarta Media, a modern media company. The site showcases company information, services, and contact details in a clean, responsive design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      
        className={`${inter.variable} ${testManuka.variable} font-serif antialiased overflow-x-hidden`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
