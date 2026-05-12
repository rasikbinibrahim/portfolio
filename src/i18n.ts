import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation files
const resources = {
  en: {
    translation: {
      "hello": "Hi, I'm",
      "status": "Senior Frontend Engineer",
      "role": "Senior Frontend Engineer (React.js | React Native)",
      "summary": "Senior Frontend Engineer with 5+ years of experience building high-performance, real-time enterprise applications across manufacturing, fintech, and healthcare domains. Specialized in real-time dashboards, performance optimization (30–60% improvements), and scalable component architectures.",
      "p1": "Senior Frontend Engineer with",
      "p2": "5+ years of experience",
      "p3": "building high-performance, real-time enterprise applications across manufacturing, fintech, and healthcare domains.",
      "view_projects": "View Projects",
      "resume": "Download Resume",
      "contact_me": "Contact Me",
      "about": "About Me",
      "projects": "Case Studies",
      "skills": "Skills",
      "contact": "Contact",
      "nav": {
        "home": "Home",
        "about": "About",
        "skills": "Skills",
        "projects": "Projects",
        "contact": "Contact"
      },
      "codeBlock": {
        "name": "Rasik Nizam M.I",
        "role": "Senior Frontend Engineer",
        "experience": "5+ Years of Professional Experience",
        "focus": "Real-time UI & Scalable Systems",
        "returnMsg": "Built systems handling real-time data across 20+ lines"
      },
      "about_title": "Engineering High-Performance UI Systems",
      "about_p1": "I am a Senior Frontend Engineer with 5+ years of experience building high-performance, real-time enterprise applications across manufacturing, fintech, and healthcare domains. I specialize in data-intensive UI systems, state optimization, and crafting premium, responsive interfaces.",
      "about_p2": "My core achievements include handling real-time industrial data across 20+ production lines (improving operational efficiency by 40%+), building a schema-driven dynamic form engine that reduced development effort by 50%, and publishing robust reusable component libraries across enterprise SaaS platforms.",
      "highlights": [
        { "title": "Real-Time Dashboards", "desc": "Built systems handling live industrial telemetry across 20+ production lines, driving 40%+ operational efficiency." },
        { "title": "Performance Tuning", "desc": "Achieved 30–60% render optimization, reduced API load by 50% via TanStack Query, and cut payloads by 60% with GraphQL." },
        { "title": "Component Architecture", "desc": "Developed reusable component libraries across enterprise applications, reducing UI development effort by up to 30%." },
        { "title": "Dynamic Engines", "desc": "Engineered schema-driven form and workflow engines, accelerating delivery cycles and cutting manual tasks by 50%." }
      ],
      "stats": {
        "title": "Impact & Overview",
        "exp": "5+ Years Experience",
        "exp_sub": "High-performance enterprise development",
        "proj": "20+ Production Lines",
        "proj_sub": "Live industrial data tracking",
        "spec": "30–60% Optimization",
        "spec_sub": "Speedups in render & payload paths",
        "expert": "React/React Native",
        "expert_sub": "Cross-domain expertise (SaaS, Fintech, Health)"
      },
      "contact_title": "Let's build high-performance excellence together.",
      "contact_desc": "Looking for a specialized Senior Frontend Engineer to optimize your application architecture or drive critical product features? Let's connect.",
      "contact_info": {
        "email": "Email",
        "phone": "Phone",
        "whatsapp": "WhatsApp",
        "linkedin": "LinkedIn",
        "github": "GitHub",
        "resume": "Resume Download",
        "location": "Location",
        "loc_val": "Coimbatore, India"
      },
      "form": {
        "name": "Name",
        "email": "Email",
        "subject": "Subject",
        "message": "Message",
        "placeholder_name": "John Doe",
        "placeholder_msg": "Tell me about your application scalability or project goals...",
        "send": "Send Message",
        "sending": "Sending...",
        "success": "Message sent successfully! I will get back to you promptly.",
        "error": "Something went wrong. Please try again.",
        "invalid": "Please enter a valid email address."
      },
      "footer_desc": "Senior Frontend Engineer specialized in real-time dashboards, performance optimization, and scalable design architectures.",
      "skills_title": "Core Technical Expertise",
      "skills_desc": "Comprehensive skills honed over 5+ years building secure, highly optimized enterprise web and mobile applications.",
      "skill_cats": {
        "core": "Core Frameworks & Languages",
        "state": "State Management & Styling",
        "tools": "APIs, Cloud & Tools"
      }
    }
  },
  ar: {
    translation: {
      "hello": "مرحباً، أنا",
      "status": "مهندس واجهات أمامية أول",
      "role": "مهندس واجهات أمامية أول (React.js | React Native)",
      "summary": "مهندس واجهات أمامية أول بخبرة تزيد عن 5 سنوات في بناء تطبيقات مؤسسية عالية الأداء وتعمل في الوقت الفعلي في مجالات التصنيع والتكنولوجيا المالية والرعاية الصحية. متخصص في لوحات التحكم الفورية، وتحسين الأداء (30-60%)، وبنى المكونات القابلة للتوسع.",
      "p1": "مهندس واجهات أمامية أول مع",
      "p2": "خبرة تزيد عن 5 سنوات",
      "p3": "في بناء تطبيقات مؤسسية عالية الأداء وتعمل في الوقت الفعلي في مجالات التصنيع والتكنولوجيا المالية والرعاية الصحية.",
      "view_projects": "عرض المشاريع",
      "resume": "تحميل السيرة الذاتية",
      "contact_me": "اتصل بي",
      "about": "نبذة عني",
      "projects": "دراسات الحالة",
      "skills": "المهارات",
      "contact": "اتصل بي",
      "nav": {
        "home": "الرئيسية",
        "about": "حول",
        "skills": "المهارات",
        "projects": "المشاريع",
        "contact": "اتصل بي"
      },
      "codeBlock": {
        "name": "راسك نظام",
        "role": "مهندس واجهات أمامية أول",
        "experience": "خبرة تزيد عن 5 سنوات",
        "focus": "واجهات الوقت الفعلي والأنظمة القابلة للتوسع",
        "returnMsg": "بناء أنظمة تتعامل مع بيانات الوقت الفعلي عبر أكثر من 20 خط إنتاج"
      },
      "about_title": "هندسة أنظمة واجهات مستخدم عالية الأداء",
      "about_p1": "أنا مهندس واجهات أمامية أول بخبرة تزيد عن 5 سنوات في بناء تطبيقات مؤسسية عالية الأداء وتعمل في الوقت الفعلي في مجالات التصنيع والتكنولوجيا المالية والرعاية الصحية. متخصص في أنظمة واجهات المستخدم كثيفة البيانات، وتحسين الحالة، وتصميم واجهات متطورة ومتجاوبة.",
      "about_p2": "تشمل إنجازاتي الأساسية التعامل مع البيانات الصناعية في الوقت الفعلي عبر أكثر من 20 خط إنتاج (مما أدى إلى تحسين الكفاءة التشغيلية بنسبة 40٪+)، وبناء محرك نماذج ديناميكي قائم على المخطط قلل من جهد التطوير بنسبة 50٪، ونشر مكتبات مكونات قوية وقابلة لإعادة الاستخدام عبر منصات SaaS للمؤسسات.",
      "highlights": [
        { "title": "لوحات تحكم فورية", "desc": "بناء أنظمة للتعامل مع القياس عن بعد الصناعي المباشر عبر أكثر من 20 خط إنتاج، مما أدى إلى كفاءة تشغيلية بنسبة 40٪+." },
        { "title": "تحسين الأداء", "desc": "تحقيق تحسين للتصيير بنسبة 30-60٪، وتقليل حمل API بنسبة 50٪ عبر TanStack Query، وتقليل الحمولات بنسبة 60٪ مع GraphQL." },
        { "title": "بنية المكونات", "desc": "تطوير مكتبات مكونات قابلة لإعادة الاستخدام عبر تطبيقات المؤسسات، مما قلل من جهد تطوير واجهة المستخدم بنسبة تصل إلى 30٪." },
        { "title": "محركات ديناميكية", "desc": "هندسة نماذج ومحركات سير عمل قائمة على المخططات، مما أدى إلى تسريع دورات التسليم وتقليل المهام اليدوية بنسبة 50٪." }
      ],
      "stats": {
        "title": "الأثر والنظرة العامة",
        "exp": "خبرة 5+ سنوات",
        "exp_sub": "تطوير مؤسسي عالي الأداء",
        "proj": "20+ خط إنتاج",
        "proj_sub": "تتبع البيانات الصناعية المباشرة",
        "spec": "تحسين 30–60%",
        "spec_sub": "تسريع في مسارات التصيير والحمولات",
        "expert": "React / React Native",
        "expert_sub": "خبرة متعددة المجالات (SaaS، تقنية مالية، صحة)"
      },
      "contact_title": "لنقم ببناء التميز والأداء العالي معاً.",
      "contact_desc": "هل تبحث عن مهندس واجهات أمامية أول متخصص لتحسين بنية تطبيقك أو قيادة ميزات المنتج الحرجة؟ دعنا نتواصل.",
      "contact_info": {
        "email": "البريد الإلكتروني",
        "phone": "الهاتف",
        "whatsapp": "واتساب",
        "linkedin": "لينكد إن",
        "github": "جيت هاب",
        "resume": "تحميل السيرة الذاتية",
        "location": "الموقع",
        "loc_val": "كويمباتور، الهند"
      },
      "form": {
        "name": "الاسم",
        "email": "البريد الإلكتروني",
        "subject": "الموضوع",
        "message": "الرسالة",
        "placeholder_name": "جون دو",
        "placeholder_msg": "أخبرني عن أهداف قابلية التوسع لتطبيقك أو مشروعك...",
        "send": "إرسال الرسالة",
        "sending": "جاري الإرسال...",
        "success": "تم إرسال الرسالة بنجاح! سأرد عليك في أقرب وقت.",
        "error": "حدث خطأ ما. يرجى المحاولة مرة أخرى.",
        "invalid": "يرجى إدخال عنوان بريد إلكتروني صالح."
      },
      "footer_desc": "مهندس واجهات أمامية أول متخصص في لوحات التحكم الفورية، وتحسين الأداء، وبنى التصميم القابلة للتوسع.",
      "skills_title": "الخبرات التقنية الأساسية",
      "skills_desc": "مهارات شاملة تم صقلها على مدار أكثر من 5 سنوات في بناء تطبيقات ويب وجوال آمنة ومحسنة للغاية للمؤسسات.",
      "skill_cats": {
        "core": "أطر العمل واللغات الأساسية",
        "state": "إدارة الحالة والتصميم",
        "tools": "واجهات برمجة التطبيقات والسحابة والأدوات"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'htmlTag', 'cookie'],
      caches: ['localStorage'],
    }
  });

// Handle RTL
i18n.on('languageChanged', (lng: string) => {
  document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = lng;
});

export default i18n;
