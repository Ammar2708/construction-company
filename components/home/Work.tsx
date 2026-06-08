"use client";

import React from "react";
import { motion } from "framer-motion";
import { useQuoteModal } from "@/components/context/QuoteModalContext";
import { featuredMedia } from "@/lib/featuredMedia";

const Work = () => {
  const { setOpen } = useQuoteModal();

  return (
    <section className="relative w-full h-[220px] md:h-[300px] flex items-center overflow-hidden font-sans">
      
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url("${featuredMedia.workBackdrop}")` }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-medium text-white tracking-tight leading-[0.95]"
          >
            Let&apos;s work <br /> together
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3"
          >
            {/* ✅ GLOBAL BUTTON */}
            <button
              onClick={() => setOpen(true)}
              className="cursor-pointer bg-white text-black px-6 py-3 rounded-full font-medium text-base hover:bg-neutral-200 transition-all min-w-[150px]"
            >
              Get a Quote
            </button>

            {/* ✅ CALL BUTTON */}
            <a href="tel:07472137237">
              <button className="cursor-pointer border border-white/40 text-white px-6 py-3 rounded-full font-medium text-base hover:bg-white/10 min-w-[150px]">
                Call us
              </button>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Work;
