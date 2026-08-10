import React, { useEffect, useRef, useState } from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';

export const COLORS = {
  bgDarker: '#0b0f19',
  bgMain: '#0f172a',
  accentBlue: '#2563eb',
  accentCyan: '#06b6d4',
  slateGray: '#94a3b8',
  glassCard: 'rgba(15, 23, 42, 0.6)',
  glassBorder: 'rgba(6, 182, 212, 0.15)',
  textLight: '#f8fafc',
};

interface DashboardCardProps {
  children: React.ReactNode;
}

export const DashboardCard: React.FC<DashboardCardProps> = ({ children }) => (
  <Card
    sx={{
      background: COLORS.glassCard,
      border: `1px solid ${COLORS.glassBorder}`,
      borderRadius: '20px',
      backdropFilter: 'blur(10px)',
      boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
      position: 'relative',
      overflow: 'hidden',
      width: '100%',
      animation: 'fadeIn 0.5s ease-in-out',
      '@keyframes fadeIn': {
        from: { opacity: 0, transform: 'translateY(10px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
      },
      '&::after': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '2px',
        background: `linear-gradient(90deg, ${COLORS.accentBlue}, ${COLORS.accentCyan})`,
      }
    }}
  >
    <CardContent sx={{ p: '35px !important' }}>{children}</CardContent>
  </Card>
);

/**
 * Reveal: fades + slides its children up into place the first time
 * they scroll into view. Wrap any section/card with it for a
 * scroll-triggered entrance animation.
 */
export const Reveal: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Box
      ref={ref}
      sx={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.65s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.65s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
      }}
    >
      {children}
    </Box>
  );
};

/**
 * TypewriterText: types out `text` one character at a time with a
 * blinking cursor. Nice small "ลูกเล่น" touch for hero/subtitle text.
 */
export const TypewriterText: React.FC<{ text: string; speed?: number; sx?: object }> = ({ text, speed = 55, sx }) => {
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    setDisplayed('');
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [text, speed]);

  return (
    <Typography component="span" sx={sx}>
      {displayed}
      <Box
        component="span"
        sx={{
          display: 'inline-block',
          width: '2px',
          height: '0.9em',
          bgcolor: 'currentColor',
          ml: '3px',
          verticalAlign: 'text-bottom',
          animation: 'blinkCursor 0.9s step-end infinite',
          '@keyframes blinkCursor': { '50%': { opacity: 0 } },
        }}
      />
    </Typography>
  );
};

export const SectionHeader: React.FC<{ title: string }> = ({ title }) => (
  <Typography
    variant="h5"
    sx={{
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 700,
      fontSize: '1.8rem',
      mb: '30px',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      color: COLORS.textLight,
      letterSpacing: '-0.5px'
    }}
  >
    <Box component="span" sx={{ color: COLORS.accentCyan }}>//</Box> {title}
  </Typography>
);