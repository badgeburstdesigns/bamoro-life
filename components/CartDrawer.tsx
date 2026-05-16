"use client";

import { useCartStore } from "@/store/cartStore";
import { X, Trash2 } from "lucide-react";
import Image from "next/image";

export default function CartDrawer() {
  const { cart, isOpen, toggleCart, removeItem } = useCartStore();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!isOpen) return null;

  return (
    <>
      {/* Dark Overlay */}
      <div 
        className="fixed inset-0 bg-forest/40 backdrop-blur-sm z-[60] transition-opacity"
        onClick={toggleCart}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-cream shadow-2xl z-[70] flex flex-col animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-earth/20">
          <h2 className="font-serif text-2xl font-bold text-forest">Your Cart</h2>
          <button onClick={toggleCart} className="p-2 text-forest hover:bg-earth/10 rounded-full transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-grow overflow-y-auto p-6 space-y-6">
          {cart.length === 0 ? (
            <p className="text-center text-forest/60 mt-10">Your cart is completely empty.</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex gap-4 items-center bg-white p-4 rounded-2xl border border-earth/10 shadow-sm">
                <div className="relative w-20 h-20 bg-cream/50 rounded-xl overflow-hidden flex-shrink-0">
                <Image 
                    src={item.imagePath} 
                    alt={item.title} 
                    fill 
                    className="object-contain p-2" 
                />
                </div>
                <div className="flex-grow">
                  <h3 className="font-bold text-forest text-sm uppercase">{item.title}</h3>
                  <p className="text-forest/70 text-sm">Qty: {item.quantity}</p>
                  <p className="font-bold text-bamboo mt-1">{item.price}/-</p>
                </div>
                <button onClick={() => removeItem(item.id)} className="text-earth hover:text-red-500 transition-colors p-2">
                  <Trash2 size={20} />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer / Checkout */}
        {cart.length > 0 && (
          <div className="p-6 bg-white border-t border-earth/20">
            <div className="flex justify-between items-center mb-6">
              <span className="font-bold text-forest text-lg">Total</span>
              <span className="font-black text-2xl text-forest">{total}/-</span>
            </div>
            <button className="w-full bg-forest text-cream hover:bg-bamboo hover:text-forest transition-colors duration-300 py-4 rounded-full font-bold uppercase tracking-widest">
              Proceed to Checkout
            </button>
          </div>
        )}

      </div>
    </>
  );
}