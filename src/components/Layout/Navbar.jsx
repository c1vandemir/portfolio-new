import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import { Moon, Sun, Languages, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('navbar.about'), href: '#about' },
    { name: t('navbar.projects'), href: '#projects' },
    { name: t('navbar.contact'), href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-4 glass' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-accentPrimary to-purple-500">
          Cıvan Demir
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {navLinks.map((link, idx) => (
              <li key={idx}>
                <a href={link.href} className="text-sm font-medium hover:text-accentPrimary transition-colors">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center space-x-4 border-l pl-4 border-slate-300 dark:border-slate-700">
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors flex items-center gap-1 group"
              aria-label="Toggle Language"
            >
              <Languages size={18} className="group-hover:text-accentPrimary transition-colors"/>
              <span className="text-xs font-bold uppercase">{lang}</span>
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors group"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? (
                <Sun size={18} className="group-hover:text-yellow-400 transition-colors" />
              ) : (
                <Moon size={18} className="group-hover:text-accentPrimary transition-colors" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-slate-800 dark:text-slate-100"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/10"
          >
            <div className="flex flex-col px-6 py-4 space-y-4">
              {navLinks.map((link, idx) => (
                <a 
                  key={idx} 
                  href={link.href} 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium hover:text-accentPrimary transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex space-x-4 pt-4 border-t border-slate-300 dark:border-slate-700">
                <button
                  onClick={toggleLanguage}
                  className="flex items-center gap-2 p-2 rounded-full bg-slate-200 dark:bg-slate-800"
                >
                  <Languages size={18} />
                  <span className="text-xs font-bold uppercase">{lang}</span>
                </button>
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-full bg-slate-200 dark:bg-slate-800"
                >
                  {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
