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
          className="relative w-full max-w-5xl max-h-[90vh] bg-white dark:bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row rtl:md:flex-row-reverse"
        >
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 rtl:right-auto rtl:left-6 z-[110] p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-white/20 transition-all"
          >
            <X size={24} />
          </button>

          {/* Left Side: Image & Stats */}
          <div className="w-full md:w-2/5 relative min-h-[300px] md:min-h-full">
            <img src={project.image} alt={title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent flex flex-col justify-end p-8">
              <div className="px-4 py-2 bg-blue-600 w-fit rounded-full text-xs font-bold uppercase tracking-widest text-white mb-4">
                {project.category}
              </div>
              <h2 className="text-3xl font-bold text-white font-outfit mb-2">{title}</h2>
              <p className="text-blue-200 font-medium">{subtitle}</p>
            </div>
          </div>

          {/* Right Side: Details */}
          <div className="w-full md:w-3/5 p-8 md:p-12 overflow-y-auto custom-scrollbar bg-slate-50 dark:bg-slate-900/50">
            <div className="space-y-10">
              {/* Overview */}
              <section className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-bold text-blue-600 uppercase tracking-widest flex items-center">
                    <Layout size={16} className="me-2" /> {t('about')}
                  </h3>
                  {project.pdf && (
                    <a 
                      href={project.pdf} 
                      download={`${title.replace(/\s+/g, '_')}_Case_Study.pdf`}
                      className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center bg-blue-600/10 px-3 py-1.5 rounded-lg transition-colors group"
                    >
                      <Download size={14} className="me-2 group-hover:animate-bounce" /> {isAr ? 'بي دي إف' : 'Case Study PDF'}
                    </a>
                  )}
                </div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg italic rtl:text-right">
                  "{overview}"
                </p>
              </section>

              {/* My Role */}
              <section className="space-y-4">
                <h3 className="text-sm font-bold text-blue-600 uppercase tracking-widest flex items-center">
                  <Trophy size={16} className="me-2" /> {isAr ? 'دوري' : 'My Role'}
                </h3>
                <ul className="grid grid-cols-1 gap-3">
                  {role.map((item, i) => (
                    <li key={i} className="flex items-start text-slate-700 dark:text-slate-300 rtl:text-right">
                      <CheckCircle2 size={18} className="text-blue-500 me-3 mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Features & Tech */}
              <div className="grid md:grid-cols-2 gap-10">
                <section className="space-y-4">
                  <h3 className="text-sm font-bold text-blue-600 uppercase tracking-widest">{isAr ? 'الميزات الأساسية' : 'Core Features'}</h3>
                  <div className="space-y-3">
                    {features.map((f, i) => (
                      <div key={i} className="flex items-center text-sm font-medium text-slate-500 rtl:text-right">
                        <Zap size={14} className="me-2 text-yellow-500" /> {f}
                      </div>
                    ))}
                  </div>
                </section>
                <section className="space-y-4">
                  <h3 className="text-sm font-bold text-blue-600 uppercase tracking-widest">{isAr ? 'التقنيات' : 'Tech Stack'}</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((t, i) => (
                      <span key={i} className="px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-xs font-bold text-slate-500">
                        {t}
                      </span>
                    ))}
                  </div>
                </section>
              </div>

              {/* Impact & Challenges */}
              <div className="p-8 bg-blue-600/5 rounded-3xl border border-blue-600/10 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <div className="p-2 bg-blue-600 text-white rounded-xl shadow-lg shadow-blue-500/20">
                      <ArrowUpRight size={18} />
                    </div>
                    <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-tighter">{isAr ? 'الأثر التجاري' : 'Business Impact'}</h4>
                  </div>
                  <ul className="space-y-2">
                    {impact.map((point, i) => (
                      <li key={i} className="flex items-center text-slate-600 dark:text-slate-400 text-sm font-medium rtl:text-right">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full me-3 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {challenges && (
                  <div className="flex items-start space-x-4 rtl:space-x-reverse">
                    <div className="p-3 bg-red-500/10 text-red-500 rounded-2xl">
                      <ShieldAlert size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-tighter">{isAr ? 'التحديات الرئيسية' : 'Key Challenges'}</h4>
                      <p className="text-slate-500 dark:text-slate-400 rtl:text-right">{challenges}</p>
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
      className="group relative overflow-hidden rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl flex flex-col cursor-pointer"
    >
      <div className="relative aspect-video overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
          <div className="flex space-x-4">
            <div className="px-6 py-3 bg-white text-slate-900 rounded-xl font-bold flex items-center space-x-2 transform hover:scale-105 transition-all">
              <span>{isAr ? 'عرض دراسة الحالة' : 'View Case Study'}</span>
              <ArrowUpRight size={18} />
            </div>
          </div>
        </div>
        <img src={project.image} alt={title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 brightness-90 group-hover:brightness-100" />
        <div className="absolute top-6 left-6 rtl:left-auto rtl:right-6 z-20">
          <div className="px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full border border-white/30 text-white text-[10px] font-bold uppercase tracking-widest">
            {project.category}
          </div>
        </div>
        {project.star && (
          <div className="absolute top-6 right-6 rtl:right-auto rtl:left-6 z-20">
            <div className="p-2 bg-yellow-400 text-slate-900 rounded-xl shadow-lg animate-pulse">
              <Zap size={16} fill="currentColor" />
            </div>
          </div>
        )}
      </div>
      
      <div className="p-8 flex flex-col flex-1 space-y-4 rtl:text-right">
        <h3 className="text-2xl font-bold font-outfit text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed line-clamp-2">
          {subtitle}
        </p>
        
        <div className="flex flex-wrap gap-2 rtl:flex-row-reverse">
          {project.techStack.slice(0, 3).map((t, i) => (
            <span key={i} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 rounded-full text-[10px] font-bold tracking-wide uppercase">
              {t}
            </span>
          ))}
          {project.techStack.length > 3 && <span className="text-[10px] text-slate-400">+{project.techStack.length - 3} {isAr ? 'أكثر' : 'more'}</span>}
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
    <section id="projects" className="section-padding py-24">
      <div className="flex flex-col items-center text-center space-y-6 mb-20">
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
          className="text-3xl md:text-6xl font-bold font-outfit"
        >
          {i18n.language === 'ar' ? 'مشاريع متميزة' : 'Signature Projects'}
        </motion.h2>
        <motion.p className="text-slate-500 max-w-2xl font-medium rtl:text-center">
          {i18n.language === 'ar' 
            ? 'دراسات حالة مفصلة للحلول الصناعية والرعاية الصحية عالية الأداء.' 
            : 'Detailed case studies of high-performance industrial and healthcare solutions.'}
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {displayedProjects.map((proj, idx) => (
          <ProjectCard key={proj.id} project={proj} onClick={() => setSelectedProject(proj)} idx={idx} />
        ))}
      </div>

      {!showAll && projects.length > 3 && (
        <div className="mt-16 flex justify-center">
          <button 
            onClick={() => setShowAll(true)}
            className="px-10 py-4 border-2 border-slate-200 dark:border-slate-800 rounded-2xl font-bold hover:border-blue-600 hover:text-blue-600 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-blue-600/10"
          >
            {i18n.language === 'ar' ? 'عرض المزيد من المشاريع' : 'View More Projects'}
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
