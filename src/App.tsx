import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import NewsSection from './components/NewsSection';
import GameOverview from './components/GameOverview';
import Features from './components/Features';
import ForOrganizers from './components/ForOrganizers';
import ForInvestors from './components/ForInvestors';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import Background from './components/Background';
import LoadingScreen from './components/LoadingScreen';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-black text-green-400 font-mono relative overflow-x-hidden">
        <Background />
        <div className="relative z-20">
          <Header />
          <Hero />
          <NewsSection />
          <GameOverview />
          <Features />
          <ForOrganizers />
          {/* <ForInvestors /> */}
          <Contacts />
          <Footer />
        </div>
      </div>
    </LanguageProvider>
  );
}

export default App;