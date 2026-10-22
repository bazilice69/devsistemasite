import Logo from './Logo.jsx';
import Icone from './Icone.jsx';
import { navItems, empresa, linkWhatsapp, linkInstagram, linkEmail } from '../data/site.js';

export default function Footer() {
  const ano = new Date().getFullYear();

  const sociais = [
    { nome: 'whatsapp', href: linkWhatsapp, label: 'WhatsApp' },
    { nome: 'instagram', href: linkInstagram, label: 'Instagram' },
    { nome: 'email', href: linkEmail, label: 'E-mail' },
  ];

  return (
    <footer className="relative border-t border-white/5 bg-surface/50">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-roxo/40 to-transparent" />

      <div className="container-site py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr,1fr,1fr]">
          {/* Marca */}
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-suave">{empresa.slogan}</p>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-suave/70">Navegação</p>
            <ul className="mt-4 space-y-2.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-sm text-suave transition-colors hover:text-claro">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-suave/70">Contato</p>
            <div className="mt-4 flex flex-col gap-3">
              {sociais.map((s) => (
                <a
                  key={s.nome}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 text-sm text-suave transition-colors hover:text-claro"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-roxo transition-all group-hover:border-roxo/40 group-hover:text-azul">
                    <Icone nome={s.nome} className="w-4 h-4" />
                  </span>
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-suave">
            © {ano} {empresa.nome}. Todos os direitos reservados.
          </p>
          <p className="font-mono text-xs text-suave/60">{empresa.slogan}</p>
        </div>
      </div>
    </footer>
  );
}
