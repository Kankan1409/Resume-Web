import React, { useState } from 'react';
import { Box, Typography, Avatar, List, ListItem, ListItemButton, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import { COLORS } from './components/SharedLayout';

// นำเข้าหน้าต่าง ๆ ที่เราแยกไฟล์ไว้
import Overview from './pages/Overview';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import DashboardHome from './pages/DashboardHome';

export default function DeveloperDashboard() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    // กำหนด State เพื่อระบุหน้าที่กำลังเปิดอยู่
    const [activePage, setActivePage] = useState<string>('home');

    // ฟังก์ชันสวิตช์หน้า Page Rendering
    const renderPage = () => {
        switch (activePage) {
            case 'home': return <DashboardHome />;
            case 'overview': return <Overview />;
            case 'skills': return <Skills />;
            case 'experience': return <Experience />;
            case 'projects': return <Projects />;
            case 'contact': return <Contact />;
            default: return <Overview />;
        }
    };

    const menuItems = [
        { id: 'overview', name: 'Overview' },
        { id: 'skills', name: 'Tech Arsenal' },
        { id: 'experience', name: 'Experience' },
        { id: 'projects', name: 'Projects' },
        { id: 'contact', name: 'Contact Port' }
    ];

    return (
        <Box sx={{ bgcolor: COLORS.bgDarker, color: COLORS.textLight, minHeight: '100vh', display: 'flex', flexDirection: isMobile ? 'column' : 'row', overflowX: 'hidden' }}>

            {/* Background Glows */}
            <Box sx={{ position: 'fixed', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(37, 99, 235, 0.08) 0%, rgba(11, 15, 25, 0) 70%)', borderRadius: '50%', top: '-10%', right: '-10%', pointerEvents: 'none', filter: 'blur(80px)' }} />
            <Box sx={{ position: 'fixed', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, rgba(11, 15, 25, 0) 70%)', borderRadius: '50%', bottom: '-10%', left: '20%', pointerEvents: 'none', filter: 'blur(80px)' }} />

            {/* --- SIDEBAR LAYOUT --- */}
            <Box
                component="aside"
                sx={{
                    width: isMobile ? '100%' : '320px',
                    background: 'rgba(15, 23, 42, 0.8)',
                    backdropFilter: 'blur(20px)',
                    borderRight: isMobile ? 'none' : `1px solid ${COLORS.glassBorder}`,
                    borderBottom: isMobile ? `1px solid ${COLORS.glassBorder}` : 'none',
                    position: isMobile ? 'relative' : 'fixed',
                    top: 0,
                    bottom: isMobile ? 'auto' : 0,
                    left: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    p: isMobile ? '30px' : '40px 30px',
                    zIndex: 10,
                }}
            >
                <Box sx={{ textAlign: 'center' }}>
                    <Avatar
                        sx={{
                            width: 110, height: 110, borderRadius: '24px',
                            background: `linear-gradient(135deg, ${COLORS.accentBlue}, ${COLORS.accentCyan})`,
                            margin: '0 auto 20px', fontSize: '2.5rem', fontWeight: 700, fontFamily: 'Montserrat',
                            boxShadow: `0 0 25px rgba(6, 182, 212, 0.25)`, border: '1px solid rgba(255,255,255,0.2)'
                        }}
                    >
                        KM
                    </Avatar>
                    <Typography variant="h6" sx={{ fontFamily: 'Montserrat', fontSize: '1.25rem', fontWeight: 700, mb: '5px' }}>
                        Kanyarat Melanon
                    </Typography>
                    <Typography sx={{ fontSize: '0.85rem', color: COLORS.accentCyan, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '1px' }}>
                        Software Developer
                    </Typography>
                </Box>

                {/* Navigation Menu */}
                <List component="nav" sx={{ my: isMobile ? '20px' : '40px', display: isMobile ? 'flex' : 'block', justifyContent: 'space-around', flexWrap: 'wrap', p: 0, gap: '5px' }}>
                    {menuItems.map((item) => {
                        const isActive = activePage === item.id;
                        return (
                            <ListItem key={item.id} disablePadding sx={{ mb: isMobile ? 0 : '12px', width: 'auto' }}>
                                <ListItemButton
                                    onClick={() => setActivePage(item.id)}
                                    sx={{
                                        color: isActive ? COLORS.textLight : COLORS.slateGray,
                                        bgcolor: isActive ? 'rgba(37, 99, 235, 0.15)' : 'transparent',
                                        borderLeft: !isMobile && isActive ? `3px solid ${COLORS.accentCyan}` : '3px solid transparent',
                                        borderRadius: '12px', px: '15px', py: '10px', transition: 'all 0.3s',
                                        '&:hover': { bgcolor: 'rgba(37, 99, 235, 0.1)', color: COLORS.textLight }
                                    }}
                                >
                                    <ListItemText
                                        primary={
                                            <Typography
                                                sx={{
                                                    fontSize: '0.95rem',
                                                    fontWeight: isActive ? 600 : 400,
                                                    color: isActive ? COLORS.textLight : COLORS.slateGray
                                                }}
                                            >
                                                {item.name}
                                            </Typography>
                                        }
                                    />
                                </ListItemButton>
                            </ListItem>
                        );
                    })}
                </List>

                <Box sx={{ borderTop: '1px solid rgba(255,255,255,0.05)', pt: '20px', color: COLORS.slateGray }}>
                    {/* <Typography variant="body2" sx={{ fontSize: '0.8rem' }}>© 2026 Kanyarat M.</Typography> © 2026 Kanyarat M.
                    <Typography variant="body2" sx={{ fontSize: '0.7rem', color: COLORS.accentCyan, mt: '5px' }}>Modular Architecture</Typography> */}
                </Box>
            </Box>

            {/* --- DYNAMIC MAIN CONTENT CONTAINER --- */}
            <Box component="main" sx={{ marginLeft: isMobile ? 0 : '320px', flexGrow: 1, p: isMobile ? '30px 20px' : '60px 50px', maxWidth: '1000px', display: 'flex', alignItems: 'center', minHeight: isMobile ? 'auto' : '100vh', zIndex: 1 }}>
                {renderPage()}
            </Box>

        </Box>
    );
}