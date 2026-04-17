import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Sun, Moon, Menu, X, Languages } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useTranslation } from 'react-i18next';

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(nextLang);
  };

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.skills'), href: '#skills' },
    { name: t('nav.projects'), href: '#projects' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-md shadow-lg border-b border-slate-200 dark:border-slate-800'
        : 'bg-transparent'
        }`}
    >
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 origin-left z-[60] rtl:origin-right"
        style={{ scaleX }}
      />

      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <motion.a
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold font-outfit tracking-tighter"
        >
          RASIK<span className="text-blue-600"> NIZAM</span>
        </motion.a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
          {navLinks.map((link, idx) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="text-sm font-medium hover:text-blue-600 transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <div className="flex items-center space-x-2 rtl:space-x-reverse border-l dark:border-slate-800 ps-4 rtl:border-l-0 rtl:border-r">
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors flex items-center space-x-1"
              title={i18n.language === 'en' ? 'Arabic' : 'English'}
            >
              <Languages size={18} />
              <span className="text-xs font-bold uppercase">{i18n.language === 'en' ? 'AR' : 'EN'}</span>
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </div>
          <a
            href="/assets/project/Rasik_Nizam_Senior_Frontend_Engineer_Resume.pdf"
            download="Rasik_Nizam_Senior_Frontend_Engineer_Resume.pdf"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-all shadow-md hover:shadow-blue-500/20"
          >
            {t('resume')}
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center space-x-2 rtl:space-x-reverse">
          <button
            onClick={toggleLanguage}
            className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors flex items-center space-x-1"
          >
            <Languages size={18} />
            <span className="text-xs font-bold uppercase">{i18n.language === 'en' ? 'AR' : 'EN'}</span>
          </button>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 overflow-hidden"
        >
          <div className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/assets/project/Rasik_Nizam_Senior_Frontend_Engineer_Resume.pdf"
              download="Rasik_Nizam_Senior_Frontend_Engineer_Resume.pdf"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full py-3 bg-blue-600 text-white text-center rounded-lg font-semibold"
            >
              {t('resume')}
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
