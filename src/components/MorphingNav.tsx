import { motion, useScroll } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Home, User, Briefcase, Code, Mail } from 'lucide-react';

const NAV_ITEMS = [
  { id: 'hero', icon: Home, label: 'Home' },
  { id: 'about', icon: User, label: 'About' },
  { id: 'projects', icon: Briefcase, label: 'Work' },
  { id: 'skills', icon: Code, label: 'Skills' },
  { id: 'contact', icon: Mail, label: 'Contact' },
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
      <div className="flex items-center gap-2 px-3 py-2 rounded-full glass-strong shadow-2xl shadow-black/50">
        {NAV_ITEMS.map((item, i) => (
          <button
            key={item.id}
            onClick={() => handleClick(item.id)}
            className="relative w-10 h-10 flex items-center justify-center rounded-full text-slate-400/80 hover:text-white transition-all duration-300"
          >
            <item.icon
              size={18}
              className={`relative z-10 ${activeIndex === i ? 'text-white' : ''}`}
            />
            {activeIndex === i && (
              <motion.span
                layoutId="nav-indicator"
                className="absolute inset-0 rounded-full bg-indigo-500/20 border border-indigo-500/40 shadow-lg shadow-indigo-500/10 -z-10"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>
    </motion.nav>
  );
}
