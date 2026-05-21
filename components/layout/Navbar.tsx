// "use client";
// import React, { useState } from 'react';
// import Link from 'next/link';

// import { HiOutlineArrowRight, HiMenuAlt3, HiX } from 'react-icons/hi'; // Using Hi for a clean look

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const navLinks = [
//     { name: 'Home', href: '/' },
//     { name: 'About', href: '/about' },
//     { name: 'Projects', href: '/projects' },
//     { name: 'Services', href: '/services' },
//     { name: 'Contact', href: '/contact' },
//   ];

//   return (
//     <nav className="fixed top-0 left-0 w-full z-50 text-white bg-[#0D0D0D]/80 backdrop-blur-md lg:bg-transparent transition-all duration-300">
//       <div className="max-w-[1440px] mx-auto px-6 lg:px-16 py-6 flex justify-between items-center">
        
//         {/* Logo */}
//         <Link href="/" className="transition-transform hover:scale-105">
//           <img src="/logo2.png" alt="Prime Build Logo" className="h-13 w-auto" />
//         </Link>

//         {/* Navigation Links with Gold Hover Effect */}
//         <div className="hidden md:flex gap-10">
//           {navLinks.map((link) => (
//             <Link 
//               key={link.name} 
//               href={link.href} 
//               className="relative text-sm font-medium text-gray-400 transition-all duration-300 hover:text-[#D4AF37] group"
//             >
//               {link.name}
//               {/* Subtle Gold Underline Animation */}
//               <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
//             </Link>
//           ))}
//         </div>

//         {/* Right Side: Socials & CTA */}
//         <div className="flex items-center gap-8">
          

//           {/* Premium Gold Gradient Button */}
//           <button className="bg-gradient-to-r from-[#D4AF37] via-[#F9E498] to-[#B8860B] text-black px-7 py-2.5 rounded-full text-xs font-bold flex items-center gap-2 hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] hover:scale-105 transition-all active:scale-95 shadow-lg">
//             GET A QUOTE <HiOutlineArrowRight size={16} />
//           </button>

//           {/* Mobile Toggle */}
//           <button 
//             className="md:hidden text-white hover:text-[#D4AF37] transition-colors" 
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu Overlay */}
//       <div className={`fixed inset-0 bg-black/95 flex flex-col items-center justify-center gap-8 transition-all duration-500 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
//           <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8 text-white"><HiX size={32} /></button>
//           {navLinks.map((link) => (
//             <Link 
//               key={link.name} 
//               href={link.href} 
//               onClick={() => setIsOpen(false)}
//               className="text-2xl font-light hover:text-[#D4AF37] transition-colors"
//             >
//               {link.name}
//             </Link>
//           ))}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HiOutlineArrowRight, HiMenuAlt3, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/project' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled || isOpen ? 'bg-[#0D0D0D] py-3' : 'bg-transparent py-3 overflow-hidden'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16 flex justify-between items-center">
        
        {/* Logo - Responsive height */}
        <Link href="/" className="z-[70] transition-transform active:scale-95">
          <Image
            src="/logo2.png" 
            alt="Prime Build Logo" 
            width={180}
            height={80}
            className="h-8 md:h-10 lg:h-12 w-auto object-contain" 
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 lg:gap-12">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="relative text-[13px] uppercase tracking-widest font-semibold text-gray-300 transition-all duration-300 hover:text-[#D4AF37] group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Action Area */}
        <div className="flex items-center gap-4 lg:gap-8">
          {/* Hide button on very small screens to prevent crowding, or keep it compact */}
          <a href="/contact">
          <button className="cursor-pointer hidden sm:flex bg-gradient-to-r from-[#D4AF37] via-[#F9E498] to-[#B8860B] text-black px-5 lg:px-7 py-2 lg:py-2.5 rounded-full text-[10px] lg:text-xs font-black uppercase tracking-tighter items-center gap-2 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all active:scale-95">
            GET A QUOTE <HiOutlineArrowRight size={14} />
          </button></a>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden z-[70] text-white p-2 hover:text-[#D4AF37] transition-colors" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <HiX size={30} /> : <HiMenuAlt3 size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay - Professional Slide-down */}
      <div 
        className={`fixed inset-0 bg-[#0D0D0D] z-[60] flex flex-col items-center text-white justify-center transition-all duration-500 ease-in-out ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        <div className="flex flex-col items-center gap-8">
          {navLinks.map((link, index) => (
            <Link 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className={`text-2xl font-bold tracking-tighter uppercase transition-all duration-300 hover:text-[#D4AF37] ${
                isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {link.name}
            </Link>
          ))}
          
          {/* Mobile-only CTA in menu */}
          <a href="/contact">
          <button className=" mt-4 sm:hidden bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-black px-8 py-3 rounded-full text-xs font-bold uppercase">
            Get a Quote
          </button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
