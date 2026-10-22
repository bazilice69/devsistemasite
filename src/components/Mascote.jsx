import { motion } from 'framer-motion';

// Mascote amigável da Dev e Sistemas — um "robôzinho dev" simpático feito em
// SVG. Acena (a mãozinha balança) e tem um brilho suave. Deixa o site humano.
export default function Mascote({ className = 'w-40 h-40' }) {
  return (
    <motion.div
      className={`relative ${className}`}
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
    >
      {/* Glow */}
      <div className="absolute inset-0 rounded-full bg-gradiente-suave blur-2xl" />

      <svg viewBox="0 0 200 200" className="relative h-full w-full">
        <defs>
          <linearGradient id="corpoGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#A855F7" />
            <stop offset="100%" stopColor="#2563EB" />
          </linearGradient>
          <linearGradient id="telaGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0b0b14" />
            <stop offset="100%" stopColor="#141427" />
          </linearGradient>
        </defs>

        {/* Antena */}
        <line x1="100" y1="34" x2="100" y2="54" stroke="url(#corpoGrad)" strokeWidth="4" strokeLinecap="round" />
        <motion.circle
          cx="100" cy="30" r="7" fill="#00A3FF"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        {/* Cabeça */}
        <rect x="48" y="52" width="104" height="86" rx="26" fill="url(#corpoGrad)" />
        {/* Tela do rosto */}
        <rect x="60" y="64" width="80" height="62" rx="18" fill="url(#telaGrad)" />

        {/* Olhos (piscam) */}
        <motion.g
          animate={{ scaleY: [1, 1, 0.1, 1] }}
          transition={{ duration: 4, repeat: Infinity, times: [0, 0.85, 0.9, 1] }}
          style={{ transformOrigin: '100px 90px' }}
        >
          <circle cx="84" cy="90" r="7" fill="#00A3FF" />
          <circle cx="116" cy="90" r="7" fill="#00A3FF" />
        </motion.g>
        {/* Sorriso */}
        <path d="M86 108 Q100 118 114 108" stroke="#A855F7" strokeWidth="4" fill="none" strokeLinecap="round" />

        {/* Corpo */}
        <rect x="66" y="138" width="68" height="40" rx="16" fill="url(#corpoGrad)" opacity="0.9" />
        <rect x="88" y="146" width="24" height="5" rx="2.5" fill="#ffffff" opacity="0.4" />

        {/* Braço que acena */}
        <motion.g
          style={{ transformOrigin: '150px 150px' }}
          animate={{ rotate: [0, -24, 0, -24, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, repeatDelay: 1.6 }}
        >
          <line x1="150" y1="150" x2="168" y2="130" stroke="url(#corpoGrad)" strokeWidth="7" strokeLinecap="round" />
          <circle cx="170" cy="126" r="8" fill="#A855F7" />
        </motion.g>
        {/* Braço parado */}
        <line x1="50" y1="150" x2="34" y2="162" stroke="url(#corpoGrad)" strokeWidth="7" strokeLinecap="round" />
        <circle cx="32" cy="164" r="8" fill="#2563EB" />
      </svg>
    </motion.div>
  );
}
