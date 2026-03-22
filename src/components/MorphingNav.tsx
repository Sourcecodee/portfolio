import { motion, useScroll } from 'framer-motion';
import { useState, useEffect } from 'react';

const NAV_ITEMS = [
  { id: 'hero', icon: '⌂', label: 'Home' },
  { id: 'about', icon: '👤', label: 'About' },
  { id: 'projects', icon: '💼', label: 'Work' },
  { id: 'skills', icon: '</>', label: 'Skills' },
  { id: 'contact', icon: '✉', label: 'Contact' },
];

export function MorphingNav() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsub = scrollY.on('change', (y) => {
      const vh = window.innerHeight;
      const section = Math.min(Math.floor(y / vh), NAV_ITEMS.length - 1);
      setActiveIndex(Math.max(0, section));
    });
    return () => unsub();
  }, [scrollY]);

  const handleClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div className="flex items-center gap-1 px-4 py-2 rounded-full glass-strong shadow-xl shadow-indigo-500/5">
        {NAV_ITEMS.map((item, i) => (
          <button
            key={item.id}
            onClick={() => handleClick(item.id)}
            className="relative w-10 h-10 flex items-center justify-center rounded-full text-slate-400 hover:text-indigo-300 transition-colors duration-300"
          >
            <span
              className={`relative z-10 text-sm ${activeIndex === i ? 'text-white' : ''}`}
              style={{ fontFamily: item.icon === '</>' ? 'monospace' : 'inherit' }}
            >
              {item.icon}
            </span>
            {activeIndex === i && (
              <motion.span
                layoutId="nav-indicator"
                className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 -z-10 shadow-lg shadow-indigo-500/30"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>
    </motion.nav>
  );
}
