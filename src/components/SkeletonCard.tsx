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
                borderRadius: '12px'
            }}
        >
            <Skeleton
                variant="rectangular"
                height={220}
                sx={{ bgcolor: 'rgba(255,255,255,0.05)' }}
            />
            <CardContent sx={{ flexGrow: 1, p: 3 }}>
                <Box sx={{ mb: 2, display: 'flex', justifyContent: 'space-between' }}>
                    <Skeleton width={60} height={20} sx={{ bgcolor: 'rgba(255,255,255,0.05)' }} />
                    <Skeleton width={80} height={20} sx={{ bgcolor: 'rgba(255,255,255,0.05)' }} />
                </Box>
                <Skeleton variant="text" height={32} width="90%" sx={{ mb: 1, bgcolor: 'rgba(255,255,255,0.05)' }} />
                <Skeleton variant="text" height={32} width="80%" sx={{ mb: 2, bgcolor: 'rgba(255,255,255,0.05)' }} />
                <Skeleton variant="text" height={20} width="100%" sx={{ bgcolor: 'rgba(255,255,255,0.05)' }} />
                <Skeleton variant="text" height={20} width="95%" sx={{ bgcolor: 'rgba(255,255,255,0.05)' }} />
                <Skeleton variant="text" height={20} width="40%" sx={{ mb: 3, bgcolor: 'rgba(255,255,255,0.05)' }} />

                <Box sx={{ mt: 'auto', pt: 2, display: 'flex', justifyContent: 'space-between', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                    <Skeleton width={100} height={20} sx={{ bgcolor: 'rgba(255,255,255,0.05)' }} />
                    <Skeleton width={60} height={20} sx={{ bgcolor: 'rgba(255,255,255,0.05)' }} />
                </Box>
            </CardContent>
        </Card>
    );
};

export default SkeletonCard;
