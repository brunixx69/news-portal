import React, { useState } from 'react';
import { Box, Skeleton } from '@mui/material';

interface SafeImageProps {
    src: string;
    alt: string;
    height: string | number;
    category?: string;
    className?: string;
}

const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200';

const SafeImage: React.FC<SafeImageProps> = ({ src, alt, height, category, className }) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const handleLoad = () => setLoading(false);
    const handleError = () => {
        setLoading(false);
        setError(true);
    };

    const displayImage = error
        ? (category ? `https://via.placeholder.com/800x400/050505/00f3ff?text=${encodeURIComponent(category)}` : FALLBACK_IMAGE)
        : src;

    return (
        <Box sx={{ position: 'relative', height, width: '100%', overflow: 'hidden' }}>
            {loading && (
                <Skeleton
                    variant="rectangular"
                    height="100%"
                    width="100%"
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        bgcolor: 'rgba(255,255,255,0.05)',
                        '&::after': {
                            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)'
                        }
                    }}
                />
            )}
            <Box
                component="img"
                src={displayImage}
                alt={alt}
                onLoad={handleLoad}
                onError={handleError}
                className={className}
                sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: loading ? 'none' : 'block',
                    transition: 'transform 0.5s ease',
                }}
            />
        </Box>
    );
};

export default SafeImage;
