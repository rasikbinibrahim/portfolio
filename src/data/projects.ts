export interface Project {
  id: string;
  title: string;
  titleAr: string;
  subtitle: string;
  subtitleAr: string;
  overview: string;
  overviewAr: string;
  role: string[];
  roleAr: string[];
  features: string[];
  featuresAr: string[];
  techStack: string[];
  impact: string[];
  impactAr: string[];
  challenges?: string;
  challengesAr?: string;
  optimizations?: string;
  optimizationsAr?: string;
  image: string;
  pdf?: string;
  category: 'Web' | 'Mobile' | 'Industrial';
  star?: boolean;
}

export const projects: Project[] = [
  {
    id: 'petrus-connect-2',
    title: "Petrus Connect 2.0 ⭐",
    titleAr: "بيتروس كونيكت 2.0 ⭐",
    subtitle: "Enterprise Manufacturing Control Platform",
    subtitleAr: "منصة تحكم للمؤسسات الصناعية",
    overview: "Architected and delivered a large-scale enterprise manufacturing platform enabling real-time monitoring, operational control, and analytics across multi-plant environments.",
    overviewAr: "تم تصميم وتنفيذ منصة تصنيع كبرى للمؤسسات تتيح المراقبة الفورية والتحكم التشغيلي والتحليلات عبر بيئات متعددة المصانع.",
    role: [
      "Led frontend architecture using React.js & TypeScript",
      "Designed and implemented Control Tower dashboards (OEE, Energy, Production)",
      "Engineered enterprise-grade RBAC system with 150+ permissions",
      "Built scalable, modular UI component ecosystem",
      "Integrated real-time data pipelines (WebSocket)"
    ],
    roleAr: [
      "قيادة هندسة الواجهة الأمامية باستخدام React.js و TypeScript",
      "تصميم وتنفيذ لوحات تحكم Control Tower (OEE، الطاقة، الإنتاج)",
      "هندسة نظام RBAC للمؤسسات مع أكثر من 150 صلاحية",
      "بناء بيئة مكونات واجهة مستخدم قابلة للتوسع ونمطية",
      "دمج تدفقات البيانات في الوقت الفعلي (WebSocket)"
    ],
    features: [
      "Multi-level RBAC & access governance",
      "End-to-End Work Order lifecycle management",
      "Industrial Engineering & Technician portals",
      "Quality Inspection (Stage & First-Part) systems",
      "Maintenance, Breakdown & Spare tracking",
      "Energy & Sustainability dashboards",
      "Real-time alerts & rule-based notifications"
    ],
    featuresAr: [
      "نظام RBAC متعدد المستويات وحوكمة الوصول",
      "إدارة دورة حياة أمر العمل الشاملة",
      "بوابات للهندسة الصناعية والفنيين",
      "أنظمة فحص الجودة (المرحلي والجزء الأول)",
      "تتبع الصيانة والأعطال وقطع الغيار",
      "لوحات تحكم للطاقة والاستدامة",
      "تنبيهات فورية وإشعارات قائمة على القواعد"
    ],
    techStack: [
      "React.js", "TypeScript", "Material UI (MUI)", "Redux Toolkit", 
      "React Flow", "React Beautiful DND", "React Big Calendar", 
      "jsPDF", "XLSX", "ApexCharts", "ECharts"
    ],
    impact: [
      "Improved operational visibility across plants",
      "Achieved 30% performance improvement in dashboards",
      "Enabled real-time decision-making at scale"
    ],
    impactAr: [
      "تحسين الرؤية التشغيلية عبر المصانع",
      "تحقيق تحسن بنسبة 30% في أداء لوحات التحكم",
      "تمكين اتخاذ القرار في الوقت الفعلي على نطاق واسع"
    ],
    image: "/assets/project/petrus-connect-2.png",
    pdf: "/assets/project/petrus-connect-2.pdf",
    category: 'Industrial',
    star: true
  },
  {
    id: 'havells-control-tower',
    title: "Havells Control Tower ⭐",
    titleAr: "هافيلز كونترول تاور ⭐",
    subtitle: "Real-Time Energy & Production Intelligence",
    subtitleAr: "ذكاء الطاقة والإنتاج في الوقت الفعلي",
    overview: "Designed and developed enterprise control tower dashboards for monitoring energy consumption, production efficiency, and plant-level KPIs.",
    overviewAr: "تصميم وتطوير لوحات تحكم Control Tower للمؤسسات لمراقبة استهلاك الطاقة وكفاءة الإنتاج ومؤشرات الأداء الرئيسية على مستوى المصنع.",
    role: [
      "Built high-performance data visualization dashboards",
      "Designed drill-down analytics and filtering systems",
      "Implemented real-time data updates",
      "Delivered executive-level monitoring interfaces"
    ],
    roleAr: [
      "بناء لوحات تحكم عالية الأداء لتصور البيانات",
      "تصميم أنظمة التحليلات والتصفية التفصيلية",
      "تنفيذ تحديثات البيانات في الوقت الفعلي",
      "تقديم واجهات مراقبة على مستوى الإدارة التنفيذية"
    ],
    features: [
      "Plant Head & Cluster dashboards",
      "ESG, Safety, Cost & Quality monitoring",
      "Energy & Maintenance analytics",
      "Alerts & escalation workflows",
      "MIS reporting & KPI tracking"
    ],
    featuresAr: [
      "لوحات تحكم لمدير المصنع والمجموعة",
      "مراقبة البيئة والسلامة والتكلفة والجودة (ESG)",
      "تحليلات الطاقة والصيانة",
      "سير عمل التنبيهات والتصعيد",
      "تقارير MIS وتتبع مؤشرات الأداء الرئيسية"
    ],
    techStack: [
      "React.js", "Material UI (MUI)", "Redux Toolkit", "AWS Amplify", 
      "ECharts", "Recharts", "Axios", "Dayjs"
    ],
    impact: [
      "Centralized enterprise monitoring",
      "Improved decision-making speed and accuracy"
    ],
    impactAr: [
      "مركزية مراقبة المؤسسة",
      "تحسين سرعة ودقة اتخاذ القرار"
    ],
    image: "/assets/project/havells-control-tower.png",
    pdf: "/assets/project/havells-control-tower.pdf",
    category: 'Industrial',
    star: true
  },
  {
    id: 'hmi-dashboard',
    title: "HMI Dashboard System ⭐",
    titleAr: "نظام لوحة تحكم HMI ⭐",
    subtitle: "Industrial Human-Machine Interface",
    subtitleAr: "واجهة الإنسان والآلة الصناعية",
    overview: "Developed real-time HMI (Human-Machine Interface) dashboards for shopfloor operations, enabling machine-level monitoring, control, and operator interaction.",
    overviewAr: "تطوير لوحات تحكم HMI في الوقت الفعلي لعمليات ورش العمل، مما يتيح المراقبة والتحكم على مستوى الماكينة وتفاعل المشغل.",
    role: [
      "Designed low-latency machine control UI",
      "Built real-time visualization using MQTT streams",
      "Developed operator-centric workflows and UI controls",
      "Optimized UI for high-frequency industrial data"
    ],
    roleAr: [
      "تصميم واجهة مستخدم للتحكم في الماكينة بذاكرة وصول عشوائي منخفضة",
      "بناء تصور في الوقت الفعلي باستخدام تدفقات MQTT",
      "تطوير سير عمل وضوابط واجهة مستخدم تتمحور حول المشغل",
      "تحسين واجهة المستخدم للبيانات الصناعية عالية التردد"
    ],
    features: [
      "Machine setup & operation lifecycle tracking",
      "Multi-pallet & multi-job execution",
      "Real-time part count & serial tracking",
      "Downtime & rejection workflows",
      "Digital inspection & workstation dashboards"
    ],
    featuresAr: [
      "إعداد الماكينة وتتبع دورة حياة العملية",
      "تنفيذ متعدد المنصات ومتعدد المهام",
      "تتبع عدد الأجزاء والأرقام التسلسلية في الوقت الفعلي",
      "سير عمل التوقف عن العمل والرفض",
      "لوحات تحكم للفحص الرقمي ومحطات العمل"
    ],
    techStack: [
      "React.js", "TypeScript", "Redux Toolkit", "MQTT Protocol", 
      "Material UI (MUI)", "i18next Localization", "Math.js Engine"
    ],
    impact: [
      "Improved operator efficiency",
      "Enabled real-time shopfloor decision-making"
    ],
    impactAr: [
      "تحسين كفاءة المشغل",
      "تمكين اتخاذ القرار في ورشة العمل في الوقت الفعلي"
    ],
    image: "/assets/project/hmi-dashboard.png",
    pdf: "/assets/project/hmi-dashboard.pdf",
    category: 'Industrial',
    star: true
  },
  {
    id: 'low-code-platform',
    title: "Low-Code Platform ⭐",
    titleAr: "منصة التطوير منخفضة الأكواد ⭐",
    subtitle: "Drag-and-Drop UI Builder & Workflow Engine",
    subtitleAr: "منشئ واجهة مستخدم بالسحب والإفلات ومحرك سير العمل",
    overview: "Engineered a low-code platform frontend system enabling rapid application development through drag-and-drop UI, schema-driven rendering, and automated code generation.",
    overviewAr: "هندسة نظام الواجهة الأمامية لمنصة منخفضة الأكواد تتيح تطوير التطبيقات السريع من خلال واجهة سحب وإفلات، وتصيير قائم على المخطط، وتوليد الكود الآلي.",
    role: [
      "Built visual drag-and-drop UI builder",
      "Designed schema-driven rendering engine",
      "Developed cross-platform code generation (React + React Native)",
      "Published reusable private npm component libraries"
    ],
    roleAr: [
      "بناء منشئ واجهة مستخدم مرئي بالسحب والإفلات",
      "تصميم محرك تصيير قائم على المخطط",
      "تطوير توليد الكود عبر المنصات (React و React Native)",
      "نشر مكتبات مكونات npm خاصة وقابلة لإعادة الاستخدام"
    ],
    features: [
      "Visual UI builder (forms, dashboards, workflows)",
      "Dynamic form generation",
      "Workflow orchestration & approvals",
      "Cross-platform application generation"
    ],
    featuresAr: [
      "منشئ واجهة مستخدم مرئي (نماذج، لوحات تحكم، سير عمل)",
      "توليد نماذج ديناميكي",
      "تنسيق سير العمل والموافقات",
      "توليد تطبيقات عبر المنصات"
    ],
    techStack: [
      "React.js", "React Native", "TypeScript", "Redux", "Context API"
    ],
    impact: [
      "Reduced development time significantly",
      "Enabled non-technical users to build applications",
      "Accelerated enterprise delivery cycles"
    ],
    impactAr: [
      "تقليل وقت التطوير بشكل كبير",
      "تمكين المستخدمين غير التقنيين من بناء التطبيقات",
      "تسريع دورات تسليم المؤسسات"
    ],
    image: "/assets/project/low-code-platform.png",
    pdf: "/assets/project/low-code-platform.pdf",
    category: 'Web',
    star: true
  },
  {
    id: 'abfl-banking',
    title: "ABFL Banking Application",
    titleAr: "تطبيق بنك ABFL",
    subtitle: "Secure Mobile Fintech Platform",
    subtitleAr: "منصة تقنية مالية آمنة للجوال",
    overview: "Developed a secure, high-performance mobile banking frontend with compliance-driven architecture and seamless financial workflows.",
    overviewAr: "تطوير واجهة أمامية مصرفية آمنة وعالية الأداء للجوال مع هندسة مدفوعة بالامتثال وسير عمل مالي سلس.",
    role: [
      "Designed OAuth 2.0 & JWT-based authentication flows",
      "Built secure financial transaction interfaces",
      "Integrated biometric authentication (FaceID / Fingerprint)",
      "Optimized low-latency transaction experience"
    ],
    roleAr: [
      "تصميم تدفقات المصادقة القائمة على OAuth 2.0 و JWT",
      "بناء واجهات معاملات مالية آمنة",
      "دمج المصادقة البيومترية (FaceID / بصمة الإصبع)",
      "تحسين تجربة المعاملات بزمن وصول منخفض"
    ],
    features: [
      "Multi-factor authentication",
      "Real-time transaction tracking",
      "Loan & account management",
      "Compliance-ready UI architecture"
    ],
    featuresAr: [
      "مصادقة متعددة العوامل",
      "تتبع المعاملات في الوقت الفعلي",
      "إدارة القروض والحسابات",
      "هندسة واجهة مستخدم جاهزة للامتثال"
    ],
    techStack: [
      "React Native", "TypeScript", "Redux", "OAuth 2.0"
    ],
    impact: [
      "Delivered secure and stable banking experience",
      "Achieved high reliability (99.9% stability)"
    ],
    impactAr: [
      "تقديم تجربة مصرفية آمنة ومستقرة",
      "تحقيق موثوقية عالية (استقرار بنسبة 99.9٪)"
    ],
    image: "/assets/project/abfl-banking.png",
    pdf: "/assets/project/abfl-banking.pdf",
    category: 'Mobile'
  },
  {
    id: 'clinang-hcp',
    title: "ClinaNG HCP",
    titleAr: "ClinaNG HCP",
    subtitle: "Healthcare Provider Platform",
    subtitleAr: "منصة مقدم الرعاية الصحية",
    overview: "Developed a doctor-focused mobile platform for managing consultations, EMR, and prescriptions in a real-time healthcare environment.",
    overviewAr: "تطوير منصة جوال تركز على الأطباء لإدارة الاستشارات والسجلات الطبية الإلكترونية والوصفات الطبية في بيئة رعاية صحية في الوقت الفعلي.",
    role: [
      "Built doctor dashboard & consultation workflows",
      "Designed EMR navigation system",
      "Implemented e-prescription UI flows",
      "Optimized offline & sync behavior"
    ],
    roleAr: [
      "بناء لوحة تحكم الطبيب وسير عمل الاستشارات",
      "تصميم نظام تصفح السجلات الطبية الإلكترونية",
      "تنفيذ تدفقات واجهة مستخدم الوصفات الطبية الإلكترونية",
      "تحسين سلوك العمل دون اتصال والمزامنة"
    ],
    features: [
      "Teleconsultation workflows",
      "Patient record management",
      "Digital prescriptions",
      "Appointment scheduling"
    ],
    featuresAr: [
      "سير عمل الاستشارات عن بعد",
      "إدارة سجلات المرضى",
      "الوصفات الطبية الرقمية",
      "جدولة المواعيد"
    ],
    techStack: [
      "React Native", "TypeScript", "Redux", "WebRTC"
    ],
    impact: [
      "Reduced doctor workload by 40%",
      "Streamlined clinical workflows"
    ],
    impactAr: [
      "تقليل عبء عمل الطبيب بنسبة 40٪",
      "تبسيط سير العمل السريري"
    ],
    image: "/assets/project/clinang-hcp.png",
    pdf: "/assets/project/clinang-hcp.pdf",
    category: 'Mobile'
  },
  {
    id: 'clinang-patient',
    title: "ClinaNG Patient App",
    titleAr: "تطبيق ClinaNG للمرضى",
    subtitle: "Digital Healthcare Application",
    subtitleAr: "تطبيق الرعاية الصحية الرقمية",
    overview: "Developed a patient-centric healthcare mobile application enabling digital consultations, medical record access, and health tracking.",
    overviewAr: "تطوير تطبيق جوال للرعاية الصحية يركز على المريض يتيح الاستشارات الرقمية والوصول إلى السجلات الطبية وتتبع الصحة.",
    role: [
      "Built patient onboarding & UX flows",
      "Developed medical record & lab UI",
      "Integrated payments & notifications",
      "Designed health tracking interfaces"
    ],
    roleAr: [
      "بناء تدفقات انضمام المرضى وتجربة المستخدم",
      "تطوير واجهة مستخدم السجلات الطبية والمختبرات",
      "دمج المدفوعات والإشعارات",
      "تصميم واجهات تتبع الصحة"
    ],
    features: [
      "Appointment booking",
      "Medical record access",
      "Teleconsultation",
      "Health tracking"
    ],
    featuresAr: [
      "حجز المواعيد",
      "الوصول إلى السجلات الطبية",
      "الاستشارة عن بعد",
      "تتبع الصحة"
    ],
    techStack: [
      "React Native", "TypeScript", "Redux"
    ],
    impact: [
      "Enabled 24/7 digital healthcare access",
      "Achieved high user satisfaction (95%+)"
    ],
    impactAr: [
      "تمكين الوصول إلى الرعاية الصحية الرقمية على مدار الساعة طوال أيام الأسبوع",
      "تحقيق رضا مستخدم عالٍ (أكثر من 95٪)"
    ],
    image: "/assets/project/clinang-patient.png",
    pdf: "/assets/project/clinang-patient.pdf",
    category: 'Mobile'
  }
];
