import React from 'react';
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