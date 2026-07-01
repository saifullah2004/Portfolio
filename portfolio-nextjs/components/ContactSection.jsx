'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FiMail, FiPhone, FiMapPin, FiBookOpen, FiSend,
  FiCheckCircle, FiAlertCircle,
} from 'react-icons/fi';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 90 } },
};

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null); // null | 'sending' | 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 px-[5%] max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12">

        {/* ── Left: Education + Info ── */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-8"
        >
          {/* Education */}
          <div>
            <p className="eyebrow"><FiBookOpen /> Education</p>
            <h2 className="section-title text-slate-100">My Background</h2>
            <motion.div
              variants={item}
              className="card bg-slate-900/60 border border-slate-800 hover:border-indigo-500/40"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/25 flex items-center justify-center text-indigo-400 shrink-0">
                  <FiBookOpen />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-100">Bachelor of Science in Computer Science</h4>
                  <p className="text-sm text-slate-400 mt-1">University of Chakwal</p>
                  <span className="inline-block mt-2 text-xs font-medium px-2.5 py-0.5 rounded-full bg-indigo-500/15 text-indigo-300 border border-indigo-500/25">
                    2022 – 2026
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Info */}
          <motion.div variants={item} className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-slate-200">Get in touch directly</h3>
            {[
              { icon: <FiMail />,   label: 'msaifullahawan2004@gmail.com', href: 'mailto:msaifullahawan2004@gmail.com' },
              { icon: <FiPhone />,  label: '+92 313 5547972',              href: 'tel:+923135547972' },
              { icon: <FiMapPin />, label: 'Chakwal, Pakistan',            href: null },
            ].map((c) => (
              <motion.a
                key={c.label}
                href={c.href || undefined}
                variants={item}
                whileHover={{ x: 4 }}
                className="flex items-center gap-3 text-slate-400 hover:text-indigo-400 transition-colors group"
              >
                <span className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 group-hover:border-indigo-500/50 flex items-center justify-center text-indigo-400 shrink-0 transition-colors">
                  {c.icon}
                </span>
                <span className="text-sm">{c.label}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Right: Contact Form ── */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="card bg-slate-900/60 border border-slate-800 flex flex-col gap-5"
        >
          <div>
            <h2 className="text-2xl font-bold text-slate-100">Get In Touch</h2>
            <p className="text-sm text-slate-400 mt-1">Send me a message and I&apos;ll get back to you.</p>
          </div>

          {/* Name */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-slate-300">Your Name</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Name"
              className="w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-slate-700 text-slate-100 placeholder-slate-500 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-slate-300">Email Address</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="name@example.com"
              className="w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-slate-700 text-slate-100 placeholder-slate-500 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-slate-300">Message</label>
            <textarea
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="How can I help you?"
              className="w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-slate-700 text-slate-100 placeholder-slate-500 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all resize-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={status === 'sending'}
            className="btn-primary self-start disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === 'sending' ? (
              <>
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Sending…
              </>
            ) : (
              <>Send Message <FiSend /></>
            )}
          </button>

          {/* Status messages */}
          {status === 'success' && (
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-sm text-emerald-400 font-medium"
            >
              <FiCheckCircle /> Message sent! I&apos;ll get back to you soon.
            </motion.p>
          )}
          {status === 'error' && (
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-sm text-red-400 font-medium"
            >
              <FiAlertCircle /> Something went wrong. Please try again or email me directly.
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
