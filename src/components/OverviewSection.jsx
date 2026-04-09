import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { colors } from '../theme/colors';


gsap.registerPlugin(ScrollTrigger);

const OverviewSection = ({ blocks }) => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const tableRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header reveal
      gsap.fromTo(headerRef.current.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 85%',
          }
        }
      );

      // Table rows reveal
      const rows = tableRef.current.querySelectorAll('tr');
      gsap.fromTo(rows,
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.06,
          scrollTrigger: {
            trigger: tableRef.current,
            start: 'top 75%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const rowData = [

    { num: 'B0', focus: 'Introdução', exit: 'Objetivo do Grupo de Estudos' },
    { num: 'B1', focus: 'Fundamentos da Web + HTML semântico', exit: 'Conhecimento básico/introdutório' },
    { num: 'B2', focus: 'Introdução do CSS', exit: 'Dando corpo a aplicação' },
    { num: 'B3', focus: 'Figma + UI/UX para devs', exit: 'Levando o Desing para o Código' },
    { num: 'B4', focus: 'JavaScript básico', exit: 'Gerando função' },
    { num: 'B5', focus: 'Introdução de APIs', exit: 'O que é API, como funciona e como usar' },
    { num: 'B6', focus: 'Git/GitHub', exit: 'O comunismo dos DEVs' },
    { num: 'B7', focus: 'React + componentes + design system', exit: 'Tecnologias que vão mudar sua aplicação' },
    { num: 'B8', focus: 'Responsividade', exit: 'Acessibilidade, performance, testes' },
    { num: 'B9', focus: 'O mundo', exit: 'ADEUS' },
  ];

  return (
    <section ref={sectionRef} style={{
      background: colors.background.alt,
      padding: window.innerWidth < 860 ? '100px 20px' : '100px 64px',

      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        <header ref={headerRef} style={{ marginBottom: '60px' }}>
          <div style={{
            fontFamily: "'Azeret Mono', monospace",
            fontSize: '10px',
            color: colors.text.accent,
            letterSpacing: '0.2em',

            marginBottom: '16px',
            textAlign: 'center'
          }}>
            VISÃO GERAL
          </div>
          <h2 style={{
            fontSize: 'clamp(32px, 4vw, 52px)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            marginBottom: '8px',
            color: colors.text.primary,
            textAlign: 'center'

          }}>
            Uma jornada em 10 Blocos.
          </h2>
          <p style={{ fontSize: '15px', textAlign: 'center', color: colors.text.muted }}>
            Cada bloco combina teoria e prática, sem prática não existe aprendizado.

          </p>
        </header>

        <div style={{ overflowX: 'auto', width: '100%' }}>
          <table ref={tableRef} style={{
            width: '100%',
            borderCollapse: 'collapse',
            minWidth: '700px'
          }}>
            <thead>
              <tr style={{ background: colors.background.card, borderBottom: `2px solid ${colors.ui.borderAlt}` }}>
                <th style={thStyle}>BLOCO</th>

                <th style={thStyle}>Foco principal</th>
                <th style={thStyle}>Propósito</th>
              </tr>
            </thead>
            <tbody>
              {rowData.map((row, i) => (
                <tr key={i} style={{
                  borderBottom: `1px solid ${colors.ui.borderAlt}`,
                  transition: 'background 0.2s ease, transform 0.2s ease',
                  cursor: 'pointer'
                }}
                  onClick={() => scrollToSection(`b${i}`)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = colors.background.card;
                    e.currentTarget.style.transform = 'translateX(8px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  <td style={{ ...tdStyle, color: blocks[i]?.color, fontFamily: "'Azeret Mono', monospace", fontWeight: 700 }}>
                    {row.num}
                  </td>
                  <td style={{ ...tdStyle, color: colors.text.primary, fontWeight: 500 }}>{row.focus}</td>
                  <td style={{ ...tdStyle, color: colors.text.muted, fontSize: '12px' }}>{row.exit}</td>
                </tr>
              ))}

            </tbody>
          </table>
        </div>

        <div style={{
          marginTop: '40px',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '12px 24px'
        }}>
          {blocks.map((b, i) => (
            <div key={i}
              onClick={() => scrollToSection(b.id)}
              style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', transition: 'opacity 0.2s' }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
            >
              <div style={{ width: '8px', height: '8px', borderRadius: '3px', background: b.color }} />
              <span style={{
                fontFamily: "'Azeret Mono', monospace",
                fontSize: '10px',
                color: colors.text.muted,
                textTransform: 'uppercase'
              }}>
                {b.id.toUpperCase()}
              </span>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

const thStyle = {
  fontFamily: "'Azeret Mono', monospace",
  fontSize: '10px',
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: colors.text.muted,
  padding: '16px',

  textAlign: 'left',
};

const tdStyle = {
  padding: '18px 16px',
  fontSize: '14px',
};

export default OverviewSection;
