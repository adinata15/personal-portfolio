'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'dark' | 'light' | 'system';

type ThemeProviderProps = {
    children: React.ReactNode;
    defaultTheme?: Theme;
};

type ThemeProviderState = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
};

const ThemeProviderContext = createContext<ThemeProviderState>({
    theme: 'system',
    setTheme: () => null,
});

export function ThemeProvider({ children, defaultTheme = 'system', ...props }: ThemeProviderProps) {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    useEffect(() => {
        if (theme == 'system') {
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) setTheme('dark');
            else setTheme('light');
        }
    }, []);

    useEffect(() => {
        const root = window.document.documentElement;

        if (theme === 'light') {
            root.classList.remove('dark');
            root.classList.add(theme);
        } else if (theme === 'dark') {
            root.classList.remove('light');
            root.classList.add(theme);
        }
    }, [theme]);

    return (
        <ThemeProviderContext.Provider {...props} value={{ theme, setTheme }}>
            {children}
        </ThemeProviderContext.Provider>
    );
}

export const useTheme = () => {
    const context = useContext(ThemeProviderContext);

    if (context === undefined) throw new Error('useTheme must be used within a ThemeProvider');

    return context;
};
