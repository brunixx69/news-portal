import React from 'react';
import { Grid } from '@mui/material';
import NewsCard from './NewsCard';

const SkeletonScreen: React.FC = () => {
    return (
        <Grid container spacing={3}>
            {[1, 2, 3, 4, 5, 6].map((item) => (
                <Grid item key={item} xs={12} sm={6} md={4}>
                    <NewsCard loading />
                </Grid>
            ))}
        </Grid>
    );
};

export default SkeletonScreen;
