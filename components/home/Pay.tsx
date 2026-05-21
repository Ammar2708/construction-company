"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Lock } from "lucide-react";

const paymentMethods = [
  { name: "Visa", logo: "/p1.webp" },
  { name: "Mastercard", logo: "/p3.webp" },
  { name: "American Express", logo: "/p7.webp" },
  { name: "PayPal", logo: "/p6.webp" },
  { name: "Apple Pay", logo: "/p5.webp" },
  { name: "Google Pay", logo: "/p4.webp" },
  { name: "Cash", logo: "/p2.webp" },
  { name: "Pay by card", logo: "/pa1.webp" },
  { name: "Online transfer ", logo: "/pa2.webp" },
];

export default function PaySlider() {
  const [current, setCurrent] = useState(0);

  // Auto-play logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % paymentMethods.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#F5F6F7] py-20 px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[#EFAC19] font-bold text-xs uppercase tracking-widest">
              <Lock className="w-4 h-4" /> Secure Transactions
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#1A1A1A]">
              Accepted Payments
            </h2>
          </div>
        </div>

        {/* Slider Container */}
        <div className="relative overflow-hidden rounded-[2.5rem] bg-white p-12 shadow-sm border border-gray-100">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {paymentMethods.map((method, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 flex flex-col items-center justify-center space-y-4"
              >
                <div className="relative h-20 w-40">
                  <Image
                    src={method.logo}
                    alt={method.name}
                    fill
                    className="object-contain filter transition-all duration-500"
                  />
                </div>
                <p className="text-[#1A1A1A] font-bold text-lg tracking-tight uppercase">
                  {method.name}
                </p>
              </div>
            ))}
          </div>

          {/* Progress Dots */}
          <div className="flex justify-center gap-2 mt-10">
            {paymentMethods.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 transition-all duration-300 rounded-full ${
                  current === i ? "w-8 bg-[#EFAC19]" : "w-2 bg-gray-200"
                }`}
              />
            ))}
          </div>
        </div>

        <p className="text-center mt-8 text-gray-400 text-sm font-medium">
          Payments processed securely upon completion of work.
        </p>
      </div>
    </section>
  );
}