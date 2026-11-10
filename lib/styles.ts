export const focusRing =
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background';

const ctaBase = [
    'inline-flex items-center justify-center px-8 py-3 text-center rounded-full',
    'border-2 border-accent cursor-pointer transition-all duration-200',
    focusRing,
].join(' ');

export const ctaClass = [
    ctaBase,
    'bg-accent text-accent-foreground hover:opacity-90',
    'shadow-[0_0_24px_hsl(var(--accent)/0.35)] hover:shadow-[0_0_32px_hsl(var(--accent)/0.45)]',
].join(' ');

export const ctaSecondaryClass = [
    ctaBase,
    'text-accent glass hover:bg-accent hover:text-accent-foreground',
].join(' ');

export const glassPanelClass = 'glass rounded-2xl';

export const iconTileClass = `${glassPanelClass} flex h-14 w-14 items-center justify-center`;

export const portraitFrameClass =
    'flex items-center justify-center overflow-hidden rounded-full border-2 border-accent bg-neutral-300 dark:bg-neutral-700';

export const glassHoverClass =
    'glass opacity-0 transition-opacity duration-200 group-hover:opacity-100 motion-reduce:transition-none';

export const listHoverPlateClass = 'absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-2xl';

export const listHitAreaClass =
    'absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4';

export const cardClass = [
    'glass text-card-foreground rounded-2xl p-6',
    'transition-transform duration-200 hover:-translate-y-0.5',
    'hover:border-white/80 dark:hover:border-white/20',
    'motion-reduce:transition-none motion-reduce:hover:translate-y-0',
].join(' ');

export const chipClass =
    'inline-flex items-center rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-medium leading-5 text-foreground';

export const pageHeaderClass = 'mb-12 text-center md:text-left';

export const pageTitleClass = 'text-4xl md:text-5xl font-bold text-foreground text-balance';

export const pageIntroClass = 'mt-3 text-muted-foreground text-base md:text-lg max-w-2xl';

export const sectionTitleClass =
    'text-3xl font-bold text-foreground mb-6 text-balance text-center md:text-left';

export const linkAccentClass = `text-accent hover:underline underline-offset-2 transition-colors duration-200 rounded-sm ${focusRing}`;

export const inlineExternalLinkClass = [
    'inline-flex items-baseline font-medium leading-tight',
    'hover:text-accent focus-visible:text-accent group/link rounded-sm',
    focusRing,
].join(' ');

export const iconButtonClass = [
    'inline-flex h-11 w-11 items-center justify-center rounded-lg glass',
    'hover:bg-accent/10 transition-colors duration-200 cursor-pointer',
    focusRing,
].join(' ');
