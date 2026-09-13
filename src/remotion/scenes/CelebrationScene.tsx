import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { SceneConfig } from '../../data/giftContent';

interface Props {
  scene: SceneConfig;
}

export const CelebrationScene: React.FC<Props> = ({ scene }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const opacity = interpolate(
    frame,
    [0, 15, scene.durationInFrames - 15, scene.durationInFrames],
    [0, 1, 1, 0.2],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );

  const bounce = spring({
    frame,
    fps,
    config: { damping: 12, mass: 0.8 },
  });

  const heartPulse = Math.sin(frame / 6) * 0.15 + 1;

  return (
    <div
      style={{ opacity }}
      className="relative w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-b from-[#2e0517] via-[#1a030d] to-[#0a0105] text-center overflow-hidden"
    >
      {/* Resplandor dorado y magenta festivo */}
      <div className="absolute w-[420px] h-[420px] rounded-full bg-gradient-to-tr from-rose-600/30 to-amber-500/25 blur-3xl pointer-events-none" />

      {/* Chispas flotantes simuladas */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(18)].map((_, i) => {
          const y = ((frame * (1 + (i % 4) * 0.4) + i * 35) % 650) - 30;
          const x = (i * 24 + 10) % 380;
          const s = Math.sin((frame + i * 5) / 8) * 0.4 + 0.8;
          return (
            <div
              key={i}
              className="absolute text-amber-300 pointer-events-none"
              style={{
                top: `${y}px`,
                left: `${x}px`,
                transform: `scale(${s})`,
                opacity: 0.6,
              }}
            >
              {i % 3 === 0 ? '✨' : i % 3 === 1 ? '💛' : '🌸'}
            </div>
          );
        })}
      </div>

      <div
        style={{ transform: `scale(${bounce})` }}
        className="relative z-10 max-w-sm flex flex-col items-center gap-3"
      >
        <div
          style={{ transform: `scale(${heartPulse})` }}
          className="w-16 h-16 rounded-full bg-rose-500/20 border border-rose-400/40 flex items-center justify-center text-3xl shadow-xl shadow-rose-950"
        >
          🎂
        </div>

        <span className="text-[11px] tracking-[0.25em] font-semibold text-amber-300 uppercase px-4 py-1 rounded-full bg-amber-400/10 border border-amber-400/40">
          {scene.badge}
        </span>

        <h1 className="font-serif text-3xl sm:text-4xl text-white font-black tracking-tight leading-tight drop-shadow-lg bg-gradient-to-r from-rose-200 via-amber-100 to-rose-200 bg-clip-text text-transparent">
          {scene.title}
        </h1>

        <p className="font-sans text-rose-100/95 text-sm sm:text-base font-light leading-relaxed max-w-xs mt-1">
          "{scene.verse}"
        </p>

        {scene.subtext && (
          <p className="font-cursive text-amber-300 text-2xl sm:text-3xl mt-1 tracking-wider">
            {scene.subtext}
          </p>
        )}
      </div>
    </div>
  );
};
