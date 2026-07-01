'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiArrowUpRight, FiGithub } from 'react-icons/fi';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 90 } },
};

export default function 
HeroSection() {
  return (
    <section className="min-h-screen flex items-center pt-24 pb-16 px-[5%] max-w-7xl mx-auto">
      <div className="w-full grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 items-center">

        {/* ── Text Side ── */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-col"
        >
          <motion.p
            variants={item}
            className="eyebrow"
          >
            <span className="inline-block w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            Available for opportunities
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-3 mb-2">
            <span className="text-2xl md:text-3xl font-semibold text-slate-400">Hello, I&apos;m</span>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-5xl md:text-7xl font-bold leading-none mb-4"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400">
              Saifullah
            </span>
          </motion.h1>

          <motion.h2
            variants={item}
            className="text-xl md:text-2xl font-medium text-slate-400 mb-6"
          >
            Full‑Stack Developer
          </motion.h2>

          <motion.p
            variants={item}
            className="text-slate-400 text-base md:text-lg leading-relaxed max-w-lg mb-8"
          >
            I am a passionate developer dedicated to building high-performance and scalable
            web applications. With expertise in the MERN stack and PHP/MySQL, I focus on
            creating clean, efficient code and exceptional user experiences.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary text-sm">
              View My Work <FiArrowUpRight />
            </a>
            <a
              href="#contact"
              className="btn-ghost text-sm border-slate-700 text-slate-300 hover:border-indigo-500 hover:text-indigo-400"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div variants={item} className="flex gap-8 mt-10">
            {[
              { label: 'Projects Built', value: '5+' },
              { label: 'Years Learning', value: '1+' },
              { label: 'Tech Stack', value: 'MERN' },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-2xl font-bold text-indigo-400">{s.value}</p>
                <p className="text-xs text-slate-500 mt-0.5">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Visual Side ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative flex justify-center items-center order-first lg:order-last"
        >
          {/* Glow blob */}
          <div className="absolute w-80 h-80 rounded-full bg-indigo-600/20 blur-[80px] pointer-events-none" />
          <div className="absolute w-60 h-60 rounded-full bg-purple-600/15 blur-[60px] translate-x-12 translate-y-8 pointer-events-none" />

          {/* Photo */}
          <div className="relative z-10">
            <Image
              src="/saif.jpg"
              alt="Muhammad Saifullah"
              width={380}
              height={440}
              priority
              className="hero-img-float rounded-[28px] object-cover shadow-2xl shadow-indigo-950/60 ring-1 ring-indigo-500/20"
            />
            {/* Floating badge */}
            
          </div>
        </motion.div>

      </div>
    </section>
  );
}
