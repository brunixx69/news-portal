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
import { Article } from './types/news';
import { Dialog, Slide, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import './styles/cyberpunk.css';

const Transition = React.forwardRef(function Transition(
    props: any,
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const AppContent: React.FC = () => {
    const { themeMode } = useAppContext();
    const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

    const handleArticleClick = (article: Article) => {
        setSelectedArticle(article);
    };

    const handleClose = () => {
        setSelectedArticle(null);
    };

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
        components: {
            MuiDialog: {
                styleOverrides: {
                    paper: {
                        background: '#050505',
                        backgroundImage: 'none',
                    }
                }
            }
        }
    }), []);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />

            <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
                <Header />
                <CategoryTabs />

                <Container maxWidth="lg" sx={{ py: 6 }}>
                    <Box sx={{ mb: 6, textAlign: 'center' }}>
                        <Typography
                            variant="h2"
                            className="cyber-text-gradient"
                            sx={{
                                letterSpacing: -2,
                                fontSize: { xs: '3rem', md: '5rem' },
                                mb: 1
                            }}
                        >
                            TECH HUB
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
                            <Box sx={{ height: '1px', width: 40, bgcolor: 'var(--neon-cyan)' }} />
                            <Typography variant="overline" sx={{ letterSpacing: 4, color: 'var(--neon-cyan)' }}>
                                SYSTEM OPERATIONAL v10.0
                            </Typography>
                            <Box sx={{ height: '1px', width: 40, bgcolor: 'var(--neon-cyan)' }} />
                        </Box>
                    </Box>

                    <NewsList onArticleClick={handleArticleClick} />
                </Container>

                <Dialog
                    fullScreen
                    open={!!selectedArticle}
                    onClose={handleClose}
                    TransitionComponent={Transition}
                >
                    <Box sx={{ position: 'relative' }}>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            sx={{
                                position: 'fixed',
                                right: 24,
                                top: 24,
                                zIndex: 3000,
                                bgcolor: 'rgba(0,0,0,0.5)',
                                backdropFilter: 'blur(5px)',
                                border: '1px solid var(--neon-magenta)',
                                color: 'var(--neon-magenta)',
                                '&:hover': { bgcolor: 'var(--neon-magenta)', color: '#000' }
                            }}
                        >
                            <CloseIcon />
                        </IconButton>
                        {selectedArticle && (
                            <NewsDetail article={selectedArticle} onBack={handleClose} />
                        )}
                    </Box>
                </Dialog>

                <Box component="footer" sx={{ py: 8, textAlign: 'center', mt: 8, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                    <Typography variant="body2" sx={{ opacity: 0.4, letterSpacing: 2, textTransform: 'uppercase', fontSize: '0.7rem' }}>
                        © {new Date().getFullYear()} TECH HUB PORTAL - ENCRYPTED CONNECTION
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
