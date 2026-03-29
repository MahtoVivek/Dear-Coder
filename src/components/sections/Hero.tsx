import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-background pointer-events-none">
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium mb-8 border border-primary/30">
            <span className="text-xl">🔥</span>
            <span className="bg-gradient-primary text-transparent bg-clip-text font-bold">
              Landing Page Website Only ₹1399 + Domain Price
            </span>
          </div>
          
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
