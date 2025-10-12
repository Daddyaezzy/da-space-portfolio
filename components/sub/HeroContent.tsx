"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromTop,
  slideInFromRight,
} from "../../utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="grid lg:grid-cols-2 items-center justify-center md:mt-[120px] mt-[80px]   px-4 md:px-0"
    >
      <div className="h-full w-full flex flex-col gap-3 md:gap-5 justify-center text-start relative z-10">
        {/* Floating background orbs */}
        <div className="absolute -left-20 top-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -right-20 bottom-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] md:px-[10px] border border-[#7042f88b] bg-gradient-to-r from-purple-500/10 via-transparent to-cyan-500/10 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 group relative overflow-hidden"
        >
          {/* Animated shimmer effect */}
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

          <SparklesIcon className="text-[#b49bff] mr-[10px] h-4 w-4 md:h-5 md:w-5 animate-pulse" />
          <h1 className="welcome-text text-[11px] md:text-[13px] text-white pr-1 font-semibold tracking-wide">
            Fullstack Web, Mobile & Web3 Developer
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-4 md:gap-6 mt-4 md:mt-6 text-3xl md:text-5xl lg:text-6xl font-bold text-white max-w-[600px] w-auto h-auto relative"
          style={{ lineHeight: 1.2 }}
        >
          <span className="relative">
            <span className="relative z-10">
              Transforming Ideas Into
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-purple-400 to-cyan-500 animate-gradient-x inline-block">
                {" "}
                Digital Reality{" "}
              </span>
            </span>
            {/* Text glow effect */}
            <span className="absolute inset-0 blur-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 opacity-30">
              Transforming Ideas Into Digital Reality
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-xs md:text-sm lg:text-lg text-gray-300 my-3 md:my-5 max-w-[600px] leading-relaxed relative z-10"
          style={{ lineHeight: 1.6 }}
        >
          <span className="text-purple-400 font-semibold">
            Hello, I&apos;m Fajobi Anselm
          </span>{" "}
          — a passionate{" "}
          <span className="text-cyan-400">Full-Stack Developer</span>{" "}
          specializing in Web, Mobile, and Web3 technologies. With expertise in{" "}
          <span className="text-purple-300">innovative solutions</span>, I
          transform complex challenges into elegant, user-centric experiences.
          Let&apos;s build something extraordinary together.
        </motion.p>

        <motion.div
          variants={slideInFromLeft(1)}
          className="flex flex-wrap gap-4 items-center mt-2"
        >
          <Link href="mailto:pulumbu11@gmail.com" className="group">
            <button className="relative py-3 px-8 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:scale-105 active:scale-95">
              {/* Animated gradient overlay */}
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>

              {/* Button content */}
              <span className="relative z-10 flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Email Me
              </span>

              {/* Shine effect */}
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></span>
            </button>
          </Link>

          <Link href="/FajobiAnselmREsume.pdf" target="_blank">
            <button className="py-3 px-8 border-2 border-purple-500/50 text-white font-semibold rounded-lg hover:bg-purple-500/10 hover:border-purple-400 transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] backdrop-blur-sm group">
              <span className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download CV
              </span>
            </button>
          </Link>
        </motion.div>

        {/* Stats section */}
        <motion.div
          variants={slideInFromLeft(1.2)}
          className="flex flex-wrap gap-6 md:gap-8 mt-6 md:mt-8"
        >
          <div className="flex flex-col">
            <span className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              100+
            </span>
            <span className="text-xs md:text-sm text-gray-400 mt-1">
              Projects Completed
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              5+
            </span>
            <span className="text-xs md:text-sm text-gray-400 mt-1">
              Years Experience
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              100%
            </span>
            <span className="text-xs md:text-sm text-gray-400 mt-1">
              Client Satisfaction
            </span>
          </div>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center md:pt-[1px] pt-[30px] relative scale-75 md:scale-100"
      >
        {/* Floating Elements Background */}
        <div className="absolute inset-0 overflow-hidden hidden md:block">
          <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-32 right-16 w-16 h-16 bg-cyan-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-2000"></div>
        </div>

        {/* Main Image Container */}
        <div className="relative group">
          {/* Glowing Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 via-cyan-500/30 to-purple-600/30 rounded-full blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-1000 animate-pulse scale-110"></div>

          {/* Image with Enhanced Effects */}
          <div className="relative z-10 transform group-hover:scale-105 transition-transform duration-700">
            <Image
              src="/hero-img.png"
              alt="Fajobi Anselm - Full Stack Developer"
              height={650}
              width={650}
              className="relative z-10 drop-shadow-2xl w-full h-auto max-w-[300px] md:max-w-[650px]"
            />

            {/* Orbiting Elements - Hidden on mobile */}
            <div className="absolute inset-0 animate-spin-slow hidden md:block">
              <div className="absolute top-4 right-4 w-3 h-3 bg-purple-400 rounded-full shadow-lg shadow-purple-400/50"></div>
              <div className="absolute bottom-4 left-4 w-2 h-2 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"></div>
              <div className="absolute top-1/2 left-0 w-2 h-2 bg-pink-400 rounded-full shadow-lg shadow-pink-400/50"></div>
              <div className="absolute top-1/2 right-0 w-3 h-3 bg-yellow-400 rounded-full shadow-lg shadow-yellow-400/50"></div>
            </div>
          </div>

          {/* Floating Tech Icons - Hidden on mobile */}
          <div className="absolute top-8 -right-8 bg-gray-800/80 backdrop-blur-sm rounded-lg p-2 animate-bounce hidden md:block">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded flex items-center justify-center text-white text-xs font-bold">
              React
            </div>
          </div>

          <div className="absolute bottom-16 -left-8 bg-gray-800/80 backdrop-blur-sm rounded-lg p-2 animate-bounce delay-500 hidden md:block">
            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded flex items-center justify-center text-white text-xs font-bold">
              Node
            </div>
          </div>

          <div className="absolute top-20 left-8 bg-gray-800/80 backdrop-blur-sm rounded-lg p-2 animate-bounce delay-1000 hidden md:block">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-purple-600 rounded flex items-center justify-center text-white text-xs font-bold">
              TS
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
