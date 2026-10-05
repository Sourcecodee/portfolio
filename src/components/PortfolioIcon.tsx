import type { SVGProps } from 'react';

export type IconName = 'signature' | 'work' | 'tools' | 'letter' | 'arrow' | 'github' | 'linkedin' | 'send';

const drawings: Record<IconName, React.ReactNode> = {
  signature: <><path d="M4 5l5 7v7M14 5l-5 7M14 19V5l4 6 4-6v14" /></>,
  work: <><rect x="3" y="6" width="15" height="14" rx="1" /><path d="M7 6V3h14v14h-3M3 11h15M6 9h.01M9 9h.01M8 15l-2 2 2 1M13 15l2 2-2 1" /></>,
  tools: <><path d="M4 20L15 9M14 3a6 6 0 0 0-5 8l4 4a6 6 0 0 0 8-5l-4 2-4-4 1-5Z" /><circle cx="5" cy="19" r="2" /></>,
  letter: <><path d="M3 7h18v14H3ZM3 7l9 7 9-7M7 7V3h10v4M10 5h4" /></>,
  arrow: <><path d="M5 19L19 5M7 5h12v12" /></>,
  github: <><path d="M9 19c-4 1-4-2-6-2M9 22v-3c0-1 .3-2 1-2-4-.5-7-2-7-6 0-2 1-3 2-4-.3-1-.3-3 0-4 2 0 3 1 4 2a12 12 0 0 1 6 0c1-1 2-2 4-2 .3 1 .3 3 0 4 1 1 2 2 2 4 0 4-3 5.5-7 6 1 0 1 1 1 2v3" /></>,
  linkedin: <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M7 10v7M7 7h.01M11 17v-7M11 13c0-4 6-4 6 0v4" /></>,
  send: <><path d="M3 11L21 3l-8 18-2-8-8-2ZM11 13L21 3" /></>,
};

export function PortfolioIcon({ name, ...props }: SVGProps<SVGSVGElement> & { name: IconName }) {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{drawings[name]}</svg>;
}
