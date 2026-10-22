import TituloSecao from '../components/ui/TituloSecao.jsx';
import Card from '../components/ui/Card.jsx';
import { servicos } from '../data/site.js';

export default function Servicos() {
  return (
    <section id="servicos" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute -right-20 top-1/3 h-[400px] w-[400px] rounded-full bg-azul/10 blur-[130px]" />

      <div className="container-site relative">
        <TituloSecao
          etiqueta="Serviços"
          titulo="O que a gente"
          destaque="desenvolve"
          subtitulo="Soluções pensadas para a realidade de quem vive o dia a dia do negócio."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {servicos.map((s, i) => (
            <Card key={s.titulo} icone={s.icone} titulo={s.titulo} texto={s.texto} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
