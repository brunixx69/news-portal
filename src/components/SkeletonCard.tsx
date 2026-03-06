import React from 'react';
import { Card, CardContent, Box, Skeleton } from '@mui/material';

const SkeletonCard: React.FC = () => {
    return (
        <Card
            sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                bgcolor: 'var(--bg-card)',
                border: '1px solid rgba(255,255,255,0.05)',
                borderRadius: '12px',
                overflow: 'hidden'
            }}
        >
            <Box className="skeleton-anim" sx={{ height: 220, width: '100%' }} />
            <CardContent sx={{ flexGrow: 1, p: 3 }}>
                <Box sx={{ mb: 2, display: 'flex', justifyContent: 'space-between' }}>
                    <Box className="skeleton-anim" sx={{ width: 60, height: 20, borderRadius: 1 }} />
                    <Box className="skeleton-anim" sx={{ width: 80, height: 20, borderRadius: 1 }} />
                </Box>
                <Box className="skeleton-anim" sx={{ height: 28, width: '90%', mb: 1, borderRadius: 1 }} />
                <Box className="skeleton-anim" sx={{ height: 28, width: '70%', mb: 3, borderRadius: 1 }} />

                <Box className="skeleton-anim" sx={{ height: 16, width: '100%', mb: 1, borderRadius: 1 }} />
                <Box className="skeleton-anim" sx={{ height: 16, width: '100%', mb: 1, borderRadius: 1 }} />
                <Box className="skeleton-anim" sx={{ height: 16, width: '40%', mb: 4, borderRadius: 1 }} />

                <Box sx={{ mt: 'auto', pt: 2, display: 'flex', justifyContent: 'space-between', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                    <Box className="skeleton-anim" sx={{ width: 100, height: 16, borderRadius: 1 }} />
                    <Box className="skeleton-anim" sx={{ width: 60, height: 16, borderRadius: 1 }} />
                </Box>
            </CardContent>
        </Card>
    );
};

export default SkeletonCard;
