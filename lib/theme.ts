export type Theme = 'dark' | 'light';

const STORAGE_KEY = 'portfolio-theme';

/** Theme for the server render and for any read that cannot reach storage or the OS. */
export const SERVER_THEME: Theme = 'dark';

/**
 * Runs before hydration so the first paint has the right class. It follows the same rule as
 * `resolveTheme`: a stored light or dark wins; anything else resolves the OS preference once and
 * saves it; a failed read applies the dark fallback and writes nothing. It is a plain script
 * because it runs before the module graph loads.
 */
export const themeBootScript = `(function () {
    var theme = '${SERVER_THEME}';
    try {
        var stored = localStorage.getItem('${STORAGE_KEY}');
        if (stored === 'light' || stored === 'dark') {
            theme = stored;
        } else {
            theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            try { localStorage.setItem('${STORAGE_KEY}', theme); } catch (e) {}
        }
    } catch (e) {}
    var root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
})();`;

const listeners = new Set<() => void>();

/** A choice that storage refused, kept so the toggle still works for this view. */
let unsavedChoice: Theme | null = null;

function isTheme(value: unknown): value is Theme {
    return value === 'light' || value === 'dark';
}

function writeTheme(theme: Theme) {
    localStorage.setItem(STORAGE_KEY, theme);
}

function resolveTheme(): { theme: Theme; needsSave: boolean } {
    if (unsavedChoice) return { theme: unsavedChoice, needsSave: false };
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (isTheme(stored)) return { theme: stored, needsSave: false };
        const system = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        return { theme: system, needsSave: true };
    } catch {
        return { theme: SERVER_THEME, needsSave: false };
    }
}

export function getTheme(): Theme {
    return resolveTheme().theme;
}

export function setTheme(next: Theme) {
    try {
        writeTheme(next);
        unsavedChoice = null;
    } catch {
        unsavedChoice = next;
    }
    listeners.forEach((listener) => listener());
}

export function subscribeTheme(onChange: () => void) {
    listeners.add(onChange);
    const onStorage = (event: StorageEvent) => {
        if (event.key !== null && event.key !== STORAGE_KEY) return;
        unsavedChoice = null;
        onChange();
    };
    window.addEventListener('storage', onStorage);
    return () => {
        listeners.delete(onChange);
        window.removeEventListener('storage', onStorage);
    };
}

/** Puts the resolved theme on the document and saves it when it came from the OS. */
export function syncDocumentTheme() {
    const { theme, needsSave } = resolveTheme();
    if (needsSave) {
        try {
            writeTheme(theme);
        } catch {
            /* storage unavailable: the theme still applies for this view */
        }
    }
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
}
