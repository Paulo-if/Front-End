export const colors = {

  // Fundos
  background: {
    dark: '#00000013',    // Hero
    alt: '#0f0e0c',     // App, Overview, Blocos pares
    footer: '#070605',
    card: '#181612',    // BlockSection cards
    cardHover: '#221f1a',
    stats: '#0000000a',
  },

  // Textos
  text: {
    primary: '#E3E5EF',
    secondary: '#737579ff',
    muted: '#6b6358',
    stats: '#fcd53adb',
    accent: '#ffd87cff', // Laranja Cyber Bee
  },

  // UI / Elementos
  ui: {
    border: 'rgba(255, 255, 255, 0.14)',
    borderAlt: '#2e2a24',
    glow: 'rgba(232, 93, 32, 0.12)',
    particle: 'rgba(240, 121, 58, 0.3)',
    scrollGradient: '#f5f5f5ff',
  },

  // Animações de texto por sessão e por cada texto (milissegundos)
  textAnimation: {
    hero: {
      title: 800,
      subtitle: 900,
      description: 1000,
    },
    overview: {
      heading: 850,
      paragraph: 950,
      item: 900,
    },
    blockSection: {
      title: 820,
      cardTitle: 870,
      cardText: 920,
    },
    extras: {
      title: 880,
      list: 940,
    },
    footer: {
      title: 750,
      link: 780,
    },
    // fallback global se não houver tempo específico por texto
    default: 900,
  },

  // Cores dos Blocos do RoadMap
  blocks: {
    gray: '#9ca3af',
    green: '#F4632C',
    blue: '#007CC2',
    purple: '#A259FF',
    amber: '#fbbf24',
    red: '#f84b4bff',
    cyan: '#22d3ee',
    pink: '#f472b6',
    greenAlt: '#4ade80',
    slate: '#94a3b8',
  }
};

export default colors;