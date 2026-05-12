import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X, Layout, CheckCircle2, Zap, Trophy, ShieldAlert, Download } from 'lucide-react';
import { projects, Project } from '../data/projects';
import { useTranslation } from 'react-i18next';

const ProjectModal = ({ project, isOpen, onClose }: { project: Project, isOpen: boolean, onClose: () => void }) => {
  const { t, i18n } = useTranslation();
  if (!isOpen) return null;

  const isAr = i18n.language === 'ar';
  const title = isAr ? project.titleAr : project.title;
  const subtitle = isAr ? project.subtitleAr : project.subtitle;
  const overview = isAr ? project.overviewAr : project.overview;
  const role = isAr ? project.roleAr : project.role;
  const features = isAr ? project.featuresAr : project.features;
  const impact = isAr ? project.impactAr : project.impact;
  const challenges = isAr ? project.challengesAr : project.challenges;
  const optimizations = isAr ? project.optimizationsAr : project.optimizations;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
      >
        <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-md" onClick={onClose} />
        
        <motion.div 
          initial={{ scale: 0.9, y: 20, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.9, y: 20, opacity: 0 }}
          className="relative w-full max-w-5xl max-h-[90vh] bg-white dark:bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row rtl:md:flex-row-reverse border border-slate-200 dark:border-slate-800"
        >
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 rtl:right-auto rtl:left-6 z-[110] p-3 bg-slate-900/40 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-slate-900/60 transition-all"
          >
            <X size={24} />
          </button>

          {/* Left Side: Image & Stats */}
          <div className="w-full md:w-2/5 relative min-h-[250px] md:min-h-full flex flex-col justify-end overflow-hidden">
            <img src={project.image} alt={title} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
            <div className="relative p-8 z-10">
              <div className="px-4 py-1.5 bg-blue-600 w-fit rounded-full text-[10px] font-bold uppercase tracking-widest text-white mb-3">
                {project.category} Case Study
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white font-outfit mb-2 tracking-tight">{title}</h2>
              <p className="text-blue-300 text-xs md:text-sm font-medium">{subtitle}</p>
            </div>
          </div>

          {/* Right Side: Details */}
          <div className="w-full md:w-3/5 p-6 md:p-10 overflow-y-auto custom-scrollbar bg-slate-50 dark:bg-slate-900/40">
            <div className="space-y-8">
              {/* Overview */}
              <section className="space-y-3">
                <div className="flex justify-between items-center">
                  <h3 className="text-xs font-bold text-blue-600 uppercase tracking-widest flex items-center">
                    <Layout size={14} className="me-2" /> {isAr ? 'نظرة عامة على المشروع' : 'Project Overview'}
                  </h3>
                  {project.pdf && (
                    <a 
                      href={project.pdf} 
                      download={`${title.replace(/\s+/g, '_')}_Case_Study.pdf`}
                      className="text-[11px] font-bold text-blue-600 hover:text-blue-700 flex items-center bg-blue-600/10 px-3 py-1.5 rounded-lg transition-colors group"
                    >
                      <Download size={12} className="me-1.5 group-hover:animate-bounce" /> {isAr ? 'تحميل دراسة الحالة' : 'Case Study PDF'}
                    </a>
                  )}
                </div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base italic rtl:text-right font-medium">
                  "{overview}"
                </p>
              </section>

              {/* My Role */}
              <section className="space-y-3">
                <h3 className="text-xs font-bold text-blue-600 uppercase tracking-widest flex items-center">
                  <Trophy size={14} className="me-2" /> {isAr ? 'دوري ومساهماتي' : 'Role & Contributions'}
                </h3>
                <ul className="grid grid-cols-1 gap-2.5">
                  {role.map((item, i) => (
                    <li key={i} className="flex items-start text-xs md:text-sm text-slate-700 dark:text-slate-300 rtl:text-right font-medium">
                      <CheckCircle2 size={16} className="text-blue-600 dark:text-blue-400 me-2.5 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Features & Tech */}
              <div className="grid md:grid-cols-2 gap-6 pt-2">
                <section className="space-y-3">
                  <h3 className="text-xs font-bold text-blue-600 uppercase tracking-widest">{isAr ? 'الميزات الأساسية' : 'Core Features'}</h3>
                  <div className="space-y-2">
                    {features.map((f, i) => (
                      <div key={i} className="flex items-center text-xs font-medium text-slate-600 dark:text-slate-400 rtl:text-right">
                        <Zap size={12} className="me-2 text-yellow-500 flex-shrink-0" /> 
                        <span className="truncate">{f}</span>
                      </div>
                    ))}
                  </div>
                </section>
                <section className="space-y-3">
                  <h3 className="text-xs font-bold text-blue-600 uppercase tracking-widest">{isAr ? 'التقنيات' : 'Tech Stack'}</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((t, i) => (
                      <span key={i} className="px-2.5 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md text-[11px] font-bold text-slate-600 dark:text-slate-300 shadow-sm">
                        {t}
                      </span>
                    ))}
                  </div>
                </section>
              </div>

              {/* Impact, Challenges & Optimizations */}
              <div className="p-6 bg-blue-600/5 rounded-2xl border border-blue-600/10 space-y-5">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2.5 rtl:space-x-reverse">
                    <div className="p-1.5 bg-blue-600 text-white rounded-lg shadow-sm">
                      <ArrowUpRight size={16} />
                    </div>
                    <h4 className="font-bold text-xs text-slate-900 dark:text-white uppercase tracking-wider">{isAr ? 'الأثر التجاري' : 'Business Impact'}</h4>
                  </div>
                  <ul className="space-y-1.5">
                    {impact.map((point, i) => (
                      <li key={i} className="flex items-center text-slate-600 dark:text-slate-400 text-xs font-medium rtl:text-right">
                        <span className="w-1 h-1 bg-blue-500 rounded-full me-2.5 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {challenges && (
                  <div className="flex items-start space-x-3 rtl:space-x-reverse pt-3 border-t border-blue-600/10">
                    <div className="p-2 bg-red-500/10 text-red-500 rounded-xl mt-0.5 flex-shrink-0">
                      <ShieldAlert size={16} />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs text-slate-900 dark:text-white uppercase tracking-wider mb-1">{isAr ? 'التحديات التي تم حلها' : 'Challenges Solved'}</h4>
                      <p className="text-slate-600 dark:text-slate-400 text-xs rtl:text-right leading-relaxed font-medium">{challenges}</p>
                    </div>
                  </div>
                )}

                {optimizations && (
                  <div className="flex items-start space-x-3 rtl:space-x-reverse pt-3 border-t border-blue-600/10">
                    <div className="p-2 bg-emerald-500/10 text-emerald-500 rounded-xl mt-0.5 flex-shrink-0">
                      <Zap size={16} />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs text-slate-900 dark:text-white uppercase tracking-wider mb-1">{isAr ? 'تحسينات الأداء' : 'Performance Improvements'}</h4>
                      <p className="text-slate-600 dark:text-slate-400 text-xs rtl:text-right leading-relaxed font-medium">{optimizations}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const ProjectCard = ({ project, onClick, idx }: { project: Project, onClick: () => void, idx: number }) => {
  const { i18n } = useTranslation();
  const isAr = i18n.language === 'ar';
  const title = isAr ? project.titleAr : project.title;
  const subtitle = isAr ? project.subtitleAr : project.subtitle;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      viewport={{ once: true }}
      onClick={onClick}
      className="group relative overflow-hidden rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl flex flex-col cursor-pointer hover:shadow-2xl hover:border-blue-500/30 transition-all"
    >
      <div className="relative aspect-video overflow-hidden bg-slate-100 dark:bg-slate-950">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
          <div className="px-5 py-2.5 bg-blue-600 text-white rounded-xl font-bold text-xs flex items-center space-x-2 transform hover:scale-105 transition-all shadow-lg">
            <span>{isAr ? 'عرض دراسة الحالة' : 'View Case Study'}</span>
            <ArrowUpRight size={16} />
          </div>
        </div>
        <img src={project.image} alt={title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 brightness-95 group-hover:brightness-100" />
        <div className="absolute top-5 left-5 rtl:left-auto rtl:right-5 z-20">
          <div className="px-3 py-1 bg-slate-950/60 backdrop-blur-md rounded-full border border-white/10 text-white text-[9px] font-bold uppercase tracking-widest shadow-sm">
            {project.category} Case Study
          </div>
        </div>
        {project.star && (
          <div className="absolute top-5 right-5 rtl:right-auto rtl:left-5 z-20">
            <div className="p-2 bg-amber-400 text-slate-950 rounded-xl shadow-md animate-pulse">
              <Zap size={14} fill="currentColor" />
            </div>
          </div>
        )}
      </div>
      
      <div className="p-6 md:p-8 flex flex-col flex-1 space-y-3 rtl:text-right">
        <h3 className="text-xl md:text-2xl font-bold font-outfit text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors tracking-tight">
          {title}
        </h3>
        <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm font-medium leading-relaxed line-clamp-2">
          {subtitle}
        </p>
        
        <div className="flex flex-wrap gap-1.5 pt-2 rtl:flex-row-reverse">
          {project.techStack.slice(0, 4).map((t, i) => (
            <span key={i} className="px-2.5 py-1 bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-400 rounded-md text-[9px] font-bold tracking-wide uppercase">
              {t}
            </span>
          ))}
          {project.techStack.length > 4 && <span className="text-[9px] text-slate-400 self-center font-bold">+{project.techStack.length - 4}</span>}
        </div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showAll, setShowAll] = useState(false);

  React.useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === '#all-projects') {
        setShowAll(true);
        const el = document.getElementById('projects');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="section-padding py-24 relative overflow-hidden">
      <div className="flex flex-col items-center text-center space-y-4 mb-16">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-blue-600 font-bold tracking-widest uppercase text-sm"
        >
          {t('projects')}
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-bold font-outfit tracking-tight"
        >
          {i18n.language === 'ar' ? 'دراسات حالة هندسية' : 'Engineering Case Studies'}
        </motion.h2>
        <motion.p className="text-slate-500 dark:text-slate-400 max-w-2xl font-medium rtl:text-center text-sm md:text-base">
          {i18n.language === 'ar' 
            ? 'دراسات حالة مفصلة لتطبيقات المؤسسات الصناعية وحلول الجوال عالية الأداء.' 
            : 'In-depth case studies documenting enterprise architectures, performance breakthroughs, and scalable React Native mobile systems.'}
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        {displayedProjects.map((proj, idx) => (
          <ProjectCard key={proj.id} project={proj} onClick={() => setSelectedProject(proj)} idx={idx} />
        ))}
      </div>

      {!showAll && projects.length > 3 && (
        <div className="mt-16 flex justify-center">
          <button 
            onClick={() => setShowAll(true)}
            className="px-8 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl font-bold text-sm md:text-base hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400 transition-all transform hover:-translate-y-1 shadow-md hover:shadow-xl"
          >
            {i18n.language === 'ar' ? 'عرض جميع دراسات الحالة' : 'View All Case Studies'}
          </button>
        </div>
      )}

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          isOpen={!!selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
};

export default Projects;
