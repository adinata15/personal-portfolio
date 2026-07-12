export const focusRing =
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2';

export const ctaClass = [
    'px-8 py-3 text-center border-2 border-green-600 text-green-600 rounded-full',
    'hover:bg-green-600 hover:text-white',
    'dark:border-green-400 dark:text-green-400 dark:hover:bg-green-400 dark:hover:text-gray-900',
    'transition-colors',
    focusRing,
].join(' ');
