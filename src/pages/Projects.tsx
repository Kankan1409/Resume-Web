import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { DashboardCard, SectionHeader, COLORS } from '../components/SharedLayout';

export default function Projects() {
  const projects = [
    { tag: 'Ecosystem Integration', title: 'LINE & Dialogflow Repair System', desc: 'An automated diagnostics system triggering task dispatches via custom LINE webhooks, synced natively with an MSSQL relational backend.', fullWidth: false },
    { tag: 'Secure Communications', title: 'Custom Matrix Chat Widget', desc: 'A decentralized UI module implementing secure matrix streaming, featuring interactive asynchronous message wrappers and float visibility states.', fullWidth: false },
    { tag: 'UI Architecture', title: 'MUI to Tailwind Component Compiler', desc: 'Isolated user interface engineering using Storybook layout tests, transforming highly coupled Material UI layouts into lightweight Tailwind component tokens.', fullWidth: true }
  ];

  return (
    <DashboardCard>
      <SectionHeader title="EXPERIMENTAL & REAL PROJECTS" />
      <Grid container spacing={3}>
        {projects.map((proj, index) => (
          <Grid size={{ xs: 12, sm: 6 }} key={index}>
            <Box sx={{
              background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px', p: '25px', height: '100%',
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between', transition: 'all 0.3s',
              '&:hover': { borderColor: COLORS.accentBlue, background: 'rgba(37, 99, 235, 0.03)', transform: 'scale(1.02)' }
            }}>
              <Box>
                <Typography sx={{ fontSize: '0.75rem', color: COLORS.accentCyan, textTransform: 'uppercase', fontWeight: 600, mb: '10px', letterSpacing: '0.5px' }}>{proj.tag}</Typography>
                <Typography variant="h6" sx={{ fontSize: '1.2rem', mb: '10px', fontWeight: 600, color: COLORS.textLight }}>{proj.title}</Typography>
              </Box>
              <Typography sx={{ fontSize: '0.85rem', color: COLORS.slateGray, lineHeight: 1.5 }}>{proj.desc}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </DashboardCard>
  );
}