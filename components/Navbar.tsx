"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 top-0 transition-all duration-500 ${
        isScrolled
          ? "bg-cream/90 backdrop-blur-md border-b border-earth/20 py-4 shadow-sm"
          : "bg-transparent py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          <Link href="/" className="flex-shrink-0 flex items-center gap-3 group">
            {/* Note: Ensure you add 'logo.png' to your public folder */}
            <Image src="/logo.png" alt="Bamoro Life Panda" width={36} height={36} className="object-contain transition-transform duration-300 group-hover:scale-110" />
            <span className="font-serif text-2xl font-bold text-forest tracking-widest transition-transform duration-300 group-hover:scale-105">
              BAMORO<span className="text-bamboo">LIFE</span>
            </span>
          </Link>

          <div className="hidden md:flex space-x-8 lg:space-x-12 items-center">
            {['Home', 'Products', 'Our Story', 'Contact Us'].map((item) => (
              <Link 
                key={item}
                href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} 
                className="text-sm tracking-widest text-forest uppercase font-bold relative group"
              >
                {item}
                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-bamboo transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-bamboo text-forest px-6 py-2.5 rounded-full font-bold text-sm hover:bg-forest hover:text-cream transition-colors duration-300 shadow-md"
            >
              Join Our Family
            </a>
          </div>

        </div>
      </div>
    </nav>
  );
}