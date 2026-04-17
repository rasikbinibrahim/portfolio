import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation files
const resources = {
  en: {
    translation: {
      "hello": "Hi, I'm",
      "status": "Open for Opportunities",
      "role": "Senior Software Engineer",
      "p1": "I build scalable, real-time enterprise applications using",
      "p2": "React, React Native & TypeScript",
      "p3": "Specialized in Control Tower Dashboards, RBAC Systems & High-performance UI.",
      "view_projects": "View Projects",
      "resume": "Resume",
      "about": "About Me",
      "projects": "Selected Works",
      "skills": "Skills",
      "contact": "Contact",
      "nav": {
        "home": "Home",
        "about": "About",
        "projects": "Projects",
        "skills": "Skills",
        "contact": "Contact"
      },
      "codeBlock": {
        "name": "Rasik Nizam",
        "role": "Senior Software Engineer",
        "experience": "5+ Years",
        "focus": "Enterprise Systems",
        "returnMsg": "Building the future of UI"
      },
      "about_title": "Engineering Excellence at Scale",
      "about_p1": "I am a Senior Frontend Engineer with 5+ years of experience building enterprise-grade applications across manufacturing, banking, healthcare, and low-code platforms.",
      "about_p2": "I specialize in designing scalable UI architectures, real-time dashboards, and secure authentication systems. My work focuses on performance, usability, and delivering business-critical solutions.",
      "highlights": [
        { "title": "5+ Years Experience", "desc": "Building enterprise-grade applications." },
        { "title": "Enterprise Expert", "desc": "Specializing in complex UI architectures." },
        { "title": "Real-time Systems", "desc": "Experience with WebSocket, MQTT & DASHBOARDS." },
        { "title": "Secure Architecture", "desc": "Implementing RBAC & OAuth systems." }
      ],
      "contact_title": "Let's build something amazing together.",
      "contact_desc": "Have a complex enterprise project or just want to chat about tech? Feel free to reach out.",
      "contact_info": {
        "email": "Email",
        "phone": "Phone",
        "location": "Location",
        "loc_val": "Coimbatore, Tamil Nadu"
      },
      "form": {
        "name": "Name",
        "email": "Email",
        "subject": "Subject",
        "message": "Message",
        "placeholder_name": "John Doe",
        "placeholder_msg": "Tell me about your project...",
        "send": "Send Message",
        "sending": "Sending...",
        "success": "Message sent successfully! I'll get back to you soon.",
        "error": "Something went wrong. Please try again.",
        "invalid": "Please enter a valid email address."
      },
      "footer_desc": "Senior Software Engineer specializing in Enterprise UI Architectures.",
      "skills_title": "Tech Stack & Expertise",
      "skills_desc": "Leveraging modern tools to build high-performance, secure, and user-centric digital experiences.",
      "skill_cats": {
        "frontend": "Frontend Development",
        "backend": "Backend & Real-time",
        "cloud": "Cloud & Infrastructure"
      }
    }
  },
  ar: {
    translation: {
      "hello": "مرحباً، أنا",
      "status": "متاح للفرص",
      "role": "مهندس برمجيات أول",
      "p1": "أقوم ببناء تطبيقات برمجية قابلة للتوسع وفي الوقت الفعلي باستخدام",
      "p2": "React و React Native و TypeScript",
      "p3": "متخصص في لوحات تحكم Control Tower وأنظمة RBAC وواجهات مستخدم عالية الأداء.",
      "view_projects": "مشاهدة المشاريع",
      "resume": "السيرة الذاتية",
      "about": "حول",
      "projects": "أعمال مختارة",
      "skills": "المهارات",
      "contact": "اتصل بي",
      "nav": {
        "home": "الرئيسية",
        "about": "حول",
        "projects": "المشاريع",
        "skills": "المهارات",
        "contact": "اتصل بي"
      },
      "codeBlock": {
        "name": "راسك نظام",
        "role": "مهندس برمجيات أول",
        "experience": "أكثر من 5 سنوات",
        "focus": "أنظمة المؤسسات",
        "returnMsg": "بناء مستقبل واجهات المستخدم"
      },
      "about_title": "التميز الهندسي على نطاق واسع",
      "about_p1": "أنا مهندس واجهة أمامية أول أتمتع بخبرة تزيد عن 5 سنوات في بناء تطبيقات لمستوى المؤسسات عبر مجالات التصنيع والخدمات المصرفية والرعاية الصحية ومنصات التطوير منخفضة الأكواد.",
      "about_p2": "أنا متخصص في تصميم بنى واجهات مستخدم قابلة للتوسع، ولوحات تحكم في الوقت الفعلي، وأنظمة مصادقة آمنة. يركز عملي على الأداء وسهولة الاستخدام وتقديم حلول بالغة الأهمية للأعمال.",
      "highlights": [
        { "title": "خبرة 5+ سنوات", "desc": "بناء تطبيقات لمستوى المؤسسات." },
        { "title": "خبير أنظمة مؤسسات", "desc": "متخصص في بنى واجهات المستخدم المعقدة." },
        { "title": "أنظمة الوقت الفعلي", "desc": "خبرة في WebSocket و MQTT ولوحات التحكم." },
        { "title": "بنية آمنة", "desc": "تنفيذ أنظمة RBAC و OAuth." }
      ],
      "contact_title": "لنقم ببناء شيء مذهل معاً.",
      "contact_desc": "هل لديك مشروع مؤسسي معقد أو ترغب فقط في الدردشة حول التكنولوجيا؟ لا تتردد في الاتصال بي.",
      "contact_info": {
        "email": "البريد الإلكتروني",
        "phone": "الهاتف",
        "location": "الموقع",
        "loc_val": "كويمباتور، تاميل نادو"
      },
      "form": {
        "name": "الاسم",
        "email": "البريد الإلكتروني",
        "subject": "الموضوع",
        "message": "الرسالة",
        "placeholder_name": "جون دو",
        "placeholder_msg": "أخبرني عن مشروعك...",
        "send": "إرسال الرسالة",
        "sending": "جاري الإرسال...",
        "success": "تم إرسال الرسالة بنجاح! سأرد عليك قريبًا.",
        "error": "حدث خطأ ما. يرجى المحاولة مرة أخرى.",
        "invalid": "يرجى إدخال عنوان بريد إلكتروني صالح."
      },
      "footer_desc": "مهندس برمجيات أول متخصص في بنى واجهات المستخدم للمؤسسات.",
      "skills_title": "التقنيات والخبرات",
      "skills_desc": "الاستفادة من الأدوات الحديثة لبناء تجارب رقمية عالية الأداء وآمنة وتتمحور حول المستخدم.",
      "skill_cats": {
        "frontend": "تطوير الواجهة الأمامية",
        "backend": "الخلفية والوقت الفعلي",
        "cloud": "السحابة والبنية التحتية"
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
