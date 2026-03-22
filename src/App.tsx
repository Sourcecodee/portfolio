import { motion } from 'framer-motion';
import { ParticleBackground } from './components/ParticleBackground';
import { FloatingCodeSnippets } from './components/FloatingCodeSnippets';
import { MorphingNav } from './components/MorphingNav';
import { MagneticButton } from './components/MagneticButton';
import { TiltCard } from './components/TiltCard';
import { OrbitalSkills } from './components/OrbitalSkills';
import './App.css';

import { Code, Zap, Sparkles, Rocket, ExternalLink, Github, ChevronDown } from 'lucide-react';

const FEATURES = [
  { icon: Code, title: 'Clean Code', desc: 'Writing maintainable and scalable solutions', color: 'bg-blue-500/20 text-blue-400' },
  { icon: Rocket, title: 'Performance', desc: 'Optimized for speed and efficiency', color: 'bg-purple-500/20 text-purple-400' },
  { icon: Sparkles, title: 'Modern Stack', desc: 'Latest technologies and best practices', color: 'bg-indigo-500/20 text-indigo-400' },
  { icon: Zap, title: 'Fast Delivery', desc: 'Quick iterations and rapid development', color: 'bg-amber-500/20 text-amber-400' },
];

const PROJECTS = [
  {
    title: 'E-Commerce Platform',
    desc: 'A full-featured e-commerce solution with real-time inventory, payment integration, and admin dashboard.',
    tags: ['React', 'TypeScript', 'Stripe', 'Redux'],
    demo: '#',
    code: '#',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop',
  },
  {
    title: 'Design System',
    desc: 'A comprehensive component library with an accessibility-first approach and extensive documentation.',
    tags: ['React', 'Storybook', 'Tailwind', 'a11y'],
    demo: '#',
    code: '#',
    image: 'https://images.unsplash.com/photo-1586717799252-22cf4f8e74a6?w=600&h=400&fit=crop',
  },
  {
    title: 'AI Dashboard',
    desc: 'Interactive data visualization dashboard with real-time analytics and AI-powered insights.',
    tags: ['Next.js', 'D3.js', 'WebSocket', 'OpenAI'],
    demo: '#',
    code: '#',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
  },
];

const SOCIAL = [
  { name: 'GitHub', href: 'https://github.com', icon: '↗' },
  { name: 'LinkedIn', href: 'https://linkedin.com', icon: 'in' },
  { name: 'Twitter', href: 'https://x.com', icon: '𝕏' },
  { name: 'Email', href: 'mailto:hello@example.com', icon: '✉' },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

function App() {
  return (
    <div className="min-h-screen text-slate-100 relative overflow-hidden">
      {/* Background Glows */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-5 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-500/10 blur-[150px] rounded-full" />
        <div className="absolute top-[30%] right-[10%] w-[30%] h-[30%] bg-blue-500/5 blur-[100px] rounded-full" />
      </div>

      <ParticleBackground />
      <FloatingCodeSnippets />
      <MorphingNav />

      <section
        id="hero"
        className="min-h-screen flex flex-col items-center justify-center px-6 relative z-10"
      >
        <motion.div
           className="text-center"
           initial={{ opacity: 0, y: 40 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.p
            className="text-indigo-400 text-sm md:text-base mb-4 font-medium tracking-widest uppercase"
          >
            Hi, I'm
          </motion.p>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 tracking-tighter">
            <span className="text-white">Yusuf </span>
            <span className="text-purple-500">Mshelia</span>
          </h1>
          <p className="text-slate-100 text-xl md:text-3xl font-medium opacity-90">React Developer</p>
          <p className="text-slate-400 text-sm md:text-base max-w-md mx-auto mt-6 opacity-60">
            Building the future, one component at a time
          </p>
        </motion.div>

        <motion.div
          className="absolute bottom-12 text-indigo-500/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown size={32} />
          </motion.div>
        </motion.div>
      </section>

      <section id="about" className="min-h-screen flex flex-col items-center justify-center px-6 py-24 relative z-10">
        <motion.h2
          className="text-4xl md:text-6xl font-bold mb-16 text-center"
          {...fadeUp}
        >
          <span>About Me</span>
        </motion.h2>
        <motion.p
          className="text-slate-400 text-center text-lg md:text-xl max-w-2xl mb-48 leading-relaxed"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          I'm a passionate React developer who loves turning complex problems into elegant,
          user-friendly solutions. With a keen eye for detail and a commitment to excellence, I
          create digital experiences that not only look great but perform exceptionally.
        </motion.p>
        <div
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl items-stretch"
        >
          {FEATURES.map((f, i) => (
            <div key={i} className="flex">
              <motion.div
                className="p-8 rounded-2xl glass w-full text-left border border-white/10 flex flex-col group/feature shadow-xl shadow-black/40"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <div className={`mb-6 p-3 rounded-lg w-fit ${f.color}`}>
                  <f.icon size={28} />
                </div>
                <h3 className="font-bold text-slate-100 text-lg mb-3 tracking-wide">{f.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed flex-1">{f.desc}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="min-h-screen flex flex-col items-center px-6 py-24">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-2 text-center"
          {...fadeUp}
        >
          <span>Featured Projects</span>
        </motion.h2>
        <motion.p
          className="text-slate-400 text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          A selection of my recent work showcasing different skills and technologies.
        </motion.p>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={containerVariants}
        >
          {PROJECTS.map((p, i) => (
            <TiltCard key={i}>
              <motion.div
                className="rounded-2xl glass overflow-hidden h-full flex flex-col transition-all duration-300 hover:border-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/5 group/card"
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-40 object-cover opacity-90 transition-transform duration-500 group-hover/card:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-semibold text-slate-100 text-lg mb-2">{p.title}</h3>
                  <p className="text-slate-400 text-sm mb-4 flex-1">{p.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-lg bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <MagneticButton href={p.demo} className="flex-1 py-2.5 text-sm font-medium flex items-center justify-center gap-2 bg-indigo-500/10 border border-indigo-500/30 hover:bg-indigo-500/20">
                      <ExternalLink size={16} />
                      Demo
                    </MagneticButton>
                    <a
                      href={p.code}
                      className="flex-1 py-2.5 text-sm font-medium rounded-full border border-slate-700 bg-slate-800/50 flex items-center justify-center gap-2 text-slate-200 hover:bg-slate-700 hover:border-slate-600 transition-all duration-300"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  </div>
                </div>
              </motion.div>
            </TiltCard>
          ))}
        </motion.div>
      </section>

      <section id="skills" className="min-h-screen flex flex-col items-center px-6 py-24">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-2 text-center"
          {...fadeUp}
        >
          <span className="text-slate-100">Tech Stack</span>
        </motion.h2>
        <motion.p
          className="text-slate-400 text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Technologies and tools I use to bring ideas to life.
        </motion.p>
        <OrbitalSkills />
      </section>

      <section id="contact" className="min-h-screen flex flex-col items-center justify-center px-6 py-24">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-6 text-center"
          {...fadeUp}
        >
          <span>Let's Connect</span>
        </motion.h2>
        <motion.p
          className="text-slate-400 text-center max-w-lg mb-10"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Have a project in mind or just want to chat? I'm always open to discussing new
          opportunities and ideas.
        </motion.p>
        <MagneticButton href="mailto:hello@example.com" className="mt-8">
          ✉ Send me an email
        </MagneticButton>
        <motion.div
          className="flex gap-4 mt-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {SOCIAL.map((s) => (
            <motion.a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-slate-400 transition-all duration-300 hover:text-indigo-400 hover:border-indigo-500/40 hover:shadow-lg hover:shadow-indigo-500/20"
              variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {s.icon}
            </motion.a>
          ))}
        </motion.div>
        <footer className="mt-24 pt-8 border-t border-slate-800 text-slate-500 text-sm">
          © 2026 Yusuf Mshelia. Crafted with React & Motion
        </footer>
      </section>
    </div>
  );
}

export default App;
