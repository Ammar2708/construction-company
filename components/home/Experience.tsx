"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { featuredMedia } from "@/lib/featuredMedia";

const Experience = () => {
  return (
    <div className="bg-white pt-6 pb-6  px-4 lg:pt-10 lg:pb-10 lg:pr-20 lg:flex relative overflow-hidden ">
      
      {/* Stats Box */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-[#F5F6F8] w-full lg:w-110 h-auto lg:h-150 pt-6 lg:pt-14 lg:pr-40"
      >
        <div className="border-b p-4 lg:p-10 lg:pl-12 border-[#c9c5c6]">
          <p className="text-3xl lg:text-5xl">
            340<span className="text-2xl lg:text-4xl font-serif">+</span>
          </p>
          <p className="text-sm lg:text-base text-[#797779]">
            Successful Projects
          </p>
        </div>

        <div className="border-b p-4 lg:p-10 border-[#c9c5c6]">
          <p className="text-3xl lg:text-5xl">
            50<span className="text-2xl lg:text-4xl font-serif">+</span>
          </p>
          <p className="text-sm lg:text-base text-[#797779]">
            Team members
          </p>
        </div>

        <div className="p-4 lg:p-10">
          <p className="text-3xl lg:text-5xl">
            340<span className="text-2xl lg:text-4xl font-serif">+</span>
          </p>
          <p className="text-sm lg:text-base text-[#797779]">
            Happy clients
          </p>
        </div>
      </motion.div>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-8 lg:mt-0 lg:absolute lg:right-0 lg:left-90 lg:mt-20"
      >
        <Image
          src={featuredMedia.experience}
          alt="Completed Prime Build project"
          width={500}
          height={500}
          className="w-full lg:w-75 lg:h-110 object-cover"
        />
      </motion.div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center mt-8 lg:mt-0 lg:absolute lg:right-0 lg:left-180 lg:mt-60 px-2 lg:px-0"
      >
        <p className="text-lg lg:text-3xl font-semibold">
          The best combination  of  modernity <br /> & simplicity
        </p>
      </motion.div>

      {/* Description */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
        className="mt-3 lg:mt-0 lg:absolute lg:right-0 lg:left-180 lg:mt-80 px-2 lg:px-0"
      >
        <p className="text-sm lg:text-sm text-center">
          Modern simplicity combines clean lines with warm, neutral textures,
          blending intentional design with functional elegance for a look that
          is both cutting-edge and calm.
        </p>
      </motion.div>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        viewport={{ once: true }}
        className="mt-5 lg:ml-17 lg:mt-0 lg:absolute lg:right-0 lg:left-185 lg:mt-105 flex flex-wrap gap-3 px-2 lg:px-0"
      >
        <a href="/contact">
          <button className="bg-[#D4AF37] text-white px-5 lg:px-8 py-2 lg:py-3 rounded-full font-bold hover:bg-[#B8860B] transition-all cursor-pointer ">
            GET A QUOTE
          </button>
        </a>

        <a href="/project">
          <button className="border border-[#C0C0C0]/40 text-[#C0C0C0] px-5 lg:px-8 py-2 lg:py-3 rounded-full font-bold transition-all ml-0 lg:ml-4 hover:text-white hover:bg-black cursor-pointer">
            Learn more
          </button>
        </a>
      </motion.div>
    </div>
  );
};

export default Experience;
