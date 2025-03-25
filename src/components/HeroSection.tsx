
import { ChevronDown, CircleDot, Triangle, GitBranch } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center pt-20 bg-dark relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 -right-1/4 w-1/2 h-1/2 bg-squidPink/10 rounded-full filter blur-[100px]"></div>
      <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-squidGreen/10 rounded-full filter blur-[100px]"></div>
      <div className="absolute top-1/3 left-1/3 w-32 h-32 bg-championGold/20 rounded-full filter blur-3xl animate-pulse"></div>
      
      {/* Animated geometric shapes */}
      <div className="absolute top-[20%] right-[15%] opacity-20 animate-spin-slow">
        <Triangle className="text-squidPink w-16 h-16" />
      </div>
      <div className="absolute bottom-[25%] left-[10%] opacity-20 animate-float">
        <CircleDot className="text-squidGreen w-12 h-12" />
      </div>
      <div className="absolute bottom-[15%] right-[25%] opacity-20 animate-pulse">
        <GitBranch className="text-championGold w-14 h-14" />
      </div>
      
      {/* Grid overlay for squid game effect */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 reveal">
            <div className="mb-4 sm:mb-6 inline-block px-3 py-1 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
              <span className="text-squidPink text-sm font-medium">OCT 15-17, 2024</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-6">
              <span className="text-white">The Ultimate</span>
              <br />
              <span className="text-stroke-primary text-transparent">Squid</span>
              <span className="text-squidPink squid-glow"> Championship</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-white/70 mb-8 max-w-md">
              Compete. Survive. Conquer. Do you have what it takes to be the last one standing in this high-stakes battle of skill and strategy?
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#register" 
                className="bg-squidPink hover:bg-squidPink/90 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 text-center animate-[pulse_2s_infinite] hover:animate-none"
              >
                Register Now
              </a>
              <a 
                href="#events" 
                className="bg-transparent border border-white/20 hover:border-white/40 text-white px-8 py-3 rounded-full font-medium transition-colors duration-300 backdrop-blur-sm text-center hover:bg-white/5"
              >
                View Events
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-12 md:mt-0 reveal">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-squidPink/20 rounded-lg filter blur-xl"></div>
              <div className="relative glass-card rounded-lg p-1 overflow-hidden animate-[float_6s_ease-in-out_infinite]">
                <div className="bg-dark rounded-lg overflow-hidden">
                  <img 
                    src="https://via.placeholder.com/600x400?text=Squid+Championship" 
                    alt="Squid Championship" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute top-4 left-4 px-3 py-1 bg-squidPink text-white text-xs rounded-full animate-[pulse_2s_infinite]">
                  LIVE EVENT
                </div>
              </div>
            </div>
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
