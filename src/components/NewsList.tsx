import React from 'react';
import { Box, Typography, Alert } from '@mui/material';
import { useAppContext } from '../context/AppContext';
import { useNews } from '../hooks/useNews';
import { Article } from '../types/news';
import NewsCard from './NewsCard';
import SkeletonCard from './SkeletonCard';
import SearchOffIcon from '@mui/icons-material/SearchOff';

interface NewsListProps {
    onArticleClick: (article: Article) => void;
}

const NewsList: React.FC<NewsListProps> = ({ onArticleClick }) => {
    const { category, searchQuery } = useAppContext();
    const { data: articles, isLoading, error } = useNews(category, searchQuery);

    if (isLoading) {
        return (
            <Box className="news-grid">
                {[...Array(6)].map((_, i) => <SkeletonCard key={i} />)}
            </Box>
        );
    }

    if (error) {
        return (
            <Box
                sx={{
                    p: 6,
                    textAlign: 'center',
                    bgcolor: 'rgba(255, 0, 0, 0.05)',
                    borderRadius: '16px',
                    border: '1px solid rgba(255, 0, 255, 0.2)',
                    mt: 4
                }}
            >
                <Typography variant="h5" sx={{ color: 'var(--neon-magenta)', fontWeight: 900, mb: 2 }}>
                    CONEXIÓN INTERRUMPIDA
                </Typography>
                <Typography variant="body1" sx={{ color: 'var(--text-secondary)', mb: 3 }}>
                    No pudimos sincronizar con la red de noticias en este momento.
                </Typography>
                <Alert
                    severity="info"
                    sx={{
                        bgcolor: 'rgba(0, 243, 255, 0.05)',
                        color: 'var(--neon-cyan)',
                        border: '1px solid rgba(0, 243, 255, 0.2)',
                        '& .MuiAlert-icon': { color: 'var(--neon-cyan)' }
                    }}
                >
                    Estamos utilizando datos de respaldo (Mock Data) para mantener el servicio activo.
                </Alert>
            </Box>
        );
    }

    if (!articles || articles.length === 0) {
        return (
            <Box sx={{ mt: 8, textAlign: 'center', py: 8 }}>
                <SearchOffIcon sx={{ fontSize: 80, color: 'var(--neon-cyan)', mb: 2, opacity: 0.5 }} />
                <Typography variant="h4" className="cyber-text-gradient" gutterBottom>
                    VACÍO EN EL CIBERESPACIO
                </Typography>
                <Typography variant="body1" sx={{ color: 'var(--text-secondary)' }}>
                    No hay señales de "{searchQuery || category}". Prueba otros términos.
                </Typography>
            </Box>
        );
    }

    return (
        <Box className="news-grid">
            {articles.map((article: Article) => (
                <NewsCard
                    key={article.id}
                    article={article}
                    onClick={onArticleClick}
                />
            ))}
        </Box>
    );
};

export default NewsList;
