import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Laptop, Code, Terminal, MonitorSmartphone, Braces, Binary } from "lucide-react";

const floatingItems = [
  { Icon: Laptop, x: "15%", y: "20%", size: 120, duration: 25, delay: 0, blur: "blur-[8px]" },
  { Icon: Code, x: "85%", y: "15%", size: 80, duration: 20, delay: 2, blur: "blur-[4px]" },
  { Icon: Terminal, x: "75%", y: "70%", size: 100, duration: 30, delay: 5, blur: "blur-[12px]" },
  { Icon: MonitorSmartphone, x: "10%", y: "65%", size: 90, duration: 28, delay: 1, blur: "blur-[6px]" },
  { Icon: Braces, x: "45%", y: "10%", size: 70, duration: 22, delay: 4, blur: "blur-[10px]" },
  { Icon: Binary, x: "50%", y: "85%", size: 150, duration: 35, delay: 3, blur: "blur-[16px]" },
];

export default function BackgroundAnimation() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none select-none bg-slate-50 dark:bg-[#030014] transition-colors duration-500">
      
      {/* Subtle Base Gradient Orbs */}
      <motion.div
        animate={{
          transform: [
            "translate(0%, 0%) scale(1)",
            "translate(5%, -5%) scale(1.1)",
            "translate(-5%, 5%) scale(0.9)",
            "translate(0%, 0%) scale(1)"
          ]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[120px] opacity-30 dark:opacity-20 bg-blue-300 dark:bg-blue-900"
      />

      <motion.div
        animate={{
          transform: [
            "translate(0%, 0%) scale(1)",
            "translate(-5%, 5%) scale(1.2)",
            "translate(5%, -5%) scale(0.8)",
            "translate(0%, 0%) scale(1)"
          ]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute -bottom-[20%] -right-[10%] w-[60vw] h-[60vw] rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[120px] opacity-30 dark:opacity-20 bg-purple-300 dark:bg-purple-900"
      />

      {/* Floating Blurred Icons representing Laptops & Code */}
      {floatingItems.map(({ Icon, x, y, size, duration, delay, blur }, i) => (
        <motion.div
          key={`floating-icon-${i}`}
          initial={{ x: "-10vw", y, opacity: 0, rotate: 0 }}
          animate={{
            x: ["-10vw", "110vw"],
            y: [y, `calc(${y} + 10%)`, `calc(${y} - 10%)`, y],
            rotate: [0, 90, 180, 270, 360],
            opacity: [0, 0.4, 0.4, 0],
          }}
          transition={{
            duration: duration,
            repeat: Infinity,
            delay: delay,
            ease: "linear",
          }}
          className={`absolute text-slate-400 dark:text-slate-600 ${blur}`}
          style={{ top: y }}
        >
          <Icon size={size} strokeWidth={1} />
        </motion.div>
      ))}

      {/* Another layer of floating icons moving in opposite direction for depth */}
      {floatingItems.map(({ Icon, x, y, size, duration, delay, blur }, i) => (
        <motion.div
          key={`floating-icon-reverse-${i}`}
          initial={{ x: "110vw", y: `calc(100% - ${y})`, opacity: 0, rotate: 360 }}
          animate={{
            x: ["110vw", "-10vw"],
            y: [`calc(100% - ${y})`, `calc(90% - ${y})`, `calc(110% - ${y})`, `calc(100% - ${y})`],
            rotate: [360, 270, 180, 90, 0],
            opacity: [0, 0.3, 0.3, 0],
          }}
          transition={{
            duration: duration * 1.2,
            repeat: Infinity,
            delay: delay + 5,
            ease: "linear",
          }}
          className={`absolute text-blue-300/40 dark:text-blue-500/20 ${blur}`}
          style={{ top: `calc(100% - ${y})` }}
        >
          <Icon size={size * 0.8} strokeWidth={1.5} />
        </motion.div>
      ))}

      {/* Subtle Noise Texture for a premium feel */}
      <div className="absolute inset-0 opacity-[0.4] dark:opacity-[0.03] mix-blend-overlay pointer-events-none" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
      />
    </div>
  );
}
