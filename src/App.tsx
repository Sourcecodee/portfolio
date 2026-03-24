import { motion } from 'framer-motion';
import { ParticleBackground } from './components/ParticleBackground';
import { FloatingCodeSnippets } from './components/FloatingCodeSnippets';
import { MorphingNav } from './components/MorphingNav';
import { MagneticButton } from './components/MagneticButton';
import { OrbitalSkills } from './components/OrbitalSkills';
import { ContactForm } from './components/ContactForm';
import './App.css';

import { Link2, ChevronDown } from 'lucide-react';
import scentreelImg from './assets/scentreel.png';
import imintImg from './assets/iMint.png';
import echoverseImg from './assets/echoverse.png';
import moviedomImg from './assets/moviedom.png';
import escapeImg from './assets/Escape.png';

const FEATURES = [
  { title: 'Clean Code', desc: 'Writing maintainable and scalable solutions', color: 'bg-blue-500/20 text-blue-400' },
  { title: 'Performance', desc: 'Optimized for speed and efficiency', color: 'bg-purple-500/20 text-purple-400' },
  { title: 'Modern Stack', desc: 'Latest technologies and best practices', color: 'bg-indigo-500/20 text-indigo-400' },
  { title: 'Fast Delivery', desc: 'Quick iterations and rapid development', color: 'bg-amber-500/20 text-amber-400' },
];

const PROJECTS = [
  {
    title: 'Scentreel',
    desc: 'An immersive perfume experience featuring stunning visuals and smooth animations. Built for exploration.',
    tags: ['React', 'MUI', 'Redux'],
    demo: 'https://dev3146.d2yz77mojymfsu.amplifyapp.com',
    image: scentreelImg,
  },
  {
    title: 'iMint',
    desc: 'A premium used iPhone marketplace with a focus on product visuals and seamless user experience.',
    tags: ['TypeScript', 'React', 'Tailwind', 'Responsive CSS'],
    demo: 'https://imint.d2zf5d9rqz60dl.amplifyapp.com',
    image: imintImg,
  },
  {
    title: 'EchoVerse',
    desc: 'High-fidelity music streaming platform for a next-gen audio experience.',
    tags: ['TypeScript', 'React', 'Framer Motion'],
    demo: 'https://echo.d21s7gad01covv.amplifyapp.com/',
    image: echoverseImg,
  },
  {
    title: 'Moviedom',
    desc: 'Comprehensive movie database and streaming hub with deep TMDB integration.',
    tags: ['Javascript', 'Responsive CSS'],
    demo: 'https://moviedom.d1bc2kwkrzo36w.amplifyapp.com',
    image: moviedomImg,
  },
  {
    title: 'Escape',
    desc: 'Adventure-first travel platform for discovering and booking unique experiences.',
    tags: ['React', 'MUI', 'React Slick'],
    demo: 'https://staging.d6mqsufv5emv8.amplifyapp.com',
    image: escapeImg,
  },
];

const SOCIAL = [
  { name: 'GitHub', href: 'https://github.com/Sourcecodee', icon: '↗' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/yusuf-mshelia-867557a4/', icon: 'in' },
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
          <div className="flex flex-col items-center w-full max-w-7xl mx-auto">
            {/* Initialization Prompt */}
            <div className="h-4 mb-4 flex items-center justify-center">
              {"...".split("").map((char, i) => (
                <motion.span
                  key={`dot-${i}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1, delay: i * 0.2 }}
                  className="text-indigo-500 mx-1 font-mono text-xl"
                >
                  {char}
                </motion.span>
              ))}
            </div>

            {/* Monumental Name */}
            <h1 className="text-4xl md:text-7xl lg:text-[13rem] mb-6 tracking-tighter flex flex-wrap justify-center font-['Nova_Flat'] leading-none text-center">
              <span className="flex flex-wrap justify-center">
                {"Yusuf ".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.5, filter: "blur(10px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    transition={{ duration: 0.2, delay: 0.8 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    className={char === " " ? "mr-4 md:mr-10 text-white" : "text-white"}
                  >
                    {char}
                  </motion.span>
                ))}
                {"Mshelia".split("").map((char, i) => (
                  <motion.span
                    key={i + 6}
                    initial={{ opacity: 0, scale: 0.5, filter: "blur(10px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    transition={{ duration: 0.2, delay: 0.8 + (i + 6) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    className="text-purple-500"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            </h1>

            {/* Professional Role */}
            <p className="text-slate-100/80 text-lg md:text-2xl font-bold font-mono tracking-[0.4em] uppercase mt-8 text-center px-4">
              React Developer
            </p>
          </div>
          <p className="text-slate-400 text-sm md:text-base max-w-md mx-auto mt-6 opacity-60">
            Building the future, one component at a time
          </p>
        </motion.div>

        <motion.div
          className="absolute bottom-12 text-white"
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
          className="mt-24 flex flex-col items-start gap-20 w-full max-w-6xl relative"
        >
          {FEATURES.map((f, i) => (
            <motion.div
              key={i}
              className="max-w-md group/feature"
              initial={{ opacity: 0, x: -150, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ 
                type: "spring",
                stiffness: 40,
                damping: 15,
                delay: 0.1 
              }}
              style={{ marginLeft: `${i * 25}%` }}
            >
              <h3 className="font-bold text-slate-100 text-3xl md:text-4xl mb-3 tracking-tighter group-hover/feature:text-indigo-400 transition-colors duration-300">
                {f.title}
              </h3>
              <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-sm">
                {f.desc}
              </p>
            </motion.div>
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
        <div
          className="mt-24 flex flex-col gap-32 w-full max-w-7xl mx-auto"
        >
          {PROJECTS.map((p, i) => (
            <motion.div
              key={i}
              className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-20`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              {/* Image Frame */}
              <div className="flex-1 w-full group overflow-hidden rounded-2xl glass border border-white/5 bg-black/40 hover:border-indigo-500/30 transition-all duration-500">
                <div className="relative aspect-video flex items-center justify-center p-2">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-contain opacity-90 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>

              {/* Text Module */}
              <div className="flex-1 flex flex-col items-start gap-6 max-w-lg">
                <div className="flex items-center gap-4">
                  <span className="text-4xl font-black text-white/10 font-mono">0{i + 1}</span>
                  <div className="h-px w-12 bg-indigo-500/40" />
                </div>
                
                <div>
                  <h3 className="text-4xl md:text-5xl font-black text-slate-100 mb-4 tracking-tighter">
                    {p.title}
                  </h3>
                  <p className="text-slate-400 text-lg leading-relaxed mb-6 font-serif italic">
                    {p.desc}
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mb-8">
                    {p.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1.5 text-xs font-mono font-bold bg-indigo-500/5 text-indigo-400 border border-indigo-500/20 rounded-lg">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <MagneticButton 
                    href={p.demo} 
                    target="_blank" 
                    className="py-3 px-10 text-xs uppercase tracking-[0.3em] font-black bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 hover:bg-indigo-500/20 hover:text-indigo-300 transition-all flex items-center justify-center gap-2"
                  >
                    <Link2 size={16} />
                    Link
                  </MagneticButton>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="skills" className="flex flex-col items-center px-6 pt-24 pb-12">
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

      <section id="contact" className="flex flex-col items-center justify-center px-6 py-12">
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
        
        <ContactForm />

        <motion.div
          className="flex gap-4 mt-16"
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
        <footer className="mt-24 pt-8 border-t border-slate-800 text-slate-300 text-sm">
          © 2026 Yusuf Mshelia. Crafted with React & Motion
        </footer>
      </section>
    </div>
  );
}

export default App;
