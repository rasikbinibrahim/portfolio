import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  SiReact, SiTypescript, SiRedux, SiGraphql, SiGit
} from 'react-icons/si';
import { Server, Zap, Radio, ShieldCheck, Cloud, Wrench, CheckCircle2, Cpu } from 'lucide-react';

const SkillItem = ({ name, icon, percent, delay }: { name: string, icon: JSX.Element, percent: number, delay: number }) => {
  const { i18n } = useTranslation();
  return (
    <motion.div
      initial={{ opacity: 0, x: i18n.language === 'ar' ? 20 : -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.5 }}
      viewport={{ once: true }}
      className="flex flex-col space-y-2 group"
    >
      <div className="flex items-center justify-between rtl:flex-row-reverse">
        <div className="flex items-center space-x-3 rtl:space-x-reverse text-sm md:text-base font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          <span className="p-2 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700/50 group-hover:bg-blue-600 group-hover:text-white transition-all flex-shrink-0 text-blue-600 dark:text-blue-400">
            {icon}
          </span>
          <span className="text-slate-800 dark:text-slate-200 tracking-tight leading-snug">{name}</span>
        </div>
        <span className="text-xs font-mono text-slate-400 group-hover:text-blue-500 font-bold">{percent}%</span>
      </div>
      <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden p-0.5 border border-slate-200/50 dark:border-slate-700/50">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percent}%` }}
          transition={{ duration: 1.5, delay: delay + 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full shadow-[0_0_12px_rgba(37,99,235,0.3)]"
        />
      </div>
    </motion.div>
  );
};

const Skills: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === 'ar';
  
  const categories = [
    {
      title: isAr ? "واجهة المستخدم وأطر العمل الأساسية" : "Frontend & Core Frameworks",
      skills: [
        { name: "React.js / Next.js", icon: <SiReact size={16} />, percent: 95 },
        { name: "React Native", icon: <SiReact size={16} />, percent: 95 },
        { name: "TypeScript", icon: <SiTypescript size={16} />, percent: 92 },
        { name: "Component Architecture", icon: <Cpu size={16} />, percent: 90 },
      ]
    },
    {
      title: isAr ? "إدارة الحالة وواجهات برمجة التطبيقات" : "State Management & APIs",
      skills: [
        { name: "Redux Toolkit & Context API", icon: <SiRedux size={16} />, percent: 92 },
        { name: "TanStack Query (Caching)", icon: <Zap size={16} />, percent: 90 },
        { name: "REST APIs & GraphQL (Apollo)", icon: <SiGraphql size={16} />, percent: 90 },
        { name: "Node.js (Express.js) Backend", icon: <Server size={16} />, percent: 85 },
      ]
    },
    {
      title: isAr ? "تحسين الأداء والوقت الفعلي" : "Performance & Real-Time",
      skills: [
        { name: "Memoization & Lazy Loading", icon: <Cpu size={16} />, percent: 90 },
        { name: "Code Splitting & Web Vitals", icon: <Zap size={16} />, percent: 88 },
        { name: "WebSocket & MQTT Protocols", icon: <Radio size={16} />, percent: 85 },
        { name: "Next.js SSR/CSR Hybrid", icon: <Server size={16} />, percent: 88 },
      ]
    },
    {
      title: isAr ? "الأمان والسحابة والأدوات" : "Security, Cloud & Tools",
      skills: [
        { name: "OAuth 2.0, JWT & RBAC Security", icon: <ShieldCheck size={16} />, percent: 92 },
        { name: "AWS Cloud (S3, Lambda basics)", icon: <Cloud size={16} />, percent: 80 },
        { name: "Jest & React Testing Library", icon: <CheckCircle2 size={16} />, percent: 85 },
        { name: "Vite.js, Git & CI/CD Pipelines", icon: <Wrench size={16} />, percent: 90 },
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-slate-50/30 dark:bg-slate-900/10 py-24 border-y border-slate-200/50 dark:border-slate-800/50 relative overflow-hidden">
      <div className="flex flex-col items-center text-center space-y-4 mb-16 text-balance">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-blue-600 font-bold tracking-widest uppercase text-sm"
        >
          {t('skills')}
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-bold font-outfit tracking-tight"
        >
          {t('skills_title')}
        </motion.h2>
        <motion.p className="text-slate-500 dark:text-slate-400 max-w-2xl font-medium">
          {t('skills_desc')}
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
        {categories.map((cat, catIdx) => (
          <motion.div 
            key={catIdx} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: catIdx * 0.1 }}
            viewport={{ once: true }}
            className="space-y-5 bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-xl hover:shadow-2xl transition-shadow"
          >
            <h3 className="text-base md:text-lg font-bold border-l-4 rtl:border-l-0 rtl:border-r-4 border-blue-600 pl-3 rtl:pl-0 rtl:pr-3 uppercase tracking-wider text-slate-400 rtl:text-right">
              {cat.title}
            </h3>
            <div className="space-y-4 pt-2">
              {cat.skills.map((skill, skillIdx) => (
                <SkillItem
                  key={skillIdx}
                  {...skill}
                  delay={(catIdx * 0.1) + (skillIdx * 0.05)}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
