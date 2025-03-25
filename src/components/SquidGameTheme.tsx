
import React from 'react';
import { CircleIcon, SquareIcon, Triangle } from 'lucide-react';

const SquidGameTheme = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Decorative elements and shapes */}
      <div className="absolute top-10 right-10 w-16 h-16 squid-triangle squid-pulse opacity-40"></div>
      <div className="absolute top-1/4 left-10 w-20 h-20 squid-circle squid-pulse opacity-40"></div>
      <div className="absolute bottom-1/4 right-16 w-24 h-24 squid-diamond squid-pulse opacity-40"></div>
      
      {/* Pink light glow effects */}
      <div className="absolute top-0 -right-1/4 w-1/2 h-1/2 bg-pink-500/10 rounded-full filter blur-[100px]"></div>
      <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-teal-500/10 rounded-full filter blur-[100px]"></div>
      <div className="absolute top-1/3 left-1/3 w-32 h-32 bg-pink-500/20 rounded-full filter blur-3xl animate-pulse"></div>
      
      {/* Squid Game-inspired symbols that float around */}
      <div className="geometric-shape top-[15%] left-[10%] float">
        <div className="w-12 h-12 border-2 border-pink-500/30 rotate-45"></div>
      </div>
      <div className="geometric-shape top-[60%] right-[15%] float-delayed">
        <div className="w-16 h-16 rounded-full border-2 border-teal-500/30"></div>
      </div>
      <div className="geometric-shape bottom-[20%] left-[20%] float">
        <div className="w-14 h-14 border-2 border-pink-500/30 transform rotate-12"></div>
      </div>
      <div className="geometric-shape top-[40%] right-[5%] spin-slow">
        <div className="w-20 h-20 border-2 border-pink-500/30 squid-triangle transform rotate-12"></div>
      </div>
    </div>
  );
};

export default SquidGameTheme;
