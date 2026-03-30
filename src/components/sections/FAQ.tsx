import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What exactly is included in the ₹1,399 Landing Page website?",
    answer: "Our Starter ₹1,399 plan includes a fully responsive, custom-designed single-page website. It covers your basic business information, services, contact details, and a contact form. Please note that the domain name price (usually ₹499-₹999/yr) is extra."
  },
  {
    question: "I misspelled your name as Dear Codr or Dearcode. Are you the same agency?",
    answer: "Yes! Whether you search for Dear Coder, Dear Codr, Dearcode, or even Dear Cooder, you've found the right team. We are the premier affordable digital solutions agency for startups."
  },
  {
    question: "Do you offer complete Web and App Development?",
    answer: "Absolutely. Beyond basic landing pages, we build complex full-stack web applications, e-commerce stores, and cross-platform mobile apps for iOS and Android using modern technologies like React, Node.js, and Flutter."
  },
  {
    question: "How long does it take to delivery a basic website?",
    answer: "A standard landing page or basic portfolio website takes around 3 to 5 business days to design, develop, and deploy. Custom web apps and mobile apps take longer depending on their complexity."
  },
  {
    question: "Do you provide hosting and maintenance after the website is live?",
    answer: "Yes, we offer ongoing maintenance, SEO optimization, and premium hosting services to ensure your website remains fast, secure, and up-to-date at all times."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden" id="faq">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Got questions? We've got answers. If you don't see your question here, feel free to reach out.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                activeIndex === index 
                  ? "border-primary/50 bg-primary/5 shadow-[0_0_15px_rgba(var(--primary),0.1)]" 
                  : "border-border bg-card/30 hover:border-primary/30"
              }`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="flex items-center justify-between w-full px-6 py-5 text-left focus:outline-none"
              >
                <span className="font-semibold text-lg md:text-xl pr-4">{faq.question}</span>
                <div 
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${
                    activeIndex === index ? "bg-primary text-white rotate-180" : "bg-muted/50 text-muted-foreground"
                  }`}
                >
                  <ChevronDown className="w-5 h-5" />
                </div>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-5 text-muted-foreground text-base md:text-lg leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
