
import React from 'react';
import { Star, Heart, Sparkle, CircleDot, Triangle, X, Zap, Crown, Flower, Music, Flame, Rocket, Shapes, Diamond, Aperture, Snowflake, Wand2 } from 'lucide-react';

const Doodle = ({ 
  icon, 
  color, 
  size, 
  className, 
  style,
  hoverEffect = false 
}: { 
  icon: React.ReactNode; 
  color: string; 
  size: number; 
  className?: string; 
  style?: React.CSSProperties;
  hoverEffect?: boolean;
}) => {
  return (
    <div 
      className={`absolute transition-all duration-300 ${hoverEffect ? 'hover-scale' : ''} ${className}`} 
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
  // Expanded array of doodle configurations with more variety and purple theme
  const doodles = [
    { Icon: Star, color: 'rgba(155, 135, 245, 0.7)', size: 24, top: '15%', left: '10%', hoverEffect: true },
    { Icon: Heart, color: 'rgba(126, 105, 171, 0.7)', size: 28, top: '75%', right: '15%', hoverEffect: true },
    { Icon: Sparkle, color: 'rgba(229, 222, 255, 0.7)', size: 22, top: '30%', right: '10%', hoverEffect: true },
    { Icon: CircleDot, color: 'rgba(155, 135, 245, 0.7)', size: 18, bottom: '20%', left: '20%', hoverEffect: true },
    { Icon: Triangle, color: 'rgba(126, 105, 171, 0.7)', size: 26, top: '50%', left: '5%', hoverEffect: true },
    { Icon: X, color: 'rgba(229, 222, 255, 0.7)', size: 20, bottom: '30%', right: '5%', hoverEffect: true },
    { Icon: Zap, color: 'rgba(155, 135, 245, 0.7)', size: 24, top: '60%', left: '30%', hoverEffect: true },
    { Icon: Crown, color: 'rgba(229, 222, 255, 0.8)', size: 30, top: '10%', right: '25%', hoverEffect: true },
    { Icon: Star, color: 'rgba(126, 105, 171, 0.7)', size: 16, bottom: '15%', right: '30%', hoverEffect: true },
    { Icon: Sparkle, color: 'rgba(155, 135, 245, 0.7)', size: 20, top: '35%', left: '25%', hoverEffect: true },
    // New doodles with different icons and positions
    { Icon: Flower, color: 'rgba(155, 135, 245, 0.7)', size: 26, top: '22%', left: '40%', hoverEffect: true },
    { Icon: Music, color: 'rgba(126, 105, 171, 0.7)', size: 22, bottom: '40%', right: '45%', hoverEffect: true },
    { Icon: Flame, color: 'rgba(229, 222, 255, 0.7)', size: 28, top: '70%', right: '20%', hoverEffect: true },
    { Icon: Rocket, color: 'rgba(155, 135, 245, 0.7)', size: 32, bottom: '25%', left: '15%', hoverEffect: true },
    { Icon: Crown, color: 'rgba(126, 105, 171, 0.7)', size: 20, top: '45%', right: '35%', hoverEffect: true },
    { Icon: Zap, color: 'rgba(229, 222, 255, 0.7)', size: 18, bottom: '60%', left: '18%', hoverEffect: true },
    // Additional doodles with new icons
    { Icon: Shapes, color: 'rgba(155, 135, 245, 0.7)', size: 28, top: '5%', left: '50%', hoverEffect: true },
    { Icon: Diamond, color: 'rgba(126, 105, 171, 0.7)', size: 24, bottom: '5%', right: '50%', hoverEffect: true },
    { Icon: Aperture, color: 'rgba(229, 222, 255, 0.7)', size: 30, top: '85%', left: '5%', hoverEffect: true },
    { Icon: Snowflake, color: 'rgba(155, 135, 245, 0.7)', size: 26, top: '25%', right: '5%', hoverEffect: true },
    { Icon: Wand2, color: 'rgba(126, 105, 171, 0.7)', size: 28, bottom: '40%', left: '5%', hoverEffect: true },
  ];

  return (
    <div className="doodles-container fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {doodles.map((doodle, index) => (
        <Doodle
          key={index}
          icon={<doodle.Icon size={doodle.size} strokeWidth={1.5} />}
          color={doodle.color}
          size={doodle.size}
          hoverEffect={doodle.hoverEffect}
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
