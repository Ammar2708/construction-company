"use client";

import React from 'react'
import Image from "next/image";
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { featuredMedia } from "@/lib/featuredMedia";

const Projects = () => {
  return (
    <div className='bg-white pt-6 pb-6 px-5 lg:pt-3 lg:pb-8 lg:pl-150 lg:h-250 relative overflow-hidden'>
      
      <div className='flex flex-col lg:flex-row'>
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='bg-[#F5F6F8] w-full lg:w-180 h-auto lg:h-150 pt-8 px-5 lg:pt-17 lg:pl-60 font-serif relative'
        >
          <p className='text-2xl md:text-3xl lg:text-4xl pb-4'>
            Take a look at our <br /> recent projects
          </p>

          <p className='text-[#868486] text-sm'>
            Our recent projects highlight our expertise in delivering quality construction work across residential and commercial sectors, with a strong focus on safety, timely completion, and client satisfaction.
          </p>

          <div className='flex flex-wrap border-b border-[#c9c5c6] pb-5 lg:pb-8'>
            <a href="/contact">
              <button className='bg-[#D4AF37] text-white px-5 py-2 rounded-full font-bold hover:bg-[#B8860B] transition-all cursor-pointer mt-5 lg:mt-8'>
                Get a Quote
              </button>
            </a>

            <a href="/project">
              <button className='border border-[#C0C0C0]/40 text-[#C0C0C0] px-4 py-2 rounded-full font-bold transition-all ml-0 lg:ml-4 hover:text-white hover:bg-black cursor-pointer mt-5 lg:mt-8'>
                VIEW ALL PROJECTS
              </button>
            </a>
          </div>

          <div className='pt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center font-serif gap-2'>
            <p className='text-sm'>Follow our work on:</p>

            <div className='flex gap-3 pr-0 lg:pr-4 text-base pb-4'>
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram />
              <FaLinkedinIn />
            </div>
          </div>
        </motion.div>

        {/* Main Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className='mt-8 lg:mt-0 lg:absolute left-0 lg:left-40 lg:right-120 lg:mt-20 flex justify-center'
        >
          <Image 
            src={featuredMedia.projectMain}
            alt="Featured Prime Build project"
            width={450} 
            height={350} 
            className='w-full max-w-sm lg:max-w-none object-cover'
          />
        </motion.div>

        {/* Bottom Images */}
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className='mt-8 lg:mt-0 lg:absolute flex flex-col sm:flex-row left-0 lg:left-40 lg:mt-130 gap-3 items-center'
        >
          <Image src={featuredMedia.projectOne} alt="Prime Build project detail" width={250} height={250} className='w-full lg:h-100 lg:w-85 object-cover' />
          <Image src={featuredMedia.projectTwo} alt="Prime Build project detail" width={250} height={250} className='w-full lg:h-100 lg:w-87 object-cover' />
          <Image src={featuredMedia.projectThree} alt="Prime Build project detail" width={250} height={250} className='w-full lg:h-100 lg:w-87 object-cover' />
        </motion.div>

      </div>
    </div>
  )
}

export default Projects;
