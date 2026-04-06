import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Laptop, Code, Terminal, Cpu, Globe, Database, Cpu as Zap } from "lucide-react";

const BackgroundIcons = [
  { Icon: Laptop, x: "10%", y: "20%", size: 40, duration: 25 },
  { Icon: Code, x: "85%", y: "15%", size: 32, duration: 20 },
  { Icon: Terminal, x: "70%", y: "60%", size: 36, duration: 30 },
  { Icon: Globe, x: "15%", y: "75%", size: 44, duration: 28 },
  { Icon: Database, x: "40%", y: "10%", size: 28, duration: 22 },
  { Icon: Zap, x: "80%", y: "85%", size: 34, duration: 26 },
  { Icon: Terminal, x: "50%", y: "40%", size: 30, duration: 24, opacity: 0.05 },
];

const BackgroundAnimation = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none select-none">
      {/* Dynamic Animated Gradient Background */}
      <motion.div 
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 opacity-[0.4] dark:opacity-[0.6] bg-[radial-gradient(circle_at_20%_20%,rgba(168,85,247,0.15),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.15),transparent_40%),radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.1),transparent_50%)] bg-[length:200%_200%]"
      />

      {/* Floating Orbs - Vibrant and Visible */}
      <motion.div
        animate={{
          x: [0, 150, 0, -150, 0],
          y: [0, -100, 100, -100, 0],
          scale: [1, 1.3, 1, 0.7, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/30 dark:bg-primary/40 rounded-full blur-[120px]"
      />
      
      <motion.div
        animate={{
          x: [0, -180, 180, -180, 0],
          y: [0, 120, -120, 120, 0],
          scale: [1, 0.8, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-accent/30 dark:bg-accent/40 rounded-full blur-[140px]"
      />

      <motion.div
        animate={{
          x: [0, 200, -200, 0],
          y: [0, 50, -50, 0],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-pink-500/15 dark:bg-pink-500/25 rounded-full blur-[180px]"
      />

      {/* Animated Scan Lines & Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.25] dark:opacity-[0.3]" 
        style={{ backgroundImage: "linear-gradient(to right, #8080801a 1px, transparent 1px), linear-gradient(to bottom, #8080801a 1px, transparent 1px)", backgroundSize: "50px 50px" }} 
      />

      {/* Floating Coding & Tech Icons with Glowing Effect */}
      {BackgroundIcons.map(({ Icon, x, y, size, duration, opacity = 0.2 }, i) => (
        <motion.div
          key={`icon-${i}`}
          initial={{ x, y, opacity: 0, scale: 0.5 }}
          animate={{
            y: [y, `calc(${y} - 20px)`, y],
            rotate: [0, 10, -10, 0],
            opacity: [opacity, opacity * 1.5, opacity],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute pointer-events-none text-primary/40 dark:text-primary/50 filter drop-shadow-[0_0_8px_rgba(var(--primary),0.6)]"
          style={{ left: x, top: y }}
        >
          <Icon size={size} strokeWidth={1.2} />
        </motion.div>
      ))}

      {/* Floating Tech Particles */}
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            opacity: Math.random() * 0.5 + 0.2,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            y: ["0%", "100%"],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 15 + 15,
            repeat: Infinity,
            delay: Math.random() * 10,
            ease: "linear",
          }}
          className={`absolute w-1.5 h-1.5 rounded-full shadow-[0_0_12px_rgba(255,255,255,1)] ${
            i % 3 === 0 ? "bg-primary" : i % 3 === 1 ? "bg-accent" : "bg-white"
          }`}
        />
      ))}

      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-[0.05] dark:opacity-[0.08] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150 mix-blend-overlay" />
      
      {/* Subtle Scan Lines */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_4px,3px_100%] opacity-20 dark:opacity-30" />
    </div>
  );
};

export default BackgroundAnimation;
