import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageSquareMore, Send } from "lucide-react";
import { useEffect, useState } from "react";

export default function Contact() {
  const [params, setParams] = useState(new URLSearchParams());
  const [nextUrl, setNextUrl] = useState("https://dearcoder.in/thank-you");
  
  useEffect(() => {
    setParams(new URLSearchParams(window.location.search));
    setNextUrl(window.location.origin + "/thank-you");
  }, []);

  const prefilledService = params.get("service") || "";

  return (
    <section className="py-24 bg-card/50" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Build Something Great Together</h2>
            <p className="text-xl text-muted-foreground mb-12">
              Have a project in mind? Contact us today to get a free quote, and we'll get back to you within 24 hours.
            </p>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Email Us</h3>
                  <a href="mailto:dearcoder.contact@gmail.com" className="text-muted-foreground hover:text-primary transition-colors text-lg">
                    dearcoder.contact@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <Phone className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Call Us</h3>
                  <a href="tel:+919472762864" className="text-muted-foreground hover:text-primary transition-colors text-lg">
                    +91 9472762864
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-7 h-7 text-green-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Our Location</h3>
                  <p className="text-muted-foreground text-lg">India</p>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/919472762864"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#25D366] text-white font-bold text-lg hover:bg-[#128C7E] transition-colors shadow-lg"
            >
              <MessageSquareMore className="w-6 h-6" />
              Chat on WhatsApp
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card p-8 md:p-10 rounded-[2rem] border border-border/50 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            
            <form action="https://formsubmit.co/dearcoder.contact@gmail.com" method="POST" className="relative z-10 space-y-6">
              <input type="hidden" name="_subject" value="New Contact from Dear Coder Website" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value={nextUrl} />
              <input type="hidden" name="_template" value="table" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Full Name <span className="text-red-500">*</span></label>
                  <input type="text" id="name" name="name" required className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email Address <span className="text-red-500">*</span></label>
                  <input type="email" id="email" name="email" required className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="john@example.com" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
                <div className="flex">
                  <span className="inline-flex items-center px-4 rounded-l-xl border border-r-0 border-border bg-muted text-muted-foreground font-bold">
                    +91
                  </span>
                  <input type="tel" id="phone" name="phone" className="w-full bg-background border border-border rounded-r-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="98765 43210" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-medium">Service Interested In</label>
                  <select id="service" name="service" defaultValue={prefilledService} className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none cursor-pointer">
                    <option value="" disabled>Select a Service...</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Web Design">Web Design</option>
                    <option value="App Development">App Development</option>
                    <option value="AI Integration">AI Integration</option>
                    <option value="SEO Optimization">SEO Optimization</option>
                    <option value="Maintenance & Support">Maintenance & Support</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="plan" className="text-sm font-medium">Pricing Plan</label>
                  <select id="plan" name="plan" className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none cursor-pointer">
                    <option value="" disabled selected>Select a Plan...</option>
                    <option value="Starter (₹1,399)">Starter (₹1,399)</option>
                    <option value="Basic (₹2,399)">Basic (₹2,399)</option>
                    <option value="Standard (₹5,399)">Standard (₹5,399)</option>
                    <option value="Premium (₹9,599)">Premium (₹9,599)</option>
                    <option value="Custom">Custom Quote</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message <span className="text-red-500">*</span></label>
                <textarea id="message" name="message" required minLength={10} rows={5} className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none" placeholder="Tell us about your project..."></textarea>
              </div>

              <button type="submit" className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-primary text-white font-bold text-lg hover:shadow-lg transition-transform hover:scale-[1.02]">
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
