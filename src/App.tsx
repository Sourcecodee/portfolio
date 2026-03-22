import { motion } from 'framer-motion';
import { ParticleBackground } from './components/ParticleBackground';
import { FloatingCodeSnippets } from './components/FloatingCodeSnippets';
import { MorphingNav } from './components/MorphingNav';
import { MagneticButton } from './components/MagneticButton';
import { TiltCard } from './components/TiltCard';
import { OrbitalSkills } from './components/OrbitalSkills';
import './App.css';

const FEATURES = [
  { icon: '</>', title: 'Clean Code', desc: 'Writing maintainable and scalable solutions' },
  { icon: '⚡', title: 'Performance', desc: 'Optimized for speed and efficiency' },
  { icon: '🚀', title: 'Modern Stack', desc: 'Latest technologies and best practices' },
  { icon: '✨', title: 'Fast Delivery', desc: 'Quick iterations and rapid development' },
];

const PROJECTS = [
  {
    title: 'E-Commerce Platform',
    desc: 'Full-featured solution with inventory, payment, and admin dashboard.',
    tags: ['React', 'TypeScript', 'Stripe', 'Redux'],
    demo: '#',
    code: '#',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=240&fit=crop',
  },
  {
    title: 'Design System',
    desc: 'Comprehensive component library with an accessibility-first approach.',
    tags: ['Storybook', 'Tailwind', 'a11y'],
    demo: '#',
    code: '#',
    image: 'https://images.unsplash.com/photo-1586717799252-22cf4f8e74a6?w=400&h=240&fit=crop',
  },
  {
    title: 'AI Dashboard',
    desc: 'Interactive data visualization dashboard with real-time analytics.',
    tags: ['Next.js', 'D3.js', 'WebSocket', 'OpenAI'],
    demo: '#',
    code: '#',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=240&fit=crop',
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
  viewport: { once: true, margin: '-40px' },
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
    <div className="min-h-screen bg-[#0a0a0f] text-slate-100">
      <ParticleBackground />
      <FloatingCodeSnippets />
      <MorphingNav />

      <section
        id="hero"
        className="min-h-screen flex flex-col items-center justify-center px-6 relative group"
      >
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.p
            className="text-indigo-400 text-sm md:text-base mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Hi, I'm
          </motion.p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-indigo-300 via-violet-400 to-purple-500 bg-clip-text text-transparent mb-2">
            Yusuf Mshelia
          </h1>
          <p className="text-slate-100 text-xl md:text-2xl mb-2 font-medium">React Developer</p>
          <p className="text-slate-400 text-sm md:text-base max-w-md mx-auto">
            Building the future, one component at a time
          </p>
        </motion.div>
        <motion.div
          className="absolute bottom-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.span
            className="text-indigo-500/60 text-2xl block"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            ↓
          </motion.span>
        </motion.div>
      </section>

      <section id="about" className="min-h-screen flex flex-col items-center justify-center px-6 py-24">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-6 text-center"
          {...fadeUp}
        >
          <span className="text-slate-100">About </span>
          <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
            Me
          </span>
        </motion.h2>
        <motion.p
          className="text-slate-400 text-center max-w-2xl mb-16"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          I'm a passionate React developer who loves turning complex problems into elegant,
          user-friendly solutions. With a keen eye for detail and a commitment to excellence, I
          create digital experiences that not only look great but perform exceptionally.
        </motion.p>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={containerVariants}
        >
          {FEATURES.map((f, i) => (
            <TiltCard key={i}>
              <motion.div
                className="p-6 rounded-2xl glass h-full text-left transition-all duration-300 hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/10"
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-2xl text-indigo-400 mb-3 block">{f.icon}</span>
                <h3 className="font-semibold text-slate-100 mb-2">{f.title}</h3>
                <p className="text-slate-400 text-sm">{f.desc}</p>
              </motion.div>
            </TiltCard>
          ))}
        </motion.div>
      </section>

      <section id="projects" className="min-h-screen flex flex-col items-center px-6 py-24">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-2 text-center"
          {...fadeUp}
        >
          <span className="text-slate-100">Featured </span>
          <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
            Projects
          </span>
        </motion.h2>
        <motion.p
          className="text-slate-400 text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          A selection of my recent work showcasing different skills and technologies.
        </motion.p>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl"
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />
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
                  <div className="flex gap-3">
                    <MagneticButton href={p.demo} className="flex-1 py-2 text-sm">
                      Demo ↗
                    </MagneticButton>
                    <a
                      href={p.code}
                      className="flex-1 py-2 text-sm rounded-full border border-slate-500/50 text-center text-slate-300 hover:bg-indigo-500/10 hover:border-indigo-500/50 transition-all duration-300"
                    >
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
          <span className="text-slate-100">Tech </span>
          <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
            Stack
          </span>
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
          <span className="text-slate-100">Let's </span>
          <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
            Connect
          </span>
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
        <MagneticButton href="mailto:hello@example.com" className="mb-12">
          ✉ Send me an email
        </MagneticButton>
        <motion.div
          className="flex gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {SOCIAL.map((s, i) => (
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
