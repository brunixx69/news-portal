import React, { useState, useEffect } from 'react';
import {
    Container,
    Box,
    Typography,
    Button,
    Chip,
    Divider,
    Avatar
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Article } from '../types/news';
import '../styles/cyberpunk.css';

interface NewsDetailProps {
    article: Article;
    onBack: () => void;
}

const NewsDetail: React.FC<NewsDetailProps> = ({ article, onBack }) => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [imgError, setImgError] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (window.scrollY / totalHeight) * 100;
            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const displayImage = imgError
        ? `https://via.placeholder.com/1200x600/050505/00f3ff?text=${encodeURIComponent(article.title)}`
        : (article.imageUrl || 'https://via.placeholder.com/1200x600/050505/00f3ff?text=TechHub');

    return (
        <Box sx={{ bgcolor: 'var(--bg-dark)', color: '#fff', minHeight: '100vh', pt: 4 }}>
            {/* Reading Progress Bar - Top Sticky */}
            <Box
                sx={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: 4,
                    zIndex: 2000,
                    bgcolor: 'rgba(255,255,255,0.05)'
                }}
            >
                <Box
                    sx={{
                        height: '100%',
                        width: `${scrollProgress}%`,
                        background: 'var(--cyber-gradient)',
                        boxShadow: '0 0 15px var(--neon-cyan)',
                        transition: 'width 0.1s ease-out'
                    }}
                />
            </Box>

            <Container maxWidth="md">
                <Button
                    startIcon={<ArrowBackIcon />}
                    onClick={onBack}
                    sx={{
                        color: 'var(--neon-cyan)',
                        mb: 4,
                        '&:hover': {
                            bgcolor: 'rgba(0, 243, 255, 0.1)',
                            animation: 'glitch 0.3s infinite'
                        }
                    }}
                >
                    Volver a las noticias
                </Button>

                <Box component="article">
                    <Typography
                        variant="h2"
                        component="h1"
                        gutterBottom
                        sx={{
                            fontWeight: 900,
                            lineHeight: 1.1,
                            fontSize: { xs: '2.5rem', md: '3.5rem' },
                            mb: 4
                        }}
                    >
                        {article.title}
                    </Typography>

                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 4, gap: 2 }}>
                        <Avatar sx={{ bgcolor: 'var(--neon-magenta)' }}>{article.author[0]}</Avatar>
                        <Box>
                            <Typography variant="subtitle1" sx={{ fontWeight: 700, color: 'var(--neon-magenta)' }}>
                                {article.author}
                            </Typography>
                            <Typography variant="caption" sx={{ opacity: 0.6 }}>
                                {new Date(article.date).toLocaleDateString()} • {article.category}
                            </Typography>
                        </Box>
                        <Chip
                            label={article.category}
                            size="small"
                            sx={{
                                ml: 'auto',
                                background: 'var(--cyber-gradient)',
                                color: '#000',
                                fontWeight: 800
                            }}
                        />
                    </Box>

                    <Box
                        component="img"
                        src={displayImage}
                        alt={article.title}
                        onError={() => setImgError(true)}
                        sx={{
                            width: '100%',
                            height: { xs: '300px', md: '500px' },
                            objectFit: 'cover',
                            borderRadius: '8px',
                            mb: 6,
                            boxShadow: '0 0 30px rgba(0, 243, 255, 0.3)',
                            border: '1px solid var(--neon-cyan)'
                        }}
                    />

                    <Typography
                        variant="h5"
                        sx={{
                            fontStyle: 'italic',
                            color: 'var(--neon-cyan)',
                            mb: 4,
                            lineHeight: 1.6,
                            opacity: 0.9,
                            borderLeft: '4px solid var(--neon-cyan)',
                            pl: 3
                        }}
                    >
                        {article.description}
                    </Typography>

                    <Divider sx={{ mb: 6, borderColor: 'rgba(255,255,255,0.1)' }} />

                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: '1.2rem',
                            lineHeight: 1.8,
                            color: 'rgba(255,255,255,0.85)',
                            '& p': { mb: 3 }
                        }}
                    >
                        {article.content}
                    </Typography>

                    <Box sx={{ mt: 8, p: 4, bgcolor: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
                        <Typography variant="h6" gutterBottom color="var(--neon-yellow)">
                            Fuente Original
                        </Typography>
                        <Typography variant="body2" sx={{ opacity: 0.7 }}>
                            Este artículo fue publicado originalmente por <strong>{article.source?.name || 'TechHub News'}</strong>.
                        </Typography>
                        {article.url && (
                            <Button
                                href={article.url}
                                target="_blank"
                                variant="outlined"
                                sx={{
                                    mt: 2,
                                    borderColor: 'var(--neon-magenta)',
                                    color: 'var(--neon-magenta)',
                                    '&:hover': {
                                        bgcolor: 'rgba(255, 0, 255, 0.1)',
                                        borderColor: 'var(--neon-magenta)',
                                    }
                                }}
                            >
                                Leer en el sitio oficial
                            </Button>
                        )}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default NewsDetail;
