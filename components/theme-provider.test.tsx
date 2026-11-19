/// <reference types="vitest/globals" />
/// <reference types="@testing-library/jest-dom/vitest" />
import { act, fireEvent, render, screen } from '@testing-library/react';
import { renderToString } from 'react-dom/server';
import { ThemeProvider, useTheme } from '@/components/theme-provider';
import { themeBootScript } from '@/lib/theme';

const KEY = 'portfolio-theme';

type System = 'dark' | 'light' | 'throws';

function mockSystem(system: System) {
    Object.defineProperty(window, 'matchMedia', {
        configurable: true,
        writable: true,
        value: () => {
            if (system === 'throws') throw new Error('matchMedia unavailable');
            return { matches: system === 'dark' };
        },
    });
}

function Consumer() {
    const { theme, setTheme } = useTheme();
    return (
        <button type="button" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            {theme}
        </button>
    );
}

function runBootScript() {
    new Function(themeBootScript)();
}

function mountProvider() {
    render(
        <ThemeProvider>
            <Consumer />
        </ThemeProvider>,
    );
}

const rootClasses = () => document.documentElement.className;

beforeEach(() => {
    localStorage.clear();
    document.documentElement.className = '';
    mockSystem('dark');
});

afterEach(() => {
    vi.restoreAllMocks();
});

describe.each([
    ['boot script', runBootScript],
    ['provider', mountProvider],
])('%s', (_name, run) => {
    it('resolves and saves the OS preference when storage is empty', () => {
        mockSystem('dark');
        run();
        expect(rootClasses()).toBe('dark');
        expect(localStorage.getItem(KEY)).toBe('dark');
    });

    it('follows a light OS preference when storage is empty', () => {
        mockSystem('light');
        run();
        expect(rootClasses()).toBe('light');
        expect(localStorage.getItem(KEY)).toBe('light');
    });

    it('keeps a stored choice over the OS preference without writing', () => {
        localStorage.setItem(KEY, 'light');
        mockSystem('dark');
        const setItem = vi.spyOn(Storage.prototype, 'setItem');
        run();
        expect(rootClasses()).toBe('light');
        expect(setItem).not.toHaveBeenCalled();
    });

    it('treats an unknown stored value as empty', () => {
        localStorage.setItem(KEY, 'system');
        mockSystem('light');
        run();
        expect(rootClasses()).toBe('light');
        expect(localStorage.getItem(KEY)).toBe('light');
    });

    it('falls back to dark without writing when storage throws', () => {
        vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
            throw new Error('storage unavailable');
        });
        const setItem = vi.spyOn(Storage.prototype, 'setItem');
        mockSystem('light');
        run();
        expect(rootClasses()).toBe('dark');
        expect(setItem).not.toHaveBeenCalled();
    });

    it('falls back to dark without writing when the OS preference throws', () => {
        mockSystem('throws');
        const setItem = vi.spyOn(Storage.prototype, 'setItem');
        run();
        expect(rootClasses()).toBe('dark');
        expect(setItem).not.toHaveBeenCalled();
    });
});

describe('ThemeProvider', () => {
    it('saves and applies the choice made through setTheme', () => {
        mountProvider();
        fireEvent.click(screen.getByRole('button', { name: 'dark' }));

        expect(screen.getByRole('button', { name: 'light' })).toBeInTheDocument();
        expect(localStorage.getItem(KEY)).toBe('light');
        expect(rootClasses()).toBe('light');
    });

    it('ignores storage events for other keys and re-reads for its own', () => {
        localStorage.setItem(KEY, 'dark');
        mountProvider();

        localStorage.setItem(KEY, 'light');
        act(() => {
            window.dispatchEvent(new StorageEvent('storage', { key: 'unrelated' }));
        });
        expect(screen.getByRole('button', { name: 'dark' })).toBeInTheDocument();

        act(() => {
            window.dispatchEvent(new StorageEvent('storage', { key: KEY }));
        });
        expect(screen.getByRole('button', { name: 'light' })).toBeInTheDocument();
        expect(rootClasses()).toBe('light');
    });

    it('renders dark on the server even when storage holds light', () => {
        localStorage.setItem(KEY, 'light');
        const html = renderToString(
            <ThemeProvider>
                <Consumer />
            </ThemeProvider>,
        );
        expect(html).toContain('>dark<');
    });

    it('keeps the choice for this view when storage refuses the write', () => {
        mountProvider();
        vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
            throw new Error('quota exceeded');
        });
        fireEvent.click(screen.getByRole('button', { name: 'dark' }));

        expect(screen.getByRole('button', { name: 'light' })).toBeInTheDocument();
        expect(rootClasses()).toBe('light');

        vi.restoreAllMocks();
        act(() => {
            window.dispatchEvent(new StorageEvent('storage', { key: null }));
        });
    });
});
