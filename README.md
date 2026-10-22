# Dev e Sistemas — Site institucional

Site da **Dev e Sistemas**: _tecnologia que entende o seu negócio._

Landing page moderna (dark + roxo/azul neon), com animações, focada em mostrar
que desenvolvemos sistemas sob medida para resolver problemas reais de pequenos
negócios. Traz o **Bonnaci Rental** como case real.

## 🛠️ Stack
- **Vite** + **React 18**
- **Tailwind CSS** (tema custom com as cores da marca)
- **Framer Motion** (animações e transições)

## 🚀 Como rodar localmente
```bash
npm install
npm run dev      # abre em http://localhost:5173
```

Para gerar a versão de produção:
```bash
npm run build    # gera a pasta dist/
npm run preview  # testa o build localmente
```

## 📁 Estrutura
```
src/
├─ data/site.js            # TODO o conteúdo e contatos (edite aqui)
├─ components/             # peças reutilizáveis (Header, Footer, Card, Botão, Mascote, ícones)
│  └─ ui/                  # UI base (Botao, Card, TituloSecao)
├─ sections/               # cada seção da home (Hero, Serviços, Case, etc.)
├─ styles/index.css        # estilos globais + utilitários Tailwind
└─ App.jsx                 # monta a página
```

## ✏️ O que você edita com frequência
- **Contatos (WhatsApp, Instagram, e-mail):** `src/data/site.js` → objeto `contato`.
- **Serviços, processo, case, textos:** `src/data/site.js`.
- **Sua foto (seção Sobre):** `src/sections/SobreMim.jsx` (há um placeholder marcado).
- **Logo:** `src/components/Logo.jsx` (hoje é textual; troque quando tiver o logo oficial).

## 🔮 Preparado para crescer
A estrutura já permite adicionar facilmente: novos projetos/cases, novos
serviços, formulário de contato, blog e área de clientes — cada um como uma
nova seção/rota, sem bagunçar o que existe.

---
© Dev e Sistemas
