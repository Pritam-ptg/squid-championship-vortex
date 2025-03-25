
import { useState, useEffect } from 'react';

type CountdownProps = {
  targetDate: Date;
};

const CountdownTimer = ({ targetDate }: CountdownProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +targetDate - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };
    
    calculateTimeLeft();
    
    const timer = setInterval(calculateTimeLeft, 1000);
    
    return () => clearInterval(timer);
  }, [targetDate]);
  
  return (
    <div className="flex flex-row space-x-4 md:space-x-6 justify-center">
      <div className="squid-box countdown-box squid-pulse">
        <span className="countdown-number">{timeLeft.days}</span>
        <span className="countdown-label">Days</span>
      </div>
      
      <div className="squid-box countdown-box squid-pulse">
        <span className="countdown-number">{timeLeft.hours}</span>
        <span className="countdown-label">Hours</span>
      </div>
      
      <div className="squid-box countdown-box squid-pulse">
        <span className="countdown-number">{timeLeft.minutes}</span>
        <span className="countdown-label">Minutes</span>
      </div>
      
      <div className="squid-box countdown-box squid-pulse">
        <span className="countdown-number">{timeLeft.seconds}</span>
        <span className="countdown-label">Seconds</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
