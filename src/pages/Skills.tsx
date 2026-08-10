import React from 'react';
import { Box, Grid, Chip, Stack } from '@mui/material';
import { Radar } from 'react-chartjs-2';
import { DashboardCard, SectionHeader, COLORS } from '../components/SharedLayout';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend, ChartOptions } from 'chart.js';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

export default function Skills() {
  const chartData = {
    labels: ['Frontend (MUI/Tailwind)', 'Backend & MSSQL', 'LINE Chatbot Ecosystem', 'Dialogflow NLU', 'State & Matrix SDK'],
    datasets: [
      {
        label: 'Skill Metrics',
        data: [92, 85, 95, 88, 80],
        backgroundColor: 'rgba(6, 182, 212, 0.15)',
        borderColor: COLORS.accentCyan,
        borderWidth: 2,
        pointBackgroundColor: COLORS.accentBlue,
        pointBorderColor: COLORS.bgMain,
        pointRadius: 4,
      },
    ],
  };

  const chartOptions: ChartOptions<'radar'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      r: {
        grid: { color: 'rgba(255, 255, 255, 0.05)' },
        angleLines: { color: 'rgba(255, 255, 255, 0.05)' },
        pointLabels: { color: COLORS.slateGray, font: { size: 10, family: 'Inter' } },
        ticks: { display: false },
        suggestedMin: 0,
        suggestedMax: 100
      }
    }
  };

  const skillList = [
    'React', 'TypeScript / JavaScript', 'Material UI (MUI)', 'Tailwind CSS',
    'HTML5', 'CSS3', 'SQL (Microsoft SQL Server)', 'LINE LIFF / LINE Messaging API',
    'Git'
  ];

  return (
    <DashboardCard>
      <SectionHeader title="Skills" />
      <Grid container spacing={4}>
        
        {/* ✅ บล็อกที่ 1: แก้ไขจาก item xs={12} md={7} มาเป็น size ตัวใหม่ */}
        <Grid size={{ xs: 12, md: 7 }}>
          <Stack direction="row" useFlexGap sx={{ flexWrap: 'wrap', gap: '10px' }}>
            {skillList.map((skill, index) => (
              <Chip
                key={skill}
                label={skill}
                sx={{
                  bgcolor: 'rgba(15, 23, 42, 0.5)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: COLORS.textLight,
                  borderRadius: '12px',
                  p: '18px 8px',
                  fontSize: '0.85rem',
                  opacity: 0,
                  animation: 'chipIn 0.45s ease forwards',
                  animationDelay: `${index * 0.06}s`,
                  transition: 'transform 0.25s ease, border-color 0.25s ease, background-color 0.25s ease',
                  '@keyframes chipIn': {
                    from: { opacity: 0, transform: 'translateY(10px) scale(0.9)' },
                    to: { opacity: 1, transform: 'translateY(0) scale(1)' },
                  },
                  '&:hover': {
                    borderColor: COLORS.accentCyan,
                    bgcolor: 'rgba(6, 182, 212, 0.05)',
                    transform: 'translateY(-3px) scale(1.05)'
                  }
                }}
              />
            ))}
          </Stack>
        </Grid>

        {/* ✅ บล็อกที่ 2: แก้ไขจาก xs={12} md={5} มาเป็น size ตัวใหม่ด้วยเช่นกัน */}
        {/* <Grid size={{ xs: 12, md: 5 }}>
          <Box sx={{ background: 'rgba(0,0,0,0.15)', borderRadius: '16px', p: '15px', height: '220px' }}>
            <Radar data={chartData} options={chartOptions} />
          </Box>
        </Grid> */}

      </Grid>
    </DashboardCard>
  );
}