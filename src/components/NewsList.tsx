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
                {[...Array(8)].map((_, i) => <SkeletonCard key={i} />)}
            </Box>
        );
    }

    if (error) {
        return (
            <Box sx={{ p: 4, maxWidth: 'lg', mx: 'auto' }}>
                <Alert severity="error" sx={{ bgcolor: 'rgba(255,0,0,0.1)', color: '#ff4444', border: '1px solid #ff4444' }}>
                    SABOTAJE EN LA RED: No se pudieron cargar las noticias.
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
