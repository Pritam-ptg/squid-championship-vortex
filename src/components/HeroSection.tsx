
import { ChevronDown } from "lucide-react";
import CountdownTimer from "./CountdownTimer";

const HeroSection = () => {
  // Set the event date to be exactly 92 days from now
  const eventDate = new Date();
  eventDate.setDate(eventDate.getDate() + 92);

  return (
    <section className="min-h-screen flex items-center pt-20 bg-dark relative overflow-hidden">
      {/* Grid overlay for tech effect */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      {/* Decorative elements and shapes */}
      <div className="absolute top-0 -right-1/4 w-1/2 h-1/2 bg-purple-500/10 rounded-full filter blur-[100px]"></div>
      <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-500/10 rounded-full filter blur-[100px]"></div>
      <div className="absolute top-1/3 left-1/3 w-32 h-32 bg-purple-500/20 rounded-full filter blur-3xl animate-pulse"></div>
      
      {/* Geometric shapes that float around */}
      <div className="geometric-shape top-[15%] left-[10%] float">
        <div className="w-12 h-12 border-2 border-purple-500/30 rotate-45"></div>
      </div>
      <div className="geometric-shape top-[60%] right-[15%] float-delayed">
        <div className="w-20 h-20 rounded-full border-2 border-blue-500/30"></div>
      </div>
      <div className="geometric-shape bottom-[20%] left-[20%] float">
        <div className="w-16 h-16 border-2 border-purple-500/30 transform rotate-12"></div>
      </div>
      <div className="geometric-shape top-[40%] right-[5%] spin-slow">
        <div className="w-24 h-24 border-2 border-blue-500/30 rounded-lg transform rotate-12"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-20 relative z-10">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="mb-4 sm:mb-6 inline-block px-3 py-1 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 travel-down">
            <span className="text-purple-300 text-sm font-medium">3<sup>rd</sup> Edition • Powered by DevTrack</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-orbitron font-bold leading-tight mb-4 tracking-wider">
            <span className="devarena-gradient">DE-VARE-NA</span>
            <span className="text-white"> 2025</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-white/70 mb-12 max-w-md">
            A three-day tech extravaganza for developers, designers, and innovators.
          </p>
          
          {/* Countdown timer */}
          <div className="mb-12 reveal">
            <CountdownTimer targetDate={eventDate} />
          </div>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 reveal">
            <a 
              href="#register" 
              className="devarena-button px-8 py-3 travel-down"
            >
              REGISTER NOW
            </a>
            <a 
              href="#events" 
              className="devarena-button px-8 py-3 travel-down"
            >
              EXPLORE EVENTS
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-white/60 hover:text-white transition-colors duration-300">
            <ChevronDown size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
