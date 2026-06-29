import React from 'react';
import { Box, Typography } from '@mui/material';
import { DashboardCard, SectionHeader, COLORS } from '../components/SharedLayout';

export default function Experience() {
  const history = [
    {
      project: 'Technology Integration Project',
      role: 'Full Stack & Chatbot Integrator',
      period: '2025 - PRESENT',
      detail: 'Engineering robust backend stored procedures and environmental system pipelines. Securing synchronization between automated intent handlers and operational databases to protect cross-platform data correctness.'
    },
    {
      project: 'Web Architecture Projects',
      role: 'Frontend Application Developer',
      period: '2024 - 2025',
      detail: 'Constructed structural client-side environments using React and Tailwind CSS. Built customized interactive chat modules leveraging isolated state configurations and Storybook component debugging protocols.'
    }
  ];

  return (
    <DashboardCard>
      <SectionHeader title="OPERATIONAL HISTORY" />
      <Box sx={{ 
        display: 'flex', flexDirection: 'column', gap: '30px', position: 'relative',
        '&::before': { content: '""', position: 'absolute', left: '20px', top: '10px', bottom: '10px', width: '2px', background: 'rgba(37, 99, 235, 0.2)' }
      }}>
        {history.map((item, index) => (
          <Box key={index} sx={{ pl: '50px', position: 'relative' }}>
            {/* จุดวงกลมบน Timeline */}
            <Box sx={{ width: '12px', height: '12px', bgcolor: COLORS.accentCyan, borderRadius: '50%', position: 'absolute', left: '15px', top: '8px', boxShadow: `0 0 10px ${COLORS.accentCyan}` }} />
            
            {/* ชื่อโปรเจกต์และช่วงเวลา */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', mb: '5px', fontSize: '0.9rem' }}>
              <Typography sx={{ color: COLORS.accentCyan, fontWeight: 500 }}>{item.project}</Typography>
              <Typography sx={{ color: COLORS.slateGray }}>{item.period}</Typography>
            </Box>
            
            {/* ตำแหน่งงานและรายละเอียด */}
            <Typography variant="h6" sx={{ fontSize: '1.15rem', mb: '8px', fontWeight: 600, color: COLORS.textLight }}>{item.role}</Typography>
            <Typography sx={{ fontSize: '0.9rem', color: COLORS.slateGray, lineHeight: 1.6 }}>{item.detail}</Typography>
          </Box>
        ))}
      </Box>
    </DashboardCard>
  );
}