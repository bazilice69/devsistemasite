import { useEffect, useState } from 'react';
import Logo from './Logo.jsx';
import Botao from './ui/Botao.jsx';
import Icone from './Icone.jsx';
import { navItems, linkWhatsapp } from '../data/site.js';

export default function Header() {
  const [rolou, setRolou] = useState(false);
  const [menuAberto, setMenuAberto] = useState(false);

  useEffect(() => {
    const onScroll = () => setRolou(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        rolou ? 'border-b border-white/5 bg-base/80 backdrop-blur-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container-site flex items-center justify-between py-4">
        <Logo />

        {/* Desktop */}
        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-suave transition-colors hover:text-claro"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <Botao href={linkWhatsapp} externo icone="seta" className="px-5 py-2.5 text-xs">
            Falar conosco
          </Botao>
        </div>

        {/* Botão mobile */}
        <button
          onClick={() => setMenuAberto((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-claro lg:hidden"
          aria-label="Abrir menu"
        >
          <span className="relative block h-4 w-5">
            <span className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition-all ${menuAberto ? 'top-2 rotate-45' : ''}`} />
            <span className={`absolute left-0 top-1.5 h-0.5 w-5 bg-current transition-all ${menuAberto ? 'opacity-0' : ''}`} />
            <span className={`absolute left-0 top-3 h-0.5 w-5 bg-current transition-all ${menuAberto ? 'top-2 -rotate-45' : ''}`} />
          </span>
        </button>
      </nav>

      {/* Menu mobile (drawer) */}
      <div
        className={`overflow-hidden border-t border-white/5 bg-base/95 backdrop-blur-lg transition-all duration-300 lg:hidden ${
          menuAberto ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="container-site flex flex-col gap-1 py-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuAberto(false)}
              className="flex items-center justify-between rounded-lg px-3 py-3 text-sm font-medium text-suave transition-colors hover:bg-white/5 hover:text-claro"
            >
              {item.label}
              <Icone nome="seta" className="w-4 h-4 opacity-40" />
            </a>
          ))}
          <Botao href={linkWhatsapp} externo icone="whatsapp" className="mt-2">
            Falar conosco
          </Botao>
        </div>
      </div>
    </header>
  );
}
