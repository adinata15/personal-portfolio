'use client';

import { useTheme } from './theme-provider';
import { iconButtonClass } from '@/lib/styles';

const glyphClass = 'h-5 w-5 text-foreground';
const moonPath =
    'M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z';
const sunPath =
    'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z';

function ThemeGlyph({ path }: { path: string }) {
    return (
        <svg
            className={glyphClass}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
        >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={path} />
        </svg>
    );
}

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const nextTheme = theme === 'light' ? 'dark' : 'light';

    return (
        <button
            type="button"
            onClick={() => setTheme(nextTheme)}
            className={iconButtonClass}
            aria-label={nextTheme === 'dark' ? 'Switch to dark theme' : 'Switch to light theme'}
        >
            <ThemeGlyph path={theme === 'light' ? moonPath : sunPath} />
        </button>
    );
}
