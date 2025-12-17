# Daniel Fernando - Portfolio

Um portfólio profissional moderno construído com Next.js 15, React 19 e Tailwind CSS v4. O site apresenta duas experiências personalizadas baseadas no tipo de visitante (recrutador ou cliente empresarial), com animações fluidas e design glassmorphism premium.

## Preview

![Portfolio Preview](/public/images/daniel-profile.png)

## Funcionalidades

### Sistema de Landing Pages Duais
- **Modo Recrutador** (`?visitor=recruiter`): Foco em experiência profissional, stack técnica e trajetória de carreira
- **Modo Business** (`?visitor=business`): Foco em soluções, ROI e cases de sucesso para potenciais clientes
- **Modal de Seleção**: Quando acessado sem query params, um modal elegante pergunta o interesse do visitante

### Design e UX
- Dark theme premium com glassmorphism
- Partículas interativas no hero que reagem ao mouse
- Animações suaves com Framer Motion
- Layout responsivo mobile-first
- Suporte a `prefers-reduced-motion` para acessibilidade

### Seções
- **Hero**: Headline dinâmica com partículas animadas
- **Authority Bar**: Métricas de impacto (200k+ usuários, performance, alcance global)
- **Sobre**: Bento grid com foto em destaque e métricas animadas
- **Experiência**: Timeline profissional (modo recrutador)
- **Projetos**: Cards com descrições humanizadas e links/compliance
- **Serviços**: Ofertas adaptadas por tipo de visitante
- **Contato**: CTAs personalizados

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **UI**: React 19
- **Styling**: Tailwind CSS v4
- **Animações**: Framer Motion
- **Componentes**: shadcn/ui
- **Tipografia**: Space Grotesk + JetBrains Mono
- **Linguagem**: TypeScript

## Estrutura do Projeto

\`\`\`
├── app/
│   ├── globals.css          # Estilos globais e design tokens
│   ├── layout.tsx           # Layout raiz com fontes
│   └── page.tsx             # Página principal
├── components/
│   ├── about-section.tsx    # Seção sobre com bento grid
│   ├── animated-particles.tsx # Canvas de partículas interativas
│   ├── authority-bar.tsx    # Barra de métricas
│   ├── contact-section.tsx  # Seção de contato
│   ├── experience-section.tsx # Timeline de experiência
│   ├── header.tsx           # Header com navegação
│   ├── hero-section.tsx     # Hero animado
│   ├── project-card.tsx     # Card de projeto
│   ├── projects-section.tsx # Grid de projetos
│   ├── services-section.tsx # Seção de serviços
│   └── visitor-modal.tsx    # Modal de seleção de visitante
├── contexts/
│   └── visitor-context.tsx  # Context API para tipo de visitante
└── public/
    └── images/
        └── daniel-profile.png
\`\`\`

## Instalação

\`\`\`bash
# Clone o repositório
git clone https://github.com/seu-usuario/portfolio-daniel-fernando.git

# Entre no diretório
cd portfolio-daniel-fernando

# Instale as dependências
npm install

# Execute em desenvolvimento
npm run dev
\`\`\`

Acesse [http://localhost:3000](http://localhost:3000)

## Variáveis de Ambiente

Não há variáveis de ambiente obrigatórias para executar o projeto localmente.

## Deploy

O projeto está otimizado para deploy na Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/seu-usuario/portfolio-daniel-fernando)

## Query Params

| Parâmetro | Valor | Descrição |
|-----------|-------|-----------|
| `visitor` | `recruiter` | Exibe conteúdo focado em recrutadores e RH |
| `visitor` | `business` | Exibe conteúdo focado em clientes empresariais |

## Licença

Este projeto é de uso pessoal. Todos os direitos reservados.

---

Desenvolvido por **Daniel Fernando dos Santos Araujo**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/daniel-araujo-developer/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/daniel-araujo)
