"use client";

import BackgroundDots from "./BackgroundDots";
import PropertySearch from "../PropertySearch";
import { motion } from "framer-motion";

const sentence = "Where Dream Homes Get Delivered".split(" ");

const Hero = () => {
  return (
    <section
      id="home"
      className="relative z-10 overflow-hidden bg-white pb-10 pt-24 dark:bg-gray-dark md:pb-16 md:pt-32 lg:pb-20 lg:pt-40 xl:pb-24 xl:pt-48"
    >
      {/* <BackgroundDots className="absolute left-0 top-0 z-0 h-full w-full" /> */}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <motion.h1
            className="mb-6 flex flex-wrap justify-center gap-2 text-2xl font-bold leading-tight text-black dark:text-white sm:text-3xl md:text-5xl lg:gap-4 lg:text-6xl"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.15, // Slightly faster stagger
                },
              },
            }}
          >
            {sentence.map((word, index) => (
              <motion.span
                key={index}
                className="inline-block"
                variants={{
                  hidden: { y: 10, opacity: 0 },
                  visible: {
                    y: [10, -5, 0],
                    opacity: 1,
                    transition: { duration: 0.6 },
                  },
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
            className="max-w-3xl text-sm text-gray-700 dark:text-gray-300 sm:text-base md:text-lg"
          >
            Auctionwale specializes in selling properties from Banks and
            Financial Institutions.
          </motion.p>
        </div>
      </div>
      <div className="mt-10 w-full px-4 md:px-0">
        <PropertySearch />
      </div>
    </section>
  );
};

export default Hero;
