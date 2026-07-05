"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

export default function Home() {
  const [oxygen, setOxygen] = useState(0);
  const [trees, setTrees] = useState(0);
  
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isStatsInView) {
      const interval = setInterval(() => {
        setOxygen(prev => prev < 35 ? prev + 1 : 35);
        setTrees(prev => prev < 100 ? prev + 2 : 100);
      }, 50);
      return () => clearInterval(interval);
    }
  }, [isStatsInView]);

  const marqueeItems = [
    "⚡ FREE SHIPPING ON FLIPKART", "⚡ 100% NATURAL BAMBOO", "⚡ AMAZON BESTSELLER", "⚡ CHEMICAL-FREE & HYPOALLERGENIC"
  ];
  const fullMarquee = [...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems];

  const testimonials = [
    { name: "Priya S.", review: "These kitchen towels are incredible. I've washed one sheet 20 times and it's still going strong." },
    { name: "Rahul M.", review: "Finally, a sustainable option that doesn't feel rough. The bamboo tissues are so soft!" },
    { name: "Anjali K.", review: "Switched my entire home to Bamoro Life and I feel great about it." },
    { name: "Vikram D.", review: "The napkins feel like luxury cloth. Can't believe they are bamboo." },
    { name: "Neha R.", review: "Best eco-friendly purchase I've made this year. So durable!" },
    { name: "Karan T.", review: "I love the 1 reusable = 30 regular rolls concept. Saves so much money." },
    { name: "Sneha P.", review: "Amazing quality! They don't tear when wet like normal paper towels." },
    { name: "Amit J.", review: "A small change for our home, but a big change for the planet. Highly recommend." },
    { name: "Pooja V.", review: "Super absorbent and soft. My family loves the tissues." }
  ];
  const fullTestimonials = [...testimonials, ...testimonials];

  return (
    <main className="min-h-screen">
      
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden px-4 bg-forest">
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover" src="/your-video.mp4"></video>
          <div className="absolute inset-0 bg-cream/70 backdrop-blur-[4px]"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto mt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-5xl md:text-7xl font-bold text-forest mb-4 md:mb-6 tracking-tight drop-shadow-[0_0_15px_rgba(250,249,246,0.8)]"
          >
            Welcome to BamoroLife
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-lg md:text-2xl text-forest/90 mb-10 font-bold uppercase tracking-widest max-w-2xl mx-auto drop-shadow-md"
          >
            Future feels softer with bamboo
          </motion.p>
        </div>
      </section>

      {/* Marquee */}
      <div className="w-full bg-bamboo text-forest py-3 overflow-hidden border-y border-forest/20 flex whitespace-nowrap">
        <motion.div 
          animate={{ x: [0, "-50%"] }} 
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="font-bold tracking-widest text-sm uppercase flex gap-12"
        >
          {fullMarquee.map((text, i) => <span key={i}>{text}</span>)}
        </motion.div>
      </div>

      {/* Impact Stats */}
      <section ref={statsRef} className="py-20 bg-forest text-cream px-4 text-center">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 divide-y md:divide-y-0 md:divide-x divide-cream/20">
          <div className="pt-6 md:pt-0">
            <h3 className="text-6xl font-black text-bamboo mb-2">{oxygen}%</h3>
            <p className="font-bold tracking-wider uppercase text-sm">More Oxygen Produced</p>
          </div>
          <div className="pt-6 md:pt-0">
            <h3 className="text-6xl font-black text-bamboo mb-2">{trees}%</h3>
            <p className="font-bold tracking-wider uppercase text-sm">Biodegradable</p>
          </div>
          <div className="pt-6 md:pt-0">
            <h3 className="text-6xl font-black text-bamboo mb-2">0</h3>
            <p className="font-bold tracking-wider uppercase text-sm">Harsh Chemicals Used</p>
          </div>
        </div>
      </section>

      {/* Why Bamboo */}
      <section className="py-24 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-forest mb-4">Why Bamboo Only?</h2>
            <div className="h-1 w-24 bg-bamboo mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: "Super Fast Growth", desc: "Reaches maturity in just 3-5 years, not decades like conventional trees." },
              { title: "Highly Renewable", desc: "Natural regeneration needs minimal water and zero harmful pesticides." },
              { title: "Eco-Hero", desc: "Releases 35% more oxygen than equivalent timber trees." },
              { title: "Planet Positive", desc: "Completely returns to nature without waste. Zero deforestation contribution." }
            ].map((feature, i) => (
              <div key={i} className="bg-cream p-8 rounded-2xl text-center border border-earth/10 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-xl cursor-default">
                <h4 className="font-bold text-forest mb-3 uppercase tracking-wide">{feature.title}</h4>
                <p className="text-sm text-forest/70 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Immersive Products Section */}
      <section className="py-24 bg-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-forest mb-4">Our Everyday Essentials</h2>
            <div className="h-1 w-24 bg-bamboo mx-auto rounded-full"></div>
            <p className="mt-6 text-forest/80 max-w-2xl mx-auto text-lg">
              Experience premium comfort with a guilt-free footprint. Explore our 100% natural bamboo range.
            </p>
          </div>

          <div className="space-y-24 md:space-y-32">
            
            {/* Product 1: Kitchen Towels (Image Left) */}
            <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
              <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} className="w-full md:w-1/2">
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                  <Image src="/towel-lifestyle.jpg" alt="Bamboo Kitchen Towels" fill className="object-cover" />
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, delay: 0.2 }} className="w-full md:w-1/2 flex flex-col items-start">
                <span className="text-bamboo font-bold tracking-widest uppercase text-sm mb-3">Sustainable Kitchen Essential</span>
                <h3 className="font-serif text-4xl font-bold text-forest mb-6">Reusable Bamboo Towels</h3>
                <p className="text-forest/80 leading-relaxed mb-8 text-lg">Eco-friendly, reusable, and responsibly made for a cleaner home. Wash and reuse a single sheet up to 100 times. Perfect for everyday wiping, drying, and cleaning.</p>
                <ul className="space-y-3 mb-10 text-forest font-medium">
                  <li className="flex items-center gap-3">✓ <span className="opacity-80">1 Reusable Roll = 30 Regular Rolls</span></li>
                  <li className="flex items-center gap-3">✓ <span className="opacity-80">Soft, strong & highly absorbent</span></li>
                  <li className="flex items-center gap-3">✓ <span className="opacity-80">Better for you & the planet</span></li>
                </ul>
                <div className="flex flex-wrap items-center gap-5 mt-2">
  <span className="font-bold text-forest uppercase text-sm tracking-widest mr-2">Buy On:</span>
  
  {/* Amazon Link Fixed */}
  <a 
    href="https://www.amazon.in/Bamorolife-Biodegradable-Eco-Friendly-Absorbent-Disposable/dp/B0H36YD4BM/ref=sr_1_4?crid=2UX1HFSN7F77A&dib=eyJ2IjoiMSJ9.1rzjee9RCkf9Eo960CR7InwWcxLAcXejxv4274swYlhEnVgQiJc-7SzcfV0J4T3P0wtp_uOgamSWjN4cj1D3h2MG8MWLwhzgqDz85PfcKxsPCVXJqxwlTEVMm1PtuOB3LWKN9pha0h4xEwse6PLqlQ.YFQvRBvySCopBilvkCXpnJPq_BzG4NwdIusjKXdfAcA&dib_tag=se&keywords=bamorolife&qid=1780240629&sprefix=%2Caps%2C361&sr=8-4" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="hover:scale-110 transition-transform"
  >
    <Image src="/amazon.png" alt="Amazon" width={75} height={25} className="object-contain" />
  </a>

  {/* Flipkart Link (Still needs your actual URL in the href) */}
  <a 
    href="https://dl.flipkart.com/dl/bamorolife-reusable-kitchen-towel-20-sheets-dry-bamboo-cleaning-cloth/p/itm1c81ef09bb17a?pid=CLCHNUDFDKKWPNUP&lid=LSTCLCHNUDFDKKWPNUPVUTWFZ&marketplace=FLIPKART&_refId=&_appId=CL" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="hover:scale-110 transition-transform"
  >
    <Image src="/flipkart.png" alt="Flipkart" width={75} height={25} className="object-contain" />
  </a>

  {/* Meesho Link Fixed */}
  <a 
    href="https://www.meesho.com/search?q=bamorolife&searchType=manual&searchIdentifier=text_search" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="hover:scale-110 transition-transform"
  >
    <Image src="/meesho.png" alt="Meesho" width={75} height={25} className="object-contain" />
  </a>
</div>
              </motion.div>
            </div>

            {/* Product 2: Bamboo Napkins (Image Right) */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-20">
              <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} className="w-full md:w-1/2">
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                  <Image src="/napkin-fries.jpg" alt="Bamboo Napkins with Fries" fill className="object-cover" />
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, delay: 0.2 }} className="w-full md:w-1/2 flex flex-col items-start">
                <span className="text-bamboo font-bold tracking-widest uppercase text-sm mb-3">Premium Dining Comfort</span>
                <h3 className="font-serif text-4xl font-bold text-forest mb-6">Ultra-Soft Bamboo Napkins</h3>
                <p className="text-forest/80 leading-relaxed mb-8 text-lg">The future feels softer. Our 100% bamboo napkins naturally absorb excess oil and moisture, making them the perfect companion for your favorite meals. Guilt-free dining starts here.</p>
                <ul className="space-y-3 mb-10 text-forest font-medium">
                  <li className="flex items-center gap-3">✓ <span className="opacity-80">Naturally Hypoallergenic</span></li>
                  <li className="flex items-center gap-3">✓ <span className="opacity-80">Incredibly Absorbent</span></li>
                  <li className="flex items-center gap-3">✓ <span className="opacity-80">100% Chemical-Free</span></li>
                </ul>
                <div className="flex flex-wrap items-center gap-5 mt-2">
                  <span className="font-bold text-forest uppercase text-sm tracking-widest mr-2">Buy On:</span>
                  <a href="https://www.amazon.in/Bamorolife-Biodegradable-Eco-Friendly-Absorbent-Disposable/dp/B0H36YD4BM/ref=sr_1_4?crid=2UX1HFSN7F77A&dib=eyJ2IjoiMSJ9.1rzjee9RCkf9Eo960CR7InwWcxLAcXejxv4274swYlhEnVgQiJc-7SzcfV0J4T3P0wtp_uOgamSWjN4cj1D3h2MG8MWLwhzgqDz85PfcKxsPCVXJqxwlTEVMm1PtuOB3LWKN9pha0h4xEwse6PLqlQ.YFQvRBvySCopBilvkCXpnJPq_BzG4NwdIusjKXdfAcA&dib_tag=se&keywords=bamorolife&qid=1780240629&sprefix=%2Caps%2C361&sr=8-4"  target="_blank" className="hover:scale-110 transition-transform"><Image src="/amazon.png" alt="Amazon" width={75} height={25} className="object-contain" /></a>
                  <a href="https://www.shopsy.in/bamorolife-bamboo-facial-tissue-paper/p/itmf86c3c1eea42b?pid=FNOHZ4Y4UFKFJMFW" target="_blank" className="hover:scale-110 transition-transform"><Image src="/flipkart.png" alt="Flipkart" width={75} height={25} className="object-contain" /></a>
                  <a href="https://www.meesho.com/search?q=bamorolife&searchType=manual&searchIdentifier=text_search"  target="_blank" className="hover:scale-110 transition-transform"><Image src="/meesho.png" alt="Meesho" width={75} height={25} className="object-contain" /></a>
                </div>
              </motion.div>
            </div>

            {/* Product 3: Bamboo Tissues (Image Left) */}
            <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
              <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} className="w-full md:w-1/2">
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                  <Image src="/tissue-lifestyle.jpg" alt="Bamboo Tissues" fill className="object-cover" />
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, delay: 0.2 }} className="w-full md:w-1/2 flex flex-col items-start">
                <span className="text-bamboo font-bold tracking-widest uppercase text-sm mb-3">Gentle on Skin</span>
                <h3 className="font-serif text-4xl font-bold text-forest mb-6">Pure Bamboo Tissues</h3>
                <p className="text-forest/80 leading-relaxed mb-8 text-lg">Why settle for scratchy or unsustainable? Bamoro Life brings you the best of both worlds. Gentle enough for the most sensitive skin, and entirely biodegradable.</p>
                <ul className="space-y-3 mb-10 text-forest font-medium">
                  <li className="flex items-center gap-3">✓ <span className="opacity-80">Unbleached & Pure</span></li>
                  <li className="flex items-center gap-3">✓ <span className="opacity-80">Zero Dust & Lint-Free</span></li>
                  <li className="flex items-center gap-3">✓ <span className="opacity-80">Travel-Ready Packs</span></li>
                </ul>
                <div className="flex flex-wrap items-center gap-5 mt-2">
                  <span className="font-bold text-forest uppercase text-sm tracking-widest mr-2">Buy On:</span>
                  <a href="https://www.amazon.in/Bamorolife-Biodegradable-Eco-Friendly-Absorbent-Disposable/dp/B0H36YD4BM/ref=sr_1_4?crid=2UX1HFSN7F77A&dib=eyJ2IjoiMSJ9.1rzjee9RCkf9Eo960CR7InwWcxLAcXejxv4274swYlhEnVgQiJc-7SzcfV0J4T3P0wtp_uOgamSWjN4cj1D3h2MG8MWLwhzgqDz85PfcKxsPCVXJqxwlTEVMm1PtuOB3LWKN9pha0h4xEwse6PLqlQ.YFQvRBvySCopBilvkCXpnJPq_BzG4NwdIusjKXdfAcA&dib_tag=se&keywords=bamorolife&qid=1780240629&sprefix=%2Caps%2C361&sr=8-4"  target="_blank" className="hover:scale-110 transition-transform"><Image src="/amazon.png" alt="Amazon" width={75} height={25} className="object-contain" /></a>
                  <a href="https://www.flipkart.com/bamorolife-pack-2-100-pulls-premium-bamboo-tissue-brown-paper-napkins/p/itm4c4dd1d263a87?pid=NAPHNVR6XYMJFYJA" target="_blank" className="hover:scale-110 transition-transform"><Image src="/flipkart.png" alt="Flipkart" width={75} height={25} className="object-contain" /></a>
                  <a href="https://www.meesho.com/search?q=bamorolife&searchType=manual&searchIdentifier=text_search"  target="_blank" className="hover:scale-110 transition-transform"><Image src="/meesho.png" alt="Meesho" width={75} height={25} className="object-contain" /></a>
                </div>
              </motion.div>
            </div>

            {/* NEW Product 4: Bamboo Toilet Paper (Image Right) */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-20">
              <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} className="w-full md:w-1/2">
                {/* Note: Ensure you add 'toilet-paper.jpg' to your public folder */}
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                  <Image src="/toilet-paper.jpg" alt="Bamboo Toilet Paper" fill className="object-cover" />
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, delay: 0.2 }} className="w-full md:w-1/2 flex flex-col items-start">
                <span className="text-bamboo font-bold tracking-widest uppercase text-sm mb-3">Everyday Bathroom Luxury</span>
                <h3 className="font-serif text-4xl font-bold text-forest mb-6">Premium Bamboo Toilet Paper</h3>
                <p className="text-forest/80 leading-relaxed mb-8 text-lg">Upgrade your daily routine with incredibly soft, strong, and septic-safe bamboo toilet paper. It's gentle on your skin and even gentler on the planet—no trees harmed.</p>
                <ul className="space-y-3 mb-10 text-forest font-medium">
                  <li className="flex items-center gap-3">✓ <span className="opacity-80">100% Tree-Free & Septic Safe</span></li>
                  <li className="flex items-center gap-3">✓ <span className="opacity-80">Ultra-Soft 3-Ply Thickness</span></li>
                  <li className="flex items-center gap-3">✓ <span className="opacity-80">Zero Harsh Bleach or Chemicals</span></li>
                </ul>
                <div className="flex flex-wrap items-center gap-5 mt-2">
                  <span className="font-bold text-forest uppercase text-sm tracking-widest mr-2">Buy On:</span>
                  <a href="https://www.amazon.in/Bamorolife-Biodegradable-Eco-Friendly-Absorbent-Disposable/dp/B0H36YD4BM/ref=sr_1_4?crid=2UX1HFSN7F77A&dib=eyJ2IjoiMSJ9.1rzjee9RCkf9Eo960CR7InwWcxLAcXejxv4274swYlhEnVgQiJc-7SzcfV0J4T3P0wtp_uOgamSWjN4cj1D3h2MG8MWLwhzgqDz85PfcKxsPCVXJqxwlTEVMm1PtuOB3LWKN9pha0h4xEwse6PLqlQ.YFQvRBvySCopBilvkCXpnJPq_BzG4NwdIusjKXdfAcA&dib_tag=se&keywords=bamorolife&qid=1780240629&sprefix=%2Caps%2C361&sr=8-4"  target="_blank" className="hover:scale-110 transition-transform"><Image src="/amazon.png" alt="Amazon" width={75} height={25} className="object-contain" /></a>
                  <a href="#" target="_blank" className="hover:scale-110 transition-transform"><Image src="/flipkart.png" alt="Flipkart" width={75} height={25} className="object-contain" /></a>
                  <a href="https://www.meesho.com/search?q=bamorolife&searchType=manual&searchIdentifier=text_search" target="_blank" className="hover:scale-110 transition-transform"><Image src="/meesho.png" alt="Meesho" width={75} height={25} className="object-contain" /></a>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Dynamic Testimonials Slider */}
      <section className="py-24 bg-white px-4 overflow-hidden border-t border-forest/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-forest mb-4">Loved by Families</h2>
            <div className="h-1 w-24 bg-bamboo mx-auto rounded-full"></div>
          </div>
        </div>
        <div className="flex w-full overflow-hidden relative">
          <motion.div animate={{ x: [0, "-50%"] }} transition={{ repeat: Infinity, duration: 40, ease: "linear" }} className="flex gap-6 min-w-max px-4">
            {fullTestimonials.map((testimonial, i) => (
              <div key={i} className="bg-cream w-80 p-8 rounded-2xl border border-earth/20 shadow-sm flex-shrink-0">
                <div className="flex text-bamboo mb-4 text-xl">★★★★★</div>
                <p className="text-forest/80 italic mb-6">"{testimonial.review}"</p>
                <p className="font-bold uppercase tracking-wider text-sm text-forest">- {testimonial.name}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Available On (Marketplace Logos) */}
      <section className="py-12 bg-cream border-t border-forest/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h4 className="font-bold uppercase tracking-widest text-sm text-forest/50 mb-8">Available securely on your favorite platform</h4>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            <a href="https://www.amazon.in/Bamorolife-Biodegradable-Eco-Friendly-Absorbent-Disposable/dp/B0H36YD4BM/ref=sr_1_4?crid=2UX1HFSN7F77A&dib=eyJ2IjoiMSJ9.1rzjee9RCkf9Eo960CR7InwWcxLAcXejxv4274swYlhEnVgQiJc-7SzcfV0J4T3P0wtp_uOgamSWjN4cj1D3h2MG8MWLwhzgqDz85PfcKxsPCVXJqxwlTEVMm1PtuOB3LWKN9pha0h4xEwse6PLqlQ.YFQvRBvySCopBilvkCXpnJPq_BzG4NwdIusjKXdfAcA&dib_tag=se&keywords=bamorolife&qid=1780240629&sprefix=%2Caps%2C361&sr=8-4" target="_blank" className="hover:scale-110 transition-transform"><Image src="/amazon.png" alt="Amazon" width={120} height={40} className="object-contain" /></a>
            <a href="#" target="_blank" className="hover:scale-110 transition-transform"><Image src="/flipkart.png" alt="Flipkart" width={120} height={40} className="object-contain" /></a>
            <a href="https://www.meesho.com/search?q=bamorolife&searchType=manual&searchIdentifier=text_search"  target="_blank" className="hover:scale-110 transition-transform"><Image src="/meesho.png" alt="Meesho" width={120} height={40} className="object-contain" /></a>
          </div>
        </div>
      </section>
      
      {/* Floating WhatsApp Icon */}
      <a href="#" target="_blank" rel="noopener noreferrer" className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
        </svg>
      </a>

    </main>
  );
}