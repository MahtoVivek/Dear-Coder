import { Switch, Route, useLocation } from "wouter";
import { useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import FloatingActions from "./components/FloatingActions";
import Preloader from "./components/Preloader";
import AiChatAssistant from "./components/AiChatAssistant";
// Pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import DomainHosting from "./pages/DomainHosting";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import ThankYou from "./pages/ThankYou";

// Service detail pages
import WebDevelopment from "./pages/services/WebDevelopment";
import WebDesign from "./pages/services/WebDesign";
import AppDevelopment from "./pages/services/AppDevelopment";
import AIIntegration from "./pages/services/AIIntegration";
import SEOOptimization from "./pages/services/SEOOptimization";
import MaintenanceSupport from "./pages/services/MaintenanceSupport";

function App() {
  const [location] = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // Disable inspect element
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevent F12
      if (e.key === 'F12') {
        e.preventDefault();
      }
      // Prevent Ctrl+Shift+I / Ctrl+Shift+J / Ctrl+Shift+C
      if (e.ctrlKey && e.shiftKey && ['I', 'i', 'J', 'j', 'C', 'c'].includes(e.key)) {
        e.preventDefault();
      }
      // Prevent Ctrl+U (View Source)
      if (e.ctrlKey && (e.key === 'U' || e.key === 'u')) {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
      <Preloader />
      <Navbar />
      <main className="min-h-screen pt-20">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/domain-hosting" component={DomainHosting} />
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/terms-conditions" component={TermsConditions} />
          <Route path="/thank-you" component={ThankYou} />
          
          <Route path="/service-web-development" component={WebDevelopment} />
          <Route path="/service-web-design" component={WebDesign} />
          <Route path="/service-app-development" component={AppDevelopment} />
          <Route path="/service-ai-integration" component={AIIntegration} />
          <Route path="/service-seo-optimization" component={SEOOptimization} />
          <Route path="/service-maintenance-support" component={MaintenanceSupport} />
          
          {/* 404 Route */}
          <Route>
            <div className="flex items-center justify-center min-h-[60vh] text-center">
              <div>
                <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
                <p className="text-muted-foreground mb-8">The page you are looking for does not exist.</p>
                <a href="/" className="px-6 py-3 rounded-full bg-gradient-primary text-white font-bold transition-transform hover:scale-105 inline-block">
                  Back to Home
                </a>
              </div>
            </div>
          </Route>
        </Switch>
      </main>
      <Footer />
      <AiChatAssistant />
      <FloatingActions />
    </>
  );
}

export default App;
