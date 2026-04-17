import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  SiReact, SiTypescript, SiRedux, SiNodedotjs,
  SiPostgresql,
  SiGraphql, SiDocker, SiSocketdotio, SiMqtt
} from 'react-icons/si';
import { FaAmazon } from "react-icons/fa";


const SkillItem = ({ name, icon, percent, delay }: { name: string, icon: JSX.Element, percent: number, delay: number }) => {
  const { i18n } = useTranslation();
  return (
    <motion.div
      initial={{ opacity: 0, x: i18n.language === 'ar' ? 20 : -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.5 }}
      viewport={{ once: true }}
      className="flex flex-col space-y-3 group"
    >
      <div className="flex items-center justify-between rtl:flex-row-reverse">
        <div className="flex items-center space-x-3 rtl:space-x-reverse text-lg font-semibold group-hover:text-blue-600 transition-colors">
          <span className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg group-hover:bg-blue-600/10 transition-colors">{icon}</span>
          <span>{name}</span>
        </div>
        <span className="text-sm font-mono text-slate-400 group-hover:text-blue-500">{percent}%</span>
      </div>
      <div className="h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percent}%` }}
          transition={{ duration: 1.5, delay: delay + 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="h-full bg-blue-600 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.4)]"
        />
      </div>
    </motion.div>
  );
};

const Skills: React.FC = () => {
  const { t } = useTranslation();
  const categories = [
    {
      title: t('skill_cats.frontend'),
      skills: [
        { name: "React.js / Next.js", icon: <SiReact />, percent: 95 },
        { name: "TypeScript", icon: <SiTypescript />, percent: 90 },
        { name: "React Native", icon: <SiReact />, percent: 95 },
        { name: "Redux Toolkit", icon: <SiRedux />, percent: 90 },
      ]
    },
    {
      title: t('skill_cats.backend'),
      skills: [
        { name: "Node.js / Express", icon: <SiNodedotjs />, percent: 85 },
        { name: "WebSocket / Socket.io", icon: <SiSocketdotio />, percent: 88 },
        { name: "MQTT Protocols", icon: <SiMqtt />, percent: 82 },
        { name: "REST APIs / GraphQL", icon: <SiGraphql />, percent: 90 },
      ]
    },
    {
      title: t('skill_cats.cloud'),
      skills: [
        { name: "AWS EC2 / EBS", icon: <FaAmazon />, percent: 80 },
        { name: "AWS Amplify / S3", icon: <FaAmazon />, percent: 84 },
        { name: "AWS Lambda / API Gateway", icon: <FaAmazon />, percent: 75 },
        { name: "DynamoDB (NoSQL)", icon: <FaAmazon />, percent: 70 },
        { name: "Docker & CI/CD", icon: <SiDocker />, percent: 75 },
        { name: "PostgreSQL / MongoDB", icon: <SiPostgresql />, percent: 85 },
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-slate-50/50 dark:bg-slate-900/20 py-24 border-y border-slate-200 dark:border-slate-800/50">
      <div className="flex flex-col items-center text-center space-y-6 mb-20 text-balance">
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
          className="text-3xl md:text-5xl font-bold font-outfit"
        >
          {t('skills_title')}
        </motion.h2>
        <motion.p className="text-slate-500 max-w-2xl">
          {t('skills_desc')}
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {categories.map((cat, catIdx) => (
          <div key={catIdx} className="space-y-8">
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-xl font-bold border-l-4 rtl:border-l-0 rtl:border-r-4 border-blue-600 pl-4 rtl:pl-0 rtl:pr-4 uppercase tracking-wider text-slate-400 rtl:text-right"
            >
              {cat.title}
            </motion.h3>
            <div className="space-y-6">
              {cat.skills.map((skill, skillIdx) => (
                <SkillItem
                  key={skillIdx}
                  {...skill}
                  delay={(catIdx * 0.2) + (skillIdx * 0.1)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
