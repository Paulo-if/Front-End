import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { colors } from '../theme/colors';


gsap.registerPlugin(ScrollTrigger);

const LinkCard = ({ link, color, pale }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '14px',
        padding: '14px 18px',
        background: isHovered ? colors.background.cardHover : colors.background.card,
        border: `1px solid ${colors.ui.borderAlt}`,

        borderColor: isHovered ? `${color}66` : '#2e2a24',
        borderRadius: '8px',
        textDecoration: 'none',
        transform: isHovered ? 'translateX(4px)' : 'translateX(0)',
        boxShadow: isHovered ? `0 4px 12px ${pale}` : 'none',
        transition: 'all 0.2s ease',
      }}
    >
      <div style={{
        width: '32px',
        height: '32px',
        borderRadius: '8px',
        background: `${color}15`,
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        fontSize: '16px',
        flexShrink: 0
      }}>
        {typeof link.icon === 'string' ? link.icon : (
          <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {link.icon}
          </span>
        )}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <span style={{
          fontSize: '13px',
          fontWeight: 600,
          color: colors.text.primary,
          display: 'block',

          lineHeight: 1.3,
          marginBottom: '2px'
        }}>
          {link.label}
        </span>
        <span style={{
          fontFamily: "'Azeret Mono', monospace",
          fontSize: '9px',
          color: colors.text.muted,
          display: 'block',

          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          maxWidth: '100%'
        }}>
          {link.display}
        </span>
      </div>
    </a>
  );
};

const BlockSection = ({ block, index }) => {
  const sectionRef = useRef(null);
  const glyphRef = useRef(null);
  const headerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax Glyph
      gsap.to(glyphRef.current, {
        y: -60,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        }
      });

      // Header reveal
      gsap.fromTo(headerRef.current,
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 75%',
          }
        }
      );

      // Content reveal
      gsap.fromTo(contentRef.current.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const cardStyle = {
    background: colors.background.card,
    border: `1px solid ${colors.ui.borderAlt}`,
    borderRadius: '10px',

    padding: '20px 22px',
    height: '100%',
  };

  const labelStyle = {
    fontFamily: "'Azeret Mono', monospace",
    fontSize: '9.5px',
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: colors.text.muted,
    marginBottom: '16px',

    display: 'block'
  };

  return (
    <section ref={sectionRef} id={block.id} style={{
      minHeight: '100vh',
      background: index % 2 === 0 ? colors.background.alt : colors.background.card,
      position: 'relative',

      overflow: 'hidden',
      padding: window.innerWidth < 860 ? '80px 20px' : '100px 64px',
      display: 'flex',
      alignItems: 'center'
    }}>
      {/* GLYPH DECORATIVO */}
      <div ref={glyphRef} style={{
        position: 'absolute',
        right: '-20px',
        top: '50%',
        fontFamily: "'Azeret Mono', monospace",
        fontWeight: 800,
        fontSize: 'clamp(160px, 20vw, 280px)',
        color: 'transparent',
        WebkitTextStroke: `1px ${block.pale.replace('0.08', '0.12')}`,
        lineHeight: 1,
        userSelect: 'none',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: window.innerWidth < 860 ? 0.05 : 1
      }}>
        {index}
      </div>

      {/* GLOW */}
      <div style={{
        position: 'absolute',
        left: '-100px',
        top: '30%',
        width: '400px',
        height: '400px',
        borderRadius: '9999px',
        background: `radial-gradient(circle, ${block.pale.replace('0.08', '0.18')} 0%, transparent 70%)`,
        filter: 'blur(60px)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
        {/* HEADER */}
        <div ref={headerRef} style={{
          display: 'flex',
          alignItems: 'baseline',
          gap: '20px',
          marginBottom: '40px',
          paddingBottom: '24px',
          borderBottom: `1px solid ${colors.ui.borderAlt}`
        }}>

          <div style={{
            fontFamily: "'Azeret Mono', monospace",
            fontSize: '10px',
            fontWeight: 600,
            padding: '5px 12px',
            borderRadius: '8px',
            background: block.pale,
            border: `1px solid ${block.color}33`,
            color: block.color,
            whiteSpace: 'nowrap',
            letterSpacing: '0.1em'
          }}>
            {block.num}
          </div>
          <div>
           <h2 style={{ fontSize: 'clamp(20px, 3vw, 32px)', fontWeight: 800, color: colors.text.primary, marginBottom: '4px' }}>
              {block.title}
            </h2>
            <p style={{ fontSize: '14px', color: colors.text.muted }}>{block.sub}</p>

          </div>
        </div>

        {/* CONTENT */}
        <div ref={contentRef}>
          {/* OBJETIVO */}
          <div style={{
            padding: '16px 20px',
            background: block.pale,
            borderLeft: `3px solid ${block.color}`,
            borderRadius: '8px',
            marginBottom: '32px',
             fontSize: '14px',
            fontWeight: 500,
            color: colors.text.primary,
            lineHeight: 1.5

          }}>
            🎯 {block.goal}
          </div>

          {/* GRID TÓPICOS */}
          <div style={{
            marginBottom: '32px'
          }}>
            <div style={cardStyle}>
              <span style={labelStyle}>Tópicos principais</span>
              <ul style={{
                listStyle: 'none',
                display: 'grid',
                gridTemplateColumns: window.innerWidth < 860 ? '1fr' : '1fr 1fr',
                gap: '8px 40px'
              }}>
                {block.topics.map((topic, i) => (
                  <li key={i} style={{
                    fontSize: '13px',
                    color: colors.text.secondary,
                    marginBottom: '8px',

                    paddingLeft: '18px',
                    position: 'relative',
                    lineHeight: 1.5
                  }}>
                    <div style={{
                      position: 'absolute',
                      left: 0,
                      top: '7px',
                      width: '4px',
                      height: '4px',
                      borderRadius: '50%',
                      background: block.color
                    }} />
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* LINKS */}
          {block.links && block.links.length > 0 && (
            <div style={{ marginBottom: '32px', textAlign: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
               <div style={{ flex: 1, height: '1px', background: colors.ui.borderAlt }} />
                <span style={{ ...labelStyle, marginBottom: 0 }}>Links de estudo</span>
                <div style={{ flex: 1, height: '1px', background: colors.ui.borderAlt }} />

              </div>
              <div style={{
                display: 'grid',
                gridTemplateColumns: window.innerWidth < 860 ? '1fr' : 'repeat(auto-fit, minmax(280px, 340px))',
                justifyContent: 'center',
                gap: '16px'
              }}>
                {block.links.map((link, i) => (
                  <LinkCard key={i} link={link} color={block.color} pale={block.pale} />
                ))}
              </div>
            </div>
          )}

          {/* PROJETOS */}
          {block.projects && block.projects.length > 0 && (
            <div style={{ ...cardStyle, background: 'rgba(255,255,255,0.01)', textAlign: 'center' }}>
              <span style={{ ...labelStyle, marginBottom: '20px' }}>Projetos deste bloco</span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
                {block.projects.map((project, i) => (
                  <div key={i} style={{
                    fontSize: '11px',
                    padding: '8px 18px',
                    borderRadius: '9999px',
                     border: `1px solid ${block.color}44`,
                    background: block.pale,
                    color: colors.text.primary,
                    whiteSpace: 'nowrap',

                    fontWeight: 500
                  }}>
                    {project}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlockSection;
