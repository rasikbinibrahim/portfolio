import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Github, Linkedin, Download, ArrowRight, Sparkles, MessageSquare } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Hero: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [typedText, setTypedText] = useState('');
  const fullText = t('role');
  const speed = 70;

  useEffect(() => {
    let index = 0;
    setTypedText(''); // Reset when language changes
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.substring(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [fullText, i18n.language]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25, filter: 'blur(8px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-20 lg:pb-32 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, -45, 0],
            x: [0, -100, 0],
            y: [0, 50, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-500/10 dark:bg-indigo-600/10 rounded-full blur-[100px]" 
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.05)_100%)] dark:bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.8)_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10 w-full">
        {/* Left: Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col space-y-6 lg:col-span-7"
        >
          <motion.div variants={itemVariants} className="flex items-center">
            <span className="inline-flex items-center px-4 py-1.5 bg-blue-600/10 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full text-xs font-bold uppercase tracking-widest border border-blue-600/20 backdrop-blur-sm">
              <Sparkles className="w-3 h-3 me-2 flex-shrink-0" />
              {t('status')}
            </span>
          </motion.div>

          <motion.h1 
            variants={itemVariants} 
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight font-outfit text-slate-900 dark:text-white"
          >
            {t('hello')} <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              {t('codeBlock.name')}
            </span> 👋
          </motion.h1>

          <motion.div variants={itemVariants} className="min-h-[3rem] md:min-h-[4rem] flex items-center max-w-full overflow-hidden">
            <span className="text-lg md:text-2xl lg:text-3xl font-semibold text-slate-700 dark:text-slate-300 font-outfit tracking-tight leading-snug block truncate whitespace-normal">
              <span className="typing-cursor border-e-2 border-blue-600 animate-pulse pe-1">{typedText}</span>
            </span>
          </motion.div>

          <motion.p variants={itemVariants} className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed font-light">
            {t('summary')}
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 pt-4">
            <a
              href="#projects"
              className="px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold flex items-center group transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-600/30 transform hover:-translate-y-0.5 relative overflow-hidden text-xs md:text-sm"
            >
              <span className="relative z-10 flex items-center">
                {t('view_projects')} 
                <ArrowRight className="ms-1.5 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" size={16} />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </a>
            
            <a
              href="/assets/project/Rasik_Nizam_Senior_Frontend_Engineer_Resume.pdf"
              download="Rasik_Nizam_Senior_Frontend_Engineer_Resume.pdf"
              className="px-5 py-3.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full font-bold hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400 transition-all transform hover:-translate-y-0.5 group flex items-center backdrop-blur-sm text-xs md:text-sm shadow-sm hover:shadow"
            >
              <Download size={16} className="me-1.5 group-hover:animate-bounce text-blue-600 dark:text-blue-400 flex-shrink-0" /> 
              <span>{t('resume')}</span>
            </a>

            <a
              href="#contact"
              className="px-5 py-3.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full font-bold hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400 transition-all transform hover:-translate-y-0.5 group flex items-center backdrop-blur-sm text-xs md:text-sm shadow-sm hover:shadow"
            >
              <MessageSquare size={16} className="me-1.5 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform flex-shrink-0" /> 
              <span>{t('contact_me')}</span>
            </a>
            
            <div className="flex items-center gap-2 rtl:flex-row-reverse mt-3 w-full pt-3 border-t border-slate-200/60 dark:border-slate-800/60 sm:border-t-0 sm:pt-0 sm:mt-0 sm:w-auto">
              <a href="https://github.com/rasikbinibrahim" target="_blank" rel="noopener noreferrer" className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-600 transition-all shadow-sm flex items-center justify-center"><Github size={18} /></a>
              <a href="https://linkedin.com/in/rasikbinibrahim" target="_blank" rel="noopener noreferrer" className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-600 transition-all shadow-sm flex items-center justify-center"><Linkedin size={18} /></a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Premium Code Block */}
        <motion.div
          initial={{ opacity: 0, x: 40, rotateY: 15 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="relative hidden lg:block lg:col-span-5 perspective-2000"
        >
          <div className="relative z-10 bg-slate-950/90 backdrop-blur-xl rounded-[2rem] p-1 shadow-[0_32px_64px_-16px_rgba(37,99,235,0.2)] border border-white/10 ring-1 ring-white/5 group overflow-hidden">
            <div className="bg-slate-900/80 rounded-t-[1.8rem] px-6 py-4 flex items-center justify-between border-b border-white/5">
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
              </div>
              <div className="flex items-center text-xs text-slate-400 font-mono tracking-wider opacity-60">
                <Terminal size={14} className="me-2 flex-shrink-0" />
                Portfolio.ts
              </div>
            </div>
            
            <div className="p-6 md:p-8 font-mono text-xs md:text-sm leading-relaxed overflow-hidden">
              <div className="flex space-x-4 rtl:space-x-reverse mb-2">
                <span className="text-slate-600">1</span>
                <span className="text-pink-500">interface</span> <span className="text-blue-400">Developer</span> {'{'}
              </div>
              <div className="flex space-x-4 rtl:space-x-reverse mb-1">
                <span className="text-slate-600">2</span>
                <span className="ps-4 text-blue-300">name:</span> <span className="text-green-300">"{t('codeBlock.name')}"</span>,
              </div>
              <div className="flex space-x-4 rtl:space-x-reverse mb-1">
                <span className="text-slate-600">3</span>
                <span className="ps-4 text-blue-300">role:</span> <span className="text-green-300">"{t('codeBlock.role')}"</span>,
              </div>
              <div className="flex space-x-4 rtl:space-x-reverse mb-1">
                <span className="text-slate-600">4</span>
                <span className="ps-4 text-blue-300">experience:</span> <span className="text-amber-300">"{t('codeBlock.experience')}"</span>,
              </div>
              <div className="flex space-x-4 rtl:space-x-reverse mb-1">
                <span className="text-slate-600">5</span>
                <span className="ps-4 text-blue-300">skills:</span> [<span className="text-green-300">'React Native'</span>, <span className="text-green-300">'React.js'</span>, <span className="text-green-300">'TS'</span>, <span className="text-green-300">'Redux'</span>],
              </div>
              <div className="flex space-x-4 rtl:space-x-reverse mb-1">
                <span className="text-slate-600">6</span>
                <span className="ps-4 text-blue-300">focus:</span> <span className="text-indigo-300">"{t('codeBlock.focus')}"</span>,
              </div>
              <div className="flex space-x-4 rtl:space-x-reverse">
                <span className="text-slate-600">7</span>
                {'}'}
              </div>
              <div className="mt-4 flex space-x-4 rtl:space-x-reverse animate-pulse truncate">
                <span className="text-slate-600">8</span>
                <span className="text-blue-500 font-bold truncate">// {t('codeBlock.returnMsg')}</span>
              </div>
            </div>
            
            {/* Glossy Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-transparent pointer-events-none" />
          </div>
          
          {/* Decorative elements behind the card */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-600/30 blur-[80px] rounded-full animate-pulse pointer-events-none" />
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-indigo-600/20 blur-[80px] rounded-full animate-bounce pointer-events-none" style={{ animationDuration: '6s' }} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
