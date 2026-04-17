import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Download } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Contact: React.FC = () => {
  const { t, i18n } = useTranslation();
  const contactInfo = [
    { icon: <Mail className="text-blue-600" />, title: t('contact_info.email'), value: "rasikbinibrahim@gmail.com", href: "mailto:rasikbinibrahim@gmail.com" },
    { icon: <Phone className="text-blue-600" />, title: t('contact_info.phone'), value: "+91 9585248912", href: "tel:+919585248912" },
    { icon: <MapPin className="text-blue-600" />, title: t('contact_info.location'), value: t('contact_info.loc_val'), href: "#" },
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
    <section id="contact" className="section-padding py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-start relative z-10">
        <div className="space-y-12">
          <div className="space-y-6">
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
              className="text-4xl md:text-6xl font-bold font-outfit leading-tight rtl:text-right"
            >
              {i18n.language === 'en' ? (
                <>Let's build something <span className="text-blue-600 italic">amazing</span> together.</>
              ) : (
                <>{t('contact_title')}</>
              )}
            </motion.h2>
            <motion.p className="text-xl text-slate-500 max-w-lg rtl:text-right">
              {t('contact_desc')}
            </motion.p>
          </div>

          <div className="space-y-8">
            {contactInfo.map((info, idx) => (
              <motion.a
                key={idx}
                href={info.href}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-6 rtl:space-x-reverse p-6 rounded-[2rem] bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800/50 hover:border-blue-600/30 transition-all hover:shadow-xl hover:shadow-blue-600/5 group backdrop-blur-sm rtl:text-right"
              >
                <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-sm group-hover:scale-110 transition-transform">
                  {info.icon}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest">{info.title}</h4>
                  <p className="text-lg font-bold text-slate-900 dark:text-white font-outfit">{info.value}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="p-10 rounded-[3rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl relative backdrop-blur-md"
        >
          <div className="absolute -top-10 -right-10 rtl:right-auto rtl:-left-10 w-40 h-40 bg-blue-600/10 blur-3xl rounded-full" />
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2 rtl:text-right">
                <label className="text-sm font-bold text-slate-400 uppercase tracking-widest">{t('form.name')}</label>
                <input name="name" type="text" required placeholder={t('form.placeholder_name')} className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-2xl focus:outline-none focus:border-blue-600 transition-colors" />
              </div>
              <div className="space-y-2 rtl:text-right">
                <label className="text-sm font-bold text-slate-400 uppercase tracking-widest">{t('form.email')}</label>
                <input name="email" type="email" required placeholder="email@example.com" className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-2xl focus:outline-none focus:border-blue-600 transition-colors" />
              </div>
            </div>
            <div className="space-y-2 rtl:text-right">
              <label className="text-sm font-bold text-slate-400 uppercase tracking-widest">{t('form.subject')}</label>
              <input name="subject" type="text" required placeholder={t('form.subject')} className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-2xl focus:outline-none focus:border-blue-600 transition-colors" />
            </div>
            <div className="space-y-2 rtl:text-right">
              <label className="text-sm font-bold text-slate-400 uppercase tracking-widest">{t('form.message')}</label>
              <textarea name="message" rows={6} required placeholder={t('form.placeholder_msg')} className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-2xl focus:outline-none focus:border-blue-600 transition-colors resize-none"></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-5 bg-blue-600 text-white rounded-[2rem] font-bold text-lg flex items-center justify-center space-x-3 rtl:space-x-reverse hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed group overflow-hidden relative"
            >
              <span className="relative z-10 flex items-center space-x-3 rtl:space-x-reverse">
                <span>{isSubmitting ? t('form.sending') : t('form.send')}</span>
                <Send size={20} className={isSubmitting ? 'animate-pulse' : 'group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform'} />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </button>

            <div className="text-center">
              {submitStatus === 'success' && (
                <p className="text-green-600 font-bold animate-in fade-in slide-in-from-top-1">
                  {t('form.success')}
                </p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-600 font-bold animate-in fade-in slide-in-from-top-1">
                  {t('form.error')}
                </p>
              )}
              {submitStatus === 'invalid-email' && (
                <p className="text-orange-500 font-bold animate-in fade-in slide-in-from-top-1">
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
    <footer className="py-20 border-t border-slate-200 dark:border-slate-800 px-6 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0">
        <div className="flex flex-col items-center md:items-start space-y-4">
          <a href="#" className="text-2xl font-bold font-outfit uppercase tracking-tighter">
            RASIK<span className="text-blue-600"> NIZAM</span>
          </a>
          <p className="text-slate-500 font-medium text-center md:text-left max-w-xs">
            {t('footer_desc')}
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end space-y-8">
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <a href="https://github.com/rasikbinibrahim" target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:text-blue-600 transition-all shadow-sm"><Github size={24} /></a>
            <a href="https://linkedin.com/in/rasikbinibrahim" target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:text-blue-600 transition-all shadow-sm"><Linkedin size={24} /></a>
            <a href="/assets/project/Rasik_Nizam_Senior_Frontend_Engineer_Resume.pdf" download="Rasik_Nizam_Senior_Frontend_Engineer_Resume.pdf" className="px-8 py-4 bg-slate-950 text-white dark:bg-white dark:text-slate-950 rounded-2xl font-bold flex items-center space-x-2 rtl:space-x-reverse shadow-lg group hover:scale-105 transition-all">
              <Download size={20} />
              <span>{t('resume')}</span>
            </a>
          </div>
          <p className="text-sm font-mono text-slate-400">
            © 2026 Rasik Nizam. {i18n.language === 'ar' ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
