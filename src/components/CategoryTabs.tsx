import React from 'react';
import { Box, Button } from '@mui/material';
import { useAppContext } from '../context/AppContext';
import { CategoryType } from '../types/news';
import ComputerIcon from '@mui/icons-material/Computer';
import CodeIcon from '@mui/icons-material/Code';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import StoreIcon from '@mui/icons-material/Store';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import '../styles/cyberpunk.css';

const categories: { label: string; value: CategoryType; icon: React.ReactNode }[] = [
    { label: 'IA', value: 'IA', icon: <SmartToyIcon fontSize="small" /> },
    { label: 'Hardware', value: 'Hardware', icon: <ComputerIcon fontSize="small" /> },
    { label: 'Software', value: 'Software', icon: <CodeIcon fontSize="small" /> },
    { label: 'Cyberpunk', value: 'Cyberpunk', icon: <FlashOnIcon fontSize="small" /> },
    { label: 'Mercado', value: 'Mercado', icon: <StoreIcon fontSize="small" /> },
    { label: 'Tendencias', value: 'Tendencias', icon: <TrendingUpIcon fontSize="small" /> },
];

const CategoryTabs: React.FC = () => {
    const { category, setCategory } = useAppContext();

    return (
        <Box
            sx={{
                position: 'sticky',
                top: { xs: 56, sm: 64 },
                zIndex: 1000,
                bgcolor: 'rgba(5, 5, 5, 0.95)',
                backdropFilter: 'blur(10px)',
                borderBottom: '1px solid rgba(0, 243, 255, 0.1)',
                py: 2
            }}
        >
            <Box
                sx={{
                    maxWidth: 'lg',
                    mx: 'auto',
                    px: 2,
                    display: 'flex',
                    gap: 1.5,
                    overflowX: 'auto',
                    scrollbarWidth: 'none',
                    '&::-webkit-scrollbar': { display: 'none' },
                    maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)'
                }}
            >
                {categories.map((cat) => (
                    <Button
                        key={cat.value}
                        onClick={() => setCategory(cat.value)}
                        variant={category === cat.value ? 'contained' : 'outlined'}
                        startIcon={cat.icon}
                        sx={{
                            borderRadius: '50px',
                            whiteSpace: 'nowrap',
                            minWidth: 'auto',
                            px: 3,
                            py: 1,
                            fontWeight: 800,
                            fontSize: '0.75rem',
                            textTransform: 'uppercase',
                            letterSpacing: 1,
                            transition: 'var(--transition-standard)',
                            borderColor: category === cat.value ? 'transparent' : 'rgba(0, 243, 255, 0.3)',
                            background: category === cat.value ? 'var(--cyber-gradient)' : 'transparent',
                            color: category === cat.value ? '#000' : 'rgba(255, 255, 255, 0.7)',
                            boxShadow: category === cat.value ? '0 0 15px var(--neon-cyan-soft)' : 'none',
                            '&:hover': {
                                borderColor: 'var(--neon-cyan)',
                                bgcolor: category === cat.value ? 'var(--neon-cyan)' : 'rgba(0, 243, 255, 0.05)',
                                color: category === cat.value ? '#000' : '#fff',
                            }
                        }}
                    >
                        {cat.label}
                    </Button>
                ))}
            </Box>
        </Box>
    );
};

export default CategoryTabs;
