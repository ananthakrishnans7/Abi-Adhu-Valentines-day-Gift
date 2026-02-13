
import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';

interface Props {
  isOpened: boolean;
  onOpen: () => void;
  onNext: () => void;
}

const EnvelopeLetter: React.FC<Props> = ({ isOpened, onOpen, onNext }) => {
  return (
    <div className="z-10 w-full max-w-md px-4 flex flex-col items-center justify-center min-h-[400px]">
      {!isOpened ? (
        <div className="text-center space-y-8 animate-in fade-in zoom-in">
          <h2 className="text-3xl font-romantic text-rose-500">You have a special message...</h2>
          <button
            onClick={onOpen}
            className="group relative flex flex-col items-center justify-center p-12 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all border-2 border-rose-100 overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
               <Mail className="w-24 h-24" />
            </div>
            <Mail className="w-16 h-16 text-rose-400 mb-4 animate-bounce group-hover:scale-110 transition-transform" />
            <span className="text-xl text-rose-600 font-bold">Tap to Open</span>
          </button>
        </div>
      ) : (
        <div className="w-full bg-white p-8 rounded-lg shadow-2xl border-t-8 border-rose-400 space-y-6 animate-in slide-in-from-bottom duration-700 relative">
          <div className="absolute -top-4 -right-4 bg-rose-500 text-white p-2 rounded-full shadow-lg rotate-12">
             <Mail className="w-6 h-6" />
          </div>
          <h3 className="text-3xl font-grand text-rose-600 border-b pb-2">To My Dear Adhukutta,</h3>
          <div className="space-y-4 text-rose-800 font-medium leading-relaxed font-romantic text-lg">
            <p>
              Happy Birthday, my love! Seeing your smile is the best part of every day.
            </p>
            <p>
              I wanted to tell you how much I truly love you. You are the light of my life, the joy in my heart, and my greatest adventure.
            </p>
            <p>
              All I need in this life is you by my side. Every moment we spend together becomes a beautiful memory that I cherish forever.
            </p>
            <p>
              Today we celebrate both your life and our love. I am so lucky to have you.
            </p>
          </div>
          <div className="pt-6 flex justify-end">
            <button
              onClick={onNext}
              className="flex items-center gap-2 px-6 py-3 bg-rose-100 hover:bg-rose-200 text-rose-600 rounded-full transition-colors font-bold group"
            >
              More Surprises <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EnvelopeLetter;