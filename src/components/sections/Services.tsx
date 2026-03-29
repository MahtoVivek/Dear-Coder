import { motion } from "framer-motion";
import { Link } from "wouter";
import { Laptop, Palette, Smartphone, Bot, TrendingUp, Wrench } from "lucide-react";

const services = [
  {
    title: "Web Development",
    description: "Custom, fast, and responsive websites tailored to your business needs.",
    icon: Laptop,
    path: "/service-web-development"
  },
  {
    title: "Web Design",
    description: "Beautiful, modern UI/UX designs that captivate and convert visitors.",
    icon: Palette,
    path: "/service-web-design"
  },
  {
    title: "App Development",
    description: "High-performance mobile applications for iOS and Android.",
    icon: Smartphone,
    path: "/service-app-development"
  },
  {
    title: "AI Integration",
    description: "Smart AI solutions and chatbots to automate your business processes.",
    icon: Bot,
    path: "/service-ai-integration"
  },
  {
    title: "SEO Optimization",
    description: "Data-driven SEO strategies to rank higher on search engines.",
    icon: TrendingUp,
    path: "/service-seo-optimization"
  },
  {
    title: "Maintenance & Support",
    description: "Reliable website maintenance to keep your digital presence secure.",
    icon: Wrench,
    path: "/service-maintenance-support"
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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Services() {
  return (
    <section className="py-24 bg-card/30" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to build, launch, and grow your digital presence.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Link href={service.path}>
                <div className="group h-full glass-card p-8 rounded-3xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-border/50 hover:border-primary/50 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
