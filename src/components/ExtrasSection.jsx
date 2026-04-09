import React, { useState } from 'react';
import {
  VercelIcon,
  NetlifyIcon,
  GitHubIcon,
  LighthouseIcon,
  RoadmapIcon,
  FigmaIcon,
  VSCodeIcon,
} from './TechIcons';
import { colors } from '../theme/colors';


const ExtraLink = ({ label, url, icon }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '12px 14px',
        background: isHovered ? colors.background.cardHover : colors.background.alt,
        border: `1px solid ${colors.ui.borderAlt}`,
        borderColor: isHovered ? `${colors.text.accent}66` : colors.ui.borderAlt,
        borderRadius: '8px',
        textDecoration: 'none',
        color: colors.text.primary,
        fontSize: '13px',
        fontWeight: 500,
        transition: 'all 0.2s ease',
        transform: isHovered ? 'translateX(4px)' : 'none'

      }}
    >
      <span style={{ fontSize: '16px', display: 'flex', alignItems: 'center', flexShrink: 0 }}>
        {icon}
      </span>
      {label}
    </a>
  );
};

const ExtrasSection = () => {
  const labelStyle = {
    fontFamily: "'Azeret Mono', monospace",
    fontSize: '9.5px',
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: colors.text.muted,

    marginBottom: '20px',
    display: 'block'
  };

  const cardStyle = {
    padding: '28px',
    background: colors.background.card,
    border: `1px solid ${colors.ui.borderAlt}`,
    borderRadius: '12px',
  };


  return (
    <section style={{
      background: colors.background.alt,
      padding: window.innerWidth < 860 ? '80px 20px' : '100px 64px',
    }}>

      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        <header style={{ marginBottom: '48px' }}>
          <div style={{
            fontFamily: "'Azeret Mono', monospace",
            fontSize: '10px',
            color: colors.text.accent,
            letterSpacing: '0.2em',

            marginBottom: '16px',
            textAlign: 'center'
          }}>
            LINKS EXTRAS
          </div>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            marginBottom: '8px',
            color: colors.text.primary,
            textAlign: 'center'

          }}>
            Deploy | Ferramentas Usadas
          </h2>
          <p style={{ fontSize: '14px', color: colors.text.muted, textAlign: 'center' }}>

            Plataformas e ferramentas.
          </p>
        </header>

        <div style={{
          display: 'grid',
          gridTemplateColumns: window.innerWidth < 860 ? '1fr' : '1fr 1fr',
          gap: '20px'
        }}>
          <div style={cardStyle}>
            <span style={labelStyle}>Deploy Gratuito</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
               <ExtraLink label="Vercel" url="https://vercel.com"
                icon={<VercelIcon size={16} style={{ color: colors.text.primary }} />} />

              <ExtraLink label="Netlify" url="https://netlify.com"
                icon={<NetlifyIcon size={16} />} />
               <ExtraLink label="GitHub Pages" url="https://pages.github.com"
                icon={<GitHubIcon size={16} style={{ color: colors.text.primary }} />} />

            </div>
          </div>

          <div style={cardStyle}>
            <span style={labelStyle}>Ferramentas e Referências</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <ExtraLink label="Lighthouse" url="https://developer.chrome.com/docs/lighthouse/overview/"
                icon={<LighthouseIcon size={16} />} />
              <ExtraLink label="Roadmap.sh" url="https://roadmap.sh/frontend"
                icon={<RoadmapIcon size={16} />} />
              <ExtraLink label="Figma" url="https://figma.com"
                icon={<FigmaIcon size={16} />} />
              <ExtraLink label="VsCode" url="https://code.visualstudio.com/"
                icon={<VSCodeIcon size={16} />} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExtrasSection;
