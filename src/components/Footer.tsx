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
              <div href="#" className="flex items-center space-x-2 text-gray-400 hover:text-green-400 transition-colors group">
                <Github size={16} />
                <span className="group-hover:underline">GitHub</span>
                <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div href="#" className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors group">
                <div className="w-4 h-4 bg-blue-400 rounded" />
                <span className="group-hover:underline">Telegram</span>
                <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div href="#" className="flex items-center space-x-2 text-gray-400 hover:text-purple-400 transition-colors group">
                <div className="w-4 h-4 bg-purple-400 rounded" />
                <span className="group-hover:underline">Discord</span>
                <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
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