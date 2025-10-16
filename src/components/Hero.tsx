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

      <div className="container mx-auto relative z-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center">

          {/* ЛІВА КОЛОНКА - текст */}
          <div className="text-center lg:text-left">
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
            <p className="text-lg mb-12 text-gray-300 leading-relaxed">
              {t('hero.description')}
            </p>

            {/* Geiger Counter Widget */}
            <div className="mb-12">
              <GeigerCounter />
            </div>

            {/* CTA Buttons */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
          </div>
          {/* КІНЕЦЬ ЛІВОЇ КОЛОНКИ */}

          {/* ПРАВА КОЛОНКА - Смартфон */}
          <div className="flex justify-center items-center lg:order-last order-first">
            <div className="relative">
              {/* Смартфон рамка */}
              <div className="w-[280px] h-[560px] lg:w-[340px] lg:h-[680px] bg-gray-900 rounded-[40px] border-8 border-gray-800 shadow-2xl overflow-hidden relative">
                {/* Notch (вирізка вгорі) */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-5 lg:w-32 lg:h-6 bg-black rounded-b-3xl z-10"></div>

                {/* Екран додатку */}
                <img
                  src="/animation1.gif"
                  alt="Obriy PDA App Screenshot"
                  className="w-full h-full object-cover"
                />

                {/* Glowing effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-green-400/20 to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
          {/* КІНЕЦЬ ПРАВОЇ КОЛОНКИ */}

        </div>
      </div>
    </section>
  );
};

export default Hero;