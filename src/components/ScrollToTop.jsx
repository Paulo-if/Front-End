import React, { useState, useEffect } from 'react';
import { ChevronUpIcon } from './TechIcons';
import { colors } from '../theme/colors';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling 400px
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: '32px',
        right: '32px',
        width: '46px',
        height: '46px',
        borderRadius: '12px',
        background: colors.background.card,
        border: `1px solid ${colors.ui.borderAlt}`,
        color: colors.text.accent,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        zIndex: 1000,
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.8)',
        pointerEvents: isVisible ? 'all' : 'none',
        boxShadow: isVisible ? `0 8px 24px rgba(0,0,0,0.4)` : 'none',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = colors.background.cardHover;
        e.currentTarget.style.borderColor = `${colors.text.accent}40`;
        e.currentTarget.style.transform = 'translateY(-4px) scale(1.05)';
        e.currentTarget.style.boxShadow = `0 12px 28px rgba(0,0,0,0.5), 0 0 15px ${colors.text.accent}20`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = colors.background.card;
        e.currentTarget.style.borderColor = colors.ui.borderAlt;
        e.currentTarget.style.transform = 'translateY(0) scale(1)';
        e.currentTarget.style.boxShadow = `0 8px 24px rgba(0,0,0,0.4)`;
      }}
      aria-label="Scroll to top"
    >
      <ChevronUpIcon size={22} />
    </button>
  );
};

export default ScrollToTop;
