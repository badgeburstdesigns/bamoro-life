import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <main className="min-h-screen">
      
      {/* Hero Section (Your existing code) */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden px-4">
        <div className="absolute inset-0 z-0">
          { <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover" src="/your-video.mp4"></video> }
          <div className="absolute inset-0 bg-cream/60 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto mt-12 md:mt-20">
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-forest mb-4 md:mb-6 tracking-tight">
            The Future Feels Softer
          </h1>
          <p className="font-sans text-lg md:text-2xl text-forest/80 mb-10 md:mb-14 font-medium max-w-2xl mx-auto">
            Eco-friendly bamboo essentials designed for your home. Sustainable, durable, and gentle.
          </p>
          
          <div className="bg-cream/40 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-2xl border border-earth/20 inline-block transform hover:scale-105 transition-all duration-500">
            <h2 className="font-black text-4xl md:text-6xl text-bamboo uppercase tracking-tighter mb-1 md:mb-2 leading-none">
              Super Big Sale
            </h2>
            <p className="text-xl md:text-3xl font-bold text-forest mb-6 md:mb-8 tracking-wide uppercase">
              Up to 30% OFF
            </p>
            
            <button className="bg-forest text-cream px-8 py-4 rounded-full font-bold text-lg md:text-xl inline-flex items-center justify-center gap-2 hover:bg-earth transition-colors duration-300 shadow-lg w-full sm:w-auto">
              Grab Combo Offer - 399/-
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </button>
          </div>
        </div>
      </section>

      {/* --- NEW: Featured Products Section --- */}
      <section className="py-24 bg-cream px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-forest mb-4">
              Everyday Essentials
            </h2>
            <div className="h-1 w-24 bg-bamboo mx-auto rounded-full"></div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <ProductCard 
              index={0}
              title="Bamboo Napkins"
              description="Eco-friendly napkins designed for softness and sustainability."
              price="99"
              imagePath="/napkins.png" 
            />
            <ProductCard 
              index={1}
              title="Bamboo Kitchen Towel"
              description="A durable, roll-based towel designed for multiple uses in the kitchen."
              price="249"
              imagePath="/towel.png" 
            />
            <ProductCard 
              index={2}
              title="Bamboo Tissues"
              description="Gentle and sustainable tissue sheets for everyday use."
              price="99"
              imagePath="/tissues.png" 
            />
          </div>

        </div>
      </section>
      
    </main>
  );
}