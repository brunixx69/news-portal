import React from 'react';
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Box,
    Chip,
    Link,
    Skeleton
} from '@mui/material';
import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale';
import { Article } from '../types/news';

interface NewsCardProps {
    article?: Article;
    loading?: boolean;
}

const NewsCard: React.FC<NewsCardProps> = ({ article, loading }) => {
    if (loading || !article) {
        return (
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Skeleton variant="rectangular" height={200} />
                <CardContent sx={{ flexGrow: 1 }}>
                    <Skeleton variant="text" height={32} width="80%" sx={{ mb: 1 }} />
                    <Skeleton variant="text" height={20} width="100%" />
                    <Skeleton variant="text" height={20} width="90%" />
                    <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
                        <Skeleton variant="text" width={60} />
                        <Skeleton variant="text" width={80} />
                    </Box>
                </CardContent>
            </Card>
        );
    }

    const timeAgo = formatDistanceToNow(new Date(article.publishedAt), {
        addSuffix: true,
        locale: es
    });

    return (
        <Card
            sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid',
                borderColor: 'divider',
            }}
        >
            <CardMedia
                component="img"
                height="220"
                image={article.image || 'https://via.placeholder.com/800x400?text=No+Image'}
                alt={article.title}
                sx={{
                    objectFit: 'cover',
                    filter: (theme) => theme.palette.mode === 'dark' ? 'brightness(0.8)' : 'none',
                    transition: 'filter 0.3s'
                }}
            />
            <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', p: 3 }}>
                <Box sx={{ mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Chip
                        label={article.category || 'General'}
                        size="small"
                        color="primary"
                        sx={{ fontWeight: 800, fontSize: '0.65rem', textTransform: 'uppercase' }}
                    />
                    <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 500 }}>
                        {timeAgo}
                    </Typography>
                </Box>

                <Link
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    color="inherit"
                    underline="none"
                >
                    <Typography
                        gutterBottom
                        variant="h6"
                        component="h2"
                        sx={{
                            fontWeight: 800,
                            lineHeight: 1.2,
                            mb: 2,
                            '&:hover': { color: 'primary.main' },
                            transition: 'color 0.2s'
                        }}
                    >
                        {article.title}
                    </Typography>
                </Link>

                <Typography variant="body2" color="text.secondary" sx={{
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    mb: 3,
                    lineHeight: 1.6,
                    flexGrow: 1
                }}>
                    {article.description}
                </Typography>

                <Box sx={{ mt: 'auto', pt: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid', borderColor: 'divider' }}>
                    <Typography variant="caption" sx={{ fontWeight: 700, opacity: 0.7 }}>
                        {article.source.name}
                    </Typography>
                    <Link
                        href={article.source.url}
                        target="_blank"
                        variant="caption"
                        color="primary"
                        sx={{
                            fontWeight: 700,
                            textDecoration: 'none',
                            '&:hover': { textDecoration: 'underline' }
                        }}
                    >
                        Ver más →
                    </Link>
                </Box>
            </CardContent>
        </Card>
    );
};

export default NewsCard;
