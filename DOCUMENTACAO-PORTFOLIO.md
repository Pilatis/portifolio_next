# Documentação do Portfólio

Este documento descreve a estrutura, seções e conteúdo do portfólio pessoal, separado do README principal (que trata de tecnologias e como executar o projeto).

---

## Visão geral

O portfólio é uma aplicação **Next.js** de página única (SPA) com rota dinâmica para detalhes de projetos. Possui **internacionalização (PT/EN)** e seções fixas na home, com navegação por âncoras e por rota.

**Ordem das seções na home:** Hero → About → Grid → Projetos → Experiência → Certificações → Princípios de Engenharia → Approach → Footer (Contato).

---

## Seções do portfólio

### 1. Hero (`#` – topo da página)

- **Função:** Primeira impressão e call-to-action.
- **Conteúdo:** Título de impacto (headline), subtítulo com nome e cargo, botão “Ver meu trabalho” que leva à seção de projetos.
- **Recursos:** Efeito de spotlight, grid de fundo e animação de texto (TextGenerateEffect).
- **Dados:** Textos vêm de `translations.ts` em `hero` (headline, subtitle, cta).
- **Pontos importantes:** Define o tom visual e direciona o usuário para os projetos.

---

### 2. About / Sobre (`#about`)

- **Função:** Apresentação profissional em texto e foto.
- **Conteúdo:** Título “Sobre mim”, parágrafos sobre perfil (Full Stack, React, Next.js, TypeScript, foco em experiências digitais) e imagem profissional.
- **Recursos:** Layout em grid (texto à esquerda, foto à direita em desktop), animação de entrada (Framer Motion), borda animada (MovingBorder) e fundo em grid.
- **Dados:** `aboutMe` em `data/index.ts` e textos traduzidos em `about` em `translations.ts`. Imagem: `/Foto Profissional - 2.PNG`.
- **Pontos importantes:** Única seção com foto; conteúdo totalmente traduzível.

---

### 3. Grid / Bento Grid (`#grid`)

- **Função:** Mostrar diferenciais e características em cards visuais (estilo “bento”).
- **Conteúdo:** Seis cards com títulos como: mentalidade colaborativa, flexibilidade de fuso horário, tech stack, código limpo e escalável, animações em JS e abertura a novos desafios. Alguns cards têm imagens (SVG).
- **Recursos:** BentoGrid e BentoGridItem (layout responsivo com tamanhos variados). Textos por idioma em `grid.items`.
- **Dados:** `gridItems` em `data/index.ts` (id, title, description, className, img, etc.) e `grid.items` em `translations.ts`.
- **Pontos importantes:** Reforça valores e habilidades de forma visual; não lista projetos.

---

### 4. Projetos recentes (`#projects`)

- **Função:** Listar os projetos em cards clicáveis que levam à página de detalhe do projeto.
- **Conteúdo por card:**
  - Imagem de capa do projeto
  - Título e descrição curta (traduzidos)
  - Até **5 ícones de stack** (tecnologias) com tooltip
  - Link “Ver projeto” (texto configurável; antes “Ver site”)
- **Comportamento:** Clique no card ou no link navega para `/{id}` (página do projeto). Cada card tem `id="project-{id}"` para deep link (ex.: `/#project-1`).
- **Dados:** Array `projects` em `data/index.ts`; títulos e descrições em `projects.items` em `translations.ts`. Ícones limitados a 5 no componente.
- **Pontos importantes:** É a seção central do portfólio; quantidade de stacks exibidas é limitada a 5 por card.

---

### 5. Experiência (`#experience` – “Minha experiência”)

- **Função:** Mostrar trajetória e tipos de atuação profissional.
- **Conteúdo:** Quatro cards: Full Stack Developer, Front-End & Mobile (React Native), Projetos Freelance Full Stack e Liderança Técnica Front-End. Cada card tem título, descrição e ícone/thumbnail.
- **Recursos:** Botões com borda animada (MovingBorders), layout em grid responsivo.
- **Dados:** `workExperience` em `data/index.ts`; textos em `experience.items` em `translations.ts`.
- **Pontos importantes:** Foco em papéis e experiência, não em projetos específicos.

---

### 6. Certificações (`#certifications` – “Minhas certificações”)

- **Função:** Exibir certificados e formações com filtro por categoria.
- **Conteúdo:** Filtros por categoria (Todos, Frontend, Backend, Fundamentos, Liderança, Metodologias Ágeis) e grid de cards. Cada card mostra: imagem do certificado (ou placeholder se ausente/erro), título do curso, instituição emissora (issuer), período (startedAt – issuedAt ou “Em andamento” quando issuedAt é null), descrição técnica objetiva e skills em tags.
- **Recursos:** Botões de filtro, grid responsivo (1 col mobile, 2–3 em desktop), fallback visual para imagem (placeholder “Certificado”).
- **Dados:** `certifications` e `certificationCategories` em `data/index.ts`; textos e legendas em `certifications` em `translations.ts` (heading, highlight, filterAll, inProgress, categoryLabels, items[] com title, description, issuer).
- **Pontos importantes:** Categorias permitem filtrar por área; certificações em andamento usam `issuedAt: null` e exibem o texto “Em andamento” / “In progress”.

---

### 7. Engineering Principles / Princípios de Engenharia (`#principles`)

- **Função:** Demonstrar maturidade técnica e decisões arquiteturais por meio de princípios objetivos (não lista de tecnologias).
- **Conteúdo:** Grid de cards; cada card tem categoria (Arquitetura, Backend, Frontend, Banco de Dados, DevOps, Segurança, Qualidade), título do princípio, descrição técnica concisa e tags (palavras-chave). Ex.: separação de responsabilidades, APIs REST, RBAC, frontend estruturado, PostgreSQL, AWS, clean code, relatórios PDF/CSV/XLSX, performance.
- **Recursos:** Grid responsivo (1/2/3 colunas), badge de categoria em roxo, tags em chips.
- **Dados:** `engineeringPrinciples` em `data/index.ts` (id, title, description, category, tags); textos em `principles` em `translations.ts` (heading, highlight, categoryLabels, items[] com title, description).
- **Pontos importantes:** Foco em como você pensa engenharia; escrita concisa, técnica e objetiva.

---

### 8. Approach / Abordagem

- **Função:** Explicar a forma de trabalho em três fases.
- **Conteúdo:** Três cards: Planejamento e Estratégia, Desenvolvimento e Colaboração, Entrega e Evolução. Cada um com título, “fase” (order) e descrição.
- **Recursos:** Efeito CanvasRevealEffect ao passar o mouse, ícones Aceternity e cores distintas por card (emerald, pink, sky).
- **Dados:** `approach.cards` em `translations.ts` (title, order, des).
- **Pontos importantes:** Transmite processo e confiança; não possui âncora própria no nav (seção antes do footer).

---

### 9. Footer / Contato (`#contact`)

- **Função:** CTA final e meios de contato.
- **Conteúdo:** Frase de chamada (“Pronto para construir algo significativo juntos?”), texto de apoio, botão “Vamos conversar” que abre o cliente de e-mail (`mailto:pilatidev1@gmail.com`), copyright e ícones de redes (GitHub, LinkedIn).
- **Dados:** `footer` em `translations.ts` e `socialMedia` em `data/index.ts` (links e ícones).
- **Pontos importantes:** Contato principal é e-mail; redes são secundárias.

---

## Página de detalhe do projeto (`/[projectId]`)

- **Função:** Mostrar um único projeto com descrição completa, mídias e stack.
- **Comportamento:** Rota dinâmica; se `projectId` não existir em `projects`, exibe “Projeto não encontrado” e link para voltar aos projetos.
- **Conteúdo:**
  - Botão “Voltar aos projetos” (leva a `/#project-{id}`)
  - Título do projeto (traduzido)
  - Carrossel de mídias: imagens e/ou vídeos definidos em `project.media`. Quando há legendas em `projects.items[index].media`, cada mídia exibe título e descrição.
  - Seção “Sobre o projeto” com descrição longa (`fullDes`) ou curta (`des`)
  - Stack técnico: até **5 ícones** com tooltip (STACK_LABELS)
  - Bloco “Associado a” quando o projeto tem `clientName` e `clientLogo` (ex.: Cognitiva Brasil)
  - Botão “Ver projeto” / link externo quando `project.link` está preenchido
- **Dados:** Projeto em `projects` por `id`; textos e legendas das mídias em `projects.items[index]` (title, des, fullDes, media[]) em `translations.ts`.
- **Pontos importantes:** Projetos com `media` e `media` em translations ganham carrossel com legendas; projetos sem `media` usam `images` ou apenas `img`.

---

## Projetos cadastrados

| ID | Nome | Descrição curta | Stack (exibida até 5) | Cliente | Mídias |
|----|------|-----------------|------------------------|---------|--------|
| 1 | **Voxa** – Plataforma de Desenvolvimento e Orientação de Carreira | Plataforma digital de autoconhecimento e orientação de carreira, com testes, avaliações e simulação de entrevistas com IA. | React, Next.js, TypeScript, Chakra UI, Docker | Cognitiva Brasil | 3 imagens + 1 vídeo |
| 2 | **Electron Editor App** | Editor de texto simples com Electron: abrir, editar, salvar e renomear arquivos .txt. | Next.js, Tailwind, TypeScript, Chakra UI, Stream | — | Sem `media` (usa `images`) |
| 3 | **DR Insights** – Plataforma de Inteligência e Análise de Dados | Plataforma de insights e análise de dados para empresas, integrando múltiplas APIs de redes sociais. | Next.js, React, TypeScript, Chakra UI, PostgreSQL | Cognitiva Brasil | 4 imagens |
| 4 | **B2BHotel** – Plataforma SaaS de Gestão e Intermediação de Serviços para Hotéis | Plataforma SaaS B2B para intermediação e gestão de serviços no setor hoteleiro. | React, Next.js, TypeScript, Chakra UI, Java | Cognitiva Brasil | 4 imagens (home hotel, vagas, home prestador, agenda) |

- **Voxa e DR Insights e B2BHotel:** possuem `clientName` e `clientLogo`; legendas das mídias em PT e EN em `translations.ts`.
- **Electron Editor:** sem cliente; link externo opcional (`link`).
- **Stacks:** Em todos os cards (lista e página do projeto) só são exibidos os **5 primeiros** itens de `iconLists`.

---

## Internacionalização (PT / EN)

- **Idiomas:** Português (`pt`) e Inglês (`en`).
- **Troca de idioma:** Componente `LanguageSwitcher` (provavelmente no header/shell); estado em `LanguageContext`.
- **Arquivo de traduções:** `data/translations.ts`. Estrutura por idioma: `nav`, `hero`, `about`, `grid`, `projects`, `experience`, `certifications`, `principles` (heading, highlight, categoryLabels, items[] com title, description), `approach`, `footer`, `bento`, `projectPage`.
- **Pontos importantes:** Cada novo projeto exige um novo item em `projects.items` em **ambos** os idiomas (title, des, fullDes e, se houver carrossel, media com title e description para cada mídia).

---

## Dados e estrutura de arquivos relevantes

| Arquivo | Uso |
|--------|-----|
| `data/index.ts` | `navItems`, `aboutMe`, `gridItems`, `certifications`, `certificationCategories`, `engineeringPrinciples`, `projects`, `workExperience`, `socialMedia`, `STACK_LABELS`, etc. |
| `data/translations.ts` | Todos os textos por idioma (pt/en); inclui descrições longas e legendas dos projetos. |
| `app/page.tsx` | Página principal; importa e ordena Hero, About, Grid, RecentProjects, Experience, Certifications, EngineeringPrinciples, Approach, Footer. |
| `components/Certifications.tsx` | Seção de certificações; filtros por categoria, grid de cards com imagem/placeholder, datas e skills. |
| `components/EngineeringPrinciples.tsx` | Seção de princípios de engenharia; grid de cards com categoria, título, descrição e tags. |
| `app/[projectId]/page.tsx` | Página de detalhe do projeto; usa `projects`, traduções e ProjectCarousel. |
| `components/RecentProjects.tsx` | Lista de projetos; limita stack a 5 ícones e usa “Ver projeto”. |

---

## Resumo dos pontos importantes

1. **Seções na home:** Hero → About → Grid → Projetos → Experiência → Certificações → Princípios de Engenharia → Approach → Footer.
2. **Certificações:** Dados em `certifications` e `certificationCategories`; filtros por categoria; textos em `certifications` (items, categoryLabels, inProgress) em `translations.ts` (PT/EN).
3. **Princípios de engenharia:** Dados em `engineeringPrinciples` (title, description, category, tags); textos em `principles` (heading, highlight, categoryLabels, items) em `translations.ts` (PT/EN).
4. **Projetos:** 4 ativos (Voxa, Electron Editor, DR Insights, B2BHotel); textos e legendas em PT e EN em `translations.ts`.
5. **Stack nos cards:** Máximo de 5 ícones por projeto (lista e página de detalhe).
6. **Botão de ação dos projetos:** Texto “Ver projeto” (PT) / “View project” (EN); link pode ser interno (`/{id}`) ou externo (`project.link`).
7. **Deep link:** `/#project-{id}` leva ao card do projeto na home; `/{id}` abre a página de detalhe; `#certifications` e `#principles` levam às seções de certificações e princípios.
8. **Novo projeto:** Adicionar objeto em `projects` em `data/index.ts` e um item correspondente em `projects.items` (pt e en) em `data/translations.ts`, incluindo `media` se houver carrossel com legendas.

Este documento pode ser mantido atualizado sempre que uma seção for alterada ou um novo projeto for incluído.
