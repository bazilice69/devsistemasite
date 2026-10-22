// ============================================================================
// DADOS DO SITE — centralizados para facilitar edição e crescimento futuro.
// Troque os PLACEHOLDERS de contato pelos seus dados reais.
// ============================================================================

export const contato = {
  // >>> SUBSTITUA pelos seus dados reais <<<
  whatsapp: '5511965578434', // formato: 55 + DDD + número (só dígitos)
  instagram: 'devesistemas', // sem o @
  email: 'contato@devesistemas.com.br',
  mensagemWhatsapp: 'Olá! Vim pelo site da Dev e Sistemas e gostaria de conversar sobre um projeto.',
};

export const empresa = {
  nome: 'Dev e Sistemas',
  slogan: 'Tecnologia que entende o seu negócio.',
  filosofia: 'Tecnologia para ajudar pessoas a trabalharem melhor, e não para substituir as pessoas.',
};

// Link de WhatsApp pronto (usado nos botões de contato)
export const linkWhatsapp = `https://wa.me/${contato.whatsapp}?text=${encodeURIComponent(contato.mensagemWhatsapp)}`;
export const linkInstagram = `https://instagram.com/${contato.instagram}`;
export const linkEmail = `mailto:${contato.email}`;

// ---------------------------------------------------------------------------
// SEÇÃO "NÃO É SÓ CÓDIGO" — nosso jeito de trabalhar
// ---------------------------------------------------------------------------
export const pilares = [
  {
    icone: 'lupa',
    titulo: 'Entender',
    texto: 'Entendemos a rotina e os problemas do negócio antes de qualquer linha de código.',
  },
  {
    icone: 'mapa',
    titulo: 'Planejar',
    texto: 'Definimos uma solução adequada à realidade e ao orçamento do cliente.',
  },
  {
    icone: 'codigo',
    titulo: 'Desenvolver',
    texto: 'Transformamos a ideia em um sistema funcional, simples de usar.',
  },
  {
    icone: 'crescer',
    titulo: 'Evoluir',
    texto: 'O sistema continua melhorando conforme o negócio cresce.',
  },
];

// ---------------------------------------------------------------------------
// SERVIÇOS
// ---------------------------------------------------------------------------
export const servicos = [
  {
    icone: 'sistema',
    titulo: 'Sistemas personalizados',
    texto: 'Sistemas desenvolvidos de acordo com as necessidades específicas de cada negócio.',
  },
  {
    icone: 'gestao',
    titulo: 'Sistemas de gestão',
    texto: 'Soluções para organizar clientes, produtos, serviços, agenda, financeiro e processos.',
  },
  {
    icone: 'web',
    titulo: 'Aplicações Web',
    texto: 'Sistemas acessíveis pelo navegador, sem depender de instalação complicada.',
  },
  {
    icone: 'automacao',
    titulo: 'Automação de processos',
    texto: 'Transformação de tarefas repetitivas e manuais em processos digitais.',
  },
  {
    icone: 'integracao',
    titulo: 'Integrações',
    texto: 'Integração entre sistemas, APIs e ferramentas utilizadas pela empresa.',
  },
  {
    icone: 'manutencao',
    titulo: 'Manutenção e evolução',
    texto: 'Melhorias, correções e evolução de sistemas já existentes.',
  },
];

// ---------------------------------------------------------------------------
// PROCESSO (timeline)
// ---------------------------------------------------------------------------
export const processo = [
  { numero: '01', titulo: 'Conversamos', texto: 'Uma conversa aberta sobre o que você precisa.' },
  { numero: '02', titulo: 'Entendemos o problema', texto: 'Mergulhamos na rotina real do negócio.' },
  { numero: '03', titulo: 'Planejamos a solução', texto: 'Desenhamos o caminho mais simples e eficaz.' },
  { numero: '04', titulo: 'Desenvolvemos', texto: 'Colocamos a solução de pé, passo a passo.' },
  { numero: '05', titulo: 'Testamos', texto: 'Validamos junto com você, no mundo real.' },
  { numero: '06', titulo: 'Evoluímos', texto: 'O sistema cresce junto com a sua empresa.' },
];

// ---------------------------------------------------------------------------
// CASE — Bonnaci Rental (módulos exibidos como mockup)
// ---------------------------------------------------------------------------
export const bonnaciModulos = [
  { icone: 'clientes', nome: 'Clientes' },
  { icone: 'medidas', nome: 'Medidas' },
  { icone: 'acervo', nome: 'Acervo' },
  { icone: 'locacoes', nome: 'Locações' },
  { icone: 'agenda', nome: 'Agenda' },
  { icone: 'financeiro', nome: 'Financeiro' },
  { icone: 'contratos', nome: 'Contratos' },
];

// ---------------------------------------------------------------------------
// PÚBLICO-ALVO (quem atendemos)
// ---------------------------------------------------------------------------
export const publicoAlvo = [
  'Pequenos negócios',
  'Profissionais autônomos',
  'Lojas e comércios',
  'Prestadores de serviços',
  'Quem ainda vive de planilhas',
  'Negócios com processos específicos',
];

// ---------------------------------------------------------------------------
// TECNOLOGIAS (seção secundária)
// ---------------------------------------------------------------------------
export const tecnologias = [
  'Laravel',
  'PHP',
  'Vue.js',
  'JavaScript',
  'Firebase',
  'MySQL',
  'APIs',
  'HTML',
  'CSS',
];

// ---------------------------------------------------------------------------
// NAVEGAÇÃO
// ---------------------------------------------------------------------------
export const navItems = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Contato', href: '#contato' },
];
