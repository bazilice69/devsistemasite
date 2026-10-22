import { motion } from 'framer-motion';
import TituloSecao from '../components/ui/TituloSecao.jsx';
import { processo } from '../data/site.js';

export default function Processo() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container-site">
        <TituloSecao
          etiqueta="Como trabalhamos"
          titulo="Você participa de"
          destaque="cada etapa"
          subtitulo="Nada de sumir e aparecer com o sistema pronto. A gente caminha junto, do começo ao fim."
        />

        <div className="relative mt-16">
          {/* Linha central (desktop) */}
          <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-roxo/60 via-azul/40 to-transparent lg:block" />

          <div className="space-y-6 lg:space-y-0">
            {processo.map((etapa, i) => {
              const esquerda = i % 2 === 0;
              return (
                <motion.div
                  key={etapa.numero}
                  initial={{ opacity: 0, x: esquerda ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5 }}
                  className={`relative lg:flex lg:w-1/2 lg:items-center ${
                    esquerda ? 'lg:pr-12' : 'lg:ml-auto lg:pl-12'
                  }`}
                >
                  {/* Ponto na linha */}
                  <span className="absolute top-8 hidden h-4 w-4 rounded-full bg-gradiente-marca shadow-glow lg:block"
                    style={esquerda ? { right: '-8px' } : { left: '-8px' }} />

                  <div className="borda-neon group rounded-2xl border border-white/5 bg-card/60 p-6 backdrop-blur-sm transition-colors hover:bg-card">
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-3xl font-black text-white/10 transition-colors group-hover:text-roxo/50">
                        {etapa.numero}
                      </span>
                      <div>
                        <h3 className="text-lg font-bold text-claro">{etapa.titulo}</h3>
                        <p className="mt-1 text-sm text-suave">{etapa.texto}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
