
import { ChevronDown, CircleDot, Triangle, GitBranch, Circle, X, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center pt-20 bg-dark relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 -right-1/4 w-1/2 h-1/2 bg-squidPink/10 rounded-full filter blur-[100px]"></div>
      <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-squidGreen/10 rounded-full filter blur-[100px]"></div>
      
      {/* Squid Game inspired shapes */}
      <div className="absolute top-[20%] right-[15%] opacity-30 animate-spin-slow">
        <Circle className="text-squidPink w-24 h-24" />
      </div>
      <div className="absolute bottom-[25%] left-[10%] opacity-30 animate-float">
        <Triangle className="text-squidGreen w-20 h-20" />
      </div>
      <div className="absolute top-[30%] left-[20%] opacity-30 animate-pulse">
        <X className="text-squidPink w-16 h-16" />
      </div>
      <div className="absolute bottom-[20%] right-[20%] opacity-30 animate-float">
        <Star className="text-championGold w-12 h-12" />
      </div>
      
      {/* Grid overlay for aesthetic */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-20 relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="reveal max-w-3xl mx-auto">
            <div className="mb-8 sm:mb-10 inline-block px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
              <span className="text-squidPink text-sm md:text-base font-medium">OCT 15-17, 2024</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-squid leading-tight mb-8">
              <span className="text-white block mb-2">The Ultimate</span>
              <span className="text-squidPink squid-glow tracking-wider">Championship</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-2xl mx-auto font-sans">
              Compete. Survive. Conquer. Do you have what it takes to be the last one standing in this high-stakes battle of skill and strategy?
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-5 sm:space-y-0 sm:space-x-6 justify-center">
              <a 
                href="#register" 
                className="bg-squidPink hover:bg-squidPink/90 text-white px-10 py-4 rounded-md font-squid transition-all duration-300 text-center text-lg tracking-wider hover:shadow-[0_0_20px_rgba(255,0,135,0.6)]"
              >
                REGISTER NOW
              </a>
              <a 
                href="#events" 
                className="bg-transparent border-2 border-white/20 hover:border-white/40 text-white px-10 py-4 rounded-md font-squid transition-colors duration-300 backdrop-blur-sm text-center text-lg tracking-wider hover:bg-white/5"
              >
                VIEW EVENTS
              </a>
            </div>
            
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
              {['SURVIVAL', 'STRATEGY', 'VICTORY'].map((text, index) => (
                <div key={index} className="glass-card p-6 text-center transition-all duration-300 hover:bg-white/10 hover:scale-105">
                  <h3 className="text-squidPink text-2xl font-squid mb-3">{text}</h3>
                  <p className="text-white/70 font-sans">Only the strongest will survive and claim the ultimate prize.</p>
                </div>
              ))}
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
