'use client';

import { Dispatch, SetStateAction, forwardRef } from 'react';
import { iconButtonClass } from '@/lib/styles';
import { cn } from '@/lib/utils';

export const HamburgerMenu = forwardRef<
    HTMLButtonElement,
    {
        expanded: boolean;
        setExpanded: Dispatch<SetStateAction<boolean>>;
        controlsId: string;
    }
>(function HamburgerMenu({ expanded, setExpanded, controlsId }, ref) {
    const barClass = 'block h-0.5 w-5 bg-foreground';

    return (
        <button
            ref={ref}
            type="button"
            aria-expanded={expanded}
            aria-controls={controlsId}
            aria-label={expanded ? 'Close menu' : 'Open menu'}
            onClick={() => setExpanded((prev) => !prev)}
            className={cn(iconButtonClass, 'flex-col space-y-1')}
        >
            <span className={barClass} aria-hidden="true" />
            <span className={barClass} aria-hidden="true" />
            <span className={barClass} aria-hidden="true" />
        </button>
    );
});
