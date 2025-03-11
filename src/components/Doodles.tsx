
import React from 'react';
import { Star, Heart, Sparkle, CircleDot, Triangle, X, Zap, Crown, Flower, Music, Flame, Rocket } from 'lucide-react';

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
  // Expanded array of doodle configurations with more variety
  const doodles = [
    { Icon: Star, color: 'rgba(255, 0, 135, 0.7)', size: 24, top: '15%', left: '10%' },
    { Icon: Heart, color: 'rgba(21, 245, 186, 0.7)', size: 28, top: '75%', right: '15%' },
    { Icon: Sparkle, color: 'rgba(255, 215, 0, 0.7)', size: 22, top: '30%', right: '10%' },
    { Icon: CircleDot, color: 'rgba(255, 0, 135, 0.7)', size: 18, bottom: '20%', left: '20%' },
    { Icon: Triangle, color: 'rgba(21, 245, 186, 0.7)', size: 26, top: '50%', left: '5%' },
    { Icon: X, color: 'rgba(255, 215, 0, 0.7)', size: 20, bottom: '30%', right: '5%' },
    { Icon: Zap, color: 'rgba(255, 0, 135, 0.7)', size: 24, top: '60%', left: '30%' },
    { Icon: Crown, color: 'rgba(255, 215, 0, 0.8)', size: 30, top: '10%', right: '25%' },
    { Icon: Star, color: 'rgba(21, 245, 186, 0.7)', size: 16, bottom: '15%', right: '30%' },
    { Icon: Sparkle, color: 'rgba(255, 0, 135, 0.7)', size: 20, top: '35%', left: '25%' },
    // New doodles with different icons and positions
    { Icon: Flower, color: 'rgba(255, 0, 135, 0.7)', size: 26, top: '22%', left: '40%' },
    { Icon: Music, color: 'rgba(21, 245, 186, 0.7)', size: 22, bottom: '40%', right: '45%' },
    { Icon: Flame, color: 'rgba(255, 215, 0, 0.7)', size: 28, top: '70%', right: '20%' },
    { Icon: Rocket, color: 'rgba(255, 0, 135, 0.7)', size: 32, bottom: '25%', left: '15%' },
    { Icon: Crown, color: 'rgba(21, 245, 186, 0.7)', size: 20, top: '45%', right: '35%' },
    { Icon: Zap, color: 'rgba(255, 215, 0, 0.7)', size: 18, bottom: '60%', left: '18%' },
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
