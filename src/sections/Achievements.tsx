import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, ExternalLink } from 'lucide-react';

const Achievements: React.FC = () => {
  const achievements = [
    {
      title: "Rising Star Award – 2026",
      desc: "Recognized for enterprise platform delivery excellence at Petrus Technologies.",
      date: "Jan 2026",
      icon: <Trophy className="text-yellow-500" />
    }
  ];

  return (
    <section className="section-padding py-24 bg-slate-900 border-y border-slate-800 rounded-[4rem] text-white">
      <div className="flex flex-col items-center text-center space-y-6 mb-16">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-blue-500 font-bold tracking-widest uppercase text-sm"
        >
          Recognition
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-bold font-outfit"
        >
          Awards & Milestones
        </motion.h2>
      </div>

      <div className="max-w-4xl mx-auto">
        {achievements.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.02 }}
            className="p-10 rounded-[2.5rem] bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-10 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
               <Star size={120} />
            </div>
            <div className="p-6 bg-white/5 rounded-3xl border border-white/10">
               {item.icon}
            </div>
            <div className="flex-1 text-center md:text-left space-y-4">
               <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-2 md:space-y-0">
                  <h3 className="text-2xl font-bold font-outfit tracking-tight">{item.title}</h3>
                  <span className="text-blue-500 font-mono text-sm">{item.date}</span>
               </div>
               <p className="text-slate-400 text-lg italic leading-relaxed">
                  "{item.desc}"
               </p>
            </div>
            <div className="p-4 bg-blue-600 rounded-full cursor-pointer hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20">
               <ExternalLink size={20} />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
