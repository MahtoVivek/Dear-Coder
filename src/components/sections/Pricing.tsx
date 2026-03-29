import { motion } from "framer-motion";
import { Link } from "wouter";
import { CheckCircle2 } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "₹1,399",
    subtext: "+ Domain",
    badge: "🔥 Special Offer",
    features: [
      "1 Landing Page",
      "Mobile Friendly",
      "Basic SEO",
      "Fast Delivery"
    ],
    popular: false
  },
  {
    name: "Basic",
    price: "₹2,399",
    subtext: "One-time cost",
    badge: "",
    features: [
      "1-Page Website",
      "Mobile Friendly",
      "Basic SEO",
      "Basic Contact Form"
    ],
    popular: false
  },
  {
    name: "Standard",
    price: "₹5,399",
    subtext: "One-time cost",
    badge: "⭐ Most Popular",
    features: [
      "3–5 Pages",
      "Speed Optimised",
      "Full SEO Setup",
      "Advanced Contact Form"
    ],
    popular: true
  },
  {
    name: "Premium",
    price: "₹9,599",
    subtext: "One-time cost",
    badge: "",
    features: [
      "5–10 Pages",
      "Admin Panel (CMS)",
      "Advanced SEO",
      "AI Chatbot"
    ],
    popular: false
  }
];

export default function Pricing() {
  return (
    <section className="py-24" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Transparent Pricing</h2>
          <p className="text-xl text-muted-foreground">
            Affordable web solutions without compromising quality. Choose the perfect plan for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative h-full flex flex-col rounded-3xl p-8 transition-transform hover:-translate-y-2 glass-card ${
                plan.popular 
                  ? "border-primary shadow-[0_0_30px_rgba(var(--primary),0.2)] md:-mt-4 md:mb-4" 
                  : "border-border"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-primary text-white text-sm font-bold py-1 px-4 rounded-full shadow-lg whitespace-nowrap">
                  {plan.badge}
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black">{plan.price}</span>
                  {plan.subtext && <span className="text-muted-foreground text-sm font-medium">{plan.subtext}</span>}
                </div>
              </div>

              <div className="space-y-4 flex-1">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-foreground font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className={`mt-8 px-6 py-4 rounded-full text-center font-bold text-lg transition-all w-full ${
                  plan.popular
                    ? "bg-gradient-primary text-white hover:scale-105 hover:shadow-lg"
                    : "border-2 border-border hover:border-primary bg-card text-foreground"
                }`}
              >
                Choose Plan
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
