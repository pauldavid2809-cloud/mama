import React, { useState } from 'react';
import { RotateCw, Heart, Sparkles, Camera } from 'lucide-react';
import { giftContent } from '../data/giftContent';

export const PolaroidGallery: React.FC = () => {
  const { memoriesGallery } = giftContent;
  const [flippedIds, setFlippedIds] = useState<Record<string, boolean>>({});

  const toggleFlip = (id: string) => {
    setFlippedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-400 bg-rose-500/10 px-3.5 py-1 rounded-full border border-rose-500/20">
          GALERÍA DE RECUERDOS 📷
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl text-rose-100 font-bold mt-2">
          Momentos Grabados en el Alma
        </h2>
        <p className="font-sans text-stone-300/80 text-xs sm:text-sm mt-1 flex items-center justify-center gap-1">
          <span>Toca cualquier foto para darle la vuelta y leer su secreto</span>
          <Sparkles className="w-3 h-3 text-amber-300" />
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 justify-items-center">
        {memoriesGallery.map((memory, index) => {
          const isFlipped = !!flippedIds[memory.id];
          const rotationAngle = index % 2 === 0 ? '-rotate-1' : 'rotate-1';

          return (
            <div
              key={memory.id}
              onClick={() => toggleFlip(memory.id)}
              className={`w-full max-w-[290px] aspect-[4/5] perspective-1000 cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-95 ${rotationAngle}`}
            >
              <div
                className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
                  isFlipped ? '[transform:rotateY(180deg)]' : ''
                }`}
              >
                {/* Cara Frontal (Foto Polaroid) */}
                <div className="absolute inset-0 w-full h-full bg-stone-50 p-3.5 rounded-2xl shadow-xl shadow-black/60 [backface-visibility:hidden] flex flex-col items-center justify-between border border-stone-200">
                  <div className="w-full h-[76%] rounded-xl overflow-hidden bg-stone-900 relative">
                    <img
                      src={memory.image}
                      alt={memory.caption}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute bottom-2 right-2 p-1.5 rounded-full bg-black/50 text-white backdrop-blur-sm">
                      <RotateCw className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '8s' }} />
                    </div>
                  </div>

                  <div className="w-full h-[24%] flex flex-col justify-center items-center text-center px-1">
                    <p className="font-serif font-bold text-stone-800 text-sm leading-tight">
                      {memory.caption}
                    </p>
                    {memory.dateOrPlace && (
                      <p className="font-cursive text-rose-600 text-lg leading-none mt-0.5">
                        {memory.dateOrPlace}
                      </p>
                    )}
                  </div>
                </div>

                {/* Cara Posterior (Reverso de la Polaroid con anécdota) */}
                <div className="absolute inset-0 w-full h-full bg-[#fffcf5] p-6 rounded-2xl shadow-xl shadow-black/60 [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col justify-between items-center text-center border-2 border-amber-200/80">
                  <div className="w-full flex justify-between items-center text-stone-400">
                    <Camera className="w-4 h-4 text-amber-500" />
                    <span className="font-sans text-[10px] tracking-widest uppercase text-stone-400">
                      NOTA SECRETA
                    </span>
                    <Heart className="w-4 h-4 text-rose-500 fill-current" />
                  </div>

                  <div className="my-auto px-2">
                    <p className="font-cursive text-2xl sm:text-3xl text-rose-800 mb-2 leading-none">
                      Para ti...
                    </p>
                    <p className="font-serif text-stone-700 text-xs sm:text-sm leading-relaxed italic">
                      "{memory.backStory}"
                    </p>
                  </div>

                  <p className="text-[10px] text-stone-400 flex items-center gap-1">
                    <RotateCw className="w-2.5 h-2.5" />
                    <span>Toca para volver a la foto</span>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
