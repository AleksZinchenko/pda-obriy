import React from 'react';
import { Zap, Heart, BookOpen, Search, Map, Package, Radiation } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Features: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Radiation,
      title: t('features.geiger.title'),
      description: t('features.geiger.desc'),
      color: 'text-green-400',
      borderColor: 'border-green-400',
      hoverColor: 'hover:border-green-400'
    },
    {
      icon: Heart,
      title: t('features.health.title'),
      description: t('features.health.desc'),
      color: 'text-red-400',
      borderColor: 'border-red-400',
      hoverColor: 'hover:border-red-400'
    },
    {
      icon: BookOpen,
      title: t('features.journal.title'),
      description: t('features.journal.desc'),
      color: 'text-blue-400',
      borderColor: 'border-blue-400',
      hoverColor: 'hover:border-blue-400'
    },
    {
      icon: Search,
      title: t('features.anomaly.title'),
      description: t('features.anomaly.desc'),
      color: 'text-purple-400',
      borderColor: 'border-purple-400',
      hoverColor: 'hover:border-purple-400'
    },
    {
      icon: Map,
      title: t('features.map.title'),
      description: t('features.map.desc'),
      color: 'text-yellow-400',
      borderColor: 'border-yellow-400',
      hoverColor: 'hover:border-yellow-400'
    },
    {
      icon: Package,
      title: t('features.items.title'),
      description: t('features.items.desc'),
      color: 'text-orange-400',
      borderColor: 'border-orange-400',
      hoverColor: 'hover:border-orange-400'
    }
  ];

  return (
    <section id="features" className="py-20 px-4 bg-gray-900/20">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-green-400">
            {t('features.title')}
          </h2>
          <div className="w-24 h-1 bg-green-400 mx-auto mb-8" />
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className={`bg-black/60 border ${feature.borderColor}/30 ${feature.hoverColor} p-6 transition-all duration-300 hover:scale-105 hover:bg-black/80 group relative overflow-hidden`}
              >
                {/* Background glow effect */}
                <div className={`absolute inset-0 ${feature.color.replace('text-', 'bg-')}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                {/* Icon */}
                <div className={`${feature.color} mb-4 group-hover:animate-pulse`}>
                  <IconComponent size={32} />
                </div>

                {/* Content */}
                <h3 className={`text-xl font-bold ${feature.color} mb-3 group-hover:text-white transition-colors`}>
                  {feature.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  {feature.description}
                </p>

                {/* Hover accent line */}
                <div className={`absolute bottom-0 left-0 w-0 h-1 ${feature.color.replace('text-', 'bg-')} group-hover:w-full transition-all duration-300`} />
              </div>
            );
          })}
        </div>

        {/* Additional Feature Info */}
        <div className="mt-16 text-center">
          <div className="bg-gray-900/50 border border-green-400/30 p-8 max-w-4xl mx-auto relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 via-yellow-400 to-red-400 animate-pulse" />
            <h3 className="text-2xl font-bold text-green-400 mb-4">
              {t('features.advanced.title')}
            </h3>
            <p className="text-gray-300 mb-6">
              {t('features.advanced.desc')}
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div className="text-center">
                <div className="text-red-400 font-bold mb-2 uppercase">
                  {t('features.advanced.labels.blowouts')}
                </div>
                <div className="text-gray-400">
                  {t('features.advanced.items.blowouts')}
                </div>
              </div>
              <div className="text-center">
                <div className="text-yellow-400 font-bold mb-2 uppercase">
                  {t('features.advanced.labels.artifacts')}
                </div>
                <div className="text-gray-400">
                  {t('features.advanced.items.artifacts')}
                </div>
              </div>
              <div className="text-center">
                <div className="text-blue-400 font-bold mb-2 uppercase">
                  {t('features.advanced.labels.factions')}
                </div>
                <div className="text-gray-400">
                  {t('features.advanced.items.factions')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;