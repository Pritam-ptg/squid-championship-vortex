
import React from 'react';
import { Star, Heart, Sparkle, CircleDot, Triangle, X, Circle, Square } from 'lucide-react';

const Doodle = ({ 
  icon, 
  color, 
  size, 
  className, 
  style 
}: { 
  icon: React.ReactNode; 
  color: string; 
  size: number; 
  className?: string; 
  style?: React.CSSProperties;
}) => {
  return (
    <div 
      className={`absolute ${className}`} 
      style={{
        color: color,
        animation: `float ${Math.random() * 5 + 10}s ease-in-out infinite, 
                   spin ${Math.random() * 10 + 20}s linear infinite,
                   pulse ${Math.random() * 4 + 3}s ease-in-out infinite`,
        ...style
      }}
    >
      {icon}
    </div>
  );
};

const Doodles = () => {
  // Squid Game inspired shapes - circle, triangle, square, plus some extras
  const doodles = [
    { Icon: Circle, color: 'rgba(255, 0, 135, 0.7)', size: 32, top: '15%', left: '10%' },
    { Icon: Triangle, color: 'rgba(21, 245, 186, 0.7)', size: 32, top: '75%', right: '15%' },
    { Icon: Square, color: 'rgba(255, 215, 0, 0.7)', size: 32, top: '30%', right: '10%' },
    { Icon: X, color: 'rgba(255, 0, 135, 0.7)', size: 24, bottom: '20%', left: '20%' },
    { Icon: Circle, color: 'rgba(21, 245, 186, 0.7)', size: 22, top: '50%', left: '5%' },
    { Icon: Triangle, color: 'rgba(255, 215, 0, 0.7)', size: 28, bottom: '30%', right: '5%' },
    { Icon: Square, color: 'rgba(255, 0, 135, 0.7)', size: 30, top: '60%', left: '30%' },
    { Icon: Circle, color: 'rgba(255, 215, 0, 0.8)', size: 36, top: '10%', right: '25%' },
    { Icon: Star, color: 'rgba(21, 245, 186, 0.7)', size: 20, bottom: '15%', right: '30%' },
    { Icon: Triangle, color: 'rgba(255, 0, 135, 0.7)', size: 26, top: '35%', left: '25%' },
    { Icon: Square, color: 'rgba(21, 245, 186, 0.7)', size: 28, bottom: '40%', right: '45%' },
    { Icon: X, color: 'rgba(255, 215, 0, 0.7)', size: 22, top: '70%', right: '20%' },
  ];

  return (
    <div className="doodles-container fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {doodles.map((doodle, index) => (
        <Doodle
          key={index}
          icon={<doodle.Icon size={doodle.size} strokeWidth={1.5} />}
          color={doodle.color}
          size={doodle.size}
          className={`svg-shadow transition-all duration-300`}
          style={{
            top: doodle.top,
            left: doodle.left,
            right: doodle.right,
            bottom: doodle.bottom,
            opacity: 0.8,
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
        />
      ))}
    </div>
  );
};

export default Doodles;
