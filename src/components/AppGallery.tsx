import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const AppGallery: React.FC = () => {
  const { t } = useLanguage();

  const screens = [
    { id: 'login', image: '/screen-login.png' },
    { id: 'registration', image: '/screen-registration.png' },
    { id: 'counter', image: '/screen-counter.png' },
    { id: 'journal', image: '/screen-journal.png' },
    { id: 'agony', image: '/screen-agony.png' },
  ];

  return (
    <div className="mt-16">
      <h3 className="text-2xl font-bold text-green-400 mb-8 text-center">
        Скріншоти додатку
      </h3>

      {/* Mobile: Horizontal Scroll */}
      <div className="lg:hidden overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4">
        <div className="flex gap-4 px-4">
          {screens.map((screen) => (
            <div
              key={screen.id}
              className="flex-none w-[280px] snap-center"
            >
              <div className="bg-gray-900/50 border border-green-400/30 rounded-lg overflow-hidden hover:border-green-400 transition-colors">
                <img
                  src={screen.image}
                  alt={t(`gallery.${screen.id}`)}
                  className="w-full h-[560px] object-cover"
                />
                <div className="p-4 text-center">
                  <p className="text-green-400 font-bold">
                    {t(`gallery.${screen.id}`)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: 1 Row, 5 Columns - Phone Proportions */}
      <div className="hidden lg:grid lg:grid-cols-5 gap-3">
        {screens.map((screen) => (
          <div
            key={screen.id}
            className="bg-gray-900 rounded-[24px] border-4 border-gray-800 shadow-xl overflow-hidden hover:border-green-400 transition-colors group relative"
          >
            {/* Notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-4 bg-black rounded-b-2xl z-10"></div>

            <img
              src={screen.image}
              alt={t(`gallery.${screen.id}`)}
              className="w-full h-[480px] object-cover group-hover:scale-105 transition-transform duration-300"
            />

            {/* Glowing effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-green-400/10 to-transparent pointer-events-none"></div>

            <div className="p-2 text-center bg-gray-900/80">
              <p className="text-green-400 font-bold text-xs">
                {t(`gallery.${screen.id}`)}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Scroll hint для mobile */}
      <div className="lg:hidden text-center mt-4">
        <p className="text-gray-500 text-sm">← Прокрутіть для перегляду →</p>
      </div>
    </div>
  );
};

export default AppGallery;