"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useQuoteModal } from "@/components/context/QuoteModalContext";
import { featuredMedia } from "@/lib/featuredMedia";

const testimonials = [
  {
    quote: "They did an amazing work for our home",
    description:
      "The attention to structural detail is unparalleled. They elevated the entire architectural vision of the estate.",
    author: "John Carter",
    location: "London, UK",
    image: featuredMedia.projectOne,
  },
  {
    quote: "Our home design is unique, beautiful and special",
    description:
      "Rarely do you find a firm that balances technical engineering with such a refined aesthetic eye.",
    author: "Sophie Moore",
    location: "Manchester, UK",
    image: featuredMedia.projectMain,
  },
  {
    quote: "Love how our home looks more comfy and modern",
    description:
      "Professional, transparent, and precise. They transformed our concept into a legacy property.",
    author: "Matt Cannon",
    location: "Surrey, UK",
    image: featuredMedia.projectThree,
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const { setOpen } = useQuoteModal();

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-white py-14 px-6 sm:px-10 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          
          {/* LEFT */}
          <div className="relative h-[420px] w-full overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.7 }}
                className="absolute inset-0"
              >
                <Image
                  src={testimonials[index].image}
                  alt="Project View"
                  fill
                  className="object-cover brightness-[0.75]"
                />

                <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full bg-gradient-to-t from-black/80 to-transparent text-white">
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-xl md:text-2xl font-bold mb-3"
                  >
                    “{testimonials[index].quote}”
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-xs md:text-sm text-white/70 max-w-sm mb-4 font-light leading-relaxed"
                  >
                    {testimonials[index].description}
                  </motion.p>

                  <div className="flex items-center gap-3">
                    <div className="h-[1px] w-6 bg-[#D4AF37]" />
                    <p className="text-[10px] uppercase tracking-widest font-bold">
                      {testimonials[index].author} —{" "}
                      {testimonials[index].location}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT */}
          <div className="pt-6 lg:pt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-[1px] bg-[#D4AF37]" />
                <p className="text-[#D4AF37] text-[9px] font-bold tracking-[0.7em] uppercase">
                  Testimonials
                </p>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-black tracking-tight leading-none uppercase">
                What our great <br />
                <span className="text-gray-300 italic">
                  customers say
                </span>
              </h2>

              <p className="text-gray-500 text-sm md:text-base max-w-sm font-light leading-relaxed">
                Our reputation is built on the word of those we serve. We take
                pride in the long-standing relationships we&apos;ve fostered across
                the UK.
              </p>

              {/* ✅ OPEN MODAL BUTTON */}
              <button
                onClick={() => setOpen(true)}
                className="cursor-pointer bg-black text-white px-8 py-3 rounded-full font-bold text-[10px] uppercase tracking-widest hover:bg-[#D4AF37] transition-colors duration-500"
              >
                Get a quote
              </button>

              {/* DOTS */}
              <div className="flex gap-2 pt-4">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`h-1 transition-all duration-500 rounded-full ${
                      index === i
                        ? "w-10 bg-[#D4AF37]"
                        : "w-3 bg-gray-200"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
