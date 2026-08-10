import React, { useState } from 'react';
import { Box, Typography, Avatar, List, ListItem, ListItemButton, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import { COLORS, TypewriterText } from './components/SharedLayout';

// นำเข้าหน้าต่าง ๆ ที่เราแยกไฟล์ไว้
import Overview from './pages/Overview';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import DashboardHome from './pages/DashboardHome';
import PersonIcon from '@mui/icons-material/Person';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function DeveloperDashboard() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    // ใช้ history stack แทน state เดี่ยว เพื่อให้ปุ่ม Back ย้อนไปหน้าก่อนหน้าจริงๆ
    const [history, setHistory] = useState<string[]>(['home']);
    const activePage = history[history.length - 1];

    const navigateTo = (pageId: string) => {
        if (pageId === activePage) return;
        setHistory((prev) => [...prev, pageId]);
    };

    const goBack = () => {
        setHistory((prev) => (prev.length > 1 ? prev.slice(0, -1) : prev));
    };

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
        { id: 'overview', name: 'Profile' },
        { id: 'skills', name: 'Skills' },
        { id: 'experience', name: 'Experience' },
        { id: 'projects', name: 'Projects' },
        { id: 'contact', name: 'Contact Port' }
    ];

    return (
        <Box sx={{ bgcolor: COLORS.bgDarker, color: COLORS.textLight, minHeight: '100vh', display: 'flex', flexDirection: isMobile ? 'column' : 'row', overflowX: 'hidden' }}>

            {/* Background Glows — slowly drifting for a subtle "alive" feel */}
            <Box sx={{
                position: 'fixed', width: '500px', height: '500px',
                background: 'radial-gradient(circle, rgba(37, 99, 235, 0.08) 0%, rgba(11, 15, 25, 0) 70%)',
                borderRadius: '50%', top: '-10%', right: '-10%', pointerEvents: 'none', filter: 'blur(80px)',
                animation: 'floatBlobA 18s ease-in-out infinite',
                '@keyframes floatBlobA': {
                    '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
                    '50%': { transform: 'translate(-40px, 50px) scale(1.15)' },
                }
            }} />
            <Box sx={{
                position: 'fixed', width: '500px', height: '500px',
                background: 'radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, rgba(11, 15, 25, 0) 70%)',
                borderRadius: '50%', bottom: '-10%', left: '20%', pointerEvents: 'none', filter: 'blur(80px)',
                animation: 'floatBlobB 22s ease-in-out infinite',
                '@keyframes floatBlobB': {
                    '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
                    '50%': { transform: 'translate(50px, -40px) scale(1.1)' },
                }
            }} />

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
                            border: '1px solid rgba(255,255,255,0.2)',
                            transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                            animation: 'avatarGlow 3s ease-in-out infinite',
                            '@keyframes avatarGlow': {
                                '0%, 100%': { boxShadow: '0 0 25px rgba(6, 182, 212, 0.25)' },
                                '50%': { boxShadow: '0 0 40px rgba(6, 182, 212, 0.45)' },
                            },
                            '&:hover': {
                                transform: 'scale(1.06) rotate(-2deg)',
                                boxShadow: '0 0 45px rgba(6, 182, 212, 0.55)',
                            }
                        }}
                        src="/images/CV.png"
                    >
                        <PersonIcon />
                    </Avatar>
                    <Typography variant="h6" sx={{ fontFamily: 'Montserrat', fontSize: '1.25rem', fontWeight: 700, mb: '5px' }}>
                        Kanyarat Melanon
                    </Typography>
                    <TypewriterText
                        text="Software Developer"
                        speed={70}
                        sx={{ fontSize: '0.85rem', color: COLORS.accentCyan, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '1px' }}
                    />
                </Box>

                {/* Navigation Menu */}
                <List component="nav" sx={{ my: isMobile ? '20px' : '40px', display: isMobile ? 'flex' : 'block', justifyContent: 'space-around', flexWrap: 'wrap', p: 0, gap: '5px' }}>
                    {menuItems.map((item, index) => {
                        const isActive = activePage === item.id;
                        return (
                            <ListItem key={item.id} disablePadding sx={{
                                mb: isMobile ? 0 : '12px', width: 'auto',
                                opacity: 0,
                                animation: 'navItemIn 0.5s ease forwards',
                                animationDelay: `${index * 0.07}s`,
                                '@keyframes navItemIn': {
                                    from: { opacity: 0, transform: 'translateX(-12px)' },
                                    to: { opacity: 1, transform: 'translateX(0)' },
                                }
                            }}>
                                <ListItemButton
                                    onClick={() => navigateTo(item.id)}
                                    sx={{
                                        color: isActive ? COLORS.textLight : COLORS.slateGray,
                                        bgcolor: isActive ? 'rgba(37, 99, 235, 0.15)' : 'transparent',
                                        borderLeft: !isMobile && isActive ? `3px solid ${COLORS.accentCyan}` : '3px solid transparent',
                                        borderRadius: '12px', px: '15px', py: '10px',
                                        transition: 'all 0.3s cubic-bezier(0.22,1,0.36,1)',
                                        transform: isActive ? 'translateX(4px)' : 'translateX(0)',
                                        '&:hover': { bgcolor: 'rgba(37, 99, 235, 0.1)', color: COLORS.textLight, transform: 'translateX(4px)' }
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
                <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {history.length > 1 && (
                        <Box
                            onClick={goBack}
                            sx={{
                                display: 'inline-flex', alignItems: 'center', gap: '8px', alignSelf: 'flex-start',
                                cursor: 'pointer', color: COLORS.slateGray,
                                px: '14px', py: '8px', borderRadius: '10px',
                                border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.02)',
                                transition: 'all 0.25s ease',
                                opacity: 0,
                                animation: 'backBtnIn 0.4s ease forwards',
                                '@keyframes backBtnIn': {
                                    from: { opacity: 0, transform: 'translateX(-10px)' },
                                    to: { opacity: 1, transform: 'translateX(0)' },
                                },
                                '&:hover': {
                                    color: COLORS.textLight, borderColor: COLORS.accentCyan,
                                    background: 'rgba(6, 182, 212, 0.06)', transform: 'translateX(-3px)'
                                }
                            }}
                        >
                            <ArrowBackIcon sx={{ fontSize: '1.1rem' }} />
                            <Typography sx={{ fontSize: '0.9rem', fontWeight: 500 }}>Back</Typography>
                        </Box>
                    )}
                    {renderPage()}
                </Box>
            </Box>

        </Box>
    );
}