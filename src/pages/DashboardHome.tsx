import React from 'react';
import { Box } from '@mui/material';
import Overview from './Overview';
import Skills from './Skills';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';

export default function DashboardHome() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
      <Overview />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </Box>
  );
}