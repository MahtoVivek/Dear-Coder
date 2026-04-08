import Hero from "../components/sections/Hero";
import Features from "../components/sections/Features";
import Services from "../components/sections/Services";
import Pricing from "../components/sections/Pricing";
import Domain from "../components/sections/Domain";
import About from "../components/sections/About";
import Portfolio from "../components/sections/Portfolio";
// import Testimonials from "../components/sections/Testimonials";
import FAQ from "../components/sections/FAQ";
import Contact from "../components/sections/Contact";
import ScrollReveal from "../components/layout/ScrollReveal";

export default function Home() {
  return (
    <>
      <ScrollReveal direction="down" duration={0.8}>
        <Hero />
      </ScrollReveal>
      
      <ScrollReveal direction="up" delay={0.1}>
        <Features />
      </ScrollReveal>
      
      <ScrollReveal direction="up" delay={0.1}>
        <Services />
      </ScrollReveal>
      
      <ScrollReveal direction="up" delay={0.1}>
        <Pricing />
      </ScrollReveal>
      
      <ScrollReveal direction="right" delay={0.1}>
        <Domain />
      </ScrollReveal>
      
      <ScrollReveal direction="left" delay={0.1}>
        <About />
      </ScrollReveal>
      
      <ScrollReveal direction="up" delay={0.1}>
        <Portfolio />
      </ScrollReveal>
      
      {/* <ScrollReveal direction="up" delay={0.1}>
        <Testimonials />
      </ScrollReveal> */}
      
      <ScrollReveal direction="up" delay={0.1}>
        <FAQ />
      </ScrollReveal>
      
      <ScrollReveal direction="up" delay={0.1}>
        <Contact />
      </ScrollReveal>
    </>
  );
}
