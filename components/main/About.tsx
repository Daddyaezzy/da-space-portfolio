"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaCode,
  FaLightbulb,
  FaComments,
  FaCrown,
  FaPalette,
  FaMagic,
} from "react-icons/fa";

const About = () => {
  const skills = [
    {
      name: "Technical Expertise",
      percentage: 95,
      color: "from-purple-500 to-purple-600",
      Icon: FaCode,
    },
    {
      name: "Problem Solving",
      percentage: 92,
      color: "from-cyan-500 to-cyan-600",
      Icon: FaLightbulb,
    },
    {
      name: "Communication",
      percentage: 93,
      color: "from-blue-500 to-blue-600",
      Icon: FaComments,
    },
    {
      name: "Leadership",
      percentage: 95,
      color: "from-pink-500 to-pink-600",
      Icon: FaCrown,
    },
    {
      name: "Creativity & Design",
      percentage: 90,
      color: "from-green-500 to-green-600",
      Icon: FaPalette,
    },
    {
      name: "Finesse & Attention to Detail",
      percentage: 93,
      color: "from-yellow-500 to-orange-500",
      Icon: FaMagic,
    },
  ];

  return (
    <section id="about" className="relative py-12 md:py-20 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start"
        >
          {/* Left Content - Shows FIRST on mobile with order-1 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4 md:space-y-6 order-1"
          >
            <div className="space-y-2">
              <motion.h2 className="text-xs md:text-sm font-semibold text-purple-400 tracking-wider uppercase">
                About Me
              </motion.h2>
              <motion.h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Passionate Developer with
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                  {" "}
                  Diverse Skills
                </span>
              </motion.h1>
            </div>

            <div className="space-y-3 md:space-y-4 text-gray-300 text-sm md:text-base leading-relaxed">
              <p>
                Hello! I&apos;m{" "}
                <span className="text-purple-400 font-semibold">
                  Fajobi Anselm
                </span>
                , a passionate fullstack developer who transforms creative ideas
                into powerful digital solutions. With expertise spanning both
                web and mobile development, I bring a unique blend of technical
                precision and creative innovation to every project.
              </p>

              <p>
                My journey in software development is driven by an insatiable
                curiosity for emerging technologies and a commitment to crafting
                user experiences that truly matter. From building complex
                e-commerce platforms to developing intuitive mobile
                applications, I thrive on solving challenging problems and
                delivering solutions that exceed expectations.
              </p>

              <p>
                When I&apos;m not coding, you&apos;ll find me exploring the
                latest in blockchain technology, contributing to open-source
                projects, or mentoring aspiring developers in my community.
              </p>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-3 md:gap-6 pt-4 md:pt-6"
            >
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                  100+
                </div>
                <div className="text-gray-400 text-xs md:text-sm">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                  5+
                </div>
                <div className="text-gray-400 text-xs md:text-sm">
                  Years Exp.
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                  100%
                </div>
                <div className="text-gray-400 text-xs md:text-sm">
                  Satisfaction
                </div>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="pt-2"
            >
              <Link href="/FajobiAnselmREsume.pdf" target="_blank">
                <button className="w-full md:w-auto group relative px-6 md:px-8 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg font-semibold text-sm md:text-base text-white overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(138,43,226,0.5)]">
                  <span className="relative z-10">Download Resume</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Skills Progress Bars - Shows SECOND on mobile with order-2 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative order-2"
          >
            <div className="relative backdrop-blur-sm border border-purple-500/20 rounded-2xl p-4 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8 text-center">
                Core Competencies
              </h3>

              <div className="space-y-4 md:space-y-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 100,
                      damping: 10,
                    }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 md:gap-3">
                        <skill.Icon
                          className={`text-lg md:text-xl bg-gradient-to-r ${skill.color} text-transparent bg-clip-text flex-shrink-0`}
                        />
                        <span className="text-gray-300 font-medium text-xs md:text-base">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-gray-400 font-semibold text-xs md:text-base flex-shrink-0 ml-2">
                        {skill.percentage}%
                      </span>
                    </div>

                    {/* Progress Bar Background */}
                    <div className="relative h-2 md:h-3 bg-gray-800/50 rounded-full overflow-hidden">
                      {/* Progress Bar Fill */}
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        transition={{
                          duration: 1.2,
                          delay: index * 0.15,
                          type: "spring",
                          stiffness: 60,
                          damping: 12,
                          bounce: 0.5,
                        }}
                        viewport={{ once: true }}
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative overflow-hidden`}
                      >
                        {/* Shimmer Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                      </motion.div>

                      {/* Glow Effect */}
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        transition={{
                          duration: 1.2,
                          delay: index * 0.15,
                          type: "spring",
                          stiffness: 60,
                          damping: 12,
                          bounce: 0.5,
                        }}
                        viewport={{ once: true }}
                        className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} blur-md opacity-50`}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Decorative Elements - Hidden on mobile */}
              <div className="hidden md:block absolute -top-4 -right-4 w-20 h-20 bg-purple-500/20 rounded-full blur-2xl"></div>
              <div className="hidden md:block absolute -bottom-4 -left-4 w-24 h-24 bg-cyan-500/20 rounded-full blur-2xl"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
