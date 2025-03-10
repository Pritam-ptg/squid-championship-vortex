
import React, { useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  useEffect(() => {
    const letters = document.querySelectorAll('.hero-title span');
    
    letters.forEach((letter, index) => {
      setTimeout(() => {
        letter.classList.add('opacity-100', 'translate-y-0');
      }, 100 * index);
    });
    
    // Add the reveal class to elements when they are in view
    const revealElements = document.querySelectorAll('.reveal');
    const revealElementsInView = () => {
      revealElements.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', revealElementsInView);
    revealElementsInView();
    
    return () => window.removeEventListener('scroll', revealElementsInView);
  }, []);

  const title = "SQUID CHAMPIONSHIP";
  
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-darkAccent via-dark to-dark z-0">
        {/* Animated circles */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-squidPink/20 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-squidGreen/20 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-2/3 left-1/3 w-80 h-80 bg-championGold/10 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxMTEiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzBoLTZWMGg2djMwem0wIDBoMzB2NkgzNnYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="mb-6 inline-block">
          <span className="px-3 py-1 text-xs md:text-sm bg-squidPink/20 text-white rounded-full border border-squidPink/40">
            REVA UNIVERSITY PRESENTS
          </span>
        </div>
        
        <h1 className="hero-title relative text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-4 md:mb-6">
          {title.split('').map((letter, index) => (
            <span
              key={index}
              className={cn(
                "inline-block transition-all duration-700 opacity-0 translate-y-10",
                letter === ' ' ? 'mx-2' : ''
              )}
            >
              {letter}
            </span>
          ))}
        </h1>
        
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8 reveal">
          Where only the <span className="text-squidPink font-semibold">fearless</span> survive and 
          <span className="text-squidGreen font-semibold"> champions</span> are born
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 reveal">
          <a
            href="#events"
            className="bg-squidPink hover:bg-squidPink/80 text-white px-8 py-3 rounded-md transition-all duration-300 font-medium min-w-36 sm:min-w-40 animate-pulse-glow"
          >
            Explore Events
          </a>
          <a
            href="#register"
            className="bg-transparent border-2 border-squidGreen text-squidGreen hover:bg-squidGreen/10 px-8 py-3 rounded-md transition-all duration-300 font-medium min-w-36 sm:min-w-40"
          >
            Register Now
          </a>
        </div>
        
        <div className="mt-12 md:mt-24 reveal">
          <div className="bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 inline-block animate-bounce">
            <ChevronDown className="text-white/80" size={24} />
          </div>
        </div>
      </div>
      
      {/* Date and location banner */}
      <div className="absolute bottom-0 left-0 right-0 bg-darkAccent/80 backdrop-blur-md py-4 z-10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-white/80">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="w-10 h-10 rounded-full bg-squidPink/20 flex items-center justify-center mr-3">
              <span className="text-squidPink">📅</span>
            </div>
            <span>October 15-17, 2024</span>
          </div>
          
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-squidGreen/20 flex items-center justify-center mr-3">
              <span className="text-squidGreen">📍</span>
            </div>
            <span>Reva University, Bangalore</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
