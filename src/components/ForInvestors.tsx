import React from 'react';
import { TrendingUp, Target, Rocket, DollarSign } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ForInvestors: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="investors" className="py-20 px-4 bg-gray-900/20">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-green-400">
            {t('investors.title')}
          </h2>
          <p className="text-xl text-green-300 mb-8">
            {t('investors.subtitle')}
          </p>
        </div>

        {/* Investment Highlights */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Advantages */}
          <div className="bg-black/60 border border-green-400/50 p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-green-400/10 rounded-full animate-pulse" />
            <Target className="text-green-400 mb-4 animate-bounce" size={32} />
            <h3 className="text-2xl font-bold text-green-400 mb-4">{t('investors.advantages.title')}</h3>
            <p className="text-gray-300 mb-6">{t('investors.advantages.desc')}</p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <span className="text-gray-300">{t('investors.crossPlatform')}</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" />
                <span className="text-gray-300">{t('investors.scalable')}</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse" />
                <span className="text-gray-300">{t('investors.realWorld')}</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse" />
                <span className="text-gray-300">{t('investors.growingMarket')}</span>
              </div>
            </div>
          </div>

          {/* Expansion Plans */}
          <div className="bg-black/60 border border-orange-400/50 p-8">
            <Rocket className="text-orange-400 mb-4" size={32} />
            <h3 className="text-2xl font-bold text-orange-400 mb-4">{t('investors.expansion.title')}</h3>
            <p className="text-gray-300 mb-6">{t('investors.expansion.desc')}</p>
            
            <div className="space-y-4">
              <div className="bg-gray-900/50 p-4 border-l-4 border-purple-400">
                <h4 className="text-purple-400 font-bold mb-2">{t('investors.zombieSurvival')}</h4>
                <p className="text-gray-400 text-sm">{t('investors.zombieDesc')}</p>
              </div>
              <div className="bg-gray-900/50 p-4 border-l-4 border-blue-400">
                <h4 className="text-blue-400 font-bold mb-2">{t('investors.militarySimulations')}</h4>
                <p className="text-gray-400 text-sm">{t('investors.militaryDesc')}</p>
              </div>
              <div className="bg-gray-900/50 p-4 border-l-4 border-green-400">
                <h4 className="text-green-400 font-bold mb-2">{t('investors.themeParks')}</h4>
                <p className="text-gray-400 text-sm">{t('investors.themeParksDesc')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Roadmap */}
        <div className="bg-gray-900/30 border border-green-400/30 p-8 mb-16">
          <div className="flex items-center space-x-3 mb-8">
            <TrendingUp className="text-green-400 animate-pulse" size={32} />
            <h3 className="text-2xl font-bold text-green-400">{t('investors.roadmap.title')}</h3>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4 p-4 bg-green-400/10 border border-green-400/30">
              <span className="text-2xl">✅</span>
              <div>
                <h4 className="text-green-400 font-bold mb-2">{t('investors.phaseComplete')}</h4>
                <p className="text-gray-300">{t('investors.roadmap.done')}</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 bg-yellow-400/10 border border-yellow-400/30">
              <span className="text-2xl animate-spin">🔄</span>
              <div>
                <h4 className="text-yellow-400 font-bold mb-2">{t('investors.phaseProgress')}</h4>
                <p className="text-gray-300">{t('investors.roadmap.progress')}</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 bg-orange-400/10 border border-orange-400/30">
              <span className="text-2xl animate-pulse">🚀</span>
              <div>
                <h4 className="text-orange-400 font-bold mb-2">{t('investors.phaseNext')}</h4>
                <p className="text-gray-300">{t('investors.roadmap.next')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Financial Metrics Placeholder */}
        <div className="bg-black/60 border border-blue-400/50 p-8 text-center">
          <DollarSign className="text-blue-400 mx-auto mb-4 animate-bounce" size={32} />
          <h3 className="text-2xl font-bold text-blue-400 mb-4">{t('investors.financialProjections')}</h3>
          <p className="text-gray-300 mb-8">{t('investors.financialDesc')}</p>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-gray-900/50 p-4 border border-green-400/30">
              <div className="text-2xl font-bold text-green-400 mb-2">$48K</div>
              <div className="text-gray-400 text-sm">{t('investors.developmentInvestment')}</div>
            </div>
            <div className="bg-gray-900/50 p-4 border border-yellow-400/30">
              <div className="text-2xl font-bold text-yellow-400 mb-2">2,500+</div>
              <div className="text-gray-400 text-sm">{t('investors.targetUsers')}</div>
            </div>
            <div className="bg-gray-900/50 p-4 border border-orange-400/30">
              <div className="text-2xl font-bold text-orange-400 mb-2">$10K</div>
              <div className="text-gray-400 text-sm">{t('investors.revenueProjection')}</div>
            </div>
            <div className="bg-gray-900/50 p-4 border border-red-400/30">
              <div className="text-2xl font-bold text-red-400 mb-2">30%</div>
              <div className="text-gray-400 text-sm">{t('investors.roiProjection')}</div>
            </div>
          </div>
          
          <div className="mt-6 text-xs text-gray-500">
            {t('investors.projectionNote')}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForInvestors;