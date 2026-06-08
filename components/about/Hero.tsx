// "use client";

// import React from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";

// const Hero = () => {
//   return (
//     <section className="pt-5 relative min-h-[85vh] w-full overflow-hidden bg-[#080808] flex items-center justify-center">
      
//       {/* 🔥 BACKGROUND */}
//       <div className="absolute inset-0 z-0">
//         <motion.div 
//           initial={{ scale: 1.05 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 2, ease: "easeOut" }}
//           className="relative h-full w-full"
//         >
//           <Image
//             src="/bg4.png" 
//             alt="Luxury Architecture"
//             fill
//             priority
//             className="object-cover"
//           />
//           <div className="absolute inset-0 bg-black/50" />
//           <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808]/60" />
//         </motion.div>
//       </div>

//       {/* 🔥 CONTENT */}
//       <div className="relative z-20 w-full px-6 py-16">
//         <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          
//           {/* Top Label */}
//           <motion.div
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="flex items-center gap-3 mb-4"
//           >
//             <div className="w-6 h-[1px] bg-[#D4AF37]/40" />
//             <p className="text-[#D4AF37] text-[8px] md:text-[10px] font-medium tracking-[0.7em] uppercase">
//               About Our Practice
//             </p>
//             <div className="w-6 h-[1px] bg-[#D4AF37]/40" />
//           </motion.div>

//           {/* Heading */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//           >
//             <h1 className="text-[11vw] md:text-[52px] lg:text-[64px] font-extrabold text-[#ECD280] leading-[1.05] tracking-tight uppercase mb-4">
//               Prime Build <br />
//               <span 
//                 className="text-transparent" 
//                 style={{ WebkitTextStroke: "1px rgba(255,255,255,0.3)" }}
//               >
//                 Works Limited
//               </span>
//             </h1>
//           </motion.div>

//           {/* Quote */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: 0.3 }}
//             className="max-w-2xl"
//           >
//             <p className="font-serif italic text-xl md:text-2xl lg:text-3xl text-white/80 leading-relaxed mb-6">
//               &ldquo;We don&apos;t just build structures; we craft the silent witnesses of your legacy.&rdquo;
//             </p>
//           </motion.div>

//           {/* CTA */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1, delay: 0.6 }}
//             className="flex flex-col items-center"
//           >
//             <p className="text-gray-400 text-[12px] md:text-[14px] max-w-md font-light tracking-wide mb-8 leading-relaxed opacity-80">
//               Based in the UK, we specialize in high-end developments, 
//               merging structural integrity with unrivaled aesthetic precision.
//             </p>

//             <a href="/project">
//               <button className="cursor-pointer group relative overflow-hidden border border-[#D4AF37]/20 px-8 py-3 transition-all duration-500 hover:border-[#D4AF37]">
//                 <span className="relative z-10 text-white text-[9px] font-semibold uppercase tracking-[0.35em] group-hover:text-black transition-colors duration-500">
//                   Discover Our Projects
//                 </span>
//                 <div className="absolute inset-0 z-0 bg-[#D4AF37] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
//               </button>
//             </a>
//           </motion.div>

//         </div>
//       </div>

//     </section>
//   );
// };

// export default Hero;


"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { featuredMedia } from "@/lib/featuredMedia";

const Hero = () => {
  return (
    // Fixed h-screen and overflow-hidden ensures it fits one screen perfectly
    <section className="relative h-screen w-full overflow-hidden bg-[#080808] flex items-center">
      
      {/* 1. BACKGROUND LAYER (Shifted right for text space) */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="relative h-full w-full"
        >
          <Image
            src={featuredMedia.aboutHero}
            alt="Scaffolded building project in progress"
            fill
            priority
            className="object-cover object-right lg:object-center opacity-50"
          />
          {/* Intelligent Gradient: Darks the left side heavily for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent" />
        </motion.div>
      </div>

      {/* 2. MAIN CONTENT CONTAINER */}
      <div className="relative z-20 w-full px-6 sm:px-12 md:px-24">
        <div className="max-w-5xl">
          
          {/* Top Label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="w-8 h-[1px] bg-[#D4AF37]" />
            <p className="text-[#D4AF37] text-[10px] font-bold tracking-[0.6em] uppercase">
              Prime Build Works Limited
            </p>
          </motion.div>

          {/* Main Kinetic Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="flex flex-col text-[12vw] sm:text-[8vw] md:text-[85px] font-black leading-[0.85] tracking-tighter uppercase text-white">
              <span>Building</span>
              <span className="text-transparent" style={{ WebkitTextStroke: "1.5px #D4AF37" }}>
                Reliable
              </span>
              <span className="flex items-center gap-4">
                Projects
                <motion.span 
                  initial={{ width: 0 }}
                  animate={{ width: "80px" }}
                  transition={{ delay: 1, duration: 1 }}
                  className="hidden md:block h-[10px] bg-[#D4AF37]" 
                />
              </span>
            </h1>
          </motion.div>

          {/* Sub-text and Description Box */}
          <div className="mt-8 flex flex-col md:flex-row md:items-end gap-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="max-w-sm"
            >
              <p className="font-serif italic text-2xl md:text-[31px] text-white/90 mb-4 lowercase">
                with precision and safety
              </p>
              <p className="text-gray-400 text-[13px] md:text-[15px] font-semibold leading-relaxed border-l border-white/20 pl-4">
                Delivering high-quality construction solutions across industrial, 
                civil, and infrastructure projects.
              </p>
            </motion.div>

            {/* Buttons Group */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className="flex gap-4 flex-wrap"
            >
              <a href="/contact">
                <button className="group relative bg-[#D4AF37] text-black font-bold text-[10px] uppercase tracking-widest px-8 py-4 transition-transform hover:-translate-y-1">
                  Get Free Quote
                </button>
              </a>
              <a href="/project">
                <button className="border border-white/30 text-white font-bold text-[10px] uppercase tracking-widest px-8 py-4 hover:bg-white hover:text-black transition-all">
                  Our Portfolio
                </button>
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* 3. UNIQUE ACCENTS (One-screen decorations) */}
      
      {/* Vertical Side Tag */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-6">
        <span className="[writing-mode:vertical-rl] text-white/20 text-[9px] uppercase tracking-[1em]">
          Industrial • Civil • Infrastructure
        </span>
        <div className="w-[1px] h-24 bg-gradient-to-b from-white/20 to-transparent" />
      </div>

      {/* Trust Ticker (Bottom) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-6 md:left-24 flex gap-8 text-[9px] text-white/40 uppercase tracking-[0.2em]"
      >
        <span className="flex items-center gap-2 text-[#b5b5b1]">
          <span className="text-[#D4AF37]">01</span> 100+ Projects
        </span>
        <span className="flex items-center gap-2 text-[#b5b5b1]">
          <span className="text-[#D4AF37]">02</span> Skilled Engineers
        </span>
        <span className="flex items-center gap-2 text-[#b5b5b1]">
          <span className="text-[#D4AF37]">03</span> On-Time Delivery
        </span>
      </motion.div>

    </section>
  );
};

export default Hero;
