"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Praise Johnson",
    position: "CEO at Gifts and Giggles",
    content:
      "Anselm delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and technical expertise made the entire process smooth and efficient.",
    rating: 5,
    project: "E-commerce Platform",
  },
  {
    id: 2,
    name: "A.T. Williams",
    position: "G.O. at Breakthrough",
    content:
      "Anselm did an outstanding job building our audio streaming app. His technical prowess and deep understanding of audio streaming technology resulted in a robust, user-friendly platform that our community loves. The app exceeded all our expectations!",
    rating: 5,
    project: "Audio Streaming Application",
  },
  {
    id: 3,
    name: "Undisclosed Client",
    position: "Representative at Dogemeat UI",
    content:
      "Anselm built our blockchain platform solution from the ground up and managed it excellently. His expertise in blockchain technology and project management ensured smooth deployment and ongoing operations. Outstanding work!",
    rating: 5,
    project: "Blockchain Platform",
  },
  {
    id: 4,
    name: "Daniel",
    position: "Product Lead at InnovateTech",
    content:
      "Anselm is incredibly talented with problem-solving and UI design. His ability to turn complex requirements into elegant, user-friendly interfaces is unmatched. What impressed me most was his lightning-fast delivery without compromising quality. Absolutely phenomenal work!",
    rating: 5,
    project: "Web Application Development",
  },
];

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section
      id="testimonials"
      className="relative py-12 md:py-20 px-4 md:px-10"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-xs md:text-sm font-semibold text-purple-400 tracking-wider uppercase mb-3 md:mb-4">
            Testimonials
          </h2>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
            What Clients
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Say{" "}
            </span>
          </h1>
          <p className="text-gray-300 text-sm md:text-lg max-w-2xl mx-auto px-4">
            Don&apos;t just take my word for it. Here&apos;s what some of my
            amazing clients have to say about working with me.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Main Testimonial Card */}
          <div className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 md:p-8 lg:p-12 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <svg
                className="w-full h-full"
                viewBox="0 0 100 100"
                fill="currentColor"
              >
                <defs>
                  <pattern
                    id="testimonial-pattern"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle cx="10" cy="10" r="1" />
                  </pattern>
                </defs>
                <rect
                  width="100%"
                  height="100%"
                  fill="url(#testimonial-pattern)"
                />
              </svg>
            </div>

            <div className="relative z-10">
              {/* Quote Icon */}
              <div className="mb-4 md:mb-6">
                <svg
                  className="w-8 h-8 md:w-12 md:h-12 text-purple-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                </svg>
              </div>

              {/* Testimonial Content */}
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-base md:text-xl lg:text-2xl text-gray-200 leading-relaxed mb-6 md:mb-8 italic">
                  &quot;{testimonials[activeTestimonial].content}&quot;
                </p>

                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div className="flex items-center space-x-3 md:space-x-4">
                    {/* Profile Image Placeholder */}
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl flex-shrink-0">
                      {testimonials[activeTestimonial].name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-base md:text-lg">
                        {testimonials[activeTestimonial].name}
                      </h4>
                      <p className="text-gray-400 text-sm md:text-base">
                        {testimonials[activeTestimonial].position}
                      </p>
                      <p className="text-purple-400 text-xs md:text-sm">
                        {testimonials[activeTestimonial].project}
                      </p>
                    </div>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex space-x-1">
                    {[...Array(testimonials[activeTestimonial].rating)].map(
                      (_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 md:w-5 md:h-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      )
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors duration-300 group"
            >
              <svg
                className="w-5 h-5 text-gray-400 group-hover:text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeTestimonial
                      ? "bg-purple-500 scale-125"
                      : "bg-gray-600 hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors duration-300 group"
            >
              <svg
                className="w-5 h-5 text-gray-400 group-hover:text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </motion.div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 pt-16 border-t border-gray-800"
        >
          <p className="text-center text-gray-400 mb-8">
            Trusted by amazing companies
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
            <div className="text-2xl font-bold text-gray-600">
              Breakthrough Family
            </div>
            <div className="text-2xl font-bold text-gray-600">Stuph Chain</div>
            <div className="text-2xl font-bold text-gray-600">
              Gifts and Giggles
            </div>
            <div className="text-2xl font-bold text-gray-600">Ai Forge </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
