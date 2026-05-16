"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-forest text-cream pt-16 pb-8 border-t border-earth/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
          
          {/* Brand Column */}
          <div className="flex flex-col">
            <h3 className="font-serif text-2xl font-bold tracking-widest mb-4">
              BAMORO<span className="text-bamboo">LIFE</span>
            </h3>
            <p className="text-cream/70 font-sans leading-relaxed text-sm mb-6 max-w-sm">
              Elevating everyday essentials with the power of sustainable bamboo. Soft on your skin, gentle on the earth.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="flex flex-col space-y-3">
            <h4 className="font-bold uppercase tracking-wider mb-2 text-bamboo text-sm">Quick Links</h4>
            <Link href="/shop" className="text-cream/70 hover:text-white transition-colors text-sm w-max">Shop Collection</Link>
            <Link href="/story" className="text-cream/70 hover:text-white transition-colors text-sm w-max">Our Mission</Link>
            <Link href="/faq" className="text-cream/70 hover:text-white transition-colors text-sm w-max">Shipping & Returns</Link>
            <Link href="/contact" className="text-cream/70 hover:text-white transition-colors text-sm w-max">Contact Us</Link>
          </div>

          {/* Newsletter Column */}
          <div className="flex flex-col">
            <h4 className="font-bold uppercase tracking-wider mb-4 text-bamboo text-sm">Join the Movement</h4>
            <p className="text-cream/70 text-sm mb-4">Subscribe for exclusive offers and sustainable living tips.</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-cream/10 border border-cream/20 rounded-full px-4 py-3 w-full text-sm outline-none focus:border-bamboo focus:ring-1 focus:ring-bamboo transition-all placeholder:text-cream/40"
              />
              <button className="bg-bamboo text-forest px-6 py-3 rounded-full font-bold text-sm hover:bg-cream transition-colors duration-300 whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="mt-16 pt-8 border-t border-cream/10 text-center text-cream/40 text-xs tracking-wide">
          <p>&copy; {new Date().getFullYear()} Bamoro Life. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}