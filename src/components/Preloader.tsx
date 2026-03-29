import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CodeXml } from "lucide-react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background pointer-events-none"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="flex flex-col items-center gap-4"
          >
            <div className="relative">
              <CodeXml className="w-16 h-16 text-primary absolute opacity-20 animate-ping" />
              <CodeXml className="w-16 h-16 text-primary relative z-10" />
            </div>
            <h2 className="text-2xl font-bold tracking-widest text-gradient">Dear Coder</h2>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
