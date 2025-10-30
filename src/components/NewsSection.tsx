import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface NewsPost {
  title: string;
  date: string;
  description: string;
  tags: string[];
  image?: string;
}

const NewsSection: React.FC = () => {
  const { language } = useLanguage();
  const [posts, setPosts] = useState<NewsPost[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Динамічний імпорт JSON файлів
    const loadPosts = async () => {
      try {
        const newsFiles = import.meta.glob('/news/*.json', { eager: true });
        const loadedPosts: NewsPost[] = [];

        for (const path in newsFiles) {
          const module: any = await newsFiles[path]();
          loadedPosts.push(module.default || module);
        }

        // Сортуємо за датою (новіші спочатку)
        loadedPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        setPosts(loadedPosts);
      } catch (error) {
        console.error('Error loading news:', error);
      }
    };

    loadPosts();
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % posts.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + posts.length) % posts.length);
  };

  if (posts.length === 0) return null;

  const currentPost = posts[currentIndex];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Заголовок секції */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 glitch-text">
            {language === 'ua' ? '[ НОВИНИ РОЗРОБКИ ]' : '[ DEVELOPMENT NEWS ]'}
          </h2>
          <div className="h-px bg-green-500/30 w-64 mx-auto"></div>
        </div>

        {/* Слайдер */}
        <div className="relative">
          {/* ASCII рамка */}
          <div className="border-2 border-green-500/50 p-6 bg-black/80 backdrop-blur-sm hover:border-green-400 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]">

            {/* Зображення (якщо є) */}
            {currentPost.image && (
              <div className="mb-6 overflow-hidden">
                <img
                  src={currentPost.image}
                  alt={currentPost.title}
                  className="w-full h-64 object-cover opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
            )}

            {/* Дата та теги */}
            <div className="flex flex-wrap gap-2 mb-4 text-sm">
              <span className="text-green-500/70">
                {new Date(currentPost.date).toLocaleDateString('uk-UA')}
              </span>
              {currentPost.tags.map((tag, i) => (
                <span key={i} className="text-green-400/60 hover:text-green-400 transition-colors">
                  {tag}
                </span>
              ))}
            </div>

            {/* Заголовок */}
            <h3 className="text-2xl font-bold text-green-400 mb-4 glitch-text-subtle">
              {currentPost.title}
            </h3>

            {/* Опис */}
            <p className="text-green-300/80 leading-relaxed mb-6">
              {currentPost.description}
            </p>

            {/* ASCII декорація */}
            <div className="text-green-500/30 text-xs font-mono">
              {'> '}{'─'.repeat(50)}
            </div>
          </div>

          {/* Кнопки навігації */}
          {posts.length > 1 && (
            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={prevSlide}
                className="px-6 py-2 border border-green-500/50 hover:bg-green-500/10 transition-all text-green-400 font-mono"
              >
                {'< НАЗАД'}
              </button>

              {/* Індикатори */}
              <div className="flex items-center gap-2">
                {posts.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`w-2 h-2 border border-green-500 transition-all ${
                      i === currentIndex ? 'bg-green-500' : 'bg-transparent'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="px-6 py-2 border border-green-500/50 hover:bg-green-500/10 transition-all text-green-400 font-mono"
              >
                {'ДАЛІ >'}
              </button>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .glitch-text-subtle {
          text-shadow: 0 0 5px rgba(34, 197, 94, 0.5);
        }
      `}</style>
    </section>
  );
};

export default NewsSection;