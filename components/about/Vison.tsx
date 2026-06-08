"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { featuredMedia } from "@/lib/featuredMedia";

const Vision = () => {
  return (
    <section className="bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 md:px-16">
        
        {/* SECTION 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 py-14 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-5"
          >
            <h2 className="w-200 text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight tracking-tight">
              An exceptional quality <br /> 
              <span className="text-[#D4AF37]">that can&apos;t be beaten</span>
            </h2>

            <p className="text-[#5D575B] text-sm md:text-base leading-relaxed max-w-md font-light">
              At Prime Build Works Limited, we deliver an exceptional level of precision. 
              By merging structural integrity with luxury craftsmanship, we create bespoke 
              environments that define the future of modern living.
            </p>
            <a href="/project">
            <button className="cursor-pointer bg-black hover:bg-[#D4AF37] text-white px-8 py-3 rounded-full text-xs font-bold hover:shadow-lg active:scale-95 transition-all duration-300">
              Learn More
            </button></a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[320px] md:h-[420px] w-full"
          >
            <Image
              src={featuredMedia.visionQuality}
              alt="Finished marble bathroom craftsmanship"
              fill
              className="object-cover rounded-2xl shadow-xl" 
            />
          </motion.div>

        </div>

        {/* SECTION 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 py-14 items-center border-t border-gray-100">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[320px] md:h-[420px] w-full order-2 lg:order-1"
          >
            <Image
              src={featuredMedia.visionMission}
              alt="Completed outdoor garden project"
              fill
              className="object-cover rounded-2xl shadow-xl" 
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-5 order-1 lg:order-2"
          >
            <h2 className="w-200 text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight tracking-tight">
              Our mission is to deliver <br /> 
              <span className="text-[#D4AF37]">high quality work</span>
            </h2>

            <p className="text-[#5D575B] text-sm md:text-base leading-relaxed max-w-md font-light">
              We are dedicated to redefining the UK skyline through architectural 
              excellence. Our mission is built on the foundation of superior quality 
              in every detail, transforming visions into permanent legacies.
            </p>
            <a href="/project">
            <button className= "cursor-pointer bg-black text-white px-8 py-3 rounded-full text-xs font-bold hover:bg-[#D4AF37] active:scale-95 transition-all duration-300">
              Learn More
            </button></a>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Vision;
