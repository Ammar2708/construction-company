"use client";

import React from 'react';

const Loc = () => {
  return (
    <section className="relative bg-white py-14 px-6 md:px-12 lg:px-16 overflow-hidden text-[#1a1a1a]">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-2xl md:text-5xl font-semibold tracking-tight  leading-tight">
            Visit our office <br /> on Rudloe Road
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
          
          {/* MAP */}
          <div className="lg:col-span-7 relative z-10 min-h-[300px] lg:min-h-[450px] shadow-xl">
            <iframe
              title="Office Location"
              src="https://www.google.com/maps?q=46%20Rudloe%20Road%2C%20SW12%200DS&output=embed"
              className="absolute inset-0 w-full h-full grayscale contrast-110 brightness-105 hover:grayscale-0 transition-all duration-700 border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* DETAILS */}
          <div className="lg:col-span-5 relative flex items-center">
            
            <div className="absolute inset-0 bg-[#F9F9F9] -z-10 lg:-translate-x-10" />
            
            <div className="py-12 px-6 lg:pl-16 lg:pr-10 space-y-8">
              
              {/* Location Info */}
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-medium tracking-tight">
                  46 Rudloe Road
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed max-w-sm font-light">
                  Visit us at our London office for project discussions,
                  consultations, and detailed service inquiries.
                </p>
              </div>

              {/* Contact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8 pt-5 border-t border-gray-200">
                
                <div>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-gray-400 mb-2 font-bold">
                    Email address
                  </p>
                  <p className="text-xs md:text-sm font-medium hover:text-gray-500 transition-colors cursor-pointer">
                    losangeles@construktion.com
                  </p>
                </div>

                <div>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-gray-400 mb-2 font-bold">
                    Phone number
                  </p>
                  <p className="text-xs md:text-sm font-medium">
                    07472137237
                  </p>
                </div>

                <div className="sm:col-span-2">
                  <p className="text-[9px] uppercase tracking-[0.2em] text-gray-400 mb-2 font-bold">
                    Studio Address
                  </p>
                  <p className="text-xs md:text-sm font-medium leading-relaxed">
                    46 Rudloe Road <br />
                    SW12 0DS
                  </p>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Loc;
