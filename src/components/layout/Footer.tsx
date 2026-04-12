import { Link } from "wouter";
import { CodeXml, Instagram, Facebook, Twitter, Github, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="text-xl font-bold font-mono text-primary group-hover:scale-110 transition-transform duration-300">
                &lt;/&gt;
              </span>
              <span className="text-xl font-bold font-heading tracking-tight text-foreground/90">
                Dear Coder
              </span>
            </Link>
            <p className="text-muted-foreground mt-4">
              Affordable Digital Solutions for Small Businesses & Startups. We build websites, apps, and AI-powered solutions.
            </p>
            <div className="flex gap-4 pt-4">
              <a href="https://www.instagram.com/dear.coder.in" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/share/17N5MsC1ML/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://x.com/DearCoder25207" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://github.com/MahtoVivek" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Our Services</Link></li>
              <li><Link href="/pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing</Link></li>
              <li><Link href="/portfolio" className="text-muted-foreground hover:text-primary transition-colors">Portfolio</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              <li><Link href="/service-web-development" className="text-muted-foreground hover:text-primary transition-colors">Web Development</Link></li>
              <li><Link href="/service-web-design" className="text-muted-foreground hover:text-primary transition-colors">Web Design</Link></li>
              <li><Link href="/service-app-development" className="text-muted-foreground hover:text-primary transition-colors">App Development</Link></li>
              <li><Link href="/service-ai-integration" className="text-muted-foreground hover:text-primary transition-colors">AI Integration</Link></li>
              <li><Link href="/service-seo-optimization" className="text-muted-foreground hover:text-primary transition-colors">SEO Optimization</Link></li>
              <li><Link href="/service-maintenance-support" className="text-muted-foreground hover:text-primary transition-colors">Maintenance & Support</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
                <span className="text-muted-foreground">India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+919472762864" className="text-muted-foreground hover:text-primary transition-colors">
                  +91 9472762864
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:dearcoder.contact@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  dearcoder.contact@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Dear Coder. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms-conditions" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
