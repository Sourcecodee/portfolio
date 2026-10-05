import { motion } from 'framer-motion';
import { ParticleBackground } from './components/ParticleBackground';
import { PortfolioIcon } from './components/PortfolioIcon';
import { MorphingNav } from './components/MorphingNav';
import { OrbitalSkills } from './components/OrbitalSkills';
import { ContactForm } from './components/ContactForm';
import './App.css';

import scentreelImg from './assets/scentreel.png';
import imintImg from './assets/iMint.png';
import moviedomImg from './assets/moviedom.png';
import escapeImg from './assets/Escape.png';
import infraDeImg from './assets/infraDe.png';

const FEATURES = [
  { title: 'Start with the person using it.', desc: 'What do they need to do? What gets in the way? Those questions come before the components.', note: '01 / Understand' },
  { title: 'Give the details some attention.', desc: 'The spacing, the loading state, the button on a small screen. Small decisions add up to how a product feels.', note: '02 / Build' },
  { title: 'Make the next change easier.', desc: 'I keep the code straightforward so someone else can pick it up without needing me to explain every line.', note: '03 / Maintain' },
  { title: 'Put something in front of people.', desc: 'A working version tells us more than another round of guessing. Build, try it, then make it better.', note: '04 / Refine' },
];

const PROJECTS = [
  {
    title: 'infraDe',
    desc: 'A home on the web for a research and engineering lab working across AI, decentralized networks, and cloud infrastructure.',
    tags: ['Astro', 'JavaScript'],
    demo: 'https://infrade.io/',
    image: infraDeImg,
  },
  {
    title: 'Scentreel',
    desc: 'A perfume storefront where the photography does the talking. Browse fragrances through a visual, motion-led interface.',
    tags: ['React', 'MUI', 'Redux'],
    demo: 'https://dev3146.d2yz77mojymfsu.amplifyapp.com',
    image: scentreelImg,
  },
  {
    title: 'iMint',
    desc: 'A storefront for pre-owned iPhones. Product photography and clear layouts put the phones at the centre of the browsing experience.',
    tags: ['TypeScript', 'React', 'Tailwind', 'Responsive CSS'],
    demo: 'https://imint.d2zf5d9rqz60dl.amplifyapp.com',
    image: imintImg,
  },
  {
    title: 'Moviedom',
    desc: 'For the nights when choosing a film takes longer than watching one. A movie discovery site built around the TMDB catalogue.',
    tags: ['Javascript', 'Responsive CSS'],
    demo: 'https://moviedom.d1bc2kwkrzo36w.amplifyapp.com',
    image: moviedomImg,
  },
  {
    title: 'Escape',
    desc: 'A travel site for browsing destinations and finding the next place to go, with room for the landscapes to speak for themselves.',
    tags: ['React', 'MUI', 'React Slick'],
    demo: 'https://staging.d6mqsufv5emv8.amplifyapp.com',
    image: escapeImg,
  },
];

const SOCIAL = [
  { name: 'GitHub', href: 'https://github.com/Sourcecodee', icon: 'github' as const },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/yusuf-mshelia-867557a4/', icon: 'linkedin' as const },
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
    <div className="portfolio-page min-h-screen text-slate-100 relative isolate overflow-hidden">
      <ParticleBackground />
      <MorphingNav />

      {/* Fixed circular Contact — replaces hero buttons */}
      <a
        href="#contact"
        aria-label="Contact Me"
        className="hidden md:grid fixed right-4 md:right-6 bottom-6 md:bottom-auto md:top-1/2 md:-translate-y-1/2 z-50 w-[68px] h-[68px] md:w-[84px] md:h-[84px] rounded-full bg-white text-black border-[1.5px] border-black shadow-[4px_4px_0px_0px_#111] hover:shadow-[2px_2px_0px_0px_#111] hover:translate-x-[2px] hover:translate-y-[2px] grid place-items-center text-center font-mono text-[11px] font-bold tracking-[0.14em] leading-none transition-all"
      >
        <span className="flex flex-col items-center gap-1"><PortfolioIcon name="letter" width={22} height={22} />SAY HELLO</span>
      </a>

      <section
        id="hero"
        className="hero-notebook min-h-[78vh] flex flex-col justify-center px-6 pt-28 pb-16 md:pt-40 md:pb-20 relative z-10"
      >
        <div className="availability-note">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white text-black border-[1.5px] border-black shadow-[3px_3px_0px_0px_#6366f1] font-mono text-[11px] font-bold tracking-[0.16em] uppercase">
            Available for freelance / Remote
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl w-full mx-auto flex flex-col items-start"
        >
          <div className="h-6 md:h-8" />
          <h1 className="hero-name">
            <span>Yusuf</span><span>Mshelia<span className="name-dot">.</span></span>
          </h1>

          <p className="mt-4 text-slate-400 text-base md:text-lg font-normal tracking-normal">
            Software Engineer
          </p>

          <p className="mt-5 text-slate-300 text-[16px] md:text-[18px] hero-intro leading-relaxed max-w-xl text-left">
            This is my little corner of the internet. I write code, move things around,
            and spend a little too long deciding if a button feels right.
            Most days, I’m working with React and TypeScript, turning a rough idea
            into something you can actually click through. Below are a few things
            I’ve made, each with its own brief and a few details I couldn’t leave alone.
          </p>
        </motion.div>
      </section>

      <section className="working-notes px-6 py-16 md:py-20 relative z-10" aria-labelledby="notes-title">
        <div className="max-w-5xl mx-auto">
          <header className="notes-heading">
            <span className="notes-caption">From the margins of my notebook</span>
            <h2 id="notes-title">A few things I care about</h2>
            <span className="notes-heading-arrow" aria-hidden="true">↘</span>
          </header>
          <div className="notes-board">
            {FEATURES.map((f, i) => (
              <motion.article
                key={f.note}
                className={`working-note working-note-${i + 1}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <span className="note-tape" aria-hidden="true" />
                <span className="note-index">{f.note}</span>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
                <span className="note-scribble" aria-hidden="true">{['start here', 'yes, even that bit', 'for whoever comes next', 'try it. then tweak it.'][i]}</span>
              </motion.article>
            ))}
          </div>
          <p className="notes-afterthought">Good work leaves room for the next person.</p>
        </div>
      </section>

      <section id="projects" className="min-h-screen flex flex-col items-center px-6 py-24">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-2 text-center"
          {...fadeUp}
        >
          <span>A few things I’ve built</span>
        </motion.h2>
        <motion.p
          className="text-slate-400 text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Fragrances, films, phones, and places to go. Different briefs, different personalities.
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
              <div className="flex-1 w-full group overflow-hidden project-frame border border-white/5 bg-black/40 hover:border-amber-500/30 transition-all duration-500">
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
                  <div className="h-px w-12 bg-amber-500/40" />
                </div>
                
                <div>
                  <h3 className="text-4xl md:text-5xl font-black text-slate-100 mb-4 tracking-tighter">
                    {p.title}
                  </h3>
                  <p className="text-slate-400 text-lg leading-relaxed mb-6 font-normal">
                    {p.desc}
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mb-8">
                    {p.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1.5 text-xs font-mono font-bold bg-amber-500/5 text-amber-400 border border-amber-500/20 rounded-lg">
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
                    <span className="font-mono text-[10px] font-bold tracking-[0.18em] uppercase">Explore the site</span>
                    <span className="w-6 h-6 grid place-items-center bg-black text-white rounded-full group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
                      <PortfolioIcon name="arrow" width={14} height={14} />
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
          <span className="text-slate-100">On my workbench</span>
        </motion.h2>
        <motion.p
          className="text-slate-400 text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          The tools I reach for, from the first component to the last interaction.
        </motion.p>
        <OrbitalSkills />
      </section>

      <section id="contact" className="flex flex-col items-center justify-center px-6 py-12">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-6 text-center"
          {...fadeUp}
        >
          <span>What are you working on?</span>
        </motion.h2>
        <motion.p
          className="text-slate-400 text-center max-w-lg mb-10"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Tell me what you’re building, where you’re stuck, or what you’d like to try.
          A rough idea is a perfectly good place to start.
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
              aria-label={s.name}
              title={s.name}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-slate-400 transition-all duration-300 hover:text-amber-400 hover:border-amber-500/40 hover:shadow-lg hover:shadow-amber-500/20"
              variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <PortfolioIcon name={s.icon} width={21} height={21} />
            </motion.a>
          ))}
        </motion.div>
        <footer className="mt-24 pt-8 border-t border-slate-800 text-slate-400 text-sm font-mono tracking-wide text-center">
          © 2026 Yusuf Mshelia. Thanks for stopping by.
        </footer>
      </section>
    </div>
  );
}

export default App;
