import { motion } from 'framer-motion';
import { tecnologias } from '../data/site.js';

// Seção secundária e discreta: o foco é solução, não exibir tecnologia.
export default function Tecnologias() {
  return (
    <section className="py-16">
      <div className="container-site">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-suave/70">
          Tecnologias que usamos nos bastidores
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          {tecnologias.map((t, i) => (
            <motion.span
              key={t}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="rounded-lg border border-white/5 bg-white/[0.03] px-4 py-2 font-mono text-sm text-suave transition-colors hover:border-white/15 hover:text-claro"
            >
              {t}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
