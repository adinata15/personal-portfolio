'use client';

import { Dispatch, SetStateAction, forwardRef } from 'react';
import { focusRing } from '@/lib/styles';
import { cn } from '@/lib/utils';

export const HamburgerMenu = forwardRef<
    HTMLButtonElement,
    {
        expanded: boolean;
        setExpanded: Dispatch<SetStateAction<boolean>>;
        controlsId: string;
    }
>(function HamburgerMenu({ expanded, setExpanded, controlsId }, ref) {
    return (
        <button
            ref={ref}
            type="button"
            aria-expanded={expanded}
            aria-controls={controlsId}
            aria-label={expanded ? 'Close menu' : 'Open menu'}
            onClick={() => setExpanded((prev) => !prev)}
            className={cn(
                'flex w-9 h-9 flex-col items-center justify-center rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors space-y-1',
                focusRing,
            )}
        >
            <span className="block h-0.5 w-5 bg-gray-600 dark:bg-gray-300" aria-hidden="true" />
            <span className="block h-0.5 w-5 bg-gray-600 dark:bg-gray-300" aria-hidden="true" />
            <span className="block h-0.5 w-5 bg-gray-600 dark:bg-gray-300" aria-hidden="true" />
        </button>
    );
});
