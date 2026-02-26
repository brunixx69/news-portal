import { createTheme, PaletteMode } from '@mui/material';

export const getAppTheme = (mode: PaletteMode) => createTheme({
    palette: {
        mode,
        primary: {
            main: mode === 'light' ? '#1a73e8' : '#66b2ff',
        },
        secondary: {
            main: '#ff4081',
        },
        background: {
            default: mode === 'light' ? '#f8f9fa' : '#0a0c10',
            paper: mode === 'light' ? '#ffffff' : '#161b22',
        },
    },
    typography: {
        fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
        h4: {
            fontWeight: 800,
        },
        h5: {
            fontWeight: 800,
        },
        h6: {
            fontWeight: 700,
        },
    },
    shape: {
        borderRadius: 12,
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: mode === 'light' ? '#ffffff' : '#161b22',
                    color: mode === 'light' ? '#1a73e8' : '#66b2ff',
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    fontWeight: 600,
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    backgroundImage: 'none',
                    transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                    '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: mode === 'light'
                            ? '0 8px 24px rgba(0,0,0,0.12)'
                            : '0 8px 24px rgba(0,0,0,0.5)',
                    },
                },
            },
        },
    },
});
