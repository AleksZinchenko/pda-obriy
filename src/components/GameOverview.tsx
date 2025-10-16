import React from 'react';
import { Zap, Heart, Radiation, BookOpen, Wifi } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import AppGallery from './AppGallery';

const GameOverview: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="overview" className="py-20 px-4 relative">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-green-400">
            {t('gameoverview.title')}
          </h2>
          <p className="text-xl text-green-300 mb-8">
            {t('gameoverview.subtitle')}
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {t('gameoverview.description')}
          </p>
        </div>

        {/* Screenshots/Mockups Placeholder */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Geiger Counter Mockup */}
          <div className="bg-gray-900/50 border border-green-400/30 p-6 hover:border-green-400 transition-colors group">
            <div className="bg-black/80 p-4 mb-4 border border-green-400/50">
              <div className="flex items-center space-x-2 mb-3">
                <Radiation className="text-green-400" size={16} />
                <span className="text-green-400 text-sm font-bold">{t('gameoverview.geiger')}</span>
              </div>
              <div className="text-2xl font-mono text-green-400 mb-2">001847</div>
              <div className="w-full bg-gray-800 h-1">
                <div className="w-1/3 h-full bg-green-400" />
              </div>
            </div>
            <h3 className="text-green-400 font-bold mb-2">{t('gameoverview.geiger.interface')}</h3>
            <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
              {t('gameoverview.feature1')}
            </p>
          </div>

          {/* Health & Radiation Mockup */}
          <div className="bg-gray-900/50 border border-green-400/30 p-6 hover:border-green-400 transition-colors group">
            <div className="bg-black/80 p-4 mb-4 border border-green-400/50">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Heart className="text-red-400" size={16} />
                  <div className="flex-1 bg-gray-800 h-2">
                    <div className="w-4/5 h-full bg-red-400" />
                  </div>
                  <span className="text-red-400 text-sm">80%</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Radiation className="text-yellow-400" size={16} />
                  <div className="flex-1 bg-gray-800 h-2">
                    <div className="w-1/3 h-full bg-yellow-400" />
                  </div>
                  <span className="text-yellow-400 text-sm">33%</span>
                </div>
              </div>
            </div>
            <h3 className="text-green-400 font-bold mb-2">{t('gameoverview.health.system')}</h3>
            <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
              {t('gameoverview.feature2')}
            </p>
          </div>

          {/* Journal Mockup */}
          <div className="bg-gray-900/50 border border-green-400/30 p-6 hover:border-green-400 transition-colors group">
            <div className="bg-black/80 p-4 mb-4 border border-green-400/50">
              <div className="flex items-center space-x-2 mb-3">
                <BookOpen className="text-green-400" size={16} />
                <span className="text-green-400 text-sm font-bold">{t("gameoverview.journal")}</span>
              </div>
              <div className="space-y-1 text-xs">
                <div className="text-green-400">{t('gameoverview.newTask')}</div>
                <div className="text-yellow-400">{t('gameoverview.anomaly')}</div>
                <div className="text-orange-400">{t('gameoverview.radiation')}</div>
              </div>

            </div>
            <h3 className="text-green-400 font-bold mb-2">{t("gameoverview.task.journal")}</h3>
            <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
              {t('gameoverview.feature3')}
            </p>
          </div>
        </div>

        {/* Wi-Fi Signal Explanation */}
        <div className="bg-gray-900/30 border border-green-400/30 p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-green-400/5 rounded-full animate-pulse" />
          <div className="flex items-start space-x-4">
            <Wifi className="text-green-400 animate-pulse mt-1" size={24} />
            <div>
              <h3 className="text-xl font-bold text-green-400 mb-4">{t("gameoverview.wifi")}</h3>
              <p className="text-gray-300 mb-4">
                {t("gameoverview.wifi.features")}
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-green-400 font-mono">R100</span>
                    <span className="text-gray-400">Low radiation zone</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-yellow-400 font-mono">R300</span>
                    <span className="text-gray-400">Medium radiation zone</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-red-400 font-mono">R500</span>
                    <span className="text-gray-400">High radiation zone</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-orange-400 font-mono">ANOMALY</span>
                    <span className="text-gray-400">Anomalous area</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-purple-400 font-mono">ARTIFACT</span>
                    <span className="text-gray-400">Artifact location</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-blue-400 font-mono">MEDKIT</span>
                    <span className="text-gray-400">Medical supplies</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* App Gallery */}
        <AppGallery />
      </div>
    </section>
  );
};

export default GameOverview;