import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import BotaoWhatsappFlutuante from './components/BotaoWhatsappFlutuante.jsx';

import Hero from './sections/Hero.jsx';
import NaoEhSoCodigo from './sections/NaoEhSoCodigo.jsx';
import Servicos from './sections/Servicos.jsx';
import Processo from './sections/Processo.jsx';
import CaseBonnaci from './sections/CaseBonnaci.jsx';
import PrecoAcessivel from './sections/PrecoAcessivel.jsx';
import SobreMim from './sections/SobreMim.jsx';
import Tecnologias from './sections/Tecnologias.jsx';
import CTAFinal from './sections/CTAFinal.jsx';

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Header />

      <main>
        <Hero />
        <NaoEhSoCodigo />
        <Servicos />
        <Processo />
        <CaseBonnaci />
        <PrecoAcessivel />
        <SobreMim />
        <Tecnologias />
        <CTAFinal />
      </main>

      <Footer />
      <BotaoWhatsappFlutuante />
    </div>
  );
}
