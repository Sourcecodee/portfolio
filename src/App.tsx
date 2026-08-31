import { motion } from 'framer-motion';
import { ParticleBackground } from './components/ParticleBackground';
import { FloatingCodeSnippets } from './components/FloatingCodeSnippets';
import { MorphingNav } from './components/MorphingNav';
import { OrbitalSkills } from './components/OrbitalSkills';
import { ContactForm } from './components/ContactForm';
import './App.css';

import scentreelImg from './assets/scentreel.png';
import imintImg from './assets/iMint.png';
import moviedomImg from './assets/moviedom.png';
import escapeImg from './assets/Escape.png';

const FEATURES = [
  { title: 'Code you can re-read at 2am', desc: 'No decoder ring needed. Clear names, small functions, comments only where the why isn’t obvious.' },
  { title: 'Fast is a feeling', desc: 'Prefetch, memo, lazy-load — so it never stutters on that old Android in your drawer.' },
  { title: 'Stack that won’t haunt you', desc: 'Current, supported, boring in a good way. No 2018 boilerplate you’ll Google in 6 months.' },
  { title: 'We ship, not just commit', desc: 'Small PRs, quick demos, feedback before the rabbit hole gets deep.' },
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

      {/* Fixed circular Contact — replaces hero buttons */}
      <a
        href="#contact"
        aria-label="Contact Me"
        className="fixed right-4 md:right-6 bottom-6 md:bottom-auto md:top-1/2 md:-translate-y-1/2 z-50 w-[68px] h-[68px] md:w-[84px] md:h-[84px] rounded-full bg-white text-black border-[1.5px] border-black shadow-[4px_4px_0px_0px_#111] hover:shadow-[2px_2px_0px_0px_#111] hover:translate-x-[2px] hover:translate-y-[2px] grid place-items-center text-center font-mono text-[11px] font-bold tracking-[0.14em] leading-none transition-all"
      >
        <span>CONTACT<br />ME</span>
      </a>

      <section
        id="hero"
        className="min-h-[78vh] flex flex-col items-center justify-center px-6 pt-36 pb-16 md:pt-40 md:pb-20 relative z-10 text-center"
      >
        <div className="absolute top-6 right-6 md:top-8 md:right-8 z-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white text-black border-[1.5px] border-black shadow-[3px_3px_0px_0px_#6366f1] font-mono text-[11px] font-bold tracking-[0.16em] uppercase">
            Open to freelance — Remote
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto flex flex-col items-center"
        >
          <div className="h-6 md:h-8" />
          <h1 className="text-[46px] md:text-[76px] lg:text-[88px] leading-[0.95] tracking-tighter flex flex-col items-center">
            <span className="flex">
              {"Yusuf ".split("").map((char, i) => (
                <motion.span
                  key={`y-${i}`}
                  initial={{ opacity: 0, scale: 0.5, filter: "blur(10px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.22, delay: 0.25 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  className={char === " " ? "mr-3 md:mr-6 font-['Syne'] font-800 text-white pb-1" : "font-['Syne'] font-800 text-white pb-1"}
                >
                  {char}
                </motion.span>
              ))}
            </span>
            <span className="flex mt-2">
              {"Mshelia".split("").map((char, i) => (
                <motion.span
                  key={`m-${i}`}
                  initial={{ opacity: 0, scale: 0.5, filter: "blur(10px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.22, delay: 0.25 + (i + 6) * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  className="font-['Instrument_Serif'] italic font-normal text-slate-400"
                >
                  {char}
                </motion.span>
              ))}
            </span>
          </h1>

          <p className="mt-4 text-white text-[13px] md:text-sm font-mono tracking-[0.32em] uppercase font-bold">
            Software Engineer
          </p>

          <p className="mt-5 text-slate-300 text-[16px] md:text-[18px] leading-relaxed max-w-2xl text-center">
            Specializing in React, Next, TypeScript and modern web architecture, I build
            scalable, maintainable products — from design systems to production APIs — with a focus
            on performance, accessibility, and clean code that teams can rely on.
          </p>
        </motion.div>
      </section>

      <section className="px-6 py-16 md:py-20 relative z-10">
        <div className="w-full max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-slate-500">— my working notes, not a poster</p>
          </div>
          <div className="relative border-l border-white/10 ml-4 md:ml-6 pl-8 md:pl-10 space-y-10">
            <div className="absolute left-0 top-2 bottom-8 w-px bg-gradient-to-b from-indigo-400/60 via-white/10 to-transparent hidden md:block" />
            {FEATURES.map((f, i) => (
              <motion.div
                key={i}
                className="relative group"
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <span className="absolute -left-[42px] md:-left-[52px] top-1 w-7 h-7 rounded-full bg-white text-black grid place-items-center text-[11px] font-bold border-2 border-black shadow-[2px_2px_0px_0px_rgba(255,255,255,0.15)] group-hover:scale-110 transition-transform">
                  {i + 1}
                </span>
                <h3 className="text-[19px] md:text-[22px] font-bold leading-tight tracking-tight text-white">
                  <span className="bg-gradient-to-r from-indigo-500/15 via-purple-500/10 to-transparent px-1.5 -mx-1.5 rounded-sm box-decoration-clone">{f.title}</span>
                </h3>
                <p className="mt-2 text-slate-400 leading-relaxed text-[15px] max-w-xl">
                  {f.desc}
                </p>
                <div className="mt-3 font-mono text-[11px] tracking-[0.12em] uppercase text-white/25 group-hover:text-indigo-300 transition-colors">
                  — {i === 0 ? "future you says thanks" : i === 1 ? "no spinner as personality" : i === 2 ? "boring is good" : "demo > deck"}
                </div>
              </motion.div>
            ))}
          </div>
          <p className="mt-10 text-center font-mono text-xs text-slate-500 italic">
            P.S. If it’s not readable, it’s not done. I also leave the code cleaner than I found it.
          </p>
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

                  {/* Compact ticket-stub — reduced */}
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center gap-2.5 pl-4 pr-2.5 py-2 bg-[#fafaf9] text-black border-[1.5px] border-black shadow-[3px_3px_0px_0px_#111] hover:shadow-[1.5px_1.5px_0px_0px_#111] hover:translate-x-[1.5px] hover:translate-y-[1.5px] transition-all duration-200"
                  >
                    <span className="absolute -left-[1.5px] top-1/2 -translate-y-1/2 w-2.5 h-5 bg-black rounded-r-full" />
                    <span className="font-mono text-[10px] font-bold tracking-[0.18em] uppercase">Visit Live</span>
                    <span className="w-6 h-6 grid place-items-center bg-black text-white rounded-full group-hover:rotate-45 transition-transform duration-300">
                      <span className="text-[11px] leading-none">↗</span>
                    </span>
                    <span className="hidden sm:inline font-mono text-[9px] tracking-widest text-black/40 border-l border-black/10 pl-2.5 ml-1">
                      {new URL(p.demo).hostname.replace('www.','')}
                    </span>
                  </a>
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
        <footer className="mt-24 pt-8 border-t border-slate-800 text-slate-400 text-sm font-mono tracking-wide text-center">
          © 2026 Yusuf Mshelia. Built with React and Motion
        </footer>
      </section>
    </div>
  );
}

export default App;
