"use client";

import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { XMarkIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  clicked: any;
  setClicked: Dispatch<SetStateAction<boolean>>;
}

const NavSlider = ({ clicked, setClicked }: Props) => {
  return (
    <AnimatePresence>
      {clicked && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            onClick={() => setClicked(false)}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed h-screen w-[85vw] max-w-[350px] bg-gradient-to-br from-[#1a1625] via-[#292635] to-[#1a1625] z-50 right-0 top-0 shadow-2xl shadow-purple-900/50 border-l border-purple-500/20"
          >
            <div className="h-full flex flex-col relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 right-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 left-10 w-32 h-32 bg-cyan-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
              </div>
              <div className="relative z-10 px-6 py-8 flex-1 flex flex-col">
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex flex-row justify-between items-center mb-10"
                >
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-cyan-600/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <Image
                      src="/da-high-resolution-logo-transparent.png"
                      alt="logo"
                      width={80}
                      height={80}
                      className="relative z-10"
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-full bg-purple-600/20 hover:bg-purple-600/40 border border-purple-500/30 transition-all duration-300"
                    onClick={() => setClicked(false)}
                  >
                    <XMarkIcon className="text-white h-6 w-6" />
                  </motion.button>
                </motion.div>
                <nav className="flex-1">
                  <ul className="list-none space-y-2">
                    {[
                      { name: "About", href: "#about-me" },
                      { name: "Skills", href: "#skills" },
                      { name: "Projects", href: "#projects" },
                      { name: "Testimonials", href: "#testimonials" },
                      { name: "Contact", href: "#contact" },
                    ].map((item, index) => (
                      <motion.li
                        key={item.name}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * index + 0.3 }}
                        className="group"
                      >
                        <a
                          href={item.href}
                          className="flex items-center py-4 px-4 rounded-xl text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-cyan-400 transition-all duration-300 relative overflow-hidden group"
                          onClick={() => setClicked(false)}
                        >
                          <span className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-cyan-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                          <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                          <span className="relative mr-3 w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                          <span className="relative font-medium text-lg">{item.name}</span>
                          <svg className="relative ml-auto w-5 h-5 transform translate-x-0 opacity-0 group-hover:translate-x-1 group-hover:opacity-100 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </nav>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="mt-8">
                  <div className="flex justify-center items-center gap-6 py-6 border-t border-purple-500/20">
                    <Link href="https://www.linkedin.com/in/anselm-fajobi-8ab5a623b" target="_blank" className="group">
                      <motion.div whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }} className="relative">
                        <div className="absolute inset-0 bg-blue-500/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-600/20 to-blue-800/20 border border-blue-500/30 group-hover:border-blue-400 transition-all duration-300"><FaLinkedin className="text-white text-xl" /></div>
                      </motion.div>
                    </Link>
                    <Link href="https://www.github.com/daddyaezzy" target="_blank" className="group">
                      <motion.div whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }} className="relative">
                        <div className="absolute inset-0 bg-purple-500/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-600/20 to-purple-800/20 border border-purple-500/30 group-hover:border-purple-400 transition-all duration-300"><FaGithub className="text-white text-xl" /></div>
                      </motion.div>
                    </Link>
                    <Link href="https://x.com/bigdidiy_?s=21" target="_blank" className="group">
                      <motion.div whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }} className="relative">
                        <div className="absolute inset-0 bg-cyan-500/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-cyan-600/20 to-cyan-800/20 border border-cyan-500/30 group-hover:border-cyan-400 transition-all duration-300"><FaTwitter className="text-white text-xl" /></div>
                      </motion.div>
                    </Link>
                  </div>
                </motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="pt-6 pb-4 border-t border-purple-500/20">
                  <p className="text-center text-xs text-gray-400">&copy; Copyright by Fajobi Anselm 2025</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default NavSlider;
