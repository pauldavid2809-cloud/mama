import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { SceneConfig } from '../../data/giftContent';

interface Props {
  scene: SceneConfig;
  index: number;
}

export const PhotoMomentScene: React.FC<Props> = ({ scene, index }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Opacidad global con entrada y salida suave
  const opacity = interpolate(
    frame,
    [0, 18, scene.durationInFrames - 18, scene.durationInFrames],
    [0, 1, 1, 0],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );

  // Efecto Ken Burns (zoom cinematográfico suave en la foto)
  const imageScale = interpolate(
    frame,
    [0, scene.durationInFrames],
    [1.0, 1.14],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );

  // Entrada de la tarjeta con resorte suave
  const cardSpring = spring({
    frame,
    fps,
    config: { damping: 14, mass: 0.9 },
  });

  // Rotación ligera alternada según el índice de foto para dar sensación orgánica
  const rotationDirection = index % 2 === 0 ? 1.5 : -1.5;
  const currentRotation = rotationDirection * Math.sin(frame / 20) * 0.4;

  // Destello de luz passing-by
  const lightShimmer = interpolate(
    frame,
    [20, 70],
    [-100, 200],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );

  return (
    <div
      style={{ opacity }}
      className="relative w-full h-full flex flex-col items-center justify-between p-6 bg-gradient-to-b from-[#1c0611] via-[#10030a] to-[#080205] overflow-hidden"
    >
      {/* Fondo con desenfoque ambiental de la misma foto */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-25">
        <img
          src={scene.image}
          alt=""
          className="w-full h-full object-cover blur-2xl scale-125"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Encabezado con insignia de capítulo */}
      <div className="relative z-10 w-full pt-4 flex flex-col items-center">
        <span className="text-[10px] sm:text-xs tracking-[0.2em] font-semibold text-amber-300 uppercase px-3 py-1 rounded-full bg-amber-500/15 border border-amber-400/30 backdrop-blur-md shadow-sm">
          {scene.badge}
        </span>
      </div>

      {/* Marco de Foto Tipo Polaroid / Recuerdo Cinemático */}
      <div
        style={{
          transform: `scale(${cardSpring}) rotate(${currentRotation}deg)`,
        }}
        className="relative z-10 w-full max-w-[320px] aspect-[4/4.8] p-3.5 bg-white/95 rounded-2xl shadow-2xl shadow-black/80 flex flex-col items-center"
      >
        <div className="relative w-full h-[76%] rounded-xl overflow-hidden bg-neutral-900">
          <img
            src={scene.image}
            alt={scene.title}
            style={{ transform: `scale(${imageScale})` }}
            className="w-full h-full object-cover transition-transform origin-center"
          />
          {/* Brillo de luz que pasa por la foto */}
          <div
            className="absolute inset-0 w-24 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 pointer-events-none"
            style={{ left: `${lightShimmer}%` }}
          />
        </div>

        {/* Pie de foto de la Polaroid */}
        <div className="w-full h-[24%] flex flex-col justify-center items-center text-center px-2">
          <h3 className="font-serif font-bold text-neutral-800 text-sm sm:text-base leading-tight">
            {scene.title}
          </h3>
          {scene.subtext && (
            <p className="font-cursive text-rose-600 text-lg sm:text-xl leading-none mt-0.5">
              {scene.subtext}
            </p>
          )}
        </div>
      </div>

      {/* Verso Poético al pie */}
      <div className="relative z-10 w-full max-w-sm pb-4 text-center px-4">
        <div className="bg-black/50 backdrop-blur-md border border-rose-500/20 rounded-2xl p-4 shadow-lg">
          <p className="font-sans text-rose-100/95 text-xs sm:text-sm font-light leading-relaxed italic">
            "{scene.verse}"
          </p>
        </div>
      </div>
    </div>
  );
};
