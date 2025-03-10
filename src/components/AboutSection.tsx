
import React from 'react';
import { Trophy, Clock, Users, Zap } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-darkAccent relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-6 bg-gradient-to-r from-squidPink via-squidGreen to-championGold opacity-40"></div>
      <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-squidPink/10 filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-squidPink via-squidGreen to-championGold opacity-20"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center reveal">
          <div className="inline-block px-3 py-1 mb-6 bg-white/5 rounded-full border border-white/10 text-squidPink text-sm">
            ABOUT THE EVENT
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-8 text-white">
            The Ultimate <span className="text-squidPink">Challenge</span> Awaits
          </h2>
          
          <p className="text-lg text-white/80 mb-12 leading-relaxed">
            Welcome to the <span className="text-squidPink font-semibold">Squid Championship</span> - a high-stakes competition where your skills, strategy, and survival instincts will be tested to their limits. Inspired by the intensity of Squid Game and the glory of championships, this 3-day extravaganza brings together technical challenges, cultural showcases, and mind-bending games that will push you beyond your comfort zone. Only the fearless will survive, only the best will triumph. Are you ready to play?
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            <div className="glass-card p-6 rounded-lg text-center transition-transform hover:scale-105">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-squidPink/20 flex items-center justify-center">
                <Trophy className="text-squidPink" size={24} />
              </div>
              <h3 className="font-semibold text-white mb-1">₹50,000</h3>
              <p className="text-sm text-white/60">Prize Pool</p>
            </div>
            
            <div className="glass-card p-6 rounded-lg text-center transition-transform hover:scale-105">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-squidGreen/20 flex items-center justify-center">
                <Clock className="text-squidGreen" size={24} />
              </div>
              <h3 className="font-semibold text-white mb-1">3 Days</h3>
              <p className="text-sm text-white/60">Of Excitement</p>
            </div>
            
            <div className="glass-card p-6 rounded-lg text-center transition-transform hover:scale-105">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-championGold/20 flex items-center justify-center">
                <Users className="text-championGold" size={24} />
              </div>
              <h3 className="font-semibold text-white mb-1">500+</h3>
              <p className="text-sm text-white/60">Participants</p>
            </div>
            
            <div className="glass-card p-6 rounded-lg text-center transition-transform hover:scale-105">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-championSilver/20 flex items-center justify-center">
                <Zap className="text-championSilver" size={24} />
              </div>
              <h3 className="font-semibold text-white mb-1">9 Events</h3>
              <p className="text-sm text-white/60">To Conquer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
