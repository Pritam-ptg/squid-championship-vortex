
import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EventsSection from "@/components/EventsSection";
import SponsorsSection from "@/components/SponsorsSection";
import OrganizersSection from "@/components/OrganizersSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import Doodles from "@/components/Doodles";

const Index = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll(".reveal").forEach((el) => {
      observer.observe(el);
    });

    // Add hover animations to interactive elements
    const addHoverEvents = () => {
      document.querySelectorAll(".hover-animate").forEach((el) => {
        el.addEventListener("mouseenter", () => {
          el.classList.add("animate-travel-down");
        });
        
        el.addEventListener("mouseleave", () => {
          setTimeout(() => {
            el.classList.remove("animate-travel-down");
          }, 500);
        });
      });
    };

    addHoverEvents();

    return () => {
      document.querySelectorAll(".reveal").forEach((el) => {
        observer.unobserve(el);
      });
      
      // Clean up hover event listeners
      document.querySelectorAll(".hover-animate").forEach((el) => {
        el.removeEventListener("mouseenter", () => {});
        el.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  return (
    <div className="theme-enhanced bg-gradient-to-br from-squidDarkBlue via-dark to-squidDarkBlue text-white min-h-screen overflow-x-hidden">
      {/* Ambient background elements */}
      <div className="fixed inset-0 bg-grid-pattern opacity-5 z-0"></div>
      <div className="fixed top-0 right-0 w-1/3 h-1/3 bg-squidPink/10 rounded-full filter blur-[120px] animate-pulse-slow z-0"></div>
      <div className="fixed bottom-0 left-0 w-1/3 h-1/3 bg-squidGreen/10 rounded-full filter blur-[120px] animate-pulse-slow z-0"></div>
      
      {/* Interactive floating light */}
      <div className="fixed w-24 h-24 bg-squidPink/20 rounded-full filter blur-xl animate-glow-pulse z-0 pointer-events-none" 
           style={{ 
             left: 'calc(50% - 12px)', 
             top: 'calc(50% - 12px)', 
             transition: 'transform 0.2s ease-out',
             transform: 'translate(-50%, -50%)'
           }}>
      </div>
      
      <Doodles />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <EventsSection />
      <SponsorsSection />
      <OrganizersSection />
      <FaqSection />
      <Footer />
    </div>
  );
};

export default Index;
