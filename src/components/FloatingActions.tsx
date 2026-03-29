import { useState, useEffect } from "react";
import { ArrowUp, MessageSquareMore } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingActions() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* Scroll to top */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-foreground shadow-lg hover:bg-muted-foreground/10 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* WhatsApp Chat Bubble */}
      <a
        href="https://wa.me/919472762864"
        target="_blank"
        rel="noreferrer"
        className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center text-white shadow-lg transition-transform hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquareMore className="w-8 h-8" />
      </a>
    </div>
  );
}
