import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import TechCarousel from './TechCarousel';
import { colors } from '../theme/colors';


gsap.registerPlugin(TextPlugin);

const HeroSection = () => {
  const canvasRef = useRef(null);
  const h1Ref = useRef(null);
  const eyebrowRef = useRef(null);
  const descRef = useRef(null);
  const pillRowRef = useRef(null);
  const statsBarRef = useRef(null);
  const scrollIndicatorRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 860);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Stats values
  const [stats, setStats] = useState([
    { val: 0, target: 10, label: 'Blocos' },
    { val: 0, target: 30, label: 'Links gratuitos' },
    { val: 0, target: 18, label: 'Projetos práticos' },
    { val: 0, target: 1, label: 'Framework - React' },
    { val: '∞', target: '∞', label: 'Projeto em curso' },
  ]);

  useEffect(() => {
    // ─── PARTICLES ───
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let rafId;

    const particles = [];
    const count = isMobile ? 30 : 60;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.16,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.3 + 0.1
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(240, 121, 58, ${p.opacity})`; // Keeping as is or adding to colors?
        // Actually, let's use colors.text.accent for the base color if possible, but the original was rgba(240, 121, 58).
        // That is #F0793A.
        ctx.fillStyle = `${colors.text.accent}${Math.floor(p.opacity * 255).toString(16).padStart(2, '0')}`;

        ctx.fill();
      });
      rafId = requestAnimationFrame(draw);
    };
    draw();

    // ─── ANIMATIONS ───
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

    tl.fromTo(eyebrowRef.current, { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.2 });

    tl.to(h1Ref.current, {
      duration: 1.8,
      text: { value: 'Front-End | \n2026', delimiter: '' },
      ease: 'none',
    }, '-=0.3');

    tl.fromTo(descRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.5');

    const pills = pillRowRef.current;
    tl.fromTo(pills, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.7 }, '-=0.4');

    // Stats Intersection Observer
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animateStats();
        observer.disconnect();
      }
    }, { threshold: 0.5 });
    observer.observe(statsBarRef.current);

    const animateStats = () => {
      stats.forEach((s, idx) => {
        if (typeof s.target === 'number') {
          let current = 0;
          const interval = setInterval(() => {
            current += Math.ceil(s.target / 30);
            if (current >= s.target) {
              current = s.target;
              clearInterval(interval);
            }
            setStats(prev => {
              const next = [...prev];
              next[idx].val = current;
              return next;
            });
          }, 40);
        }
      });
    };

    tl.fromTo(scrollIndicatorRef.current, { opacity: 0 }, { opacity: 1, duration: 1, delay: 0.5 });

    // Scroll Indicator Animation
    const inner = scrollIndicatorRef.current.querySelector('.inner');
    gsap.to(inner, { y: 20, repeat: -1, yoyo: true, duration: 1.2, ease: 'power2.inOut' });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
      observer.disconnect();
    };
  }, [isMobile]);


  return (
    <section style={{
      minHeight: '100vh',
      background: colors.background.dark,
      position: 'relative',

      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: isMobile ? '80px 20px' : '80px 64px'
    }}>
      {/* DECORATIVE GRID */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        background: `
          repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255, 255, 255, 0.015) 40px),
          repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255, 255, 255, 0.015) 40px)
        `

      }} />

      {/* CANVAS PARTICLES */}
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none' }} />

      {/* GLOW */}
      <div style={{
        position: 'absolute',
        right: '-100px',
        top: '-100px',
        width: '600px',
        height: '600px',
        borderRadius: '9999px',
        background: `radial-gradient(circle, ${colors.ui.glow} 0%, transparent 70%)`,

        zIndex: 1,
        pointerEvents: 'none'
      }} />

      <div style={{
        position: 'relative',
        zIndex: 2,
        maxWidth: '1200px',
        margin: '0 auto',
        width: '100%'
      }}>
        {/* EYEBROW */}
        <div ref={eyebrowRef} style={{
          fontFamily: "'Azeret Mono', monospace",
          fontSize: '10px',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: colors.text.accent,
          marginBottom: '22px',

          display: 'flex',
          alignItems: 'center',
          gap: '12px',
        }}>
          <div style={{ flex: 1, height: '1px', background: `${colors.text.accent}4D`, maxWidth: '50px' }} />
          <span>BY - Cyber Bee Lab</span>
          <div style={{ flex: 1, height: '1px', background: `${colors.text.accent}4D`, maxWidth: '50px' }} />

        </div>

        {/* HEADLINE */}
        <h1 ref={h1Ref} style={{
          fontSize: 'clamp(52px, 7vw, 96px)',
          fontWeight: 800,
          lineHeight: 0.92,
          letterSpacing: '-0.04em',
          marginBottom: '28px',
          whiteSpace: 'pre-line',
          color: colors.text.primary
        }}>

          {/* TextPlugin will fill this */}
        </h1>

        {/* DESCRIPTION */}
        <p ref={descRef} style={{
          fontSize: '15px',
          color: colors.text.secondary,
          maxWidth: '620px',

          lineHeight: 1.6,
          marginBottom: '36px'
        }}>
          Um grupo de estudos com um RoadMap estruturado em blocos progressivos, tendo o objetivo de formar desenvolvedores Front-End,
          do básico ao avançado.
        </p>

        {/* TECH CAROUSEL */}
        <div ref={pillRowRef} style={{ marginBottom: '58px' }}>
          <TechCarousel />
        </div>

        {/* STATS BAR */}
        <div ref={statsBarRef} style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(5, 1fr)',
          gap: '12px',
          background: 'rgba(0, 0, 0, 0)',
          border: `1px solid ${colors.ui.border}`,
          borderRadius: '18px',

          overflow: 'hidden'
        }}>
          {stats.map((s, i) => (
            <div key={i} style={{
              padding: '10px 30px',
              background: 'rgba(0, 0, 0, 0.04)',
              display: 'flex',
              flexDirection: 'column',
              gap: '2px',
              textAlign: 'center'

            }}>
              <span style={{
                fontFamily: "'Azeret Mono', monospace",
                fontSize: '28px',
                fontWeight: 600,
                color: colors.text.stats


              }}>
                {s.val}{typeof s.target === 'number' && i < 4 ? '' : ''}
              </span>
              <span style={{
                fontSize: '10px',
                color: colors.text.secondary,
                letterSpacing: '0.08em',

                textTransform: 'uppercase',
              }}>
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div ref={scrollIndicatorRef} style={{
        position: 'absolute',
        bottom: '32px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        zIndex: 2
      }}>
        <span style={{
          fontFamily: "'Azeret Mono', monospace",
          fontSize: '9px',
          letterSpacing: '0.2em',
          color: `${colors.text.primary}33`
        }}>SCROLL</span>

        <div style={{ width: '1px', height: '40px', overflow: 'hidden', position: 'relative' }}>
          <div className="inner" style={{
            width: '100%',
            height: '50%',
            background: `linear-gradient(to bottom, transparent, ${colors.ui.scrollGradient})`,

            position: 'absolute',
            top: '-20px'
          }} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
