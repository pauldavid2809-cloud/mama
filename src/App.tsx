import React, { useState } from 'react';
import { Player } from '@remotion/player';
import { Sparkles, Heart, ChevronDown } from 'lucide-react';
import { giftContent } from './data/giftContent';
import {
  BirthdayComposition,
  COMPOSITION_WIDTH,
  COMPOSITION_HEIGHT,
  COMPOSITION_FPS,
  calculateTotalDuration,
} from './remotion/BirthdayComposition';
import { WelcomeScreen } from './components/WelcomeScreen';
import { AudioController } from './components/AudioController';
import { EnvelopeLetter } from './components/EnvelopeLetter';
import { PolaroidGallery } from './components/PolaroidGallery';
import { MakeAWish } from './components/MakeAWish';
import { FloatingHearts } from './components/FloatingHearts';

export const App: React.FC = () => {
  const [hasStarted, setHasStarted] = useState(false);
  const totalDuration = calculateTotalDuration(giftContent.remotionScenes);

  const handleStartExperience = () => {
    setHasStarted(true);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#12040b] via-[#1a050f] to-[#0d0208] text-stone-100 selection:bg-rose-500 selection:text-white">
      {/* Fondo ambiental decorativo */}
      <FloatingHearts />

      {/* Pantalla de inicio con el regalo para desbloquear sonido */}
      {!hasStarted && <WelcomeScreen onStart={handleStartExperience} />}

      {/* Controlador de música de fondo */}
      <AudioController shouldPlay={hasStarted} />

      {/* Contenido Principal */}
      <main className="relative z-10 w-full flex flex-col items-center">
        {/* Encabezado Superior */}
        <header className="w-full max-w-xl mx-auto pt-8 pb-4 px-4 text-center">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs font-medium tracking-wide mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>HOMENAJE EN SU DÍA ESPECIAL</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl text-rose-50 font-black tracking-tight leading-tight">
            Feliz Cumpleaños,{' '}
            <span className="font-cursive text-4xl sm:text-5xl text-amber-300 block sm:inline mt-1">
              {giftContent.momName}
            </span>
          </h1>

          <p className="font-sans text-rose-200/80 text-xs sm:text-sm mt-2 max-w-md mx-auto font-light">
            Un recorrido cinematográfico por tus recuerdos y el inmenso amor que nos une.
          </p>
        </header>

        {/* Sección del Video en Remotion */}
        <section className="w-full max-w-md mx-auto px-4 my-6">
          <div className="relative w-full rounded-3xl overflow-hidden p-1 bg-gradient-to-tr from-rose-600/40 via-amber-400/30 to-rose-600/40 shadow-2xl shadow-rose-950/80">
            <div className="w-full rounded-[22px] overflow-hidden bg-black aspect-[9/16]">
              {hasStarted ? (
                <Player
                  component={BirthdayComposition}
                  durationInFrames={totalDuration}
                  compositionWidth={COMPOSITION_WIDTH}
                  compositionHeight={COMPOSITION_HEIGHT}
                  fps={COMPOSITION_FPS}
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                  controls
                  autoPlay
                  loop
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-stone-950 p-6 text-center">
                  <Heart className="w-12 h-12 text-rose-500 animate-pulse mb-3" />
                  <p className="text-stone-300 text-sm">
                    Toca "Abrir tu regalo" arriba para comenzar el video
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Indicador de scroll */}
          <div className="w-full flex justify-center items-center gap-1.5 text-xs text-rose-300/70 mt-4 animate-bounce">
            <span>Sigue bajando para más sorpresas</span>
            <ChevronDown className="w-4 h-4 text-amber-300" />
          </div>
        </section>

        {/* Separador de brillo */}
        <div className="w-36 h-0.5 bg-gradient-to-r from-transparent via-rose-500/40 to-transparent my-6" />

        {/* 1. El Sobre con la Carta Escrita */}
        <EnvelopeLetter />

        {/* Separador de brillo */}
        <div className="w-36 h-0.5 bg-gradient-to-r from-transparent via-amber-500/40 to-transparent my-6" />

        {/* 2. Galería de Fotos Polaroid Interactivas */}
        <PolaroidGallery />

        {/* Separador de brillo */}
        <div className="w-36 h-0.5 bg-gradient-to-r from-transparent via-rose-500/40 to-transparent my-6" />

        {/* 3. La Velita de Cumpleaños / Deseo y Despedida */}
        <MakeAWish />

        {/* Pie de página */}
        <footer className="w-full py-8 text-center border-t border-rose-950/40 text-stone-500 text-xs flex flex-col items-center gap-2">
          <p className="flex items-center gap-1">
            <span>Hecho con amor infinito por</span>
            <span className="text-rose-400 font-semibold">{giftContent.senderName}</span>
            <span>❤️</span>
          </p>
          <p className="text-[10px] text-stone-600">
            Guardado en tu corazón para siempre
          </p>
        </footer>
      </main>
    </div>
  );
};

export default App;
