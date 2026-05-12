import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Github, Linkedin, Download, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Contact: React.FC = () => {
  const { t, i18n } = useTranslation();

  const contactInfo = [
    {
      icon: <Mail className="text-blue-600 dark:text-blue-400" />,
      title: t('contact_info.email', 'Email'),
      value: "rasikbinibrahim@gmail.com",
      href: "mailto:rasikbinibrahim@gmail.com"
    },
    {
      icon: <MessageCircle className="text-emerald-600 dark:text-emerald-400" />,
      title: t('contact_info.whatsapp', 'WhatsApp'),
      value: "+91 9585248912",
      href: "https://wa.me/919585248912",
      target: "_blank"
    },
    {
      icon: <Linkedin className="text-blue-700 dark:text-blue-500" />,
      title: t('contact_info.linkedin', 'LinkedIn'),
      value: "linkedin.com/in/rasikbinibrahim",
      href: "https://linkedin.com/in/rasikbinibrahim",
      target: "_blank"
    },
    {
      icon: <Github className="text-slate-900 dark:text-white" />,
      title: t('contact_info.github', 'GitHub'),
      value: "github.com/rasikbinibrahim",
      href: "https://github.com/rasikbinibrahim",
      target: "_blank"
    },
    {
      icon: <Download className="text-indigo-600 dark:text-indigo-400" />,
      title: t('contact_info.resume', 'Resume Download'),
      value: "Enterprise CV (.pdf)",
      href: "/assets/project/Rasik_Nizam_Senior_Frontend_Engineer_Resume.pdf",
      download: "Rasik_Nizam_Senior_Frontend_Engineer_Resume.pdf"
    }
  ];

  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<'idle' | 'success' | 'error' | 'invalid-email'>('idle');

  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus('idle');

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    if (!validateEmail(String(data.email))) {
      setSubmitStatus('invalid-email');
      return;
    }

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!accessKey || accessKey === "YOUR_ACCESS_KEY_HERE") {
      alert("Please set your Web3Forms Access Key in the .env file!");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          ...data,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        console.error("Web3Forms Error:", result.message);
        setSubmitStatus('error');
        alert(result.message || "Failed to send message. Check your Access Key.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding py-32 overflow-hidden relative">
      {/* Background glow enhancement for contrast */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start relative z-10">
        <div className="space-y-10">
          <div className="space-y-4">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-blue-600 font-bold tracking-widest uppercase text-sm"
            >
              {t('contact')}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-5xl font-bold font-outfit leading-tight rtl:text-right tracking-tight"
            >
              {i18n.language === 'en' ? (
                <>Let's build enterprise <span className="text-blue-600">excellence</span> together.</>
              ) : (
                <>{t('contact_title')}</>
              )}
            </motion.h2>
            <motion.p className="text-base md:text-lg text-slate-500 max-w-lg rtl:text-right leading-relaxed font-medium">
              {t('contact_desc')}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {contactInfo.map((info, idx) => (
              <motion.a
                key={idx}
                href={info.href}
                download={info.download}
                target={info.target}
                rel={info.target ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-4 rtl:space-x-reverse p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-blue-600/40 dark:hover:border-blue-500/40 transition-all hover:shadow-xl hover:shadow-blue-600/5 group backdrop-blur-sm rtl:text-right"
              >
                <div className="p-3 bg-slate-50 dark:bg-slate-800/80 rounded-xl shadow-sm group-hover:scale-110 group-hover:bg-blue-50 dark:group-hover:bg-blue-950/50 transition-all">
                  {info.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">{info.title}</h4>
                  <p className="text-sm md:text-base font-bold text-slate-900 dark:text-white font-outfit truncate">{info.value}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="p-8 md:p-10 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl relative backdrop-blur-md"
        >
          <div className="absolute -top-10 -right-10 rtl:right-auto rtl:-left-10 w-40 h-40 bg-blue-600/10 blur-3xl rounded-full pointer-events-none" />
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="space-y-1.5 rtl:text-right">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">{t('form.name')}</label>
                <input name="name" type="text" required placeholder={t('form.placeholder_name')} className="w-full px-5 py-3.5 bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:border-blue-600 text-sm transition-colors" />
              </div>
              <div className="space-y-1.5 rtl:text-right">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">{t('form.email')}</label>
                <input name="email" type="email" required placeholder="email@example.com" className="w-full px-5 py-3.5 bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:border-blue-600 text-sm transition-colors" />
              </div>
            </div>
            <div className="space-y-1.5 rtl:text-right">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">{t('form.subject')}</label>
              <input name="subject" type="text" required placeholder={t('form.subject')} className="w-full px-5 py-3.5 bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:border-blue-600 text-sm transition-colors" />
            </div>
            <div className="space-y-1.5 rtl:text-right">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">{t('form.message')}</label>
              <textarea name="message" rows={5} required placeholder={t('form.placeholder_msg')} className="w-full px-5 py-3.5 bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:border-blue-600 text-sm transition-colors resize-none"></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold text-sm md:text-base flex items-center justify-center space-x-2 rtl:space-x-reverse hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed group overflow-hidden relative"
            >
              <span className="relative z-10 flex items-center space-x-2 rtl:space-x-reverse">
                <span>{isSubmitting ? t('form.sending') : t('form.send')}</span>
                <Send size={16} className={isSubmitting ? 'animate-pulse' : 'group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform'} />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </button>

            <div className="text-center pt-2">
              {submitStatus === 'success' && (
                <p className="text-green-600 font-bold text-sm">
                  {t('form.success')}
                </p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-600 font-bold text-sm">
                  {t('form.error')}
                </p>
              )}
              {submitStatus === 'invalid-email' && (
                <p className="text-orange-500 font-bold text-sm">
                  {t('form.invalid')}
                </p>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export const Footer = () => {
  const { t, i18n } = useTranslation();
  return (
    <footer className="py-16 border-t border-slate-200 dark:border-slate-800 px-6 backdrop-blur-sm relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
        <div className="flex flex-col items-center md:items-start space-y-2">
          <a href="#" className="text-xl font-bold font-outfit uppercase tracking-tighter">
            RASIK<span className="text-blue-600"> NIZAM</span>
          </a>
          <p className="text-slate-500 font-medium text-center md:text-left text-xs max-w-sm">
            {t('footer_desc')}
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end space-y-4">
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <a href="https://github.com/rasikbinibrahim" target="_blank" rel="noopener noreferrer" className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:text-blue-600 transition-all shadow-sm"><Github size={18} /></a>
            <a href="https://linkedin.com/in/rasikbinibrahim" target="_blank" rel="noopener noreferrer" className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:text-blue-600 transition-all shadow-sm"><Linkedin size={18} /></a>
            <a href="/assets/project/Rasik_Nizam_Senior_Frontend_Engineer_Resume.pdf" download="Rasik_Nizam_Senior_Frontend_Engineer_Resume.pdf" className="px-5 py-2.5 bg-blue-600 text-white rounded-xl font-bold text-xs flex items-center space-x-2 rtl:space-x-reverse shadow-md hover:bg-blue-700 transition-all">
              <Download size={14} />
              <span>{t('resume')}</span>
            </a>
          </div>
          <p className="text-xs font-mono text-slate-400">
            © 2026 Rasik Nizam. {i18n.language === 'ar' ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
