import React from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, Zap, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t } = useTranslation();
  
  const rawHighlights = t('highlights', { returnObjects: true });
  const highlightsContent = Array.isArray(rawHighlights) ? rawHighlights : [
    { title: "5+ Years Experience", desc: "Professional enterprise experience starting from October 2020." },
    { title: "React Native Expert", desc: "Building high-performance, cross-platform enterprise mobile applications." },
    { title: "Scalable Architecture", desc: "Deep expertise in Redux Toolkit, TypeScript, and reusable component systems." },
    { title: "Enterprise UI", desc: "Specialized in sophisticated admin dashboard systems and API integrations." }
  ];
  
  const icons = [<Briefcase size={28} />, <Award size={28} />, <Zap size={28} />, <ShieldCheck size={28} />];

  const focusAreas = [
    "Scalable Architecture",
    "Performance Optimization",
    "Reusable UI Components",
    "Responsive UI Development",
    "Enterprise Systems",
    "Cross-Functional Agile Teams"
  ];

  const techHighlights = [
    "React.js",
    "React Native",
    "TypeScript",
    "Redux Toolkit",
    "SCSS",
    "REST APIs",
    "Enterprise Apps"
  ];

  return (
    <section id="about" className="section-padding py-24 overflow-hidden relative">
      <div className="flex flex-col items-center text-center space-y-6 mb-16">
        <motion.span 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="text-blue-600 font-bold tracking-widest uppercase text-sm"
        >
          {t('nav.about')}
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-6xl font-bold font-outfit tracking-tight"
        >
          {t('about_title')}
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="max-w-4xl text-base md:text-lg text-slate-600 dark:text-slate-400 space-y-6 leading-relaxed font-light text-balance"
        >
          <p>{t('about_p1')}</p>
          <p>{t('about_p2')}</p>
        </motion.div>

        {/* Tech Highlights Badges */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 pt-4 max-w-4xl"
        >
          {techHighlights.map((tech, idx) => (
            <span 
              key={idx}
              className="px-4 py-2 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-900/40 font-bold text-xs md:text-sm shadow-sm hover:scale-105 transition-transform cursor-default"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* Focus Areas Callouts */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-6 max-w-4xl w-full text-left rtl:text-right"
        >
          {focusAreas.map((area, idx) => (
            <div key={idx} className="flex items-center space-x-2 rtl:space-x-reverse text-slate-700 dark:text-slate-300 font-medium text-xs md:text-sm">
              <CheckCircle2 size={16} className="text-blue-600 dark:text-blue-400 flex-shrink-0" />
              <span>{area}</span>
            </div>
          ))}
        </motion.div>
      </div>
      
      {/* Decorative backdrop elements */}
      <div className="absolute left-0 w-full overflow-hidden pointer-events-none -z-10 opacity-30 dark:opacity-20 translate-y-[-20%]">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-blue-600/20 blur-[100px] rounded-full" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/20 blur-[120px] rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {highlightsContent.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="p-8 md:p-10 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col space-y-6 shadow-sm hover:shadow-2xl hover:shadow-blue-600/10 transition-all group backdrop-blur-sm rtl:text-right"
          >
            <div className="p-4 bg-blue-600 shadow-lg shadow-blue-600/20 text-white rounded-2xl w-fit group-hover:scale-110 transition-transform">
              {icons[idx % icons.length]}
            </div>
            <h3 className="font-bold text-xl md:text-2xl font-outfit text-slate-900 dark:text-white tracking-tight">{item.title}</h3>
            <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm leading-relaxed font-medium">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
