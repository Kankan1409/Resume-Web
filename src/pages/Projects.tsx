import React from 'react';
import { Box, Typography } from '@mui/material';
import { DashboardCard, SectionHeader, COLORS } from '../components/SharedLayout';

export default function Projects() {
  const projects = [
    {
      title: 'LINE Chatbot – Hospital Maintenance System',
      desc: ['Developed frontend for a hospital maintenance reporting LINE Chatbot.',
        'Integrated backend APIs to display repair status and information'
      ],
      fullWidth: false
    },
    {
      title: 'CMMS System',
      desc: ['Responsible for frontend development of selected modules.',
        'Translated UI designs into functional interfaces',
        'Integrated APIs and resolved assigned bugs'
      ],
      fullWidth: false
    },
    {
      title: 'RCM System',
      desc: ['Developed and maintained frontend components in collaboration with the team'],
      fullWidth: true
    }
  ];

  return (
    <DashboardCard>
      <SectionHeader title="EXPERIMENTAL & REAL PROJECTS" />
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
        gridAutoRows: 'auto',
        alignItems: 'stretch',
        gap: '24px',
      }}>
        {projects.map((proj, index) => (
          <Box key={index} sx={{
            gridColumn: proj.fullWidth ? { xs: '1 / -1', sm: '1 / -1' } : 'auto',
            background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px', p: '25px',
            display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
            position: 'relative', overflow: 'hidden',
            transition: 'transform 0.35s cubic-bezier(0.22,1,0.36,1), border-color 0.35s, background-color 0.35s, box-shadow 0.35s',
            opacity: 0,
            animation: 'projectIn 0.5s ease forwards',
            animationDelay: `${index * 0.12}s`,
            '@keyframes projectIn': {
              from: { opacity: 0, transform: 'translateY(18px)' },
              to: { opacity: 1, transform: 'translateY(0)' },
            },
            '&::before': {
              content: '""', position: 'absolute', top: 0, left: '-150%', width: '60%', height: '100%',
              background: 'linear-gradient(120deg, transparent, rgba(6,182,212,0.12), transparent)',
              transition: 'left 0.7s ease',
              pointerEvents: 'none',
            },
            '&:hover': {
              borderColor: COLORS.accentBlue, background: 'rgba(37, 99, 235, 0.03)',
              transform: 'translateY(-6px)',
              boxShadow: '0 15px 35px rgba(6, 182, 212, 0.12)',
            },
            '&:hover::before': { left: '150%' }
          }}>
            <Box>
              <Typography variant="h6" sx={{ fontSize: '1.2rem', mb: '10px', fontWeight: 600, color: COLORS.textLight }}>{proj.title}</Typography>
            </Box>
            <Box>
              {proj.desc.map((line, i) => (
                <Typography key={i} sx={{ fontSize: '0.85rem', color: COLORS.slateGray, lineHeight: 1.5, mb: i < proj.desc.length - 1 ? '4px' : 0 }}>
                  {line}
                </Typography>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </DashboardCard>
  );
}