import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, PenTool, Layers, Layout, ArrowUpRight } from "lucide-react";

export default function CreativeAgency() {
  return (
    <div className="min-h-screen bg-[#111111] text-[#f4f4f4] font-sans selection:bg-[#ff4f00] selection:text-white">
      <nav className="fixed w-full p-6 mix-blend-difference z-50 flex justify-between items-center text-white">
        <Link href="/portfolio" className="flex items-center gap-2 text-sm font-bold tracking-widest uppercase hover:text-[#ff4f00] transition-colors">
          <ArrowLeft className="w-5 h-5" /> Portfolio
        </Link>
        <div className="font-black text-2xl tracking-tighter">O N I X .</div>
        <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center cursor-pointer hover:bg-white hover:text-black transition-colors">
          <div className="space-y-1.5">
            <div className="w-5 h-0.5 bg-current"></div>
            <div className="w-5 h-0.5 bg-current"></div>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="min-h-[70vh] flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-[12vw] leading-[0.85] font-black tracking-tighter uppercase mb-8">
              We create <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4f00] to-[#ff9100]">bold</span> digital <br/>
              experiences.
            </h1>
          </motion.div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mt-12 border-t border-white/10 pt-8 gap-8">
            <p className="text-xl md:text-2xl max-w-md font-medium text-gray-400">
              An award-winning design agency focused on branding, web design, and digital innovation.
            </p>
            <div className="w-32 h-32 rounded-full bg-[#ff4f00] text-black font-bold flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group uppercase tracking-widest text-sm relative overflow-hidden">
              <span className="relative z-10 group-hover:-translate-y-full transition-transform duration-300">Let's Talk</span>
              <span className="absolute inset-0 flex items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-10">
                <ArrowUpRight className="w-8 h-8"/>
              </span>
            </div>
          </div>
        </div>

        {/* Featured Work Grid */}
        <div className="mt-32">
          <h2 className="text-4xl font-bold mb-12">Selected Works (2025)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group cursor-pointer">
              <div className="aspect-[4/5] bg-gray-900 rounded-lg overflow-hidden relative mb-6">
                <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop" alt="Project 1" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"/>
              </div>
              <h3 className="text-3xl font-bold mb-2 group-hover:text-[#ff4f00] transition-colors">Neo Brutalism</h3>
              <p className="text-gray-500 uppercase tracking-widest font-bold text-xs">Web Design & Development</p>
            </div>
            <div className="group cursor-pointer md:mt-24">
              <div className="aspect-[4/5] bg-gray-900 rounded-lg overflow-hidden relative mb-6">
                <img src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1000&auto=format&fit=crop" alt="Project 2" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"/>
              </div>
              <h3 className="text-3xl font-bold mb-2 group-hover:text-[#ff4f00] transition-colors">Abstract Spaces</h3>
              <p className="text-gray-500 uppercase tracking-widest font-bold text-xs">Brand Identity</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
