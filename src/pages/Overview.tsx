import React from 'react';
import { Typography } from '@mui/material';
import { DashboardCard, SectionHeader, COLORS } from '../components/SharedLayout';

export default function Overview() {
  return (
    <DashboardCard>
      <SectionHeader title="Profile" />
      <Typography sx={{ fontSize: '1.05rem', fontWeight: 300, lineHeight: 1.8, color: COLORS.textLight }}>
        Junior Software Developer with experience in frontend development using React, TypeScript, and JavaScript, along with SQL and database management. Passionate about building user-friendly web applications, solving technical problems, and continuously learning new technologies.
      </Typography>
    </DashboardCard>
  );
}