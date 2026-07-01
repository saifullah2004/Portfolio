'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiMoon, FiSun, FiCode } from 'react-icons/fi';

export default function Navbar() {
  const [theme, setTheme] = useState('dark');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    document.body.classList.toggle('bg-slate-950', next === 'dark');
    document.body.classList.toggle('text-slate-100', next === 'dark');
    document.body.classList.toggle('bg-slate-50', next === 'light');
    document.body.classList.toggle('text-slate-900', next === 'light');
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 px-[5%] py-4 flex justify-between items-center
        ${scrolled
          ? 'bg-slate-950/80 dark:bg-slate-950/80 backdrop-blur-lg border-b border-slate-800'
          : 'bg-transparent'
        }`}
    >
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-9 h-9 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-sm">
          MS
        </div>
        <span className="font-semibold text-base tracking-tight hidden sm:block text-3xl">Muhammad Saifullah</span>
      </div>

      {/* Links */}
      <div className="flex items-center gap-6 md:gap-8">
        <a href="#projects" className="nav-pill text-sm text-slate-300">Projects</a>
        <a href="#skills" className="nav-pill text-sm text-slate-300">Skills</a>
        <a href="#contact" className="nav-pill text-sm text-slate-300">Contact</a>

        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="w-9 h-9 rounded-lg border border-slate-700 flex items-center justify-center text-slate-300 hover:border-indigo-500 hover:text-indigo-400 transition-all duration-200"
        >
          {theme === 'dark' ? <FiSun size={16} /> : <FiMoon size={16} />}
        </button>
      </div>
    </nav>
  );
}
