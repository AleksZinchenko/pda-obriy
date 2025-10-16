import React, { useState } from 'react';
import { Github, Volume2, VolumeX, Zap, ExternalLink, Radiation } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useSound } from '../contexts/SoundContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const { soundEnabled, setSoundEnabled } = useSound();

  return (
    <footer className="bg-black/90 border-t border-green-400/30 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Radiation className="text-green-400 animate-pulse" size={24} />
              <span className="text-xl font-bold text-green-400">OBRIY PDA</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              {t('footer.description')}
            </p>
            <p className="text-xs text-gray-500">
              {t('footer.disclaimer')}
            </p>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-green-400 font-bold mb-4">{t('footer.connect')}</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-600 opacity-50 cursor-not-allowed">
                <Github size={16} />
                <span>GitHub (soon)</span>
              </div>
              <a
                href="https://t.me/obriy_kpk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 text-blue-400"
                >
                  <path d="M9.04 15.08 8.9 18.9c.36 0 .52-.15.71-.33l1.7-1.63 3.52 2.58c.65.36 1.1.17 1.27-.6l2.31-10.87v-.01c.2-.92-.33-1.28-.95-1.06L3.48 9.55c-.9.35-.88.85-.15 1.08l4.48 1.4 10.38-6.55-9.15 9.7z" />
                </svg>
                <span className="group-hover:underline">Telegram</span>
                <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="https://x.com/obriyPDA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 text-blue-400"
                >
                  <path d="M18.244 2h3.308l-7.227 8.26L22 22h-6.417l-5.027-6.56L4.8 22H1.49l7.73-8.84L2 2h6.59l4.49 5.95L18.244 2zm-1.16 18h1.83L7.03 4h-1.9l11.955 16z" />
                </svg>
                <span className="group-hover:underline">X (Twitter)</span>
                <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>

          {/* Settings */}
          <div>
            <h4 className="text-green-400 font-bold mb-4">{t('footer.settings')}</h4>
            <div className="space-y-2">
              <button
                onClick={() => setSoundEnabled(!soundEnabled)}
                className="flex items-center space-x-2 text-gray-400 hover:text-green-400 transition-colors"
              >
                {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
                <span>{t('footer.sfx')}</span>
              </button>
              {soundEnabled && (
                <div className="ml-6 text-xs text-gray-500">
                  {t('footer.geigerEnabled')}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-green-400/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            {t('footer.copyright')}
          </div>
          
          {/* Version Info */}
          <div className="text-xs text-gray-500 mt-4 md:mt-0">
            <span className="text-green-400">{t('footer.version')}1.0.1</span> |
            <span className="ml-1">{t('footer.build')} 2025.09</span>
          </div>
        </div>

        {/* Terminal-style signature */}
        <div className="mt-4 text-center">
          <div className="text-xs text-green-400/50 font-mono">
            &gt; End of transmission_ <span className="animate-ping">|</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;