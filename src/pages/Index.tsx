import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { personalConfig } from "@/config/personal";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <section id="projects">
          <Projects />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      
      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-100 bg-slate-50">
        <div className="container mx-auto text-center">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} {personalConfig.fullName}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
