'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 px-[5%] py-4 flex justify-between items-center
        ${scrolled
          ? 'bg-slate-950/80 backdrop-blur-lg border-b border-slate-800'
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
      </div>
    </nav>
  );
}
