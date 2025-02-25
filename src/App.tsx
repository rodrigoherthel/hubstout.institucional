import React, { useState } from 'react';
import { Globe, Users, Trophy, Brain, ChevronRight } from 'lucide-react';
import { translations } from './translations';
import type { Language } from './types';

function App() {
  const [language, setLanguage] = useState<Language>('en');
  const t = translations[language];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <div className="flex items-center gap-2">

          <img 
            src=" https://raw.githubusercontent.com/rodrigoherthel/hubstout.institucional/refs/heads/main/public/logo_w.png"
            alt="hubstout"
            width="200"
          />
          </div>
          <div className="flex items-center gap-6">
            <div className="flex gap-2">
              <button 
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 rounded ${language === 'en' ? 'bg-[#B2F828] text-black' : 'text-[#C9C9C9]'}`}
              >
                EN
              </button>
              <button 
                onClick={() => setLanguage('pt')}
                className={`px-2 py-1 rounded ${language === 'pt' ? 'bg-[#B2F828] text-black' : 'text-[#C9C9C9]'}`}
              >
                PT
              </button>
              <button 
                onClick={() => setLanguage('es')}
                className={`px-2 py-1 rounded ${language === 'es' ? 'bg-[#B2F828] text-black' : 'text-[#C9C9C9]'}`}
              >
                ES
              </button>
            </div>
            <a
              href="https://app.hubstout.com"
              className="bg-[#B2F828] text-black px-6 py-2 rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              {t.hero.cta}
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#B2F828] to-white bg-clip-text text-transparent">
          {t.hero.title}
        </h1>
        <p className="text-xl text-[#C9C9C9] mb-12 max-w-2xl mx-auto">
          {t.hero.subtitle}
        </p>
        <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-xl overflow-hidden">
          <img 
            src="https://t3.ftcdn.net/jpg/05/13/76/12/360_F_513761212_i3z6vHUNV0bQ8pjkBGO3yrpLg8zs4mFK.jpg"
            alt="Athletes training"
            className="object-cover w-full h-full"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-12 text-center">{t.features.title}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {t.features.items.map((feature, index) => (
            <div key={index} className="bg-zinc-900 p-6 rounded-xl">
              {index === 0 && <Users size={32} className="text-[#B2F828] mb-4" />}
              {index === 1 && <Trophy size={32} className="text-[#B2F828] mb-4" />}
              {index === 2 && <Brain size={32} className="text-[#B2F828] mb-4" />}
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-[#C9C9C9]">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Trophy size={24} className="text-[#B2F828]" />
              <span className="font-bold">Hubstout</span>
            </div>
            <div className="flex gap-6 text-[#C9C9C9]">
              <a href="https://privacy.hubstout.com" className="hover:text-[#B2F828]">Privacy Policy</a>
              <a href="https://terms.hubstout.com" className="hover:text-[#B2F828]">Terms of Use</a>
            </div>
          </div>
          <div className="text-center mt-8 text-[#C9C9C9]">
            <p>&copy; 2025 Hubstout. {t.footer.rights}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
