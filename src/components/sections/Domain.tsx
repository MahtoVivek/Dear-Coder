import { motion } from "framer-motion";
import { Globe, Server, Cloud, Link2 } from "lucide-react";

export default function Domain() {
  return (
    <section className="py-24 bg-card/30" id="domain-hosting">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Domain & Hosting Support</h2>
            <p className="text-xl text-muted-foreground mb-8">
              We help you choose the best domain name and reliable hosting to establish your online presence. Get expert guidance and seamless deployment.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Domain Name Prices</h3>
                  <p className="text-muted-foreground">Starting from ₹499 – ₹999/year depending on extensions (.com, .in, .net, .org).</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <Server className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Fast & Secure Hosting</h3>
                  <p className="text-muted-foreground">We ensure your website loads fast and stays online 99.9% of the time.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center shrink-0">
                  <Cloud className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Free Consultation</h3>
                  <p className="text-muted-foreground">Unsure which domain suits you? Our experts will help you find the perfect match.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { ext: ".com", type: "Global Business", price: "₹999/yr" },
              { ext: ".in", type: "Indian Business", price: "₹599/yr" },
              { ext: ".net", type: "Network / Tech", price: "₹899/yr" },
              { ext: ".org", type: "Organizations", price: "₹999/yr" }
            ].map((domain, i) => (
              <div key={i} className="glass-card p-6 rounded-3xl text-center hover:border-primary/50 transition-colors border border-border">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Link2 className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-2xl font-black mb-1 font-sans tracking-tight">{domain.ext}</h4>
                <p className="text-sm text-muted-foreground mb-3">{domain.type}</p>
                <div className="text-lg font-bold text-primary">{domain.price}</div>
              </div>
            ))}
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
