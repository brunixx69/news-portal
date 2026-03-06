import React, { useMemo, useState } from 'react';
import {
    ThemeProvider,
    CssBaseline,
    Container,
    Box,
    Typography,
    createTheme,
} from '@mui/material';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './api/queryClient';
import { AppProvider, useAppContext } from './context/AppContext';
import NewsList from './components/NewsList';
import CategoryTabs from './components/CategoryTabs';
import Header from './components/Header';
import NewsDetail from './components/NewsDetail';
import { NewsArticle } from './types/news';
import './styles/cyberpunk.css';

const AppContent: React.FC = () => {
    const { themeMode } = useAppContext();
    const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);

    // Override MUI theme for Cyberpunk feel
    const theme = useMemo(() => createTheme({
        palette: {
            mode: 'dark',
            primary: { main: '#00f3ff' },
            secondary: { main: '#ff00ff' },
            background: { default: '#050505', paper: '#0f0f0f' },
            text: { primary: '#ffffff', secondary: 'rgba(255, 255, 255, 0.7)' },
        },
        typography: {
            fontFamily: '"Outfit", "Inter", sans-serif',
            h1: { fontWeight: 900 },
            h2: { fontWeight: 900 },
            h3: { fontWeight: 800 },
        },
    }), []);

    const handleArticleClick = (article: NewsArticle) => {
        setSelectedArticle(article);
        window.scrollTo(0, 0);
    };

    const handleBack = () => {
        setSelectedArticle(null);
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />

            <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
                <Header />

                {!selectedArticle ? (
                    <>
                        <CategoryTabs />
                        <Container maxWidth="lg" sx={{ py: 6 }}>
                            <Box sx={{ mb: 6, textAlign: 'center' }}>
                                <Typography
                                    variant="h2"
                                    component="h1"
                                    className="cyber-text-gradient"
                                    gutterBottom
                                    sx={{
                                        letterSpacing: -2,
                                        fontSize: { xs: '3rem', md: '4.5rem' }
                                    }}
                                >
                                    NEON NEWS
                                </Typography>
                                <Typography variant="h6" sx={{ opacity: 0.6, fontWeight: 300, maxWidth: 600, mx: 'auto' }}>
                                    La vanguardia tecnológica diseccionada con precisión quirúrgica.
                                </Typography>
                            </Box>

                            <NewsList onArticleClick={handleArticleClick} />
                        </Container>
                    </>
                ) : (
                    <NewsDetail article={selectedArticle} onBack={handleBack} />
                )}

                <Box component="footer" sx={{ py: 8, textAlign: 'center', mt: 8, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                    <Typography variant="body2" sx={{ opacity: 0.4, letterSpacing: 2, textTransform: 'uppercase', fontSize: '0.7rem' }}>
                        © {new Date().getFullYear()} NEON NEWS PORTAL - SYSTEM OPERATIONAL
                    </Typography>
                </Box>
            </Box>
        </ThemeProvider>
    );
};

const App: React.FC = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <AppProvider>
                <AppContent />
            </AppProvider>
        </QueryClientProvider>
    );
};

export default App;
