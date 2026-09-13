import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Gift, Volume2, Sparkles, Heart } from 'lucide-react';
import { giftContent } from '../data/giftContent';

interface Props {
  onStart: () => void;
}

export const WelcomeScreen: React.FC<Props> = ({ onStart }) => {
  const [isOpening, setIsOpening] = useState(false);
  const { welcomeScreen, momName } = giftContent;

  const handleOpenGift = () => {
    setIsOpening(true);

    // Lanzar confeti multicolor y dorado
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#f43f5e', '#fb7185', '#facc15', '#fef08a', '#ffffff'],
    });

    setTimeout(() => {
      onStart();
    }, 700);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center p-6 bg-gradient-to-b from-[#210612] via-[#14030a] to-[#0a0105] text-center transition-all duration-700 ${
        isOpening ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Luz y destellos de fondo */}
      <div className="absolute w-80 h-80 rounded-full bg-rose-600/20 blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute w-64 h-64 rounded-full bg-amber-400/15 blur-2xl pointer-events-none animate-float" />

      <div className="relative z-10 max-w-sm flex flex-col items-center">
        {/* Insignia superior */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs font-medium tracking-wide mb-6">
          <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-spin" style={{ animationDuration: '6s' }} />
          <span>{welcomeScreen.badge}</span>
        </div>

        {/* Ícono de regalo interactivo con pulso */}
        <div
          onClick={handleOpenGift}
          className="relative cursor-pointer group mb-6 transition-transform hover:scale-105 active:scale-95"
        >
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-tr from-rose-600 to-rose-400 p-0.5 shadow-2xl shadow-rose-900/80 flex items-center justify-center">
            <div className="w-full h-full rounded-[22px] bg-gradient-to-b from-rose-900/90 to-[#220412] flex items-center justify-center">
              <Gift className="w-12 h-12 sm:w-14 sm:h-14 text-amber-300 animate-bounce" />
            </div>
          </div>
          <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-amber-400 text-neutral-900 flex items-center justify-center shadow-lg animate-pulse">
            <Heart className="w-4 h-4 fill-current text-rose-600" />
          </div>
        </div>

        {/* Títulos y dedicatoria */}
        <h1 className="font-serif text-3xl sm:text-4xl text-rose-50 font-bold tracking-tight mb-3 leading-tight">
          ¡Feliz Día, <span className="text-amber-300 font-cursive text-4xl sm:text-5xl">{momName}</span>!
        </h1>

        <p className="font-sans text-rose-200/80 text-sm sm:text-base leading-relaxed mb-8 font-light px-2">
          {welcomeScreen.subtitle}
        </p>

        {/* Botón principal */}
        <button
          onClick={handleOpenGift}
          className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-rose-600 via-rose-500 to-amber-500 text-white font-semibold text-base shadow-xl shadow-rose-900/50 hover:shadow-rose-700/60 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
        >
          <span>{welcomeScreen.buttonText}</span>
          <Sparkles className="w-4 h-4 text-amber-200 group-hover:rotate-12 transition-transform" />
        </button>

        {/* Indicador de audio */}
        <div className="mt-5 flex items-center gap-2 text-rose-300/70 text-xs">
          <Volume2 className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
          <span>{welcomeScreen.note}</span>
        </div>
      </div>
    </div>
  );
};
