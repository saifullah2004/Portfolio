import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <main>
        <HeroSection />

        {/* Divider */}
        <div className="mx-[5%] h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

        <SkillsSection />

        <div className="mx-[5%] h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

        <ProjectsSection />

        <div className="mx-[5%] h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 px-[5%]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Muhammad Saifullah. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="mailto:msaifullahawan2004@gmail.com"
              className="w-8 h-8 rounded-lg border border-slate-700 flex items-center justify-center text-slate-400 hover:border-indigo-500 hover:text-indigo-400 transition-all"
              aria-label="Email"
            >
              <FiMail size={14} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg border border-slate-700 flex items-center justify-center text-slate-400 hover:border-indigo-500 hover:text-indigo-400 transition-all"
              aria-label="GitHub"
            >
              <FiGithub size={14} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
