import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";

const customFont = localFont({
  src: [
    {
      path: "../public/fonts/5b01f339abf2f1a5.p.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/4f39e50a8d816b01-s.p.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/a26637ac863e3a15-s.p.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-custom",
});

export const metadata: Metadata = {
  title: "Fajobi Anselm Portfolio",
  description:
    "A Fullstack Mobile and Web Developer With Knowledge Of Cyber Security Services. Diverse and Creating And Offering The Best Services For Clients and Companies ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${customFont.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
