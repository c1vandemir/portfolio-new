import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const Footer = () => {
  const { lang } = useLanguage();
  const year = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Github size={20} />, href: "https://github.com/c1vandemir" },
    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/c%C4%B1van-demir-554ab5254/" },
    { icon: <Instagram size={20} />, href: "https://www.instagram.com/c1vandemir/" },
    { icon: <Mail size={20} />, href: "mailto:demircivan43@gmail.com" },
  ];

  return (
    <footer id="contact" className="py-10 border-t border-slate-200 dark:border-slate-800 mt-20 relative z-10 glass rounded-t-3xl">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <span className="text-2xl name-outline mb-2">
            Cıvan Demir
          </span>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            © {year}. {lang === 'en' ? 'All rights reserved.' : 'Tüm hakları saklıdır.'}
          </p>
        </div>

        <div className="flex space-x-4">
          {socialLinks.map((link, idx) => (
            <motion.a
              key={idx}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-lightBg dark:bg-darkBg text-slate-600 dark:text-slate-300 hover:text-accentPrimary dark:hover:text-accentPrimary hover:shadow-lg transition-all border border-slate-200 dark:border-slate-700"
            >
              {link.icon}
            </motion.a>
          ))}
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
