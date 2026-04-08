import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function BackgroundAnimation() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-slate-50 dark:bg-[#030014] transition-colors duration-500 pointer-events-none select-none">
      
      {/* Light Mode Grid Pattern */}
      <div 
        className="absolute inset-0 block dark:hidden opacity-[0.4]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #00000010 1px, transparent 1px),
            linear-gradient(to bottom, #00000010 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, #000 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, #000 40%, transparent 100%)'
        }}
      />

      {/* Dark Mode Grid Pattern */}
      <div 
        className="absolute inset-0 hidden dark:block opacity-[0.15]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff10 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff10 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, #000 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, #000 40%, transparent 100%)'
        }}
      />

      {/* Massive Glowing Orbs (Aurora Effect) */}
      <motion.div
        animate={{
          transform: [
            "translate(0%, 0%) scale(1)",
            "translate(5%, 5%) scale(1.1)",
            "translate(-5%, 5%) scale(0.9)",
            "translate(0%, 0%) scale(1)"
          ]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] md:blur-[140px] opacity-60 dark:opacity-40 bg-gradient-to-r from-violet-400 via-indigo-400 to-purple-400 dark:from-violet-600 dark:via-indigo-600 dark:to-purple-600"
      />

      <motion.div
        animate={{
          transform: [
            "translate(0%, 0%) scale(1)",
            "translate(-5%, -5%) scale(1.2)",
            "translate(5%, -5%) scale(0.8)",
            "translate(0%, 0%) scale(1)"
          ]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-[20%] -right-[10%] w-[45vw] h-[45vw] rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] md:blur-[140px] opacity-50 dark:opacity-30 bg-gradient-to-r from-cyan-300 via-blue-300 to-teal-300 dark:from-cyan-500 dark:via-blue-500 dark:to-teal-400"
      />

      <motion.div
        animate={{
          transform: [
            "translate(0%, 0%) scale(1)",
            "translate(5%, -10%) scale(1.1)",
            "translate(-5%, 5%) scale(0.9)",
            "translate(0%, 0%) scale(1)"
          ]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-[20%] left-[20%] w-[60vw] h-[60vw] rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] md:blur-[150px] opacity-40 dark:opacity-20 bg-gradient-to-r from-fuchsia-400 via-pink-400 to-rose-400 dark:from-fuchsia-600 dark:via-pink-500 dark:to-rose-500"
      />
      
      {/* Stardust Particles (Floating Tech Nodes) */}
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={`star-${i}`}
          initial={{
            x: `${Math.random() * 100}vw`,
            y: `${Math.random() * 100}vh`,
            scale: Math.random() * 0.5 + 0.5,
            opacity: Math.random() * 0.5 + 0.2
          }}
          animate={{
            y: [`${Math.random() * 100}vh`, `${Math.random() * 100}vh`],
            opacity: [Math.random() * 0.3 + 0.1, Math.random() * 0.8 + 0.4, Math.random() * 0.3 + 0.1],
          }}
          transition={{
            duration: Math.random() * 20 + 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute w-1 h-1 bg-slate-400 dark:bg-white rounded-full shadow-[0_0_8px_rgba(100,100,150,0.4)] dark:shadow-[0_0_8px_rgba(255,255,255,0.8)]"
        />
      ))}
      
      {/* Noise overlay for premium texture */}
      <div className="absolute inset-0 opacity-[0.2] dark:opacity-[0.04] mix-blend-overlay pointer-events-none" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
      />
    </div>
  );
}
