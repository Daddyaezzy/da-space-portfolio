import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaYoutube, FaTiktok, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] z-20 ">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Community</div>

            <a href="https://www.github.com/daddyaezzy">
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <RxGithubLogo />
                <span className="text-[15px] ml-[6px]">Github</span>
              </p>
            </a>
            <a href="https://www.tiktok.com/@bigdidiy?_t=8j1GUpYYq05&_r=1">
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <FaTiktok />
                <span className="text-[15px] ml-[6px]">TikTok</span>
              </p>
            </a>
            <a href="https://wa.me/+2349096571954">
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <FaWhatsapp />
                <span className="text-[15px] ml-[6px]">Whatsapp</span>
              </p>
            </a>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social Media</div>
            <a href="https://www.instagram.com/daddyaezzy/" target="_blank">
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <RxInstagramLogo />
                <span className="text-[15px] ml-[6px]">Instagram</span>
              </p>
            </a>
            <a href="https://x.com/bigdidiy_?s=21" target="_blank">
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <RxTwitterLogo />
                <span className="text-[15px] ml-[6px]">Twitter</span>
              </p>
            </a>
            <a
              href="https://www.linkedin.com/in/anselm-fajobi-8ab5a623b"
              target="_blank"
            >
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <RxLinkedinLogo />
                <span className="text-[15px] ml-[6px]">Linkedin</span>
              </p>
            </a>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">About</div>
            <a href="mailto:pulumbu11@gmail.com">
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <span className="text-[15px] ml-[6px]">Become Sponsor</span>
              </p>
            </a>
            <a href="mailto:pulumbu11@gmail.com">
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <span className="text-[15px] ml-[6px]">Link me with a Gig</span>
              </p>
            </a>
            <a href="mailto:pulumbu11@gmail.com">
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <span className="text-[15px] ml-[6px]">
                  Pulumbu11@gmail.com
                </span>
              </p>
            </a>
          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; Daddyaezzy 2024 Inc. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
