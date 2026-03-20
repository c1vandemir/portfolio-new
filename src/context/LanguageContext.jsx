import React, { createContext, useContext, useState } from 'react';

const translations = {
  en: {
    navbar: { about: "About", projects: "Projects", contact: "Contact" },
    hero: { greeting: "Hi, I'm", role: "I'm currently a 3rd-Year Computer Engineering Student.", cta: "View My Work", cvBtn: "Download CV" },
    about: { title: "About Me", bio: "I build modern, highly interactive web applications focusing on aesthetics and user experience.", skills: "My Skills" },
    projects: { title: "Featured Projects", viewCode: "Code", viewLive: "Live" },
    contact: { title: "Get In Touch", name: "Name", email: "Email", message: "Message", send: "Send Message", success: "Message sent!" }
  },
  tr: {
    navbar: { about: "Hakkımda", projects: "Projeler", contact: "İletişim" },
    hero: { greeting: "Merhaba, Ben", role: "Şu an 3. Sınıf Bilgisayar Mühendisliği Öğrencisiyim.", cta: "Çalışmalarımı Gör", cvBtn: "CV İndir" },
    about: { title: "Hakkımda", bio: "Estetik ve kullanıcı deneyimine odaklanan, modern ve etkileşimli web uygulamaları geliştiriyorum.", skills: "Yeteneklerim" },
    projects: { title: "Öne Çıkan Projeler", viewCode: "Kod", viewLive: "Canlı" },
    contact: { title: "İletişime Geç", name: "İsim", email: "E-posta", message: "Mesaj", send: "Gönder", success: "Mesaj gönderildi!" }
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('en');

  const toggleLanguage = () => {
    setLang(prev => prev === 'en' ? 'tr' : 'en');
  };

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[lang];
    for (const k of keys) {
      if (value[k]) {
        value = value[k];
      } else {
        return key;
      }
    }
    return value;
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
