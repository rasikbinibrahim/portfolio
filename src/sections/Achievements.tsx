import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Zap, Server, Layers, Code2, GraduationCap, Star, CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Achievements: React.FC = () => {
  const { i18n } = useTranslation();
  const isAr = i18n.language === 'ar';

  const achievements = [
    {
      title: isAr ? "جائزة النجم الصاعد (2026)" : "Rising Star Award (2026)",
      desc: isAr ? "تكريم للتميز في تسليم منصات المؤسسات في بيتروس تكنولوجيز." : "Recognized for enterprise platform delivery excellence at Petrus Technologies.",
      company: "Petrus Technologies",
      icon: <Trophy size={28} className="text-amber-500" />,
      primary: true
    },
    {
      title: isAr ? "تحسين الأداء بنسبة 30–60%" : "30–60% Performance Improvement",
      desc: isAr ? "تحسين استجابة واجهة المستخدم ومسارات التصيير الحرجة للأنظمة كثيفة البيانات." : "Optimized UI responsiveness and critical render paths for data-intensive systems.",
      icon: <Zap size={24} className="text-emerald-500" />
    },
    {
      title: isAr ? "تقليل حمل API بنسبة 50% وحجم البيانات بنسبة 60%" : "50% API Load & 60% Payload Reduction",
      desc: isAr ? "تنفيذ التخزين المؤقت المتقدم باستخدام TanStack Query وترحيل الحمولات إلى GraphQL." : "Implemented advanced caching via TanStack Query and optimized payloads with GraphQL.",
      icon: <Server size={24} className="text-blue-500" />
    },
    {
      title: isAr ? "تقليل الجهد التشغيلي بنسبة 40%" : "40% Operational Effort Reduction",
      desc: isAr ? "بناء أنظمة مراقبة متعددة المصانع توفر رؤية فورية لاتخاذ القرارات." : "Delivered real-time multi-plant monitoring systems driving immediate decision visibility.",
      icon: <Layers size={24} className="text-indigo-500" />
    },
    {
      title: isAr ? "تقليل جهد التطوير بنسبة 50%" : "50% Development Effort Reduction",
      desc: isAr ? "هندسة محرك نماذج ديناميكي قائم على المخططات وأنظمة مكونات قابلة لإعادة الاستخدام." : "Engineered schema-driven dynamic form engines and highly reusable design component libraries.",
      icon: <Code2 size={24} className="text-purple-500" />
    }
  ];

  const education = {
    degree: isAr ? "بكالوريوس الهندسة – الإلكترونيات والأجهزة" : "Bachelor of Engineering – Electronics & Instrumentation",
    institution: isAr ? "معهد نهرو للتكنولوجيا" : "Nehru Institute of Technology",
    year: "2016",
    icon: <GraduationCap size={32} className="text-blue-600 dark:text-blue-400" />
  };

  return (
    <section className="section-padding py-24 bg-slate-900 border-y border-slate-800 rounded-[3rem] text-white my-12 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="flex flex-col items-center text-center space-y-4 mb-16 relative z-10">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-blue-500 font-bold tracking-widest uppercase text-xs md:text-sm"
        >
          {isAr ? 'الإنجازات والتعليم' : 'Milestones & Background'}
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-bold font-outfit tracking-tight"
        >
          {isAr ? 'أبرز الإنجازات والخلفية الأكاديمية' : 'Key Achievements & Education'}
        </motion.h2>
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-10 relative z-10 px-4">
        {/* Left pane: Key Achievements List */}
        <div className="lg:col-span-7 space-y-5">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest px-2 rtl:text-right mb-2">
            {isAr ? 'الإنجازات المهنية' : 'Professional Impact'}
          </h3>
          
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: isAr ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className={`p-6 rounded-2xl border flex items-start space-x-4 rtl:space-x-reverse backdrop-blur-sm transition-all ${
                item.primary 
                  ? 'bg-gradient-to-r from-amber-500/10 to-amber-600/5 border-amber-500/30 shadow-lg shadow-amber-500/5' 
                  : 'bg-slate-800/40 border-slate-700/60 hover:bg-slate-800/80 hover:border-slate-600'
              }`}
            >
              <div className={`p-3 rounded-xl flex-shrink-0 mt-0.5 ${item.primary ? 'bg-amber-500/20' : 'bg-slate-700/50'}`}>
                {item.icon}
              </div>
              <div className="flex-1 space-y-1.5 rtl:text-right min-w-0">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h4 className="text-base md:text-lg font-bold font-outfit tracking-tight text-white">{item.title}</h4>
                  {item.company && (
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/20">
                      {item.company}
                    </span>
                  )}
                </div>
                <p className="text-xs md:text-sm text-slate-300 font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right pane: Education block */}
        <div className="lg:col-span-5 flex flex-col space-y-5">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest px-2 rtl:text-right mb-2">
            {isAr ? 'التعليم' : 'Academic Foundation'}
          </h3>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1 p-8 rounded-[2rem] bg-gradient-to-br from-blue-900/20 to-slate-900 border border-blue-500/20 flex flex-col justify-between space-y-8 shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
              <Star size={180} />
            </div>

            <div className="space-y-6 rtl:text-right relative z-10">
              <div className="p-4 bg-blue-600/10 rounded-2xl w-fit border border-blue-500/20">
                {education.icon}
              </div>
              
              <div className="space-y-2">
                <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block font-mono">
                  {education.year}
                </span>
                <h4 className="text-xl md:text-2xl font-bold font-outfit text-white tracking-tight leading-snug">
                  {education.degree}
                </h4>
                <p className="text-sm md:text-base text-slate-300 font-medium pt-1">
                  {education.institution}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center space-x-2 rtl:space-x-reverse text-xs text-slate-400 rtl:text-right">
              <CheckCircle2 size={14} className="text-blue-500 flex-shrink-0" />
              <span>{isAr ? 'تم التحقق من الشهادة الهندسية' : 'Verified Core Engineering Qualification'}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
