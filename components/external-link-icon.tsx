import { cn } from '@/lib/utils';

const path =
    'M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z';

const nudgeClass = {
    sm: 'h-3.5 w-3.5 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 group-focus-visible/link:-translate-y-0.5 group-focus-visible/link:translate-x-0.5',
    md: 'h-4 w-4 group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1',
} as const;

/** Decorative arrow that nudges up-right when an ancestor with `group/link` is hovered or focused. */
export function ExternalLinkIcon({
    size = 'md',
    className,
}: {
    size?: keyof typeof nudgeClass;
    className?: string;
}) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className={cn(
                'ml-1 inline-block shrink-0 translate-y-px transition-transform motion-reduce:transition-none',
                nudgeClass[size],
                className,
            )}
            aria-hidden="true"
        >
            <path fillRule="evenodd" d={path} clipRule="evenodd" />
        </svg>
    );
}
