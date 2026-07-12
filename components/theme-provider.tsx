'use client';

import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useSyncExternalStore,
} from 'react';

type Theme = 'dark' | 'light';

type ThemeProviderProps = {
    children: React.ReactNode;
    defaultTheme?: Theme;
    storageKey?: string;
};

type ThemeProviderState = {
    theme: Theme;
    resolvedTheme: Theme;
    setTheme: (theme: Theme) => void;
};

const ThemeProviderContext = createContext<ThemeProviderState | undefined>(undefined);

const themeListeners = new Set<() => void>();

function emitThemeChange() {
    themeListeners.forEach((listener) => listener());
}

function subscribeTheme(onStoreChange: () => void) {
    themeListeners.add(onStoreChange);
    const onStorage = (event: StorageEvent) => {
        if (event.key) onStoreChange();
    };
    window.addEventListener('storage', onStorage);
    return () => {
        themeListeners.delete(onStoreChange);
        window.removeEventListener('storage', onStorage);
    };
}

function getSystemTheme(): Theme {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(resolved: Theme) {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(resolved);
}

function readStoredTheme(storageKey: string, fallback: Theme): Theme {
    try {
        const stored = localStorage.getItem(storageKey);
        if (stored === 'light' || stored === 'dark') return stored;
        if (stored === 'system' || stored === null) return getSystemTheme();
    } catch {
        /* ignore */
    }
    return fallback;
}

export function ThemeProvider({
    children,
    defaultTheme = 'dark',
    storageKey = 'portfolio-theme',
}: ThemeProviderProps) {
    const theme = useSyncExternalStore(
        subscribeTheme,
        () => readStoredTheme(storageKey, defaultTheme),
        () => defaultTheme,
    );

    useEffect(() => {
        applyTheme(theme);
    }, [theme]);

    const setTheme = useCallback(
        (next: Theme) => {
            try {
                localStorage.setItem(storageKey, next);
            } catch {
                /* ignore quota / private mode failures */
            }
            emitThemeChange();
        },
        [storageKey],
    );

    const value = useMemo(() => ({ theme, resolvedTheme: theme, setTheme }), [theme, setTheme]);

    return <ThemeProviderContext.Provider value={value}>{children}</ThemeProviderContext.Provider>;
}

export const useTheme = () => {
    const context = useContext(ThemeProviderContext);
    if (context === undefined) throw new Error('useTheme must be used within a ThemeProvider');
    return context;
};
