import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Link } from "wouter";

const categories = ["All", "Web Design", "E-commerce", "Landing Page", "Business Site", "AI Integration", "Mobile App"];

const projects = [
  {
    id: 1,
    title: "Fashion E-commerce",
    category: "E-commerce",
    image: "/images/port1.png",
  },
  {
    id: 2,
    title: "FitLife Tracker App",
    category: "Mobile App",
    image: "/images/port2.png",
  },
  {
    id: 3,
    title: "AI Analytics Dashboard",
    category: "AI Integration",
    image: "/images/port3.png",
  },
  {
    id: 4,
    title: "Corporate Law Firm",
    category: "Business Site",
    image: "/images/portfolio_law.png",
  },
  {
    id: 5,
    title: "SaaS Landing Page",
    category: "Landing Page",
    image: "/images/portfolio_saas.png",
  },
  {
    id: 6,
    title: "Creative Agency",
    category: "Web Design",
    image: "/images/portfolio_agency.png",
  }
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section className="py-24 bg-card/30" id="portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Latest Work</h2>
          <p className="text-xl text-muted-foreground">
            Explore some of our recent projects delivering high-quality digital solutions to our clients.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-primary text-white shadow-lg shadow-primary/30"
                  : "bg-background border border-border text-muted-foreground hover:text-foreground hover:border-primary/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group rounded-[2rem] overflow-hidden glass-card border border-border"
              >
                <div className="relative aspect-video overflow-hidden bg-muted">
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex flex-col items-center justify-center gap-4">
                    <Link href={`/contact?service=${project.category}`} className="w-12 h-12 rounded-full bg-primary flex items-center justify-center translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      <ExternalLink className="w-6 h-6 text-white" />
                    </Link>
                  </div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-primary font-medium mb-2">{project.category}</div>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
