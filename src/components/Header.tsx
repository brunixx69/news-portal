import React, { useState, useEffect, useCallback } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Container,
    Box,
    TextField,
    InputAdornment,
    IconButton,
    useTheme,
    useMediaQuery
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import { useAppContext } from '../context/AppContext';

const Header: React.FC = () => {
    const { toggleTheme, themeMode, setSearchQuery } = useAppContext();
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
        <AppBar position="sticky" elevation={0} sx={{ borderBottom: '1px solid', borderColor: 'divider' }}>
            <Container maxWidth="lg">
                <Toolbar disableGutters sx={{ gap: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
                        <NewspaperIcon sx={{ display: { xs: 'flex', md: 'flex' }, mr: 1, color: 'primary.main' }} />
                        {!isMobile && (
                            <Typography
                                variant="h6"
                                noWrap
                                component="div"
                                sx={{ fontWeight: 'bold', color: 'primary.main', letterSpacing: -0.5 }}
                            >
                                TECH<Box component="span" sx={{ color: 'text.primary', ml: 0.5 }}>HUB</Box>
                            </Typography>
                        )}
                    </Box>

                    <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
                        <TextField
                            fullWidth
                            size="small"
                            placeholder="Buscar noticias..."
                            value={localSearch}
                            onChange={(e) => setLocalSearch(e.target.value)}
                            sx={{
                                maxWidth: 500,
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: 50,
                                    bgcolor: theme.palette.mode === 'light' ? 'rgba(0,0,0,0.04)' : 'rgba(255,255,255,0.05)',
                                    '& fieldset': { border: 'none' },
                                    '&:hover fieldset': { border: 'none' },
                                    '&.Mui-focused fieldset': { border: '1px solid', borderColor: 'primary.main' },
                                }
                            }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon sx={{ color: 'text.secondary' }} />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Box>

                    <IconButton onClick={toggleTheme} color="inherit" sx={{ ml: 'auto' }}>
                        {themeMode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                    </IconButton>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;
