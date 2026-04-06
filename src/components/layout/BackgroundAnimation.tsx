import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const BackgroundAnimation = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none select-none bg-background">
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

      {/* Floating Orbs - More intense and larger */}
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
        className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary/20 dark:bg-primary/30 rounded-full blur-[100px]"
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
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/20 dark:bg-accent/30 rounded-full blur-[120px]"
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
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-pink-500/10 dark:bg-pink-500/20 rounded-full blur-[150px]"
      />

      {/* Modern Grid Pattern with Pulse */}
      <motion.div 
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_60%,transparent_100%)] dark:bg-[linear-gradient(to_right,#ffffff0f_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0f_1px,transparent_1px)]"
      />

      {/* Floating Tech Particles - Multi-colored and more numerous */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            opacity: Math.random() * 0.5 + 0.1,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            y: ["0%", "100%"],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: Math.random() * 15 + 15,
            repeat: Infinity,
            delay: Math.random() * 10,
            ease: "linear",
          }}
          className={`absolute w-1 h-1 rounded-full shadow-[0_0_12px_rgba(255,255,255,0.8)] ${
            i % 3 === 0 ? "bg-primary" : i % 3 === 1 ? "bg-accent" : "bg-white"
          }`}
        />
      ))}

      {/* Noise Texture for that premium look */}
      <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.07] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150 mix-blend-overlay" />
      
      {/* Subtle Scan Lines */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_4px,3px_100%] opacity-20 dark:opacity-30" />
    </div>
  );
};

export default BackgroundAnimation;
