import React, { useState } from 'react';
import { Send, MessageCircle, Mail, User, Briefcase } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Contacts: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    email: '',
    nickname: '',
    role: '',
    message: ''
  });

  // ЗМІНА: Переписаний handleSubmit для Netlify Forms
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData as any).toString()
    })
    .then(() => {
      alert('Дякуємо! Ваші дані надіслано.');
      setFormData({ email: '', nickname: '', role: '', message: '' });
    })
    .catch(() => alert('Помилка відправки'));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacts" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-green-400">
            {t('contacts.title')}
          </h2>
          <p className="text-xl text-green-300 mb-8">
            {t('contacts.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-black/60 border border-green-400/50 p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-green-400/10 animate-pulse" />

            <h3 className="text-xl font-bold text-green-400 mb-6">{t('contacts.earlyAccess')}</h3>

            {/* ЗМІНА: Додані атрибути data-netlify="true", name="early-access", method="POST" */}
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
              name="early-access"
              method="POST"
            >
              {/* Прихований honeypot для захисту від ботів */}
                <input type="hidden" name="form-name" value="early-access" />
                <input type="hidden" name="bot-field" />

              {/* Email Field */}
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <Mail className="text-gray-400" size={16} />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder={t('contacts.email.placeholder')}
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-gray-900/50 border border-green-400/30 text-green-400 pl-10 pr-4 py-3 focus:border-green-400 focus:outline-none transition-colors placeholder-gray-500"
                  // ЗМІНА: Прибрано disabled атрибут
                />
              </div>

              {/* Nickname Field */}
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <User className="text-gray-400" size={16} />
                </div>
                <input
                  type="text"
                  name="nickname"
                  placeholder={t('contacts.nickname.placeholder')}
                  value={formData.nickname}
                  onChange={handleInputChange}
                  className="w-full bg-gray-900/50 border border-green-400/30 text-green-400 pl-10 pr-4 py-3 focus:border-green-400 focus:outline-none transition-colors placeholder-gray-500"
                  // ЗМІНА: Прибрано disabled атрибут
                />
              </div>

              {/* Role Field */}
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <Briefcase className="text-gray-400" size={16} />
                </div>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  className="w-full bg-gray-900/50 border border-green-400/30 text-green-400 pl-10 pr-4 py-3 focus:border-green-400 focus:outline-none transition-colors appearance-none cursor-pointer"
                  // ЗМІНА: Прибрано disabled атрибут
                >
                  <option value="">{t('contacts.role.placeholder')}</option>
                  <option value="player">{t('contacts.player')}</option>
                  <option value="organizer">{t('contacts.organizer')}</option>
                  <option value="investor">{t('contacts.investor')}</option>
                  <option value="developer">{t('contacts.developer')}</option>
                </select>
              </div>

              {/* Message Field */}
              <div className="relative">
                <div className="absolute left-3 top-3">
                  <MessageCircle className="text-gray-400" size={16} />
                </div>
                <textarea
                  name="message"
                  placeholder={t('contacts.message.placeholder')}
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full bg-gray-900/50 border border-green-400/30 text-green-400 pl-10 pr-4 py-3 focus:border-green-400 focus:outline-none transition-colors placeholder-gray-500 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                // ЗМІНА: Прибрано cursor-not-allowed opacity-50 та disabled атрибут
                className="w-full bg-green-400/20 border border-green-400 text-green-400 py-3 hover:bg-green-400 hover:text-black transition-colors duration-300 flex items-center justify-center space-x-2 group"
              >
                <Send size={16} />
                <span>{t('contacts.submit')}</span>
              </button>

              {/* Disclaimer */}
              <p className="text-xs text-gray-500 text-center">
                {t('contacts.formInactive')}
              </p>
            </form>
          </div>

          {/* Telegram CTA */}
          <div className="bg-gray-900/50 border border-blue-400/50 p-8 flex flex-col justify-center">
            <div className="text-center">
              <MessageCircle className="text-blue-400 mx-auto mb-6 animate-pulse" size={48} />
              <h3 className="text-2xl font-bold text-blue-400 mb-4">{t('contacts.joinCommunity')}</h3>
              <p className="text-gray-300 mb-8">
                {t('contacts.communityDesc')}
              </p>
              
              <a
                    href="https://t.me/obriy_kpk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-400/20 border border-blue-400 text-blue-400 px-8 py-4 hover:bg-blue-400 hover:text-black transition-colors duration-300 flex items-center justify-center space-x-2 group mx-auto"
                  >
                    <MessageCircle size={20} />
                    <span className="font-bold">{t('contacts.telegram')}</span>
              </a>

              {/* Community Stats */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400 mb-1">50+</div>
                  <div className="text-gray-400 text-sm">{t('contacts.communityMembers')}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400 mb-1">25+</div>
                  <div className="text-gray-400 text-sm">{t('contacts.activeTesters')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Contact Info */}
        <div className="mt-12 text-center">
          <div className="bg-black/40 border border-green-400/30 p-6 max-w-2xl mx-auto">
            <h4 className="text-green-400 font-bold mb-4">{t('contacts.developmentTeam')}</h4>
            <p className="text-gray-300 mb-4">
              {t('contacts.teamDesc')}
            </p>
            <div className="flex justify-center space-x-8 text-sm">
              <div className="text-center">
                <div className="text-green-400 font-bold">{t('contacts.coreTeam')}</div>
                <div className="text-gray-400">3 {t('contacts.developers')}</div>
              </div>
              <div className="text-center">
                <div className="text-yellow-400 font-bold">{t('contacts.advisors')}</div>
                <div className="text-gray-400">2 {t('contacts.gameExperts')}</div>
              </div>
              <div className="text-center">
                <div className="text-orange-400 font-bold">{t('contacts.testers')}</div>
                <div className="text-gray-400">25+ {t('contacts.players')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;