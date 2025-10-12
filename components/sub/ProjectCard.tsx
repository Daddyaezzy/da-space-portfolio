"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

interface Props {
  src: string;
  title: string;
  description: string;
  url: string;
}

const ProjectCard = ({ src, title, description, url }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="group w-full"
    >
      <Link href={url} target="_blank" className="cursor-pointer block">
        <div className="relative z-20 overflow-hidden rounded-xl shadow-2xl border border-[#2A0E61] bg-gradient-to-br from-[#0F0F23] to-[#1A1A2E] backdrop-blur-sm transform transition-all duration-500 ease-out group-hover:scale-105 group-hover:shadow-[0_20px_40px_rgba(138,43,226,0.3)] group-hover:border-purple-500/50 h-full flex flex-col">
          {/* Image Container with Overlay */}
          <div className="relative overflow-hidden">
            <Image
              src={src}
              alt={title}
              width={1000}
              height={1000}
              className="w-full h-40 md:h-48 object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            {/* Hover Icon */}
            <div className="absolute top-4 right-4 w-10 h-10 bg-purple-600/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-[-10px] group-hover:translate-y-0">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </div>
          </div>

          {/* Content */}
          <div className="relative p-4 md:p-6 flex-grow flex flex-col">
            {/* Glowing border effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-cyan-500/10 to-purple-600/10 rounded-b-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative z-10 flex-grow flex flex-col">
              <h1 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
                {title}
              </h1>
              <p className="text-gray-300 text-xs md:text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300 line-clamp-3 md:line-clamp-4 flex-grow">
                {description}
              </p>

              {/* View Live Demo indicator */}
              <div className="mt-3 md:mt-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <span className="text-xs text-purple-400 font-medium">
                  View Live Demo
                </span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
