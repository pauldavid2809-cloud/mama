import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { SceneConfig } from '../../data/giftContent';

interface Props {
  scene: SceneConfig;
}

export const IntroScene: React.FC<Props> = ({ scene }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Animaciones de entrada suaves
  const opacity = interpolate(frame, [0, 20, scene.durationInFrames - 15, scene.durationInFrames], [0, 1, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const scale = spring({
    frame,
    fps,
    config: { damping: 15, mass: 0.8 },
  });

  const glowPulse = Math.sin(frame / 12) * 0.2 + 0.8;

  return (
    <div
      style={{ opacity }}
      className="relative w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-b from-[#2a0815] via-[#1a050f] to-[#0d0307] text-center overflow-hidden"
    >
      {/* Luz ambiente y destellos de fondo */}
      <div
        className="absolute w-96 h-96 rounded-full bg-rose-500/20 blur-3xl pointer-events-none"
        style={{
          transform: `scale(${glowPulse * 1.2})`,
        }}
      />
      <div
        className="absolute w-72 h-72 rounded-full bg-amber-400/15 blur-2xl pointer-events-none"
        style={{
          transform: `translateY(-30px) scale(${glowPulse})`,
        }}
      />

      {/* Partículas decorativas */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        {[...Array(12)].map((_, i) => {
          const yOffset = ((frame * (0.5 + (i % 3) * 0.3) + i * 40) % 600) - 50;
          const xOffset = (i * 28) % 360;
          return (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-amber-200 blur-[1px]"
              style={{
                top: `${yOffset}px`,
                left: `${xOffset}px`,
                opacity: Math.sin((frame + i * 10) / 10) * 0.5 + 0.5,
              }}
            />
          );
        })}
      </div>

      {/* Contenido Central */}
      <div
        style={{ transform: `scale(${scale})` }}
        className="relative z-10 max-w-sm flex flex-col items-center gap-4"
      >
        <span className="text-[11px] tracking-[0.25em] font-semibold text-amber-300 uppercase px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30">
          {scene.badge}
        </span>

        <h1 className="font-serif text-3xl sm:text-4xl text-rose-100 font-bold leading-tight tracking-tight drop-shadow-md">
          {scene.title}
        </h1>

        <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-rose-400 to-transparent my-1" />

        <p className="font-sans text-rose-200/90 text-base sm:text-lg leading-relaxed font-light drop-shadow">
          "{scene.verse}"
        </p>

        {scene.subtext && (
          <p className="font-cursive text-amber-300 text-2xl sm:text-3xl mt-2 tracking-wide">
            {scene.subtext}
          </p>
        )}
      </div>
    </div>
  );
};
