
import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EventsSection from "@/components/EventsSection";
import SponsorsSection from "@/components/SponsorsSection";
import OrganizersSection from "@/components/OrganizersSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

const Index = () => {
  useEffect(() => {
    // Reveal animation for elements as they scroll into view
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

    // Random movement for floating geometric shapes
    const shapes = document.querySelectorAll(".geometric-shape");
    shapes.forEach(shape => {
      const randomX = Math.random() * 20 - 10; // Random value between -10 and 10
      const randomY = Math.random() * 20 - 10;
      const randomDelay = Math.random() * 5;
      const randomDuration = 5 + Math.random() * 5;
      
      shape.animate([
        { transform: `translate(0, 0)` },
        { transform: `translate(${randomX}px, ${randomY}px)` },
        { transform: `translate(0, 0)` }
      ], {
        duration: randomDuration * 1000,
        iterations: Infinity,
        direction: 'alternate',
        easing: 'ease-in-out',
        delay: randomDelay * 1000
      });
    });

    return () => {
      document.querySelectorAll(".reveal").forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="overflow-x-hidden">
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
