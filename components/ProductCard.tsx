"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ProductCardProps {
  title: string;
  description: string;
  imagePath: string;
  index: number;
  dummyLink: string;
}

export default function ProductCard({ title, description, imagePath, index, dummyLink }: ProductCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.2, ease: "easeOut" }}
      className="group flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-xl border border-earth/10 overflow-hidden transition-shadow duration-300"
    >
      <div className="relative w-full aspect-square bg-cream/50 overflow-hidden flex items-center justify-center p-6">
        <div className="absolute inset-0 flex items-center justify-center text-earth/40 italic text-sm">
          [Image: {imagePath}]
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow text-center bg-white z-10">
        <h3 className="font-serif text-xl font-bold text-forest mb-2 uppercase tracking-wide">
          {title}
        </h3>
        <p className="font-sans text-forest/70 text-sm mb-6 flex-grow">
          {description}
        </p>
        
        <div className="mt-auto pt-4 border-t border-forest/10">
          <a 
            href={dummyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-block bg-forest text-cream border border-forest hover:bg-bamboo hover:border-bamboo transition-colors duration-300 py-3 rounded-full font-semibold uppercase text-sm tracking-wider shadow-md"
          >
            Buy Now
          </a>
        </div>
      </div>
    </motion.div>
  );
}