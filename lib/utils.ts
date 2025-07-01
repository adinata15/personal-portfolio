import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
export function triggerHref(href: string, isNewPage: boolean = false) {
    if (isNewPage === false) window.location.href = href;
    else window.open(href, '_blank');
}
