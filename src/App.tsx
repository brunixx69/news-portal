import React, { useMemo } from 'react';
import {
    ThemeProvider,
    CssBaseline,
    Container,
    Box,
    Typography,
} from '@mui/material';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './api/queryClient';
import { AppProvider, useAppContext } from './context/AppContext';
import { getAppTheme } from './theme/theme';
import NewsList from './components/NewsList';
import CategoryTabs from './components/CategoryTabs';
import Header from './components/Header';

const AppContent: React.FC = () => {
    const { themeMode } = useAppContext();
    const theme = useMemo(() => getAppTheme(themeMode), [themeMode]);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />

            <Header />
            <CategoryTabs />

            <Container maxWidth="lg" sx={{ py: 4 }}>
                <Box sx={{ mb: 6 }}>
                    <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 800, letterSpacing: -1 }}>
                        Últimas Noticias
                    </Typography>
                    <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 400, opacity: 0.8 }}>
                        Explora las novedades más disruptivas en el mundo del hardware y la tecnología.
                    </Typography>
                </Box>

                <NewsList />
            </Container>

            <Box component="footer" sx={{ py: 6, textAlign: 'center', mt: 8, bgcolor: 'background.paper', borderTop: '1px solid', borderColor: 'divider' }}>
                <Typography variant="body2" color="text.secondary">
                    © {new Date().getFullYear()} TechHub News - Desarrollado con React & MUI
                </Typography>
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
