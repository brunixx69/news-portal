import React from 'react';
import { Grid, Box, Typography, Alert } from '@mui/material';
import { useAppContext } from '../context/AppContext';
import { useNews } from '../hooks/useNews';
import { NewsArticle } from '../types/news';
import NewsCard from './NewsCard';
import SkeletonScreen from './SkeletonScreen';
import SearchOffIcon from '@mui/icons-material/SearchOff';

interface NewsListProps {
    onArticleClick: (article: NewsArticle) => void;
}

const NewsList: React.FC<NewsListProps> = ({ onArticleClick }) => {
    const { category, searchQuery } = useAppContext();

    const { data: articles, isLoading, error } = useNews(category, searchQuery);

    if (isLoading) {
        return <SkeletonScreen />;
    }

    if (error) {
        return (
            <Alert severity="error" sx={{ mt: 2, bgcolor: 'rgba(255,0,0,0.1)', color: '#ff4444', border: '1px solid #ff4444' }}>
                No se pudieron cargar las noticias. Por favor, intenta de nuevo más tarde.
            </Alert>
        );
    }

    if (!articles || articles.length === 0) {
        return (
            <Box sx={{ mt: 8, textAlign: 'center', py: 4 }}>
                <SearchOffIcon sx={{ fontSize: 64, color: 'var(--neon-cyan)', mb: 2, opacity: 0.5 }} />
                <Typography variant="h5" sx={{ fontWeight: 700, color: '#fff' }}>
                    No encontramos nada para "{searchQuery || category}"
                </Typography>
                <Typography variant="body1" sx={{ mt: 1, color: 'rgba(255,255,255,0.6)' }}>
                    Prueba con otra categoría o términos de búsqueda diferentes.
                </Typography>
            </Box>
        );
    }

    return (
        <Grid container spacing={4}>
            {articles.map((article: NewsArticle) => (
                <Grid item key={article.id} xs={12} sm={6} md={4}>
                    <NewsCard article={article} onClick={onArticleClick} />
                </Grid>
            ))}
        </Grid>
    );
};

export default NewsList;
