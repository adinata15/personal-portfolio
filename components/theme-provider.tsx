'use client';

import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useSyncExternalStore,
} from 'react';

type Theme = 'dark' | 'light' | 'system';
type ResolvedTheme = 'dark' | 'light';

type ThemeProviderProps = {
    children: React.ReactNode;
    defaultTheme?: Theme;
    storageKey?: string;
};

type ThemeProviderState = {
    theme: Theme;
    resolvedTheme: ResolvedTheme;
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

function getSystemTheme(): ResolvedTheme {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function subscribeSystemTheme(onStoreChange: () => void) {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    media.addEventListener('change', onStoreChange);
    return () => media.removeEventListener('change', onStoreChange);
}

function applyTheme(resolved: ResolvedTheme) {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(resolved);
}

function readStoredTheme(storageKey: string, fallback: Theme): Theme {
    try {
        const stored = localStorage.getItem(storageKey);
        if (stored === 'light' || stored === 'dark' || stored === 'system') return stored;
    } catch {
        /* ignore */
    }
    return fallback;
}

export function ThemeProvider({
    children,
    defaultTheme = 'system',
    storageKey = 'portfolio-theme',
}: ThemeProviderProps) {
    const theme = useSyncExternalStore(
        subscribeTheme,
        () => readStoredTheme(storageKey, defaultTheme),
        () => defaultTheme,
    );

    const systemTheme = useSyncExternalStore(
        subscribeSystemTheme,
        getSystemTheme,
        (): ResolvedTheme => 'light',
    );

    const resolvedTheme: ResolvedTheme = theme === 'system' ? systemTheme : theme;

    useEffect(() => {
        applyTheme(resolvedTheme);
    }, [resolvedTheme]);

    const setTheme = useCallback(
        (next: Theme) => {
            localStorage.setItem(storageKey, next);
            emitThemeChange();
        },
        [storageKey],
    );

    const value = useMemo(
        () => ({ theme, resolvedTheme, setTheme }),
        [theme, resolvedTheme, setTheme],
    );

    return (
        <ThemeProviderContext.Provider value={value}>{children}</ThemeProviderContext.Provider>
    );
}

export const useTheme = () => {
    const context = useContext(ThemeProviderContext);
    if (context === undefined) throw new Error('useTheme must be used within a ThemeProvider');
    return context;
};
