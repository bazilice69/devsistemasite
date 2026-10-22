// Logo textual provisório (o Thiago vai definir o logo oficial depois).
// Marca "< Dev e Sistemas />" com os chevrons em neon.
export default function Logo({ className = '' }) {
  return (
    <a href="#inicio" className={`group flex items-center gap-2 ${className}`}>
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradiente-marca font-mono text-lg font-bold text-white shadow-glow">
        {'</>'}
      </span>
      <span className="text-lg font-extrabold tracking-tight">
        Dev <span className="text-suave font-medium">e</span>{' '}
        <span className="texto-gradiente">Sistemas</span>
      </span>
    </a>
  );
}
