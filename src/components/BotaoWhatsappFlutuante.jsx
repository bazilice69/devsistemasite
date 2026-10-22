import { motion } from 'framer-motion';
import Icone from './Icone.jsx';
import { linkWhatsapp } from '../data/site.js';

// Botão flutuante amigável — pulsa suave e mostra um balãozinho no hover.
export default function BotaoWhatsappFlutuante() {
  return (
    <motion.a
      href={linkWhatsapp}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, type: 'spring', stiffness: 200 }}
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-3"
      aria-label="Falar no WhatsApp"
    >
      <span className="hidden rounded-full border border-white/10 bg-base/90 px-4 py-2 text-sm font-medium text-claro shadow-lg backdrop-blur group-hover:block">
        Fala com a gente! 👋
      </span>
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradiente-marca text-white shadow-glow transition-transform group-hover:scale-110">
        <span className="absolute inset-0 animate-ping rounded-full bg-roxo/40" />
        <Icone nome="whatsapp" className="relative w-7 h-7" />
      </span>
    </motion.a>
  );
}
