'use client';

import { motion } from 'framer-motion';
import {
  FiCode, FiServer, FiDatabase, FiLayout,
} from 'react-icons/fi';
import {
  SiReact, SiNodedotjs, SiExpress, SiMongodb,
  SiMysql, SiPhp, SiJavascript, SiTailwindcss,
} from 'react-icons/si';

const skills = [
  { name: 'React.js',      icon: <SiReact />,       category: 'Frontend',   color: 'text-cyan-400',   bg: 'bg-cyan-500/10',   border: 'border-cyan-500/20' },
  { name: 'Tailwind CSS',  icon: <SiTailwindcss />, category: 'Frontend',   color: 'text-sky-400',    bg: 'bg-sky-500/10',    border: 'border-sky-500/20' },
  { name: 'Next.js',       icon: <FiLayout />,      category: 'Frontend',   color: 'text-slate-300',  bg: 'bg-slate-500/10',  border: 'border-slate-500/20' },
  { name: 'Node.js',       icon: <SiNodedotjs />,   category: 'Backend',    color: 'text-green-400',  bg: 'bg-green-500/10',  border: 'border-green-500/20' },
  { name: 'Express.js',    icon: <SiExpress />,     category: 'Backend',    color: 'text-slate-300',  bg: 'bg-slate-500/10',  border: 'border-slate-500/20' },
  { name: 'PHP',           icon: <SiPhp />,         category: 'Backend',    color: 'text-violet-400', bg: 'bg-violet-500/10', border: 'border-violet-500/20' },
  { name: 'MongoDB',       icon: <SiMongodb />,     category: 'Database',   color: 'text-emerald-400',bg: 'bg-emerald-500/10',border: 'border-emerald-500/20' },
  { name: 'MySQL',         icon: <SiMysql />,       category: 'Database',   color: 'text-orange-400', bg: 'bg-orange-500/10', border: 'border-orange-500/20' },
  { name: 'JavaScript',    icon: <SiJavascript />,  category: 'Languages',  color: 'text-yellow-400', bg: 'bg-yellow-500/10', border: 'border-yellow-500/20' },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, scale: 0.85, y: 16 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-[5%] max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-14"
      >
        <p className="eyebrow"><FiCode /> My Toolkit</p>
        <h2 className="section-title text-slate-100">Technical Expertise</h2>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            variants={item}
            whileHover={{ y: -6, scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className={`card flex flex-col items-center gap-3 py-6 bg-slate-900/60 border ${skill.border} hover:border-indigo-500/50 cursor-default`}
          >
            <div className={`text-3xl ${skill.color} p-3 rounded-xl ${skill.bg}`}>
              {skill.icon}
            </div>
            <div className="text-center">
              <p className="font-semibold text-sm text-slate-200">{skill.name}</p>
              <p className="text-xs text-slate-500 mt-0.5">{skill.category}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
