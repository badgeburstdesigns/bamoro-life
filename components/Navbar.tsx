"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { useCartStore } from "@/store/cartStore";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { cart, toggleCart } = useCartStore();

  // This hook listens to the scroll position
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
          : "bg-transparent py-8" // Taller and transparent when at the very top
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Brand Logo / Name */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-2 group">
            <span className="font-serif text-2xl font-bold text-forest tracking-widest transition-transform duration-300 group-hover:scale-105">
              BAMORO<span className="text-bamboo">LIFE</span>
            </span>
          </Link>

          {/* Desktop Navigation Links - Now with animated underlines */}
          <div className="hidden md:flex space-x-12 items-center">
            {['Home', 'Shop', 'Our Story'].map((item) => (
              <Link 
                key={item}
                href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} 
                className="text-sm tracking-widest text-forest uppercase font-bold relative group"
              >
                {item}
                {/* This span creates the premium animated underline on hover */}
                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-bamboo transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Cart Icon */}
          <div className="flex items-center">
            <button onClick={toggleCart} className="text-forest hover:text-bamboo transition-colors relative p-2 group">
              <ShoppingBag size={24} strokeWidth={1.5} className="transition-transform duration-300 group-hover:-translate-y-1" />
              <span className="absolute top-0 right-0 inline-flex items-center justify-center min-w-[18px] h-[18px] text-[10px] font-bold text-cream bg-bamboo rounded-full shadow-sm transition-transform duration-300 group-hover:scale-110">
                {cart.reduce((total, item) => total + item.quantity, 0)}
              </span>
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}