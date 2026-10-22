import { motion } from 'framer-motion';
import Icone from '../Icone.jsx';

// Card animado com ícone, título e texto. Entra com fade-up e tem glow no hover.
export default function Card({ icone, titulo, texto, index = 0, numero }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="borda-neon group relative h-full rounded-2xl border border-white/5 bg-card/60 p-6 backdrop-blur-sm transition-colors duration-300 hover:bg-card"
    >
      {numero && (
        <span className="absolute right-5 top-4 font-mono text-sm font-bold text-white/10 transition-colors group-hover:text-roxo/40">
          {numero}
        </span>
      )}

      {icone && (
        <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-roxo transition-all duration-300 group-hover:border-roxo/40 group-hover:text-azul group-hover:shadow-glow">
          <Icone nome={icone} className="w-6 h-6" />
        </div>
      )}

      <h3 className="text-lg font-bold text-claro">{titulo}</h3>
      <p className="mt-2 text-sm leading-relaxed text-suave">{texto}</p>
    </motion.div>
  );
}
