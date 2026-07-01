'use client';

import { motion } from 'framer-motion';
import {
  FiShoppingBag, FiArrowUpRight, FiGithub, FiMap, FiCode,
} from 'react-icons/fi';
import {
  SiThreedotjs, SiMapbox, SiDjango, SiPytorch,
  SiPostgresql, SiGoogle,
} from 'react-icons/si';

const projects = [
  {
    name: 'FootwearFrenzy',
    type: 'E-Commerce Website',
    tech: ['HTML', 'CSS', 'PHP', 'MySQL'],
    description:
      'Built a full-featured e-commerce web application with an administrator dashboard for managing products and orders.',
    features: ['Responsive UI', 'Backend logic with DB integration', 'Product/Order management'],
    icon: <FiCode />,
    gradient: 'from-emerald-500/10 to-teal-500/5',
    accent: 'border-emerald-500/30',
    badge: 'emerald',
  },
  {
    name: 'Restaurant Website',
    type: 'Full-stack MERN Application',
    tech: ['React', 'Node', 'Express', 'MongoDB'],
    description:
      'Created a dynamic restaurant web application featuring a modern UI and complete backend functionality.',
    features: ['Efficient data handling', 'RESTful API integration', 'Modern responsive UI'],
    icon: <FiShoppingBag />,
    gradient: 'from-blue-500/10 to-sky-500/5',
    accent: 'border-blue-500/30',
    badge: 'blue',
  },
  {
    name: 'LandLens',
    type: 'AI-Powered GIS & Floor Plan Generation Platform',
    tech: [
      'React', 'Tailwind CSS', 'Django REST Framework',
      'PostgreSQL', 'PostGIS', 'PyTorch',
      'GeoDjango', 'Mapbox GL JS', 'Google Gemini', 'Three.js',
    ],
    description:
      'Built a full-stack GIS-enabled architectural planning platform that extends Graph2Plan with a custom Python post-processing engine, automated floor plan generation, 3D model visualization, and AI-powered spatial analysis.',
    features: [
      'GIS-based land boundary selection',
      'MATLAB-independent Graph2Plan integration',
      'SVG floor plan generation',
      'Interactive 3D building visualization',
      'Natural language map interaction using Gemini AI',
      'Spatial search, routing, and proximity analysis',
      'Secure project and user management system',
    ],
    icon: <FiMap />,
    gradient: 'from-indigo-500/15 to-purple-500/10',
    accent: 'border-indigo-500/40',
    badge: 'indigo',
    featured: true,
  },
];

const techIconMap = {
  'Three.js': <SiThreedotjs />,
  'Mapbox GL JS': <SiMapbox />,
  'Django REST Framework': <SiDjango />,
  'PyTorch': <SiPytorch />,
  'PostgreSQL': <SiPostgresql />,
  'Google Gemini': <SiGoogle />,
};

const badgeColors = {
  emerald: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/25',
  blue:    'bg-blue-500/15 text-blue-300 border-blue-500/25',
  indigo:  'bg-indigo-500/15 text-indigo-300 border-indigo-500/25',
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
};
const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80 } },
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-[5%] max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-14"
      >
        <p className="eyebrow"><FiShoppingBag /> Portfolio</p>
        <h2 className="section-title text-slate-100">Featured Projects</h2>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
      >
        {projects.map((project) => (
          <motion.article
            key={project.name}
            variants={cardVariant}
            whileHover={{ y: -8 }}
            className={`relative flex flex-col gap-5 rounded-2xl border p-6 bg-gradient-to-br ${project.gradient} ${project.accent} bg-slate-900/70 backdrop-blur-sm overflow-hidden transition-shadow duration-300 hover:shadow-xl hover:shadow-indigo-950/50
              ${project.featured ? 'md:col-span-2 xl:col-span-1' : ''}`}
          >
            {/* Shimmer top bar for featured */}
            {project.featured && (
              <div className="absolute top-0 left-0 right-0 h-0.5 shimmer-border" />
            )}

            {/* Icon + type */}
            <div className="flex items-start gap-3">
              <div className={`text-xl p-3 rounded-xl ${badgeColors[project.badge]}`}>
                {project.icon}
              </div>
              <div>
                <p className={`text-xs font-semibold uppercase tracking-wider ${badgeColors[project.badge].split(' ')[1]}`}>
                  {project.type}
                </p>
                <h3 className="text-xl font-bold text-slate-100 mt-0.5">{project.name}</h3>
              </div>
            </div>

            {/* Description */}
            <p className="text-slate-400 text-sm leading-relaxed">{project.description}</p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full border ${badgeColors[project.badge]}`}
                >
                  {techIconMap[t] && <span className="text-xs">{techIconMap[t]}</span>}
                  {t}
                </span>
              ))}
            </div>

            {/* Features */}
            <ul className="space-y-1 mt-auto">
              {project.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-xs text-slate-400">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            {/* Links */}
            <div className="flex gap-4 pt-2 border-t border-slate-800/60">
              <a href="#" className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-indigo-400 transition-colors">
                <FiArrowUpRight /> Live Demo
              </a>
              <a href="#" className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-indigo-400 transition-colors">
                <FiGithub /> Source Code
              </a>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
