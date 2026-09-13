import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, Heart, Send } from 'lucide-react';
import { giftContent } from '../data/giftContent';

export const MakeAWish: React.FC = () => {
  const [isBlown, setIsBlown] = useState(false);
  const { wishSection, momName, senderName } = giftContent;

  const handleBlowCandle = () => {
    if (isBlown) return;

    setIsBlown(true);

    // Gran explosión de fuegos artificiales y confeti
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
      colors: ['#ff1493', '#ff69b4', '#ffd700', '#ff4500', '#ffffff'],
    };

    const fire = (particleRatio: number, opts: confetti.Options) => {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    };

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    fire(0.2, {
      spread: 60,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  };

  const shareWhatsApp = () => {
    const rawNumber = giftContent.whatsappNumber ? giftContent.whatsappNumber.replace(/[^0-9]/g, '') : '';
    const text = encodeURIComponent(
      `¡Hola mi amor! Acabo de ver el hermoso regalo que me hiciste para mi cumpleaños. ¡Me emocionó hasta el alma! Te amo muchísimo, hijo mío ❤️`
    );
    const url = rawNumber ? `https://wa.me/${rawNumber}?text=${text}` : `https://wa.me/?text=${text}`;
    window.open(url, '_blank');
  };

  return (
    <section className="w-full max-w-md mx-auto px-4 py-16 text-center flex flex-col items-center">
      {/* Insignia */}
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300 bg-amber-500/10 px-3.5 py-1 rounded-full border border-amber-400/30 mb-3">
        EL MOMENTO MÁGICO ✨
      </span>

      <h2 className="font-serif text-2xl sm:text-3xl text-rose-100 font-bold mb-2">
        {wishSection.title}
      </h2>

      <p className="font-sans text-stone-300/80 text-xs sm:text-sm max-w-xs mb-8 font-light">
        {isBlown ? wishSection.blownMessage : wishSection.instructions}
      </p>

      {/* La Velita Interactiva */}
      <div
        onClick={handleBlowCandle}
        className="relative flex flex-col items-center cursor-pointer select-none group my-4"
        title="Toca para apagar la velita y pedir tu deseo"
      >
        {/* Llama o Humo */}
        <div className="relative h-14 flex items-end justify-center mb-1">
          {!isBlown ? (
            <div className="relative flex flex-col items-center animate-bounce" style={{ animationDuration: '2s' }}>
              {/* Resplandor exterior */}
              <div className="absolute w-12 h-12 rounded-full bg-amber-400/40 blur-md animate-pulse" />
              {/* Llama */}
              <div className="w-5 h-8 bg-gradient-to-t from-orange-500 via-amber-300 to-yellow-100 rounded-full rounded-t-[50%] shadow-lg shadow-amber-400/80 transform origin-bottom animate-pulseGlow" />
              {/* Mecha */}
              <div className="w-0.5 h-2 bg-stone-800" />
            </div>
          ) : (
            <div className="flex flex-col items-center">
              {/* Humo tras apagar */}
              <div className="text-stone-400 text-xs animate-float opacity-75">
                ~ ☁️ ~
              </div>
              <div className="w-0.5 h-2 bg-stone-600 mt-1" />
            </div>
          )}
        </div>

        {/* Cuerpo de la vela */}
        <div className="w-8 h-20 rounded-t-sm rounded-b-md bg-gradient-to-r from-rose-400 via-rose-300 to-rose-400 shadow-md flex flex-col items-center justify-between p-1 border-t border-rose-200">
          <div className="w-full h-1 bg-amber-200/50 rounded-full" />
          <Heart className="w-3.5 h-3.5 text-rose-600 fill-current opacity-70" />
          <div className="w-full h-1 bg-amber-200/50 rounded-full" />
        </div>

        {/* Base o plato de la vela */}
        <div className="w-16 h-2 rounded-full bg-amber-400/60 shadow-lg mt-0.5 border border-amber-300/40" />

        <div className="mt-4 text-xs text-amber-300/90 font-medium">
          {!isBlown ? (
            <span className="flex items-center gap-1.5 bg-rose-950/60 px-3 py-1.5 rounded-full border border-rose-500/30">
              <Sparkles className="w-3 h-3 text-amber-300" />
              Toca aquí para soplar la velita
            </span>
          ) : (
            <span className="text-emerald-400 font-semibold">
              ¡Deseo pedido con éxito! 🎉
            </span>
          )}
        </div>
      </div>

      {/* Mensaje final conmovedor */}
      <div className="mt-10 pt-8 border-t border-rose-900/40 w-full flex flex-col items-center">
        <p className="font-cursive text-amber-300 text-3xl sm:text-4xl mb-1">
          ¡Te amo infinitamente, {momName}! ❤️
        </p>
        <p className="font-serif text-xs text-rose-300/70 mb-6">
          Con todo el amor de {senderName}
        </p>

        {/* Botón de WhatsApp para que mamá responda de inmediato */}
        <button
          onClick={shareWhatsApp}
          className="py-3 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white font-medium text-xs sm:text-sm shadow-xl shadow-emerald-950 flex items-center gap-2 transition-all"
        >
          <Send className="w-4 h-4" />
          <span>Enviar mensaje de agradecimiento por WhatsApp</span>
        </button>
      </div>
    </section>
  );
};
