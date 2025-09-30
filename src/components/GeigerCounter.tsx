import React, { useState, useEffect, useRef } from 'react';
import { Activity, Volume2, VolumeX, Radiation } from 'lucide-react';
import { useSound } from '../contexts/SoundContext';

const GeigerCounter: React.FC = () => {
  const [count, setCount] = useState(0);
  const [intensity, setIntensity] = useState(1);
  const [isActive, setIsActive] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { soundEnabled, setSoundEnabled } = useSound();


  useEffect(() => {
    if (!isActive) return;

    const interval = setInterval(() => {
      // Calculate intensity based on mouse position and random factors
      const randomFactor = Math.random() * 0.5 + 0.5;
      const positionFactor = Math.min(Math.sqrt(mousePosition.x ** 2 + mousePosition.y ** 2) / 1000, 1);
      const newIntensity = Math.max(1, randomFactor * (1 + positionFactor * 2));
      
      setIntensity(newIntensity);
      setCount(prev => prev + Math.floor(newIntensity));

//       // Play click sound if enabled
//       if (soundEnabled && audioContextRef.current) {
//         playClickSound();
//       }
    }, 200 + Math.random() * 300);

    return () => clearInterval(interval);
  }, [isActive, mousePosition]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

//   const playClickSound = () => {
//     if (!audioContextRef.current) {
//       audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
//     }
//
//     const ctx = audioContextRef.current;
//     const oscillator = ctx.createOscillator();
//     const gainNode = ctx.createGain();
//
//     oscillator.connect(gainNode);
//     gainNode.connect(ctx.destination);
//
//     oscillator.frequency.setValueAtTime(800 + Math.random() * 400, ctx.currentTime);
//     oscillator.type = 'square';
//
//     gainNode.gain.setValueAtTime(0.1, ctx.currentTime);
//     gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
//
//     oscillator.start(ctx.currentTime);
//     oscillator.stop(ctx.currentTime + 0.1);
//   };

  const getIntensityColor = () => {
    if (intensity < 1.5) return 'text-green-400';
    if (intensity < 2) return 'text-yellow-400';
    if (intensity < 3) return 'text-orange-400';
    return 'text-red-400';
  };

  const getIntensityLevel = () => {
    if (intensity < 1.5) return 'LOW';
    if (intensity < 2) return 'MEDIUM';
    if (intensity < 3) return 'HIGH';
    return 'CRITICAL';
  };

  return (
    <div className="bg-black/80 border-2 border-green-400 p-6 max-w-md mx-auto relative overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Radiation className="text-green-400 animate-pulse" size={20} />
          <span className="text-green-400 font-bold">GEIGER COUNTER</span>
        </div>
        <button
          onClick={() => setSoundEnabled(!soundEnabled)}
          className="text-gray-400 hover:text-green-400 transition-colors"
        >
          {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
        </button>
      </div>

      {/* Main Display */}
      <div className="text-center mb-4">
        <div className="text-4xl font-bold mb-2 font-mono tracking-wider">
          <span className={getIntensityColor()}>{count.toString().padStart(6, '0')}</span>
        </div>
        <div className="text-sm text-gray-400">CPM (Counts Per Minute)</div>
      </div>

      {/* Intensity Display */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-gray-400">INTENSITY:</span>
        <span className={`font-bold ${getIntensityColor()}`}>
          {getIntensityLevel()}
        </span>
      </div>

      {/* Visual Intensity Bar */}
      <div className="w-full bg-gray-800 h-2 mb-4 relative overflow-hidden">
        <div 
          className={`h-full transition-all duration-200 ${
            intensity < 1.5 ? 'bg-green-400' :
            intensity < 2 ? 'bg-yellow-400' :
            intensity < 3 ? 'bg-orange-400' : 'bg-red-400'
          }`}
          style={{ width: `${Math.min(intensity * 25, 100)}%` }}
        />
        {intensity > 2 && (
          <div className="absolute inset-0 bg-white animate-pulse opacity-20" />
        )}
      </div>

      {/* Control Button */}
      <button
        onClick={() => setIsActive(!isActive)}
        className={`w-full py-2 border transition-colors ${
          isActive 
            ? 'border-green-400 text-green-400 hover:bg-green-400 hover:text-black' 
            : 'border-gray-400 text-gray-400 hover:bg-gray-400 hover:text-black'
        }`}
      >
        {isActive ? 'ACTIVE' : 'INACTIVE'}
      </button>

      {/* Scan line effect */}
      {isActive && (
        <div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/20 to-transparent animate-pulse pointer-events-none"
          style={{ 
            animation: 'scan 2s ease-in-out infinite',
            transform: 'translateY(-100%)'
          }}
        />
      )}

      <style jsx>{`
        @keyframes scan {
          0%, 100% { transform: translateY(-100%); opacity: 0; }
          50% { transform: translateY(100%); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default GeigerCounter;