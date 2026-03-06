import React, { useState } from 'react';
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Box,
    Chip,
    Skeleton
} from '@mui/material';
import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale';
import { Article } from '../types/news';
import '../styles/cyberpunk.css';

interface NewsCardProps {
    article?: Article;
    loading?: boolean;
    onClick?: (article: Article) => void;
}

const NewsCard: React.FC<NewsCardProps> = ({ article, loading, onClick }) => {
    const [imgError, setImgError] = useState(false);

    if (loading || !article) {
        return (
            <Card className="cyber-card" sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Skeleton variant="rectangular" height={220} className="skeleton-cyber" />
                <CardContent sx={{ flexGrow: 1 }}>
                    <Skeleton variant="text" height={32} width="80%" sx={{ mb: 1 }} className="skeleton-cyber" />
                    <Skeleton variant="text" height={20} width="100%" className="skeleton-cyber" />
                    <Skeleton variant="text" height={20} width="90%" className="skeleton-cyber" />
                    <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
                        <Skeleton variant="text" width={60} className="skeleton-cyber" />
                        <Skeleton variant="text" width={80} className="skeleton-cyber" />
                    </Box>
                </CardContent>
            </Card>
        );
    }

    const timeAgo = formatDistanceToNow(new Date(article.date), {
        addSuffix: true,
        locale: es
    });

    const displayImage = imgError
        ? `https://via.placeholder.com/800x400/050505/00f3ff?text=${encodeURIComponent(article.category)}`
        : (article.imageUrl || 'https://via.placeholder.com/800x400/050505/00f3ff?text=TechHub');

    return (
        <Card
            className="cyber-card"
            onClick={() => onClick?.(article)}
            sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
                bgcolor: 'transparent',
                border: 'none',
            }}
        >
            <CardMedia
                component="img"
                height="220"
                image={displayImage}
                alt={article.title}
                onError={() => setImgError(true)}
                sx={{
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                    '.cyber-card:hover &': {
                        transform: 'scale(1.1)',
                    }
                }}
            />
            <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', p: 3, position: 'relative', zIndex: 1 }}>
                <Box sx={{ mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Chip
                        label={article.category}
                        size="small"
                        sx={{
                            fontWeight: 800,
                            fontSize: '0.65rem',
                            textTransform: 'uppercase',
                            background: 'var(--cyber-gradient)',
                            color: '#000',
                        }}
                    />
                    <Typography variant="caption" sx={{ fontWeight: 500, color: 'var(--neon-cyan)' }}>
                        {timeAgo}
                    </Typography>
                </Box>

                <Typography
                    gutterBottom
                    variant="h6"
                    component="h2"
                    sx={{
                        fontWeight: 800,
                        lineHeight: 1.2,
                        mb: 2,
                        color: '#fff',
                        transition: 'color 0.2s',
                        '.cyber-card:hover &': { color: 'var(--neon-cyan)' }
                    }}
                >
                    {article.title}
                </Typography>

                <Typography variant="body2" sx={{
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    mb: 3,
                    lineHeight: 1.6,
                    color: 'rgba(255,255,255,0.7)',
                    flexGrow: 1
                }}>
                    {article.description}
                </Typography>

                <Box sx={{ mt: 'auto', pt: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                    <Typography variant="caption" sx={{ fontWeight: 700, color: 'var(--neon-magenta)' }}>
                        {article.author}
                    </Typography>
                    <Typography
                        variant="caption"
                        sx={{
                            fontWeight: 700,
                            color: 'var(--neon-cyan)',
                            '&:hover': { textDecoration: 'underline' }
                        }}
                    >
                        Leer más →
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
};

export default NewsCard;
