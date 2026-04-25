import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CodeXml } from "lucide-react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Increased duration slightly to let the animation play out nicely
    const timer = setTimeout(() => setLoading(false), 2600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(10px)", scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background pointer-events-none"
        >
          {/* Subtle animated background grid or gradient glow could go here, but keeping it clean */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--primary),0.05)_0%,transparent_100%)] opacity-50" />

          <div className="flex flex-col items-center justify-center relative z-10 w-full px-4">
            {/* Spinning Outer Rings */}
            <div className="relative flex items-center justify-center mb-8">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute w-32 h-32 md:w-40 md:h-40 rounded-full border border-primary/20 border-t-primary/80 border-b-primary/80"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute w-40 h-40 md:w-48 md:h-48 rounded-full border border-primary/10 border-r-primary/50 border-l-primary/50"
              />

              {/* Inner Icon Box */}
              <motion.div
                initial={{ scale: 0, rotate: -45, borderRadius: "50%" }}
                animate={{ scale: 1, rotate: 0, borderRadius: "1rem" }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
                className="relative flex items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-primary/5 border border-primary/20 backdrop-blur-sm shadow-[0_0_30px_rgba(var(--primary),0.2)] overflow-hidden"
              >
                <img src="/favicon.png" alt="Dear Coder Logo" className="w-12 h-12 md:w-16 md:h-16 relative z-10" />
                
                {/* Scanning line effect inside the box */}
                <motion.div
                  animate={{ top: ["-10%", "110%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="absolute left-0 right-0 h-[2px] bg-primary/60 blur-[1px] shadow-[0_0_10px_currentColor] z-20"
                />
              </motion.div>
            </div>

            {/* Title text reveal */}
            <div className="overflow-hidden mb-8">
              <motion.h2
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
                className="text-3xl md:text-5xl font-black tracking-widest text-gradient text-center uppercase"
              >
                Dear Coder
              </motion.h2>
            </div>

            {/* Progress Bar Container */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "200px", opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.4, ease: "easeOut" }}
              className="h-1 bg-muted/30 rounded-full overflow-hidden relative md:w-[250px]"
            >
              {/* Actual Loading Bar */}
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ delay: 0.8, duration: 1.8, ease: "easeInOut" }}
                className="absolute inset-y-0 left-0 w-full bg-primary rounded-full shadow-[0_0_10px_rgba(var(--primary),0.8)]"
              />
            </motion.div>
            
            {/* Loading text percentage or dots */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="mt-3 text-xs md:text-sm text-muted-foreground font-mono uppercase tracking-widest"
            >
              Initializing<motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              >...</motion.span>
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
