import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, Users, Award } from "lucide-react";

export default function About() {
  return (
    <section className="py-24" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-primary rounded-[2rem] blur-xl opacity-20 transform -rotate-3"></div>
            <img 
              src="/images/about.png" 
              alt="Dear Coder Team" 
              className="relative z-10 w-full h-auto object-cover rounded-[2rem] border border-border/50 shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Who is Dear Coder?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              We are a passionate team of developers and designers committed to delivering Affordable, Professional, and Fast digital solutions for small businesses and startups.
            </p>
            
            <div className="space-y-4 mb-10">
              {[
                "Affordable Pricing for Small Businesses",
                "Professional & High-Quality Delivery",
                "Fast Turnaround Times",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                  <span className="text-lg font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center">
                <div className="flex justify-center mb-2"><TrendingUp className="w-8 h-8 text-primary" /></div>
                <div className="text-3xl font-black mb-1">50+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center border-l border-r border-border">
                <div className="flex justify-center mb-2"><Users className="w-8 h-8 text-accent" /></div>
                <div className="text-3xl font-black mb-1">30+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2"><Award className="w-8 h-8 text-green-500" /></div>
                <div className="text-3xl font-black mb-1">2+</div>
                <div className="text-sm text-muted-foreground">Years Exp.</div>
              </div>
            </div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
}
