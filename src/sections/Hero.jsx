import { motion } from 'framer-motion';
import Botao from '../components/ui/Botao.jsx';
import Icone from '../components/Icone.jsx';
import { linkWhatsapp } from '../data/site.js';

// Mockup de dashboard/código feito 100% em HTML/CSS (nada de imagem).
function MockupSistema() {
  return (
    <div className="relative">
      {/* Glow de fundo */}
      <div className="absolute -inset-6 rounded-[2.5rem] bg-gradiente-suave blur-2xl" />

      <div className="relative card-vidro overflow-hidden rounded-3xl shadow-2xl">
        {/* Barra da "janela" */}
        <div className="flex items-center gap-2 border-b border-white/5 bg-white/5 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-rose-400/80" />
          <span className="h-3 w-3 rounded-full bg-amber-400/80" />
          <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
          <span className="ml-3 font-mono text-[11px] text-suave">painel.devesistemas</span>
        </div>

        <div className="grid grid-cols-5">
          {/* Mini-sidebar */}
          <div className="col-span-1 hidden flex-col gap-3 border-r border-white/5 p-4 sm:flex">
            {['sistema', 'clientes', 'agenda', 'financeiro', 'contratos'].map((n, i) => (
              <div
                key={n}
                className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                  i === 0 ? 'bg-gradiente-marca text-white' : 'bg-white/5 text-suave'
                }`}
              >
                <Icone nome={n} className="w-4 h-4" />
              </div>
            ))}
          </div>

          {/* Conteúdo */}
          <div className="col-span-5 space-y-4 p-5 sm:col-span-4">
            {/* KPIs */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { v: '128', l: 'Clientes', c: 'text-roxo' },
                { v: 'R$ 14k', l: 'No mês', c: 'text-azul' },
                { v: '32', l: 'Ativos', c: 'text-emerald-400' },
              ].map((k) => (
                <div key={k.l} className="rounded-xl border border-white/5 bg-white/5 p-3">
                  <p className={`text-lg font-black ${k.c}`}>{k.v}</p>
                  <p className="text-[10px] uppercase tracking-wider text-suave">{k.l}</p>
                </div>
              ))}
            </div>

            {/* "Gráfico" de barras */}
            <div className="rounded-xl border border-white/5 bg-white/5 p-4">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-xs font-semibold text-claro">Movimentação</span>
                <span className="font-mono text-[10px] text-suave">últimos 7 dias</span>
              </div>
              <div className="flex h-24 items-end gap-2">
                {[40, 65, 50, 80, 55, 90, 70].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ delay: 0.6 + i * 0.08, duration: 0.6, ease: 'easeOut' }}
                    className="flex-1 rounded-t-md bg-gradient-to-t from-roxo/40 to-azul"
                  />
                ))}
              </div>
            </div>

            {/* Linhas de "lista" */}
            <div className="space-y-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-3 rounded-lg border border-white/5 bg-white/[0.03] p-2.5">
                  <div className="h-7 w-7 rounded-full bg-gradiente-marca opacity-80" />
                  <div className="flex-1">
                    <div className="h-2 w-1/3 rounded bg-white/15" />
                    <div className="mt-1.5 h-2 w-1/4 rounded bg-white/10" />
                  </div>
                  <div className="h-5 w-12 rounded-full bg-emerald-400/20" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Chip de código flutuante */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -left-4 bottom-10 hidden rounded-xl border border-white/10 bg-base/90 p-3 font-mono text-[11px] shadow-glow backdrop-blur sm:block"
      >
        <span className="text-azul">function</span>{' '}
        <span className="text-claro">resolver</span>
        <span className="text-suave">(problema) {'{'}</span>
        <br />
        <span className="pl-3 text-roxo">return</span>{' '}
        <span className="text-emerald-400">solução</span>
        <span className="text-suave">;</span>
        <br />
        <span className="text-suave">{'}'}</span>
      </motion.div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Fundo: grade + brilhos */}
      <div className="absolute inset-0 grid-tech opacity-60" />
      <div className="pointer-events-none absolute -top-40 -right-20 h-[500px] w-[500px] rounded-full bg-roxo/20 blur-[140px]" />
      <div className="pointer-events-none absolute top-40 -left-20 h-[400px] w-[400px] rounded-full bg-azul/20 blur-[140px]" />

      <div className="container-site relative grid items-center gap-14 lg:grid-cols-2">
        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-suave">
            <span className="h-2 w-2 animate-pulse-glow rounded-full bg-emerald-400" />
            Desenvolvimento de sistemas sob medida
          </div>

          <h1 className="text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
            Sistemas que resolvem <span className="texto-gradiente">problemas reais.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-suave sm:text-lg">
            Desenvolvemos sistemas e soluções digitais personalizados para ajudar pequenos
            negócios a organizar processos, economizar tempo e trabalhar melhor.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Botao href="#projetos" icone="seta">Conheça nossos projetos</Botao>
            <Botao href={linkWhatsapp} externo variante="secundario" icone="whatsapp">
              Fale conosco
            </Botao>
          </div>

          <p className="mt-8 font-mono text-xs text-suave/70">
            {'// '}Tecnologia para ajudar pessoas a trabalharem melhor.
          </p>
        </motion.div>

        {/* Composição visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <MockupSistema />
        </motion.div>
      </div>
    </section>
  );
}
