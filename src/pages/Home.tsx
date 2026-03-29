import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import Pricing from "../components/sections/Pricing";
import Domain from "../components/sections/Domain";
import About from "../components/sections/About";
import Portfolio from "../components/sections/Portfolio";
import Testimonials from "../components/sections/Testimonials";
import Contact from "../components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Pricing />
      <Domain />
      <About />
      <Portfolio />
      <Testimonials />
      <Contact />
    </>
  );
}
