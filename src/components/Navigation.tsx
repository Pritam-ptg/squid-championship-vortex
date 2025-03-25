
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", href: "#" },
    { name: "ABOUT", href: "#about" },
    { name: "EVENTS", href: "#events" },
    { name: "SPONSORS", href: "#sponsors" },
    { name: "TEAM", href: "#organizers" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 font-squid tracking-wider",
        isScrolled ? "py-3 bg-dark/90 backdrop-blur-md shadow-md" : "py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="text-white font-bold text-2xl">
            <span className="text-squidPink squid-glow">SQUID</span> CHAMPIONSHIP
          </a>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-white/80 hover:text-squidPink transition-colors duration-300 text-sm"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#register"
              className="bg-squidPink text-white px-5 py-2 rounded-md hover:bg-squidPink/90 transition-colors duration-300 text-sm"
            >
              REGISTER NOW
            </a>
          </div>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile navigation */}
      <div
        className={cn(
          "fixed inset-0 bg-dark z-40 flex flex-col p-10 md:hidden transition-transform duration-300 ease-in-out pt-24",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col space-y-6">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-white/80 hover:text-squidPink transition-colors duration-300 text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#register"
            className="bg-squidPink text-white px-5 py-3 rounded-md hover:bg-squidPink/90 transition-colors duration-300 text-center mt-4"
            onClick={() => setIsMenuOpen(false)}
          >
            REGISTER NOW
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
