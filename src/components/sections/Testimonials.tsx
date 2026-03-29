import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "CEO, TechNova Solutions",
    text: "Dear Coder team built our startup website within a week. The design was extremely premium and they delivered on all promises. Affordable and professional!",
    initials: "RS",
  },
  {
    name: "Priya Singh",
    role: "Founder, GreenLeaf Organics",
    text: "We needed an e-commerce platform that was fast and mobile-friendly. Their Starter plan was perfect for our budget and the end result was fantastic.",
    initials: "PS",
  },
  {
    name: "Amit Verma",
    role: "Director, Apex Consulting",
    text: "The AI Integration service completely changed how we handle customer support. A highly recommended agency for small businesses looking to scale.",
    initials: "AV",
  }
];

export default function Testimonials() {
  return (
    <section className="py-24" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Client Success Stories</h2>
          <p className="text-xl text-muted-foreground">
            Don't just take our word for it — hear from the businesses we've helped grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((test, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 rounded-3xl relative border border-border"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-primary/10" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              
              <p className="text-lg text-foreground mb-8 leading-relaxed italic">
                "{test.text}"
              </p>
              
              <div className="flex items-center gap-4 border-t border-border pt-6">
                <div className="w-14 h-14 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-xl">
                  {test.initials}
                </div>
                <div>
                  <h4 className="font-bold text-lg">{test.name}</h4>
                  <p className="text-sm text-muted-foreground">{test.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
