import { motion } from "framer-motion";
import { CheckCircle, MessageSquareMore, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function ThankYou() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full glass-card p-10 rounded-3xl text-center border-border border"
      >
        <div className="w-24 h-24 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-12 h-12" />
        </div>

        <h1 className="text-4xl font-bold mb-4">Thank You!</h1>
        <p className="text-muted-foreground text-lg mb-8">
          Your message has been received. We'll respond within 24 hours.
        </p>

        <div className="flex flex-col gap-4">
          <a
            href="https://wa.me/917004162492"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#25D366] text-white font-bold hover:bg-[#128C7E] transition-colors"
          >
            <MessageSquareMore className="w-5 h-5" />
            Chat on WhatsApp
          </a>

          <Link
            href="/"
            className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl border-2 border-border hover:border-primary text-foreground font-bold transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
