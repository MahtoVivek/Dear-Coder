import { motion } from "framer-motion";
import { Rocket, ShieldCheck, Code2, Headset, Search, Layers } from "lucide-react";

const features = [
  {
    title: "Lightning Fast",
    description: "Built for speed with modern technologies to ensure instant loading times and smooth user experiences.",
    icon: Rocket,
    color: "from-blue-500/20 to-cyan-500/20",
    textColor: "text-cyan-500"
  },
  {
    title: "Secure by Default",
    description: "Enterprise-grade security protocols and best practices to keep your data and users safe.",
    icon: ShieldCheck,
    color: "from-emerald-500/20 to-green-500/20",
    textColor: "text-emerald-500"
  },
  {
    title: "Modern Tech Stack",
    description: "Leveraging the latest frameworks like React and Next.js for scalable, future-proof applications.",
    icon: Code2,
    color: "from-purple-500/20 to-pink-500/20",
    textColor: "text-purple-500"
  },
  {
    title: "24/7 Support",
    description: "Dedicated technical support team available around the clock to resolve your issues promptly.",
    icon: Headset,
    color: "from-orange-500/20 to-red-500/20",
    textColor: "text-orange-500"
  },
  {
    title: "SEO Optimized",
    description: "Built-in technical SEO optimization helps your website rank higher in search engine results.",
    icon: Search,
    color: "from-yellow-500/20 to-amber-500/20",
    textColor: "text-yellow-500"
  },
  {
    title: "Scalable Architecture",
    description: "Cloud-native infrastructure designed to grow seamlessly as your business traffic increases.",
    icon: Layers,
    color: "from-indigo-500/20 to-violet-500/20",
    textColor: "text-indigo-500"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 10 } }
};

export default function Features() {
  return (
    <section className="py-24 relative overflow-hidden" id="features">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 mix-blend-screen pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium text-sm tracking-wide"
          >
            WHY CHOOSE US
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Experience the Difference</h2>
          <p className="text-xl text-muted-foreground">
            We combine premium design, cutting-edge technology, and unmatched performance.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants} className="h-full">
              <div className="group h-full glass-card p-8 rounded-[2rem] transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden bg-card/40 border border-white/10 dark:border-white/5 cursor-pointer">
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out`} />
                
                <div className="relative z-10 h-full flex flex-col">
                  <div className={`w-16 h-16 rounded-2xl bg-background/50 flex items-center justify-center mb-8 border border-white/10 shadow-inner group-hover:scale-110 transition-transform duration-300 ease-out backdrop-blur-md`}>
                    <feature.icon className={`w-8 h-8 ${feature.textColor}`} />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-white transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-[1.05rem] leading-relaxed group-hover:text-white/80 transition-colors duration-300 flex-grow">
                    {feature.description}
                  </p>

                  <div className="mt-6 flex items-center text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white/90">
                    Learn more <span className="ml-2">→</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
