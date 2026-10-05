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
        className="absolute left-8 md:left-1/2 -ms-px md:-translate-x-1/2 w-px bg-amber-500/40 -z-10 origin-top"
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

function SkillNode({ skill, index }: { skill: (typeof SKILLS)[number], index: number }) {
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
        <div className="w-2.5 h-2.5 rounded-full border border-white/40 bg-slate-900 group-hover:scale-150 group-hover:bg-amber-500 group-hover:border-amber-400 transition-all duration-300 relative z-10" />
        
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
            backgroundColor: "#e6b85c"
          }}
        />

        {/* The Skill Manifesto Block (No Cards, Pure Architecture) */}
        <div className={`flex flex-col ${isRight ? 'md:items-end md:mr-6 md:text-right' : 'md:items-start md:ml-6 md:text-left'} items-start ml-6 text-left min-w-0`}>
          <span className="text-[11px] font-mono text-slate-400 tracking-normal mb-1">
            {skill.category}
          </span>
          <h4 style={{ rotate: `${[-2, 1.5, -1, 2][index % 4]}deg` }} className="skill-lettering text-white/85 group-hover:text-white transition-colors duration-300">
            {skill.name}
          </h4>

          {/* Holographic Shift Underline */}
          <div className="w-0 h-px bg-amber-500 group-hover:w-full transition-all duration-700 mt-2" />
        </div>
      </div>
    </motion.div>
  );
}
