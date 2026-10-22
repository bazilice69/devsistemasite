// Conjunto de ícones em SVG (traço fino, combinando com o visual tech/neon).
// Uso: <Icone nome="codigo" className="w-6 h-6" />

const caminhos = {
  lupa: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3-3" />
    </>
  ),
  mapa: (
    <>
      <path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2Z" />
      <path d="M9 4v14M15 6v14" />
    </>
  ),
  codigo: (
    <>
      <path d="m8 8-4 4 4 4" />
      <path d="m16 8 4 4-4 4" />
      <path d="m13 6-2 12" />
    </>
  ),
  crescer: (
    <>
      <path d="M3 17l6-6 4 4 7-7" />
      <path d="M17 7h4v4" />
    </>
  ),
  sistema: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M9 21V9" />
    </>
  ),
  gestao: (
    <>
      <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
    </>
  ),
  web: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
    </>
  ),
  automacao: (
    <>
      <path d="M12 3v3M12 18v3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M3 12h3M18 12h3M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  integracao: (
    <>
      <path d="M8 7a4 4 0 0 0 0 8h1M16 17a4 4 0 0 0 0-8h-1" />
      <path d="M8 11h8" />
    </>
  ),
  manutencao: (
    <>
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L4 17v3h3l5.3-5.3a4 4 0 0 0 5.4-5.4l-2.3 2.3-2-2 2.3-2.3Z" />
    </>
  ),
  clientes: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M4 20a5 5 0 0 1 10 0M16 6a3 3 0 0 1 0 6M20 20a5 5 0 0 0-3-4.6" />
    </>
  ),
  medidas: (
    <>
      <path d="M3 7h18v10H3z" />
      <path d="M7 7v3M11 7v4M15 7v3M19 7v4" />
    </>
  ),
  acervo: (
    <>
      <path d="M6 3h12l3 6-9 12L3 9Z" />
      <path d="M3 9h18M9 3 7.5 9 12 21M15 3l1.5 6L12 21" />
    </>
  ),
  locacoes: (
    <>
      <path d="M4 7h16v13H4zM4 7l2-3h12l2 3" />
      <path d="M9 12h6" />
    </>
  ),
  agenda: (
    <>
      <rect x="3" y="4" width="18" height="17" rx="2" />
      <path d="M3 9h18M8 2v4M16 2v4" />
    </>
  ),
  financeiro: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v10M9.5 9.5a2.5 2 0 0 1 5 0c0 2-5 1-5 3a2.5 2 0 0 0 5 0" />
    </>
  ),
  contratos: (
    <>
      <path d="M7 3h7l5 5v13H7z" />
      <path d="M14 3v5h5M10 13h6M10 17h6" />
    </>
  ),
  raio: (
    <>
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
    </>
  ),
  alvo: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" />
    </>
  ),
  coracao: (
    <>
      <path d="M12 20s-7-4.6-9.3-9A5 5 0 0 1 12 6a5 5 0 0 1 9.3 5c-2.3 4.4-9.3 9-9.3 9Z" />
    </>
  ),
  whatsapp: <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2Zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.5-4-4.7-4.2-.1-.2-1.1-1.4-1.1-2.7s.7-1.9.9-2.1c.2-.2.5-.3.6-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.4.5c-.1.2-.3.3-.1.6.1.3.7 1.1 1.4 1.7.9.8 1.7 1.1 2 1.2.2.1.4.1.5-.1l.7-.8c.2-.2.3-.2.6-.1l1.9.9c.3.1.5.2.5.3.1.2.1.6 0 1Z" />,
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  email: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  seta: <path d="M5 12h14M13 6l6 6-6 6" />,
};

export default function Icone({ nome, className = 'w-6 h-6' }) {
  const conteudo = caminhos[nome];
  if (!conteudo) return null;
  const preenchido = nome === 'whatsapp';
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill={preenchido ? 'currentColor' : 'none'}
      stroke={preenchido ? 'none' : 'currentColor'}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {conteudo}
    </svg>
  );
}
