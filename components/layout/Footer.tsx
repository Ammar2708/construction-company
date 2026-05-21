"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
  HiChevronUp,
} from "react-icons/hi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    
    <footer className="overflow-hidden bg-[#0A0A0A] text-white border-t border-white/5 pt-16 md:pt-24 pb-10">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16 md:mb-24">

          {/* Column 1 */}
          <div className="flex flex-col gap-8">
            <Link href="/" className="transition-opacity hover:opacity-80 w-fit">
              <Image src="/logo2.png" alt="Prime Build Logo" width={180} height={80} className="h-10 md:h-12 w-auto object-contain" />
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed max-w-xs italic font-light">
              Redefining the UK skyline through bespoke architectural excellence and luxury construction. Precision in every detail.
            </p>

            <div className="flex gap-4">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, index) => (
                <Link
                  key={index}
                  href="/"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:border-[#D4AF37] hover:text-[#D4AF37] hover:bg-white/5 transition-all duration-500"
                >
                  <Icon size={16} />
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:pl-10">
            <h4 className="text-[#D4AF37] font-bold uppercase tracking-[0.2em] text-[10px] mb-8">
              Navigation
            </h4>

            <ul className="flex flex-col gap-4">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Our Projects", href: "/project" },
                { name: "Services", href: "/services" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 h-[1px] bg-[#D4AF37] transition-all duration-300 mr-0 group-hover:mr-3"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Expertise (UPDATED WITH SEPARATE LINKS) */}
          <div className="lg:pl-5">
            <h4 className="text-[#D4AF37] font-bold uppercase tracking-[0.2em] text-[10px] mb-8">
              Expertise
            </h4>

            <ul className="flex flex-col gap-4">
              {[
                { name: "Project planing", href: "/services/project-planning" },
                { name: "Modern connstruction", href: "/services/modern-construction" },
                { name: "Design startegy", href: "/services/design-strategy" },
                { name: "Project management", href: "/services/project-management" },
                { name: "Custom build", href: "/services/custom-builds" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white text-sm transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#D4AF37] font-bold uppercase tracking-[0.2em] text-[10px] mb-8">
              Office
            </h4>

            <ul className="flex flex-col gap-6">
              <li className="flex items-start gap-4 text-gray-400 group">
                <HiOutlineLocationMarker className="text-[#D4AF37] mt-1 shrink-0" size={20} />
                <span className="text-sm leading-relaxed group-hover:text-white transition-colors">
                  123 Business Way, Canary Wharf<br />
                  London, E14 5AB
                </span>
              </li>

              <li className="flex items-center gap-4 text-gray-400 group">
                <HiOutlinePhone className="text-[#D4AF37] shrink-0" size={20} />
                <a href="tel:+442012345678" className="text-sm group-hover:text-white transition-colors">
                  +44 20 1234 5678
                </a>
              </li>

              <li className="flex items-center gap-4 text-gray-400 group">
                <HiOutlineMail className="text-[#D4AF37] shrink-0" size={20} />
                <a href="mailto:info@primebuildworks.co.uk" className="text-sm group-hover:text-white transition-colors">
                  info@primebuildworks.co.uk
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">

          <p className="text-gray-500 text-[10px] md:text-[11px] uppercase tracking-[0.15em] text-center md:text-left">
            © {currentYear} PRIME BUILD WORKS LIMITED. LONDON, UK.
          </p>

          <div className="flex items-center gap-8 order-last md:order-none">
            <Link href="/privacy" className="text-gray-500 hover:text-[#D4AF37] text-[10px] uppercase tracking-widest transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-[#D4AF37] text-[10px] uppercase tracking-widest transition-colors">
              Terms
            </Link>
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-gray-500 hover:text-white transition-colors uppercase text-[10px] tracking-widest"
          >
            Back to top{" "}
            <HiChevronUp className="group-hover:-translate-y-1 transition-transform" size={18} />
          </button>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
