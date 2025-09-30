import React from 'react';
import { Settings, Gamepad2, BarChart3, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ForOrganizers: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="organizers" className="py-20 px-4">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-green-400">
            {t('organizers.title')}
          </h2>
          <p className="text-xl text-green-300 mb-8">
            {t('organizers.subtitle')}
          </p>
        </div>

        {/* Organizer Tools */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Game Control */}
          <div className="bg-gray-900/50 border border-green-400/30 p-8 hover:border-green-400 transition-colors group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-green-400/10 rounded-full animate-pulse" />
            <Settings className="text-green-400 mb-4 group-hover:animate-spin" size={32} />
            <h3 className="text-xl font-bold text-green-400 mb-4">{t('organizers.control.title')}</h3>
            <p className="text-gray-300 mb-6">{t('organizers.control.desc')}</p>
            
            {/* Mock Control Panel */}
            <div className="bg-black/60 p-4 border border-green-400/30 text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-400">{t('organizers.radiationLevel')}:</span>
                <span className="text-yellow-400">MEDIUM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">{t('organizers.playersOnline')}:</span>
                <span className="text-green-400">24</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">{t('organizers.nextBlowout')}:</span>
                <span className="text-red-400">15:30</span>
              </div>
            </div>
          </div>

          {/* Scenario Setup */}
          <div className="bg-gray-900/50 border border-blue-400/30 p-8 hover:border-blue-400 transition-colors group">
            <Gamepad2 className="text-blue-400 mb-4 group-hover:animate-bounce" size={32} />
            <h3 className="text-xl font-bold text-blue-400 mb-4">{t('organizers.setup.title')}</h3>
            <p className="text-gray-300 mb-6">{t('organizers.setup.desc')}</p>
            
            {/* Mock Setup Options */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                <span className="text-gray-400">{t('organizers.questSystem')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                <span className="text-gray-400">{t('organizers.economySettings')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-red-400 rounded-full" />
                <span className="text-gray-400">{t('organizers.factionBalance')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full" />
                <span className="text-gray-400">{t('organizers.anomalyPlacement')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full" />
                <span className="text-gray-400">{t('organizers.sendingMessages')}</span>
              </div>
            </div>
          </div>

          {/* Analytics */}
          <div className="bg-gray-900/50 border border-orange-400/30 p-8 hover:border-orange-400 transition-colors group">
            <BarChart3 className="text-orange-400 mb-4 group-hover:animate-pulse" size={32} />
            <h3 className="text-xl font-bold text-orange-400 mb-4">{t('organizers.analytics.title')}</h3>
            <p className="text-gray-300 mb-6">{t('organizers.analytics.desc')}</p>
            
            {/* Mock Analytics */}
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-gray-400">{t('organizers.engagement')}</span>
                  <span className="text-orange-400">89%</span>
                </div>
                <div className="w-full bg-gray-800 h-2">
                  <div className="w-4/5 h-full bg-orange-400" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-gray-400">{t('organizers.completion')}</span>
                  <span className="text-green-400">76%</span>
                </div>
                <div className="w-full bg-gray-800 h-2">
                  <div className="w-3/4 h-full bg-green-400" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Admin Panel Preview */}
        <div className="bg-black/60 border border-green-400/50 p-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-400/5 to-transparent" />
          <div className="flex items-start justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold text-green-400 mb-2">{t('organizers.adminPanel')}</h3>
              <p className="text-gray-300">{t('organizers.adminPanel.desc')}</p>
            </div>
            <Users className="text-green-400 animate-pulse" size={32} />
          </div>

          {/* Mock Admin Interface */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-900/50 p-4 border border-green-400/30">
              <h4 className="text-green-400 font-bold mb-3 text-sm">{t('organizers.activePlayers')}</h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Stalker_01</span>
                  <span className="text-green-400">{t('organizers.zoneCenter')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Ghost_Hunter</span>
                  <span className="text-yellow-400">{t('organizers.anomalyField')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Duty_Commander</span>
                  <span className="text-red-400">{t('organizers.redForest')}</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 p-4 border border-orange-400/30">
              <h4 className="text-orange-400 font-bold mb-3 text-sm">{t('organizers.gameEvents')}</h4>
              <div className="space-y-2 text-xs">
                <div className="text-green-400">{t('organizers.artifactSpawned')}</div>
                <div className="text-yellow-400">{t('organizers.anomalyDetected')}</div>
                <div className="text-red-400">{t('organizers.playerEliminated')}</div>
                <div className="text-blue-400">{t('organizers.questCompleted')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForOrganizers;