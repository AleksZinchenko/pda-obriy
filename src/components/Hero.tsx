import React, { useState, useEffect } from 'react';
import { Download, Play, Settings, Smartphone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import GeigerCounter from './GeigerCounter';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const [glitchText, setGlitchText] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchText(true);
      setTimeout(() => setGlitchText(false), 200);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 pt-16 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-green-400/5 rounded-full animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-orange-400/5 rounded-full animate-ping" />
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-green-400/10 animate-bounce" />
      </div>

      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Title */}
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 text-green-400 transition-all duration-200 ${
            glitchText ? 'animate-pulse text-red-400' : ''
          }`}>
            {t('hero.title')}
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 text-green-300">
            {t('hero.subtitle')}
          </p>

          {/* Tagline */}
          <div className="mb-8">
            <span className="text-orange-400 text-lg font-bold border border-orange-400/50 px-4 py-2 inline-block animate-pulse">
              {t('hero.tagline')}
            </span>
          </div>

          {/* Description */}
          <p className="text-lg mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('hero.description')}
          </p>

          {/* Geiger Counter Widget */}
          <div className="mb-12">
            <GeigerCounter />
          </div>

          {/* CTA Buttons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <button className="bg-green-400/20 border border-green-400 text-green-400 px-4 py-3 hover:bg-green-400 hover:text-black transition-colors duration-300 flex items-center justify-center space-x-2 group">
              <Smartphone size={16} />
              <span className="text-sm">{t('hero.cta.googleplay')}</span>
            </button>
            
            <button className="bg-green-400/20 border border-green-400 text-green-400 px-4 py-3 hover:bg-green-400 hover:text-black transition-colors duration-300 flex items-center justify-center space-x-2 group">
              <Smartphone size={16} />
              <span className="text-sm">{t('hero.cta.appstore')}</span>
            </button>
            
            <button className="bg-orange-400/20 border border-orange-400 text-orange-400 px-4 py-3 hover:bg-orange-400 hover:text-black transition-colors duration-300 flex items-center justify-center space-x-2 group">
              <Download size={16} />
              <span className="text-sm">{t('hero.cta.apk')}</span>
            </button>
            
            <button className="bg-gray-400/20 border border-gray-400 text-gray-400 px-4 py-3 hover:bg-gray-400 hover:text-black transition-colors duration-300 flex items-center justify-center space-x-2 group">
              <Settings size={16} />
              <span className="text-sm">{t('hero.cta.admin')}</span>
            </button>
          </div>

          {/* Scroll indicator
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="w-6 h-10 border-2 border-green-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-green-400 rounded-full mt-2 animate-bounce" />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;