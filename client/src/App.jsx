import React, { useMemo, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiArrowUpRight,
  FiGithub,
  FiMail,
  FiMapPin,
  FiServer,
  FiShoppingBag,
  FiMoon,
  FiSun,
  FiCode,
  FiDatabase,
  FiLayout,
  FiPhone,
  FiBookOpen,
  FiMap,
  FiTarget,
} from 'react-icons/fi';
import {
  SiThreedotjs,
  SiMapbox,
  SiDjango,
  SiPytorch,
  SiPostgresql,
  SiGoogle,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiPhp,
} from 'react-icons/si';
import axios from 'axios';

const projects = [

  {
    name: 'FootwearFrenzy',
    type: 'E-Commerce Website',
    tech: ['HTML', 'CSS', 'PHP', 'MySQL'],
    description:
      'Built a full-featured e-commerce web application with an administrator dashboard for managing products and orders.',
    features: ['Responsive UI', 'Backend logic with DB integration', 'Product/Order management'],
    accent: 'accent-green',
  },
  {
    name: 'Restaurant Website',
    type: 'Full-stack MERN Application',
    tech: ['React', 'Node', 'Express', 'MongoDB'],
    description:
      'Created a dynamic restaurant web application featuring a modern UI and complete backend functionality.',
    features: ['Efficient data handling', 'RESTful API integration', 'Modern responsive UI'],
    accent: 'accent-blue',
  },
  {
    name: 'LandLens',
    type: 'AI-Powered GIS & Floor Plan Generation Platform',
    tech: [
      'React',
      'Tailwind CSS',
      'Django REST Framework',
      'PostgreSQL',
      'PostGIS',
      'PyTorch',
      'GeoDjango',
      'Mapbox GL JS',
      'Google Gemini',
      'Three.js'
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
      'Secure project and user management system'
    ],
    accent: 'accent-purple',
  },
];

const skills = [
  { name: 'React.js', icon: <FiLayout />, category: 'Frontend' },
  { name: 'Tailwind CSS', icon: <FiLayout />, category: 'Frontend' },
  { name: 'Node.js', icon: <FiServer />, category: 'Backend' },
  { name: 'Express.js', icon: <FiServer />, category: 'Backend' },
  { name: 'MongoDB', icon: <FiDatabase />, category: 'Database' },
  { name: 'MySQL', icon: <FiDatabase />, category: 'Database' },
  { name: 'PHP', icon: <FiCode />, category: 'Backend' },
  { name: 'JavaScript', icon: <FiCode />, category: 'Languages' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  useEffect(() => {
    // Set dark theme by default on load
    document.documentElement.setAttribute('data-theme', theme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const handleContact = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      await axios.post('http://localhost:5000/api/contact', formData);
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('Error sending message. Is the server running?');
    }
  };

  return (
    <div className="site-shell">
      <nav className="nav">
        <h2>Muhammad Saifullah</h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#contact" className="nav-link">Contact</a>
          <button onClick={toggleTheme} className="theme-toggle">
            {theme === 'light' ? <FiMoon /> : <FiSun />}
          </button>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="section hero">
          <motion.div
            className="hero-copy"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >

            <motion.div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }} variants={itemVariants}>
              {"Hello, I'm".split(' ').map((word, i) => (
                <motion.h2 key={i} style={{ fontSize: '2.5rem' }}>{word}</motion.h2>
              ))}
            </motion.div>
            <motion.h1 style={{ fontSize: '4rem', marginBottom: '1rem' }} variants={itemVariants}>
              <span style={{ color: 'var(--primary)' }}>Saifullah</span>
            </motion.h1>
            <motion.h2
              style={{ fontSize: '1.5rem', fontWeight: '500', color: 'var(--text-muted)', marginBottom: '1.5rem' }}
              variants={itemVariants}
            >
              Full-Stack Developer
            </motion.h2>
            <motion.p variants={itemVariants} style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
              I am a passionate developer dedicated to building high-performance
              and scalable web applications. With expertise in the MERN stack
              and PHP/MySQL, I focus on creating clean, efficient code and
              exceptional user experiences.
            </motion.p>
            <motion.div className="hero-actions" variants={itemVariants}>
              <a href="#projects" className="button primary">
                View My Work <FiArrowUpRight />
              </a>
              <a href="#contact" className="button ghost">
                Contact Me
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="hero-blob"></div>
            <img src="/src/assets/saif.jpg" alt="Muhammad Saifullah" onError={(e) => {
              e.target.src = 'https://via.placeholder.com/400x400?text=Saif+Photo';
            }} />
          </motion.div>
        </section>

        {/* About / Skills Section */}
        <section className="section" id="skills">
          <motion.div
            className="section-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="eyebrow"><FiCode /> My Toolkit</p>
            <h2 className="section-title">Technical Expertise</h2>
          </motion.div>
          <motion.div
            className="skill-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {skills.map((skill) => (
              <motion.div
                className="skill-card"
                key={skill.name}
                variants={itemVariants}
                whileHover={{ scale: 1.05, translateY: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <div style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>
                  {skill.icon}
                </div>
                <h4>{skill.name}</h4>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{skill.category}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Projects Section */}
        <section className="section" id="projects">
          <motion.div
            className="section-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="eyebrow"><FiShoppingBag /> Portfolio</p>
            <h2 className="section-title">Featured Projects</h2>
          </motion.div>

          <motion.div
            className="project-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {projects.map((project) => (
              <motion.article
                className={`project-card ${project.accent} ${project.name === 'LandLens' ? 'featured-project' : ''}`}
                key={project.name}
                variants={itemVariants}
                whileHover={{ y: -10, boxShadow: 'var(--shadow)' }}
              >
                <div className="project-icon">
                  {project.name === 'LandLens' ? <FiMap /> : 
                   project.name === 'Restaurant Website' ? <FiShoppingBag /> : 
                   <FiCode />}
                </div>
                {/* {project.name === 'LandLens' && (
                  <span className="featured-badge">High Impact</span>
                )} */}
                <div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 600 }}>{project.type}</p>
                  <h3>{project.name}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                    {project.description}
                  </p>
                </div>
                <div className="tag-row">
                  {project.tech.map((item) => (
                    <span key={item} className="tech-tag">
                      {item === 'Three.js' && <SiThreedotjs />}
                      {item === 'Mapbox GL JS' && <SiMapbox />}
                      {item === 'Django REST Framework' && <SiDjango />}
                      {item === 'PyTorch' && <SiPytorch />}
                      {item === 'PostgreSQL' && <SiPostgresql />}
                      {item === 'Google Gemini' && <SiGoogle />}
                      {item}
                    </span>
                  ))}
                </div>
                <div style={{ marginTop: 'auto' }}>
                  <ul style={{ listStyle: 'none', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    {project.features.map(f => <li key={f}>• {f}</li>)}
                  </ul>
                  <div className="hero-actions" style={{ marginTop: '1.5rem', gap: '1rem' }}>
                    <a href="#" className="nav-link" style={{ fontSize: '0.9rem' }}>
                      <FiArrowUpRight /> Live Demo
                    </a>
                    <a href="#" className="nav-link" style={{ fontSize: '0.9rem' }}>
                      <FiGithub /> Source Code
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </section>

        {/* Education & Contact Section */}
        <section className="section" id="contact">
          <div className="contact-container">
            <div>
              <p className="eyebrow"><FiBookOpen /> Education</p>
              <h2 className="section-title">My Background</h2>
              <div style={{ padding: '1.5rem', background: 'var(--card-bg)', borderRadius: '16px', border: '1px solid var(--border)' }}>
                <h4 style={{ color: 'var(--primary)' }}>Bachelor of Science in Computer Science</h4>
                <p>University of Chakwal | 2022 - 2026</p>
              </div>

              <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <p className="nav-link"><FiMail /> msaifullahawan2004@gmail.com</p>
                <p className="nav-link"><FiPhone /> +92 313 5547972</p>
                <p className="nav-link"><FiMapPin /> Chakwal, Pakistan</p>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleContact}>
              <h2 className="section-title">Get In Touch</h2>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your Name"
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@example.com"
                />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="How can I help you?"
                ></textarea>
              </div>
              <button type="submit" className="button primary">
                Send Message <FiMail />
              </button>
              {status && <p style={{ color: 'var(--primary)', fontWeight: 500 }}>{status}</p>}
            </form>
          </div>
        </section>
      </main>

      <footer className="section" style={{ borderTop: '1px solid var(--border)', textAlign: 'center', padding: '2rem' }}>
        <p style={{ color: 'var(--text-muted)' }}>© {new Date().getFullYear()} Muhammad Saifullah.</p>
      </footer>
    </div>
  );
}
