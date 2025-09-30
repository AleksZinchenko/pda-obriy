import React, { useState, useEffect } from 'react';

const LoadingScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('INITIALIZING...');

  const loadingMessages = [
    'INITIALIZING...',
    'SCANNING ANOMALIES...',
    'CALIBRATING GEIGER COUNTER...',
    'CONNECTING TO THE ZONE...',
    'LOADING COMPLETE'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) return 100;
        const newProgress = prev + 2;
        
        // Update loading text based on progress
        if (newProgress >= 20 && newProgress < 40) {
          setLoadingText(loadingMessages[1]);
        } else if (newProgress >= 40 && newProgress < 60) {
          setLoadingText(loadingMessages[2]);
        } else if (newProgress >= 60 && newProgress < 80) {
          setLoadingText(loadingMessages[3]);
        } else if (newProgress >= 80) {
          setLoadingText(loadingMessages[4]);
        }
        
        return newProgress;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center font-mono">
      {/* Scan lines */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-400 to-transparent animate-pulse" 
             style={{ 
               backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #00ff7f 2px, #00ff7f 4px)',
               animation: 'scanlines 2s linear infinite'
             }} />
      </div>
      
      <div className="text-center relative z-10">
        {/* Terminal header */}
        <div className="mb-8">
          <div className="text-green-400 text-2xl font-bold mb-2 animate-pulse">
            OBRIY PDA last version...
          </div>
          <div className="text-green-600 text-sm">
            STALKER AIRSOFT SYSTEM
          </div>
        </div>
        
        {/* Loading bar */}
        <div className="w-96 mb-4">
          <div className="bg-gray-800 h-6 border border-green-400 relative overflow-hidden">
            <div 
              className="bg-green-400 h-full transition-all duration-100 relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-green-300 animate-pulse opacity-50" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center text-black font-bold text-sm">
              {progress}%
            </div>
          </div>
        </div>
        
        {/* Loading text */}
        <div className="text-green-400 text-lg animate-pulse">
          {loadingText}
        </div>
        
        {/* Blinking cursor */}
        <div className="inline-block w-2 h-6 bg-green-400 ml-1 animate-ping" />
      </div>
      
      <style jsx>{`
        @keyframes scanlines {
          0% { transform: translateY(-100vh); }
          100% { transform: translateY(100vh); }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;