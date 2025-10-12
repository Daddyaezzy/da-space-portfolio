"use client";

import React, { useEffect, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import About from "@/components/main/About";
import Skills from "@/components/main/Skills";
import Encryption from "./Encryption";

const ScrollSections = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationTimeoutRef = useRef<NodeJS.Timeout>();
  const lastScrollTime = useRef(0);

  const sections = [
    { id: 0, component: <About />, name: "about" },
    { id: 1, component: <Skills />, name: "skills" },
    { id: 2, component: <Encryption />, name: "encryption" },
  ];

  // Optimized section change function
  const changeSection = useCallback((newSection: number) => {
    if (isAnimating || newSection === currentSection || newSection < 0 || newSection >= sections.length) {
      return;
    }

    setIsAnimating(true);
    setCurrentSection(newSection);

    // Clear existing timeout
    if (animationTimeoutRef.current) {
      clearTimeout(animationTimeoutRef.current);
    }

    // Set animation complete after a shorter duration
    animationTimeoutRef.current = setTimeout(() => {
      setIsAnimating(false);
    }, 600);
  }, [currentSection, isAnimating, sections.length]);

  // Throttled scroll handler
  const handleWheel = useCallback((e: WheelEvent) => {
    // Only prevent default if we're actually handling the scroll
    const now = Date.now();
    if (now - lastScrollTime.current < 150) return; // Slightly increased throttle
    lastScrollTime.current = now;

    if (isAnimating) return;

    const delta = e.deltaY;
    const threshold = 20; // Slightly higher threshold for more deliberate scrolling

    if (Math.abs(delta) < threshold) return;

    // Prevent default only when we're going to change sections
    if ((delta > 0 && currentSection < sections.length - 1) || 
        (delta < 0 && currentSection > 0)) {
      e.preventDefault();
      e.stopPropagation();
      
      if (delta > 0) {
        changeSection(currentSection + 1);
      } else {
        changeSection(currentSection - 1);
      }
    }
  }, [currentSection, isAnimating, changeSection, sections.length]);

  // Keyboard navigation
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (isAnimating) return;

    switch (e.key) {
      case "ArrowDown":
      case "PageDown":
        e.preventDefault();
        if (currentSection < sections.length - 1) {
          changeSection(currentSection + 1);
        }
        break;
      case "ArrowUp":
      case "PageUp":
        e.preventDefault();
        if (currentSection > 0) {
          changeSection(currentSection - 1);
        }
        break;
      case "Home":
        e.preventDefault();
        changeSection(0);
        break;
      case "End":
        e.preventDefault();
        changeSection(sections.length - 1);
        break;
    }
  }, [currentSection, isAnimating, changeSection, sections.length]);

  // Touch handling
  const touchStart = useRef(0);
  const handleTouchStart = useCallback((e: TouchEvent) => {
    touchStart.current = e.touches[0].clientY;
  }, []);

  const handleTouchEnd = useCallback((e: TouchEvent) => {
    if (isAnimating) return;

    const touchEnd = e.changedTouches[0].clientY;
    const diff = touchStart.current - touchEnd;
    const threshold = 60; // Adjusted for better mobile experience

    if (Math.abs(diff) < threshold) return;

    if (diff > 0 && currentSection < sections.length - 1) {
      // Swipe up (next section)
      changeSection(currentSection + 1);
    } else if (diff < 0 && currentSection > 0) {
      // Swipe down (previous section)
      changeSection(currentSection - 1);
    }
  }, [currentSection, isAnimating, changeSection, sections.length]);

  // Event listeners setup
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Add event listeners with proper options
    container.addEventListener('wheel', handleWheel, { passive: false });
    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchend', handleTouchEnd, { passive: true });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('keydown', handleKeyDown);
      
      if (animationTimeoutRef.current) {
        clearTimeout(animationTimeoutRef.current);
      }
    };
  }, [handleWheel, handleTouchStart, handleTouchEnd, handleKeyDown]);

  // Optimized animation variants
  const slideVariants = {
    enter: (direction: number) => ({
      y: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      y: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      y: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  return (
    <div
      ref={containerRef}
      className="scroll-sections-container relative w-full h-screen overflow-hidden select-none"
      style={{ touchAction: 'none' }}
    >
      {/* Progress Indicator */}
      <div className="fixed right-4 sm:right-8 top-1/2 transform -translate-y-1/2 z-50 space-y-3">
        {sections.map((section, index) => (
          <button
            key={section.id}
            onClick={() => changeSection(index)}
            disabled={isAnimating}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 block ${
              currentSection === index
                ? "bg-purple-500 scale-125 shadow-lg shadow-purple-500/50"
                : "bg-gray-600 hover:bg-gray-400"
            } ${isAnimating ? 'pointer-events-none' : ''}`}
            aria-label={`Go to ${section.name} section`}
          />
        ))}
      </div>

      {/* Section Labels */}
      <div className="fixed left-4 sm:left-8 top-1/2 transform -translate-y-1/2 z-50 hidden sm:block">
        <div className="text-gray-400 text-xs sm:text-sm font-medium tracking-wider uppercase transform -rotate-90 origin-center">
          {sections[currentSection].name}
        </div>
      </div>

      {/* Mobile Section Label */}
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 sm:hidden">
        <div className="text-gray-400 text-sm font-medium tracking-wider uppercase bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full border border-gray-600">
          {sections[currentSection].name}
        </div>
      </div>

      {/* Scroll Hint */}
      {currentSection === 0 && !isAnimating && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 text-gray-400 text-sm flex flex-col items-center space-y-2"
        >
          <span className="hidden sm:block">Scroll to explore</span>
          <span className="sm:hidden">Swipe to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-3 bg-gray-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      )}

      {/* Main Content */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={currentSection}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          custom={currentSection}
          transition={{
            type: "tween",
            ease: [0.25, 0.1, 0.25, 1],
            duration: 0.6,
          }}
          className="absolute inset-0 w-full h-full will-change-transform"
        >
          <div className="w-full h-full flex items-center justify-center">
            {sections[currentSection].component}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Optimized Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-purple-500/10 rounded-full"
              animate={{
                x: [
                  Math.random() * 100 + "%",
                  Math.random() * 100 + "%",
                ],
                y: [
                  Math.random() * 100 + "%",
                  Math.random() * 100 + "%",
                ],
              }}
              transition={{
                duration: Math.random() * 20 + 20,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                left: Math.random() * 100 + "%",
                top: Math.random() * 100 + "%",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollSections;
