import React from 'react';
import { Box, Typography } from '@mui/material';
import { DashboardCard, SectionHeader, COLORS } from '../components/SharedLayout';

export default function Experience() {
  const history = [
    {
      project: 'Programmer',
      role: 'QMB Co., Ltd.',
      period: '2026 – Present',
      detail: [
        'Wrote and executed SQL queries (SELECT, INSERT, UPDATE, DELETE) for data management.',
        'Analyzed and debugged stored procedures to resolve system issues.',
        'Synchronized data between systems to ensure consistency and accuracy.',
        'Supported users by investigating and resolving system-related issues.'
      ]
    },
    {
      project: 'Frontend Developer',
      role: 'Associated Artists Productions',
      period: '2025-2026',
      detail: [
        'Developed and improved user interfaces based on project requirements.',
        'Built web applications and LINE LIFF using React and JavaScript.',
        'Collaborated with backend developers to integrate APIs.',
      ]
    }
  ];

  return (
    <DashboardCard>
      <SectionHeader title="Work Experience" />
      <Box sx={{
        display: 'flex', flexDirection: 'column', gap: '30px', position: 'relative',
        '&::before': { content: '""', position: 'absolute', left: '20px', top: '10px', bottom: '10px', width: '2px', background: 'rgba(37, 99, 235, 0.2)' }
      }}>
        {history.map((item, index) => (
          <Box key={index} sx={{
            pl: '50px', position: 'relative',
            opacity: 0,
            animation: 'timelineIn 0.55s ease forwards',
            animationDelay: `${index * 0.18}s`,
            '@keyframes timelineIn': {
              from: { opacity: 0, transform: 'translateX(-16px)' },
              to: { opacity: 1, transform: 'translateX(0)' },
            }
          }}>
            {/* จุดวงกลมบน Timeline — เต้นเบา ๆ เหมือนสัญญาณ live */}
            <Box sx={{
              width: '12px', height: '12px', bgcolor: COLORS.accentCyan, borderRadius: '50%',
              position: 'absolute', left: '15px', top: '8px',
              boxShadow: `0 0 10px ${COLORS.accentCyan}`,
              animation: 'dotPulse 2.2s ease-in-out infinite',
              animationDelay: `${index * 0.18}s`,
              '@keyframes dotPulse': {
                '0%, 100%': { boxShadow: `0 0 10px ${COLORS.accentCyan}`, transform: 'scale(1)' },
                '50%': { boxShadow: `0 0 18px ${COLORS.accentCyan}`, transform: 'scale(1.25)' },
              }
            }} />

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