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
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-4 md:p-[15px] z-20">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-start md:items-center justify-around flex-wrap gap-6 md:gap-0">
          <div className="min-w-[150px] md:min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-sm md:text-[16px] mb-2">
              Community
            </div>

            <a href="https://www.github.com/daddyaezzy">
              <p className="flex flex-row items-center my-2 md:my-[15px] cursor-pointer hover:text-purple-400 transition-colors">
                <RxGithubLogo className="text-base md:text-lg" />
                <span className="text-xs md:text-[15px] ml-[6px]">Github</span>
              </p>
            </a>
            <a href="https://www.tiktok.com/@bigdidiy?_t=8j1GUpYYq05&_r=1">
              <p className="flex flex-row items-center my-2 md:my-[15px] cursor-pointer hover:text-purple-400 transition-colors">
                <FaTiktok className="text-base md:text-lg" />
                <span className="text-xs md:text-[15px] ml-[6px]">TikTok</span>
              </p>
            </a>
            <a href="https://wa.me/+2349096571954">
              <p className="flex flex-row items-center my-2 md:my-[15px] cursor-pointer hover:text-purple-400 transition-colors">
                <FaWhatsapp className="text-base md:text-lg" />
                <span className="text-xs md:text-[15px] ml-[6px]">
                  Whatsapp
                </span>
              </p>
            </a>
          </div>
          <div className="min-w-[150px] md:min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-sm md:text-[16px] mb-2">
              Social Media
            </div>
            <a href="https://www.instagram.com/bigdidiy/" target="_blank">
              <p className="flex flex-row items-center my-2 md:my-[15px] cursor-pointer hover:text-purple-400 transition-colors">
                <RxInstagramLogo className="text-base md:text-lg" />
                <span className="text-xs md:text-[15px] ml-[6px]">
                  Instagram
                </span>
              </p>
            </a>
            <a href="https://x.com/bigdidiy_?s=21" target="_blank">
              <p className="flex flex-row items-center my-2 md:my-[15px] cursor-pointer hover:text-purple-400 transition-colors">
                <RxTwitterLogo className="text-base md:text-lg" />
                <span className="text-xs md:text-[15px] ml-[6px]">Twitter</span>
              </p>
            </a>
            <a
              href="https://www.linkedin.com/in/anselm-fajobi-8ab5a623b"
              target="_blank"
            >
              <p className="flex flex-row items-center my-2 md:my-[15px] cursor-pointer hover:text-purple-400 transition-colors">
                <RxLinkedinLogo className="text-base md:text-lg" />
                <span className="text-xs md:text-[15px] ml-[6px]">
                  Linkedin
                </span>
              </p>
            </a>
          </div>
          <div className="min-w-[150px] md:min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-sm md:text-[16px] mb-2">About</div>
            <a href="mailto:pulumbu11@gmail.com">
              <p className="flex flex-row items-center my-2 md:my-[15px] cursor-pointer hover:text-purple-400 transition-colors">
                <span className="text-xs md:text-[15px] ml-[6px]">
                  Become Sponsor
                </span>
              </p>
            </a>
            <a href="mailto:pulumbu11@gmail.com">
              <p className="flex flex-row items-center my-2 md:my-[15px] cursor-pointer hover:text-purple-400 transition-colors">
                <span className="text-xs md:text-[15px] ml-[6px]">
                  Link me with a Gig
                </span>
              </p>
            </a>
            <a href="mailto:pulumbu11@gmail.com">
              <p className="flex flex-row items-center my-2 md:my-[15px] cursor-pointer hover:text-purple-400 transition-colors">
                <span className="text-xs md:text-[15px] ml-[6px]">
                  Pulumbu11@gmail.com
                </span>
              </p>
            </a>
          </div>
        </div>

        <div className="mt-6 md:mb-[20px] text-xs md:text-[15px] text-center px-4">
          &copy; Fajobi Anselm 2025 Inc. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
