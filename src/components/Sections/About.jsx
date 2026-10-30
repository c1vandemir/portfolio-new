import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { Code, Layout, Smartphone, Database } from 'lucide-react';

const About = () => {
  const { t } = useLanguage();

  const skills = [
    { name: "Frontend Development", icon: <Layout size={24} />, description: "React, HTML, CSS, JavaScript" },
    { name: "Backend Basics", icon: <Database size={24} />, description: "Node.js" },
    { name: "Programming", icon: <Code size={24} />, description: "Python, C, C++" },
    { name: "Tools", icon: <Smartphone size={24} />, description: "Git, VS Code" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl name-outline inline-block mb-6">
              {t('about.title')}
            </h2>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              {t('about.bio')}
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-16">
            <h3 className="text-2xl font-bold mb-8 text-center text-slate-800 dark:text-slate-100">
              {t('about.skills')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="glass p-8 rounded-2xl flex items-start gap-6 group hover:border-accentPrimary/50 transition-colors"
                >
                  <div className="p-4 rounded-xl bg-accentPrimary/10 text-accentPrimary group-hover:scale-110 transition-transform">
                    {skill.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-slate-800 dark:text-slate-100">{skill.name}</h4>
                    <p className="text-slate-500 dark:text-slate-400">{skill.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
