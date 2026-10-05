import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { PortfolioIcon, type IconName } from './PortfolioIcon';

const NAV_ITEMS = [
  { id: 'hero', icon: 'signature' as IconName, label: 'Yusuf' },
  { id: 'projects', icon: 'work' as IconName, label: 'Work' },
  { id: 'skills', icon: 'tools' as IconName, label: 'Tools' },
  { id: 'contact', icon: 'letter' as IconName, label: 'Hello' },
];

export function MorphingNav() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = NAV_ITEMS.findIndex((item) => item.id === entry.target.id);
            if (idx !== -1) setActiveIndex(idx);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px', threshold: 0 }
    );

    NAV_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <motion.nav
      aria-label="Main navigation"
      className="portfolio-nav"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div className="portfolio-nav-items">
        {NAV_ITEMS.map((item, i) => (
          <button
            key={item.id}
            aria-label={item.label}
            aria-current={activeIndex === i ? 'location' : undefined}
            onClick={() => handleClick(item.id)}
            className="portfolio-nav-button"
          >
            <PortfolioIcon name={item.icon} width={22} height={22} className={`relative z-10 ${activeIndex === i ? 'text-white' : ''}`} />
            <span className="relative z-10 text-xs font-mono">{item.label}</span>
            {activeIndex === i && (
              <motion.span
                layoutId="nav-indicator"
                className="nav-active absolute inset-0"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>
    </motion.nav>
  );
}
