
import React, { useState } from 'react';
import { Gift, Star, Sparkles } from 'lucide-react';

interface Props {
  onComplete: () => void;
}

const CakeInteraction: React.FC<Props> = ({ onComplete }) => {
  const [isTapped, setIsTapped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleTap = () => {
    if (isTapped) return;
    setIsTapped(true);
    setTimeout(() => {
      onComplete();
    }, 2200);
  };

  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div
        onClick={handleTap}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`relative cursor-pointer transition-all duration-700 transform ${
          isTapped ? 'scale-110' : isHovered ? 'scale-105' : 'scale-100'
        }`}
      >
        {/* Celebration Stars Bursting on Tap */}
        {isTapped && (
          <div className="absolute -top-20 inset-x-0 flex justify-center pointer-events-none">
            <div className="relative w-full h-full">
              {[...Array(12)].map((_, i) => (
                <Star
                  key={i}
                  className={`absolute text-yellow-400 fill-current w-6 h-6 animate-ping`}
                  style={{
                    left: `${50 + Math.cos((i * 30) * Math.PI / 180) * 100}%`,
                    top: `${50 + Math.sin((i * 30) * Math.PI / 180) * 100}%`,
                    animationDelay: `${i * 0.05}s`,
                    animationDuration: '1.2s'
                  }}
                />
              ))}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full">
                <Sparkles className="w-16 h-16 text-rose-400 animate-bounce" />
              </div>
            </div>
          </div>
        )}

        {/* The Cake Container */}
        <div className="relative w-64 h-72 flex flex-col items-center justify-end">
          
          {/* Candle */}
          <div className={`absolute top-0 z-40 transition-all duration-700 ${isTapped ? 'opacity-30 translate-y-4 rotate-12' : 'opacity-100'}`}>
            <div className="relative w-4 h-20 bg-gradient-to-b from-rose-100 via-white to-rose-200 rounded-full border-x border-rose-300/30 shadow-sm">
              <div className="absolute inset-0 flex flex-col justify-around py-1 overflow-hidden pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="h-1 w-full bg-rose-400/40 -rotate-12 transform scale-110"></div>
                ))}
              </div>
              
              {!isTapped && (
                <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                  <div className="w-6 h-10 bg-gradient-to-t from-orange-600 via-orange-400 to-yellow-100 rounded-[50%_50%_50%_50%/70%_70%_30%_30%] animate-flicker blur-[0.5px] shadow-[0_0_20px_rgba(251,146,60,0.9),0_0_40px_rgba(251,146,60,0.4)]"></div>
                  <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-2 h-4 bg-yellow-100 rounded-full blur-[2px] opacity-80"></div>
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-10 h-14 bg-orange-400/10 rounded-full blur-xl animate-pulse"></div>
                </div>
              )}
              
              {isTapped && (
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-2 h-16 bg-gray-200/40 rounded-full animate-out fade-out slide-out-to-top duration-1000 blur-md"></div>
              )}
            </div>
          </div>

          {/* Top Layer */}
          <div className="relative z-30 w-44 h-16 bg-rose-100 rounded-t-3xl shadow-inner border-b-2 border-rose-200/50">
             <div className="absolute -top-2 left-0 right-0 flex justify-between px-1">
                {[...Array(10)].map((_, i) => (
                  <div key={i} className="w-4 h-4 bg-white rounded-full shadow-sm -mt-1 border border-rose-50"></div>
                ))}
             </div>
             
             <div className="absolute bottom-0 left-0 right-0 flex justify-around items-end">
               {[...Array(8)].map((_, i) => (
                 <div 
                   key={i} 
                   className="w-4 bg-white rounded-full -mb-3 shadow-md z-10"
                   style={{ 
                     height: `${12 + Math.sin(i * 1.5) * 6}px`,
                     borderBottomLeftRadius: '10px',
                     borderBottomRightRadius: '10px'
                    }}
                 ></div>
               ))}
             </div>
             
             <div className="shimmer-text absolute inset-0 rounded-t-3xl opacity-30 pointer-events-none"></div>
             
             <div className="absolute inset-0 p-3 overflow-hidden opacity-80">
                {[...Array(15)].map((_, i) => (
                  <div 
                    key={i} 
                    className={`absolute w-1.5 h-1.5 rounded-full shadow-[0.5px_0.5px_0px_rgba(0,0,0,0.1)] ${['bg-pink-400', 'bg-amber-300', 'bg-sky-200', 'bg-rose-400'][i % 4]}`}
                    style={{ 
                      top: `${Math.random() * 80}%`, 
                      left: `${Math.random() * 90}%`,
                      transform: `rotate(${Math.random() * 360}deg)`
                    }}
                  ></div>
                ))}
             </div>
          </div>

          {/* Middle Layer */}
          <div className="relative z-20 w-54 h-18 bg-rose-200 rounded-t-3xl shadow-inner border-b-4 border-rose-300/40 -mt-2">
             <div className="shimmer-text absolute inset-0 rounded-t-3xl opacity-20 pointer-events-none"></div>
             <div className="absolute top-4 left-4 right-4 h-3 bg-white/30 rounded-full blur-[2px]"></div>
             <div className="flex justify-center gap-6 mt-6">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-3 h-3 bg-rose-50/50 rounded-full"></div>
                ))}
             </div>
          </div>

          {/* Bottom Layer */}
          <div className="w-64 h-22 bg-rose-300 rounded-t-[2.5rem] shadow-xl relative overflow-hidden z-10">
             <div className="absolute top-0 left-0 right-0 h-5 bg-white/20"></div>
             <div className="shimmer-text absolute inset-0 opacity-15 pointer-events-none"></div>
             
             <div className="absolute -top-2 left-0 right-0 flex justify-center gap-1">
                {[...Array(12)].map((_, i) => (
                   <div key={i} className="w-4 h-4 bg-rose-100/60 rounded-full"></div>
                ))}
             </div>

             <div className="flex justify-around items-center h-full px-6 pt-6">
                {[...Array(7)].map((_, i) => (
                  <div key={i} className="w-6 h-6 rounded-full bg-rose-100/40 shadow-inner flex items-center justify-center">
                     <div className="w-2 h-2 bg-white/40 rounded-full"></div>
                  </div>
                ))}
             </div>
          </div>

          {/* The Plate */}
          <div className="relative w-80 h-12 bg-gradient-to-b from-gray-50 via-gray-200 to-gray-400 rounded-[100%] shadow-[0_15px_30px_rgba(0,0,0,0.15)] border-b-8 border-gray-500/30 -mt-3 z-0 flex items-center justify-center">
             <div className="w-72 h-8 border-2 border-white/20 rounded-[100%] opacity-40"></div>
          </div>
        </div>

        {/* Tap Feedback Text */}
        {isTapped && (
           <div className="absolute inset-0 flex items-center justify-center z-50 pointer-events-none">
              <div className="bg-white/95 px-10 py-4 rounded-full shadow-[0_0_30px_rgba(225,29,72,0.4)] animate-in zoom-in slide-in-from-top-4 duration-500 border-2 border-rose-100">
                <span className="text-rose-600 font-bold text-3xl font-grand tracking-widest block text-center">
                   WISH GRANTED!
                </span>
                <span className="text-rose-400 text-sm font-romantic block text-center mt-1">
                   You are so loved, Adhukutta
                </span>
              </div>
           </div>
        )}
      </div>

      <div className="mt-12 flex items-center gap-8 opacity-90">
        <div className="relative">
          <Gift className="text-rose-400 animate-bounce w-10 h-10" style={{ animationDelay: '0s' }} />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-rose-200 to-transparent rounded-full mb-2"></div>
          <p className="text-rose-500 font-romantic text-2xl font-bold tracking-wide italic">
             {isTapped ? "Surprises aren't over..." : "Tap the cake to make a wish..."}
          </p>
        </div>
        
        <div className="relative">
          <Gift className="text-rose-600 animate-bounce w-10 h-10" style={{ animationDelay: '0.4s' }} />
          <div className="absolute -top-1 -left-1 w-3 h-3 bg-rose-300 rounded-full animate-ping delay-300"></div>
        </div>
      </div>
    </div>
  );
};

export default CakeInteraction;