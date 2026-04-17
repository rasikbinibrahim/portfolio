import React from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, Zap, ShieldCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t } = useTranslation();
  const highlightsContent = t('highlights', { returnObjects: true }) as any[];
  
  const icons = [<Briefcase size={28} />, <Award size={28} />, <Zap size={28} />, <ShieldCheck size={28} />];

  return (
    <section id="about" className="section-padding py-24 overflow-hidden">
      <div className="flex flex-col items-center text-center space-y-6 mb-20">
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
          className="text-3xl md:text-6xl font-bold font-outfit"
        >
          {t('about_title')}
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="max-w-3xl text-lg text-slate-600 dark:text-slate-400 space-y-6 leading-relaxed font-light"
        >
          <p>{t('about_p1')}</p>
          <p>{t('about_p2')}</p>
        </motion.div>
      </div>
      
      {/* Decorative backdrop elements */}
      <div className="absolute left-0 w-full overflow-hidden pointer-events-none -z-10 opacity-30 dark:opacity-20 translate-y-[-20%]">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-blue-600/20 blur-[100px] rounded-full" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/20 blur-[120px] rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {highlightsContent.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="p-10 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col space-y-6 shadow-sm hover:shadow-2xl hover:shadow-blue-600/10 transition-all group backdrop-blur-sm rtl:text-right"
          >
            <div className="p-4 bg-blue-600 shadow-lg shadow-blue-600/20 text-white rounded-2xl w-fit group-hover:scale-110 transition-transform">
              {icons[idx]}
            </div>
            <h3 className="font-bold text-2xl font-outfit text-slate-900 dark:text-white">{item.title}</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
