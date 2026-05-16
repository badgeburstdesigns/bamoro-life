"use client"; // This tells Next.js we are using browser animations

import Image from "next/image";
import { motion } from "framer-motion";
import { useCartStore } from "@/store/cartStore";

interface ProductCardProps {
  title: string;
  description: string;
  price: string;
  imagePath: string;
  index: number; // We added this to create a staggered cascade effect
}


export default function ProductCard({ title, description, price, imagePath, index }: ProductCardProps) {

  const addItem = useCartStore((state) => state.addItem);

  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.2, ease: "easeOut" }}
      className="group flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-xl border border-earth/10 overflow-hidden transition-shadow duration-300"
    >
      {/* Product Image Area */}
      <div className="relative w-full aspect-square bg-cream/50 overflow-hidden flex items-center justify-center p-6">
        <div className="absolute inset-0 flex items-center justify-center text-earth/40 italic text-sm">
          [Image: {imagePath}]
        </div>
        { <Image src={imagePath} alt={title} fill className="object-contain group-hover:scale-105 transition-transform duration-500" />}
      </div>

      {/* Product Details Area */}
      <div className="p-6 flex flex-col flex-grow text-center bg-white z-10">
        <h3 className="font-serif text-xl font-bold text-forest mb-2 uppercase tracking-wide">
          {title}
        </h3>
        <p className="font-sans text-forest/70 text-sm mb-6 flex-grow">
          {description}
        </p>
        
        {/* Price and Add to Cart */}
        <div className="mt-auto">
          <div className="border-t border-b border-forest/10 py-2 mb-4">
            <span className="font-bold text-xl text-forest">{price}/-</span>
          </div>
          <button 
            onClick={() => addItem({ id: title, title, price: Number(price), imagePath })}
            className="w-full bg-cream text-forest border border-forest hover:bg-forest hover:text-cream transition-colors duration-300 py-3 rounded-full font-semibold uppercase text-sm tracking-wider"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
}