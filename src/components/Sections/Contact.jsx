import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { Send, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const { t } = useLanguage();
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSent(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setIsSent(false), 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 bg-lightPaper dark:bg-darkPaper rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-200 dark:border-slate-800 lg:items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800 dark:text-white">
              {t('contact.title')}
            </h2>
            {/* abstract visual block */}
            <div className="hidden md:block w-32 h-32 bg-gradient-to-br from-accentPrimary/40 to-purple-500/40 rounded-3xl rotate-12 backdrop-blur-3xl"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">{t('contact.name')}</label>
                <input 
                  type="text" 
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-accentPrimary transition-all text-slate-800 dark:text-slate-100 placeholder-slate-400"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">{t('contact.email')}</label>
                <input 
                  type="email" 
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-accentPrimary transition-all text-slate-800 dark:text-slate-100 placeholder-slate-400"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">{t('contact.message')}</label>
                <textarea 
                  required
                  rows="4"
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-accentPrimary transition-all text-slate-800 dark:text-slate-100 placeholder-slate-400 resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={isSent}
                className={`w-full py-4 rounded-xl font-bold flex justify-center items-center gap-2 transition-all shadow-lg ${
                  isSent 
                    ? 'bg-green-500 text-white' 
                    : 'bg-accentPrimary hover:bg-accentHover text-white'
                }`}
              >
                {isSent ? (
                  <><CheckCircle2 size={20} /> {t('contact.success')}</>
                ) : (
                  <><Send size={20} /> {t('contact.send')}</>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
