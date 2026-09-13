import React from 'react';

export const FloatingHearts: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-30">
      {[...Array(15)].map((_, i) => {
        const left = (i * 7 + (i % 3) * 11) % 100;
        const delay = (i * 1.5) % 10;
        const duration = 12 + ((i * 2) % 10);
        const size = 12 + (i % 4) * 6;

        return (
          <div
            key={i}
            className="absolute -bottom-10 text-rose-400 select-none animate-float"
            style={{
              left: `${left}%`,
              fontSize: `${size}px`,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
              opacity: 0.4 + (i % 5) * 0.1,
            }}
          >
            {i % 4 === 0 ? '🌸' : i % 4 === 1 ? '💖' : i % 4 === 2 ? '✨' : '🌹'}
          </div>
        );
      })}
    </div>
  );
};
