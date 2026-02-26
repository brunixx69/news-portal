import React from 'react';
import { Grid, Box, Typography, Alert } from '@mui/material';
import { useAppContext } from '../context/AppContext';
import { useNews } from '../hooks/useNews';
import { Article } from '../types/news';
import NewsCard from './NewsCard';
import SkeletonScreen from './SkeletonScreen';
import SearchOffIcon from '@mui/icons-material/SearchOff';

const NewsList: React.FC = () => {
    const { category, searchQuery } = useAppContext();

    const { data: articles, isLoading, error } = useNews(category, searchQuery);

    if (isLoading) {
        return <SkeletonScreen />;
    }

    if (error) {
        return (
            <Alert severity="error" sx={{ mt: 2 }}>
                No se pudieron cargar las noticias. Por favor, intenta de nuevo más tarde.
            </Alert>
        );
    }

    if (!articles || articles.length === 0) {
        return (
            <Box sx={{ mt: 8, textAlign: 'center', py: 4 }}>
                <SearchOffIcon sx={{ fontSize: 64, color: 'text.secondary', mb: 2, opacity: 0.5 }} />
                <Typography variant="h5" color="text.primary" sx={{ fontWeight: 700 }}>
                    No encontramos nada para "{searchQuery || category}"
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
                    Prueba con otra categoría o términos de búsqueda diferentes.
                </Typography>
            </Box>
        );
    }

    return (
        <Grid container spacing={4}>
            {articles.map((article: Article, index: number) => (
                <Grid item key={`${article.url}-${index}`} xs={12} sm={6} md={4}>
                    <NewsCard article={article} />
                </Grid>
            ))}
        </Grid>
    );
};

export default NewsList;
