import { motion } from 'framer-motion';
import TituloSecao from '../components/ui/TituloSecao.jsx';
import Card from '../components/ui/Card.jsx';
import Mascote from '../components/Mascote.jsx';
import { pilares } from '../data/site.js';

export default function NaoEhSoCodigo() {
  return (
    <section id="sobre" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-roxo/40 to-transparent" />

      <div className="container-site">
        {/* Topo: mascote amigável + título */}
        <div className="grid items-center gap-10 lg:grid-cols-[auto,1fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto"
          >
            <Mascote className="h-44 w-44 sm:h-52 sm:w-52" />
          </motion.div>

          <TituloSecao
            etiqueta="Nosso jeito"
            titulo="Não é só código."
            destaque="É entender o problema."
            centralizado={false}
            subtitulo="Antes de pensar em tecnologia, precisamos entender como o negócio funciona. Cada empresa tem uma rotina, uma necessidade e uma dificuldade diferente. Nosso trabalho é transformar isso em soluções simples, funcionais e acessíveis."
          />
        </div>

        {/* Pilares */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pilares.map((p, i) => (
            <Card key={p.titulo} icone={p.icone} titulo={p.titulo} texto={p.texto} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
