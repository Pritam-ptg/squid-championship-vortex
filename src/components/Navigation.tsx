
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Events", href: "#events" },
    { name: "Sponsors", href: "#sponsors" },
    { name: "Organizers", href: "#organizers" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#footer" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        isScrolled 
          ? "bg-darkAccent/80 backdrop-blur-md shadow-md" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#" className="text-squidPink font-heading font-bold text-2xl">
          SQUID<span className="text-squidGreen">CHAMP</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-medium text-white opacity-80 hover:opacity-100 hover:text-squidPink transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#register"
            className="bg-squidPink text-white px-6 py-2 rounded hover:bg-squidPink/80 transition-all duration-300 animate-pulse-glow"
          >
            Register
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-darkAccent/90 backdrop-blur-lg">
          <div className="flex flex-col py-4 space-y-4 px-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-medium text-white py-2 opacity-80 hover:opacity-100 hover:text-squidPink transition-all duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#register"
              className="bg-squidPink text-white px-6 py-2 rounded hover:bg-squidPink/80 transition-all duration-300 text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Register
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navigation;
