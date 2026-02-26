import React from 'react';
import { Tabs, Tab, Box, Paper, useTheme } from '@mui/material';
import { useAppContext } from '../context/AppContext';
import { Category } from '../types/news';
import ComputerIcon from '@mui/icons-material/Computer';
import CodeIcon from '@mui/icons-material/Code';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import StoreIcon from '@mui/icons-material/Store';

const CategoryTabs: React.FC = () => {
    const { category, setCategory } = useAppContext();
    const theme = useTheme();

    const handleChange = (_event: React.SyntheticEvent, newValue: Category) => {
        setCategory(newValue);
    };

    return (
        <Paper
            elevation={0}
            sx={{
                borderRadius: 0,
                borderBottom: 1,
                borderColor: 'divider',
                position: 'sticky',
                top: { xs: 56, sm: 64 },
                zIndex: 10,
                background: theme.palette.mode === 'light' ? 'rgba(255, 255, 255, 0.9)' : 'rgba(22, 27, 34, 0.9)',
                backdropFilter: 'blur(8px)'
            }}
        >
            <Box sx={{ maxWidth: 'lg', mx: 'auto' }}>
                <Tabs
                    value={category}
                    onChange={handleChange}
                    centered
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    sx={{
                        '& .MuiTab-root': {
                            minHeight: 64,
                            fontWeight: 600,
                        }
                    }}
                >
                    <Tab icon={<ComputerIcon />} iconPosition="start" label="Hardware" value="Hardware" />
                    <Tab icon={<CodeIcon />} iconPosition="start" label="Software" value="Software" />
                    <Tab icon={<StoreIcon />} iconPosition="start" label="Mercado" value="Mercado" />
                    <Tab icon={<TrendingUpIcon />} iconPosition="start" label="Tendencias" value="Tendencias" />
                </Tabs>
            </Box>
        </Paper>
    );
};

export default CategoryTabs;
