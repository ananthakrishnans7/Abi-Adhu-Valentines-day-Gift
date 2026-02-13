
import React, { useState, useEffect, useCallback } from 'react';
import { Heart, Mail, Sparkles, Star, Gift, Gem } from 'lucide-react';
import confetti from 'canvas-confetti';
import HeartBackground from './components/HeartBackground';
import EnvelopeLetter from './components/EnvelopeLetter';
import CakeInteraction from './components/CakeInteraction';

enum Step {
  INITIAL_PROPOSAL,
  ENVELOPE,
  LETTER,
  CAKE,
  MORE_SURPRISES_TRANSITION,
  RING_PROPOSAL,
  FINAL_CELEBRATION
}

const App: React.FC = () => {
  const [step, setStep] = useState<Step>(Step.INITIAL_PROPOSAL);
  const [yesScale, setYesScale] = useState(1);
  const [noClickedCount, setNoClickedCount] = useState(0);

  const triggerConfetti = useCallback(() => {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);
  }, []);

  useEffect(() => {
    if (step === Step.FINAL_CELEBRATION) {
      triggerConfetti();
    }
  }, [step, triggerConfetti]);

  const handleNoClick = () => {
    setNoClickedCount(prev => prev + 1);
    setYesScale(prev => prev + 0.5);
  };

  const nextStep = () => {
    setStep(prev => prev + 1);
    setYesScale(1);
    setNoClickedCount(0);
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center p-4 overflow-hidden">
      <HeartBackground />

      {/* STEP 0: Initial Valentine Proposal */}
      {step === Step.INITIAL_PROPOSAL && (
        <div className="z-10 text-center space-y-8 animate-in fade-in duration-1000">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-grand text-rose-600">
              Happy Birthday My Dear Valentine Adhukutta
            </h1>
            <p className="text-xl md:text-2xl text-rose-500 font-romantic">
              Will you be my valentine?
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <button
              onClick={nextStep}
              style={{ transform: `scale(${yesScale})` }}
              className="px-8 py-3 bg-rose-500 hover:bg-rose-600 text-white rounded-full shadow-lg transition-all duration-300 font-bold"
            >
              YES! ❤️
            </button>
            <button
              onClick={handleNoClick}
              className="px-8 py-3 bg-white text-rose-500 border-2 border-rose-200 rounded-full hover:bg-rose-50 transition-all font-bold"
            >
              {noClickedCount > 5 ? "Wait, please?" : "No"}
            </button>
          </div>
        </div>
      )}

      {/* STEP 1 & 2: Envelope & Letter */}
      {(step === Step.ENVELOPE || step === Step.LETTER) && (
        <EnvelopeLetter
          isOpened={step === Step.LETTER}
          onOpen={() => setStep(Step.LETTER)}
          onNext={nextStep}
        />
      )}

      {/* STEP 3: Cake */}
      {step === Step.CAKE && (
        <div className="z-10 text-center space-y-8 animate-in fade-in zoom-in duration-700">
          <h2 className="text-4xl md:text-6xl font-grand text-rose-600">
            Happy Birthday My Dear Adhukutta
          </h2>
          <p className="text-lg text-rose-400">Tap the cake to celebrate!</p>
          <CakeInteraction onComplete={nextStep} />
        </div>
      )}

      {/* STEP 4: Transition to Ring */}
      {step === Step.MORE_SURPRISES_TRANSITION && (
        <div className="z-10 flex flex-col items-center justify-center animate-in zoom-in duration-500">
          <button
            onClick={nextStep}
            className="group flex flex-col items-center justify-center p-12 bg-white rounded-full shadow-2xl hover:scale-110 transition-transform duration-500 border-4 border-rose-100"
          >
            <Sparkles className="w-16 h-16 text-rose-400 mb-4 animate-pulse" />
            <span className="text-2xl font-romantic text-rose-600">Click for more surprises</span>
          </button>
        </div>
      )}

      {/* STEP 5: Ring Proposal */}
      {step === Step.RING_PROPOSAL && (
        <div className="z-10 text-center space-y-12 animate-in slide-in-from-bottom duration-1000">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-grand text-rose-600">
              Happy Valentines Day My Dear Adhukutta
            </h2>
            
            <div className="flex justify-center py-10">
              <div className="relative animate-ring-float">
                <div className="absolute inset-0 bg-amber-200 blur-3xl rounded-full opacity-60 animate-pulse scale-150"></div>
                <div className="relative z-10 p-6 bg-white/30 backdrop-blur-md rounded-full shadow-2xl border border-white/50 animate-ring-glow">
                  <div className="shine-effect p-4 rounded-full">
                    <Gem className="w-24 h-24 md:w-32 md:h-32 text-amber-500 fill-amber-100/50" />
                  </div>
                  <div className="absolute -top-2 -left-2">
                    <Sparkles className="w-8 h-8 text-yellow-400 animate-ping" />
                  </div>
                  <div className="absolute -bottom-2 -right-2">
                    <Sparkles className="w-8 h-8 text-yellow-400 animate-ping delay-700" />
                  </div>
                </div>
              </div>
            </div>

            <p className="text-3xl font-romantic text-rose-500 font-bold">
              Will you always be mine forever?
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8">
            <button
              onClick={nextStep}
              style={{ transform: `scale(${yesScale})` }}
              className="px-12 py-5 bg-rose-500 hover:bg-rose-600 text-white rounded-full shadow-xl transition-all duration-300 font-bold text-xl ring-4 ring-rose-200 ring-offset-2"
            >
              YES FOREVER! 💍
            </button>
            <button
              onClick={handleNoClick}
              className="px-8 py-3 bg-white text-rose-400 border-2 border-rose-100 rounded-full hover:bg-rose-50 transition-all font-bold"
            >
              No
            </button>
          </div>
        </div>
      )}

      {/* STEP 6: Final Celebration */}
      {step === Step.FINAL_CELEBRATION && (
        <div className="z-10 text-center p-8 bg-white/40 backdrop-blur-sm rounded-3xl shadow-xl space-y-12 max-w-2xl animate-in fade-in zoom-in duration-1000">
          <div className="flex justify-center gap-4">
            <Sparkles className="text-yellow-500 w-8 h-8 animate-ping" />
            <Heart className="text-rose-500 w-12 h-12 fill-current animate-bounce" />
            <Sparkles className="text-yellow-500 w-8 h-8 animate-ping" />
          </div>

          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-grand text-rose-600 leading-tight">
              Happy Birthday and <br /> Happy Valentines Day <br /> My Dear Adhukutta
            </h1>
            <p className="text-xl md:text-2xl text-rose-500 italic font-romantic">
              I love you more than words could ever express. <br />
              You're my today, my tomorrow, and my forever.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 py-8">
             <div className="animate-bounce" style={{ animationDelay: '0.1s' }}><Heart className="text-rose-400 mx-auto fill-current" /></div>
             <div className="animate-bounce" style={{ animationDelay: '0.3s' }}><Heart className="text-rose-500 mx-auto fill-current" /></div>
             <div className="animate-bounce" style={{ animationDelay: '0.5s' }}><Heart className="text-rose-600 mx-auto fill-current" /></div>
          </div>

          <button
             onClick={() => setStep(Step.INITIAL_PROPOSAL)}
             className="text-rose-300 hover:text-rose-500 transition-colors text-sm underline"
          >
             Re-watch our journey
          </button>
        </div>
      )}
    </div>
  );
};

export default App;