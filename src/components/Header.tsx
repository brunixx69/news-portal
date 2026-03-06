import React, { useState, useEffect } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Container,
    Box,
    TextField,
    InputAdornment,
    useMediaQuery,
    useTheme
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import GamesIcon from '@mui/icons-material/Games';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { useAppContext } from '../context/AppContext';
import '../styles/cyberpunk.css';

const Header: React.FC = () => {
    const { setSearchQuery } = useAppContext();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [localSearch, setLocalSearch] = useState('');

    // Debounce search
    useEffect(() => {
        const handler = setTimeout(() => {
            setSearchQuery(localSearch);
        }, 500);

        return () => clearTimeout(handler);
    }, [localSearch, setSearchQuery]);

    return (
        <AppBar
            position="sticky"
            elevation={0}
            className="glass-morphism"
            sx={{
                bgcolor: 'rgba(5, 5, 5, 0.8) !important',
                borderBottom: '1px solid rgba(0, 243, 255, 0.3)',
                zIndex: 1100
            }}
        >
            <Container maxWidth="lg">
                <Toolbar disableGutters sx={{ gap: 2, py: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
                        <FlashOnIcon sx={{ mr: 1, color: 'var(--neon-cyan)', filter: 'drop-shadow(0 0 5px var(--neon-cyan))' }} />
                        <Typography
                            variant="h5"
                            noWrap
                            component="div"
                            sx={{
                                fontWeight: 950,
                                color: '#fff',
                                letterSpacing: -1,
                                textTransform: 'uppercase',
                                display: { xs: 'none', sm: 'block' }
                            }}
                        >
                            TECH<Box component="span" sx={{ color: 'var(--neon-magenta)', filter: 'drop-shadow(0 0 5px var(--neon-magenta))' }}>HUB</Box>
                        </Typography>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
                        <TextField
                            fullWidth
                            size="small"
                            placeholder="BUSCAR EN LA RED..."
                            value={localSearch}
                            onChange={(e) => setLocalSearch(e.target.value)}
                            sx={{
                                maxWidth: 500,
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: 0,
                                    bgcolor: 'rgba(255,255,255,0.03)',
                                    color: 'var(--neon-cyan)',
                                    fontWeight: 700,
                                    fontSize: '0.8rem',
                                    '& fieldset': { border: '1px solid rgba(0, 243, 255, 0.2)' },
                                    '&:hover fieldset': { borderColor: 'var(--neon-cyan)' },
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'var(--neon-magenta)',
                                        boxShadow: '0 0 10px var(--neon-magenta)'
                                    },
                                },
                                '& input::placeholder': {
                                    color: 'rgba(0, 243, 255, 0.3)',
                                    opacity: 1
                                }
                            }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon sx={{ color: 'var(--neon-cyan)' }} />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Box>

                    <Box sx={{ width: { xs: 0, md: 50 }, ml: 'auto' }} />
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;
