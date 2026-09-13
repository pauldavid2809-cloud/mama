import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { giftContent } from '../data/giftContent';

interface Props {
  shouldPlay: boolean;
}

export const AudioController: React.FC<Props> = ({ shouldPlay }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const ytIframeRef = useRef<HTMLIFrameElement | null>(null);
  const [audioSrc, setAudioSrc] = useState(giftContent.music.audioUrl);
  const [isPlaying, setIsPlaying] = useState(false);
  const { music } = giftContent;

  const handleAudioError = () => {
    if (music.fallbackUrl && audioSrc !== music.fallbackUrl) {
      setAudioSrc(music.fallbackUrl);
    }
  };

  useEffect(() => {
    if (!shouldPlay) return;

    // 1. Si hay video de YouTube configurado, enviar comando para reproducir
    if (music.youtubeVideoId && ytIframeRef.current?.contentWindow) {
      try {
        ytIframeRef.current.contentWindow.postMessage(
          JSON.stringify({ event: 'command', func: 'playVideo', args: [] }),
          '*'
        );
        setIsPlaying(true);
      } catch (e) {
        console.log('Error enviando comando a YouTube:', e);
      }
    }

    // 2. Si no hay YouTube o como apoyo directo
    if (!music.youtubeVideoId && audioRef.current) {
      audioRef.current.volume = 0.6;
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  }, [shouldPlay, music.youtubeVideoId]);

  const togglePlay = () => {
    if (music.youtubeVideoId && ytIframeRef.current?.contentWindow) {
      const command = isPlaying ? 'pauseVideo' : 'playVideo';
      ytIframeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: 'command', func: command, args: [] }),
        '*'
      );
      setIsPlaying(!isPlaying);
      return;
    }

    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().then(() => setIsPlaying(true));
      }
    }
  };

  return (
    <>
      {/* Reproductor de YouTube de fondo con audio directo */}
      {music.youtubeVideoId && (
        <iframe
          ref={ytIframeRef}
          className="fixed -top-[9999px] -left-[9999px] w-1 h-1 opacity-0 pointer-events-none"
          src={`https://www.youtube.com/embed/${music.youtubeVideoId}?enablejsapi=1&autoplay=0&loop=1&playlist=${music.youtubeVideoId}&playsinline=1&controls=0`}
          allow="autoplay; encrypted-media"
          title="Fondo Musical YouTube"
        />
      )}

      {/* Audio nativo como respaldo */}
      {!music.youtubeVideoId && (
        <audio
          ref={audioRef}
          src={audioSrc}
          onError={handleAudioError}
          loop
          preload="auto"
        />
      )}

      {/* Botón de control flotante en la esquina superior derecha */}
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

          <span className="hidden sm:inline font-sans text-[11px] text-stone-300 max-w-[120px] truncate">
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
