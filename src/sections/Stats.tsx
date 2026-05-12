import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Layers, ShieldCheck, Smartphone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Stats: React.FC = () => {
  const { t } = useTranslation();

  // Using translation options with fallbacks to ensure solid text display
  const statsData = [
    {
      title: t('stats.exp', '5+ Years Experience'),
      subtitle: t('stats.exp_sub', 'Professional IT trajectory since Oct 2020'),
      icon: <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
    },
    {
      title: t('stats.proj', '20+ Projects'),
      subtitle: t('stats.proj_sub', 'Delivered enterprise & mobile apps'),
      icon: <Layers className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
    },
    {
      title: t('stats.spec', 'Enterprise Specialist'),
      subtitle: t('stats.spec_sub', 'Scalable dashboard & systems architecture'),
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
    },
    {
      title: t('stats.expert', 'React Native Expert'),
      subtitle: t('stats.expert_sub', 'Premium cross-platform mobile engineering'),
      icon: <Smartphone className="w-6 h-6 text-purple-600 dark:text-purple-400" />
    }
  ];

  return (
    <section className="relative z-20 mt-8 md:mt-12 px-6 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-blue-600/5 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x rtl:sm:divide-x-reverse divide-slate-100 dark:divide-slate-800">
          {statsData.map((stat, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className={`flex flex-col space-y-3 pt-6 sm:pt-0 ${index !== 0 ? 'sm:ps-8' : ''}`}
            >
              <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-2xl w-fit border border-slate-100 dark:border-slate-700/50 shadow-sm">
                {stat.icon}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold font-outfit text-slate-900 dark:text-white tracking-tight">
                {stat.title}
              </h3>
              <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                {stat.subtitle}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Subtle decorative glows */}
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />
      </motion.div>
    </section>
  );
};

export default Stats;
