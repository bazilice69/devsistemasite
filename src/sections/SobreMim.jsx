import { motion } from 'framer-motion';
import { empresa } from '../data/site.js';

export default function SobreMim() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-roxo/10 blur-[140px]" />

      <div className="container-site relative grid items-center gap-12 lg:grid-cols-[auto,1fr] lg:gap-16">
        {/* Foto (placeholder) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto"
        >
          <div className="relative">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradiente-marca opacity-40 blur-xl" />
            {/* >>> Troque por uma foto sua: coloque /src/assets/foto.jpg e use <img> <<< */}
            <div className="relative flex h-52 w-52 items-center justify-center overflow-hidden rounded-[2rem] border border-white/10 bg-card sm:h-60 sm:w-60">
              <span className="font-mono text-sm text-suave">[ sua foto aqui ]</span>
            </div>
          </div>
        </motion.div>

        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-roxo">Sobre</span>
          <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
            Quem está por trás da <span className="texto-gradiente">{empresa.nome}</span>
          </h2>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-suave">
            <p>
              A {empresa.nome} surgiu de alguém que conhece tecnologia, mas também conhece a
              realidade de quem trabalha todos os dias e precisa que a tecnologia{' '}
              <span className="text-claro font-semibold">realmente funcione.</span>
            </p>
            <p>
              Minha experiência vem do contato direto com pessoas, com atendimento e com os
              bastidores de quem faz um negócio girar. É daí que nasce o jeito de trabalhar: ouvir
              antes de propor, entender antes de desenvolver.
            </p>
            <p className="border-l-2 border-roxo/60 pl-4 text-claro">
              “{empresa.filosofia}”
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
