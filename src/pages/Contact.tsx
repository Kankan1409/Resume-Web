import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import { DashboardCard, SectionHeader, COLORS } from '../components/SharedLayout';

export default function Contact() {
  return (
    <DashboardCard>
      <SectionHeader title="COMMUNICATIONS PORT" />
      <Grid container spacing={3} sx={{ mt: '15px' }}>
        <Grid size={{ xs: 12, sm: 6 }}> 
          <Box sx={{ background: 'rgba(0,0,0,0.2)', p: '15px 20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.03)' }}>
            <Typography sx={{ fontSize: '0.75rem', color: COLORS.slateGray, textTransform: 'uppercase' }}>Secure Node Line</Typography>
            <Typography sx={{ fontSize: '1rem', fontWeight: 500, color: COLORS.textLight, mt: '3px' }}>062-478-7326</Typography>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Box sx={{ background: 'rgba(0,0,0,0.2)', p: '15px 20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.03)' }}>
            <Typography sx={{ fontSize: '0.75rem', color: COLORS.slateGray, textTransform: 'uppercase' }}>Digital Mail</Typography>
            <Typography sx={{ fontSize: '1rem', fontWeight: 500, color: COLORS.textLight, mt: '3px' }}>Kanyarat.melanon@gmail.com</Typography>
          </Box>
        </Grid>
      </Grid>
    </DashboardCard>
  );
}