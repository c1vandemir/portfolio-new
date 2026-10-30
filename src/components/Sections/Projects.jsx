import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: "Yelden Tekstil",
      description: "İstanbul Güngören'deki toptan kumaş firması için TR/EN dil destekli kurumsal web sitesi: koleksiyon kataloğu, sertifikalar, WhatsApp ve harita entegrasyonu.",
      image: "/projects/yelden_site.jpg",
      tags: ["React", "React Router", "Web", "Freelance"],
      liveUrl: "https://yeldentekstil.com",
      githubUrl: "#"
    },
    {
      title: "Themis Courts",
      description: "Kadir Has Üniversitesi'nde düzenlenen Themis Court Simulations '27 hukuk simülasyonu için TR/EN, geri sayımlı tanıtım ve başvuru sitesi: 6 mahkeme, ekip, mekân, SSS ve iletişim.",
      image: "/projects/themis_site.jpg",
      tags: ["React", "i18next", "Netlify", "Web"],
      liveUrl: "https://themiscourts.netlify.app/",
      githubUrl: "#"
    },
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
    },
    {
      title: "Tarot ve Astroloji Danışmanlık",
      description: "Singleton, Factory, Observer, Decorator, Strategy ve Adapter tasarım kalıplarıyla geliştirilmiş, tarot falı ve günlük burç yorumu sunan web uygulaması.",
      image: "/projects/tarot_astroloji.jpg",
      tags: ["Java", "Spring Boot", "Thymeleaf", "Design Patterns"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Kurumsal Şirket Ağı",
      description: "Merkez ofis ve iki şubeden oluşan WAN'ın Cisco Packet Tracer'da tasarımı: VLAN, OSPF, DHCP, DNS, NAT ve ACL yapılandırmaları.",
      image: "/projects/bilgisayar_aglari.png",
      tags: ["Cisco Packet Tracer", "OSPF", "VLAN", "Networking"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Lexical Analyzer",
      description: "Girilen metnin geçerli bir değişken adı olup olmadığını Regex/DFA kurallarıyla denetleyen, tkinter arayüzlü sözcüksel çözümleyici.",
      image: "/projects/bicimsel_diller.png",
      tags: ["Python", "Regex", "DFA", "Tkinter"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Mod-8 Senkron Sayıcı",
      description: "JK flip-flop'larla Karnaugh haritası üzerinden tasarlanan, asenkron clear/preset destekli ve 7-segment göstergeli 0–7 sayıcı devresi.",
      image: "/projects/mantik_devreleri.png",
      tags: ["Logisim", "Digital Logic", "JK Flip-Flop"],
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
            className="text-4xl md:text-6xl name-outline inline-block mb-6"
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
