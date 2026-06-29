import React from 'react';
import { Typography } from '@mui/material';
import { DashboardCard, SectionHeader, COLORS } from '../components/SharedLayout';

export default function Overview() {
  return (
    <DashboardCard>
      <SectionHeader title="SYSTEM OVERVIEW" />
      <Typography sx={{ fontSize: '1.05rem', fontWeight: 300, lineHeight: 1.8, color: COLORS.textLight }}>
        Software Developer specializing in complete architecture bridging frontend interfaces and deep automation workflows. Proficient in executing highly scalable web frameworks using React and Material UI, while constructing interactive multi-channel conversational layers. Experienced in handling asynchronous communication structures and database operations to maintain complete continuous uptime and transactional reliability.
      </Typography>
    </DashboardCard>
  );
}