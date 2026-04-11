import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, ShoppingBag, Star, TrendingUp } from "lucide-react";

export default function FashionEcommerce() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-[#111]">
      <div className="fixed top-0 left-0 w-full p-4 z-50 flex justify-between items-center bg-white/80 backdrop-blur-md border-b border-gray-200">
        <Link href="/portfolio" className="flex items-center gap-2 text-sm font-semibold hover:text-primary transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Portfolio
        </Link>
        <div className="font-bold text-xl tracking-tighter">LUMIÈRE</div>
        <div className="flex gap-4">
          <button className="text-sm font-semibold hover:text-primary">Shop</button>
          <button className="text-sm font-semibold hover:text-primary">Collections</button>
        </div>
      </div>

      <main className="pt-24 pb-16 px-4 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12 mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">Elevate Your Style</h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-8">
            Discover the latest trends in our new summer collection. Crafted with elegance, designed for you.
          </p>
          <button className="bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-gray-800 transition-transform hover:scale-105">
            Shop the Collection
          </button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {[1, 2, 3].map((i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[3/4] bg-gray-200 rounded-2xl overflow-hidden relative mb-4">
                <img 
                  src={`https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800&h=1000`} 
                  alt="Fashion item"
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full shadow-sm">
                  <Star className="w-4 h-4 text-black" />
                </div>
              </div>
              <div className="px-2">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-bold text-lg">Designer Series {i}</h3>
                  <span className="font-semibold text-gray-600">${120 + i * 30}</span>
                </div>
                <p className="text-gray-500 text-sm">New Arrival</p>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
