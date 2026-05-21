
// "use client";

// import React from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";

// const Hero = () => {
//   return (
//     <section className="relative w-full overflow-hidden bg-[#080808] pb-20 pt-28">

//       {/* 🔥 BACKGROUND IMAGE */}
//       <div className="absolute inset-0 z-0">
//         <motion.div
//           initial={{ scale: 1.1, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 1.5, ease: "easeOut" }}
//           className="relative h-full w-full"
//         >
//           <Image
//             src="/bg1.png"
//             alt="Construction Site"
//             fill
//             priority
//             className="object-cover object-right lg:object-center"
//           />

//           {/* Dark overlay */}
//           <div className="absolute inset-0 bg-black/30" />

//           {/* Gradient overlay */}
//           <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/85 to-transparent" />
//         </motion.div>
//       </div>

//       {/* 🔥 CONTENT */}
//       <div className="relative z-20 flex items-center w-full">
//         <div className="px-6 sm:px-12 md:px-24 w-full">
//           <div className="max-w-4xl relative">

//             {/* Accent Line */}
//             <div className="absolute -left-10 top-2 w-[2px] h-40 bg-[#D4AF37]/60 hidden xl:block" />

//             {/* Company Name */}
//             <motion.p
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               className="text-[#D4AF37] text-[10px] md:text-[12px] font-bold tracking-[0.5em] uppercase mb-4"
//             >
//               Prime Build Works Limited
//             </motion.p>

//             {/* Industry Tag */}
//             <div className="text-gray-500 text-xs tracking-[0.4em] mb-6">
//               INDUSTRIAL • CIVIL • INFRASTRUCTURE
//             </div>

//             {/* Heading */}
//             <motion.h1
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1 }}
//               className="text-[12vw] sm:text-[10vw] md:text-[70px] font-black text-white leading-[0.9] tracking-tight uppercase"
//             >
//               Building <br />
//               Reliable Projects
//             </motion.h1>

//             {/* Subheading */}
//             <motion.p
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 1, delay: 0.6 }}
//               className="font-serif italic text-3xl md:text-4xl text-white/90 mt-3 lowercase"
//             >
//               with precision and safety
//             </motion.p>

//             {/* Description */}
//             <motion.p
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 1, delay: 0.8 }}
//               className="text-gray-400 text-sm md:text-base max-w-md mt-8 leading-relaxed"
//             >
//               Delivering high-quality construction solutions with precision,
//               safety, and on-time execution across industrial, civil, and
//               infrastructure projects.
//             </motion.p>

//             {/* Trust Signals */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 1 }}
//               className="flex flex-wrap gap-4 mt-6 text-xs text-gray-400"
//             >
//               <span>✔ 10+ Projects</span>
//               <span>✔ Skilled Engineers</span>
//               <span>✔ On-Time Delivery</span>
//             </motion.div>

//             {/* Buttons */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 1.2 }}
//               className="flex gap-4 mt-10 flex-wrap"
//             >
//               <a href="/contact">
//                 <button className="rounded-full bg-[#D4AF37] text-black font-bold text-[11px] uppercase tracking-[0.2em] px-6 py-3 md:px-10 md:py-4 hover:bg-[#E5C158] transition duration-300">
//                   Get Free Quote →
//                 </button>
//               </a>

//               <a href="/project">
//                 <button className="rounded-full border border-white/20 text-white font-bold text-[11px] uppercase tracking-[0.2em] px-6 py-3 md:px-10 md:py-4 hover:bg-white hover:text-black transition duration-300">
//                   View Our Projects
//                 </button>
//               </a>
//             </motion.div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Indicator */}
//       <div className="absolute left-10 bottom-10 hidden md:flex flex-col items-center gap-4 z-30">
//         <div className="w-[1px] h-16 bg-gradient-to-b from-white/20 to-transparent" />
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
    // Fixed 100vh and overflow-hidden ensures it fits one screen perfectly
    <section className="relative h-screen w-full overflow-hidden bg-[#050505] flex items-center">
      
      {/* --- BACKGROUND --- */}
      <div className="absolute inset-0 z-0">
        <Image
          src={featuredMedia.hero}
          alt="Prime Build project site"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
      </div>

      {/* --- MAIN UI FRAME --- */}
      <div className="relative z-20 w-full px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl">
          
          {/* Top Metadata Line */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-4"
          >
            <span className="text-[#D4AF37] font-mono text-[10px] tracking-widest">EST. 2012</span>
            <div className="w-8 h-[1px] bg-white/20" />
            <span className="text-white/70 text-[9px] uppercase tracking-[0.4em]">High-End Development</span>
          </motion.div>

          {/* Compressed High-Impact Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="flex flex-col leading-[0.9]">
              <span className="text-[12vw] md:text-[80px] lg:text-[110px] font-black text-white uppercase tracking-tighter">
                PRIME <span className="text-[#D4AF37] italic font-serif font-light">BUILD</span>
              </span>
              <span 
                className="text-[8vw] md:text-[50px] lg:text-[70px] font-light text-white/30 uppercase tracking-[0.1em]"
                style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}
              >
                WORKS LIMITED
              </span>
            </h1>
          </motion.div>

          {/* Action Row: Description + CTA (Side-by-side to save height) */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex flex-col md:flex-row md:items-center gap-8 md:gap-16"
          >
            <a href="/project" className="group shrink-0">
              <div className="relative border border-white/20 px-8 py-4 overflow-hidden transition-all duration-300 group-hover:border-[#D4AF37]">
                <span className="relative z-10 text-white text-[10px] font-bold uppercase tracking-[0.3em]">
                  View Projects
                </span>
                <div className="absolute inset-0 bg-[#D4AF37] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </div>
            </a>

            <p className="max-w-xs text-gray-400 text-xs md:text-sm font-light leading-relaxed border-l border-[#D4AF37]/50 pl-4">
              Crafting architectural legacies through 
              <span className="text-white"> precision engineering</span> and 
              <span className="text-white"> bespoke design</span> across the UK.
            </p>
          </motion.div>

        </div>
      </div>

      {/* --- CORNER ELEMENTS (Unique "Gallery" Accents) --- */}
      
      {/* Bottom Left: Status */}
      <div className="absolute bottom-10 left-6 md:left-16 hidden sm:flex items-center gap-4">
        <div className="flex flex-col">
          <span className="text-[8px] text-white/30 uppercase tracking-widest">Current Status</span>
          <span className="text-[10px] text-white uppercase tracking-wider flex items-center gap-2">
            <span className="w-1 h-1 bg-green-500 rounded-full animate-pulse" /> Available for Commissions
          </span>
        </div>
      </div>

      {/* Bottom Right: Page Index */}
      <div className="absolute bottom-10 right-6 md:right-16 text-right">
        <p className="text-[#D4AF37] font-serif italic text-2xl">01</p>
        <div className="w-12 h-[1px] bg-[#D4AF37] ml-auto my-1" />
        <p className="text-[9px] text-white/20 uppercase tracking-[0.3em]">Introduction</p>
      </div>

    </section>
  );
};

export default Hero;
