import React from 'react';

const Background: React.FC = () => {
    const reduce = typeof window !== 'undefined'
      ? document.documentElement.dataset.anim === 'off'
      : false;
  return (
    <>
      {/* ✅ ДОДАНО базовий фон (картинка з public/stalker-bg.jpg) */}
      <div
        className="fixed inset-0 z-0 bg-black" // чорний як fallback
        style={{
          backgroundImage: "url('/stalker-bg.jpg')", // шлях до файлу в public/
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Static noise overlay (без змін) */}
      <div className="fixed inset-0 opacity-20 pointer-events-none z-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0),
              radial-gradient(circle at 2px 2px, rgba(0,255,127,0.1) 1px, transparent 0)
            `,
            backgroundSize: '20px 20px, 40px 40px',
            animation: reduce ? 'none' : 'noise 0.2s infinite'
          }}
        />
      </div>

      {/* Scan lines (без змін) */}
      <div className="fixed inset-0 pointer-events-none z-10 opacity-20">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #00ff7f 2px, #00ff7f 4px)',
            animation: reduce ? 'none' : 'scanlines 4s linear infinite'
          }}
        />
      </div>

      {/* Vignette effect (без змін) */}
      <div className="fixed inset-0 pointer-events-none z-10">
        <div className="w-full h-full bg-gradient-radial from-transparent via-black/20 to-black/40" />
      </div>

      <style>{`
        @keyframes noise {
          0%, 100% { transform: translate(0, 0); }
          10% { transform: translate(-5%, -5%); }
          20% { transform: translate(-10%, 5%); }
          30% { transform: translate(5%, -10%); }
          40% { transform: translate(-5%, 15%); }
          50% { transform: translate(-10%, 5%); }
          60% { transform: translate(15%, 0%); }
          70% { transform: translate(0%, 15%); }
          80% { transform: translate(-15%, 0%); }
          90% { transform: translate(10%, 5%); }
        }

        @keyframes scanlines {
          0% { transform: translateY(-100vh); }
          100% { transform: translateY(100vh); }
        }

        /* ✅ Глобальний kill-switch для всіх анімацій */
          :root[data-anim="off"] * {
            animation: none !important;
          }
      `}</style>
    </>
  );
};

export default Background;
