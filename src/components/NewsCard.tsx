import React from 'react';
import {
    Card,
    CardContent,
    Typography,
    Box,
    Chip
} from '@mui/material';
import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale';
import { Article } from '../types/news';
import SafeImage from './SafeImage';
import '../styles/cyberpunk.css';

interface NewsCardProps {
    article: Article;
    onClick: (article: Article) => void;
}

const NewsCard: React.FC<NewsCardProps> = ({ article, onClick }) => {
    const timeAgo = formatDistanceToNow(new Date(article.date), {
        addSuffix: true,
        locale: es
    });

    return (
        <Card
            className="cyber-card"
            onClick={() => onClick(article)}
            sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
                bgcolor: 'var(--bg-card)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                borderRadius: '12px',
                transition: 'var(--transition-standard)',
                position: 'relative',
                overflow: 'hidden',
                '&:hover': {
                    transform: 'translateY(-10px)',
                    borderColor: 'var(--neon-cyan)',
                    boxShadow: '0 0 20px var(--neon-cyan-soft)',
                    '& .card-image': { transform: 'scale(1.1)' }
                }
            }}
        >
            <SafeImage
                src={article.imageUrl}
                alt={article.title}
                height={220}
                category={article.category}
                className="card-image"
            />

            <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', p: 3 }}>
                <Box sx={{ mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Chip
                        label={article.category}
                        size="small"
                        sx={{
                            fontWeight: 800,
                            background: 'var(--cyber-gradient)',
                            color: '#000',
                            fontSize: '0.6rem'
                        }}
                    />
                    <Typography variant="caption" sx={{ color: 'var(--neon-cyan)', opacity: 0.8 }}>
                        {timeAgo}
                    </Typography>
                </Box>

                <Typography
                    variant="h6"
                    sx={{
                        fontWeight: 800,
                        lineHeight: 1.2,
                        mb: 2,
                        color: '#fff',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                    }}
                >
                    {article.title}
                </Typography>

                <Typography
                    variant="body2"
                    sx={{
                        color: 'var(--text-secondary)',
                        mb: 3,
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        flexGrow: 1
                    }}
                >
                    {article.description}
                </Typography>

                <Box sx={{ mt: 'auto', pt: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                    <Typography variant="caption" sx={{ fontWeight: 700, color: 'var(--neon-magenta)' }}>
                        {article.author}
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'var(--neon-cyan)', fontWeight: 700 }}>
                        READ MORE →
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
};

export default NewsCard;
