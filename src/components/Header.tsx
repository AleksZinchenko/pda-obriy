import React, { useState, useEffect } from 'react';
import { Menu, X, Zap, Radiation, Volume2, VolumeX } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useSound } from '../contexts/SoundContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { soundEnabled, setSoundEnabled } = useSound();


  // ✅ Перемикач анімацій
  const [animationsOn, setAnimationsOn] = useState(
    () => localStorage.getItem('animations') !== 'off'
  );

  // ✅ ефект для анімацій
  useEffect(() => {
    localStorage.setItem('animations', animationsOn ? 'on' : 'off');
    document.documentElement.dataset.anim = animationsOn ? 'on' : 'off';
  }, [animationsOn]);

  // ✅ ефект для скролу
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-sm border-b border-green-400/30' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer group" onClick={() => scrollToSection('hero')}>
            <Radiation
              className={`text-green-400 group-hover:text-green-300 transition-colors ${animationsOn ? 'animate-pulse' : ''}`}
              size={24}
            />
            <span className="text-xl font-bold text-green-400 group-hover:text-green-300 transition-colors">
              OBRIY PDA
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('overview')}
              className="text-green-400 hover:text-green-300 transition-colors relative group"
            >
              {t('nav.overview')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300" />
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className="text-green-400 hover:text-green-300 transition-colors relative group"
            >
              {t('nav.features')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300" />
            </button>
            <button 
              onClick={() => scrollToSection('organizers')}
              className="text-green-400 hover:text-green-300 transition-colors relative group"
            >
              {t('nav.organizers')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300" />
            </button>
            <button 
              onClick={() => scrollToSection('investors')}
              className="text-green-400 hover:text-green-300 transition-colors relative group"
            >
              {t('nav.investors')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300" />
            </button>
            <button 
              onClick={() => scrollToSection('contacts')}
              className="text-green-400 hover:text-green-300 transition-colors relative group"
            >
              {t('nav.contacts')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300" />
            </button>
          </nav>

          {/* Language Switcher & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1 border border-green-400/50 rounded">
              <button
                onClick={() => setLanguage('ua')}
                className={`px-2 py-1 text-xs transition-colors ${
                  language === 'ua' 
                    ? 'bg-green-400 text-black' 
                    : 'text-green-400 hover:text-green-300'
                }`}
              >
                UA
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 text-xs transition-colors ${
                  language === 'en' 
                    ? 'bg-green-400 text-black' 
                    : 'text-green-400 hover:text-green-300'
                }`}
              >
                EN
              </button>
            </div>

             {/* ✅ НОВА КНОПКА ДЛЯ ВИМК/ВМИК АНІМАЦІЙ */}
             <button
               onClick={() => setAnimationsOn(v => !v)}
               aria-pressed={!animationsOn}
               className="px-2 py-1 text-xs border border-green-400/50 rounded text-green-400 hover:text-green-300"
               title="Toggle animations"
             >
               {animationsOn ? 'ANIM ON' : 'ANIM OFF'}
             </button>

             {/* ✅ НОВА КНОПКА ДЛЯ ВИМК/ВМИК ЗВУКОВИХ ЕФЕКТІВ (SFX) */}
             <button
               onClick={() => setSoundEnabled(!soundEnabled)}
               aria-pressed={soundEnabled}
               className="px-2 py-1 text-xs border border-green-400/50 rounded text-green-400 hover:text-green-300 flex items-center space-x-1"
               title={t('footer.sfx')}
             >
               {soundEnabled ? <Volume2 size={14} /> : <VolumeX size={14} />}
               <span>{soundEnabled ? 'SFX ON' : 'SFX OFF'}</span>
             </button>

             <button
               onClick={() => setIsMenuOpen(!isMenuOpen)}
               className="md:hidden text-green-400 hover:text-green-300 transition-colors"
             >
               {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
             </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`md:hidden bg-black/95 border-t border-green-400/30 ${animationsOn ? 'animate-pulse' : ''}`}>
            <nav className="py-4 space-y-4">
              <button 
                onClick={() => scrollToSection('overview')}
                className="block w-full text-left px-4 py-2 text-green-400 hover:text-green-300 hover:bg-green-400/10 transition-colors"
              >
                {t('nav.overview')}
              </button>
              <button 
                onClick={() => scrollToSection('features')}
                className="block w-full text-left px-4 py-2 text-green-400 hover:text-green-300 hover:bg-green-400/10 transition-colors"
              >
                {t('nav.features')}
              </button>
              <button 
                onClick={() => scrollToSection('organizers')}
                className="block w-full text-left px-4 py-2 text-green-400 hover:text-green-300 hover:bg-green-400/10 transition-colors"
              >
                {t('nav.organizers')}
              </button>
              <button 
                onClick={() => scrollToSection('investors')}
                className="block w-full text-left px-4 py-2 text-green-400 hover:text-green-300 hover:bg-green-400/10 transition-colors"
              >
                {t('nav.investors')}
              </button>
              <button 
                onClick={() => scrollToSection('contacts')}
                className="block w-full text-left px-4 py-2 text-green-400 hover:text-green-300 hover:bg-green-400/10 transition-colors"
              >
                {t('nav.contacts')}
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;