import { motion } from 'framer-motion';
import { useState } from 'react';

const SKILLS = [
  { name: 'React', level: 95, color: '#61DAFB' },
  { name: 'TypeScript', level: 90, color: '#3178C6' },
  { name: 'JavaScript', level: 93, color: '#F7DF1E' },
  { name: 'Tailwind', level: 92, color: '#06B6D4' },
  { name: 'Node.js', level: 80, color: '#339933' },
];

export function OrbitalSkills() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const radius = 140;
  const count = SKILLS.length;

  return (
    <div className="relative flex flex-col items-center justify-center min-h-[400px] py-12">
      <div className="relative w-[320px] h-[320px]">
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/40">
            <span className="text-3xl font-bold text-white">N</span>
          </div>
        </motion.div>

        {SKILLS.map((skill, i) => {
          const angle = (i / count) * 2 * Math.PI - Math.PI / 2;
          const x = Math.cos(angle) * radius + 160;
          const y = Math.sin(angle) * radius + 160;
          const isHovered = hoveredIndex === i;

          return (
            <motion.div
              key={skill.name}
              className="absolute cursor-pointer"
              style={{
                left: x - 24,
                top: y - 24,
                width: 48,
                height: 48,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <motion.div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-xs font-semibold bg-black/60 backdrop-blur border border-white/10"
                animate={{
                  scale: isHovered ? 1.2 : 1,
                  boxShadow: isHovered ? `0 0 20px ${skill.color}40` : 'none',
                }}
              >
                {skill.name.slice(0, 2)}
              </motion.div>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-3 py-1.5 rounded-lg glass-strong text-slate-100 text-xs whitespace-nowrap"
                >
                  {skill.name} {skill.level}%
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>

      <div className="mt-16 w-full max-w-md space-y-4">
        {SKILLS.map((skill, i) => (
          <motion.div
            key={skill.name}
            className="rounded-xl glass p-4 transition-all duration-300 hover:border-indigo-500/30"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 + i * 0.1 }}
          >
            <div className="flex justify-between mb-2">
              <span className="font-medium text-slate-100">{skill.name}</span>
              <span className="text-gray-400">{skill.level}%</span>
            </div>
            <div className="h-2 rounded-full bg-slate-700/50 overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ backgroundColor: skill.color }}
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.6 + i * 0.1 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
