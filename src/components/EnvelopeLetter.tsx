import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Mail, MailOpen, Heart } from 'lucide-react';
import { giftContent } from '../data/giftContent';

export const EnvelopeLetter: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { letter, momName, senderName } = giftContent;

  const handleToggle = () => {
    if (!isOpen) {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#fb7185', '#e11d48', '#facc15', '#fef08a'],
      });
    }
    setIsOpen(!isOpen);
  };

  return (
    <section className="w-full max-w-xl mx-auto px-4 py-12 flex flex-col items-center">
      {/* Título de la sección */}
      <div className="text-center mb-8">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400 bg-amber-500/10 px-3.5 py-1 rounded-full border border-amber-400/20">
          DEDICATORIA ESPECIAL 💌
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl text-rose-100 font-bold mt-2">
          {letter.title}
        </h2>
        <p className="font-sans text-rose-300/80 text-xs sm:text-sm mt-1">
          {isOpen ? 'Toca el botón al final para doblar la carta' : letter.envelopeHint}
        </p>
      </div>

      {/* Contenedor del Sobre y la Carta */}
      <div className="w-full relative flex flex-col items-center">
        {/* El Sobre Cerrado (Visible cuando está cerrado) */}
        {!isOpen && (
          <div
            onClick={handleToggle}
            className="w-full max-w-md aspect-[16/10] cursor-pointer group relative rounded-2xl bg-gradient-to-tr from-[#38091d] via-[#4d0c27] to-[#2b0616] p-4 border border-rose-500/30 shadow-2xl shadow-rose-950/80 flex flex-col items-center justify-center transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            {/* Solapa del sobre visual */}
            <div className="absolute top-0 inset-x-0 h-1/2 border-b border-rose-500/20 bg-rose-950/40 rounded-t-2xl flex items-center justify-center pointer-events-none" />

            {/* Sello de lacre dorado con corazón */}
            <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-tr from-amber-600 via-amber-400 to-amber-300 p-1 shadow-xl shadow-amber-950 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <div className="w-full h-full rounded-full border border-amber-800/40 flex items-center justify-center">
                <Heart className="w-7 h-7 text-amber-950 fill-current animate-pulse" />
              </div>
            </div>

            <p className="relative z-10 font-serif text-rose-200 text-sm sm:text-base font-semibold mt-4 flex items-center gap-1.5">
              <span>Para:</span>
              <span className="font-cursive text-amber-300 text-2xl sm:text-3xl">
                {momName}
              </span>
            </p>

            <div className="mt-3 flex items-center gap-1.5 text-xs text-rose-300/80 bg-rose-900/40 px-3 py-1 rounded-full border border-rose-500/20">
              <Mail className="w-3.5 h-3.5 text-amber-300" />
              <span>Toca para abrir la carta</span>
            </div>
          </div>
        )}

        {/* La Carta Abierta Desplegada */}
        {isOpen && (
          <div className="w-full animate-fadeIn transition-all duration-500">
            <div className="relative w-full rounded-3xl bg-[#fdfbf7] text-stone-800 p-6 sm:p-10 shadow-2xl shadow-rose-950/80 border-4 border-amber-200/60 overflow-hidden">
              {/* Textura de papel pergamino y adorno de esquinas */}
              <div className="absolute top-3 left-3 text-amber-400/40 text-lg select-none">❧</div>
              <div className="absolute top-3 right-3 text-amber-400/40 text-lg select-none rotate-90">❧</div>
              <div className="absolute bottom-3 left-3 text-amber-400/40 text-lg select-none -rotate-90">❧</div>
              <div className="absolute bottom-3 right-3 text-amber-400/40 text-lg select-none rotate-180">❧</div>

              {/* Saludo */}
              <div className="border-b border-amber-200/70 pb-4 mb-6">
                <p className="font-cursive text-rose-700 text-3xl sm:text-4xl">
                  {letter.openingGreeting}
                </p>
              </div>

              {/* Párrafos de la carta */}
              <div className="space-y-4 font-serif text-stone-700 text-sm sm:text-base leading-relaxed">
                {letter.bodyParagraphs.map((paragraph, idx) => (
                  <p key={idx} className="first-letter:text-2xl first-letter:font-bold first-letter:text-rose-800">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Cierre y Firma */}
              <div className="mt-8 pt-6 border-t border-amber-200/70 flex flex-col items-end text-right">
                <p className="font-serif italic text-stone-600 text-xs sm:text-sm">
                  {letter.closingPhrase}
                </p>
                <p className="font-cursive text-rose-700 text-3xl sm:text-4xl mt-2">
                  {senderName}
                </p>
              </div>

              {/* Post Scriptum */}
              {letter.postScriptum && (
                <div className="mt-6 p-3 rounded-xl bg-amber-50/80 border border-amber-200/60 text-stone-600 text-xs italic">
                  {letter.postScriptum}
                </div>
              )}

              {/* Botón para cerrar */}
              <div className="mt-8 flex justify-center">
                <button
                  onClick={handleToggle}
                  className="py-2 px-5 rounded-full bg-stone-100 hover:bg-stone-200 border border-stone-300 text-stone-700 text-xs font-medium transition-all flex items-center gap-1.5"
                >
                  <MailOpen className="w-3.5 h-3.5 text-rose-600" />
                  <span>Guardar la carta en su sobre</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
