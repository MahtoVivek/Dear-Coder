import { motion } from "framer-motion";
import { Link } from "wouter";
import { CheckCircle2, ChevronRight, ArrowRight } from "lucide-react";

interface ServiceLayoutProps {
  title: string;
  description: string;
  icon: React.ElementType;
  includes: string[];
}

export default function ServiceLayout({ title, description, icon: Icon, includes }: ServiceLayoutProps) {
  return (
    <div className="pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center text-sm font-medium text-muted-foreground mb-12">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-foreground">{title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center mb-8 border border-primary/20">
              <Icon className="w-10 h-10 text-primary" />
            </div>
            
            <h1 className="text-5xl font-bold mb-6 tracking-tight">{title}</h1>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              {description}
            </p>

            <Link
              href={`/contact?service=${title}`}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-primary text-white font-bold text-lg hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(var(--primary),0.5)] transition-all"
            >
              Get a Free Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card p-10 rounded-3xl border border-border"
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-primary" />
              What's Included
            </h3>
            <ul className="space-y-4">
              {includes.map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-colors pointer-events-none"
                >
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0 shadow-[0_0_10px_rgba(var(--primary),1)]" />
                  <span className="text-lg font-medium">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
