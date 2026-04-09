import React from 'react';
import { colors } from '../theme/colors';


const FooterSection = () => {
  return (
    <footer style={{
      background: colors.background.footer,
      padding: window.innerWidth < 860 ? '48px 20px' : '48px 64px',

      borderTop: `1px solid ${colors.ui.borderAlt}`,
    }}>
      <div style={{
        maxWidth: '12000px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '24px'
      }}>
         <div style={{ fontSize: '12px', color: colors.text.muted }}>
          What's your juice ? 
        </div>

        
        <div style={{
           fontFamily: "'Azeret Mono', monospace",
          fontSize: '10px',
          color: colors.text.muted,
          display: 'flex',

          gap: '24px',
          textTransform: 'uppercase',
          letterSpacing: '0.05em'
        }}>
          <span>You are shaped by your environment!</span>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
