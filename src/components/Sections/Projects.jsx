import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: "İnci Fal",
      description: "Kullanıcılara yapay zeka destekli fal yorumları sunan yenilikçi bir mobil uygulama.",
      image: "/projects/inci_fal_gorsel.jpeg",
      tags: ["React Native", "AI", "Mobile"],
      liveUrl: "#",
      githubUrl: "#",
      comingSoon: true
    },
    {
      title: "Algoritma Analizi",
      description: "Algoritma karmaşıklıklarını inceleyen detaylı bir analiz projesi.",
      image: "/projects/algoritma analiz.png",
      tags: ["Algorithm", "Analysis"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Care",
      description: "Kullanıcı odaklı modern bir sağlık ve bakım uygulaması.",
      image: "/projects/care.png",
      tags: ["UI/UX", "App"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "İşletim Sistemleri",
      description: "İşletim sistemlerinin temel işleyişini ele alan akademik bir proje.",
      image: "/projects/İŞLETİM SİS.png",
      tags: ["OS", "Architecture"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Mikro Saat",
      description: "Mikroişlemci donanımı üzerine geliştirilmiş entegre bir saat uygulaması.",
      image: "/projects/MİKRO SAAT.png",
      tags: ["Microprocessor", "Hardware"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Rumeli Learn",
      description: "Öğrenciler için interaktif bir öğrenim ve eğitim platformu.",
      image: "/projects/Rumeli Learn.png",
      tags: ["Web", "Education"],
      liveUrl: "#",
      githubUrl: "#",
      containImage: true
    }
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accentPrimary to-purple-500 inline-block mb-6"
          >
            {t('projects.title')}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="group glass rounded-3xl overflow-hidden shadow-lg hover:shadow-accentPrimary/20 transition-all duration-300"
            >
              <div className="relative h-60 overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                {project.comingSoon && (
                  <div className="absolute top-4 right-4 z-20 bg-accentPrimary text-white text-xs font-black tracking-wider px-4 py-1.5 rounded-full shadow-lg border border-white/20">
                    YAKINDA
                  </div>
                )}
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className={`w-full h-full transform group-hover:scale-110 transition-transform duration-700 ${project.containImage ? 'object-contain p-4 bg-slate-100 dark:bg-slate-800' : 'object-cover'}`} 
                  loading="lazy"
                />
              </div>
              
              <div className="p-8 relative">
                {/* Decorative glowing orb inside card */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-accentPrimary/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <h3 className="text-2xl font-bold mb-3 text-slate-800 dark:text-white group-hover:text-accentPrimary transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, tagIdx) => (
                    <span key={tagIdx} className="px-3 py-1 text-xs font-semibold rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center border-t border-slate-200 dark:border-slate-800 pt-6">
                  {project.comingSoon ? (
                    <span className="text-sm font-medium text-slate-500 dark:text-slate-500 italic w-full text-center">
                      Geliştirme aşamasında...
                    </span>
                  ) : (
                    <>
                      <a href={project.githubUrl} className="flex items-center gap-2 text-sm font-medium hover:text-accentPrimary transition-colors text-slate-700 dark:text-slate-300">
                        <Github size={18} /> {t('projects.viewCode')}
                      </a>
                      <a href={project.liveUrl} className="flex items-center gap-2 text-sm font-medium hover:text-accentPrimary transition-colors text-slate-700 dark:text-slate-300">
                        <ExternalLink size={18} /> {t('projects.viewLive')}
                      </a>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
