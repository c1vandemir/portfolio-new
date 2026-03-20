import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { ArrowRight, Download, Github, Linkedin, Instagram, Mail } from 'lucide-react';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="min-h-[85vh] flex flex-col justify-center items-center text-center px-6 relative">
      
      {/* Decorative floating elements */}
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [0, 5, -5, 0] }} 
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-[10%] w-24 h-24 bg-accentPrimary/20 rounded-full blur-xl"
      />
      <motion.div 
        animate={{ y: [0, 30, 0], rotate: [0, -10, 10, 0] }} 
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-[10%] w-32 h-32 bg-purple-500/20 rounded-full blur-xl"
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl mx-auto z-10"
      >
        <motion.span 
          className="inline-block py-1 px-3 rounded-full bg-accentPrimary/10 text-accentPrimary text-sm font-semibold tracking-wider mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          {t('hero.greeting')}
        </motion.span>
        
        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Cıvan <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accentPrimary via-purple-500 to-pink-500">
            Demir
          </span>
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-2xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {t('hero.role')}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <a href="#projects" className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-bold text-lg hover:scale-105 transition-transform group shadow-xl">
            {t('hero.cta')}
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-slate-900 dark:border-white text-slate-900 dark:text-white rounded-full font-bold text-lg hover:scale-105 transition-transform group shadow-xl hover:bg-slate-900/5 dark:hover:bg-white/10">
            {t('hero.cvBtn')}
            <Download size={20} className="group-hover:-translate-y-1 transition-transform" />
          </a>
        </motion.div>

        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 1 }}
           className="flex justify-center items-center gap-6 mt-10"
        >
           <a href="https://github.com/c1vandemir" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-accentPrimary transition-colors hover:scale-125 duration-300">
             <Github size={28} />
           </a>
           <a href="https://www.linkedin.com/in/c%C4%B1van-demir-554ab5254/" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-accentPrimary transition-colors hover:scale-125 duration-300">
             <Linkedin size={28} />
           </a>
           <a href="https://www.instagram.com/c1vandemir/" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-accentPrimary transition-colors hover:scale-125 duration-300">
             <Instagram size={28} />
           </a>
           <a href="mailto:demircivan43@gmail.com" className="text-slate-600 dark:text-slate-400 hover:text-accentPrimary transition-colors hover:scale-125 duration-300">
             <Mail size={28} />
           </a>
        </motion.div>
      </motion.div>
      
    </section>
  );
};

export default Hero;
