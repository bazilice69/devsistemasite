import { motion } from 'framer-motion';

// Cabeçalho padrão das seções: etiqueta pequena + título grande + subtítulo.
export default function TituloSecao({ etiqueta, titulo, destaque, subtitulo, centralizado = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className={`max-w-3xl ${centralizado ? 'mx-auto text-center' : ''}`}
    >
      {etiqueta && (
        <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-roxo">
          {etiqueta}
        </span>
      )}
      <h2 className="mt-3 text-3xl font-black leading-tight tracking-tight sm:text-4xl md:text-5xl">
        {titulo} {destaque && <span className="texto-gradiente">{destaque}</span>}
      </h2>
      {subtitulo && (
        <p className="mt-4 text-base leading-relaxed text-suave sm:text-lg">{subtitulo}</p>
      )}
    </motion.div>
  );
}
