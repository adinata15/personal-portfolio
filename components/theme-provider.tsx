'use client';

import {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useSyncExternalStore,
    type ReactNode,
} from 'react';
import {
    SERVER_THEME,
    getTheme,
    setTheme,
    subscribeTheme,
    syncDocumentTheme,
    type Theme,
} from '@/lib/theme';

type ThemeState = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeState | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
    const theme = useSyncExternalStore(subscribeTheme, getTheme, () => SERVER_THEME);

    useEffect(() => {
        syncDocumentTheme();
    }, [theme]);

    const value = useMemo(() => ({ theme, setTheme }), [theme]);

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) throw new Error('useTheme must be used within a ThemeProvider');
    return context;
};
