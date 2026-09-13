import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { giftContent } from '../data/giftContent';

interface Props {
  shouldPlay: boolean;
}

export const AudioController: React.FC<Props> = ({ shouldPlay }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const { music } = giftContent;

  useEffect(() => {
    if (!audioRef.current) return;

    if (shouldPlay) {
      audioRef.current.volume = 0.6;
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.log('Audio autoplay prevented, user can tap to play:', err);
          setIsPlaying(false);
        });
    }
  }, [shouldPlay]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      });
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={music.audioUrl}
        loop
        preload="auto"
      />

      {/* Control flotante en la esquina superior */}
      <div className="fixed top-4 right-4 z-40">
        <button
          onClick={togglePlay}
          className="flex items-center gap-2 py-1.5 px-3 rounded-full bg-black/60 backdrop-blur-md border border-rose-500/30 text-rose-200 text-xs shadow-lg hover:bg-black/80 transition-all active:scale-95 group"
          title={isPlaying ? 'Pausar música' : 'Reproducir música'}
        >
          <div className="relative flex items-center justify-center">
            <Music
              className={`w-3.5 h-3.5 text-amber-300 ${
                isPlaying ? 'animate-spin' : ''
              }`}
              style={{ animationDuration: '4s' }}
            />
          </div>

          <span className="hidden sm:inline font-sans text-[11px] text-stone-300 max-w-[110px] truncate">
            {music.songTitle}
          </span>

          {isPlaying ? (
            <Volume2 className="w-3.5 h-3.5 text-rose-400" />
          ) : (
            <VolumeX className="w-3.5 h-3.5 text-stone-500" />
          )}
        </button>
      </div>
    </>
  );
};
