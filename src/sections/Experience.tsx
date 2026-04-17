import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const ExperienceItem = ({ company, role, location, duration, description, highlights, color, idx }: any) => (
  <motion.div 
    initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay: idx * 0.2 }}
    viewport={{ once: true }}
    className={`relative flex items-center justify-between mb-16 w-full ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
  >
    {/* Content */}
    <div className={`w-[45%] p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl hover:shadow-2xl transition-all group ${idx % 2 === 0 ? 'text-right' : 'text-left'}`}>
      <div className={`flex items-center space-x-3 mb-4 ${idx % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
        <span className="text-sm font-semibold px-3 py-1 bg-blue-600/10 text-blue-600 rounded-full">{duration}</span>
      </div>
      <h3 className="text-2xl font-bold font-outfit mb-2 group-hover:text-blue-600 transition-colors">{role}</h3>
      <div className={`flex items-center space-x-2 text-slate-500 dark:text-slate-400 mb-6 ${idx % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
        <span className="font-semibold text-slate-800 dark:text-slate-200">{company}</span>
        <MapPin size={14} />
        <span className="text-sm">{location}</span>
      </div>
      <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
        {description}
      </p>
      <ul className={`space-y-2 ${idx % 2 === 0 ? 'flex flex-col items-end' : ''}`}>
        {highlights.map((h: string, i: number) => (
          <li key={i} className="flex items-center text-sm font-medium text-slate-700 dark:text-slate-300">
            <span className={`w-1.5 h-1.5 rounded-full bg-blue-600 mr-2 ${idx % 2 === 0 ? 'order-last ml-2' : ''}`} />
            {h}
          </li>
        ))}
      </ul>
    </div>

    {/* Center Dot */}
    <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center">
      <motion.div 
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className={`w-6 h-6 rounded-full border-4 border-white dark:border-slate-950 shadow-lg ${color}`} 
      />
      <div className="w-0.5 h-32 bg-slate-200 dark:bg-slate-800" />
    </div>

    <div className="w-[45%]" />
  </motion.div>
);

const Experience: React.FC = () => {
  const experiences = [
    {
      company: "Petrus Technologies Pvt. Ltd",
      role: "Senior Software Engineer",
      location: "Coimbatore, India",
      duration: "10 July 2023 - Present",
      description: "Leading the development of industrial Control Tower Dashboards and complex enterprise systems.",
      highlights: [
        "Led Control Tower Dashboard development",
        "Built comprehensive RBAC system",
        "Improved app performance by 30%",
        "Architected AWS cloud deployments"
      ],
      color: "bg-green-500"
    },
    {
      company: "OREOPS Framework Pvt. Ltd",
      role: "Application Developer",
      location: "Erode, India",
      duration: "05 September 2022 - 30 June 2023",
      description: "Contributed to building a robust low-code platform empowering rapid application development.",
      highlights: [
        "Architected Low-code platform UI",
        "Developed dynamic form engine",
        "Built enterprise component library",
        "Optimized drag-and-drop experience"
      ],
      color: "bg-blue-600"
    },
    {
      company: "KGISL",
      role: "Associate Developer",
      location: "Coimbatore, India",
      duration: "23 March 2022 - 26 August 2022",
      description: "Focused on secure banking application interfaces and authentication systems.",
      highlights: [
        "Designed Banking app interfaces",
        "Implemented OAuth 2.0 & JWT security",
        "Managed large-scale data migrations",
        "Ensured banking compliance standards"
      ],
      color: "bg-purple-600"
    },
    {
      company: "Latlon Technologies Pvt Ltd",
      role: "Programmer Analyst",
      location: "Coimbatore, India",
      duration: "14 October 2020 - 04 March 2022",
      description: "Developed healthcare solutions focusing on real-time appointments and e-prescriptions.",
      highlights: [
        "Built Telehealth web application",
        "Real-time appointment scheduling",
        "E-prescription management module",
        "Integrated third-party health APIs"
      ],
      color: "bg-yellow-500"
    }
  ];

  return (
    <section id="experience" className="section-padding py-24">
      <div className="flex flex-col items-center text-center space-y-6 mb-24">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-blue-600 font-bold tracking-widest uppercase text-sm"
        >
          My Journey
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-bold font-outfit"
        >
          Work Experience
        </motion.h2>
      </div>

      <div className="relative max-w-5xl mx-auto py-10 before:absolute before:inset-0 before:left-1/2 before:-translate-x-1/2 before:w-0.5 before:bg-slate-200 before:dark:bg-slate-800">
        {experiences.map((exp, idx) => (
          <ExperienceItem key={idx} {...exp} idx={idx} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
