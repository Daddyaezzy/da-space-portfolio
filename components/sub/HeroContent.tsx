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
      className="flex md:flex-row flex-col items-center justify-center md:mt-[200px]  md:px-20 px-10 mt-[100px] z-[20] w-full"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start ">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box   py-[8px] px-[4px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="welcome-text text-[13px] text-white pr-1">
            Software & Mobile Developer Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 lg:text-6xl text-5xl  font-bold text-white max-w-[600px] w-auto h-auto"
          style={{ lineHeight: 1.2 }}
        >
          <span>
            Transforming Ideas Into
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Digital Reality{" "}
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="lg:text-lg text-sm text-gray-400 my-5 max-w-[600px]"
          style={{ lineHeight: 1.4 }}
        >
          HELLO&comma; I&apos;M FAJOBI ANSELM I&apos;M A WEB DEVELOPER IN
          NIGERIA&comma; WITH A MASTERING IN THE ART OF INNOVATION&&comma;
          COMMUNICATING WITH IMPACT&comma; AND LEADING WITH EXCELLENCE.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          <Link href="#skills">Learn More!</Link>
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center md:pt-[1px] pt-[20px]"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
