import React, { createContext, useContext, useState } from 'react';

type Language = 'ua' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  ua: {
    // Header
    'nav.overview': 'Огляд додатку',
    'nav.features': 'Можливості',
    'nav.organizers': 'Організаторам',
    'nav.investors': 'Інвесторам',
    'nav.contacts': 'Контакти',
    
    // Hero
    'hero.title': 'Відчуй Зону',
    'hero.subtitle': 'Мобільний додаток для страйкболу в стилі S.T.A.L.K.E.R.',
    'hero.description': 'КПК Обрій — твій польовий супутник у сценаріях страйкболу. Лічильник Гейгера реагує на сигнали навколишнього середовища, завдання надходять у твій Журнал, а рівні радіації та здоров\'я формують твою тактику. Атмосфера Зони тепер у твоїх руках.',
    'hero.cta.googleplay': 'Google Play',
    'hero.cta.appstore': 'App Store',
    'hero.cta.apk': 'Завантажити APK',
    'hero.cta.admin': 'Адмін-панель',
    'hero.tagline': 'Виживи в Зоні. Роби свою гру.',

    
    // Game Overview
    'gameoverview.title': 'Огляд додатку',
    'gameoverview.subtitle': 'Занурься в атмосферу Зони',
    'gameoverview.description': 'Досліджуй аномалії, полюй на артефакти та виживай у ворожому середовищі. Wi-Fi сигнали (R100, R300, ...) запускають звукові та візуальні ефекти та впливають на рівні радіації та здоров\'я, створюючи унікальний ігровий досвід.',
    'gameoverview.feature1': 'Лічильник Гейгера з реальними Wi-Fi сигналами, які трансформуються в радіаційний фон чи аномалії',
    'gameoverview.feature2': 'Динамічні рівні здоров\'я та радіації. Вплив накопиченої радіації на рівень здоров\'я',
    'gameoverview.feature3': 'Журнал містить реальні повідомлення для окремого гравця ,для угрупування, для всіх. В розробці вкладка "Завдання" ',
    'gameoverview.geiger': 'Лічильник Гейгера',
    'gameoverview.geiger.interface': 'Інтерфейс лічильника Гейгера',
    'gameoverview.health.system': 'Система контролю здоров\'я',
    'gameoverview.journal': 'Журнал',
    'gameoverview.task.journal': 'Журнал завдань',
    'gameoverview.wifi': 'Реальна інтеграція Wi-Fi модулів',
    'gameoverview.wifi.features': 'Додаток використовує реальні Wi-Fi мережі навколо вас для створення динамічного ігрового процесу. Мережі з певними назвами (R100, R300, ANOMALY тощо) викликають різні ефекти.',
    'gameoverview.newTask': '+ Нове завдання отримано',
    'gameoverview.anomaly': '! Виявлено аномалію',
    'gameoverview.radiation': '⚠ Попередження: радіація',


    
    // Features
    'features.title': 'Основні можливості',
    'features.geiger.title': 'Лічильник Гейгера',
    'features.geiger.desc': 'Реагує на реальні Wi-Fi сигнали навколо вас',
    'features.health.title': 'Система здоров\'я',
    'features.health.desc': 'Відстежуйте ваш стан та радіаційне зараження',
    'features.journal.title': 'Журнал завдань',
    'features.journal.desc': 'Отримуйте повідомлення та виконуйте місії',
    'features.anomaly.title': 'Сканер аномалій',
    'features.anomaly.desc': 'Детектуйте небезпечні зони та артефакти',
    'features.map.title': 'Карта Зони',
    'features.map.desc': 'Навігація з стилізованим інтерфейсом',
    'features.items.title': 'Предмети',
    'features.items.desc': 'Аптечки, антирад та інше спорядження',
    // === ADD start ===
        'features.advanced.title': 'Розширені ігрові механіки',
        'features.advanced.desc': 'Відчуй автентичну атмосферу S.T.A.L.K.E.R. з динамічними викидами, пошуком артефактів, протистоянням фракцій і виживанням, що реагує на реальні умови.',
        'features.advanced.labels.blowouts': 'Викиди',
        'features.advanced.labels.artifacts': 'Артефакти',
        'features.advanced.labels.factions': 'Фракції',
        'features.advanced.items.blowouts': 'Періодичні загрози середовища',
        'features.advanced.items.artifacts': 'Цінні аномальні об’єкти',
        'features.advanced.items.factions': 'Командні цілі',
        // === ADD end ===
    
    // For Organizers
    'organizers.title': 'Для організаторів',
    'organizers.subtitle': 'Керуйте грою в реальному часі',
    'organizers.control.title': 'Контроль гри',
    'organizers.control.desc': 'Налаштовуйте параметри гри в реальному часі',
    'organizers.setup.title': 'Налаштування сценарію',
    'organizers.setup.desc': 'Створюйте квести, економіку та фракції',
    'organizers.analytics.title': 'Аналітика',
    'organizers.analytics.desc': 'Статистика гравців, карти та прогрес гри',
    'organizers.adminPanel': 'Адмін-панель',
    'organizers.adminPanel.desc': 'Інтерфейс управління грою в реальному часі',
    'organizers.activePlayers': 'АКТИВНІ ГРАВЦІ',
    'organizers.gameEvents': 'ІГРОВІ ПОДІЇ',
    'organizers.radiationLevel': 'Рівень радіації:',
    'organizers.playersOnline': 'Гравців онлайн:',
    'organizers.nextBlowout': 'Наступний викид:',
    'organizers.questSystem': 'Система квестів',
    'organizers.economySettings': 'Налаштування економіки',
    'organizers.factionBalance': 'Баланс фракцій',
    'organizers.anomalyPlacement': 'Розміщення аномалій',
    'organizers.sendingMessages': 'Відправка повідомлень',
    'organizers.engagement': 'Залучення',
    'organizers.completion': 'Завершення',
    'organizers.artifactSpawned': '14:25 - Артефакт з\'явився',
    'organizers.anomalyDetected': '14:23 - Аномалію виявлено',
    'organizers.playerEliminated': '14:20 - Гравця виключено',
    'organizers.questCompleted': '14:18 - Квест завершено',
    'organizers.zoneCenter': 'Центр Зони',
    'organizers.anomalyField': 'Поле аномалій',
    'organizers.redForest': 'Рудий ліс',
    
    // For Investors
    'investors.title': 'Для інвесторів',
    'investors.subtitle': 'Масштабне рішення для ігрової індустрії',
    'investors.advantages.title': 'Переваги',
    'investors.advantages.desc': 'Мультиплатформенність, багатоігровість, масштабованість',
    'investors.roadmap.title': 'Дорожня карта',
    'investors.roadmap.done': '✅ Виконано: логін/реєстрація, основний лічильник, Журнал, адмін-панель',
    'investors.roadmap.progress': '🔄 У процесі: сканер аномалій, аптечки, карта',
    'investors.roadmap.next': '🚀 Далі: мультиплеєр, економіка артефактів, інтеграції',
    'investors.expansion.title': 'Плани розширення',
    'investors.expansion.desc': 'Інші жанри, платформи, партнерства',
    'investors.crossPlatform': 'Кросплатформенна сумісність (iOS, Android, Web)',
    'investors.scalable': 'Масштабується для різних ігрових жанрів',
    'investors.realWorld': 'Технологія взаємодії з реальним світом',
    'investors.growingMarket': 'Зростаючий ринок страйкболу та ігор',
    'investors.zombieSurvival': 'Ігри на виживання, зомбі-апокаліпсис',
    'investors.zombieDesc': 'Адаптація технології для зомбі-сценаріїв',
    'investors.militarySimulations': 'Військові симуляції',
    'investors.militaryDesc': 'Застосування для професійного навчання',
    'investors.themeParks': 'Тематичні парки',
    'investors.themeParksDesc': 'Розважальний досвід повного занурення в ігровий світ',
    'investors.phaseComplete': 'Фаза 1 - Завершено',
    'investors.phaseProgress': 'Фаза 2 - У процесі',
    'investors.phaseNext': 'Фаза 3 - Наступний крок',
    'investors.financialProjections': 'Фінансові прогнози',
    'investors.financialDesc': 'Ключові метрики та прогнози зростання',
    'investors.developmentInvestment': 'Інвестиції в розробку',
    'investors.targetUsers': 'Цільові користувачі Рік1-Рік3',
    'investors.revenueProjection': 'Прогноз доходів Рік1',
    'investors.roiProjection': 'Прогноз ROI',
    'investors.projectionNote': '* Прогнози базуються на попередньому аналізі ринку та відгуках перших користувачів',
    
    // Contacts
    'contacts.title': 'Контакти',
    'contacts.subtitle': 'Хочете ранній доступ? Залиште ваші контакти.',
    'contacts.telegram': 'Приєднатися до Telegram',
    'contacts.email.placeholder': 'Ваш email',
    'contacts.nickname.placeholder': 'Нікнейм',
    'contacts.role.placeholder': 'Ваша роль',
    'contacts.submit': 'Надіслати',
    'contacts.earlyAccess': 'Отримати ранній доступ',
    'contacts.formInactive': ' ',
    'contacts.player': 'Гравець',
    'contacts.organizer': 'Організатор',
    'contacts.investor': 'Інвестор',
    'contacts.developer': 'Розробник',
    'contacts.joinCommunity': 'Приєднатися до спільноти',
    'contacts.communityDesc': 'Спілкуйся з іншими сталкерами, отримуй оновлення та бери участь у процесі розробки.',
    'contacts.communityMembers': 'Учасників спільноти',
    'contacts.activeTesters': 'Активних тестерів',
    'contacts.developmentTeam': 'Команда розробки',
    'contacts.teamDesc': 'Ми невелика команда розробників, що створюють нові досвіди повного занурення для страйкбольної спільноти.',
    'contacts.coreTeam': 'Основна команда',
    'contacts.developers': 'розробників',
    'contacts.advisors': 'Радники',
    'contacts.gameExperts': 'ігрових експертів',
    'contacts.testers': 'Тестери',
    'contacts.players': 'гравців',
    'contacts.message.placeholder': 'Ваше повідомлення (необов\'язково)',
    
    // Footer
    'footer.copyright': '© 2025 Obriy PDA. Фанатський проект.',
    'footer.sfx': 'Звукові ефекти',
    'footer.disclaimer': 'Фанатський проект, не пов\'язаний з GSC Game World. Розробники "Zero Day Solutions" в асоціації з командою "Росомахи Черкаси"',
    'footer.description': 'Мобільний супутник для страйкбол ігор у стилі S.T.A.L.K.E.R. Відчуй Зону як ніколи раніше.',
    'footer.connect': 'Зв\'язок',
    'footer.settings': 'Налаштування',
    'footer.geigerEnabled': 'Клацання лічильника увімкнено',
    'footer.version': 'Версія',
    'footer.build': 'Збірка',
    'footer.endTransmission': '&gt; Кінець передачі_',
  },
  
  en: {
    // Header
    'nav.overview': 'App Overview',
    'nav.features': 'Features',
    'nav.organizers': 'For Organizers',
    'nav.investors': 'For Investors',
    'nav.contacts': 'Contacts',
    
    // Hero
    'hero.title': 'Feel the Zone',
    'hero.subtitle': 'A mobile app for S.T.A.L.K.E.R.-style airsoft.',
    'hero.description': 'Obriy PDA is your field companion in airsoft scenarios. The Geiger counter reacts to ambient signals, tasks arrive in your Journal, and radiation and health levels shape your tactics. The Zone\'s atmosphere, now in your hands.',
    'hero.cta.googleplay': 'Google Play',
    'hero.cta.appstore': 'App Store',
    'hero.cta.apk': 'Download APK',
    'hero.cta.admin': 'Test Admin Panel',
    'hero.tagline': '“Survive the Zone. Shape the game.”',
    
    // Game Overview
    'gameoverview.title': 'App Overview',
    'gameoverview.subtitle': 'Immerse yourself in the Zone\'s atmosphere',
    'gameoverview.description': 'Explore anomalies, hunt for artifacts, and survive in a hostile environment. Wi-Fi signals (R100, R300, ...) trigger sound and visual effects and influence radiation and health levels, creating a unique gaming experience.',
    'gameoverview.feature1': 'Geiger counter with real Wi-Fi signals that are transformed into radiation background or anomalies',
    'gameoverview.feature2': 'Dynamic levels of health and radiation. The impact of accumulated radiation on health levels',
    'gameoverview.feature3': 'The journal contains real messages for individual players, groups, and everyone. The “Tasks” tab is currently under development',
    'gameoverview.geiger': 'GEIGER',
    'gameoverview.geiger.interface': 'Geiger Counter Interface',
    'gameoverview.health.system': 'Health system',
    'gameoverview.journal': 'JOURNAL',
    'gameoverview.task.journal': 'Task journal',
    'gameoverview.wifi': 'Wi-Fi Signal Integration',
    'gameoverview.wifi.features': 'The app uses real Wi-Fi networks around you to create dynamic gameplay. Networks with specific names (R100, R300, ANOMALY, etc.) trigger different effects:',
    'gameoverview.newTask': '+ New task received',
    'gameoverview.anomaly': '! Anomaly detected',
    'gameoverview.radiation': '⚠ Radiation warning',

    
    // Features
    'features.title': 'Core Features',
    'features.geiger.title': 'Geiger Counter',
    'features.geiger.desc': 'Reacts to real Wi-Fi signals around you',
    'features.health.title': 'Health System',
    'features.health.desc': 'Track your condition and radiation exposure',
    'features.journal.title': 'Task Journal',
    'features.journal.desc': 'Receive messages and complete missions',
    'features.anomaly.title': 'Anomaly Scanner',
    'features.anomaly.desc': 'Detect dangerous zones and artifacts',
    'features.map.title': 'Zone Map',
    'features.map.desc': 'Navigation with custom styling',
    'features.items.title': 'Items',
    'features.items.desc': 'Medkits, anti-rads, and other equipment',
    // === ADD start ===
        'features.advanced.title': 'Advanced Gameplay Mechanics',
        'features.advanced.desc': 'Experience authentic S.T.A.L.K.E.R. atmosphere with dynamic blowouts, artifact hunting, faction warfare, and survival mechanics that respond to real-world conditions.',
        'features.advanced.labels.blowouts': 'Blowouts',
        'features.advanced.labels.artifacts': 'Artifacts',
        'features.advanced.labels.factions': 'Factions',
        'features.advanced.items.blowouts': 'Scheduled environmental hazards',
        'features.advanced.items.artifacts': 'Valuable anomalous objects',
        'features.advanced.items.factions': 'Team-based objectives',
        // === ADD end ===
    
    // For Organizers
    'organizers.title': 'For Organizers',
    'organizers.subtitle': 'Control the game in real-time',
    'organizers.control.title': 'Game Control',
    'organizers.control.desc': 'Adjust game parameters in real-time',
    'organizers.setup.title': 'Scenario Setup',
    'organizers.setup.desc': 'Create quests, economy, and factions',
    'organizers.analytics.title': 'Analytics',
    'organizers.analytics.desc': 'Player statistics, maps and game progress',
    'organizers.adminPanel': 'Admin Panel Preview',
    'organizers.adminPanel.desc': 'Real-time game management interface',
    'organizers.activePlayers': 'ACTIVE PLAYERS',
    'organizers.gameEvents': 'GAME EVENTS',
    'organizers.radiationLevel': 'Radiation Level:',
    'organizers.playersOnline': 'Players Online:',
    'organizers.nextBlowout': 'Next Blowout:',
    'organizers.questSystem': 'Quest System',
    'organizers.economySettings': 'Economy Settings',
    'organizers.factionBalance': 'Faction Balance',
    'organizers.anomalyPlacement': 'Anomaly Placement',
    'organizers.sendingMessages': 'Sending messages',
    'organizers.engagement': 'Engagement',
    'organizers.completion': 'Completion',
    'organizers.artifactSpawned': '14:25 - Artifact spawned',
    'organizers.anomalyDetected': '14:23 - Anomaly detected',
    'organizers.playerEliminated': '14:20 - Player eliminated',
    'organizers.questCompleted': '14:18 - Quest completed',
    'organizers.zoneCenter': 'Zone Center',
    'organizers.anomalyField': 'Anomaly Field',
    'organizers.redForest': 'Red Forest',
    
    // For Investors
    'investors.title': 'For Investors',
    'investors.subtitle': 'Scalable solution for gaming industry',
    'investors.advantages.title': 'Advantages',
    'investors.advantages.desc': 'Multi-platform, multi-game, scalable',
    'investors.roadmap.title': 'Roadmap',
    'investors.roadmap.done': '✅ Done: login/registration, main counter, Journal, admin panel',
    'investors.roadmap.progress': '🔄 In progress: anomaly scanner, medkits, map',
    'investors.roadmap.next': '🚀 Next: multiplayer, artifact economy, integrations',
    'investors.expansion.title': 'Expansion Plans',
    'investors.expansion.desc': 'Other genres, platforms, partnerships',
    'investors.crossPlatform': 'Cross-platform compatibility (iOS, Android, Web)',
    'investors.scalable': 'Scalable for multiple game genres',
    'investors.realWorld': 'Real-world interaction technology',
    'investors.growingMarket': 'Growing airsoft and gaming market',
    'investors.zombieSurvival': 'Zombie Survival Games',
    'investors.zombieDesc': 'Adapt technology for zombie-themed scenarios',
    'investors.militarySimulations': 'Military Simulations',
    'investors.militaryDesc': 'Professional training applications',
    'investors.themeParks': 'Theme Parks',
    'investors.themeParksDesc': 'Immersive entertainment experiences',
    'investors.phaseComplete': 'Phase 1 - Complete',
    'investors.phaseProgress': 'Phase 2 - In Progress',
    'investors.phaseNext': 'Phase 3 - Next Quarter',
    'investors.financialProjections': 'Financial Projections',
    'investors.financialDesc': 'Key metrics and growth projections',
    'investors.developmentInvestment': 'Development Investment',
    'investors.targetUsers': 'Target Users Y1-Н3',
    'investors.revenueProjection': 'Revenue Projection Y1',
    'investors.roiProjection': 'ROI Projection',
    'investors.projectionNote': '* Projections based on premarket analysis and initial user feedback',
    
    // Contacts
    'contacts.title': 'Contacts',
    'contacts.subtitle': 'Want early access? Leave your contact.',
    'contacts.telegram': 'Join Telegram',
    'contacts.email.placeholder': 'Your email',
    'contacts.nickname.placeholder': 'Nickname',
    'contacts.role.placeholder': 'Your role',
    'contacts.submit': 'Submit',
    'contacts.earlyAccess': 'Get Early Access',
    'contacts.formInactive': ' ',
    'contacts.player': 'Player',
    'contacts.organizer': 'Organizer',
    'contacts.investor': 'Investor',
    'contacts.developer': 'Developer',
    'contacts.joinCommunity': 'Join Our Community',
    'contacts.communityDesc': 'Connect with other stalkers, get updates, and participate in the development process.',
    'contacts.communityMembers': 'Community Members',
    'contacts.activeTesters': 'Active Testers',
    'contacts.developmentTeam': 'Development Team',
    'contacts.teamDesc': 'We\'re a small team of passionate developers creating immersive experiences for the airsoft community.',
    'contacts.coreTeam': 'Core Team',
    'contacts.developers': 'developers',
    'contacts.advisors': 'Advisors',
    'contacts.gameExperts': 'game experts',
    'contacts.testers': 'Testers',
    'contacts.players': 'players',
    'contacts.message.placeholder': 'Your message (optional)',
    
    // Footer
    'footer.copyright': '© 2025 Obriy PDA. Fan project.',
    'footer.sfx': 'Sound Effects',
    'footer.disclaimer': 'Fan project, not affiliated with GSC Game World. Developed by @Zero Day Solutions in association  with airsoft  team "Rosomahi Cherkasy" ',
    'footer.description': 'Mobile companion app for S.T.A.L.K.E.R.-style airsoft games. Experience the Zone like never before.',
    'footer.connect': 'Connect',
    'footer.settings': 'Settings',
    'footer.geigerEnabled': 'Geiger clicks enabled',
    'footer.version': 'v',
    'footer.build': 'Build',
    'footer.endTransmission': '&gt; End of transmission_',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ua');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['ua']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};