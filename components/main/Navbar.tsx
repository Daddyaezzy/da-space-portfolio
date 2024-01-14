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
    <div className="w-full h-[65px] fixed top-0  shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row  items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/da-high-resolution-logo-transparent.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />

          {windowWidth > 800 && (
            <span className="font-bold ml-[10px] hidden md:block text-gray-300">
              DaddyAezzy
            </span>
          )}
        </a>

        {windowWidth > 600 && (
          <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
            <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
              <a
                href="#about-me"
                className="cursor-pointer hover:text-[#7d3c98]"
              >
                About me
              </a>
              <a href="#skills" className="cursor-pointer hover:text-[#7d3c98]">
                Skills
              </a>
              <a
                href="#projects"
                className="cursor-pointer hover:text-[#7d3c98]"
              >
                Projects
              </a>
            </div>
          </div>
        )}

        {windowWidth > 600 ? (
          <div className="flex flex-row gap-5">
            <Link
              href="https://www.linkedin.com/in/anselm-fajobi-8ab5a623b"
              target="_blank"
            >
              <FaLinkedin className="text-white text-[20px] hover:text-[#7d3c98]" />
            </Link>
            <Link href="https://www.github.com/daddyaezzy" target="_blank">
              <FaGithub className="text-white text-[20px] hover:text-[#7d3c98]" />
            </Link>
            <Link href="https://x.com/bigdidiy_?s=21" target="_blank">
              <FaTwitter className="text-white text-[20px] hover:text-[#7d3c98]" />
            </Link>
          </div>
        ) : (
          <div>
            <Bars3CenterLeftIcon
              onClick={() => setClicked(true)}
              className="text-white h-10 w-10 cursor-pointer"
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
