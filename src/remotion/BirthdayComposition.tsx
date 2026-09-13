import React from 'react';
import { Series } from 'remotion';
import { giftContent, SceneConfig } from '../data/giftContent';
import { IntroScene } from './scenes/IntroScene';
import { PhotoMomentScene } from './scenes/PhotoMomentScene';
import { CelebrationScene } from './scenes/CelebrationScene';

export const COMPOSITION_WIDTH = 1080;
export const COMPOSITION_HEIGHT = 1920;
export const COMPOSITION_FPS = 30;

export const calculateTotalDuration = (scenes: SceneConfig[]): number => {
  return scenes.reduce((acc, scene) => acc + scene.durationInFrames, 0);
};

export const BirthdayComposition: React.FC = () => {
  const { remotionScenes } = giftContent;

  return (
    <div className="w-full h-full bg-black font-sans select-none">
      <Series>
        {remotionScenes.map((scene, idx) => {
          const isFirst = idx === 0;
          const isLast = idx === remotionScenes.length - 1;

          return (
            <Series.Sequence
              key={scene.id}
              durationInFrames={scene.durationInFrames}
            >
              {isFirst ? (
                <IntroScene scene={scene} />
              ) : isLast ? (
                <CelebrationScene scene={scene} />
              ) : (
                <PhotoMomentScene scene={scene} index={idx} />
              )}
            </Series.Sequence>
          );
        })}
      </Series>
    </div>
  );
};
