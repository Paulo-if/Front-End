import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { colors } from '../theme/colors';


gsap.registerPlugin(ScrollTrigger);

const ProgressBar = () => {
  const barRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(barRef.current, {
        width: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: document.body,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.3,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        height: '2px',
        background: 'transparent',
      }}
    >
      <div
        ref={barRef}
        style={{
           height: '100%',
          background: `linear-gradient(90deg, #e85d20, ${colors.text.accent})`,
          width: '0%',

          transformOrigin: 'left',
        }}
      />
    </div>
  );
};

export default ProgressBar;
