"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import {
  FaFacebookF,
  FaPinterestP,
  FaInstagram,
  FaLinkedinIn,
  FaArrowRight,
} from "react-icons/fa";

import { Loader2 } from "lucide-react";

const Hero = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [isPending, setIsPending] = useState(false);

  const contactInfo = {
    email: "info@construktion.com",
    phone: "07472137237",
    address: "46 Rudloe Road, SW12 0DS",
    socials: [
      { Icon: FaFacebookF, href: "#" },
      { Icon: FaPinterestP, href: "#" },
      { Icon: FaInstagram, href: "#" },
      { Icon: FaLinkedinIn, href: "#" },
    ],
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    // ✅ Get env variables safely
    const serviceId =
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_u1kx4s8";
    const templateId =
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_z3ea6h1";
    const publicKey =
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "3R2aN4QZ5TNoPtPTP";

    setIsPending(true);

    emailjs
      .sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(() => {
        alert("Message sent successfully!");
        formRef.current?.reset();
      })
      .catch((err) => {
        console.error("EmailJS Error:", err);
        alert("Failed to send message.");
      })
      .finally(() => setIsPending(false));
  };

  return (
    <section className="overflow-hidden min-h-screen bg-[#0A0A0A] text-white">
      <div className="max-w-[1200px] mx-auto px-5 py-16 md:py-20 lg:px-10">
        {/* HEADER */}
        <header className="flex flex-col lg:flex-row justify-between items-start lg:items-end border-b border-white/10 pb-10 gap-6">
          <div>
            <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 font-semibold">
              Inquiry
            </span>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold mt-3">
              <span className="bg-gradient-to-r from-[#C9A24A] via-[#E6C067] to-[#C0C0C0] bg-clip-text text-transparent">
                Contact Us
              </span>
            </h1>
          </div>

          <p className="max-w-sm text-zinc-300 text-sm md:text-base leading-relaxed">
            Reach out to our team for project discussions, consultations, or
            detailed service inquiries.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-14">
          {/* CONTACT INFO */}
          <aside className="lg:col-span-5">
            <div className="space-y-10">
              <div>
                <h2 className="text-2xl md:text-3xl font-medium mb-4 text-[#E6C067]">
                  Contact Details
                </h2>

                <div className="space-y-8">
                  <div>
                    <span className="text-[10px] uppercase text-zinc-500 block mb-2">
                      Email
                    </span>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-lg text-white hover:text-[#C9A24A]"
                    >
                      {contactInfo.email}
                    </a>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase text-zinc-500 block mb-2">
                      Phone
                    </span>
                    <a
                      href={`tel:${contactInfo.phone.replace(/\D/g, "")}`}
                      className="text-lg text-white hover:text-[#C9A24A]"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase text-zinc-500 block mb-2">
                      Address
                    </span>
                    <p className="text-lg text-white">
                      {contactInfo.address}
                    </p>
                  </div>
                </div>
              </div>

              {/* SOCIALS */}
              <div className="pt-6 border-t border-white/10 flex justify-between">
                <span className="text-[10px] uppercase text-zinc-500">
                  Social
                </span>

                <div className="flex gap-3">
                  {contactInfo.socials.map(({ Icon, href }, i) => (
                    <a
                      key={i}
                      href={href}
                      className="w-9 h-9 flex items-center justify-center border border-white/10 rounded-full hover:text-[#C9A24A]"
                    >
                      <Icon className="text-xs" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* FORM */}
          <div className="lg:col-span-7">
            <div className="bg-[#121212] border border-white/10 rounded-xl p-8">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <div className="flex flex-col">
                  <label className="text-xs text-zinc-400 mb-2">
                    Full Name
                  </label>
                  <input
                    name="user_name"
                    required
                    placeholder="John Carter"
                    className="bg-[#1A1A1A] p-3 rounded border border-white/10 text-white"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-xs text-zinc-400 mb-2">Email</label>
                  <input
                    name="user_email"
                    type="email"
                    required
                    placeholder="example@email.com"
                    className="bg-[#1A1A1A] p-3 rounded border border-white/10 text-white"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-xs text-zinc-400 mb-2">Phone</label>
                  <input
                    name="user_phone"
                    required
                    placeholder="+971..."
                    className="bg-[#1A1A1A] p-3 rounded border border-white/10 text-white"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-xs text-zinc-400 mb-2">
                    Service
                  </label>
                  <input
                    name="service"
                    required
                    placeholder="Construction"
                    className="bg-[#1A1A1A] p-3 rounded border border-white/10 text-white"
                  />
                </div>

                <div className="md:col-span-2 flex flex-col">
                  <label className="text-xs text-zinc-400 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    placeholder="Tell us about your project..."
                    className="bg-[#1A1A1A] p-3 rounded border border-white/10 text-white min-h-[120px]"
                  />
                </div>

                <div className="md:col-span-2">
                  <button
                    type="submit"
                    disabled={isPending}
                    className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-[#C9A24A] to-[#E6C067] text-black py-3 rounded"
                  >
                    {isPending ? (
                      <Loader2 className="animate-spin" />
                    ) : (
                      "Send Message"
                    )}

                    <FaArrowRight />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
