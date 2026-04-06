import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-transparent pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] opacity-50 mix-blend-screen animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[100px] opacity-50 mix-blend-screen" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
            className="inline-flex items-center justify-center gap-2 px-4 py-2 sm:px-6 sm:py-3 rounded-2xl sm:rounded-full bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/50 shadow-[0_0_20px_rgba(249,115,22,0.2)] mb-10 overflow-hidden relative group max-w-full text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            <span className="text-xl sm:text-2xl animate-bounce pt-1 shrink-0">🔥</span>
            <div className="text-foreground/90 font-bold tracking-wide text-xs sm:text-sm md:text-base z-10 flex flex-wrap items-center justify-center gap-x-1 sm:gap-x-2 gap-y-1">
              <span>Landing Page Website Only</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 font-black text-base sm:text-lg md:text-xl">₹1399</span> 
              <span className="text-muted-foreground font-medium text-[10px] sm:text-xs md:text-sm">+ Domain Price</span>
            </div>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
            Affordable Digital Solutions <br className="hidden md:block" />
            for Your Business 🚀
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-4 font-medium">
            Affordable and Professional Website Solutions
          </p>
          
          <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-10">
            We build websites, apps, and AI-powered solutions that grow your business.
            <br className="hidden md:block" />
            <span className="text-sm mt-2 block">Domain price starting from ₹499–₹999/year</span>
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full bg-gradient-primary text-white font-bold text-lg hover:shadow-[0_0_20px_rgba(var(--primary),0.5)] transition-all hover:-translate-y-1 w-full sm:w-auto"
            >
              Get Started
            </Link>
            <Link
              href="/pricing"
              className="px-8 py-4 rounded-full border-2 border-border hover:border-primary text-foreground font-bold text-lg transition-all hover:-translate-y-1 w-full sm:w-auto bg-card/50 backdrop-blur-sm"
            >
              View Pricing
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
