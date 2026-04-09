import React from 'react';
import {
  UFJIcon,
  FigmaIcon,
  ReactIcon,
  HTMLIcon,
  CSSIcon,
  JavaScriptIcon,
  GitIcon,
  GitHubIcon,
} from './TechIcons';

// ─── DADOS ───────────────────────────────────────────────────────────────────
// Cada item tem: ícone JSX, label e cor oficial da tecnologia (para o hover glow)
const ITEMS = [
  { icon: <UFJIcon size={18} />,                                    label: 'UFJ',           color: '#f0793a', url: 'https://maps.app.goo.gl/BRzf6prMphP8rzM99' },
  { icon: <FigmaIcon size={18} />,                                  label: 'Figma | UI/UX', color: '#A259FF', url: 'https://www.figma.com/downloads/' },
  { icon: <ReactIcon size={18} />,                                  label: 'React',         color: '#61DAFB', url: 'https://react.dev/' },
  { icon: <HTMLIcon size={18} />,                                   label: 'HTML',          color: '#E34F26', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
  { icon: <CSSIcon size={18} />,                                    label: 'CSS',           color: '#1572B6', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  { icon: <JavaScriptIcon size={18} />,                             label: 'JavaScript',    color: '#F7DF1E', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { icon: <GitIcon size={18} />,                                    label: 'Git',           color: '#F05032', url: 'https://git-scm.com/' },
  { icon: <GitHubIcon size={18} style={{ color: '#e8e2d9' }} />,   label: 'GitHub',        color: '#e8e2d9', url: 'https://github.com/Paulo-if' },
];


// Triplicar os itens — garante loop visual contínuo sem salto de posição.
const TRACK = [...ITEMS, ...ITEMS, ...ITEMS];

const CAROUSEL_STYLES = `
  @keyframes marquee {
    0%   { transform: translateX(0); }
    100% { transform: translateX(calc(-100% / 3)); }
  }

  .tc-track {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    width: max-content;
    animation: marquee 28s linear infinite;
    will-change: transform;
  }

  .tc-track:hover {
    animation-play-state: paused;
  }

  .tc-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    padding: 9px 20px 9px 14px;
    border: 1px solid #2e2a24;
    border-radius: 9999px;
    background: rgba(255,255,255,0.02);
    text-decoration: none;
    cursor: pointer;
    transition: background 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease, color 0.2s ease;
    font-family: 'Azeret Mono', monospace;
    font-size: 11px;
    font-weight: 500;
    color: rgba(232, 226, 217, 0.55);
    letter-spacing: 0.02em;
    margin: 0 7px;
  }


  .tc-item:hover {
    background: rgba(255,255,255,0.05);
    color: rgba(232, 226, 217, 0.9);
  }

  .tc-icon-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    transition: filter 0.2s ease;
  }

  .tc-item:hover .tc-icon-wrap {
    filter: drop-shadow(0 0 5px var(--icon-color));
  }

  .tc-fade-left  { background: linear-gradient(to right, #070605 0%, transparent 100%); }
  .tc-fade-right { background: linear-gradient(to left,  #070605 0%, transparent 100%); }
`;

const TechCarousel = () => {

  return (
    <div style={{
      position: 'relative',
      overflow: 'hidden',
      width: '100%',
      paddingTop: '4px',
      paddingBottom: '4px',
    }}>
      <style>{CAROUSEL_STYLES}</style>

      {/* Fade esquerda */}
      <div className="tc-fade-left" style={{
        position: 'absolute', left: 0, top: 0, bottom: 0,
        width: '80px', zIndex: 2, pointerEvents: 'none',
      }} />

      {/* Fade direita */}
      <div className="tc-fade-right" style={{
        position: 'absolute', right: 0, top: 0, bottom: 0,
        width: '80px', zIndex: 2, pointerEvents: 'none',
      }} />

      {/* Track com 24 itens */}
      <div className="tc-track">
        {TRACK.map((item, i) => (
          <a
            key={i}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="tc-item"
            style={{ '--icon-color': item.color }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = item.color + '55';       
              e.currentTarget.style.boxShadow = `0 0 14px ${item.color}18`; 
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = '#2e2a24';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <span className="tc-icon-wrap">
              {item.icon}
            </span>
            {item.label}
          </a>
        ))}

      </div>
    </div>
  );
};

export default TechCarousel;
