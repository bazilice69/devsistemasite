import Icone from '../Icone.jsx';

// Botão reutilizável. variante: 'primario' | 'secundario' | 'ghost'
export default function Botao({
  children,
  href = '#',
  variante = 'primario',
  icone,
  externo = false,
  className = '',
}) {
  const base =
    'group inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold tracking-wide transition-all duration-300';

  const variantes = {
    primario:
      'bg-gradiente-marca text-white shadow-glow hover:shadow-glow-azul hover:-translate-y-0.5',
    secundario:
      'border border-white/15 bg-white/5 text-claro hover:border-roxo/60 hover:bg-white/10',
    ghost: 'text-suave hover:text-claro',
  };

  return (
    <a
      href={href}
      {...(externo ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`${base} ${variantes[variante]} ${className}`}
    >
      {children}
      {icone && (
        <Icone
          nome={icone}
          className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5"
        />
      )}
    </a>
  );
}
