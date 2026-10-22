import { motion } from 'framer-motion';
import TituloSecao from '../components/ui/TituloSecao.jsx';
import Icone from '../components/Icone.jsx';
import Botao from '../components/ui/Botao.jsx';
import { bonnaciModulos } from '../data/site.js';

export default function CaseBonnaci() {
  return (
    <section id="projetos" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute left-0 top-1/4 h-[450px] w-[450px] rounded-full bg-roxo/10 blur-[140px]" />

      <div className="container-site relative">
        <div className="mb-4 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-xs font-bold text-emerald-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400" /> Projeto real, no ar
          </span>
        </div>

        <TituloSecao
          etiqueta="Case · Bonnaci Rental"
          titulo="Um sistema criado para uma"
          destaque="necessidade real"
          subtitulo="O Bonnaci Rental nasceu da rotina real de uma loja do segmento de noivas, vestidos de festa, ternos e eventos. A proposta foi transformar processos que dependiam de papel, planilhas e controles manuais em uma solução organizada e centralizada."
        />

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          {/* Mockup do sistema */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -inset-5 rounded-[2.5rem] bg-gradiente-suave blur-2xl" />
            <div className="card-vidro relative overflow-hidden rounded-3xl shadow-2xl">
              <div className="flex items-center gap-2 border-b border-white/5 bg-white/5 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-rose-400/80" />
                <span className="h-3 w-3 rounded-full bg-amber-400/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
                <span className="ml-3 font-mono text-[11px] text-suave">bonnaci rental · painel</span>
              </div>
              <div className="p-5">
                <p className="mb-4 text-xs font-bold uppercase tracking-widest text-suave">Hoje na loja</p>
                <div className="mb-4 grid grid-cols-3 gap-3">
                  {[
                    { v: '3', l: 'Provas', c: 'text-azul' },
                    { v: '5', l: 'Locações', c: 'text-roxo' },
                    { v: '2', l: 'Retiradas', c: 'text-emerald-400' },
                  ].map((k) => (
                    <div key={k.l} className="rounded-xl border border-white/5 bg-white/5 p-3 text-center">
                      <p className={`text-xl font-black ${k.c}`}>{k.v}</p>
                      <p className="text-[10px] uppercase tracking-wider text-suave">{k.l}</p>
                    </div>
                  ))}
                </div>
                {/* "vestidos" */}
                <div className="grid grid-cols-4 gap-2">
                  {['#fdf2f8', '#eef2ff', '#f0fdf4', '#fef3c7', '#f1f5f9', '#fae8ff', '#ecfeff', '#fff1f2'].map((bg, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.05 }}
                      className="flex aspect-[3/4] items-center justify-center rounded-lg"
                      style={{ background: bg }}
                    >
                      <Icone nome="acervo" className="w-5 h-5 text-slate-400" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Módulos + texto */}
          <div>
            <h3 className="text-xl font-bold text-claro">
              Tudo o que a loja precisa, em um só lugar
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-suave">
              A tecnologia deve <span className="text-claro font-semibold">agregar</span> ao trabalho do
              profissional, nunca substituir a sua experiência. Por isso o Bonnaci reúne os módulos
              que a loja usa de verdade no dia a dia:
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {bonnaciModulos.map((m, i) => (
                <motion.div
                  key={m.nome}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  whileHover={{ y: -4 }}
                  className="flex items-center gap-2.5 rounded-xl border border-white/5 bg-card/60 px-3 py-2.5 backdrop-blur-sm transition-colors hover:border-roxo/40"
                >
                  <Icone nome={m.icone} className="w-4 h-4 text-azul" />
                  <span className="text-sm font-medium text-claro">{m.nome}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-8">
              <Botao href="#contato" icone="seta">Quero um sistema assim</Botao>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
