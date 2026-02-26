import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Category } from '../types/news';
import { PaletteMode } from '@mui/material';

interface AppContextType {
    category: Category;
    setCategory: (category: Category) => void;
    themeMode: PaletteMode;
    toggleTheme: () => void;
    searchQuery: string;
    setSearchQuery: (query: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    // Category State
    const [category, setCategory] = useState<Category>('Hardware');

    // Theme State with persistence
    const [themeMode, setThemeMode] = useState<PaletteMode>(() => {
        const savedMode = localStorage.getItem('techhub-theme');
        return (savedMode as PaletteMode) || 'light';
    });

    // Search State
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        localStorage.setItem('techhub-theme', themeMode);
    }, [themeMode]);

    const toggleTheme = () => {
        setThemeMode((prev) => (prev === 'light' ? 'dark' : 'light'));
    };

    return (
        <AppContext.Provider
            value={{
                category,
                setCategory,
                themeMode,
                toggleTheme,
                searchQuery,
                setSearchQuery
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};
