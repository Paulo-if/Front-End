import React from 'react';
import ProgressBar from './components/ProgressBar';
import { colors } from './theme/colors';

import HeroSection from './components/HeroSection';
import OverviewSection from './components/OverviewSection';
import BlockSection from './components/BlockSection';
import ExtrasSection from './components/ExtrasSection';
import FooterSection from './components/FooterSection';
import ScrollToTop from './components/ScrollToTop';
import { YouTubeIcon, GitHubIcon, FigmaIcon, LinkIcon, RoadmapIcon } from './components/TechIcons';


const BLOCKS = [
  {
    id: 'b0', num: 'BLOCO 0', color: colors.blocks.gray, pale: `${colors.blocks.gray}14`,

    title: 'Introdução',
    sub: 'Entendendo o Front-End',
    goal: 'O que o mercado espera de um dev Front-End.',
    topics: [
      'O que faz um Front-End Developer ? (mais que deixar botão bonito)',
      'Diferença entre Front-End, Web Designer, UI Designer e UX Designer',
      'Tendências: AI copilots, meta-frameworks, design systems, performance',
      'Roadmaps focados no Brasil 2026',
    ],
  },
  {
    id: 'b1', num: 'BLOCO 1', color: colors.blocks.green, pale: `${colors.blocks.green}14`,

    title: 'Web e HTML',
    sub: 'Como a web funciona + primeiro "Hello World" com HTML',
    goal: 'Seu primeiro código com HTML',
    topics: [
      'Como a internet funciona: HTTP, DNS, domínio, hosting, browsers',
      'Estrutura básica de uma página HTML',
      'Tags semânticas: header, nav, main, section, article, footer',
      'Listas, tabelas simples, imagens, links',
      'Formulários básicos: inputs, labels, textarea, select',
      'Boas práticas: atributo alt, rel="noopener", lang no html',
    ],
    links: [
      { icon: <YouTubeIcon size={16} />, label: 'HTML Full Course - Mike Dane', url: 'https://www.youtube.com/watch?v=pQN-pnXPaVg', display: 'youtube.com/watch?v=pQN-pnXPaVg' },
      { icon: <LinkIcon size={16} />, label: 'Módulos iniciais de HTML', url: 'https://www.freecodecamp.org/learn/2022/responsive-web-design/', display: 'freecodecamp.org/learn/2022/responsive-web-design/' },
      { icon: <RoadmapIcon size={16} />, label: 'Referência visual dos tópicos', url: 'https://roadmap.sh/frontend', display: 'roadmap.sh/frontend' },
    ],
    projects: ['👀 LinkPage (estilo linktree)', '🚩 Primeiro commit', '🚀 Primeiro deploy no GitHub Pages'],
  },
  {
    id: 'b2', num: 'BLOCO 2', color: colors.blocks.blue, pale: `${colors.blocks.blue}14`,

    title: 'CSS - A arte de deixar bonito',
    sub: 'Dominar CSS para criar layouts bonitos, responsivos e com boa hierarquia visual',
    goal: 'Criar layouts bonitos, responsivos e com boa hierarquia visual',
    topics: [
      'Seletores, cascata, especificidade e box model',
      'Display, position, Flexbox e Grid',
      'Media queries, unidades relativas (rem, em, %, vw/vh)',
      'Cores, tipografia na web: tamanhos, espaçamentos, hierarquia',
      'Transições, animações simples e microinterações (hover, focus)',
      'Variáveis CSS (custom properties)',
      'Pseudo-classes e pseudo-elementos',
    ],
    links: [
      { icon: <LinkIcon size={16} />, label: 'CSS, Flexbox, Grid', url: 'https://www.freecodecamp.org/learn/2022/responsive-web-design/', display: 'freecodecamp.org/learn/2022/responsive-web-design/' },
      { icon: <YouTubeIcon size={16} />, label: 'CSS moderno e layouts responsivos', url: 'https://www.youtube.com/@KevinPowell', display: 'youtube.com/@KevinPowell' },
      { icon: <LinkIcon size={16} />, label: 'Kevin Powell — Playlist específica de CSS', url: 'https://www.youtube.com/playlist?list=PL0-GT3co4r2wlh6UHTUeQsrf4sKQtTOUF', display: 'youtube.com/playlist?list=PL0...' },
    ],
    projects: ['🛍 Landing Page de Produto', '📰 Página de Blog Responsiva', '🎨 Style Tile (paleta + tipografia + componentes)'],
  },
  {
    id: 'b3', num: 'BLOCO 3', color: colors.blocks.purple, pale: `${colors.blocks.purple}14`,

    title: 'Figma + UI/UX no Front-End',
    sub: 'Da ideia ao design, do design ao código',
    goal: 'Sair do Figma com clareza sobre como traduzir design em código e criar interfaces que fazem sentido para o usuário.',
    topics: [
      'Interface do Figma: frames, layers, componentes, auto layout',
      'Tipografia, espaçamento e grids no Figma',
      'Componentes, variantes e design tokens',
      'Prototipagem básica: linking frames, overlays, scroll',
      'Inspeção de design: como extrair valores para o código',
      'Fundamentos de UX: hierarquia visual, contraste, leiturabilidade',
    ],
    links: [
      { icon: <FigmaIcon size={16} />, label: 'Figma for Beginners | Tutorial oficial do Figma', url: 'https://help.figma.com/hc/en-us/sections/4405269443991-Figma-for-Beginners-4-parts', display: 'help.figma.com/hc/en-us/sections/4405...' },
      { icon: <YouTubeIcon size={16} />, label: 'UI Design para Iniciantes - YouTube', url: 'https://www.youtube.com/results?search_query=figma+ui+design+beginners+2024', display: 'youtube.com → "figma ui design beginners"' },
    ],
    projects: ['🖼 Criar uma LP no Figma', '🎨 Desenvolver um Design System', '💻 Figma → HTML/CSS'],
  },
  {
    id: 'b4', num: 'BLOCO 4', color: colors.blocks.amber, pale: `${colors.blocks.amber}14`,

    title: 'JavaScript - JS',
    sub: 'Manipulando dados, reagindo a eventos e construindo lógicas',
    goal: 'Dominar JavaScript — sem pular para frameworks.',
    topics: [
      'Variáveis (let, const), tipos, operadores, condicionais, loops',
      'Funções: declaração, expressão, arrow functions',
      'Arrays e objetos — métodos modernos (.map, .filter, .reduce)',
      'Escopo: global, local, block scope',
      'Funções puras (sem efeitos colaterais)',
      'ES6+: template literals, destructuring, spread/rest',
      'Truthy/falsy, optional chaining (?.), nullish (??)',
    ],
    links: [
      { icon: <YouTubeIcon size={16} />, label: 'JavaScript Course for Beginners (7h+)', url: 'https://www.youtube.com/watch?v=3C2sVAKc-WU', display: 'youtube.com/watch?v=3C2sVAKc-WU' },
      { icon: <LinkIcon size={16} />, label: 'JavaScript Course TXT', url: 'https://www.freecodecamp.org/news/full-javascript-course-for-beginners/', display: 'freecodecamp.org/news/full-javascript-course-for-beginners/' },
    ],
    projects: [],
  },
  {
    id: 'b5', num: 'BLOCO 5', color: colors.blocks.red, pale: `${colors.blocks.red}14`,

    title: 'APIs - O básico nescessário',
    sub: 'Consumir APIs e criar experiências interativas reais',
    goal: 'Conectar JS ao HTML/CSS e criar os primeiros projetos interativos com dados reais de APIs.',
    topics: [
      'DOM: selecionar elementos, alterar texto/HTML, classes e estilos',
      'Eventos: clique, input, submit, teclado — event delegation',
      'Fetch API / AJAX: requisições GET/POST simples, APIs públicas',
      'Async/await e Promises completas',
      'localStorage e sessionStorage',
      'Módulos ES6: import/export, organizar código em arquivos',
      'Loading states, tratamento de erro na UI',
    ],
    links: [
      { icon: <YouTubeIcon size={16} />, label: 'Continuação do curso JS do Bloco 4 (seções de DOM e APIs)', url: 'https://www.youtube.com/watch?v=3C2sVAKc-WU', display: 'youtube.com/watch?v=3C2sVAKc-WU' },
      { icon: <LinkIcon size={16} />, label: 'Projetos guiados de mini-apps JavaScript', url: 'https://www.freecodecamp.org/learn/2022/responsive-web-design/', display: 'freecodecamp.org/learn/2022/responsive-web-design/' },
    ],
    projects: ['✅ To-Do List com localStorage', '🎬 Projeto de busca com API pública', '😸 PokéDex (PokeAPI)'],
  },
  {
    id: 'b6', num: 'BLOCO 6', color: colors.blocks.cyan, pale: `${colors.blocks.cyan}14`,

    title: 'Comunismo dos DEVs Git - GitHub',
    sub: 'Versionar código, colaborar e manter histórico profissional no GitHub',
    goal: 'Versionar todos os projetos e construir presença profissional no GitHub.',
    topics: [
      'Conceitos: repositório, commit, branch, merge, pull request',
      'Fluxo básico: git init, add, commit, push, pull',
      'GitHub: criar repositórios, issues, colaborar',
      'Branches: feature/, hotfix/, main vs develop',
      'Pull Requests: como abrir, revisar, fazer merge',
      'README profissional: estrutura, demo GIF, badges',
      'Conventional Commits: feat:, fix:, docs:, refactor:',
    ],
    links: [
      { icon: <YouTubeIcon size={16} />, label: 'Git & GitHub — YouTube', url: 'https://www.youtube.com/watch?v=wNrbaAGE2PY', display: 'youtube.com/watch?v=wNrbaAGE2PY' },
      { icon: <LinkIcon size={16} />, label: 'Git & GitHub — Artigo complementar', url: 'https://www.freecodecamp.org/news/git-and-github-crash-course-for-beginners/', display: 'freecodecamp.org/news/git-and-github-crash-course-for-beginners/' },
    ],
    projects: [],
  },
  {
    id: 'b7', num: 'BLOCO 7', color: colors.blocks.pink, pale: `${colors.blocks.pink}14`,

    title: 'React',
    sub: 'Aplicando o FrameWork na prática',
    goal: 'Dominando o React e contruindo portfólio',
    topics: [
      'Componentes funcionais, props, state, eventos',
      'Hooks: useState, useEffect, useRef, useContext',
      'Organização de pastas, composição, lifting state up',
      'React Router v6: navegação entre páginas',
      'Integração com APIs dentro de componentes e hooks customizados',
      'Estilização: Tailwind CSS (escolha uma abordagem e vá fundo)',
      'Design system: Button, Input, Card, Modal reutilizáveis',
    ],
    links: [
      { icon: <LinkIcon size={16} />, label: 'React Moderno Tutorial — Principal', url: 'https://netninja.dev/p/modern-react-tutorial', display: 'netninja.dev/p/modern-react-tutorial' },
      { icon: <YouTubeIcon size={16} />, label: 'The Net Ninja — Canal no YouTube (React, hooks, projetos)', url: 'https://www.youtube.com/c/TheNetNinja', display: 'youtube.com/c/TheNetNinja' },
      { icon: <GitHubIcon size={16} style={{ color: colors.text.primary }} />, label: 'React Playlist — Repositório GitHub do Net Ninja', url: 'https://github.com/iamshaunjp/react-playlist', display: 'github.com/iamshaunjp/react-playlist' },

    ],
    projects: ['🎈Projeto Solo'],
  },
  {
    id: 'b8', num: 'BLOCO 8', color: colors.blocks.greenAlt, pale: `${colors.blocks.greenAlt}14`,

    title: 'Responsividade',
    sub: '*** *** ***',
    goal: 'Tornar os projetos responsivos e acessíveis',
    topics: [
      'Acessibilidade (a11y): WCAG, contrastes, navegação por teclado, ARIA básica',
      'Web performance: métricas Core Web Vitals, Lighthouse e DevTools',
      'Lazy loading de imagens, code splitting básico, otimização de fontes',
      'Testes de frontend: visão geral de Jest / Vitest / Playwright',
      'Escrever testes de componente e de formulário no React',
      'prefers-reduced-motion: respeitar preferências do usuário',
    ],
    links: [
      { icon: <YouTubeIcon size={16} />, label: 'Learn Accessibility — YouTube', url: 'https://www.youtube.com/watch?v=e2nkq3h1P68', display: 'youtube.com/watch?v=e2nkq3h1P68' },
      { icon: <LinkIcon size={16} />, label: 'Guia de Teste de Acessibilidade', url: 'https://reciteme.com/news/a11y-testing-guide/', display: 'reciteme.com/news/a11y-testing-guide/' },
      { icon: <LinkIcon size={16} />, label: 'Lighthouse — Documentação oficial', url: 'https://developer.chrome.com/docs/lighthouse/overview/', display: 'developer.chrome.com/docs/lighthouse/overview/' },
    ],
    projects: [],
  },
  {
    id: 'b9', num: 'BLOCO 9', color: colors.blocks.slate, pale: `${colors.blocks.slate}14`,

    title: 'World',
    sub: 'Voem sozinhos, criem suas histórias',
    goal: 'Aprender a aprender, enteder que você nunca vai parar de estudar',
    topics: [
      'Criando um LinkedIn',
      'Pitch Pessoal',
      'Entendendo o Mercado',
    ],
    links: [
      { icon: <YouTubeIcon size={16} />, label: 'Roadmap 2026 Alexandre Leutz — Primeiro emprego em programação no Brasil', url: 'https://www.youtube.com/watch?v=V5rdXTn5vwc', display: 'youtube.com/watch?v=V5rdXTn5vwc' },
      { icon: <RoadmapIcon size={16} />, label: 'roadmap.sh/frontend — Referência de tópicos para estudar e checar vagas', url: 'https://roadmap.sh/frontend', display: 'roadmap.sh/frontend' },
    ],
    projects: ['🌐 Portfólio online no ar', '💼 LinkedIn atualizado', '🐙 GitHub com 5+ projetos organizados', '📄 README com GIFs nos projetos principais', '📍 Se posicionar no mercado'],
  },
];

export default function App() {
  return (
    <div style={{
      background: colors.background.alt,
      color: colors.text.primary,

      fontFamily: "'Bricolage Grotesque', sans-serif",
      overflowX: 'hidden'
    }}>
      <ProgressBar />
      <HeroSection />
      <OverviewSection blocks={BLOCKS} />
      {BLOCKS.map((block, i) => (
        <BlockSection key={block.id} block={block} index={i} />
      ))}
      <ExtrasSection />
      <FooterSection />
      <ScrollToTop />
    </div>

  );
}
