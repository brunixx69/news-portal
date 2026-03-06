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

import FlashOnIcon from '@mui/icons-material/FlashOn';

interface NewsCardProps {
    article: Article;
    onClick: (article: Article) => void;
}

const NewsCard: React.FC<NewsCardProps> = ({ article, onClick }) => {
    const [imageError, setImageError] = React.useState(false);

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);

        // Relative time logic for "Hace X horas"
        const now = new Date();
        const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));

        if (diffInHours < 24 && diffInHours > 0) {
            return `Hace ${diffInHours} ${diffInHours === 1 ? 'hora' : 'horas'}`;
        }

        // Intl.DateTimeFormat for "05 de Marzo, 2024"
        return new Intl.DateTimeFormat('es-ES', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        }).format(date);
    };

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
                    '& .card-image': { transform: 'scale(1.1)' },
                    '& .fallback-icon': { transform: 'scale(1.2) rotate(10deg)' }
                }
            }}
        >
            <Box sx={{ position: 'relative', height: 220, overflow: 'hidden', bgcolor: 'rgba(0,0,0,0.3)' }}>
                {imageError ? (
                    <Box
                        sx={{
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: 'linear-gradient(135deg, #050505 0%, #1a1a1a 100%)',
                            gap: 1
                        }}
                    >
                        <FlashOnIcon
                            className="fallback-icon"
                            sx={{
                                fontSize: 60,
                                color: 'var(--neon-cyan)',
                                filter: 'drop-shadow(0 0 10px var(--neon-cyan))',
                                transition: 'transform 0.5s ease'
                            }}
                        />
                        <Typography variant="overline" sx={{ color: 'var(--neon-cyan)', fontWeight: 900, letterSpacing: 2 }}>
                            TECH HUB
                        </Typography>
                    </Box>
                ) : (
                    <Box
                        component="img"
                        src={article.imageUrl}
                        alt={article.title}
                        onError={() => setImageError(true)}
                        className="card-image"
                        sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            transition: 'transform 0.5s ease'
                        }}
                    />
                )}
            </Box>

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
                    <Typography variant="caption" sx={{ color: 'var(--neon-cyan)', opacity: 0.8, fontWeight: 700 }}>
                        {formatDate(article.date)}
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
