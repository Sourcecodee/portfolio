import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';

const SKILLS = [
  { name: 'React', category: 'Frontend' },
  { name: 'Next.js', category: 'Framework' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'JavaScript', category: 'Core' },
  { name: 'Tailwind', category: 'Styling' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Express', category: 'API Layer' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'Framer Motion', category: 'Motion' },
];

export function OrbitalSkills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <div ref={containerRef} className="w-full max-w-4xl mx-auto py-12 md:py-32 flex flex-col items-start md:items-center relative gap-4 md:gap-1 px-8 md:px-0">
      {/* The Central Cyber-Spine Architecture */}
      <div 
        className="absolute left-8 md:left-1/2 -ms-px md:-translate-x-1/2 w-px bg-white/10 -z-10"
        style={{ top: '144px', bottom: '144px' }}
      />
      
      {/* Scroll-Synced Kinetic Pulse */}
      <motion.div 
        className="absolute left-8 md:left-1/2 -ms-px md:-translate-x-1/2 w-px bg-indigo-500/40 -z-10 origin-top"
        style={{ 
          top: '144px', 
          bottom: '144px', 
          scaleY: scrollYProgress 
        }}
      />

      {SKILLS.map((skill, i) => (
        <SkillNode key={i} skill={skill} index={i} />
      ))}
    </div>
  );
}

function SkillNode({ skill, index }: { skill: any, index: number }) {
  const isRight = index % 2 === 0;

  return (
    <motion.div
      className={`w-full flex flex-row items-center justify-start ${
        isRight ? 'md:justify-end md:pr-[50%]' : 'md:justify-start md:pl-[50%]'
      } group cursor-cell py-12 md:py-8`}
      initial={{ opacity: 0, x: isRight ? 100 : -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ 
        type: "spring",
        stiffness: 70,
        damping: 25,
        delay: index * 0.05 
      }}
    >
      <div className={`flex items-center ${isRight ? 'md:flex-row-reverse' : 'flex-row'} relative`}>
        {/* Connection Node */}
        <div className="w-2.5 h-2.5 rounded-full border border-white/40 bg-slate-900 group-hover:scale-150 group-hover:bg-indigo-500 group-hover:border-indigo-400 transition-all duration-300 relative z-10" />
        
        {/* Connecting Line Beam */}
        <motion.div 
          className="h-px bg-white/20 origin-left hidden md:block"
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          transition={{ 
            type: "spring",
            stiffness: 50,
            damping: 20,
            delay: 0.3 
          }}
          animate={{
            backgroundColor: "rgba(255, 255, 255, 0.2)"
          }}
          whileHover={{
            backgroundColor: "#6366f1"
          }}
        />

        {/* The Skill Manifesto Block (No Cards, Pure Architecture) */}
        <div className={`flex flex-col ${isRight ? 'items-end mr-6 text-right' : 'items-start ml-6 text-left'} min-w-[200px]`}>
          <span className="text-[10px] font-mono text-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 tracking-[0.5em] mb-1">
            {skill.category}
          </span>
          <h4 className="text-3xl md:text-5xl font-black text-white/40 group-hover:text-white transition-all duration-500 tracking-tighter uppercase line-height-[0.8]">
            {skill.name}
          </h4>

          {/* Holographic Shift Underline */}
          <div className="w-0 h-px bg-indigo-500 group-hover:w-full transition-all duration-700 mt-2" />
        </div>
      </div>
    </motion.div>
  );
}
