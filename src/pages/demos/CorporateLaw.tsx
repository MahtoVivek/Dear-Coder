import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Scale, ShieldCheck, FileText, ChevronRight } from "lucide-react";

export default function CorporateLaw() {
  return (
    <div className="min-h-screen bg-[#f8f7f5] text-[#2c3e50] font-serif">
      <div className="fixed top-0 left-0 w-full p-6 z-50 flex justify-between items-center bg-[#f8f7f5]/90 backdrop-blur-md">
        <Link href="/portfolio" className="flex items-center gap-2 text-sm font-sans font-medium hover:text-[#c0392b] transition-colors">
          <ArrowLeft className="w-4 h-4" /> Portfolio
        </Link>
        <div className="font-bold text-2xl tracking-widest uppercase text-[#1a252f] flex items-center gap-3">
          <Scale className="w-6 h-6 text-[#c0392b]"/>
          Harrington & Associates
        </div>
        <button className="hidden md:block border-2 border-[#1a252f] px-6 py-2 text-sm font-bold uppercase tracking-wider hover:bg-[#1a252f] hover:text-white transition-colors duration-300">
          Consultation
        </button>
      </div>

      <main className="pt-32 pb-24 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-[#1a252f]">
              Excellence in Corporate Legal Solutions.
            </h1>
            <p className="text-xl text-[#7f8c8d] mb-10 font-sans max-w-md">
              Providing strategic legal counsel to visionary companies, ensuring compliance and fostering growth in a complex business landscape.
            </p>
            <div className="flex gap-4 font-sans">
              <button className="bg-[#1a252f] text-white px-8 py-3 font-semibold hover:bg-[#c0392b] transition-colors flex items-center gap-2">
                Our Practice Areas <ChevronRight className="w-5 h-5"/>
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square bg-[#eae8e3] overflow-hidden relative border-8 border-white shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800&h=800" 
                alt="Law office"
                className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Badge overlay */}
            <div className="absolute -bottom-8 -left-8 bg-[#c0392b] text-white p-8 shadow-2xl font-sans text-center">
              <div className="text-4xl font-bold mb-1">25+</div>
              <div className="text-sm uppercase tracking-widest font-semibold text-white/80">Years of<br/>Experience</div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-[#dcd9d1] pt-16"
        >
          {[
            { title: "Mergers & Acquisitions", icon: <Scale className="w-8 h-8"/>, desc: "Seamless structuring and execution of complex transactions." },
            { title: "Corporate Governance", icon: <ShieldCheck className="w-8 h-8"/>, desc: "Advising boards and executives on duties, ethics, and policy." },
            { title: "Intellectual Property", icon: <FileText className="w-8 h-8"/>, desc: "Protecting your most valuable assets in the global market." }
          ].map((item, i) => (
            <div key={i} className="group cursor-default font-sans">
              <div className="text-[#c0392b] mb-6 group-hover:scale-110 transition-transform origin-left">{item.icon}</div>
              <h3 className="text-2xl font-serif font-bold text-[#1a252f] mb-3">{item.title}</h3>
              <p className="text-[#7f8c8d] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </main>
    </div>
  );
}
