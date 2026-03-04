"use client";
import { Socials } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Bars3CenterLeftIcon } from "@heroicons/react/24/solid";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

import NavSlider from "../sub/NavSlider";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Update window width on mount and on resize
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    // Initial update
    updateWindowWidth();

    // Add event listener for window resize
    window.addEventListener("resize", updateWindowWidth);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);

  return (
    <div className="w-full h-[75px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-xl z-50 px-4 md:px-10 lg:px-[120px] border-b border-[#7042f861]">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center group"
        >
          <div className="relative">
            {/* Glow effect behind logo */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-cyan-600/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <Image
              src="/da-high-resolution-logo-transparent.png"
              alt="logo"
              width={50}
              height={50}
              className="cursor-pointer hover:scale-110 transition-transform duration-300 relative z-10 md:w-[70px] md:h-[40px]"
            />
          </div>
        </a>

        {windowWidth > 600 && (
          <div className="h-full flex flex-row items-center justify-between">
            <div className="flex items-center gap-4 md:gap-8 h-auto border border-[#7042f861] bg-gradient-to-r from-[#0300145e] via-[#0300147e] to-[#0300145e] px-4 md:px-8 py-2 md:py-3 rounded-full text-gray-200 shadow-lg shadow-purple-900/20 backdrop-blur-md">
              <a
                href="#about-me"
                className="relative cursor-pointer text-sm font-medium transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-cyan-400 group"
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 transition-all duration-300 group-hover:w-full"></span>
              </a>

              <a
                href="#projects"
                className="relative cursor-pointer text-sm font-medium transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-cyan-400 group"
              >
                Projects
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#skills"
                className="relative cursor-pointer text-sm font-medium transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-cyan-400 group"
              >
                Skills
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#testimonials"
                className="relative cursor-pointer text-sm font-medium transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-cyan-400 group"
              >
                Testimonials
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#contact"
                className="relative cursor-pointer text-sm font-medium transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-cyan-400 group"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
          </div>
        )}

        {windowWidth > 600 ? (
          <div className="flex flex-row gap-3 md:gap-5">
            <Link
              href="https://www.linkedin.com/in/anselm-fajobi-8ab5a623b"
              target="_blank"
              className="group"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <FaLinkedin className="text-white text-[20px] md:text-[22px] hover:text-blue-400 transition-all duration-300 hover:scale-125 relative z-10" />
              </div>
            </Link>
            <Link
              href="https://www.github.com/daddyaezzy"
              target="_blank"
              className="group"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-purple-500/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <FaGithub className="text-white text-[20px] md:text-[22px] hover:text-purple-400 transition-all duration-300 hover:scale-125 relative z-10" />
              </div>
            </Link>
            <Link
              href="https://x.com/bigdidiy_?s=21"
              target="_blank"
              className="group"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-cyan-500/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <FaTwitter className="text-white text-[20px] md:text-[22px] hover:text-cyan-400 transition-all duration-300 hover:scale-125 relative z-10" />
              </div>
            </Link>
          </div>
        ) : (
          <div>
            <Bars3CenterLeftIcon
              onClick={() => setClicked(true)}
              className="text-white h-8 w-8 cursor-pointer hover:text-purple-400 transition-colors duration-300 active:scale-95"
            />
            {clicked && <NavSlider clicked={clicked} setClicked={setClicked} />}

            <div />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
