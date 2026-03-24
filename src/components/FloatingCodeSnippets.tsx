import { motion } from 'framer-motion';

const SNIPPETS = [
  '<Home />',
  'styled-components',
  'useState()',
  'useEffect()',
  'className',
  'const App = ()',
  'import React',
  'npm install',
  'return (',
  '<div>',
  'async/await',
  'TypeScript',
];

export function FloatingCodeSnippets() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-5" aria-hidden>
      {SNIPPETS.map((snippet, i) => (
        <motion.span
          key={i}
          className="absolute text-indigo-400/15 font-mono text-sm whitespace-nowrap select-none"
          style={{
            left: `${10 + (i * 7) % 80}%`,
            top: `${15 + (i * 11) % 70}%`,
          }}
          animate={{
            opacity: [0.1, 0.25, 0.1],
            y: [0, -8, 0],
          }}
          transition={{
            duration: 4 + (i % 3),
            repeat: Infinity,
            delay: i * 0.3,
          }}
        >
          {snippet}
        </motion.span>
      ))}
    </div>
  );
}
