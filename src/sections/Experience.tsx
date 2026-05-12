import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Briefcase, CheckCircle2, Calendar, Layers, ShieldCheck, Smartphone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

// Premium Left-Side Logo Box handling standalone public assets and vector fallbacks directly
const CompanyLogo = ({ 
  src, 
  alt, 
  fallbackIcon, 
  bgClass 
}: { 
  src: string; 
  alt: string; 
  fallbackIcon: JSX.Element; 
  bgClass: string; 
}) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center shadow-md p-2 flex-shrink-0 relative overflow-hidden group-hover:scale-105 transition-all ${bgClass}`}>
      {!hasError ? (
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-full object-contain transition-opacity duration-300"
          onError={() => setHasError(true)}
        />
      ) : (
        <div className="flex items-center justify-center w-full h-full text-white">
          {fallbackIcon}
        </div>
      )}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-white/5 transition-colors pointer-events-none" />
    </div>
  );
};

const Experience: React.FC = () => {
  const { i18n } = useTranslation();
  const isAr = i18n.language === 'ar';

  const experiences = [
    {
      company: "Petrus Technologies Pvt. Ltd.",
      role: isAr ? "مهندس برمجيات أول" : "Senior Software Engineer",
      duration: isAr ? "يوليو 2023 – الحاضر" : "July 2023 – Present",
      location: isAr ? "كويمباتور، الهند" : "Coimbatore, India",
      logoSrc: "/assets/project/petrusLogoImg.png",
      logoBgClass: "bg-white border border-slate-100 dark:bg-slate-800 dark:border-slate-700",
      fallbackIcon: <Briefcase size={26} className="text-blue-600 dark:text-blue-400" />,
      colorFrom: "from-blue-600",
      colorTo: "to-indigo-600",
      badgeColor: "bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border-blue-100 dark:border-blue-900/50",
      responsibilities: isAr ? [
        "تصميم لوحة تحكم OEE (الفعالية الشاملة للمعدات) في الوقت الفعلي عبر أكثر من 20 خط إنتاج، مما يتيح التتبع المباشر لمقاييس الأداء والتوافر والجودة.",
        "بناء لوحات تحكم عالية الأداء لتصور البيانات الصناعية المباشرة، مما أدى إلى تحسين الرؤية التشغيلية لفرق المصانع.",
        "تقليل مكالمات API بنسبة 50% باستخدام TanStack Query (التخزين المؤقت، إعادة الجلب في الخلفية، التحديثات المتفائلة).",
        "ترحيل واجهات برمجة التطبيقات REST → GraphQL (Apollo Client)، مما قلل حجم البيانات بنسبة 60% وحسّن استجابة واجهة المستخدم.",
        "تحسين أداء التحميل الأولي بنسبة 35% باستخدام العرض الهجين Next.js SSR/CSR.",
        "تطوير مكتبة مكونات قابلة لإعادة الاستخدام (15+ وحدة)، بما في ذلك بطاقات الأداء، الرسوم البيانية، التنبيهات، وأنظمة التقارير، مما قلل جهد التطوير بنسبة 30%.",
        "بناء أنظمة تصور ديناميكية، مما قلل جهد إعداد التقارير اليدوية بنسبة 40% لكل وردية.",
        "ضمان وقت تشغيل بنسبة 99.9% للوحات التحكم المستخدمة من قبل أكثر من 100 مستخدم نشط يوميًا.",
        "تحسين أداء التصيير لمجموعات البيانات الكبيرة باستخدام الحفظ المؤقت (memoization) والتحميل الكسول وإدارة الحالة الفعالة.",
        "تسليم 6 إصدارات إنتاجية بنسبة تسليم في الوقت المحدد بلغت 95%، باتباع مسارات عمل Git المنظمة ومراجعات الكود."
      ] : [
        "Architected a real-time OEE (Overall Equipment Effectiveness) dashboard across 20+ production lines, enabling live tracking of Performance, Availability, and Quality metrics.",
        "Built high-performance dashboards for real-time industrial data visualization, improving operational visibility across plant teams.",
        "Reduced API calls by 50% using TanStack Query (caching, background refetching, optimistic updates).",
        "Migrated REST APIs → GraphQL (Apollo Client), reducing payload size by 60% and improving UI responsiveness.",
        "Improved initial load performance by 35% using Next.js SSR/CSR hybrid rendering.",
        "Developed reusable component library (15+ modules), including KPI cards, charts, alerts, and reporting systems, reducing development effort by 30%.",
        "Built dynamic visualization systems, reducing manual reporting effort by 40% per shift.",
        "Ensured 99.9% uptime for dashboards used by 100+ daily active users.",
        "Optimized rendering performance for large datasets using memoization, lazy loading, and efficient state management.",
        "Delivered 6 production releases with 95% on-time delivery, following structured Git workflows and PR reviews."
      ]
    },
    {
      company: "OREOPS Framework Pvt. Ltd.",
      role: isAr ? "مطور تطبيقات" : "Application Developer",
      duration: isAr ? "سبتمبر 2022 – يونيو 2023" : "September 2022 – June 2023",
      location: isAr ? "إيرود، الهند" : "Erode, India",
      logoSrc: "/assets/project/oreopsLogoImg.png",
      logoBgClass: "bg-[#7c3aed] border border-purple-500/20",
      fallbackIcon: <Layers size={26} className="text-white" />,
      colorFrom: "from-indigo-600",
      colorTo: "to-purple-600",
      badgeColor: "bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 border-indigo-100 dark:border-indigo-900/50",
      responsibilities: isAr ? [
        "بناء محرك نماذج ديناميكي قائم على المخطط، مما قلل من جهد التطوير بنسبة 50%.",
        "تطوير مكتبات مكونات واجهة مستخدم قابلة لإعادة الاستخدام عبر تطبيقات SaaS للمؤسسات.",
        "تصميم بنية واجهة أمامية قابلة للتوسع لمنصات التطوير منخفضة الأكواد / بدون أكواد."
      ] : [
        "Built a schema-driven dynamic form engine, reducing development effort by 50%.",
        "Developed reusable UI component libraries across enterprise SaaS applications.",
        "Designed scalable frontend architecture for low-code/no-code platforms."
      ]
    },
    {
      company: "KGiSL",
      role: isAr ? "مطور مساعد" : "Associate Developer",
      duration: isAr ? "مارس 2022 – أغسطس 2022" : "March 2022 – August 2022",
      location: isAr ? "كويمباتور، الهند" : "Coimbatore, India",
      logoSrc: "/assets/project/kgislLogoImg.png",
      logoBgClass: "bg-white border border-slate-100 dark:bg-slate-800 dark:border-slate-700",
      fallbackIcon: <ShieldCheck size={26} className="text-blue-600 dark:text-blue-400" />,
      colorFrom: "from-emerald-600",
      colorTo: "to-teal-600",
      badgeColor: "bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border-emerald-100 dark:border-emerald-900/50",
      responsibilities: isAr ? [
        "تطوير وحدات واجهة مستخدم آمنة لتطبيقات الخدمات المصرفية عبر الهاتف المحمول.",
        "تنفيذ تدفقات المصادقة القائمة على OAuth 2.0 و JWT.",
        "تحسين أداء وسهولة استخدام مسارات العمل المالية الحرجة."
      ] : [
        "Developed secure UI modules for mobile banking applications.",
        "Implemented OAuth 2.0 & JWT-based authentication flows.",
        "Improved performance and usability of critical financial workflows."
      ]
    },
    {
      company: "Latlon Technologies Pvt. Ltd.",
      role: isAr ? "مبرمج ومحلل" : "Programmer Analyst",
      duration: isAr ? "أكتوبر 2020 – مارس 2022" : "October 2020 – March 2022",
      location: isAr ? "كويمباتور، الهند" : "Coimbatore, India",
      logoSrc: "/assets/project/latlonLogoImg.png",
      logoBgClass: "bg-white border border-slate-100 dark:bg-slate-800 dark:border-slate-700",
      fallbackIcon: <Smartphone size={26} className="text-blue-600 dark:text-blue-400" />,
      colorFrom: "from-purple-600",
      colorTo: "to-pink-600",
      badgeColor: "bg-purple-50 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 border-purple-100 dark:border-purple-900/50",
      responsibilities: isAr ? [
        "بناء تطبيقات رعاية صحية باستخدام React Native، بما في ذلك أنظمة الاستشارات والسجلات الطبية.",
        "تكامل واجهات برمجة التطبيقات REST لتبادل البيانات في الوقت الفعلي.",
        "تحسين أداء التطبيق بنسبة تقارب 20%."
      ] : [
        "Built React Native healthcare applications, including consultation and medical record systems.",
        "Integrated REST APIs for real-time data exchange.",
        "Improved application performance by ~20%."
      ]
    }
  ];

  return (
    <section id="experience" className="section-padding py-24 bg-slate-50/40 dark:bg-slate-900/10 border-y border-slate-200/60 dark:border-slate-800/60 relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2" />
      
      <div className="flex flex-col items-center text-center space-y-4 mb-16">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-blue-600 font-bold tracking-widest uppercase text-sm"
        >
          {isAr ? 'مسيرتي المهنية' : 'Professional Trajectory'}
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-bold font-outfit tracking-tight"
        >
          {isAr ? 'الخبرة العملية' : 'Work Experience'}
        </motion.h2>
      </div>

      <div className="max-w-5xl mx-auto space-y-12 px-4">
        {experiences.map((exp, expIdx) => (
          <motion.div 
            key={expIdx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: expIdx * 0.1 }}
            viewport={{ once: true }}
            className="relative bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-[2.5rem] p-6 md:p-10 shadow-xl hover:shadow-2xl transition-all backdrop-blur-sm overflow-hidden group"
          >
            {/* Top highlight line */}
            <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${exp.colorFrom} ${exp.colorTo}`} />
            
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800 rtl:text-right">
              <div className="flex items-start space-x-4 rtl:space-x-reverse flex-1">
                {/* Left side integrated Company Logo container */}
                <CompanyLogo 
                  src={exp.logoSrc} 
                  alt={exp.company} 
                  fallbackIcon={exp.fallbackIcon}
                  bgClass={exp.logoBgClass}
                />
                
                <div className="flex-1 min-w-0 pt-0.5">
                  <h3 className="text-lg md:text-2xl font-bold font-outfit text-slate-900 dark:text-white tracking-tight truncate whitespace-normal">
                    {exp.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 pt-1 text-slate-600 dark:text-slate-400 font-medium text-xs md:text-sm">
                    <span className="text-slate-900 dark:text-slate-100 font-bold">{exp.company}</span>
                    <span className="text-slate-300 dark:text-slate-700 hidden sm:inline">•</span>
                    <div className="flex items-center text-xs md:text-sm text-slate-500">
                      <MapPin size={13} className="me-1 flex-shrink-0" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`flex items-center space-x-1.5 rtl:space-x-reverse px-3.5 py-2 rounded-full font-bold text-xs md:text-sm w-fit border self-start md:self-auto ${exp.badgeColor}`}>
                <Calendar size={13} className="flex-shrink-0" />
                <span>{exp.duration}</span>
              </div>
            </div>

            <div className="pt-6 rtl:text-right">
              <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4 px-1">
                {isAr ? 'المسؤوليات والإنجازات الرئيسية' : 'Core Responsibilities & Impact'}
              </h4>
              
              <div className="grid grid-cols-1 gap-2.5">
                {exp.responsibilities.map((resp, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: isAr ? 10 : -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04, duration: 0.3 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3 rtl:space-x-reverse p-3.5 rounded-xl bg-slate-50/80 dark:bg-slate-950/40 border border-slate-100 dark:border-slate-800/40 hover:border-blue-600/20 transition-colors"
                  >
                    <CheckCircle2 size={16} className="text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-xs md:text-sm text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                      {resp}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
