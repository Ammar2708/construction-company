"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { featuredMedia } from "@/lib/featuredMedia";

const steps = [
  {
    id: "Step 01",
    title: "Planning",
    description:
      "Every masterpiece begins with a precise blueprint. We collaborate closely with you to define the spatial logic and material palette of your project.",
  },
  {
    id: "Step 02",
    title: "Estimating",
    description:
      "Transparency is our foundation. We provide detailed cost analysis and timelines, ensuring structural integrity meets your financial objectives.",
  },
  {
    id: "Step 03",
    title: "Building",
    description:
      "Our master craftsmen bring the vision to life, merging traditional techniques with modern innovation to deliver an unbeatable final result.",
  },
];

const Plan = () => {
  return (
    <section className="bg-white py-14 px-6 sm:px-10 md:px-16">
      <div className="max-w-6xl mx-auto">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
          <div className="max-w-lg">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-black tracking-tight mb-4"
            >
              Check how our <br /> process is done
            </motion.h2>

            <p className="text-gray-500 text-sm leading-relaxed">
              From the initial concept to the final structural detail, we ensure a seamless transition between architectural vision and physical reality.
            </p>
          </div>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            className="px-8 py-3 border border-gray-200 rounded-full text-xs font-medium hover:bg-black hover:text-white transition-all duration-300"
          >
            Learn more
          </motion.button>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative h-[380px] md:h-[480px] overflow-hidden"
          >
            <Image
              src={featuredMedia.process}
              alt="Roof construction work in progress"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Steps */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="border-t border-gray-100 py-6 first:border-t-0"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  
                  {/* Title */}
                  <div className="md:col-span-1">
                    <h3 className="text-xl font-bold text-black mb-1">
                      {step.title}
                    </h3>
                    <span className="text-[9px] uppercase tracking-[0.25em] font-bold text-[#D4AF37]">
                      {step.id}
                    </span>
                  </div>
                  
                  {/* Description */}
                  <div className="md:col-span-2">
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                </div>
              </motion.div>
            ))}

            <div className="border-b border-gray-100 w-full" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Plan;
