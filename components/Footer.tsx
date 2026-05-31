"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-forest text-cream pt-16 pb-8 border-t border-earth/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div className="flex flex-col col-span-1 md:col-span-2">
            <h3 className="font-serif text-2xl font-bold tracking-widest mb-4">
              BAMORO<span className="text-bamboo">LIFE</span>
            </h3>
            <p className="text-cream/70 font-sans leading-relaxed text-sm mb-6 max-w-sm">
              Elevating everyday essentials with the power of sustainable bamboo. Soft on your skin, gentle on the earth.
            </p>
          </div>

          <div className="flex flex-col space-y-3 md:items-end">
            <h4 className="font-bold uppercase tracking-wider mb-2 text-bamboo text-sm">Quick Links</h4>
            <Link href="/" className="text-cream/70 hover:text-white transition-colors text-sm w-max">Home</Link>
            <Link href="/products" className="text-cream/70 hover:text-white transition-colors text-sm w-max">Products</Link>
            <Link href="/our-story" className="text-cream/70 hover:text-white transition-colors text-sm w-max">Our Story</Link>
            <Link href="/contact-us" className="text-cream/70 hover:text-white transition-colors text-sm w-max">Contact Us</Link>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-cream/10 text-center text-cream/40 text-xs tracking-wide">
          <p>&copy; {new Date().getFullYear()} Bamoro Life. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}