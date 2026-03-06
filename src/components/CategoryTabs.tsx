import React from 'react';
import { Tabs, Tab, Box, Paper } from '@mui/material';
import { useAppContext } from '../context/AppContext';
import { Category } from '../types/news';
import ComputerIcon from '@mui/icons-material/Computer';
import CodeIcon from '@mui/icons-material/Code';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import StoreIcon from '@mui/icons-material/Store';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import '../styles/cyberpunk.css';

const CategoryTabs: React.FC = () => {
    const { category, setCategory } = useAppContext();

    const handleChange = (_event: React.SyntheticEvent, newValue: Category) => {
        setCategory(newValue);
    };

    return (
        <Paper
            elevation={0}
            className="glass-morphism"
            sx={{
                borderRadius: 0,
                borderBottom: '1px solid rgba(255,255,255,0.1)',
                position: 'sticky',
                top: { xs: 56, sm: 64 },
                zIndex: 10,
                bgcolor: 'rgba(5, 5, 5, 0.9) !important',
            }}
        >
            <Box sx={{ maxWidth: 'lg', mx: 'auto' }}>
                <Tabs
                    value={category}
                    onChange={handleChange}
                    centered
                    variant="scrollable"
                    scrollButtons="auto"
                    sx={{
                        '& .MuiTabs-indicator': {
                            background: 'var(--cyber-gradient)',
                            height: 3,
                            boxShadow: '0 0 10px var(--neon-cyan)',
                        },
                        '& .MuiTab-root': {
                            minHeight: 64,
                            fontWeight: 800,
                            color: 'rgba(255,255,255,0.5)',
                            fontSize: '0.8rem',
                            textTransform: 'uppercase',
                            letterSpacing: 1,
                            '&.Mui-selected': {
                                color: 'var(--neon-cyan)',
                            }
                        }
                    }}
                >
                    <Tab icon={<SmartToyIcon />} iconPosition="start" label="IA" value="IA" />
                    <Tab icon={<ComputerIcon />} iconPosition="start" label="Hardware" value="Hardware" />
                    <Tab icon={<CodeIcon />} iconPosition="start" label="Software" value="Software" />
                    <Tab icon={<FlashOnIcon />} iconPosition="start" label="Cyberpunk" value="Cyberpunk" />
                    <Tab icon={<StoreIcon />} iconPosition="start" label="Mercado" value="Mercado" />
                    <Tab icon={<TrendingUpIcon />} iconPosition="start" label="Tendencias" value="Tendencias" />
                </Tabs>
            </Box>
        </Paper>
    );
};

export default CategoryTabs;
