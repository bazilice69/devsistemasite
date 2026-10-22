import { motion } from 'framer-motion';
import Botao from '../components/ui/Botao.jsx';
import { linkWhatsapp } from '../data/site.js';

export default function CTAFinal() {
  return (
    <section id="contato" className="relative py-24 sm:py-32">
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-card to-surface p-10 text-center sm:p-16"
        >
          {/* Brilhos */}
          <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-roxo/25 blur-[120px]" />
          <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-azul/25 blur-[120px]" />
          <div className="pointer-events-none absolute inset-0 grid-tech opacity-40" />

          <div className="relative">
            <h2 className="mx-auto max-w-3xl text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
              Tem um problema que poderia ser resolvido com{' '}
              <span className="texto-gradiente">tecnologia?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-suave">
              Vamos conversar sobre a sua ideia. Sem compromisso, sem complicação.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Botao href={linkWhatsapp} externo icone="whatsapp">
                Falar com a Dev e Sistemas
              </Botao>
              <Botao href="#projetos" variante="secundario" icone="seta">
                Conhecer nossos projetos
              </Botao>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
