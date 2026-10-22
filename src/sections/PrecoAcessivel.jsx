import { motion } from 'framer-motion';
import Icone from '../components/Icone.jsx';
import { publicoAlvo } from '../data/site.js';

export default function PrecoAcessivel() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="borda-neon relative overflow-hidden rounded-3xl border border-white/10 bg-card/60 p-8 backdrop-blur-sm sm:p-12"
        >
          {/* brilho interno */}
          <div className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 rounded-full bg-gradiente-suave blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-roxo">
                Custo-benefício
              </span>
              <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
                Tecnologia de qualidade não precisa ser <span className="texto-gradiente">inacessível.</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-suave">
                Pequenos negócios também merecem sistemas profissionais. Nosso objetivo é encontrar
                soluções que façam sentido para a realidade e o orçamento de cada empresa.
              </p>
            </div>

            {/* Quem atendemos */}
            <div>
              <p className="mb-4 text-sm font-semibold text-claro">Feito para quem é como você:</p>
              <div className="flex flex-wrap gap-2.5">
                {publicoAlvo.map((p, i) => (
                  <motion.span
                    key={p}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-claro transition-colors hover:border-azul/50"
                  >
                    <Icone nome="raio" className="w-3.5 h-3.5 text-azul" />
                    {p}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
